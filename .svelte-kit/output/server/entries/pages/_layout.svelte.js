import { c as create_ssr_component, b as subscribe, d as add_attribute, e as each, f as escape, v as validate_component } from "../../chunks/index.js";
import { s as sit_logo } from "../../chunks/sit_logo.js";
import { I as Icon } from "../../chunks/Icon.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.header-wrapper.svelte-t02bfq.svelte-t02bfq.svelte-t02bfq{z-index:100;margin:0 auto;right:0;left:0;position:relative;min-height:60px;border-bottom:2px solid var(--brand-primary-red);padding:0 2rem;position:fixed;background-color:black}.header-wrapper.svelte-t02bfq .header-container.svelte-t02bfq.svelte-t02bfq{margin:0 auto;padding:0 rem;height:80px;display:flex;justify-content:space-between;align-items:center}.header-wrapper.svelte-t02bfq .header-container .header-logoText.svelte-t02bfq.svelte-t02bfq{display:flex;align-items:center;gap:1rem}@media screen and (max-width: 600px){.header-wrapper.svelte-t02bfq .header-container .header-logoText a.svelte-t02bfq.svelte-t02bfq{display:none}}.header-wrapper.svelte-t02bfq .header-container .header-logoText a.svelte-t02bfq.svelte-t02bfq:hover{transition:all 0.3s ease-in-out;color:var(--brand-primary-red)}.desktop-navigation.svelte-t02bfq.svelte-t02bfq.svelte-t02bfq{display:block}.desktop-navigation.svelte-t02bfq ul.svelte-t02bfq.svelte-t02bfq{width:100%;display:flex;justify-content:space-between;gap:1rem}.desktop-navigation.svelte-t02bfq ul.svelte-t02bfq li a.svelte-t02bfq{position:relative;font-weight:800;padding:5px 10px}.desktop-navigation.svelte-t02bfq ul.svelte-t02bfq li a.active.svelte-t02bfq{color:var(--brand-primary-red)}.desktop-navigation.svelte-t02bfq ul.svelte-t02bfq li a.svelte-t02bfq:hover{color:var(--brand-primary-red);transition:all 0.3s ease-in 0s}.desktop-navigation.svelte-t02bfq ul.svelte-t02bfq li a.svelte-t02bfq:focus{outline:none;box-shadow:0 0 0 3px var(--brand-primary-red)}.desktop-navigation.svelte-t02bfq ul.svelte-t02bfq li a.svelte-t02bfq:after{content:"";display:block;position:absolute;width:0;bottom:0;height:2px;margin:-5px 0;left:0;background-color:var(--brand-primary-red);transition:all 0.3s ease-in 0s}.desktop-navigation.svelte-t02bfq ul.svelte-t02bfq li a.svelte-t02bfq:hover:after{width:100%}@media screen and (max-width: 700px){.desktop-navigation.svelte-t02bfq.svelte-t02bfq.svelte-t02bfq{display:none}}.mobile-navigation.svelte-t02bfq.svelte-t02bfq.svelte-t02bfq{position:relative;top:150px;left:130px;height:50vh;width:240px;background-color:black;display:flex;flex-direction:column-reverse;justify-content:flex-end;align-items:center;padding-top:3rem;box-shadow:-2px 0px 6px -1px rgba(79, 79, 79, 0.429);border-radius:5}.mobile-navigation.svelte-t02bfq ul.svelte-t02bfq.svelte-t02bfq{display:flex;flex-direction:column;gap:1.5rem;color:#fafafa;padding-top:2rem;font-size:1.2rem}.mobile-navigation.svelte-t02bfq ul.svelte-t02bfq li a.svelte-t02bfq{position:relative;font-weight:800;padding:5px 10px}.mobile-navigation.svelte-t02bfq ul.svelte-t02bfq li a.active.svelte-t02bfq{color:var(--brand-primary-red)}.mobile-navigation.svelte-t02bfq ul.svelte-t02bfq li a.svelte-t02bfq:hover{color:var(--brand-primary-red);transition:all 0.3s ease-in 0s}.mobile-navigation.svelte-t02bfq ul.svelte-t02bfq li a.svelte-t02bfq:focus{outline:none;box-shadow:0 0 0 3px var(--brand-primary-red)}.mobile-navigation.svelte-t02bfq ul.svelte-t02bfq li a.svelte-t02bfq:after{content:"";display:block;position:absolute;width:0;bottom:0;height:2px;margin:-5px 0;left:0;background-color:var(--brand-primary-red);transition:all 0.3s ease-in 0s}.mobile-navigation.svelte-t02bfq ul.svelte-t02bfq li a.svelte-t02bfq:hover:after{width:100%}.mobile-ham-btn.svelte-t02bfq.svelte-t02bfq.svelte-t02bfq{display:none}@media screen and (max-width: 700px){.mobile-ham-btn.svelte-t02bfq.svelte-t02bfq.svelte-t02bfq{display:block}}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let routeId;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const navLists = [
    { routeName: "Home", url: "/" },
    { routeName: "Product", url: "/product" },
    { routeName: "News", url: "/news" },
    { routeName: "Team", url: "/team" },
    { routeName: "Contact", url: "/contact" }
  ];
  $$result.css.add(css$1);
  routeId = $page.route.id;
  $$unsubscribe_page();
  return `<header class="${"header-wrapper svelte-t02bfq"}" role="${"navigation"}"><div class="${"header-container svelte-t02bfq"}"><div class="${"header-logoText svelte-t02bfq"}"><div class="${"header-logoImg"}"><img${add_attribute("src", sit_logo, 0)} alt="${"S.I.T Tech"}"></div>
      <a href="${"/"}" class="${"svelte-t02bfq"}">喜德科技有限公司 | S.I.T. Technology</a></div>
    <nav aria-label="${"desktop-navigation"}" class="${"desktop-navigation svelte-t02bfq"}"><ul class="${"svelte-t02bfq"}">${each(navLists, ({ routeName, url }) => {
    return `<li><a${add_attribute("href", url, 0)}${add_attribute("title", routeName, 0)} class="${["svelte-t02bfq", routeId === url ? "active" : ""].join(" ").trim()}">${escape(routeName)}</a>
          </li>`;
  })}</ul></nav>
    ${``}
    <button aria-label="${"Hambuger button"}" class="${"mobile-ham-btn svelte-t02bfq"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "material-symbols:menu-rounded",
      color: "#fe1359",
      width: "30",
      height: "30"
    },
    {},
    {}
  )}</button></div>
</header>`;
});
const ig = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFCSURBVHgBtVSBccIwDHQ6gUfwCIyQbtARskG8QdmgbEA3aDuBR6AbOBvABkaGlxHB4mI4/u5JsKy3bH1sjEBKyRN/iDEtQ54XiIPU6SDm6BGITsQOoAYLMibie9d1E1fIleVVe6I1C4H5gSvnwYEFTSMg+IF3FvbyT98oaMXZ9mDGb9n6ncRP4k40Zcw9QCxCyIlFosHLviLoku6CKISsyNmfCizquuAmnd2Rx1fEbyFsZ3nxnqjH+FY5lg3i6xbRgPGVIuoQ39VE30wdLv+Qkf9rwWLwa/MXaKIHrqgWFDuYWkT/8ByV+Dibd7Nq7UylB7dcGc7yS9pqlnfVqId8WskpPuVEqwh7uCHPy1/WOikXTtl1Ot+fGb15Auny7Qdp9OZbaiYaoDPwAB9BaKkYDb25T19384uVB9GUJYjoiZc6R/VrvVXEM6z3AAAAAElFTkSuQmCC";
const linkedin = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAVCAYAAACt4nWrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgB7ZPvDYIwEMWvxEHYwLhBnQRWcAIdwQ0IEygTUCcQJ7AjsEF9J/WDl5rUpnwg4Zc8/txrXsu1kHOuhHo3ceF3ygXC7u6bM2WigEpR21ImOLwVtZYyofiCVtQ0fYFRShlaAgqrbkTtgdW/NxWexq0Sfgf/Cu+IZ+3FjNAAHeAP5AMk/SeF2xXwm8AJk/DEtKH/qSPGnDDBraD5qFLDDbRDb/m07SEbGKNTev6UKbzxocanrLyTBf9vWFlPCR9/1G2O8GjW8DU8nhc+aNfTCUYkqQAAAABJRU5ErkJggg==";
const yt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADHSURBVHgBtZXhEYIwDIVfOQdwBEZgA2UC3QBHcBRHwAk4J0A30AnoBrhBTUrR/mvaM9/dawIX8jhyFwwCzrkzhR2pwY8aMmyI76CrMaZH1Hxw/2fk3oaSI8UBOrQVHQfo0bFBDT0aqUFLuiOfLSTTWqsp3fPwnJw5y6DEqMggx6iCNk4ACt78+yxpThYVNI4NJkFdduPAtMGynFKMKMPykF/Qwxv00OPmz8Lvm8JvaLNa0Y0ThQ68PxYxNWTYKH+SHvTDufDFB3NPuQ1Rco3jAAAAAElFTkSuQmCC";
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-12ulebm.svelte-12ulebm{width:100%;border-top:2px solid #fe1359}footer.svelte-12ulebm .footer-wrapper.svelte-12ulebm{max-width:1100px;min-height:250px;margin:0 auto;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:2rem}footer.svelte-12ulebm .footer-wrapper .footer-social-container ul.svelte-12ulebm{display:flex;justify-content:center;align-items:baseline;gap:1.5rem}footer.svelte-12ulebm .footer-wrapper .footer-social-container ul li a.svelte-12ulebm{border:1px solid #fafafa;border-radius:50%;display:flex;justify-content:center;align-items:center;width:50px;height:50px;transition:transform 750ms;will-change:transform}footer.svelte-12ulebm .footer-wrapper .footer-social-container ul li a.svelte-12ulebm:hover,footer.svelte-12ulebm .footer-wrapper .footer-social-container ul li a.svelte-12ulebm:focus{border:1px solid transparent;background-color:#fe1359;transform:translateY(-10px)}footer.svelte-12ulebm .footer-nav-container.svelte-12ulebm{width:100%}footer.svelte-12ulebm .footer-nav-container ul.svelte-12ulebm{display:flex;justify-content:center;gap:2rem}footer.svelte-12ulebm .footer-nav-container ul li a.svelte-12ulebm{transition:transform 750ms;will-change:transform}footer.svelte-12ulebm .footer-nav-container ul li a.svelte-12ulebm:hover,footer.svelte-12ulebm .footer-nav-container ul li a.svelte-12ulebm:focus{color:var(--brand-primary-red);transform:translateY(-10px)}@media screen and (max-width: 400px){footer.svelte-12ulebm .footer-nav-container ul.svelte-12ulebm{display:flex;gap:0;justify-content:space-around}}footer.svelte-12ulebm .footer-logo-contact-container.svelte-12ulebm{color:#fafafa;display:flex;flex-direction:column;align-items:center;gap:0.5rem}footer.svelte-12ulebm .footer-logo-contact-container .footer-logo-container.svelte-12ulebm{display:flex;align-items:center;gap:1rem}footer.svelte-12ulebm .footer-logo-contact-container .copyright-privacy.svelte-12ulebm{display:flex;gap:1rem}footer.svelte-12ulebm .footer-logo-contact-container .copyright-privacy a.svelte-12ulebm:hover{color:var(--brand-primary-red)}@media screen and (max-width: 400px){footer.svelte-12ulebm .footer-logo-contact-container.svelte-12ulebm{gap:1rem}footer.svelte-12ulebm .footer-logo-container.svelte-12ulebm{display:flex;flex-direction:column;gap:1rem}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-12ulebm"}"><div class="${"footer-wrapper svelte-12ulebm"}"><div class="${"footer-social-container"}"><ul class="${"svelte-12ulebm"}"><li><a href="${"#"}" target="${"_blank"}" class="${"svelte-12ulebm"}"><img${add_attribute("src", ig, 0)} alt="${"SIT instagram"}"></a></li>
        <li><a href="${"https://www.linkedin.com/company/s-i-t--industries/about/"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-12ulebm"}"><img${add_attribute("src", linkedin, 0)} alt="${"SIT Linkedin"}"></a></li>
        <li><a href="${"https://www.youtube.com/@SitTechnology"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"svelte-12ulebm"}"><img${add_attribute("src", yt, 0)} alt="${"SIT Youtube"}"></a></li></ul></div>
    <div class="${"footer-nav-container svelte-12ulebm"}"><ul class="${"svelte-12ulebm"}"><li><a href="${"/"}" class="${"svelte-12ulebm"}">Home</a></li>
        <li><a href="${"/product"}" class="${"svelte-12ulebm"}">Product</a></li>
        <li><a href="${"/news"}" class="${"svelte-12ulebm"}">News</a></li>
        <li><a href="${"/team"}" class="${"svelte-12ulebm"}">Team</a></li>
        <li><a href="${"/contact"}" class="${"svelte-12ulebm"}">Contact</a></li></ul></div>
    <div class="${"footer-logo-contact-container svelte-12ulebm"}"><div class="${"footer-logo-container svelte-12ulebm"}"><img${add_attribute("src", sit_logo, 0)} alt="${"logo"}">
        <div><span>喜德科技有限公司 | S.I.T Technology</span></div></div>
      <div class="${"copyright-privacy svelte-12ulebm"}"><p>© 2023 S.I.T Industry</p>
        <a href="${"/privacy-statement"}" class="${"svelte-12ulebm"}">Privacy</a></div></div></div>
</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
