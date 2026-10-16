/* Content and layout overrides for /case-169/. */
window.SitePageContent = {
  sectionOrders: [
    {
      container: '.case-tasks',
      headingSelector: '.case-section-label',
      labels: [
        'Аналитика и измеримость продукта',
        'Редизайн двух e-commerce-платформ',
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

  // Present the role, tenure, team, and scope before the case results.
  var hero = document.querySelector('section[data-framer-name="Hero"]');
  var project = hero && hero.querySelector('[data-framer-name="Project Container"]');
  var title = project && project.querySelector('h1');
  var projectDetails = project && project.querySelector('[data-framer-name="Project Details"]');
  var description = project && project.querySelector('[data-framer-name="Project Description"]');
  var intro = description && description.querySelector(':scope > p');
  if (title && projectDetails && intro) {
    if (!document.getElementById('case-169-hero-role')) {
      var role = document.createElement('p');
      role.id = 'case-169-hero-role';
      role.textContent = 'Product & Design Lead для e-commerce';
      title.before(role);
    }
    title.textContent = 'Продуктовая стратегия и развитие e-commerce компании 169';
    var companyLabel = projectDetails.querySelector('[data-framer-name="Client Label"] p');
    var periodLabel = projectDetails.querySelector('[data-framer-name="Year Label"] p');
    if (companyLabel) companyLabel.textContent = 'Компания';
    if (periodLabel) periodLabel.textContent = 'Период';
    intro.textContent = 'С 2021 по 2026 год я развивала e-commerce-продукты 169. Находила проблемы в пользовательских и бизнес-процессах, проводила исследования, согласовывала решения, проектировала UX/UI, ставила задачи и сопровождала внедрение. После запуска проверяла результат по продуктовой и бизнес-аналитике.';
    if (!document.getElementById('case-169-hero-facts')) {
      var heroFacts = document.createElement('dl');
      heroFacts.id = 'case-169-hero-facts';
      [
        ['Команда', 'SMM, специалисты 1С, разработчики, SEO, специалист по контекстной рекламе, маркетолог и контент-отдел.'],
        ['Зона ответственности', 'Продуктовая стратегия и развитие e-commerce · поиск проблем и формирование гипотез · CustDev, CJM, HADI и A/B-тесты · продуктовая аналитика и работа с воронкой · UX/UI и система интерфейсов · постановка задач и кросс-функциональный delivery · проверка внедрения и бизнес-результата.']
      ].forEach(function (item) {
        var row = document.createElement('div');
        var term = document.createElement('dt');
        var detail = document.createElement('dd');
        term.textContent = item[0];
        detail.textContent = item[1];
        row.append(term, detail);
        heroFacts.appendChild(row);
      });
      intro.after(heroFacts);
    }
  }

  var stats = description && description.querySelectorAll('.case-stats > .case-stat');
  var agreedStats = [
    ['+48%', 'Рост количества успешно отправленных заявок на 169.ru'],
    ['+67%', 'Рост количества успешно отправленных заявок на mebel169.ru'],
    ['+64,6%', 'Конверсия B2B-страницы: 4,64% → 7,63%'],
    ['×2', 'Рост количества брендовых запросов']
  ];
  if (stats && stats.length === agreedStats.length) {
    Array.prototype.forEach.call(stats, function (stat, index) {
      var number = stat.querySelector('.case-stat-num');
      var label = stat.querySelector('.case-stat-label');
      if (number && label && number.textContent.trim() === agreedStats[index][0]) {
        label.textContent = agreedStats[index][1];
      }
    });
  }

  // Keep headings attached to their content while making section boundaries clear.
  // The same scale and responsive values are documented in docs/GITHUB-WORKFLOW.md.
  if (!document.getElementById('case-169-spacing')) {
    var spacingStyle = document.createElement('style');
    spacingStyle.id = 'case-169-spacing';
    spacingStyle.textContent = [
      '#case-169-hero-role { font: 600 14px/1.4 "Inter", system-ui, sans-serif; color: #666; margin: 0 0 12px; }',
      '#case-169-hero-facts { display: grid; gap: 20px; margin: 28px 0 0; max-width: 580px; }',
      '#case-169-hero-facts dt { font: 700 12px/1.25 "Inter", system-ui, sans-serif; color: #666; margin: 0 0 6px; }',
      '#case-169-hero-facts dd { font: 400 15px/1.6 "Inter", system-ui, sans-serif; color: #333; margin: 0; overflow-wrap: anywhere; }',
      '#case-169-hero-facts + .case-section-label { margin: 40px 0 16px; }',
      '.case-story { display: grid; gap: 16px; margin: 0 0 16px; }',
      '.case-story-step { margin: 0; }',
      '.case-story-label { display: block; font: 700 11px/1.4 "Inter", system-ui, sans-serif; letter-spacing: .04em; text-transform: uppercase; color: #888; margin-bottom: 5px; }',
      '.case-story-step .case-summary-text { margin: 0; overflow-wrap: break-word; }',
      '.case-section-label + .case-stats { margin-top: 0; }',
      '.case-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); margin-bottom: 48px; }',
      '.case-tasks > .case-section-title { margin-bottom: 16px; }',
      '.case-tasks > .case-section-label { margin: 48px 0 16px; }',
      '.case-tasks > .case-section-title + .case-section-label { margin-top: 24px; }',
      '.case-tasks > .case-summary-text { margin-bottom: 16px; }',
      '.case-tasks > .case-summary-text + :is(.case-tasks-figure, .case-tasks-gallery, .case-compare) { margin-top: 24px; }',
      '.case-tasks > .case-story + :is(.case-tasks-figure, .case-tasks-gallery, .case-tasks-stack, .case-compare), #case-169-future-sections > .case-story + .case-tasks-figure { margin-top: 24px; }',
      '.case-tasks > :is(.case-tasks-figure, .case-tasks-gallery, .case-compare) + .case-result-badge { margin-top: 24px; }',
      '.case-tasks > :is(.case-tasks-gallery, .case-tasks-stack, .case-tasks-figure, .case-compare), #case-169-future-sections > .case-tasks-figure { width: min(920px, calc(100vw - 40px)); max-width: none; position: relative; left: 50%; transform: translateX(-50%); box-sizing: border-box; }',
      '.case-tasks-figure img { box-sizing: border-box; }',
      '.case-tasks-figure img:focus-visible, .case-compare-handle:focus-visible .case-compare-handle-grip { outline: 3px solid #3857bb; outline-offset: 3px; }',
      '.case-tasks > .case-tasks-gallery { margin-bottom: 24px; }',
      '#case-169-future-sections > .case-tasks-figure { margin-bottom: 24px; }',
      '#case-169-future-sections > .case-story { margin-bottom: 16px; }',
      '[data-framer-name="CTA"] #case-169-cta-title { overflow-wrap: break-word; }',
      '.case-stats + .case-tasks { margin-bottom: 0; }',
      '.case-stats + .case-tasks > .case-result-badge:last-child { margin-bottom: 0; }',
      '#case-169-future-sections { margin-top: 56px; }',
      '#case-169-future-sections > .case-section-title:not(:first-child) { margin-top: 56px; }',
      '@media (max-width: 767.98px) {',
      '  .case-stats { margin-bottom: 40px; }',
      '  #case-169-hero-facts + .case-section-label { margin-top: 32px; }',
      '  .case-tasks > .case-section-label { margin-top: 32px; }',
      '  .case-tasks > .case-section-title + .case-section-label { margin-top: 20px; }',
      '  .case-tasks > :is(.case-tasks-gallery, .case-tasks-stack, .case-tasks-figure, .case-compare), #case-169-future-sections > .case-tasks-figure { width: min(100%, calc(100vw - 32px)); }',
      '  #case-169-future-sections, #case-169-future-sections > .case-section-title:not(:first-child) { margin-top: 40px; }',
      '}'
    ].join('\n');
    document.head.appendChild(spacingStyle);
  }

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

  // Remove the obsolete full-height product-card screenshots and their copy.
  var obsoleteProductHeading = Array.prototype.find.call(
    document.querySelectorAll('.framer-ry328i h2'),
    function (node) {
      return node.textContent.trim() === 'Карточка товара переработана целиком.';
    }
  );
  if (obsoleteProductHeading) {
    var obsoleteProductCard = obsoleteProductHeading.closest('.framer-dpij7l');
    if (
      obsoleteProductCard &&
      obsoleteProductCard.parentElement.matches('.framer-ry328i') &&
      obsoleteProductCard.querySelectorAll('img').length === 2
    ) {
      obsoleteProductCard.remove();
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
    redesignGallery.style.margin = '24px 0 24px';

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
    checkoutGallery.style.margin = '24px 0 24px';

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

  // Keep future section headings after all product work, outside the reordered content.
  var futureSections = document.getElementById('case-169-future-sections');
  if (!futureSections) {
    futureSections = document.createElement('div');
    futureSections.id = 'case-169-future-sections';
    futureSections.className = 'case-tasks';
    container.after(futureSections);
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
    futureSections.appendChild(heading);
  });


  var offlineRetail = document.getElementById('case-169-offline-retail');
  if (offlineRetail && !document.getElementById('case-169-offline-copy')) {
    var offlineCopy = document.createElement('p');
    offlineCopy.id = 'case-169-offline-copy';
    offlineCopy.className = 'case-summary-text';
    offlineCopy.textContent = 'В четырёх магазинах 169 навигация, информация о товарах и ценники оформлялись по-разному. Я выстроила единую систему офлайн-опыта: на основе аудита магазинов и изучения конкурентов разработала правила навигации и визуальных коммуникаций — от вывесок до инфографики и информации у товаров. Для ценников создала шаблоны под задачи магазинов и автоматизировала их печать. Систему внедрили во всех точках; для её поддержки я ввела чек-лист, отчётность, постановку задач и контроль исполнения. В результате у сети появился единый стандарт оформления, который помогает покупателю ориентироваться и усиливает узнаваемость бренда.';
    offlineRetail.after(offlineCopy);
  }

  var visualBranding = document.getElementById('case-169-visual-branding');
  if (visualBranding && !document.getElementById('case-169-brand-copy')) {
    var brandCopy = document.createElement('p');
    brandCopy.id = 'case-169-brand-copy';
    brandCopy.className = 'case-summary-text';
    brandCopy.textContent = 'У 169 не было единого брендбука: оформление зависело от конкретного дизайнера и менялось от канала к каналу. При разработке визуальной системы я изучила историю компании через интервью с генеральным директором и определила правила её применения в рекламе, магазинах и материалах для команды. Важным направлением стало сотрудничество с ПИК и «Самолётом»: для совместных проектов я создавала партнёрские материалы с узнаваемым стилем 169. На основе брендбука разрабатывала статичные и анимированные баннеры, полиграфию, одежду сотрудников и оклейку автомобилей, готовила ТЗ и проверяла внедрение. На фоне этой работы число брендовых запросов выросло в 2 раза.';
    visualBranding.after(brandCopy);
  }

  // Keep the branded-materials image, then remove the obsolete retail section
  // and its caption referring back to that section.
  var legacyRetail = Array.prototype.find.call(document.querySelectorAll('.case-retail'), function (node) {
    return node.firstElementChild &&
      node.firstElementChild.textContent.trim() === 'Розница — не только сайт';
  });
  var legacyMedia = legacyRetail && legacyRetail.nextElementSibling;
  var legacySection = legacyRetail && legacyRetail.closest('section.framer-b9xdar');
  var oldBrandHeading = legacyMedia && legacyMedia.querySelector('h2');
  var oldBrandImage = legacyMedia && legacyMedia.querySelector('img');
  if (
    document.getElementById('case-169-offline-copy') &&
    document.getElementById('case-169-brand-copy') &&
    legacySection &&
    legacyMedia && legacyMedia.matches('.framer-ry328i') &&
    legacyRetail.parentElement === legacyMedia.parentElement &&
    legacyRetail.parentElement.children.length === 2 &&
    oldBrandHeading && oldBrandHeading.textContent.trim() === 'Кроме продукта — ещё и бренд.' &&
    oldBrandImage && legacyMedia.querySelectorAll('img').length === 1
  ) {
    var brandFigure = document.createElement('figure');
    brandFigure.id = 'case-169-brand-visual';
    brandFigure.className = 'case-tasks-figure';
    oldBrandImage.alt = 'Примеры фирменных материалов 169';
    oldBrandImage.style.height = 'auto';
    oldBrandImage.loading = 'lazy';
    var brandCaption = document.createElement('figcaption');
    brandCaption.textContent = 'Примеры фирменных материалов 169.';
    brandFigure.append(oldBrandImage, brandCaption);
    document.getElementById('case-169-brand-copy').after(brandFigure);
    legacySection.remove();
  }

  var aiAutomation = document.getElementById('case-169-ai-automation');
  if (aiAutomation && !document.getElementById('case-169-ai-copy')) {
    var aiCopy = document.createElement('p');
    aiCopy.id = 'case-169-ai-copy';
    aiCopy.className = 'case-summary-text';
    aiCopy.textContent = 'Запустила ИИ-автоматизации для каталога: массовую генерацию товарных фото и SEO-описаний по готовым свойствам, исправление ошибок с проверкой контент-командой и видеообложки из фото в листинге. Для контроля покупательских сценариев внедрила ежедневный отчёт в Telegram: он отмечает аномалии целей Метрики и по выборке записей Вебвизора предлагает гипотезы для проверки. Вела работу от идеи до запуска, включая тестирование и обучение; код реализовали разработчики.';
    aiAutomation.after(aiCopy);
  }
  if (aiAutomation && !document.getElementById('case-169-ai-result')) {
    var aiBadge = document.createElement('div');
    aiBadge.id = 'case-169-ai-result';
    aiBadge.className = 'case-result-badge';
    var aiIcon = document.createElement('span');
    aiIcon.className = 'case-result-badge-icon';
    aiIcon.textContent = '→';
    var aiResult = document.createElement('p');
    aiResult.className = 'case-result-badge-text';
    aiResult.textContent = 'Время создания товарной карточки сократилось на 50%. ИИ-мониторинг помог выявить снижение конверсии и восстановить показатель после исправлений.';
    aiBadge.append(aiIcon, aiResult);
    (document.getElementById('case-169-ai-copy') || aiAutomation).after(aiBadge);
  }


  var marketing = document.getElementById('case-169-marketing');
  if (marketing && !document.getElementById('case-169-marketing-copy')) {
    var marketingCopy = document.createElement('p');
    marketingCopy.id = 'case-169-marketing-copy';
    marketingCopy.className = 'case-summary-text';
    marketingCopy.textContent = 'Раньше акции на двух сайтах оставались отдельными баннерами и приносили мало заявок. Я встроила предложения в выбор товара: они появились в каталоге и карточках, откуда покупатель мог оставить заявку. Для каждой точки входа настроила цель в Метрике, чтобы видеть результат размещения. По той же логике переработала посадочные страницы: страницу проектирования кухни — для контекстного трафика, страницу дизайнеров — для знакомства с работами, форматом сотрудничества и подачи заявки.';
    marketing.after(marketingCopy);
  }
  if (marketing && !document.getElementById('case-169-marketing-result')) {
    var marketingBadge = document.createElement('div');
    marketingBadge.id = 'case-169-marketing-result';
    marketingBadge.className = 'case-result-badge';
    var marketingIcon = document.createElement('span');
    marketingIcon.className = 'case-result-badge-icon';
    marketingIcon.textContent = '→';
    var marketingResult = document.createElement('p');
    marketingResult.className = 'case-result-badge-text';
    marketingResult.textContent = 'После обновления страницы количество CRM-заявок от дизайнеров выросло на 40%.';
    marketingBadge.append(marketingIcon, marketingResult);
    (document.getElementById('case-169-marketing-copy') || marketing).after(marketingBadge);
  }

  // Each chapter follows the approved case narrative. Existing evidence and
  // result badges remain in place; only the explanatory paragraphs change.
  var storyLabels = ['Проблема', 'Что было выяснено', 'Решение', 'Моя роль', 'Работа с командой и внедрение', 'Результат'];
  var stories = [
    {
      heading: analytics,
      id: 'case-169-analytics-copy',
      parts: [
        'Команда не могла надёжно оценивать конверсию в заявку: отправки на сайте расходились с лидами в CRM, часть форм работала с ошибками, а реклама получала неверные или неполные цели. Было неясно, где клиент прерывает путь, а где теряется уже отправленное обращение.',
        'Проследила путь заявки от формы до первого разговора с менеджером. Сверка тестовых отправок с Метрикой и CRM выявила разрывы в учёте и передаче данных. Прослушивание звонков показало ещё одну потерю: менеджеру не всегда был понятен источник и контекст обращения.',
        'Определила контрольные точки воронки: успешная отправка на сайте, фиксация цели, создание лида в CRM и передача менеджеру. Привела цели форм и сигналы для рекламы в соответствие с этим путём. К заявке добавили контекст обращения и сценарий начала разговора.',
        'Вела диагностику, формулировала требования к измерению и критерии приёмки, настраивала цели и ставила задачи разработчику. Проверяла весь путь тестовой заявки, а не только срабатывание события на сайте.',
        'Разработчик исправлял код форм и передачу данных. Я сверяла результат на стороне сайта, Метрики и CRM; менеджеры получили информацию, необходимую для первого контакта с клиентом.',
        'Расхождение между отправками на сайте и лидами в CRM удалось свести к нулю. Команда получила данные, по которым можно оценивать изменения воронки; реклама — корректные цели, менеджеры — контекст заявки.'
      ]
    },
    {
      heading: redesign,
      id: 'case-169-redesign-copy',
      parts: [
        'У двух e-commerce-сайтов накопились разные правила навигации и оформления. Покупателю было сложнее добраться от главной до нужного товара, а каждое новое решение приходилось заново согласовывать и отрисовывать для разных экранов.',
        'Разобрала прежние сайты и путь покупателя через CJM: как он находит категорию, сравнивает товары и реагирует на предложения. Это помогло определить приоритет популярных категорий на главной, пересмотреть навигацию и заложить требования к адаптивности и структуре страниц с учётом SEO.',
        'Перепроектировала навигацию и главные страницы 169.ru и mebel169.ru. Создала общий UI-кит: типографику, цвета, кнопки, формы и модальные окна с состояниями и правилами для компьютера, планшета и смартфона. Система стала основой последовательного развития обоих интерфейсов.',
        'Определяла продуктовые приоритеты, проектировала UX/UI и переводила повторяющиеся решения в компоненты. Проверяла гипотезы и корректировала интерфейсы после запуска.',
        'Согласовывала сценарии с командой, передавала разработчикам компоненты и состояния, проверяла реализацию на разных экранах. Единые правила сократили объём повторной работы при следующих изменениях.',
        'Оба сайта получили согласованную систему интерфейсов; команде стало быстрее готовить новые решения и передавать макеты в разработку.'
      ]
    },
    {
      heading: catalog,
      id: 'case-169-catalog-story',
      parts: [
        'В каталоге с более чем 100 000 SKU данные зависели от того, кто добавил товар: свойства пропускали или дублировали, варианты цвета и комплектации распадались на отдельные карточки, фильтры не соответствовали реальным характеристикам. Ошибки и нестабильные выгрузки из 1С мешали команде и покупателям.',
        'Проверила путь от поиска до карточки товара, собирала обратную связь у покупателей и разбирала структуру данных и выгрузок. Стало ясно, что правки отдельных фильтров не решат проблему без общих правил для свойств каждого типа товара.',
        'Ввела обязательные свойства перед публикацией, связала фильтры с характеристиками и объединила варианты одного товара. Перестроила структуру каталога и сортировку, добавила сведения о наличии у поставщиков и образцах в магазинах, автоматические теги. Для кухни пересмотрела шаблон карточки и правила показа комплектации; сопутствующие товары и комплекты стали опираться на реальный состав заказа.',
        'Формировала требования к товарной модели и интерфейсу, проверяла гипотезы через CustDev, HADI и A/B-тесты, проектировала путь покупателя и принимала изменения на сайте.',
        'Согласовывала правила с контент-отделом и специалистами 1С, ставила задачи разработчикам и проверяла, как данные переходят из источника в фильтры, карточку и подбор сопутствующих товаров.',
        'Каталог стал последовательнее для покупателя независимо от того, кто завёл позицию; команда сократила ошибки и ручные исправления выгрузок. Переработка карточек и UX поддержала коммерческий результат.'
      ]
    },
    {
      heading: checkout,
      id: 'case-169-checkout-copy',
      parts: [
        'Старая корзина на обоих сайтах собирала только заявку для менеджера: клиент не мог самостоятельно оплатить товар и выбрать дату доставки. Список товаров и длинное оформление находились в одном окне.',
        'По CJM, записям Вебвизора и A/B-тестам изучала путь от первого контакта до покупки. Выяснилось, что сценарии различаются: часть клиентов готова оформить заказ сама, другим удобнее передать состав корзины специалисту без заполнения длинной формы.',
        'Разделила корзину и оформление на два этапа. На первом можно управлять товарами, на втором — выбрать получение, дату доставки, дополнительные услуги, рассрочку и завершить покупку без подтверждения менеджера. Быстрый путь обращения к менеджеру сохранила через действие «Проверить выгоду корзины» с передачей её состава.',
        'Сформировала два пользовательских пути, проектировала UX/UI обоих сайтов, проверяла гипотезы и результаты тестов на каждом этапе воронки.',
        'Передала сценарии в разработку, проверяла работу корзины и оформления на двух сайтах, включая самостоятельную покупку и передачу заявки менеджеру.',
        'У клиента появился выбор между самостоятельной покупкой и оформлением с помощью специалиста. Оба сценария работают на двух сайтах.'
      ]
    },
    {
      heading: findHeading('Система личных кабинетов для покупателей, замерщиков и бизнеса'),
      id: 'case-169-accounts-story',
      parts: [
        'Покупатели, замерщики и бизнес-клиенты решают разные задачи после входа на сайт. Единый кабинет без учёта этих ролей не поддерживал бы их процессы и ошибки на каждом шаге.',
        'Разбирала сценарии с профильными отделами. Для замерщика составила карту процесса и состояний: она показала, где нужны отдельные действия, подсказки и обработка нетиповых ситуаций.',
        'Спроектировали систему кабинетов с общим входом и разными путями для покупателя, замерщика, юридического лица, оптового клиента и продавца на маркетплейсах.',
        'Кабинет замерщика разработала лично — от исследования рабочего процесса и карты сценариев до финальных экранов. Работу других дизайнеров над кабинетами физического и юридического лица и продавца на маркетплейсах курировала.',
        'Уточняла логику вместе с профильными отделами и проводила последовательные проверки сценариев. Запускала готовые решения с командой разработки.',
        'Кабинеты покупателя и замерщика запущены. Кабинеты юридического лица, оптового клиента и продавца на маркетплейсах спроектированы и ожидают разработки.'
      ]
    },
    {
      heading: findHeading('Ключевые сценарии магазина в self-service'),
      id: 'case-169-self-service-story',
      parts: [
        'Оплата товара или счёта в торговом зале, выдача со склада и запись на проектирование кухни зависели от сотрудника. Для этих операций нужен был понятный самостоятельный путь, работающий и при нестандартном ходе заказа.',
        'Изучила терминалы Пятёрочки, Ашана, Spar, Hoff и IKEA, наблюдала за покупателями в магазине и собирала обратную связь клиентов и сотрудников. Отдельно разобрала частичную выдачу, отказ от заказа и повторную попытку оплаты.',
        'Спроектировала три терминальных сценария: оплата в торговом зале, выдача товара со склада и запись к менеджеру на проектирование кухни в шоуруме. Для каждого составила карту состояний, экранов и ошибок.',
        'Вела работу от исследования конкурентов и карты процесса до интерфейса и проверки терминала в реальном магазине. На основе наблюдений уточняла поведение экранов.',
        'Работала с программистами над внедрением, перед запуском сверяла реализованные состояния с макетами и проверяла сценарии вместе с сотрудниками магазина.',
        'Все три сценария внедрены. Покупатель может оплатить товар или счёт без ожидания менеджера или кассы; процессы записи и выдачи стали понятнее и предсказуемее.'
      ]
    },
    {
      heading: findHeading('От списаний к выручке'),
      id: 'case-169-writeoffs-story',
      parts: [
        'Товары с незначительными дефектами регулярно списывались, хотя для них оставался спрос. Единичная распродажа не создавала повторяемого процесса для новых категорий.',
        'Проанализировала потери на списаниях; входные двери с производственным браком стали первым показательным случаем. Возможность заключалась в отдельном предложении и маршруте покупки для такого товара.',
        'Предложила новый канал продаж вместо списания: разделы уценённых товаров на mebel169.ru и 169.ru с самовывозом с выставки, выделенная зона в шоуруме и отдельные ценники. Процесс заложен так, чтобы его можно было перенести на другие категории.',
        'Связала бизнес-проблему с продуктовым сценарием, спроектировала путь покупателя на сайте и в магазине и правила представления товара.',
        'Сопроводила внедрение разделов и автоматизацию повторяемого процесса между сайтом и шоурумом.',
        'Вместо списания появился повторяемый канал продаж, который можно применять к другим товарным категориям.'
      ]
    },
    {
      heading: offlineRetail,
      id: 'case-169-offline-copy',
      parts: [
        'В четырёх магазинах 169 навигация, сведения о товарах и ценники были устроены по-разному. Покупателю приходилось заново разбираться в каждом пространстве, а у команды не было единого стандарта оформления.',
        'Провела аудит торговых точек и выезды к конкурентам, сопоставила маршрут покупателя, заметность информации и способы её обновления. Это показало, где визуальные решения должны помогать с выбором, а где нужен общий процесс контроля.',
        'Разработала систему оформления: навигацию, баннеры, наружные вывески, инфографику, наклейки, информационные блоки, материалы у товаров, линейки по примеру IKEA и коврики на кровати. Под задачи магазинов создала шаблоны ценников и автоматизировала их печать.',
        'Определяла правила офлайн-опыта и проверяла их в реальном пространстве, подготовила единый чек-лист для регулярного аудита магазинов.',
        'Систему внедрили во всех четырёх точках. По чек-листам организовала отчётность, постановку задач и контроль исполнения, чтобы стандарт поддерживался после запуска.',
        'У сети появился единый стандарт оформления: покупателю проще ориентироваться, а команда может системно обновлять материалы и контролировать соответствие бренду.'
      ]
    },
    {
      heading: visualBranding,
      id: 'case-169-brand-copy',
      parts: [
        'У 169 не было единого брендбука: визуальный язык зависел от конкретного дизайнера и менялся между сайтом, рекламой и офлайн-материалами.',
        'Изучила историю компании через интервью с генеральным директором и задачи каждого канала. Отдельно разобрала требования совместных проектов с ПИК и «Самолётом», где стиль 169 должен сохраняться в партнёрской коммуникации.',
        'Создала брендбук и правила применения системы. На их основе разработала статичные и анимированные баннеры, инфографику, материалы для ПИК и «Самолёта», визитки, дорхенгеры, листовки, флаеры, пакеты, одежду сотрудников, оклейку автомобилей, презентации и трафареты.',
        'Формировала визуальную концепцию, готовила ТЗ, отрисовывала материалы и проверяла результат внедрения в разных носителях.',
        'Согласовывала партнёрские материалы и передавала единые правила команде, чтобы решения последовательно работали в рекламе, магазинах и внутренних материалах.',
        'У бренда появился единый визуальный язык во всех каналах. На фоне этой работы количество брендовых запросов выросло в два раза.'
      ]
    },
    {
      heading: aiAutomation,
      id: 'case-169-ai-copy',
      parts: [
        'Контент-команда тратила время на поиск фотографий и ручное заполнение карточек; ошибки и пропуски требовали повторной проверки. Отклонения конверсии и проблемы в интерфейсе также обнаруживались слишком поздно.',
        'Выделила повторяемые операции, где готовые свойства товара могут служить основой для SEO-описаний и визуального контента. Для продуктового контроля связала аномалии целей Метрики с выборочной проверкой записей Вебвизора и гипотезами о причинах.',
        'Запустила массовую генерацию товарных фото и описаний, исправление ошибок с проверкой контент-командой и видеообложки из фотографий, которые показываются при наведении в листинге. Ежедневный отчёт в Telegram отмечает отклонения в Метрике и предлагает, какие записи и сценарии проверить.',
        'Вела инициативу от идеи до запуска: определяла сценарии применения ИИ, проверяла качество результата, тестировала работу и обучала команду.',
        'Разработчики внедрили код; контент-отдел проверяет карточки перед публикацией. По сигналам отчёта команда проверяет интерфейсные и технические гипотезы, затем исправляет подтверждённые проблемы.',
        'Создание карточки стало быстрее. Мониторинг помог заметить снижение конверсии; после проверки и исправлений показатель восстановился.'
      ]
    },
    {
      heading: marketing,
      id: 'case-169-marketing-copy',
      parts: [
        'На двух сайтах предложения оставались отдельными баннерами и приносили мало заявок. Посадочные страницы не раскрывали формат работы с компанией, а разные точки контакта с брендом не складывались в понятный путь.',
        'Разобрала, как покупатель встречает предложение на главной, в каталоге и карточке, а дизайнер — страницу сотрудничества. Для каждой точки входа определила действие и отдельную цель в Метрике, чтобы видеть вклад размещения.',
        'Собрала промокалендарь и встроила акции в выбор товара: баннеры, теги в карточках и каталоге, формы заявки и связанный путь между ними. Переработала страницы проектирования кухни для контекстного трафика и дизайнеров — с работами, преимуществами, форматом сотрудничества и заявкой; отдельный путь для авторов оформила на странице 169 Blogger. Для локального контакта с брендом вела оформление Яндекс Карт и работу с отзывами.',
        'Отвечала за продуктовую логику размещений, UX/UI страниц, цели для измерения и проверку пути до заявки. Предложения акций разрабатывал маркетолог; я превращала их в работающие сценарии сайта.',
        'Согласовывала сообщения и размещения с маркетингом, ставила задачи разработчикам, проверяла работу форм и результаты по целям. По отзывам и карточкам магазинов анализировала слабые точки и определяла, где усиливать коммуникацию.',
        'Акции и посадочные страницы получили измеримые точки входа вместо разрозненных баннеров. Страница дизайнеров стала эффективнее переводить интерес в CRM-заявки.'
      ]
    }
  ];

  stories.forEach(function (story) {
    if (!story.heading || story.parts.length !== storyLabels.length) return;
    var existing = document.getElementById(story.id);
    var storyNode = document.createElement('div');
    storyNode.id = story.id;
    storyNode.className = 'case-story';
    story.parts.forEach(function (copy, index) {
      var step = document.createElement('div');
      step.className = 'case-story-step';
      var label = document.createElement('span');
      label.className = 'case-story-label';
      label.textContent = storyLabels[index];
      var paragraph = document.createElement('p');
      paragraph.className = 'case-summary-text';
      paragraph.textContent = copy;
      step.append(label, paragraph);
      storyNode.appendChild(step);
    });
    if (existing) existing.replaceWith(storyNode);
    else story.heading.after(storyNode);
    // Legacy chapters have multiple adjacent paragraphs. Preserve their media
    // and badges while replacing the old prose as a single unit.
    var following = storyNode.nextElementSibling;
    while (following && following.matches('p.case-summary-text')) {
      var next = following.nextElementSibling;
      following.remove();
      following = next;
    }
  });

  container.querySelectorAll(':scope > .case-section-label').forEach(function (heading) {
    if (heading.tagName === 'H3') return;
    var semanticHeading = document.createElement('h3');
    semanticHeading.className = heading.className;
    semanticHeading.textContent = heading.textContent;
    heading.replaceWith(semanticHeading);
  });

  var analyticsBadgeText = document.querySelector('#case-169-analytics-result .case-result-badge-text');
  if (analyticsBadgeText) analyticsBadgeText.textContent = 'Целевые лид-формы из контекстной рекламы: +194% на mebel169.ru и +52% на 169.ru.';

  var cta = document.querySelector('[data-framer-name="CTA"]');
  var ctaTitle = cta && cta.querySelector('h2');
  if (ctaTitle) {
    ctaTitle.id = 'case-169-cta-title';
    ctaTitle.textContent = 'Открыта к предложениям о работе в продуктовой команде и проектному сотрудничеству';
    var socialProof = cta.querySelector('[data-framer-name="Happy Clients & Header"] p');
    if (socialProof && socialProof.textContent.trim() === '99+ довольных клиентов') socialProof.remove();
    var contactButton = cta.querySelector('a[href="https://t.me/design_dora"] p');
    if (contactButton && contactButton.textContent.trim() === 'Записаться') contactButton.textContent = 'Связаться';
  }

  // The original exported screenshots and draggable comparison lacked a
  // keyboard path. Keep the existing pointer interactions and add focus input.
  var lastKeyboardImage = null;
  document.querySelectorAll('.case-tasks-figure img').forEach(function (image) {
    if (image.tabIndex < 0) image.tabIndex = 0;
    image.setAttribute('role', 'button');
    if (!image.hasAttribute('aria-label')) image.setAttribute('aria-label', 'Увеличить: ' + (image.alt || 'изображение кейса'));
    if (image.dataset.caseKeyboardReady) return;
    image.dataset.caseKeyboardReady = 'true';
    image.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      lastKeyboardImage = image;
      var overlay = document.querySelector('.case-lightbox-overlay');
      var enlarged = overlay && overlay.querySelector('img');
      if (!enlarged) return;
      enlarged.src = image.currentSrc || image.src;
      enlarged.alt = image.alt || '';
      overlay.classList.add('is-open');
      var close = overlay.querySelector('.case-lightbox-close');
      if (close) close.focus();
    });
  });

  function setupCompareKeyboard(frame) {
    if (!frame || frame.dataset.caseKeyboardReady) return;
    frame.dataset.caseKeyboardReady = 'true';
    var handle = frame.querySelector('.case-compare-handle');
    handle.tabIndex = 0;
    handle.setAttribute('role', 'slider');
    handle.setAttribute('aria-label', 'Сравнение карточки товара: положение разделителя');
    handle.setAttribute('aria-valuemin', '0');
    handle.setAttribute('aria-valuemax', '100');
    handle.setAttribute('aria-valuenow', '50');
    handle.addEventListener('keydown', function (event) {
      var current = Number(handle.getAttribute('aria-valuenow')) || 0;
      var next = current;
      if (event.key === 'ArrowLeft') next -= 10;
      else if (event.key === 'ArrowRight') next += 10;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = 100;
      else return;
      event.preventDefault();
      next = Math.max(0, Math.min(100, next));
      frame.querySelector('.case-compare-before').style.clipPath = 'inset(0 ' + (100 - next) + '% 0 0)';
      handle.style.left = next + '%';
      handle.setAttribute('aria-valuenow', String(next));
    });
    frame.addEventListener('pointermove', function () {
      var position = parseFloat(handle.style.left);
      if (!isNaN(position)) handle.setAttribute('aria-valuenow', String(Math.round(position)));
    });
  }
  document.querySelectorAll('.case-compare-frame').forEach(setupCompareKeyboard);
  var compareTrigger = null;
  document.addEventListener('click', function (event) {
    if (event.target.closest('.case-compare-lightbox-close') || event.target.matches('.case-compare-lightbox')) {
      if (compareTrigger) compareTrigger.focus();
    }
    if (event.target.closest('.case-lightbox-close') && lastKeyboardImage) lastKeyboardImage.focus();
    var modeTab = event.target.closest('.case-compare-tab');
    if (modeTab) {
      var modeHandle = modeTab.closest('.case-compare').querySelector('.case-compare-handle');
      if (modeHandle) modeHandle.setAttribute('aria-valuenow', '50');
    }
    var zoom = event.target.closest('.case-compare-zoom');
    if (!zoom) return;
    compareTrigger = zoom;
    var lightbox = document.querySelector('.case-compare-lightbox.is-open');
    if (!lightbox) return;
    setupCompareKeyboard(lightbox.querySelector('.case-compare-frame'));
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    var close = lightbox.querySelector('.case-compare-lightbox-close');
    if (close) close.focus();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    if (compareTrigger && document.activeElement.closest('.case-compare-lightbox')) compareTrigger.focus();
    if (lastKeyboardImage && document.activeElement.closest('.case-lightbox-overlay')) lastKeyboardImage.focus();
  });

  // The export preserves whitespace. Moving only elements otherwise leaves
  // all separator newlines before the first section and produces a large gap.
  Array.prototype.slice.call(container.childNodes).forEach(function (node) {
    if (node.nodeType === 3 && !node.textContent.trim()) node.remove();
  });
})();
