# Карта страниц для прямого редактирования

Файлы в этом репозитории — текущая рабочая версия. Названия старых генераторов приведены только в [истории сборки](HANDOFF.md); для изменения страницы откройте файл во втором столбце.

| Публичный путь | Файл в `main` | Примечание |
| --- | --- | --- |
| `/` | `index.html` | Главная; шапка и кнопки подключают файлы из `components/`, подвал внутри страницы. |
| `/case-169/` | `case-169/index.html` | Авторский кейс 169.ru; ссылки на шапку, кнопки и подвал из `components/`. |
| `/cases/` | `cases/index.html` | Список кейсов; часть карточек ещё из шаблона. |
| `/cases/axiom/` | `cases/axiom/index.html` | Сейчас дублирует 169.ru; отдельный авторский кейс не подтверждён. |
| `/cases/essentia/`, `/cases/orbital/`, `/cases/quantum/` | соответствующий `cases/<имя>/index.html` | Страницы исходного шаблона. |
| `/feed/` | `feed/index.html` | Лента. |
| `/blog/` | `blog/index.html` | Список статей. |
| `/blog/<статья>/` | `blog/<статья>/index.html` | Три опубликованные статьи; имена папок видны в репозитории. |
| `/privacy-policy/`, `/terms/` | соответствующий `index.html` | Служебные страницы. |
| `/404.html` | `404.html` | Страница ошибки. |
| `/daria-maksimova-resume.pdf` | `daria-maksimova-resume.pdf` | Публичное резюме. |

## Файлы для быстрых правок

| Публичный путь | Content-файл |
| --- | --- |
| `/` | `content/home.js` |
| `/case-169/` | `content/case-169.js` |
| `/cases/` | `content/cases.js` |
| `/cases/essentia/` | `content/cases-essentia.js` |
| `/cases/orbital/` | `content/cases-orbital.js` |
| `/cases/quantum/` | `content/cases-quantum.js` |
| `/feed/` | `content/feed.js` |
| `/blog/` | `content/blog.js` |
| `/blog/designing-for-human-connection/` | `content/blog-designing-for-human-connection.js` |
| `/blog/how-designers-and-developers-can-actually-collaborate/` | `content/blog-how-designers-and-developers-can-actually-collaborate.js` |
| `/blog/why-faster-isnt-always-better/` | `content/blog-why-faster-isnt-always-better.js` |
| `/privacy-policy/` | `content/privacy-policy.js` |
| `/terms/` | `content/terms.js` |

Маршрут `/cases/axiom/` — устаревшая копия без общего компонента шапки, поэтому автоматический загрузчик к нему пока не подключён. Не редактируйте этот большой HTML без отдельного согласования.

Для нового маршрута имя content-файла образуется из пути заменой `/` на `-`. Создание content-файла одновременно с новой страницей обязательно по [правилам работы с сайтом](GITHUB-WORKFLOW.md).

## Не входит в публикацию

Старые генераторы и их промежуточные файлы, английские дубли, кэш, диагностика, Excel и CSV-выгрузки не хранятся в этом репозитории. Не добавляйте их при обновлении сайта.

Маршрута для кейса `106` в репозитории нет. Сейчас единственный подтверждённый авторский кейс — `/case-169/`.

На дополнительных страницах `/cases/` и `/blog/` остаются материалы шаблона Joseph Alexander. Они включены в публикацию по решению владелицы сайта.
