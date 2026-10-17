/* Content overrides for /feed/. Edit this small file for page-specific content changes. */
(function () {
  'use strict';

  var style = document.createElement('style');
  style.id = 'feed-header-clearance';
  style.textContent = [
    '.linkedin-publications {',
    '  box-sizing: border-box;',
    '  padding-top: 92px;',
    '}',
    '@media (max-width: 767.98px) {',
    '  .linkedin-publications { padding-top: 64px; }',
    '}'
  ].join('\n');
  document.head.appendChild(style);
})();

window.SitePageContent = {
  replacements: []
};
