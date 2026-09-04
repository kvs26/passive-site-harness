# Research: Pre-build re-probe — runs-on-your-battery-finder (2026-09-04)

Ticket: [01-prebuild-reprobe](../issues/01-prebuild-reprobe.md)

## Method

Google (`www.google.com/search`, `gl=us`) returned a bot-challenge page on the first live request (429 + "unusual traffic" interstitial) — consistent with the idea dossier's note that DDG/Google bot-challenges are a known probe hazard. Bing's rendered page also came back with only chrome (no organic results in the accessibility snapshot), and the browser session logged Google-challenge-related script errors during Bing navigation — treated as unreliable this pass, not retried further per the two-attempts rule. Fell back to `html.duckduckgo.com/html/` (renders server-side, no JS challenge) for organic-SERP evidence. **The live-Google AI Overview check (probe #3) was not completable this session** — recorded as blocked, not as a finding.

Queries run (DuckDuckGo HTML, no region filter):
- `what gadgets run on dewalt 20v batteries`
- `milwaukee m18 powered gadgets`
- `what runs on ryobi one+ battery`
- `hart 20v gadgets accessories`

## Findings

### 1. Has a filterable, cross-platform gadget/accessory directory shipped?

**No.** Across all four queries, first-page results are exclusively: single-brand listicles, Amazon/eBay/Etsy unfiltered search-result pages, single-brand OEM accessory stores (Milwaukee's own site, Mellif's Milwaukee-only adapter shop), and battery-guide sites that stop at battery↔tool/charger compatibility (toolcompatibility.com, whatbatteryfits.com — a new one not in the original incumbent list, same shape as batteryfits.com/garagealmanac.com). Nothing filterable, nothing cross-platform, nothing at the gadget/accessory layer.

### 2. Do head queries still show only 4–5-item listicles?

**Yes, still true — plus new listicles have appeared, all the same shape.** New incumbents surfaced this pass, all single-brand, small-N, non-filterable:
- housedigest.com, "8 Handy Accessories That Are Compatible With DeWalt Tools" (31 Aug 2025)
- bgr.com, "5 DeWalt Gadgets Users Swear By" (2 Jan 2026)
- products.consumerecho.com, "10 Best milwaukee gadgets" (31 Aug 2026) — a product-roundup/affiliate page, still single-brand, still a fixed top-N list, not a filterable catalog
- msn.com, "5 Milwaukee gadgets that are super useful..." (undated, syndicated)

None cover cross-platform filtering, fit-type flagging (native/adapter), or small-platform coverage (Hart/Bauer/Kobalt) — the Hart query returned only Amazon/eBay soup, no gadget content at all.

### 3. Is the AI Overview still category-level only?

**Not re-verified — blocked.** Live `google.com` served a bot-challenge interstitial on first request this session; Bing's rendered result also came back empty. Did not retry a third channel per the two-failed-attempts rule. This probe stays **unconfirmed since 2026-09-01** rather than re-affirmed.

## Conclusion

The hook is intact on the two probes that could be re-run live: no filterable cross-platform directory exists, and the SERP is still small-N single-brand listicles (three new ones found, same shape as the originals) plus unfiltered marketplace/OEM pages. The small-platform gap (Hart) is still unserved by anything beyond raw Amazon/eBay search. The AI-Overview probe could not be re-run live this session (bot-challenge on Google, empty render on Bing) — treat the 2026-09-01 AIO finding (category-level, near-miss) as **unconfirmed but not contradicted**; no evidence surfaced of an AIO expansion to exhaustive filterable-catalog answers.

**Net:** no ground-shift found. Since this is advisory (does not block deploy per the ticket and the map's Notes), build can proceed on schedule; the AIO gap should be re-checked opportunistically once a live-Google channel is available (e.g., manually, or from a different network) before relying on that specific claim again.
