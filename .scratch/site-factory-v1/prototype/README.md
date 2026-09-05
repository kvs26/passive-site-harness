# House template prototype — THROWAWAY

**Ticket:** [09 — Design the house template shell + skin system](../issues/09-house-template.md)
**Status:** throwaway prototype to react to. Not the shipped template. Delete after the design is folded into the real Astro build.

## What this answers

"What should the factory's **house template** look like, and does the **skin/token system** actually let one set of templates re-theme per site?" Concrete content = the `runs-on-your-battery-finder` niche so it reads real.

## Run it

No build step. Open `index.html` in a browser, **or** serve the folder:

```sh
cd .scratch/site-factory-v1/prototype
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Poke at these

- **Skin/token system** — the black **PROTOTYPE** bar at the bottom flips between 3 skins
  (`workshop` / `slate` / `sunrise`). Same markup, same components — only token *values* change.
  Also reachable via `?skin=slate` etc. This is the core thing to react to.
- **Page set** — nav covers all five archetypes:
  - `index.html` — interactive **tool** page (the filter island)
  - `platform-category.html` — long-tail **dataset** page ("Milwaukee M18 fans")
  - `methodology.html` — **methodology / data** page
  - `faq.html` — **FAQ**
  - `privacy.html` + `about.html` — **legal** pages
- **Monetization holes (all empty/off)** — dashed hatched **ad slots** (space reserved, no CLS),
  inert **affiliate "Buy link"** placeholders per row, a dormant **consent-banner** scaffold.
  Flipping the data flag / dropping a real unit into the hole is the whole "add monetization later" story.
- **SEO baseline** — view source: templated `<title>`/description, canonical, OG + Twitter,
  `WebApplication` JSON-LD (tool), `BreadcrumbList` + `ItemList` (long-tail). **No FAQPage JSON-LD**
  (deprecated May 2026, per research/03).

## How each piece maps to the real Astro build (ticket 08)

| Prototype file | Becomes in Astro |
|---|---|
| `assets/tokens.css` | `tokens.css` imported by base `Layout.astro`; a **skin** = the block overriding token values |
| `assets/app.css` | scoped component styles across `.astro` components |
| `assets/site.js` (header/footer/skin bar) | `Layout.astro` + header/footer partials (static, zero-JS). Skin bar is prototype-only |
| `assets/data.js` | `data/products.json`, loaded at build via `getStaticPaths()` |
| `assets/tool.js` | the **one** hydrated island (`client:visible`), vanilla JS per ticket-08 |
| `index.html` head | per-page SEO frontmatter + a shared `<Seo>` component |
| `platform-category.html` | a `[platform]/[category].astro` route generated from the dataset |

## Deliberately skipped (throwaway rules)

No tests, no error handling, no build tooling, in-memory only, header/footer duplicated via a tiny
JS injector instead of a real templating layer. The point was to make the design reactable fast.
