import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index.js";
import { I as Icon } from "../../../chunks/Icon.js";
const dataSource = "/_app/immutable/assets/product-data-c943bbb1.png";
const telematics = "/_app/immutable/assets/product-title-blue-60e6630b.png";
const forecast = "/_app/immutable/assets/product-title-yellow-a8f41c7b.png";
const telematicsImg1 = "/_app/immutable/assets/product-image-1-2797b661.png";
const telematicsImg2 = "/_app/immutable/assets/product-image-2-f431d2fc.png";
const forecastImg1 = "/_app/immutable/assets/product-image-3-a3166aef.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{width:100%}main.svelte-19tcfjl .product-section-wrapper.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{max-width:1200px;position:relative;padding-top:5rem;margin:0 auto}.product-icon.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{margin:6rem 0}.product-title-container.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{text-align:center;margin-top:6rem;display:flex;flex-direction:column;align-items:center}.product-title-container.svelte-19tcfjl h1.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{font-size:4rem;color:var(--brand-primary-red);padding:0 4rem}.product-title-container.svelte-19tcfjl p.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{font-size:2rem;color:var(--bright2);padding:1rem 5rem}@media screen and (max-width: 390px){.product-title-container.svelte-19tcfjl h1.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{font-size:3.5rem;padding:0}.product-title-container.svelte-19tcfjl p.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{font-size:1.5rem;padding:1rem}}.product-data-source-container.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{text-align:center;display:flex;flex-direction:column;align-items:center;margin:3rem 0}.product-data-source-container.svelte-19tcfjl h2.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{font-size:4rem;color:var(--brand-primary-red);padding:0 4rem}.product-data-source-container.svelte-19tcfjl p.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{font-size:2rem;color:var(--bright2);padding:0 8rem;margin-bottom:6rem}.product-data-source-container.svelte-19tcfjl img.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{width:70%;margin:0 auto;height:auto;object-fit:contain;margin-bottom:6rem}@media screen and (max-width: 760px){.product-data-source-container.svelte-19tcfjl p.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{padding:0 4rem}.product-data-source-container.svelte-19tcfjl img.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{width:80%;margin:0 auto}}@media screen and (max-width: 390px){.product-data-source-container.svelte-19tcfjl h2.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{font-size:3.5rem;padding:0}.product-data-source-container.svelte-19tcfjl p.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{font-size:1.5rem;padding:1rem}.product-data-source-container.svelte-19tcfjl img.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{width:90%}}.product-telematics-container.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.product-telematics-container.svelte-19tcfjl .product-telematics-subtitle.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{color:var(--bright2);font-size:2rem;padding:2rem 8rem}@media screen and (max-width: 760px){.product-telematics-container.svelte-19tcfjl .product-telematics-subtitle.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{padding:1rem 4rem}}@media screen and (max-width: 390px){.product-telematics-container.svelte-19tcfjl .product-telematics-subtitle.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{font-size:1.5rem;padding:1rem}}.product-telematics-container.svelte-19tcfjl article.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{display:flex;align-items:center;justify-content:space-around;margin:4rem 0;gap:2rem}.product-telematics-container.svelte-19tcfjl article.svelte-19tcfjl div.svelte-19tcfjl.svelte-19tcfjl{display:flex;flex-direction:column;justify-content:center;flex:1}.product-telematics-container.svelte-19tcfjl article.svelte-19tcfjl div h4.svelte-19tcfjl.svelte-19tcfjl{font-size:1.5rem;color:var(--brand-primary-red)}.product-telematics-container.svelte-19tcfjl article.svelte-19tcfjl div.svelte-19tcfjl p.svelte-19tcfjl{color:var(--bright2);font-size:1.2rem;padding:0.5rem 3rem}.product-telematics-container.svelte-19tcfjl article.svelte-19tcfjl div.svelte-19tcfjl img.svelte-19tcfjl{width:100%;margin:0 auto;object-fit:contain}@media screen and (max-width: 760px){.product-telematics-container.svelte-19tcfjl p.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{padding:0}.product-telematics-container.svelte-19tcfjl img.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{width:80%;margin:0 auto}.product-telematics-container.svelte-19tcfjl article.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{flex-direction:column;gap:3rem}}.product-forecast-container.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.product-forecast-container.svelte-19tcfjl p.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{color:var(--bright2);font-size:2rem;padding:0.5rem 3rem}.product-forecast-container.svelte-19tcfjl article.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{display:flex;align-items:center;justify-content:space-around;margin:4rem 0}.product-forecast-container.svelte-19tcfjl article.svelte-19tcfjl h4.svelte-19tcfjl.svelte-19tcfjl{font-size:1.5rem;color:var(--brand-primary-red)}.product-forecast-container.svelte-19tcfjl article.svelte-19tcfjl p.svelte-19tcfjl.svelte-19tcfjl{font-size:1rem}.product-forecast-container.svelte-19tcfjl article .product-forecast-content.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{width:70%}@media screen and (max-width: 760px){.product-forecast-container.svelte-19tcfjl p.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{padding:0}.product-forecast-container.svelte-19tcfjl img.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{width:80%;margin:0 auto}.product-forecast-container.svelte-19tcfjl article.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{flex-direction:column;gap:2rem}}@media screen and (max-width: 390px){.product-forecast-container.svelte-19tcfjl p.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{font-size:1.5rem;padding:1rem}.product-forecast-container.svelte-19tcfjl img.svelte-19tcfjl.svelte-19tcfjl.svelte-19tcfjl{width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1xxaypz_START -->${$$result.title = `<title>Our Product</title>`, ""}<meta name="${"description"}" content="${"Our Product"}"><meta charset="${"utf-8"}"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1"}"><meta content="${"S.I.T. Technologies Co., Ltd."}" property="${"og:site_name"}"><!-- HEAD_svelte-1xxaypz_END -->`, ""}

