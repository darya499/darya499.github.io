/* Content and layout overrides for /case-169/. */
window.SitePageContent = {
  sectionOrders: [
    {
      container: '.case-tasks',
      headingSelector: '.case-section-label',
      labels: [
        'Каталог и карточка товара',
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
