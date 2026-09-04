# Research: Design patterns for the site-factory house template

Label: wayfinder:research
Effort: [site-factory-v1](../map.md)

## Question

Collect proven, reusable design patterns for a themeable static-site "factory" template (Astro/11ty-style, no client-rendered React), covering two page archetypes — an interactive tool/calculator page and a long-tail directory/detail page — that are visually credible, high-CWV, conversion-oriented without dark patterns, mobile-first, and accessible. Plus a generic design-token proposal.

## Method

Checked official/primary sources only: web.dev (Core Web Vitals team), MDN, W3C WCAG, GOV.UK Design System (Crown copyright, open licence), and U.S. Web Design System (USWDS, public domain/CC0 government design system). No traffic/conversion numbers invented; none found or needed for this design-pattern question.

---

## 1. Tool / calculator page patterns

| Pattern | Description | Source |
|---|---|---|
| **Reserve space for every input/result region up front** | Give the input form, result panel, and any ad/embed slots a fixed or `min-height`/`aspect-ratio` box before content loads, so nothing shifts as JS or ads inject late. Directly targets CLS. | [web.dev: Optimize CLS](https://web.dev/articles/optimize-cls) |
| **Single-column, top-to-bottom flow: question → input → answer** | Structure the page so the eye travels linearly from the tool's question, to the input controls, to the computed result — the natural reading order for both sighted and screen-reader users; this is also the natural place to route attention toward a monetization slot placed *after* the answer, not blocking it. | [web.dev: Keyboard focus / focus order](https://web.dev/learn/accessibility/focus) (focus order must match visual order) |
| **Result appears in-place, not a redirect/new page** | Compute and show the result on the same page/state rather than navigating away — avoids extra page loads (helps LCP/INP) and keeps the user's context. Use a plain form submit or minimal vanilla JS listener; avoid a SPA framework for this. | [web.dev: Web Vitals overview](https://web.dev/articles/vitals) (INP/interactivity thresholds) |
| **Native form controls, explicit `<label>` per input** | Every input has a visible, programmatically-associated `<label>`; use native `<select>`, `<input type="number">`, radio/checkbox groups instead of custom JS widgets. Native controls are keyboard- and screen-reader-accessible for free. | [GOV.UK Design System: Components (forms)](https://design-system.service.gov.uk/components/) |
| **Visible, high-contrast focus indicator on every interactive element** | Never `outline: none` without a replacement; style a clear focus ring (≥3:1 contrast against its background) so keyboard users can track where they are while stepping through the tool. | [web.dev: Focus indicator](https://web.dev/learn/accessibility/focus) |
| **No web fonts for body/UI text — system-font stack** | Removing custom web fonts eliminates FOUT/FOIT-driven layout shift and one or more render-blocking network requests, directly improving CLS and LCP. | [web.dev: Optimize CLS — Web fonts](https://web.dev/articles/optimize-cls) |
| **Ad/affiliate "holes" reserved below the fold, sized before content loads** | Place monetization slots after the primary tool result, with a reserved `min-height` container — same CLS technique used for ads generally — so they can be switched on later without reflowing the page. | [web.dev: Optimize CLS — Ads, embeds and other late-loaded content](https://web.dev/articles/optimize-cls) |
| **"Load more" / explicit user-initiated content changes, not auto-injected** | If a tool reveals extra detail or a second result set, gate it behind a button click (shifts within 500 ms of user input don't count against CLS) rather than auto-loading — also keeps the result predictable to screen-reader users. | [web.dev: Optimize CLS — Avoid inserting new content without a user interaction](https://web.dev/articles/optimize-cls) |

## 2. Directory / detail (long-tail) page patterns

| Pattern | Description | Source |
|---|---|---|
| **One canonical URL/template per entity, statically generated** | Each product/dataset entry gets its own pre-rendered HTML page (SSG, not client-fetched) — best possible LCP/TTFB since there's no client-side data fetch before content appears. | [web.dev: Web Vitals — LCP](https://web.dev/articles/vitals) |
| **Image dimensions always declared (`width`/`height` or `aspect-ratio`)** | Every thumbnail/hero image on a detail page must have explicit dimensions or reserved aspect-ratio so text/labels around it don't jump as images load — the single most common real-world CLS cause. | [web.dev: Optimize CLS — Images without dimensions](https://web.dev/articles/optimize-cls) |
| **Semantic landmark structure**: `<header>`, `<nav>`, `<main>`, one `<h1>`, descending heading levels | Lets assistive tech and search engines understand page structure without any ARIA; a directory/detail page is exactly the case where heading order communicates hierarchy (product name → specs → related items). | [MDN: Understanding WCAG — structure guidance referenced alongside color contrast](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) |
| **Skip link to main content** | First focusable element on the page lets keyboard users bypass repeated header/nav to reach the entity's detail content — same navigation exists on every one of many long-tail pages, so the skip link pays off at scale. | [web.dev: Focus order — Skip links](https://web.dev/learn/accessibility/focus) |
| **Lazy-load below-the-fold media, eager-load the hero image** | Use native `loading="lazy"` for secondary images/related-item thumbnails, and prioritize the single largest above-the-fold image so it's the LCP candidate and loads first. | [web.dev: Web Vitals — LCP](https://web.dev/articles/vitals) |
| **Reserve space for late ad/affiliate placements in the content flow** | Same CLS technique as the tool page: a fixed-size or `min-height` container after the core content (specs table, description) so an ad slot activated later doesn't reflow already-indexed, already-ranking pages. | [web.dev: Optimize CLS — Reserve space for late-loading content](https://web.dev/articles/optimize-cls) |
| **Back/forward cache (bfcache) eligibility** | Avoid `unload` handlers and other bfcache-blockers so users navigating back from a detail page to a directory/listing page get an instant, non-shifting restore — especially valuable on directory sites with heavy back-and-forth browsing between listing and detail pages. | [web.dev: Optimize CLS — bfcache](https://web.dev/articles/optimize-cls) |
| **4.5:1 text contrast minimum (WCAG AA), 3:1 for large text and UI components** | Applies to body copy, spec labels, badges, and any icon/graphic used to convey status (e.g., "in stock", "compatible") on a detail page. | [MDN: Understanding WCAG — Color contrast](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) (citing [WCAG 1.4.3 / 1.4.11](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum)) |

---

## 3. Design-token system (generic, reusable across skins)

Modeled on the "limited, discrete palette instead of continuous values" philosophy used by USWDS's token system, adapted to a small, brand-agnostic set. A skin overrides only the *values*; templates reference only the *token names*, so swapping a skin never touches markup or component structure. ([USWDS: Design tokens](https://designsystem.digital.gov/design-tokens/))

### Color scale

Use HSL-based semantic roles, not literal hex values, so a skin can rotate hue while preserving contrast relationships:

| Token | Role | Contrast requirement |
|---|---|---|
| `--color-bg` | Page background | — |
| `--color-surface` | Card/panel background | 3:1 vs `--color-bg` (non-text) |
| `--color-text` | Body text | 4.5:1 vs `--color-bg`/`--color-surface` (AA) |
| `--color-text-muted` | Secondary text (captions, meta) | 4.5:1 vs its background |
| `--color-primary` | Brand accent, primary CTA | 4.5:1 for text-on-primary use |
| `--color-primary-hover` | Primary hover/active state | — |
| `--color-border` | Dividers, input borders | 3:1 vs adjacent surface (non-text UI component) |
| `--color-focus` | Focus ring | 3:1 vs adjacent background |
| `--color-success` / `--color-warning` / `--color-danger` | Status/inline validation | 4.5:1 for text use |

Contrast minimums per [WCAG 1.4.3 (AA, text) and 1.4.11 (AA, non-text/UI components)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) — verify every skin's palette against these ratios before shipping, e.g. with a contrast checker.

### Type scale

System-font stack only (no webfont download, per the CLS/LCP guidance above):

```
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

A compact modular scale (~1.25 ratio), same seven steps for every skin — skins vary weight/letter-spacing, not the steps:

| Token | Size (rem) | Typical use |
|---|---|---|
| `--text-xs` | 0.75 | Fine print, meta |
| `--text-sm` | 0.875 | Secondary text, labels |
| `--text-base` | 1 | Body copy |
| `--text-md` | 1.25 | Lead paragraph, tool result |
| `--text-lg` | 1.5 | H3 |
| `--text-xl` | 2 | H2 |
| `--text-2xl` | 2.5 | H1 |

### Spacing scale

Single 4px base unit, exponential-ish steps (matches the "discrete options, not a continuum" approach USWDS uses for its spacing units), reused for padding, margin, and gap everywhere so vertical rhythm stays consistent between skins:

| Token | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-12` | 48px |
| `--space-16` | 64px |

Source pattern for the "small fixed set of tokens, not arbitrary values" approach: [USWDS Design tokens](https://designsystem.digital.gov/design-tokens/).

### How this supports theming

Templates and components reference only token *names* (`var(--color-primary)`, `var(--text-lg)`, `var(--space-4)`); a "skin" is a CSS file that redefines the token *values* (a different hue for `--color-primary`, e.g.) at `:root`. No component markup or layout CSS changes between skins — this is the same separation of concerns GOV.UK's Design System uses between its [styles](https://design-system.service.gov.uk/styles/) (tokens/foundations) and [components](https://design-system.service.gov.uk/components/) (markup + behavior built on those tokens).

---

## Summary of sources consulted

- web.dev — [Optimize CLS](https://web.dev/articles/optimize-cls), [Web Vitals](https://web.dev/articles/vitals), [Keyboard focus](https://web.dev/learn/accessibility/focus)
- MDN — [Understanding WCAG: Color contrast](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- GOV.UK Design System — [home](https://design-system.service.gov.uk/), [components](https://design-system.service.gov.uk/components/), [styles](https://design-system.service.gov.uk/styles/)
- USWDS (U.S. Web Design System) — [Design tokens](https://designsystem.digital.gov/design-tokens/)

No traffic, CTR, or revenue figures were used or needed to answer this question.
