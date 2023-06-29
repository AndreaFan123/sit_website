import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../chunks/index.js";
import { I as Icon } from "../../chunks/Icon.js";
const ArrowIcon_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".arrow-icon.svelte-q36e6c{padding:8rem 0}",
  map: null
};
const ArrowIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"arrow-icon svelte-q36e6c"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "material-symbols:keyboard-arrow-down-rounded",
      color: "#fe1359",
      width: "44",
      height: "44"
    },
    {},
    {}
  )}
</div>`;
});
const cube_1 = "/_app/immutable/assets/landing-diamond-1-7a624059.png";
const cube_2 = "/_app/immutable/assets/landing-diamond-2-4b7b3ad2.png";
const Chart = "/_app/immutable/assets/landing-line-chart-3834afcc.png";
const nvidaLogo = "/_app/immutable/assets/landing_nvida_logo-31623f5c.png";
const fcLogo = "/_app/immutable/assets/landing_fc_university-893550a3.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-1gmzdxr.svelte-1gmzdxr{width:100%}.home-wrapper.svelte-1gmzdxr.svelte-1gmzdxr{width:100%;position:relative;padding-top:5rem}.home-wrapper.svelte-1gmzdxr .home-bg.svelte-1gmzdxr{background-image:url("../lib/assets/landing/landing-bg.png");min-height:90vh;background-position:center;background-repeat:no-repeat;background-size:cover;filter:brightness(25%)}.home-wrapper.svelte-1gmzdxr .home-diagnostics-container.svelte-1gmzdxr{width:100%;position:absolute;color:aliceblue;top:5rem;display:flex;flex-direction:column;margin-top:4rem}.home-wrapper.svelte-1gmzdxr .home-diagnostics-container .home-diagnostics-content-container.svelte-1gmzdxr{max-width:1200px;margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center;padding:2rem 0}.home-wrapper.svelte-1gmzdxr .home-diagnostics-container .home-diagnostics-content-container h1.svelte-1gmzdxr{font-size:5rem;color:var(--brand-primary-red);padding:1rem 0}.home-wrapper.svelte-1gmzdxr .home-diagnostics-container .home-diagnostics-content-container h3.svelte-1gmzdxr{font-size:2rem;color:var(--brand-primary-red);padding-bottom:1rem}.home-wrapper.svelte-1gmzdxr .home-diagnostics-container .home-diagnostics-content-container p.svelte-1gmzdxr{width:100%;max-width:1000px;font-size:1.5rem}@media screen and (max-width: 400px){.home-wrapper.svelte-1gmzdxr .home-diagnostics-container .home-diagnostics-content-container h1.svelte-1gmzdxr{font-size:4rem}}.home-wrapper.svelte-1gmzdxr .home-section-preventive.relative.svelte-1gmzdxr{width:100%;position:relative;color:#fafafa;margin:5rem 0}.home-wrapper.svelte-1gmzdxr .home-section-preventive.relative .home-preventive-content-container.svelte-1gmzdxr{max-width:1200px;margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center;padding:4rem 2rem}.home-wrapper.svelte-1gmzdxr .home-section-preventive.relative .home-preventive-content-container h2.svelte-1gmzdxr{font-size:4rem;color:var(--brand-primary-red)}.home-wrapper.svelte-1gmzdxr .home-section-preventive.relative .home-preventive-content-container p.svelte-1gmzdxr{width:100%;max-width:1000px;font-size:1.5rem;padding-bottom:1rem}.home-wrapper.svelte-1gmzdxr .home-section-preventive.relative .home-preventive-content-container h3.svelte-1gmzdxr{font-size:2rem;color:var(--brand-primary-red)}.home-wrapper.svelte-1gmzdxr .home-section-preventive.relative .home-preventive-content-container .cube-1.svelte-1gmzdxr{position:absolute;top:50px;left:80px;z-index:-10}.home-wrapper.svelte-1gmzdxr .home-section-preventive.relative .home-preventive-content-container .cube-2.svelte-1gmzdxr{position:absolute;top:150px;right:130px;z-index:-10}@media screen and (max-width: 400px){.home-wrapper.svelte-1gmzdxr .home-section-preventive.relative .home-preventive-content-container h2.svelte-1gmzdxr{font-size:3rem}.home-wrapper.svelte-1gmzdxr .home-section-preventive.relative .home-preventive-content-container h3.svelte-1gmzdxr{font-size:1.8rem}.home-wrapper.svelte-1gmzdxr .home-section-preventive.relative .home-preventive-content-container .cube-1.svelte-1gmzdxr{top:30x;left:30px;width:100px}.home-wrapper.svelte-1gmzdxr .home-section-preventive.relative .home-preventive-content-container .cube-2.svelte-1gmzdxr{top:520px;right:50px;width:100px}}.home-wrapper.svelte-1gmzdxr .home-chart-section.svelte-1gmzdxr{width:100%;color:#fafafa;display:flex;flex-direction:column;align-items:center}.home-wrapper.svelte-1gmzdxr .home-chart-content-container.svelte-1gmzdxr{max-width:1200px;margin:0 auto;display:flex}.home-wrapper.svelte-1gmzdxr .home-chart-content-container .home-chart-content.svelte-1gmzdxr{flex:1;padding:1rem;text-align:center}.home-wrapper.svelte-1gmzdxr .home-chart-content-container .home-chart-content p.svelte-1gmzdxr{font-size:1.5rem;padding-bottom:1rem}.home-wrapper.svelte-1gmzdxr .home-chart-content-container .home-chart-content p span.svelte-1gmzdxr{color:var(--brand-primary-red);font-weight:900}.home-wrapper.svelte-1gmzdxr .home-chart-content-container .home-chart-content h3.svelte-1gmzdxr{font-size:2rem;color:var(--brand-primary-red)}@media screen and (max-width: 400px){.home-wrapper.svelte-1gmzdxr .home-chart-content-container .home-chart-content h3.svelte-1gmzdxr{font-size:1.7rem}}.home-wrapper.svelte-1gmzdxr .home-chart-content-container .home-chart.svelte-1gmzdxr{width:700px;height:500px;flex:1;padding:1rem}@media screen and (max-width: 900px){.home-wrapper.svelte-1gmzdxr .home-chart-content-container.svelte-1gmzdxr{flex-direction:column}}.home-wrapper.svelte-1gmzdxr .home-chart-content-container .home-chart.svelte-1gmzdxr{width:auto;height:auto}.home-wrapper.svelte-1gmzdxr .home-partner-section.svelte-1gmzdxr{width:100%;color:#fafafa}.home-wrapper.svelte-1gmzdxr .home-partner-section .home-partner-container.svelte-1gmzdxr{max-width:1200px;margin:0 auto;display:flex;flex-direction:column;align-items:center;padding:3rem 0}.home-wrapper.svelte-1gmzdxr .home-partner-section .home-partner-container h2.svelte-1gmzdxr{font-size:4rem;color:var(--brand-primary-red)}@media screen and (max-width: 700px){.home-wrapper.svelte-1gmzdxr .home-partner-section .home-partner-container h2.svelte-1gmzdxr{text-align:center}}@media screen and (max-width: 400px){.home-wrapper.svelte-1gmzdxr .home-partner-section .home-partner-container h2.svelte-1gmzdxr{font-size:3rem}}.home-wrapper.svelte-1gmzdxr .home-partner-section .home-partner-container .home-partner-logo-container.svelte-1gmzdxr{padding:3rem 0;display:flex;align-items:center}.home-wrapper.svelte-1gmzdxr .home-partner-section .home-partner-container .home-partner-logo-container .home-partner-fc.svelte-1gmzdxr{width:200px}.home-wrapper.svelte-1gmzdxr .home-partner-section .home-partner-container .home-partner-logo-container div.svelte-1gmzdxr{width:370px;height:auto img;height-display:block;height-max-width:100%}@media screen and (max-width: 700px){.home-wrapper.svelte-1gmzdxr .home-partner-section .home-partner-container .home-partner-logo-container.svelte-1gmzdxr{flex-direction:column}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1bp55wm_START -->${$$result.title = `<title>Welcome to SIT</title>`, ""}<meta name="${"description"}" content="${"Welcome to SIT"}"><meta charset="${"utf-8"}"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1"}"><meta content="${"S.I.T. Technologies Co., Ltd."}" property="${"og:site_name"}"><!-- HEAD_svelte-1bp55wm_END -->`, ""}

