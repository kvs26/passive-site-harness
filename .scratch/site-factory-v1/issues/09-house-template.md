# Design the house template shell + skin system

Type: prototype
Status: resolved
Blocked by: 07, 08

## Question

Using the design patterns (ticket 07) and the chosen stack (ticket 08), prototype the reusable **house template**:
- The **page set**: interactive tool page, long-tail dataset page, methodology/data page, FAQ, legal pages (privacy/disclosure), plus **trust/E-E-A-T pages** — About, Contact — interlinked in the footer (see brand-and-trust research below).
- The **skin / token system** for per-site theming without a redesign, which must cover:
  - **A color range per skin** — a coherent multi-step palette (luminance-graded ramps + semantic roles), not a single accent, all AA-safe.
  - **A brand font family** — one consistent family used site-wide (with an optional heading/display font), self-hosted variable WOFF2 + metric-matched system fallback so CWV stays intact.
  - **A logo / wordmark** — a themeable brand mark (CSS/text wordmark by default, inline SVG upgrade), plus favicon/icon set.
- **Pre-provisioned monetization holes** — ad-slot placeholders (ticket 04) + affiliate-link component slots (ticket 05) that stay empty until the monetization layer is added.
- The **SEO baseline** (ticket 03) wired in — schema (incl. `Organization`/`WebSite`), sitemap, meta patterns.

Brand identity + trust-page best practices researched in [research/09-brand-and-trust-pages.md](../research/09-brand-and-trust-pages.md).

Throwaway prototype to react to before committing it as the factory's canonical template. Link the prototype as an asset from this ticket.

## Answer

**Design direction (human verdict, 2026-09-05):** adopt the "one themeable base + layout modes + skin
palette" plan from [design-gallery/rankings.md](../design-gallery/rankings.md), **not** a single skin.

- **Base = App-shell sidebar (dir 08)** — the neutral, fully tokenized default; left filter rail + main
  results pane; serves both the interactive-tool and directory archetypes.
- **Two layout modes** (one flag per site, same tokens/components): **results-list** (08/01) for
  spec/tool niches vs **card-grid** (dir 05) for image/product niches.
- **Tool-hero variant (dir 02, Groww-style)** for single-calculator niches — centered tool card + viz +
  right-rail CTA/"popular" list, reused as a monetization + internal-link hole.
- **Editorial (dir 03)** is the **guide/blog skin**, not the finder itself.
- **Technical / dark / playful (06/07/04)** kept as reachable pre-built skins to prove the token
  system's range — not defaults.

**Branding baked into the token/skin system** (per [research/09-brand-and-trust-pages.md](../research/09-brand-and-trust-pages.md)):

- **Color range per skin** — two-layer tokens: luminance-graded literal ramps (per brand hue + neutral +
  status hues) with semantic roles mapped onto ramp steps; graded so AA contrast is a subtraction
  (gap 50+ = AA text); dark mode re-points the same roles to the opposite end of each ramp.
- **Brand font family** — one self-hosted **variable WOFF2** body font (`--font-sans`) + metric-matched
  system fallback (`size-adjust`/`ascent-override`) with `font-display: optional` + `preload`; optional
  heading font (`--font-display`, `swap`); **cap ≤ 2 families**. Same family site-wide.
- **Logo** — default is a CSS/text **wordmark** in `--font-display` (zero assets, recolors per skin);
  inline-SVG (`fill="currentColor"`) upgrade path; favicon + apple-touch-icon + manifest icons generated
  from one SVG; raster logo referenced in `Organization.logo` JSON-LD.

**Page set** gains **About + Contact** trust pages alongside Privacy/Disclosure/Methodology/FAQ
(Privacy is the one AdSense-documented required page; About/Contact/Editorial are recommended E-E-A-T),
all interlinked in the footer; `Organization` + `WebSite` JSON-LD on the home page.

**Prototype disposition:** the current `../prototype/` and `../design-gallery/` stay as **throwaway
reference**. The canonical template is built as a **fresh Astro scaffold** (per ticket-08's file→Astro
mapping), not by graduating the mockup in place. That build is its own ticket —
[10 — Build the canonical Astro house template](10-build-astro-template.md).

## Comments

### 2026-09-05 — PAUSED, resumable (awaiting human verdict on design direction)

Status is `open` again (un-claimed) so a fresh session can resume. **Nothing here needs rebuilding** —
resume from "awaiting verdict," pick a design direction, fold it into the real template, then resolve.

**Assets already built (both throwaway):**

1. **Working prototype** — [`../prototype/`](../prototype/README.md). Full page set (tool / long-tail /
   methodology / FAQ / legal), a 3-skin token system (`workshop`/`slate`/`sunrise`, flip via bottom bar
   or `?skin=`), pre-provisioned monetization holes (ad slots, affiliate slots, consent scaffold), and the
   SEO baseline (WebApplication + BreadcrumbList + ItemList JSON-LD, OG/Twitter, canonical, skip link).
   Verified working: filter narrows 12→4, skin swap changes tokens with zero markup change.
2. **Design gallery** — [`../design-gallery/`](../design-gallery/rankings.md). 8 rendered design
   directions (`variants/01..08` — HTML + PNG) on the same content, real-world exemplars in
   `exemplars/` (Groww, Omni Calculator, RTINGS; pcpartpicker was Cloudflare-blocked), and my ranked
   scorecard + recommendation in `rankings.md`.

**My recommendation (in rankings.md):** don't pick one skin — adopt **one themeable base (dir 08
app-shell) + two layout modes** (results-list vs card-grid dir 05) + a **tool-hero variant** (dir 02,
Groww-style right-rail) + **editorial (dir 03) as the guide/blog skin**, with technical/dark/playful
(06/07/04) as reachable skins. Top three tie at 22/25: 08 app-shell, 05 card-grid, 02 minimal-calculator.

**User context:** likes clean/minimal (cited Groww SIP calculator) but explicitly wants the template to
fit MANY niches, not skew to one look.

**NEXT STEPS to resolve this ticket:**
1. Get the human's verdict on direction (which of 08/05/02, and whether the "base + 2 modes + skin
   palette" plan lands).
2. Fold the chosen direction into the real house template (refine `../prototype/` or rebuild as the
   canonical set — decide with the human whether prototype graduates or a fresh Astro scaffold is built).
3. Resolve: append `## Answer` (the chosen design + why), set `Status: resolved`, add a Decisions-so-far
   pointer to `../map.md`, and capture the throwaway prototype/gallery per the /prototype skill.

**To preview again:** `cd .scratch/site-factory-v1/prototype && python3 -m http.server 8000` → open
`http://localhost:8000/`. Gallery HTML opens directly via `file://` or serve the effort root.

**Resume command:** `/wayfinder work map ticket 09` (naming 09 explicitly; it's also the only open
ticket, so `work map` alone lands here too).

### 2026-09-05 — scope expanded (branding + trust pages), extra research done

Per human request, the ticket now also covers, baked into the skin/token system: a **color range per
skin** (not one accent), a **consistent brand font family** (+ optional display font), and a **logo/
wordmark + icon set**; and the page set gains **About + Contact** trust pages. New research note:
[research/09-brand-and-trust-pages.md](../research/09-brand-and-trust-pages.md) (self-hosted variable
WOFF2 + metric-matched fallback for CWV-safe brand fonts; two-layer luminance-graded color ramps;
CSS-wordmark-default / inline-SVG logo; Privacy is the one AdSense-documented required page, About/
Contact/Editorial recommended). Still `claimed`, still awaiting the human's design-direction verdict.
