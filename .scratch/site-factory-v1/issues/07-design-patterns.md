# Design patterns for high-CWV, high-converting tool/directory sites

Type: research
Status: resolved

## Question

Collect proven, reusable design patterns to feed the house template (ticket 09). For both an **interactive tool/calculator page** and a **long-tail directory/detail page**, gather patterns that are:
- **(a) Visually pleasing and trustworthy** — clean, modern, credible.
- **(b) High Core Web Vitals** — no heavy frameworks/webfont bloat; system-font stacks, lazy media.
- **(c) Conversion-oriented** — guide the eye to the tool → result → monetization holes, no dark patterns.
- **(d) Mobile-first.**
- **(e) Accessible** — contrast, focus, semantics.

Gather concrete references/examples and distill a short **pattern set** + a **design-token system** (color / type / spacing scale) that enables per-site "skins" without redesign. Free/open resources only.

Output: the pattern set + token system the prototype (ticket 09) can build from.

Write findings to `research/07-design-patterns.md`.

## Answer

Findings written to [research/07-design-patterns.md](../research/07-design-patterns.md), sourced only from web.dev (Core Web Vitals), MDN/WCAG, GOV.UK Design System, and USWDS.

- **Tool/calculator page patterns**: reserved-space layout (kills CLS), linear question → input → answer flow, native accessible form controls, visible focus rings, system-font stacks, pre-sized ad "holes" placed after the result.
- **Directory/detail page patterns**: static per-entity pages for best LCP, mandatory image dimensions, semantic landmarks + skip links, lazy-loaded secondary media with an eager hero image, bfcache-friendly navigation, WCAG AA contrast minimums.
- **Design-token proposal**: skin-agnostic set — semantic color roles with contrast rules, a 7-step system-font type scale, an 8-step 4px-based spacing scale, modeled on USWDS's "discrete token" philosophy so a skin only overrides token values while templates/components stay untouched.

Feeds directly into ticket 09 (house template).
