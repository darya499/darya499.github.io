(function () {
  'use strict';

  var scriptUrl = new URL(document.currentScript.src);
  var siteRoot = new URL('../', scriptUrl);
  var rootPath = siteRoot.pathname;
  var pathname = location.pathname.replace(/\\/g, '/');
  var relativePath = pathname.indexOf(rootPath) === 0 ? pathname.slice(rootPath.length) : pathname;

  relativePath = relativePath.replace(/^\/+|\/+$/g, '').replace(/\/index\.html$/i, '');
  var pageKey = relativePath ? relativePath.replace(/\//g, '--') : 'home';
  var contentScript = document.createElement('script');

  function applyContent(config) {
    if (!config || !Array.isArray(config.replacements)) return;

    config.replacements.forEach(function (replacement) {
      if (!replacement || !replacement.selector) return;

      var elements = document.querySelectorAll(replacement.selector);
      Array.prototype.forEach.call(elements, function (element) {
        if (replacement.matchText && element.textContent.trim() !== replacement.matchText) return;

        if (Object.prototype.hasOwnProperty.call(replacement, 'text')) {
          element.textContent = replacement.text;
        }
        if (Object.prototype.hasOwnProperty.call(replacement, 'html')) {
          element.innerHTML = replacement.html;
        }
        if (replacement.attributes) {
          Object.keys(replacement.attributes).forEach(function (name) {
            element.setAttribute(name, replacement.attributes[name]);
          });
        }
      });
    });
  }

  window.SiteContent = {
    apply: applyContent,
    pageKey: pageKey
  };

  contentScript.src = new URL('content/' + pageKey + '.js', siteRoot).href;
  contentScript.defer = true;
  contentScript.onload = function () {
    applyContent(window.SitePageContent);
    delete window.SitePageContent;
  };
  contentScript.onerror = function () {
    /* A page without a content file keeps its original exported content. */
  };
  document.head.appendChild(contentScript);
})();
