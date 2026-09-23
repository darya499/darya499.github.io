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


  var analytics = findHeading('Аналитика и измеримость продукта');
  if (analytics && !document.getElementById('case-169-analytics-copy')) {
    var analyticsCopy = document.createElement('p');
    analyticsCopy.id = 'case-169-analytics-copy';
    analyticsCopy.className = 'case-summary-text';
    analyticsCopy.textContent = 'Расхождение между отправками форм на сайте и лидами в CRM мешало оценивать результат продуктовых изменений: было непонятно, где пользователь отказывался от обращения, а где заявка терялась технически. Разобрала путь от отправки формы до принятия заявки менеджером и определила, какие события и контекст нужны на каждом этапе. Пересмотрела цели в Яндекс Метрике и их передачу в рекламу, поставила задачи разработчику и проверила прохождение заявок после исправлений. Расхождение сайт–CRM удалось свести к нулю. Прослушивание звонков показало, что путь требует доработки и после отправки формы: вместе с заявкой начали передавать контекст обращения и сценарий начала разговора, чтобы менеджер мог продолжить взаимодействие с учётом действий клиента на сайте.';
    analytics.after(analyticsCopy);
  }
  if (analytics && !document.getElementById('case-169-analytics-result')) {
    var analyticsBadge = document.createElement('div');
    analyticsBadge.id = 'case-169-analytics-result';
    analyticsBadge.className = 'case-result-badge';
    var analyticsIcon = document.createElement('span');
    analyticsIcon.className = 'case-result-badge-icon';
    analyticsIcon.textContent = '→';
    var analyticsResult = document.createElement('p');
    analyticsResult.className = 'case-result-badge-text';
    analyticsResult.textContent = 'Целевые лид-формы из контекстной рекламы: +194% на мебельном сайте и +52% на дверном.';
    analyticsBadge.append(analyticsIcon, analyticsResult);
    document.getElementById('case-169-analytics-copy').after(analyticsBadge);
  }

  var checkout = findHeading('Корзина и оформление заказа');
  if (checkout && !document.getElementById('case-169-checkout-copy')) {
    var checkoutCopy = document.createElement('p');
    checkoutCopy.id = 'case-169-checkout-copy';
    checkoutCopy.className = 'case-summary-text';
    checkoutCopy.textContent = 'Старая корзина на обоих сайтах поддерживала только заявку через менеджера, поэтому клиент не мог завершить покупку самостоятельно. На основе CJM, анализа поведения в Вебвизоре и A/B-тестов переработала путь от выбора товара до заказа: разделила корзину и оформление на два этапа, добавила самостоятельный выбор даты доставки, дополнительных услуг и рассрочки. Для покупателей, которым нужна консультация, сохранила быстрый сценарий передачи состава корзины менеджеру без заполнения полной формы. В результате продукт стал поддерживать два пользовательских пути: самостоятельную покупку и оформление с помощью специалиста.';
    checkout.after(checkoutCopy);
  }
  if (checkout && !document.getElementById('case-169-checkout-result')) {
    var checkoutBadge = document.createElement('div');
    checkoutBadge.id = 'case-169-checkout-result';
    checkoutBadge.className = 'case-result-badge';
    var checkoutIcon = document.createElement('span');
    checkoutIcon.className = 'case-result-badge-icon';
    checkoutIcon.textContent = '→';
    var checkoutResult = document.createElement('p');
    checkoutResult.className = 'case-result-badge-text';
    checkoutResult.textContent = 'Количество выставленных счетов выросло в 2 раза.';
    checkoutBadge.append(checkoutIcon, checkoutResult);
    document.getElementById('case-169-checkout-copy').after(checkoutBadge);
  }

  // The export preserves whitespace. Moving only elements otherwise leaves
  // all separator newlines before the first section and produces a large gap.
  Array.prototype.slice.call(container.childNodes).forEach(function (node) {
    if (node.nodeType === 3 && !node.textContent.trim()) node.remove();
  });
})();
