(function () {
  'use strict';

  if (document.getElementById('site-header')) return;

  var componentConfig = window.PortfolioUIConfig || {};
  var root = new URL('../../', document.currentScript.src).href;
  var rootPath = new URL(root).pathname;
  var pathname = location.pathname.replace(/\\/g, '/');
  var relativePath = pathname.indexOf(rootPath) === 0 ? pathname.slice(rootPath.length) : pathname;
  var isSubpage = relativePath !== '' && relativePath !== 'index.html';
  var home = isSubpage ? root : '';
  var casesHref = isSubpage ? new URL('cases/', root).href : '#projects';
  var feedHref = isSubpage ? new URL('feed/', root).href : '#feed';
  var pageKey = componentConfig.pageKey || (relativePath.indexOf('cases/') === 0 || relativePath.indexOf('case-169/') === 0 ? 'cases'
    : relativePath.indexOf('feed/') === 0 || relativePath.indexOf('blog/') === 0 ? 'feed'
    : null);

  var nav = document.createElement('header');
  nav.className = 'site-header';
  nav.id = 'site-header';
  nav.setAttribute('aria-label', 'Основная навигация');
  nav.innerHTML =
    '<a class="site-header__identity" href="' + home + '#hero" aria-label="На главную">' +
      '<img class="site-header__avatar" src="' + root + 'photos/IMG_6940.JPG" alt="" width="44" height="44">' +
      '<span class="site-header__name">Дарья Максимова</span>' +
    '</a>' +
    '<button class="site-header__menu-toggle" type="button" aria-label="Открыть меню" aria-expanded="false" aria-controls="site-header-panel">' +
      '<span class="site-header__menu-dot"></span><span class="site-header__menu-dot"></span><span class="site-header__menu-dot"></span>' +
    '</button>' +
    '<div class="site-header__panel" id="site-header-panel">' +
      '<nav class="site-header__nav" aria-label="Разделы сайта">' +
        '<a data-nav-key="cases" href="' + casesHref + '">Кейсы</a>' +
        '<a data-nav-key="resume" href="' + home + '#about">Резюме</a>' +
        '<a data-nav-key="feed" href="' + feedHref + '">Лента</a>' +
        '<a data-nav-key="contact" href="' + home + '#contact">Контакты</a>' +
      '</nav>' +
      '<a class="site-header__contact" href="' + home + '#contact">Связаться</a>' +
    '</div>';

  document.body.prepend(nav);

  var toggle = nav.querySelector('.site-header__menu-toggle');
  var panel = nav.querySelector('.site-header__panel');
  var links = Array.prototype.slice.call(nav.querySelectorAll('[data-nav-key]'));
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sectionByKey = { cases: 'projects', resume: 'about', feed: 'feed', contact: 'contact' };
  var activeKey = null;
  var frameRequested = false;
  var programmaticKey = null;
  var programmaticUntil = 0;

  function syncScrollState() {
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
  }

  function setMenu(open) {
    if (window.innerWidth >= 768) open = false;
    nav.dataset.menuOpen = open ? 'true' : 'false';
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    /* Keep the closed mobile panel out of the keyboard sequence. Desktop
       keeps its one-line navigation available at all times. */
    var panelIsHidden = window.innerWidth < 768 && !open;
    panel.inert = panelIsHidden;
    panel.setAttribute('aria-hidden', panelIsHidden ? 'true' : 'false');
  }

  function setActive(key) {
    if (key === activeKey) return;
    activeKey = key || null;
    links.forEach(function (link) {
      var isActive = link.dataset.navKey === activeKey;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function currentHomeSection() {
    if (isSubpage) return;
    if (programmaticKey && Date.now() < programmaticUntil) {
      setActive(programmaticKey);
      return;
    }
    programmaticKey = null;
    var marker = window.scrollY + Math.max(nav.getBoundingClientRect().height + 48, window.innerHeight * .33);
    var current = null;
    Object.keys(sectionByKey).map(function (key) {
      var section = document.getElementById(sectionByKey[key]);
      return section ? { key: key, top: section.getBoundingClientRect().top + window.scrollY } : null;
    }).filter(Boolean).sort(function (a, b) {
      return a.top - b.top;
    }).forEach(function (section) {
      if (section.top <= marker) current = section.key;
    });
    setActive(current);
  }

  function syncLocation() {
    if (pageKey) {
      setActive(pageKey);
      return;
    }
    var hash = location.hash.replace('#', '');
    var hashKey = Object.keys(sectionByKey).find(function (key) { return sectionByKey[key] === hash; });
    if (hashKey) {
      setActive(hashKey);
      return;
    }
    currentHomeSection();
  }

  function goToHomeSection(key) {
    var section = document.getElementById(sectionByKey[key]);
    if (!section) return;
    programmaticKey = key;
    programmaticUntil = Date.now() + (reduceMotion ? 0 : 1400);
    setActive(key);
    history.pushState(null, '', '#' + sectionByKey[key]);
    var headerGap = nav.getBoundingClientRect().height + 42;
    var targetTop = Math.max(0, section.getBoundingClientRect().top + window.scrollY - headerGap);
    window.scrollTo({ top: targetTop, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  toggle.addEventListener('click', function () { setMenu(nav.dataset.menuOpen !== 'true'); });
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      setMenu(false);
      if (!isSubpage && link.getAttribute('href').charAt(0) === '#') {
        event.preventDefault();
        goToHomeSection(link.dataset.navKey);
      } else if (!isSubpage) setActive(link.dataset.navKey);
    });
  });
  nav.querySelector('.site-header__contact').addEventListener('click', function (event) {
    setMenu(false);
    if (!isSubpage) {
      event.preventDefault();
      goToHomeSection('contact');
    }
  });
  nav.querySelector('.site-header__identity').addEventListener('click', function (event) {
    if (isSubpage) return;
    event.preventDefault();
    programmaticKey = null;
    setActive(null);
    history.pushState(null, '', '#hero');
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
  document.addEventListener('click', function (event) { if (!nav.contains(event.target)) setMenu(false); });
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape') { setMenu(false); toggle.focus(); } });
  window.addEventListener('resize', function () { setMenu(false); syncScrollState(); syncLocation(); });
  window.addEventListener('hashchange', syncLocation);
  window.addEventListener('scroll', function () {
    if (frameRequested) return;
    frameRequested = true;
    requestAnimationFrame(function () {
      frameRequested = false;
      syncScrollState();
      if (!isSubpage) currentHomeSection();
    });
  }, { passive: true });

  if (reduceMotion) nav.dataset.motion = 'reduced';
  setMenu(false);
  syncScrollState();
  syncLocation();

  var contentLoader = document.createElement('script');
  contentLoader.src = new URL('scripts/content-loader.js', root).href + '?v=' + Date.now();
  contentLoader.async = false;
  document.head.appendChild(contentLoader);

  /* The UI Kit preview uses the same header source. Query states are isolated
     to preview documents and never affect portfolio pages. */
  var previewParams = new URLSearchParams(location.search);
  if (previewParams.get('menu') === 'open') setMenu(true);
  if (previewParams.get('scroll') === 'true') nav.classList.add('is-scrolled');
  if (previewParams.get('active')) setActive(previewParams.get('active'));
  if (previewParams.get('focus')) {
    var focusTarget = nav.querySelector('[data-nav-key="' + previewParams.get('focus') + '"]');
    if (focusTarget) setTimeout(function () { focusTarget.focus(); }, 0);
  }

  window.PortfolioUI = window.PortfolioUI || {};
  window.PortfolioUI.Header = {
    element: nav,
    setMenu: setMenu,
    setActive: setActive
  };
})();
