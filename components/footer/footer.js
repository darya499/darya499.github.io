/* Portfolio Footer: the sole source for the shared footer content and links. */
(() => {
  const copy = Object.freeze({ lead: "Есть задача?", response: "Давайте обсудим" });
  const root = new URL('../../', document.currentScript.src).href;
  const rootPath = new URL(root).pathname;
  const pathname = location.pathname.replace(/\\/g, "/");
  const relativePath = pathname.startsWith(rootPath) ? pathname.slice(rootPath.length) : pathname;
  const isSubpage = relativePath !== "" && relativePath !== "index.html";
  const home = isSubpage ? root : "";
  const casesHref = isSubpage ? new URL("cases/", root).href : "#projects";
  const feedHref = isSubpage ? new URL("feed/", root).href : "#feed";
  const setkaLogoHref = new URL("setka-logo-dark.svg", root).href;
  const socialLinks = Object.freeze([
    `<a aria-label="Behance Link" class="framer-1bwrckd framer-dsijwc" data-framer-name="Behance" href="https://www.behance.net/desWork" target="_blank" rel="noopener noreferrer"><div class="framer-1dpbkj-container" data-framer-name="Behance Logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" aria-hidden="true"><path d="M92 120H64V96H92a12 12 0 0 1 0 24Zm4 16H64v32H96a16 16 0 0 0 0-32Zm80-16a24 24 0 0 0-22.62 16h45.24A24 24 0 0 0 176 120Zm64-64V200a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16H224a16 16 0 0 1 16 16ZM144 88a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16H152a8 8 0 0 0-8 8Zm-16 64a32 32 0 0 0-14.13-26.53A28 28 0 0 0 92 80H56a8 8 0 0 0-8 8v88a8 8 0 0 0 8 8H96a32 32 0 0 0 32-32Zm88-8a40 40 0 1 0-13.54 30 8 8 0 0 0-10.59-12 24 24 0 0 1-38.49-10H208a8 8 0 0 0 8-8Z"></path></svg></div></a>`,
    `<a aria-label="Telegram Link" class="framer-nnayh3 framer-dsijwc" data-framer-name="Telegram" href="https://t.me/design_dora" target="_blank" rel="noopener noreferrer"><svg class="framer-sqQM3 framer-n31vj8" role="presentation" viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.14-3.05-2 1.92c-.21.21-.4.4-.8.4z"></path></svg></a>`,
    `<a aria-label="LinkedIn Link" class="framer-nnayh3 framer-dsijwc" data-framer-name="LinkedIn" href="https://www.linkedin.com/in/daria-maksimova-126a39414" target="_blank" rel="noopener noreferrer"><svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg></a>`,
    `<a aria-label="Setka Link" class="framer-nnayh3 framer-dsijwc" data-framer-name="Setka" href="https://set.ki/RfGjo3Z" target="_blank" rel="noopener noreferrer"><img src="${setkaLogoHref}" alt="" width="16" height="16"></a>`,
    `<a aria-label="hh.ru Link" class="framer-nnayh3 framer-dsijwc" data-framer-name="hh.ru" href="https://hh.ru/resume/7f380331ff076310d20039ed1f5141316d786b" target="_blank" rel="noopener noreferrer"><svg width="26" height="14" viewBox="0 0 26 14" aria-hidden="true"><text x="13" y="11" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-weight="800" font-size="11" letter-spacing="-0.5">hh</text></svg></a>`
  ]);
  const menuLinks = Object.freeze([
    ["Кейсы", casesHref],
    ["Лента", feedHref],
    ["Резюме", home + "#about"],
    ["Контакты", home + "#contact"]
  ]);

  function setText(root, selector, value) {
    const element = root.querySelector(selector);
    if (element) element.textContent = value;
  }

  function adoptLegacyFooter(footer) {
    if (!footer.textContent.includes("Джозеф")) return;
    footer.dataset.footerLegacyAdopted = "true";

    const social = footer.querySelector('[data-framer-name="Social Links"]');
    if (social) {
      const targets = [...social.querySelectorAll("a")];
      socialLinks.forEach((markup, index) => {
        if (targets[index]) targets[index].outerHTML = markup;
      });
    }

    const legacyMenu = [...footer.querySelectorAll('a[href^="../"]')];
    menuLinks.forEach(([label, href], index) => {
      const link = legacyMenu[index];
      if (!link) return;
      link.textContent = label;
      link.setAttribute("href", href);
    });

    footer.querySelector('[data-framer-name="Legal Links"]')?.closest('[data-framer-name="Legal Links"]')?.setAttribute("hidden", "");
    footer.querySelector('[data-framer-name="Legal / Copyright"] [class*="4os20q"]')?.setAttribute("hidden", "");
    footer.querySelector('[data-framer-name="Fit Text"]')?.setAttribute("hidden", "");
  }

  function configureFooter(footer) {
    footer.dataset.footerComponent = "portfolio-footer";
    footer.id ||= "contact";
    footer.setAttribute("aria-label", `${copy.lead} ${copy.response}`);
    adoptLegacyFooter(footer);
    if (document.querySelectorAll("footer").length === 1) {
      const variant = footer.closest(".ssr-variant");
      if (variant) {
        [...variant.classList].filter(name => name.startsWith("hidden-")).forEach(name => variant.classList.remove(name));
      }
    }
    setText(footer, '[data-framer-name="Lets"] p', copy.lead);
    setText(footer, '[data-framer-name="incredible work together."] p', copy.response);
    setText(footer, '[data-framer-name="Email"] > div:first-child p', "Email");
    setText(footer, '[data-framer-name="Book a Call"] > div:first-child p', "Telegram");
    const telegram = footer.querySelector('[data-framer-name="Book a Call"] a');
    if (telegram) {
      telegram.setAttribute("href", "https://t.me/design_dora");
      telegram.setAttribute("target", "_blank");
      telegram.setAttribute("rel", "noopener noreferrer");
      telegram.textContent = "@design_dora";
    }
  }

  function init() { document.querySelectorAll("footer").forEach(configureFooter); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
  window.PortfolioFooter = Object.freeze({ copy, init });
})();
