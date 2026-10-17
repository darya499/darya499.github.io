import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = join(root, 'index.html');
const assetDirectory = join(root, 'assets', 'home-inline');
const dataUriPattern = /data:image\/(jpeg|png);base64,([A-Za-z0-9+/=]+)/g;

mkdirSync(assetDirectory, { recursive: true });

let html = readFileSync(htmlPath, 'utf8');
const assets = new Map();

html = html.replace(dataUriPattern, (uri, _declaredType, payload) => {
  if (assets.has(uri)) return assets.get(uri);

  const source = Buffer.from(payload, 'base64');
  const isPng = source.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  const extension = isPng ? 'png' : 'jpg';
  const digest = createHash('sha256').update(source).digest('hex').slice(0, 12);
  const filename = `${digest}.${extension}`;
  const relativePath = `assets/home-inline/${filename}`;

  writeFileSync(join(assetDirectory, filename), source);
  assets.set(uri, relativePath);
  return relativePath;
});

html = html.replace(/<img\b([^>]*\bsrc="assets\/home-inline\/[^"]+"[^>]*)>/g, (tag, attributes) => {
  if (/\bloading=/.test(attributes)) return tag;
  return `<img loading="lazy"${attributes}>`;
});

writeFileSync(htmlPath, html);

const extractedBytes = [...assets.keys()].reduce((sum, uri) => sum + uri.length, 0);
console.log(`Externalized ${assets.size} unique images (${extractedBytes} embedded characters removed).`);
