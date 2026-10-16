import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const htmlPath = new URL('../case-169/index.html', import.meta.url);
const assetsDir = new URL('../assets/case-169/', import.meta.url);
let html = readFileSync(htmlPath, 'utf8');
const tempDir = mkdtempSync(join(tmpdir(), 'case-169-images-'));
const generated = new Map();

try {
  html = html.replace(/data:image\/(jpeg|png);base64,([A-Za-z0-9+/=]+)/g, (uri, type, payload) => {
    if (generated.has(uri)) return generated.get(uri);

    const hash = createHash('sha256').update(payload).digest('hex').slice(0, 12);
    const sourcePath = join(tempDir, `${hash}.${type === 'jpeg' ? 'jpg' : 'png'}`);
    const outputName = `embedded-${hash}.webp`;
    const outputPath = new URL(outputName, assetsDir);
    const source = Buffer.from(payload, 'base64');
    writeFileSync(sourcePath, source);

    const dimensions = execFileSync('identify', ['-format', '%w %h', sourcePath], { encoding: 'utf8' })
      .trim()
      .split(' ')
      .map(Number);
    const [width, height] = dimensions;
    const isTinyDisplayAsset = source.length > 1_000_000 && width >= 3000 && height >= 3000;
    const maxDimension = isTinyDisplayAsset ? 160 : 1800;
    const quality = type === 'png' ? '92' : '88';

    execFileSync('convert', [
      sourcePath,
      '-auto-orient',
      '-strip',
      '-resize', `${maxDimension}x${maxDimension}>`,
      '-quality', quality,
      outputPath.pathname
    ]);

    const publicPath = `/assets/case-169/${outputName}`;
    generated.set(uri, publicPath);
    return publicPath;
  });

  html = html.replace(/<img\b[^>]*>/gi, (tag) => {
    if (!tag.includes('/assets/case-169/embedded-')) return tag;
    const isHeaderAvatar = /sizes="[^"]*32px/.test(tag);
    let next = tag;
    if (!/\bdecoding=/.test(next)) next = next.replace('<img', '<img decoding="async"');
    if (!isHeaderAvatar && !/\bloading=/.test(next)) next = next.replace('<img', '<img loading="lazy"');
    return next;
  });

  writeFileSync(htmlPath, html);
  console.log(JSON.stringify({ uniqueImages: generated.size, htmlBytes: Buffer.byteLength(html) }));
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}
