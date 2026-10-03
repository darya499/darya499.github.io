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

  // Remove the three diary evidence cards and their heading; keep the retail section.
  var diarySection = document.querySelector('.case-evidence');
  if (
    diarySection &&
    document.querySelectorAll('.case-evidence').length === 1 &&
    diarySection.children.length === 4 &&
    diarySection.firstElementChild.matches('h2.case-section-title') &&
    diarySection.firstElementChild.textContent.trim() === 'Гипотезы и результат — из дневника' &&
    diarySection.querySelectorAll(':scope > .case-evidence-card').length === 3
  ) {
    diarySection.remove();
  }

  // Remove the legacy Bitrix homepage card and its paired image.
  var legacyHomepageHeading = Array.prototype.find.call(
    document.querySelectorAll('.framer-ry328i h2'),
    function (node) {
      return node.textContent.trim() === 'Редизайн главной страницы mebel169.ru.';
    }
  );
  if (legacyHomepageHeading) {
    var legacyHomepageCard = legacyHomepageHeading.closest('.framer-dpij7l');
    if (legacyHomepageCard && legacyHomepageCard.parentElement.matches('.framer-ry328i')) {
      legacyHomepageCard.remove();
    }
  }

  // The exported Framer media starts transparent. After removing the first
  // card, its scroll animation no longer reveals the remaining card images.
  var caseImageStyle = document.getElementById('case-169-visible-evidence-images');
  if (!caseImageStyle) {
    caseImageStyle = document.createElement('style');
    caseImageStyle.id = 'case-169-visible-evidence-images';
    caseImageStyle.textContent =
      '.framer-ry328i > .framer-dpij7l .framer-1rt4bxk [data-framer-name="Image 1"], ' +
      '.framer-ry328i > .framer-dpij7l .framer-1rt4bxk [data-framer-name="Image 2"] ' +
      '{ opacity: 1 !important; }';
    document.head.appendChild(caseImageStyle);
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



  var redesign = findHeading('Редизайн двух e-commerce-платформ');
  if (redesign && !document.getElementById('case-169-redesign-copy')) {
    var redesignCopy = document.createElement('p');
    redesignCopy.id = 'case-169-redesign-copy';
    redesignCopy.className = 'case-summary-text';
    redesignCopy.textContent = 'Редизайн 169.ru и mebel169.ru начала с CJM и анализа прежних сайтов: изучила путь покупателя к товару и на этой основе спроектировала навигацию и главные страницы с акцентом на популярные категории и акции. Для двух платформ создала общий UI-кит с компонентами, их состояниями и правилами адаптации. Он помог последовательно развивать интерфейсы на разных экранах и упростил передачу макетов в разработку.';
    redesign.after(redesignCopy);
  }

  if (redesign && !document.getElementById('case-169-redesign-gallery')) {
    var redesignGallery = document.createElement('div');
    redesignGallery.id = 'case-169-redesign-gallery';
    redesignGallery.className = 'case-tasks-stack';
    redesignGallery.style.gap = '24px';
    redesignGallery.style.margin = '24px 0 32px';

    [
      {
        src: '/assets/case-169/redesign-ui-kit.webp',
        alt: 'Общий UI-кит двух e-commerce-сайтов: кнопки, типографика, палитра и поля ввода',
        caption: 'Общий UI-кит для двух сайтов.',
        width: 1621,
        height: 726
      },
      {
        src: '/assets/case-169/redesign-responsive.webp',
        alt: 'Адаптивная главная страница сайта 169 на компьютере, планшете и смартфоне',
        caption: 'Главная страница на разных экранах.',
        width: 1024,
        height: 490
      }
    ].forEach(function (item) {
      var figure = document.createElement('figure');
      figure.className = 'case-tasks-figure';

      var image = document.createElement('img');
      image.src = item.src;
      image.alt = item.alt;
      image.width = item.width;
      image.height = item.height;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.className = 'case-lightbox-zoomable';
      image.style.height = 'auto';
      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.setAttribute('aria-label', 'Увеличить: ' + item.caption);

      function openRedesignImage() {
        var overlay = document.querySelector('.case-lightbox-overlay');
        var overlayImage = overlay && overlay.querySelector('img');
        if (!overlay || !overlayImage) return;
        overlayImage.src = image.currentSrc || image.src;
        overlayImage.alt = image.alt;
        overlay.classList.add('is-open');
      }

      image.addEventListener('click', openRedesignImage);
      image.addEventListener('keydown', function (event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        openRedesignImage();
      });

      var caption = document.createElement('figcaption');
      caption.textContent = item.caption;
      figure.append(image, caption);
      redesignGallery.appendChild(figure);
    });

    document.getElementById('case-169-redesign-copy').after(redesignGallery);
  }

  if (redesign && !document.getElementById('case-169-redesign-result')) {
    var redesignBadge = document.createElement('div');
    redesignBadge.id = 'case-169-redesign-result';
    redesignBadge.className = 'case-result-badge';
    var redesignIcon = document.createElement('span');
    redesignIcon.className = 'case-result-badge-icon';
    redesignIcon.textContent = '→';
    var redesignResult = document.createElement('p');
    redesignResult.className = 'case-result-badge-text';
    redesignResult.textContent = 'После внедрения элементов UI-кита и дизайн-системы время подготовки интерфейсных решений и макетов сократилось примерно на 30%.';
    redesignBadge.append(redesignIcon, redesignResult);
    var redesignGalleryNode = document.getElementById('case-169-redesign-gallery');
    if (redesignGalleryNode) {
      redesignGalleryNode.after(redesignBadge);
    } else {
      document.getElementById('case-169-redesign-copy').after(redesignBadge);
    }
  }

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

  if (checkout && !document.getElementById('case-169-checkout-gallery')) {
    var checkoutGallery = document.createElement('div');
    checkoutGallery.id = 'case-169-checkout-gallery';
    checkoutGallery.className = 'case-tasks-stack';
    checkoutGallery.style.gap = '24px';
    checkoutGallery.style.margin = '24px 0 32px';

    [
      {
        src: '/assets/case-169/checkout-before.webp',
        alt: 'Старая корзина 169 с оформлением заказа на одной странице',
        caption: 'До: корзина и оформление заказа на одной странице.',
        width: 1773,
        height: 2048
      },
      {
        src: '/assets/case-169/checkout-cart.webp',
        alt: 'Новая корзина 169 — первый этап оформления заказа',
        caption: 'После, этап 1: корзина.',
        width: 1899,
        height: 926
      },
      {
        src: '/assets/case-169/checkout-form.webp',
        alt: 'Новое оформление заказа 169 — второй этап',
        caption: 'После, этап 2: оформление заказа.',
        width: 2048,
        height: 1721
      }
    ].forEach(function (item) {
      var figure = document.createElement('figure');
      figure.className = 'case-tasks-figure';

      var image = document.createElement('img');
      image.src = item.src;
      image.alt = item.alt;
      image.width = item.width;
      image.height = item.height;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.className = 'case-lightbox-zoomable';
      image.style.height = 'auto';
      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.setAttribute('aria-label', 'Увеличить: ' + item.caption);

      function openCheckoutImage() {
        var overlay = document.querySelector('.case-lightbox-overlay');
        var overlayImage = overlay && overlay.querySelector('img');
        if (!overlay || !overlayImage) return;
        overlayImage.src = image.currentSrc || image.src;
        overlayImage.alt = image.alt;
        overlay.classList.add('is-open');
      }

      image.addEventListener('click', openCheckoutImage);
      image.addEventListener('keydown', function (event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        openCheckoutImage();
      });

      var caption = document.createElement('figcaption');
      caption.textContent = item.caption;

      figure.append(image, caption);
      checkoutGallery.appendChild(figure);
    });

    var checkoutResultNode = document.getElementById('case-169-checkout-result');
    if (checkoutResultNode) {
      checkoutResultNode.before(checkoutGallery);
    } else {
      document.getElementById('case-169-checkout-copy').after(checkoutGallery);
    }
  }

  [
    ['case-169-offline-retail', 'Офлайн-ритейл'],
    ['case-169-visual-branding', 'Брендинг и визуальные коммуникации'],
    ['case-169-ai-automation', 'Автоматизации с ИИ'],
    ['case-169-marketing', 'Маркетинг и продвижение']
  ].forEach(function (section) {
    if (document.getElementById(section[0])) return;
    var heading = document.createElement('h2');
    heading.id = section[0];
    heading.className = 'case-section-title';
    heading.textContent = section[1];
    container.appendChild(heading);
  });

  // The export preserves whitespace. Moving only elements otherwise leaves
  // all separator newlines before the first section and produces a large gap.
  Array.prototype.slice.call(container.childNodes).forEach(function (node) {
    if (node.nodeType === 3 && !node.textContent.trim()) node.remove();
  });
})();
