/* Content overrides for /. Edit this small file for page-specific content changes. */
(function () {
  'use strict';

  var style = document.createElement('style');
  style.id = 'home-feed-publications-style';
  style.textContent = [
    '#feed .framer-uvcvyr { display: block !important; }',
    '#feed .home-feed-grid {',
    '  width: 100%;',
    '  display: grid;',
    '  grid-template-columns: repeat(2, minmax(0, 1fr));',
    '  gap: 24px;',
    '}',
    '#feed .home-feed-card {',
    '  min-width: 0;',
    '  display: flex;',
    '  flex-direction: column;',
    '  overflow: hidden;',
    '  border: 1px solid #dedede;',
    '  border-radius: 16px;',
    '  background: #fff;',
    '  color: #141413;',
    '  text-decoration: none;',
    '  transition: transform .24s cubic-bezier(.22, 1, .36, 1), border-color .24s ease, box-shadow .24s ease;',
    '}',
    '#feed .home-feed-card__media {',
    '  width: 100%;',
    '  aspect-ratio: 4 / 3;',
    '  overflow: hidden;',
    '  background: #f3f4f6;',
    '}',
    '#feed .home-feed-card__media img {',
    '  width: 100%;',
    '  height: 100%;',
    '  display: block;',
    '  object-fit: cover;',
    '  object-position: center 56%;',
    '  transition: transform .42s cubic-bezier(.22, 1, .36, 1);',
    '}',
    '#feed .home-feed-card__body {',
    '  min-height: 184px;',
    '  display: flex;',
    '  flex-direction: column;',
    '  gap: 12px;',
    '  padding: 24px;',
    '}',
    '#feed .home-feed-card__meta {',
    '  color: #6b7280;',
    '  font-size: 14px;',
    '  font-weight: 600;',
    '  line-height: 1.4;',
    '}',
    '#feed .home-feed-card__title {',
    '  margin: 0;',
    '  color: #141413;',
    '  font-size: clamp(24px, 2.5vw, 36px);',
    '  font-weight: 500;',
    '  line-height: 1.08;',
    '  letter-spacing: -.035em;',
    '}',
    '#feed .home-feed-card__description {',
    '  margin: auto 0 0;',
    '  color: #545454;',
    '  font-size: 16px;',
    '  line-height: 1.5;',
    '}',
    '#feed .home-feed-card:focus-visible { outline: 2px solid #141413; outline-offset: 4px; }',
    '@media (hover: hover) and (pointer: fine) {',
    '  #feed .home-feed-card:hover {',
    '    transform: translateY(-3px);',
    '    border-color: #b8b8b8;',
    '    box-shadow: 0 18px 36px -28px rgb(20 20 19 / .45);',
    '  }',
    '  #feed .home-feed-card:hover .home-feed-card__media img { transform: scale(1.025); }',
    '}',
    '@media (max-width: 767.98px) {',
    '  #feed .home-feed-grid { grid-template-columns: minmax(0, 1fr); gap: 16px; }',
    '  #feed .home-feed-card__body { min-height: 0; padding: 20px; }',
    '  #feed .home-feed-card__title { font-size: 26px; }',
    '}',
    '@media (prefers-reduced-motion: reduce) {',
    '  #feed .home-feed-card, #feed .home-feed-card__media img { transition: none; }',
    '}'
  ].join('\n');
  document.head.appendChild(style);
})();

window.SitePageContent = {
  replacements: [
    {
      selector: '#feed .framer-1uq8uo9-container > a',
      attributes: {
        href: 'feed/',
        'aria-disabled': 'false',
        'aria-label': 'Открыть всю ленту'
      }
    },
    {
      selector: '#feed .framer-uvcvyr',
      html: [
        '<div class="home-feed-grid">',
        '  <a class="home-feed-card" href="https://www.linkedin.com/posts/daria-maksimova-126a39414_%D0%BE%D1%82-%D0%BC%D0%B5%D0%BD%D1%8F-%D1%81%D1%8A%D0%B5%D1%85%D0%B0%D0%BB%D0%B8-%D1%81%D0%BE%D1%81%D0%B5%D0%B4%D0%B8-%D0%BF%D1%80%D0%B8%D1%87%D0%B5%D0%BC-%D1%82%D0%B0%D0%BA-%D0%BD%D0%B5%D0%BE%D0%B6%D0%B8%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE-activity-7506774582113157120-fsFX" target="_blank" rel="noopener noreferrer">',
        '    <div class="home-feed-card__media"><img src="assets/feed/2026-09-18-neighbor-door.jpg" alt="Дорхенгер 169.ru на дверной ручке" width="1280" height="2275" loading="lazy" decoding="async"></div>',
        '    <div class="home-feed-card__body">',
        '      <div class="home-feed-card__meta">18 сентября · LinkedIn</div>',
        '      <h3 class="home-feed-card__title">От меня съехали соседи…</h3>',
        '      <p class="home-feed-card__description">Дорхенгер, который мотивирует на покупку после установки двери у соседей.</p>',
        '    </div>',
        '  </a>',
        '  <a class="home-feed-card" href="https://www.linkedin.com/posts/daria-maksimova-126a39414_%D0%BA%D0%BE%D0%BB%D0%BB%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D1%81-%D1%81%D0%B0%D0%BC%D0%BE%D0%BB%D1%91%D1%82-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D0%BB%D0%B0-%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%BA%D1%83-activity-7506227142959988737-493Q" target="_blank" rel="noopener noreferrer">',
        '    <div class="home-feed-card__media"><img src="assets/feed/2026-09-17-samolet-collaboration.jpg" alt="Листовка 169.ru для коллаборации с Самолётом" width="1280" height="2275" loading="lazy" decoding="async"></div>',
        '    <div class="home-feed-card__body">',
        '      <div class="home-feed-card__meta">17 сентября · LinkedIn</div>',
        '      <h3 class="home-feed-card__title">Коллаборация с Самолёт</h3>',
        '      <p class="home-feed-card__description">Листовка для коллаборации с Самолётом — про знакомые бытовые моменты в новой квартире.</p>',
        '    </div>',
        '  </a>',
        '</div>'
      ].join('')
    }
  ]
};
