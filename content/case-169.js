/* Content and layout overrides for /case-169/. */
window.SitePageContent = {
  sectionOrders: [
    {
      container: '.case-tasks',
      headingSelector: '.case-section-label',
      labels: [
        'Редизайн двух e-commerce-платформ',
        'Аналитика и измеримость продукта',
        'Каталог и карточка товара',
        'Корзина и оформление заказа',
        'Система личных кабинетов для покупателей, замерщиков и бизнеса',
        'Ключевые сценарии магазина в self-service',
        'От списаний к выручке'
      ]
    }
  ],
  replacements: [
    {
      selector: '.case-result-badge-text',
      matchText: 'Превратила статью списаний в дополнительный канал выручки — и в готовый к тиражированию процесс для других категорий товара.',
      text: 'Более 2,5 млн ₽ прибыли за два года и дополнительный трафик из Avito: низкие цены на уценённые входные двери привлекали новых покупателей вместо списания товара'
    }
  ]
};

/* Build the agreed outline without editing the exported HTML.
   Empty sections are intentional templates; add approved copy here later. */
(function () {
  'use strict';
  var container = document.querySelector('.case-tasks');
  if (!container) return;

  function findHeading(label) {
    return Array.prototype.find.call(container.children, function (node) {
      return node.matches('.case-section-label') && node.textContent.trim() === label;
    });
  }

  var catalog = findHeading('Каталог и карточка товара');
  if (!catalog) return;

  var paragraphId = 'case-169-catalog-availability';
  if (!document.getElementById(paragraphId)) {
    var paragraph = document.createElement('p');
    paragraph.id = paragraphId;
    paragraph.className = 'case-summary-text';
    paragraph.textContent = 'Систематизировала товарные данные и доступность ассортимента: добавила наличие от поставщиков, информацию об образцах в магазинах и автоматические теги для навигации по каталогу. Параллельно переработала шаблон карточки кухни и правила отображения комплектации.';
    var anchor = catalog.nextElementSibling;
    while (anchor && anchor.matches('.case-summary-text')) {
      anchor = anchor.nextElementSibling;
    }
    container.insertBefore(paragraph, anchor);
  }

  [
    ['case-169-redesign', 'Редизайн двух e-commerce-платформ'],
    ['case-169-analytics', 'Аналитика и измеримость продукта'],
    ['case-169-checkout', 'Корзина и оформление заказа']
  ].forEach(function (section) {
    if (findHeading(section[1])) return;
    var heading = document.createElement('h3');
    heading.id = section[0];
    heading.className = 'case-section-label';
    heading.textContent = section[1];
    container.appendChild(heading);
  });

  // The export preserves whitespace. Moving only elements otherwise leaves
  // all separator newlines before the first section and produces a large gap.
  Array.prototype.slice.call(container.childNodes).forEach(function (node) {
    if (node.nodeType === 3 && !node.textContent.trim()) node.remove();
  });
})();
