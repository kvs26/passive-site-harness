# Research: Brand fonts, color palette, logo, and trust/E-E-A-T pages for the house template

Label: wayfinder:research
Effort: [site-factory-v1](../map.md)
Ticket: [09 — house template shell + skin system](../issues/09-house-template.md)

## Question

Four gaps the existing design/SEO notes ([`research/07-design-patterns.md`](07-design-patterns.md),
[`research/03-seo-baseline.md`](03-seo-baseline.md)) do **not** cover, now that the template owner
wants real typographic + color identity per skin (not just the system-font/single-accent baseline):

1. **Brand fonts vs Core Web Vitals** — how to ship a consistent brand font family (and optional
   display/heading font) on a static site without wrecking CWV.
2. **Color range / palette per template** — how to generate an accessible multi-step palette from a
   few brand seeds while holding WCAG AA contrast.
3. **Logo / brand mark** — the cheapest themeable, high-CWV way to ship a per-site logo/wordmark +
   favicon/icon set.
4. **Trust / E-E-A-T pages** — whether/what About, Contact, and policy pages to add, per Google's own
   guidance and AdSense's documented expectations.

## Method

Primary sources only, followed back to the owner of each claim and cited inline: **web.dev** (Chrome
Core Web Vitals team), **MDN / CSS Fonts specs**, **Google Search Central** (developers.google.com),
**Google AdSense / Publisher Policies help**, **USWDS** (U.S. Web Design System, public-domain
government design system), **Material Design 3** (Google), **schema.org**, and **MDN Web App Manifest
reference**. No traffic, CPC, CTR, or revenue figures were invented, used, or needed. No paid SEO
tools. This note *extends* — does not restate — the CWV, semantic-token, type-scale, and spacing-scale
material already settled in note 07 and the schema/canonical/OG material in note 03.

---

## 1. Brand fonts vs Core Web Vitals

