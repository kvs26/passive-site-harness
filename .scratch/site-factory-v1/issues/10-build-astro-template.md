# Build the canonical Astro house template

Type: task
Status: resolved
Blocked by: 03, 04, 05, 09

## Question

Build the factory's **canonical, reusable house template** as a **fresh Astro static scaffold** (per
ticket 08 — `output: 'static'`, vanilla-JS islands), realising the design decision locked in
[09 — Design the house template shell + skin system](09-house-template.md). The current
`../prototype/` and `../design-gallery/` are throwaway reference only — do **not** graduate the mockup
in place.

Deliver, as the reusable factory asset (skin-agnostic, no site #1 content baked in beyond a demo):

- **Base shell** — App-shell sidebar (dir 08) `Layout.astro` + header/footer partials (static, zero-JS),
  skip link, semantic landmarks.
- **Two layout modes** — results-list vs card-grid (dir 05), selectable per site by one flag, same
  tokens/components.
- **Tool-hero variant** — dir 02 (Groww-style centered tool + right-rail hole) for calculator niches.
- **Token / skin system** — `tokens.css` with the two-layer color ramps (luminance-graded literal ramps
  + semantic roles, AA-safe, dark-mode via role re-point), 7-step type scale, 8-step spacing scale; a
  **skin** = a file overriding token values only. Ship the neutral default + editorial/technical/dark/
  playful reachable skins.
- **Brand fonts** — one self-hosted variable WOFF2 body font + metric-matched system fallback
  (`size-adjust`/`ascent-override`), `font-display: optional` + `preload`; optional `--font-display`
  heading font (`swap`); ≤2 families.
- **Logo** — CSS/text wordmark default (`--font-display`), inline-SVG upgrade slot, favicon +
  apple-touch-icon + manifest icon set from one SVG.
- **Page set** — tool page, long-tail dataset route (`[platform]/[category].astro` demo), methodology,
  FAQ, and legal/trust pages: Privacy, Disclosure, About, Contact (footer-interlinked).
- **Monetization holes (empty/off)** — reserved-space ad slots (ticket 04) + affiliate-link component
  slots (ticket 05); switched on later without reflow.
- **SEO baseline (ticket 03)** wired in — `WebApplication` + `BreadcrumbList` + `ItemList` +
  `Organization`/`WebSite` JSON-LD, canonical/OG/Twitter, programmatic titles/descriptions, sitemap +
  robots build step. No FAQPage JSON-LD (deprecated).

Living in `sites/<slug>/` is per-site; the factory template itself is the reusable asset this ticket
produces. Decide with the build whether it lives as a template repo / starter or as documented copyable
assets — feed that back to the "Extract the factory" step.

## References

- Design decision + rationale: [09 — house template](09-house-template.md)
- Brand + trust research: [../research/09-brand-and-trust-pages.md](../research/09-brand-and-trust-pages.md)
- Design patterns + tokens: [../research/07-design-patterns.md](../research/07-design-patterns.md)
- SEO baseline: [../research/03-seo-baseline.md](../research/03-seo-baseline.md)
- Throwaway reference: [../prototype/README.md](../prototype/README.md), [../design-gallery/rankings.md](../design-gallery/rankings.md)

## Answer

Built as a **fresh Astro static scaffold** — a repo-tracked, copyable starter at
`factory/house-template/`. The prototype/design-gallery were left untouched as throwaway reference; the
mockup was **not** graduated in place. Verified: `npm run build` → **31 pages + `sitemap-index.xml` +
`robots.txt`**, clean (`astro check`/`get_errors` clean), and rendered in-browser (neutral skin, list
layout, dark-mode toggle, reserved-but-empty ad slot, SITE/TRUST/LEGAL footer).

**How it lives (feeds "Extract the factory"):** a **repo-tracked starter template** at
`factory/house-template/`, copied into `sites/<slug>/` per site (each site its own independent repo, per
the map's Notes). Not an npm package, not a `create-*` CLI — a plain copyable directory the future
`/build-site` skill clones and fills.

**Per-site seam:** one file — `src/lib/site.config.mjs` (`SITE` object: url/name/tagline/skin/
`layoutMode`/nav/footer/organization/monetization/analytics). Swapping a site = edit that file + drop in
`src/data/catalog.json` + brand fonts. All monetization is **off by default**.

Every ticket-10 deliverable realized:

- **Base shell** — `Layout.astro` app-shell (dir 08): skip link, semantic landmarks, static header
  (`Header.astro`) + footer (`Footer.astro`), breadcrumbs, inline no-flash theme bootstrap + dark toggle.
- **Two layout modes** — results-list vs card-grid via `SITE.layoutMode`, same tokens/components
  (`results--list` / `results--grid`).
- **Tool-hero variant** — `pages/calculator.astro` (dir 02, centered tool + right-rail hole) with a
  client-side vanilla-JS calc.
- **Token / skin system** — `styles/tokens.css`: two-layer color model (Layer 1 luminance-graded literal
  ramps `--n-00..90`/`--b-05..90` + status hues; Layer 2 semantic roles components reference), 7-step
  type scale, 8-step spacing scale, radius/shadow. Ships **neutral** default +
  **editorial/technical/dark/playful** skins (each overrides ramps only). Dark mode = role re-point via
  `[data-theme='dark']` + `prefers-color-scheme`.
- **Brand fonts** — self-hosted variable WOFF2 body font (`--font-sans`) + metric-matched fallback
  (`size-adjust`/`ascent-override`), `font-display: optional` + preload (zero CLS; **missing file
  degrades gracefully** — confirmed by benign 404s at runtime). Optional display heading font (`swap`).
- **Logo** — CSS/text wordmark default + inline-SVG upgrade (`currentColor`) in `Header.astro`;
  `favicon.svg` + `site.webmanifest` + apple-touch-icon slots.
- **Page set** — Finder (home/tool), long-tail demo routes `[platform]/index.astro` +
  `[platform]/[category].astro` (`getStaticPaths`), methodology, faq (**no FAQPage JSON-LD** — Google
  deprecated it), and trust/legal: privacy (the AdSense-required one), disclosure, about, contact,
  plus a noindex 404. Footer-interlinked.
- **Monetization holes (off)** — `AdSlot.astro` (reserved-space, empty until enabled → no reflow) +
  `AffiliateLink.astro` (plain text when off, `rel="sponsored nofollow"` + disclosure when on). Both
  gated by `SITE.monetization`.
- **SEO baseline (ticket 03)** — `BaseHead.astro` emits canonical, OG (+dims), Twitter cards,
  programmatic titles/descriptions, and a JSON-LD `@graph` (`WebApplication` + `WebSite` +
  `Organization` + `BreadcrumbList` + `ItemList`). `@astrojs/sitemap` → `sitemap-index.xml`;
  `robots.txt.ts` emits an absolute `Sitemap:` line. FAQPage/Product intentionally omitted.

See `factory/house-template/README.md` for quick-start + new-site steps.

## Comments
