# UI components

`components/` is the only source for shared UI in this static portfolio.

- `header/header.css` and `header/header.js` define the rendered Header.
- Header has exactly two responsive modes: desktop from `768px` and mobile below `768px`.
- `button/button.css` and `button/button.js` define the Button contract and adopt existing Framer CTA markup.
- `footer/footer.css` and `footer/footer.js` define the Footer contract, including its message and responsive social-link layout.
- `Inter` is the shared typeface; UI Kit displays the 100-900 weight range.
- `../ui-kit.html` is a live demonstration of these exact sources; it contains no visual copies of Header or Button.

## Mandatory workflow

1. Before every UI change, check whether the element already exists in `components/`.
2. If it exists, change only its source here, then check all states and responsive behavior in `ui-kit.html`.
3. If it does not exist, create it in `components/`, add its live source-backed example to `ui-kit.html`, and only then use it on a page.
4. Do not add page-specific Header, Button, Footer, or other shared-component styles/markup. Unique page sections may remain local.
