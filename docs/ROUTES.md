# Карта маршрутов и источников

| Публичный путь | Файл в пакете | Авторитетный исходник |
| --- | --- | --- |
| `/` | `index.html` | `daria-launchfolio-exact.html`, `final-body3.html`, `final2.css`, `assemble.py` |
| `/case-169/` | `case-169/index.html` | `case-169.html`, `build_case_169.py`, `assemble_case_169.py`, `pages_raw/projects-169-body-ru.html` |
| `/cases/` | `cases/index.html` | `other_pages_ru/projects.html` |
| `/cases/{axiom,essentia,orbital,quantum}/` | `cases/*/index.html` | соответствующие `other_pages_ru/projects-*.html` |
| `/feed/` | `feed/index.html` | `other_pages_ru/feed.html` |
| `/blog/` и три статьи | `blog/**/index.html` | `other_pages_ru/blog*.html` |
| `/privacy-policy/`, `/terms/` | соответствующие `index.html` | `other_pages_ru/privacy-policy.html`, `other_pages_ru/terms.html` |
| `/404.html` | `404.html` | `other_pages_ru/404.html` |

## Исключено намеренно

- `other_pages/` — английские дубли шаблона;
- промежуточные `final-body*.html`, `daria-launchfolio-merged.html`, `launchfolio-original.html` — рабочие/резервные исходники, не страницы публикации;
- папки кэша и диагностические файлы — не контент сайта.

Кейс `106` не указан, потому что в исходной папке нет файла, генератора или ассета с таким номером. Сейчас единственный подтверждённый кастомный кейс — `169`.

Страницы `/cases/` (кроме авторского `/case-169/`) и `/blog/` сохраняют материалы исходного шаблона Joseph Alexander. Маршрут `/cases/axiom/` собран из того же HTML-источника, что и кейс 169.ru; это не отдельный подтверждённый кейс. Эти страницы включены в публикацию по решению владелицы сайта.
