(function () {
  'use strict';

  var ui = window.PortfolioUI = window.PortfolioUI || {};

  function create(options) {
    options = options || {};
    var isLink = !!options.href;
    var element = document.createElement(isLink ? 'a' : 'button');
    element.className = 'site-button' + (options.loading ? ' is-loading' : '');
    element.dataset.uiComponent = 'Button';
    element.dataset.uiVariant = 'primary';
    if (isLink) element.href = options.href;
    else element.type = options.type || 'button';
    if (options.disabled) {
      element.setAttribute('aria-disabled', 'true');
      if (!isLink) element.disabled = true;
    }
    if (options.loading) element.setAttribute('aria-busy', 'true');
    if (options.icon) {
      var icon = document.createElement('span');
      icon.className = options.loading ? 'site-button__spinner' : 'site-button__icon';
      if (!options.loading) icon.textContent = options.icon;
      icon.setAttribute('aria-hidden', 'true');
      element.appendChild(icon);
    }
    var label = document.createElement('span');
    label.textContent = options.label || 'Кнопка';
    element.appendChild(label);
    return element;
  }

  function enhance(scope) {
    var root = scope || document;
    root.querySelectorAll([
      'a[data-framer-name="Main CTA"]',
      'a[data-framer-name="Default"].framer-wIYkJ',
      '.resume-download > a'
    ].join(',')).forEach(function (element) {
      element.dataset.uiComponent = 'Button';
      element.dataset.uiVariant = 'primary';
    });
  }

  function syncContactCta() {
    var heroCta = document.querySelector('a[data-framer-name="Main CTA"]');
    var contactCta = Array.from(document.querySelectorAll('a[data-framer-name="Default"]')).find(function (link) {
      return (link.innerText || '').replace(/\s+/g, ' ').trim() === 'Написать'
        && (link.getAttribute('href') || '').indexOf('t.me/design_dora') !== -1;
    });
    if (!heroCta || !contactCta || contactCta.dataset.uiSynced === 'true') return;
    contactCta.className = heroCta.className;
    contactCta.setAttribute('data-framer-name', 'Main CTA');
    contactCta.setAttribute('aria-label', 'Связаться в Telegram');
    contactCta.setAttribute('name', 'Contact CTA');
    contactCta.replaceChildren.apply(contactCta, Array.from(heroCta.children).map(function (child) {
      return child.cloneNode(true);
    }));
    var contactLabel = contactCta.querySelector('p');
    if (contactLabel) contactLabel.textContent = 'Связаться';
    contactCta.dataset.uiSynced = 'true';
  }

  function mountDemo(target) {
    var root = typeof target === 'string' ? document.querySelector(target) : target;
    if (!root) return;
    var actions = [
      create({ label: 'Связаться', href: 'https://t.me/design_dora', icon: '↗' }),
      create({ label: 'Недоступна', disabled: true }),
      create({ label: 'Загрузка', loading: true, icon: true })
    ];
    actions.forEach(function (action) { root.appendChild(action); });
  }

  ui.Button = { create: create, enhance: enhance, mountDemo: mountDemo, syncContactCta: syncContactCta };

  function mount() {
    syncContactCta();
    enhance();
    mountDemo(document.querySelector('[data-ui-kit-button-demo]'));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
})();
