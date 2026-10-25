/* Content overrides for /cases/. */
(function () {
  'use strict';

  [
    '../cases/essentia/',
    '../cases/orbital/',
    '../cases/quantum/'
  ].forEach(function (href) {
    document.querySelectorAll('a[href="' + href + '"]').forEach(function (link) {
      var card = link.closest('.ssr-variant') || link.parentElement;
      if (card) card.remove();
    });
  });
})();

window.SitePageContent = {
  replacements: [
    {
      selector: 'a[href="../cases/axiom/"]',
      attributes: {
        href: '/case-169/'
      }
    }
  ]
};
