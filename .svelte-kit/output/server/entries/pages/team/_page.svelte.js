import { c as create_ssr_component, e as each, f as escape } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-zwzajk.svelte-zwzajk{width:100%}main.svelte-zwzajk .team-container.svelte-zwzajk{position:relative;padding-top:5rem}main.svelte-zwzajk .team-container ul.svelte-zwzajk{text-align:center;margin-top:2.5rem;margin-bottom:4rem;color:#fff}main.svelte-zwzajk .team-container ul h2.svelte-zwzajk{margin:1rem 0;font-size:2.3rem;color:var(--brand-primary-red)}main.svelte-zwzajk .team-container ul div.svelte-zwzajk{display:flex;justify-content:center;flex-wrap:wrap;gap:7rem}main.svelte-zwzajk .team-container ul div h3.svelte-zwzajk{font-size:2.2rem}main.svelte-zwzajk .team-container ul div span.svelte-zwzajk{font-size:1.5rem;background:-webkit-linear-gradient(#eee, #b7b6b6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}@media screen and (max-width: 995px){main.svelte-zwzajk .team-container ul div.svelte-zwzajk{gap:4rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const coOwnerList = [
    {
      displayName: "Servet Şit",
      title: "Finance & Operations"
    },
    {
      displayName: "Mehmet Şit",
      title: "Founder & GM"
    },
    {
      displayName: "René Galle",
      title: "Platform & Technology"
    }
  ];
  const coProductOwnerList = [
    {
      displayName: "Salhi Heythem",
      title: "Embedded & Technology"
    },
    {
      displayName: "Yi Cheng Lu",
      title: "Data & Technology"
    },
    {
      displayName: "Andrea Fan",
      title: "Platform & Technology"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1wtjbx2_START -->${$$result.title = `<title>Our Team</title>`, ""}<meta name="${"description"}" content="${"Our Team"}"><meta charset="${"utf-8"}"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1"}"><meta content="${"S.I.T. Technologies Co., Ltd."}" property="${"og:site_name"}"><!-- HEAD_svelte-1wtjbx2_END -->`, ""}

<main class="${"svelte-zwzajk"}"><div class="${"team-container svelte-zwzajk"}"><ul class="${"svelte-zwzajk"}"><h2 class="${"svelte-zwzajk"}">Co-Owner</h2>
      <div class="${"svelte-zwzajk"}">${each(coOwnerList, ({ displayName, title }) => {
    return `<li><h3 class="${"svelte-zwzajk"}">${escape(displayName)}</h3>
          <span class="${"svelte-zwzajk"}">${escape(title)}</span>
        </li>`;
  })}</div></ul>
    <ul class="${"svelte-zwzajk"}"><h2 class="${"svelte-zwzajk"}">Co-Product Owner</h2>
              <div class="${"svelte-zwzajk"}">${each(coProductOwnerList, ({ displayName, title }) => {
    return `<li><h3 class="${"svelte-zwzajk"}">${escape(displayName)}</h3>
          <span class="${"svelte-zwzajk"}">${escape(title)}</span>
        </li>`;
  })}</div></ul></div>
</main>`;
});
export {
  Page as default
};