Note 07's "system-font-only" rule was a pure-CWV default. A brand webfont **can** coexist with good
CWV, but only if it's delivered early and its fallback is metric-matched. The three ways a webfont
hurts CWV, per web.dev: (a) **delayed text render** → hurts FCP/LCP; (b) **layout shift on swap** →
hurts CLS when the webfont and its fallback occupy different space. ([web.dev: Best practices for
fonts](https://web.dev/articles/font-best-practices))

### 1a. `font-display` trade-offs

The `@font-face` `font-display` descriptor splits a font's load into a **block** period (invisible
fallback text) and a **swap** period (visible fallback text). ([MDN: `font-display`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display))

| Value | Block period | Swap period | CWV effect | web.dev guidance |
|---|---|---|---|---|
| `auto` | browser default | browser default | Usually behaves like `block`; can shift | Avoid relying on it |
| `block` | ~2–3 s | infinite | FOIT then swap; text render delayed, can still shift | "Text is displayed in a web font" priority — deliver early to minimize delay |
| `swap` | ~0 ms | infinite | Text instant in fallback, **jarring shift** when webfont arrives late | "Quickly display text and still use a web-font" — deliver early to avoid the shift |
| `fallback` | ~100 ms | ~3 s | Small FOIT window, then fallback locked in if late | Middle ground |
| `optional` | ~100 ms | **none** | **No swap → no font-swap CLS**; webfont only used if it beats the ~100 ms block | "Performance" priority — most CWV-safe |

Source for periods + guidance: [web.dev: Choose an appropriate `font-display` strategy](https://web.dev/articles/font-best-practices) and
[MDN: `font-display` values](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display).
web.dev explicitly notes you can **mix**: `swap` for branding/display elements, `optional` for body text.
([web.dev](https://web.dev/articles/font-best-practices))

### 1b. `preload` + `optional` = zero layout jank

Combining `<link rel="preload">` with `font-display: optional` is called out by web.dev as **"the most
effective way to guarantee no layout jank when rendering custom fonts."** Since Chrome 83, a preloaded
optional font that arrives within the block window is used with **no** re-layout and **no** FOIT; if it
misses the window the fallback stays and there is still no shift. This matches the CSS Fonts Level 4
spec requirement that optional fonts never cause re-layout. ([web.dev: Prevent layout shifting and
FOIT by preloading optional fonts](https://web.dev/articles/preload-optional-fonts))

Caveats on `preload` from web.dev: preload competes for bandwidth with other resources; it **ignores
`unicode-range`**; and it should preload only a **single** font file/format. Prefer also **inlining the
`@font-face` declaration in the `<head>`** so the browser discovers the font without waiting on an
external stylesheet. ([web.dev: Be cautious when using `preload`; Inline font declarations](https://web.dev/articles/font-best-practices))
For the LCP text element, web.dev/optimize-cls adds: "Load critical web fonts as early as possible using
`<link rel=preload>`. A preloaded font will have a higher chance to meet the first paint, in which case
there's no layout shifting." ([web.dev: Optimize CLS — Web fonts](https://web.dev/articles/optimize-cls))

### 1c. Metric-override to kill the swap shift (`size-adjust` & friends)

`size-adjust` is an `@font-face` descriptor that multiplies **all** glyph outlines and metrics
(advances, baseline tables) by a percentage, matching ex-heights — used to make a **fallback** font
occupy the same space as the webfont so the swap causes no reflow. ([MDN: `size-adjust`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust))
Browser support is Baseline "widely available" (Chrome/Edge/Firefox 92, Safari 17). web.dev/optimize-cls
lists the full toolkit — `size-adjust`, `ascent-override`, `descent-override`, `line-gap-override` — as
the way to "minimize the size differences between the fallback font and the web font." The pattern is a
second `@font-face` that aliases the local system fallback (e.g. `local("Arial")`) under a
`"…-fallback"` family name with tuned metrics, then list `"Brand", "Brand-fallback", sans-serif`.
([web.dev: Optimize CLS — Web fonts](https://web.dev/articles/optimize-cls))

web.dev also warns: **always name a real fallback** — `font-family: "Brand", sans-serif` (not bare
`"Brand"`), or Chrome falls back to Times (serif), a worse metric match. ([web.dev: Optimize CLS](https://web.dev/articles/optimize-cls))

### 1d. Self-host vs Google Fonts CDN

web.dev is deliberately non-dogmatic here: "On paper, using a self-hosted font should deliver better
performance… In practice, the performance differences… [are] less clear cut." Self-hosting only wins if
you serve over a **CDN + HTTP/2**, and you must then re-apply the optimizations a font CDN does for you
automatically — **subsetting** and **WOFF2** compression. ([web.dev: Use self-hosted fonts](https://web.dev/articles/font-best-practices))
If instead loading from a third-party origin (e.g. Google Fonts), use **`preconnect`** to *both* origins
Google serves from:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

(font files need a CORS/`crossorigin` connection). ([web.dev: Preconnect to critical third-party
origins](https://web.dev/articles/font-best-practices))

For a **factory** shipping to Cloudflare Pages (a CDN with HTTP/2+HTTP/3 by default), self-hosting is the
better default: it removes a third-party origin (one fewer connection to set up), makes `preload`
first-party, and lets fonts share the site's long-cache/immutable headers. web.dev notes fonts are
"static resources that are infrequently updated" and should carry a long `max-age` + revalidation token.
([web.dev: Proper caching is a must](https://web.dev/articles/optimize-webfont-loading))

### 1e. Format, subsetting, variable fonts, how many families

| Lever | Primary-source rule |
|---|---|
| **Format** | Use **WOFF2 only** for modern browsers — Brotli-compressed, ~30% smaller than WOFF, widest support; drop EOT/TTF/WOFF unless you must support IE11. ([web.dev: Use WOFF2](https://web.dev/articles/font-best-practices); [web.dev: Reduce web font size](https://web.dev/articles/reduce-webfont-size)) |
| **Subsetting** | Cut unused glyphs. Use `unicode-range` to split by script (e.g. Latin `U+000-5FF`); the browser downloads only matching subsets. Latin fonts are ~100–1000 glyphs. Google Fonts subsets by default — a self-host must re-do it with `pyftsubset`, `glyphhanger`, or `subfont`. **Check the font license** allows subsetting + self-hosting. ([web.dev: Subset fonts](https://web.dev/articles/font-best-practices); [web.dev: Unicode-range subsetting](https://web.dev/articles/reduce-webfont-size)) |
| **Variable fonts** | One variable file can replace many static weights/styles; it's larger than a single weight but smaller than the *combination* of many. Supported in all modern browsers. Best ROI when a site genuinely uses several weights. ([web.dev: Use fewer web fonts](https://web.dev/articles/font-best-practices); [web.dev: Consider a variable font](https://web.dev/articles/reduce-webfont-size)) |
| **How many families** | "The fastest font to deliver is a font that isn't requested in the first place." Minimize families and variants per family for a "more consistent and a faster experience." ([web.dev: Use fewer web fonts](https://web.dev/articles/font-best-practices); [web.dev: web font checklist](https://web.dev/articles/reduce-webfont-size)) |

### 1f. Recommended factory pattern (fonts)

Bake this into the house template as a per-skin overridable block:

1. **One self-hosted variable body font in WOFF2**, Latin-subset, exposed as `--font-sans` (the token
   note 07 already defines). This single file covers the weights the whole site uses.
2. **A metric-matched system fallback** via a second `@font-face` (`local(...)` + `size-adjust` /
   `ascent-override` / `descent-override`) so the swap causes no CLS; declare
   `font-family: "BrandSans", "BrandSans-fallback", <note-07 system stack>`.
3. **`font-display: optional`** on the body font + **`<link rel="preload">`** of that one WOFF2 →
   zero font-swap CLS, LCP text can paint in the branded font on warm loads.
4. **Optional second display/heading font** as `--font-display`. Because a headline arriving late is
   less costly than body reflow, this one may use **`font-display: swap`** *with* a `size-adjust`
   fallback (web.dev's explicit "swap for branding, optional for body" mix). Keep it to **≤2 families
   total**.
5. **Self-host on Cloudflare Pages** with long-cache immutable headers; skip the Google Fonts CDN so
   `preload` stays first-party and there's no third-party origin to `preconnect`.

Every item above traces to web.dev/MDN; a skin overrides only the font *files* + the token values, never
the loading machinery.

---

## 2. Color range / palette per template

Note 07 defined **semantic role tokens** (`--color-primary`, `--color-surface`, …) but only one step
each. To ship a coherent multi-step palette per skin while holding WCAG **1.4.3** (text 4.5:1, large
3:1) and **1.4.11** (non-text/UI 3:1), adopt a two-layer, luminance-graded model drawn from USWDS and
Material 3.

### 2a. USWDS: grades, families, and the "magic number"

USWDS organizes color as **color → color family → grade**. A **grade** is a point on a **100-point
lightness scale (0 = white, 100 = black)**, and grades are **regularized across families** — grade `50`
in one family is the same lightness as grade `50` in another. Each family ships ~10 grades (5–90).
([USWDS: Using color — color, family, grade](https://designsystem.digital.gov/design-tokens/color/overview/))

The payoff is the **magic number** = the grade *difference* between two colors, which maps directly to
contrast because each grade sits in a fixed **relative-luminance** band:

| Grade difference (magic number) | Guaranteed contrast |
|---|---|
| **40+** | WCAG 2.0 AA **large** text (3:1) |
| **50+** | WCAG 2.0 AA normal text (4.5:1) / AAA large |
| **70+** | WCAG 2.0 AAA (7:1) |
| grade **50** vs pure white *or* pure black | Section 508 AA either way |

Source: [USWDS: Color and accessibility — Magic number](https://designsystem.digital.gov/design-tokens/color/overview/).
USWDS ties this to Section 508 = WCAG 2.0 AA = **4.5:1 text, 3:1 large (19px+ bold / 24px+ normal)**,
consistent with note 07's contrast rules. This means: **once a skin's ramp is graded, contrast is
checkable by subtraction** — no per-pair eyeballing.

USWDS also separates **System tokens** (the full palette, all 24 families) from **project/theme tokens**
(a small **role-based** subset like `primary` that references only a few families). ([USWDS: System color
tokens](https://designsystem.digital.gov/design-tokens/color/system-tokens/); [Using color — Introduction](https://designsystem.digital.gov/design-tokens/color/overview/))
Guidance: **start in black and white**, add color as progressive enhancement, and **never use color
alone to convey meaning** (≈4.5% of people have color-vision deficiency). ([USWDS: General color guidance](https://designsystem.digital.gov/design-tokens/color/overview/))

### 2b. Material 3: tonal palettes, roles, dark mode from one set

Material 3 defines color in **HCT (Hue, Chroma, Tone)**, where **Tone == luminance (0 black → 100
white)** and "is crucial for visual accessibility because it determines contrast." From a source color
it derives **5 key colors** (primary, secondary, tertiary, neutral, neutral-variant), each expanded into
a **tonal palette** numbered **0–100 in steps of 10, plus 95/98/99** (~13 tones). Semantic **color
roles** (`primary`, `on-primary`, `primary-container`, `surface`…) are then assigned specific tones —
and the **same role set drives both light and dark themes** automatically. ([Material 3: How the color
system works](https://m3.material.io/styles/color/system/how-the-system-works))

Material's accessible-pairing rule is the tone-distance analogue of USWDS's magic number: **tones 50 &
98 ≈ 3:1**, **tones 30 & 98 ≈ 7:1**; it also ships three contrast levels — standard, **medium (min
3:1)**, **high (7:1)**. Note: **HSL lightness does not map to HCT tone** — two colors with equal HSL
lightness can differ in perceived brightness, so grade on luminance/tone, not raw HSL L. ([Material 3:
Pairing accessible tones; HCT isn't interchangeable](https://m3.material.io/styles/color/system/how-the-system-works))

### 2c. Recommended factory token structure (color)

Extend note 07's semantic tokens with a **two-layer** system:

**Layer 1 — literal ramp (per skin, luminance-graded).** For each seed hue the skin needs, generate a
regularized ramp on a shared lightness/tone scale so magic-number/tone-distance math holds:

```
--<hue>-05 --<hue>-10 --<hue>-20 --<hue>-30 --<hue>-40
--<hue>-50 --<hue>-60 --<hue>-70 --<hue>-80 --<hue>-90
```

Seeds a passive tool/directory site actually needs: **one brand hue** (drives `primary`), **one neutral
gray ramp** (surfaces/text/borders), and **status hues** (success/warning/danger). This mirrors USWDS
grades + Material tonal palettes.

**Layer 2 — semantic roles (skin-agnostic; note 07's names) mapped onto ramp steps**, chosen so the
grade/tone gap clears the required ratio:

| Role token (note 07) | Light-theme ramp step | Contrast rule it must clear |
|---|---|---|
| `--color-bg` | `neutral-05` / white | — |
| `--color-surface` | `neutral-10` | 3:1 vs `--color-bg` (1.4.11) |
| `--color-text` | `neutral-90` | ≥ magic-number 50 vs bg (4.5:1, 1.4.3) |
| `--color-text-muted` | `neutral-60/70` | 4.5:1 vs its background |
| `--color-primary` | `brand-50/60` | 4.5:1 for text-on-primary; 3:1 as UI fill |
| `--color-primary-hover` | `brand-70` | — |
| `--color-border` | `neutral-30` | 3:1 vs adjacent surface (1.4.11) |
| `--color-focus` | `brand-50` | 3:1 vs adjacent bg |
| `--color-success/-warning/-danger` | status-`50/60` | 4.5:1 for text use |

**Dark mode**: keep the *same* role tokens and re-point them at the *opposite end* of each ramp
(`--color-bg → neutral-90`, `--color-text → neutral-05`), exactly as Material drives light+dark from one
role set. Because the ramp is luminance-graded, the magic-number gap that guaranteed AA in light mode is
preserved when flipped. Templates keep referencing only role names; a skin overrides only the Layer-1
ramp values. (Pattern basis: [USWDS grades/magic number](https://designsystem.digital.gov/design-tokens/color/overview/);
[Material 3 roles + tonal palettes + dark theme](https://m3.material.io/styles/color/system/how-the-system-works).)
Verify every skin against WCAG 1.4.3/1.4.11 before shipping (note 07's rule), which the grade math makes
a subtraction rather than a guess.

---

## 3. Logo / brand mark for a static factory

Goal: a per-site logo that's cheap to ship, themeable, and CWV-safe (no CLS, no render-blocking asset).

### 3a. CWV: any logo image needs reserved space

Images without dimensions are "one of the largest contributors to layout shifts on the web." The fix:
**always set explicit `width`/`height` (or reserve space with `aspect-ratio`)** so the browser allocates
the box before the asset loads — this applies to a header logo `<img>` exactly as to any image.
([web.dev: Optimize CLS — Images without dimensions](https://web.dev/articles/optimize-cls))

### 3b. Zero-asset default: CSS/text wordmark in the brand font

The cheapest logo is **no image at all**: a text wordmark styled with the skin's `--font-display`
(from §1). It has **no network request, no CLS risk beyond normal font-swap** (already handled by the
`size-adjust` fallback), inherits the color ramp, is selectable/translatable, and re-themes for free per
skin. This is the recommended **default** for the factory.

### 3c. When a mark is wanted: inline SVG vs `<img>`

| Option | CWV / CLS | Themeable? | Factory fit |
|---|---|---|---|
| **Inline `<svg>`** in the header | No extra request; sized by viewBox + CSS so no CLS; can be given explicit width/height | **Yes** — `fill="currentColor"` / CSS vars recolor per skin | **Recommended** for a real mark: one small vector, recolors from the token ramp, no asset pipeline |
| **`<img src=logo.svg>`** | Extra request; **must** set `width`+`height` to avoid CLS | Not without swapping files | Fine, but loses free theming |
| **Raster `<img>` (PNG/WebP)** | Extra request; needs `width`+`height`; heavier | No | Avoid for a logo unless required |

(CLS/dimension rule: [web.dev: Optimize CLS](https://web.dev/articles/optimize-cls).) Inline SVG with
`currentColor` lets the same markup recolor across skins with zero new assets — the theming property the
factory wants.

### 3d. Favicon + icon set actually needed in 2026

**Favicon for Google Search** — documented Google requirements:

- One favicon per site (per hostname), declared on the **home page** with
  `<link rel="icon" href="/path/to/favicon.ico">`.
- Must be **square (1:1), at least 8×8px**; Google **recommends larger than 48×48px** so it renders on
  various surfaces. Supported formats: BMP, GIF, ICO, PNG, JPEG, PPM, TIFF.
- URL must be **stable** and crawlable by Googlebot-Image. ([Google: Define a favicon to show in search
  results](https://developers.google.com/search/docs/appearance/favicon-in-search))

**Web App Manifest icons** — per MDN, each `icons` entry needs only `src`; `sizes` (e.g. `"192x192"`),
`type`, and `purpose` (`any` / `maskable` / `monochrome`) are optional. **Vector icons may use
`sizes: "any"`** so one SVG scales, avoiding a pile of raster PNGs. ([MDN: Web app manifest — `icons`](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/icons))
Note the manifest `icons` member is **not Baseline** (no Firefox support), so treat it as progressive
enhancement, not a requirement.

**Minimal 2026 icon set the factory should ship** (all derivable from one source SVG):

- `favicon.ico` (or PNG) referenced via `<link rel="icon">` — for Google Search + browser tabs
  (Google-documented).
- One larger PNG (e.g. 180×180) as `apple-touch-icon` for iOS home-screen (platform convention; not a
  documented Google Search requirement).
- A `manifest.webmanifest` with an SVG icon (`sizes: "any"`) + one/two maskable PNGs — progressive
  enhancement per MDN.

Everything scales from a single vector master, so a per-site logo swap regenerates the whole set.

### 3e. `logo` in structured data

Add the logo to `Organization` structured data so Google knows which logo to show in Search / knowledge
panels. Google's documented image guidance for `Organization.logo`: **≥112×112px, crawlable/indexable, a
Google-Images-supported format, and legible on a white background.** Place it on the home page or About
page; there are **no required properties** on `Organization`. ([Google: Organization (logo) structured
data](https://developers.google.com/search/docs/appearance/structured-data/logo)) In schema.org,
`logo` expects a `URL` or `ImageObject` and is valid on `Organization`, `Brand`, `Product`, etc.
([schema.org/logo](https://schema.org/logo)) This dovetails with §4's `Organization`/`WebSite` JSON-LD.

### 3f. Recommended factory pattern (logo)

Default to a **CSS text wordmark** in `--font-display` (zero assets). For sites that supply a mark, ship
**one source SVG**, render it **inline** in the header with `currentColor` so it recolors per skin,
and **generate** `favicon.ico`, an `apple-touch-icon` PNG, and manifest icons from that SVG at build.
Reference the raster logo URL in `Organization.logo` JSON-LD (≥112×112, white-bg-safe). Per-site cost =
swap one SVG + one color token.

---

## 4. Trust / E-E-A-T pages for SEO

**Bottom line up front:** Google documents **no mandatory** "About/Contact" page requirement for ranking
— but its people-first/E-E-A-T guidance strongly and repeatedly points to author/About/site-background
information as trust signals, and **AdSense does documentably require a privacy policy**. Below,
requirements vs recommendations are kept distinct.

### 4a. What Google's own guidance says

Google's ranking systems "prioritize helpful, reliable information… created to benefit people." The
"Creating helpful, reliable, people-first content" page's **Expertise** self-check literally asks whether
content shows "background about the author or the site that publishes it, **such as through links to an
author page or a site's About page**," and whether researching the site would show it's "well-trusted or
widely-recognized as an authority." ([Google: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content))

Google frames trust via **E-E-A-T** (Experience, Expertise, Authoritativeness, Trust) and states **"Of
these aspects, trust is most important."** Crucially, **"E-E-A-T itself isn't a specific ranking
factor"** — it's a concept a mix of signals approximates. Extra weight goes to **YMYL** (health/finance/
safety) topics; a passive tool/directory is generally **not** YMYL. ([Google: Get to know E-E-A-T](https://developers.google.com/search/docs/fundamentals/creating-helpful-content))

The **"Who / How / Why"** section is the most concrete: Google **"strongly encourage[s] adding accurate
authorship information, such as bylines"** and links from bylines to author background (**Who**);
disclosing **How** content was made — including "**automated, AI-generated, and AI-assisted content**"
via disclosures where a reader would wonder how it was made (directly relevant to a data-driven factory
site); and a **Why** that is "primarily to help people," not to rank. Using automation to mass-produce
content primarily to manipulate rankings is a **spam-policy violation**. ([Google: Ask "Who, How, and
Why"](https://developers.google.com/search/docs/fundamentals/creating-helpful-content))

**Search Essentials** itself lists very few *technical* requirements; its "key best practices" are
"create helpful, reliable, people-first content," crawlable links, descriptive titles/alt text — **no
mandated About/Contact page.** ([Google: Search Essentials](https://developers.google.com/search/docs/essentials))

### 4b. Structured data that carries the trust info (note 03 already has WebSite)

`Organization` structured data on the home page (or About page) helps Google understand and disambiguate
the site and choose its logo/knowledge-panel details. There are **no required properties**; Google
recommends `name`, `url`, `logo`, and real-world/online presence like `email`, `telephone`, `address`,
`contactPoint`, and `sameAs` (profiles). Recommended placement: home page or the **About** page — "You
don't need to include it on every page." ([Google: Organization structured data — guidelines + type
definitions](https://developers.google.com/search/docs/appearance/structured-data/logo)) Pair with the
`WebSite` markup note 03 already specifies. `ContactPoint`/`email`/`telephone` are the machine-readable
half of a human Contact page.

### 4c. AdSense's documented expectation (requirement vs recommendation)

- **Privacy policy = documented requirement.** Google Publisher Policies (which apply to AdSense) state
  publishers **"must… have and abide by a privacy policy that clearly discloses any data collection,
  sharing, and usage"** from Google products — including third-party cookies/web beacons/IP-based ad
  serving. ([Google Publisher Policies — Privacy disclosures](https://support.google.com/adsense/answer/10502938))
- **About/Contact = NOT explicitly documented as AdSense requirements.** AdSense's own "Eligibility
  requirements" and "Make sure your site's pages are ready for AdSense" pages require **unique/original
  content**, **clear easy-to-use navigation**, being **18+**, and policy compliance — they call for a
  navigation bar and quality content but **do not name an About or Contact page**. ([AdSense:
  Eligibility requirements](https://support.google.com/adsense/answer/9724); [AdSense: Make sure your
  site's pages are ready](https://support.google.com/adsense/answer/7299563)) Treat About/Contact as
  **widely-recommended trust practice**, not an AdSense-documented gate.

### 4d. Recommended page set (each tied to a source)

| Page | Status | Why / source |
|---|---|---|
| **About** | Strongly recommended (not mandated) | Google's E-E-A-T self-check names "a site's About page" as a trust signal; best home for `Organization` JSON-LD. ([Helpful content — Expertise](https://developers.google.com/search/docs/fundamentals/creating-helpful-content); [Organization SD placement](https://developers.google.com/search/docs/appearance/structured-data/logo)) |
| **Contact** | Recommended | Human counterpart to `contactPoint`/`email`/`telephone`; supports "well-trusted" impression. ([Helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content); [Organization type defs](https://developers.google.com/search/docs/appearance/structured-data/logo)) |
| **Privacy** | **Required for AdSense** | Publisher Policies mandate a privacy policy disclosing Google/third-party data use. ([Publisher Policies — Privacy disclosures](https://support.google.com/adsense/answer/10502938)) |
| **Editorial / Methodology** ("How the data was built") | Recommended | Answers Google's **"How"** (incl. AI/automation disclosure) — high value for a data/tool site. Note 07's prototype already has `methodology.html`. ([Who/How/Why](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)) |
| **Author/byline info** | Recommended where expected | Google "strongly encourage[s]… bylines" linking to author background (**Who**). ([Who/How/Why](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)) |
| **Affiliate/ad disclosure** | Conditional | Not from Search guidance; carry per note 05 when monetization is layered (out of scope here). |

**Interlinking:** expose About / Contact / Privacy / Methodology in the **persistent footer** (and About
in the nav), which also satisfies AdSense's "clear, easy-to-use navigation." Put `Organization` +
`WebSite` JSON-LD on the home page (and mirror `Organization` on About); link bylines → author info;
link methodology from tool/dataset pages so the **How** is one click from the data. ([AdSense navigation](https://support.google.com/adsense/answer/7299563);
[Organization SD](https://developers.google.com/search/docs/appearance/structured-data/logo))

**Requirement vs recommendation, explicitly:**
- **Documented requirements:** a **privacy policy** (AdSense/Publisher Policies); Search Essentials'
  technical + spam rules; not mass-producing automated content to manipulate ranking.
- **Recommended-but-not-mandated:** About, Contact, editorial/methodology pages, bylines/author info,
  and `Organization`/`WebSite` structured data — all trust signals Google encourages, none a documented
  ranking requirement, and E-E-A-T is explicitly **not a ranking factor** itself.

---

## Summary of sources consulted

- **web.dev (Chrome CWV team)** — [Best practices for fonts](https://web.dev/articles/font-best-practices),
  [Optimize WebFont loading and rendering](https://web.dev/articles/optimize-webfont-loading),
  [Reduce web font size](https://web.dev/articles/reduce-webfont-size),
  [Preload optional fonts (zero jank)](https://web.dev/articles/preload-optional-fonts),
  [Optimize CLS](https://web.dev/articles/optimize-cls)
- **MDN / CSS specs** — [`font-display`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display),
  [`size-adjust`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust),
  [Web app manifest `icons`](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/icons)
- **USWDS** — [Using color (grades, magic number, families/roles)](https://designsystem.digital.gov/design-tokens/color/overview/),
  [System color tokens](https://designsystem.digital.gov/design-tokens/color/system-tokens/)
- **Material Design 3 (Google)** — [Color system: how it works (HCT, tonal palettes, roles, contrast, dark mode)](https://m3.material.io/styles/color/system/how-the-system-works)
- **Google Search Central** — [Creating helpful, reliable, people-first content (E-E-A-T, Who/How/Why)](https://developers.google.com/search/docs/fundamentals/creating-helpful-content),
  [Search Essentials](https://developers.google.com/search/docs/essentials),
  [Organization (logo) structured data](https://developers.google.com/search/docs/appearance/structured-data/logo),
  [Favicon in search](https://developers.google.com/search/docs/appearance/favicon-in-search)
- **Google AdSense / Publisher Policies** — [Google Publisher Policies (privacy disclosures)](https://support.google.com/adsense/answer/10502938),
  [Eligibility requirements](https://support.google.com/adsense/answer/9724),
  [Make sure your site's pages are ready](https://support.google.com/adsense/answer/7299563)
- **schema.org** — [logo](https://schema.org/logo)

No traffic, CPC, CTR, or revenue figures were used or needed to answer these questions.
