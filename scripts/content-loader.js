(function () {
  'use strict';

  var scriptUrl = new URL(document.currentScript.src);
  var siteRoot = new URL('../', scriptUrl);
  var rootPath = siteRoot.pathname;
  var pathname = location.pathname.replace(/\\/g, '/');
  var relativePath = pathname.indexOf(rootPath) === 0 ? pathname.slice(rootPath.length) : pathname;

  relativePath = relativePath.replace(/^\/+|\/+$/g, '').replace(/\/index\.html$/i, '');
  var pageKey = relativePath ? relativePath.replace(/\//g, '-') : 'home';
  var contentScript = document.createElement('script');

  function applySectionOrders(config) {
    if (!config || !Array.isArray(config.sectionOrders)) return;

    config.sectionOrders.forEach(function (order) {
      if (!order || !order.container || !Array.isArray(order.labels)) return;

      var container = document.querySelector(order.container);
      if (!container) return;

      var children = Array.prototype.slice.call(container.children);
      var headings = {};

      order.labels.forEach(function (label) {
        headings[label] = children.findIndex(function (child) {
          return child.matches(order.headingSelector || '.case-section-label') && child.textContent.trim() === label;
        });
      });

      if (order.labels.some(function (label) { return headings[label] < 0; })) return;

      var currentOrder = order.labels.slice().sort(function (a, b) { return headings[a] - headings[b]; });
      var groups = {};

      currentOrder.forEach(function (label, index) {
        var start = headings[label];
        var end = index + 1 < currentOrder.length ? headings[currentOrder[index + 1]] : children.length;
        groups[label] = children.slice(start, end);
      });

      order.labels.forEach(function (label) {
        groups[label].forEach(function (node) { container.appendChild(node); });
      });
    });
  }

  function applyContent(config) {
    applySectionOrders(config);
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

  contentScript.src = new URL('content/' + pageKey + '.js', siteRoot).href + '?v=' + Date.now();
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