<main class="${"svelte-19tcfjl"}"><div class="${"product-section-wrapper svelte-19tcfjl"}"><section class="${"product-title-container svelte-19tcfjl"}"><h1 class="${"svelte-19tcfjl"}">Unlocking Accurate Forecasting
    </h1>
    <p class="${"svelte-19tcfjl"}">Leveraging Human Knowledge and 
Careful Selection of Training Methods and Data Sets</p>
    <div class="${"product-icon svelte-19tcfjl"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "material-symbols:keyboard-arrow-down-rounded",
      color: "#fe1359",
      width: "44",
      height: "44"
    },
    {},
    {}
  )}</div></section>
  
  <section class="${"product-data-source-container svelte-19tcfjl"}"><h2 class="${"svelte-19tcfjl"}">Data Source
    </h2>
    <p class="${"svelte-19tcfjl"}">Combining different Data to train our AI Machine, to detect upcoming errors.</p>
    <div class="${"svelte-19tcfjl"}"><img${add_attribute("src", dataSource, 0)} alt="${"data "}" class="${"svelte-19tcfjl"}"></div>
    <div class="${"product-icon svelte-19tcfjl"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "material-symbols:keyboard-arrow-down-rounded",
      color: "#fe1359",
      width: "44",
      height: "44"
    },
    {},
    {}
  )}</div></section>
  <section class="${"product-telematics-container svelte-19tcfjl"}"><div class="${"svelte-19tcfjl"}"><img${add_attribute("src", telematics, 0)} alt="${"unique telematics"}" class="${"svelte-19tcfjl"}"></div>
    <p class="${"product-telematics-subtitle svelte-19tcfjl"}">Is designed for Automotive, Repair-Shops, Fleets, Transportation, smart cities and Insurance companies. </p>
    <article class="${"svelte-19tcfjl"}"><div class="${"product-telematics-content svelte-19tcfjl"}"><h4 class="${"svelte-19tcfjl"}">A small computer</h4>
        <p class="${"svelte-19tcfjl"}">Software as well as Hardware is designed in-house by our own engineers.</p>
      <div class="${"svelte-19tcfjl"}"><img${add_attribute("src", telematicsImg1, 0)} alt="${"small computer designed in-house by our team"}" class="${"svelte-19tcfjl"}"></div></div>
      <div class="${"product-telematics-content svelte-19tcfjl"}"><h4 class="${"svelte-19tcfjl"}">Smart central platform</h4>
          <p class="${"svelte-19tcfjl"}">We also designed our own platform to unite all the needed functions and information in one place. 
          </p>
        <div class="${"svelte-19tcfjl"}"><img${add_attribute("src", telematicsImg2, 0)} alt="${"small computer designed in-house by our team"}" class="${"svelte-19tcfjl"}"></div></div></article>
    <div class="${"product-icon svelte-19tcfjl"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "material-symbols:keyboard-arrow-down-rounded",
      color: "#fe1359",
      width: "44",
      height: "44"
    },
    {},
    {}
  )}</div></section>
  <section class="${"product-forecast-container svelte-19tcfjl"}"><div class="${"svelte-19tcfjl"}"><img${add_attribute("src", forecast, 0)} alt="${"unique forecast"}" class="${"svelte-19tcfjl"}"></div>
        <p class="${"svelte-19tcfjl"}">A new AI driven technology for Industries like Robotics IC - and Electric Engines and production plants.</p>
      <article class="${"svelte-19tcfjl"}"><div class="${"product-forecast-content svelte-19tcfjl"}"><h4 class="${"svelte-19tcfjl"}">IC-Engine &amp; Sensors </h4>
          <p class="${"svelte-19tcfjl"}">We installed 2 microphones and 1 vibration sensor to an Internal Combustion Engine.With this installations, we are able to record data in a real environment to train our AI-Machine.</p></div>
        <div class="${"svelte-19tcfjl"}"><img${add_attribute("src", forecastImg1, 0)} alt="${"Unique forecasting"}" class="${"svelte-19tcfjl"}"></div></article></section></div>
</main>`;
});
export {
  Page as default
};
