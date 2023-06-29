import { c as create_ssr_component, e as each, d as add_attribute, f as escape } from "../../../chunks/index.js";
import { s as sit_logo } from "../../../chunks/sit_logo.js";
const image_1 = "/_app/immutable/assets/image-1-1ba3a4f3.jpg";
const image_2 = "/_app/immutable/assets/image-2-abb37054.jpg";
const image_3 = "/_app/immutable/assets/image-3-4db6481d.jpg";
const image_4 = "/_app/immutable/assets/image-4-972e4c21.jpg";
const image_5 = "/_app/immutable/assets/image-5-15afb00f.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-lwp0ol.svelte-lwp0ol{width:100%}main.svelte-lwp0ol .news-wrapper.svelte-lwp0ol{position:relative;padding-top:5rem}main.svelte-lwp0ol .news-title.svelte-lwp0ol{color:var(--brand-primary-red);font-size:1.5rem;text-align:center;margin:4rem 0}main.svelte-lwp0ol li.svelte-lwp0ol{display:flex;gap:2rem;justify-content:center;padding-bottom:3.5rem}@media screen and (max-width: 585px){main.svelte-lwp0ol li.svelte-lwp0ol{flex-direction:column;align-items:center;gap:1rem}}main.svelte-lwp0ol .news-imag-container.svelte-lwp0ol{width:400px}main.svelte-lwp0ol .news-imag-container img.svelte-lwp0ol{width:100%;height:auto;object-fit:contain;border-radius:3px}@media screen and (max-width: 585px){main.svelte-lwp0ol .news-imag-container.svelte-lwp0ol{width:90%}}.news-text-container.svelte-lwp0ol.svelte-lwp0ol{display:flex;flex-direction:column;justify-content:space-between;width:35%}.news-text-container.svelte-lwp0ol h2.svelte-lwp0ol{font-size:1.5rem;color:var(--brand-primary-red)}.news-text-container.svelte-lwp0ol p.svelte-lwp0ol{font-size:1.1rem;color:#fafafa}@media screen and (max-width: 585px){.news-text-container.svelte-lwp0ol.svelte-lwp0ol{width:90%}.news-text-container.svelte-lwp0ol p.svelte-lwp0ol{padding-bottom:1.5rem}}.news-logo-container.svelte-lwp0ol.svelte-lwp0ol{display:flex;align-items:center;gap:1rem;color:#fafafa}.news-logo-container.svelte-lwp0ol img.svelte-lwp0ol{width:40px;max-width:100%;height:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const newsList = [
    {
      title: "Meet Taipei, Exhibition 2018.",
      imageUrl: image_4,
      logo: sit_logo,
      location: "Taipei, Taiwan",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      title: "#1 APTG 5G  Accelerator Program.",
      imageUrl: image_5,
      logo: sit_logo,
      location: "Taipei, Taiwan",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      title: "Visit at Feng Chia University Laboratory.",
      imageUrl: image_3,
      logo: sit_logo,
      location: "Nuremberg, Germany",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      title: "Intro Video preparation at a Car Garage.",
      imageUrl: image_2,
      logo: sit_logo,
      location: "Nuremberg, Germany",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      title: "Visit IG Car Office.",
      imageUrl: image_1,
      logo: sit_logo,
      location: "Taipei, Taiwan",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1a3550m_START -->${$$result.title = `<title>Latest Updates</title>`, ""}<meta name="${"description"}" content="${"Latest Updates"}"><meta charset="${"utf-8"}"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1"}"><meta content="${"S.I.T. Technologies Co., Ltd."}" property="${"og:site_name"}"><!-- HEAD_svelte-1a3550m_END -->`, ""}

<main class="${"svelte-lwp0ol"}"><ul class="${"news-wrapper svelte-lwp0ol"}"><div class="${"news-title svelte-lwp0ol"}"><h1>NEWS Update</h1></div>
      ${each(newsList, ({ title, imageUrl, logo, location, description }) => {
    return `<li${add_attribute("id", title, 0)} class="${"svelte-lwp0ol"}"><div class="${"news-imag-container svelte-lwp0ol"}"><img${add_attribute("src", imageUrl, 0)}${add_attribute("alt", title, 0)} class="${"svelte-lwp0ol"}"></div>
          <div class="${"news-text-container svelte-lwp0ol"}"><div><h2 class="${"svelte-lwp0ol"}">${escape(title)}</h2>
              <p class="${"svelte-lwp0ol"}">${escape(description)}</p></div>
            <div class="${"news-logo-container svelte-lwp0ol"}"><div><img${add_attribute("src", logo, 0)} alt="${"sit logo"}" class="${"svelte-lwp0ol"}"></div>
              <span>${escape(location)}</span>
            </div></div>
        </li>`;
  })}</ul>
</main>`;
});
export {
  Page as default
};