<main class="${"svelte-1gmzdxr"}"><div class="${"home-wrapper svelte-1gmzdxr"}">
    <div class="${"home-bg svelte-1gmzdxr"}"></div>
    <section class="${"home-diagnostics-container svelte-1gmzdxr"}"><div class="${"home-diagnostics-content-container svelte-1gmzdxr"}"><div class="${"home-content svelte-1gmzdxr"}"><h1 class="${"svelte-1gmzdxr"}">Diagnostics</h1>
        <h3 class="${"svelte-1gmzdxr"}">Human knowledge is needed. Industry 5.0!</h3>
        <p class="${"svelte-1gmzdxr"}">The key of the next technical revolution. Let us imagine that we can detect and narrow
          upcoming errors and damages, before they really happen. We use our trained AI machines to
          achieve this.
        </p></div>
        ${validate_component(ArrowIcon, "ArrowIcon").$$render($$result, {}, {}, {})}</div></section>

    
    <section class="${"home-section-preventive relative svelte-1gmzdxr"}"><div class="${"home-preventive-content-container svelte-1gmzdxr"}"><span class="${"cube-1 svelte-1gmzdxr"}"><img${add_attribute("src", cube_1, 0)} alt="${"diamond"}"></span>
        <div class="${"svelte-1gmzdxr"}"><h2 class="${"svelte-1gmzdxr"}">Preventive Forecasting</h2>
          <p class="${"svelte-1gmzdxr"}">The most important part of maintaining Engines, Machines and Production-Lines. For fast
            rectification of the error and damage, it is of advantage to have enough experienced
            technicians.
          </p>
          <h3 class="${"svelte-1gmzdxr"}">Real data from real environments for AI training.</h3></div>
        <span class="${"cube-2 svelte-1gmzdxr"}"><img${add_attribute("src", cube_2, 0)} alt="${"diamond"}"></span>
        ${validate_component(ArrowIcon, "ArrowIcon").$$render($$result, {}, {}, {})}</div></section>

    
    <section class="${"home-chart-section svelte-1gmzdxr"}"><div class="${"home-chart-content-container svelte-1gmzdxr"}"><div class="${"home-chart-content svelte-1gmzdxr"}"><p class="${"svelte-1gmzdxr"}">Downtime can cause significant productivity loss for factories, with most experiencing a
            minimum of <span class="${"svelte-1gmzdxr"}">5%</span> and some losing up to <span class="${"svelte-1gmzdxr"}">20%</span>.
          </p>
          <p class="${"svelte-1gmzdxr"}">Unfortunately, nearly <span class="${"svelte-1gmzdxr"}">80%</span> of companies are unable to accurately calculate the
            cost of downtime.
          </p>
          <h3 class="${"svelte-1gmzdxr"}">Your 1 minute ≈ $ 22,000 <br> Your 1 hour ≈ $ 1.3 million</h3></div>
        <div class="${"home-chart svelte-1gmzdxr"}"><img${add_attribute("src", Chart, 0)} alt="${"Chart that represents the productivity loss"}"></div></div>
      ${validate_component(ArrowIcon, "ArrowIcon").$$render($$result, {}, {}, {})}</section>
    <section class="${"home-partner-section svelte-1gmzdxr"}"><div class="${"home-partner-container svelte-1gmzdxr"}"><h2 class="${"svelte-1gmzdxr"}">Partners &amp; Supporters</h2>
        <div class="${"home-partner-logo-container svelte-1gmzdxr"}"><div class="${"svelte-1gmzdxr"}"><img${add_attribute("src", nvidaLogo, 0)} alt="${"nvida logo"}"></div>
          <div class="${"home-partner-fc svelte-1gmzdxr"}"><img${add_attribute("src", fcLogo, 0)} alt="${"Feng Chia University Logo"}"></div></div></div></section></div>
</main>`;
});
export {
  Page as default
};
