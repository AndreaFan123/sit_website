import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.contact-container.svelte-1w2jaj8.svelte-1w2jaj8{width:100%;position:relative}.contact-container.svelte-1w2jaj8 .contact-bg.svelte-1w2jaj8{background-image:url("../../lib/assets/contact/contact_map.png");min-height:90vh;background-position:center;background-repeat:no-repeat;background-size:cover;filter:brightness(80%)}.contact-container.svelte-1w2jaj8 article.svelte-1w2jaj8{background-color:#000;border-radius:5px;color:#fafafa;position:absolute;top:20%;left:5%;z-index:100;padding:2rem;text-align:center;width:30%;display:flex;flex-direction:column;gap:1.5rem}.contact-container.svelte-1w2jaj8 article h1.svelte-1w2jaj8{font-size:3rem;color:var(--brand-primary-red)}@media screen and (max-width: 950px){.contact-container.svelte-1w2jaj8 article.svelte-1w2jaj8{top:20%;width:60%}}@media screen and (max-width: 530px){.contact-container.svelte-1w2jaj8 article.svelte-1w2jaj8{width:80%;padding:1.5rem;z-index:0}}@media screen and (max-width: 390px){.contact-container.svelte-1w2jaj8 article.svelte-1w2jaj8{width:80%;padding:1rem;z-index:0}.contact-container.svelte-1w2jaj8 article h1.svelte-1w2jaj8{font-size:2.5rem}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-h65izc_START -->${$$result.title = `<title>Contact Us</title>`, ""}<meta name="${"description"}" content="${"Contact us for more information about our products and services."}"><meta charset="${"utf-8"}"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1"}"><meta content="${"S.I.T. Technologies Co., Ltd."}" property="${"og:site_name"}"><!-- HEAD_svelte-h65izc_END -->`, ""}

<main><section class="${"contact-container svelte-1w2jaj8"}"><div class="${"contact-bg svelte-1w2jaj8"}"></div>
    <article class="${"svelte-1w2jaj8"}"><h1 class="${"svelte-1w2jaj8"}">Let&#39;s Connect!</h1>
      <div><h2>HQ Taiwan </h2>
        <p>S.I.T. Technologies Co., Ltd.</p>
      <p>喜德科技有限公司</p></div>
      <div><h2>Location</h2>
        <p>9F,3-2,YuanQu Street, Nankang District, 
Taipei, 11503,Taiwan, R.O.C</p>
<p>台北市南港區園區街3-2號9樓</p></div>
      <div>
      <h2>Email</h2>
      <a href="${"mailto: info@sit-technology.com"}">info@sit-technology.com</a></div></article></section>
</main>`;
});
export {
  Page as default
};
