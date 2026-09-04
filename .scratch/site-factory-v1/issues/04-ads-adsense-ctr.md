# AdSense approval + high-CTR placement + analytics choice

Type: research
Status: resolved

## Question

Two parts, both feeding the deferred monetization layer.

**(a) Google AdSense.** Current (2026) approval requirements for a new static niche site — content depth, traffic, policy, and the legal pages required (privacy policy, cookie/consent, about/contact). Realistic approval timeline. Then: **placement patterns that maximize legitimate ad clicks (CTR) on a tool/directory page without violating AdSense policy or harming UX / Core Web Vitals** — Auto ads vs manual units, above/below the tool, within long-tail pages, and how to reserve ad space to avoid layout shift (CLS).

**(b) Analytics.** Pick a free, lightweight, privacy-friendly analytics to measure traffic and whether ads get clicked: **GA4 vs Cloudflare Web Analytics vs self-hosted Plausible** — with CWV impact and consent trade-offs.

Because this is a **deferred layer added post-ship**, capture what the house template must **pre-provision** (ad-slot "holes", consent banner, analytics snippet placeholder) so adding ads later needs zero re-architecting.

Write findings to `research/04-ads-adsense-ctr.md`.

## Answer

Findings written to [research/04-ads-adsense-ctr.md](../research/04-ads-adsense-ctr.md).

- **AdSense approval**: no published numeric traffic/content minimums — qualitative bar ("fully built," "sufficient high-quality text," clear navigation, no thin/auto-generated content). Timeline: days to 2–4 weeks. Requires a privacy policy disclosing Google's ad cookies + opt-out links; About/Contact pages expected though not strictly required by policy.
- **Placement for CTR**: ads must not sit adjacent to nav/action items (policy violation), no visual tricks drawing clicks, "Advertisements" labeling only. Safe pattern: sidebar/above-fold, below the tool (never overlapping it), between long-tail content blocks.
- **CLS**: reserve ad-slot space via `min-height`/`aspect-ratio` sized to standard ad dimensions (300×250, 728×90, etc.) before any ad script loads, per web.dev's CLS guidance.
- **Analytics pick**: Cloudflare Web Analytics — no cookies, no consent banner, free unlimited, same-vendor as the Cloudflare Pages deploy target. Plausible (self-host) and GA4+Consent-Mode-v2 are documented fallbacks if per-ad-click attribution is later needed, at the cost of a consent banner and/or hosting burden.
- **Pre-provisioning for the house template**: empty sized ad-slot containers with reserved space; a single-point analytics-snippet insertion spot in the shared `<head>`; a privacy-policy page skeleton (+ About/Contact) shipped from day one; a hidden-but-present consent-banner scaffold (in case GA4 is ever chosen); an `ads.txt` placeholder at the site root.
- Flagged verification gaps: GA4 script-size and "regulators found GA4 non-compliant" claims came from Plausible's marketing pages (vendor claim, not independently verified against Google/a regulator); no real CTR benchmarks exist in any primary source, so none were invented.
