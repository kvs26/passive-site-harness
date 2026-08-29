# Fridge Filter Certification Checker

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

Neutral refrigerator water filter cross-reference: enter fridge model or OEM filter number → OEM filter + generic alternatives, each flagged with verified NSF/ANSI 42/53/401 certification status and counterfeit-avoidance guidance.

## Hook

Every cross-reference tool on the SERP is a filter seller (EveryDrop, FiltersFast, Waterdrop, EarthSmart) with an incentive to push its own cartridges — nobody neutral tells you which cheap filter is actually certified for your fridge, even though NSF's certification listings are public and checkable.

## Gate results

1. Answer-it — pass: LLM can't reliably map model→filter→certified generics; requires a cross-reference DB + live certification listings.
2. Static feasibility — pass: static site over a build-time-compiled JSON of filter mappings + certification records.
3. Unmaintainable data — pass (near-miss): filter models change slowly; NSF listing DB is public; quarterly refresh plausible. Verify scope at validate.
4. No specific hook — pass (near-miss): cross-reference *charts* exist (plumbingsupply.com, wateranywhere.com) and every seller has a "filter finder", but all are sellers or flat charts; independent certification-status angle unserved on the SERP fetched this run. Confirm at validate.
5. Legal/policy — pass: factual certification data; no health-advice claims beyond quoting NSF standards.
6. US-market — pass: US brands, NSF is US certification.

## Evidence

- Autocomplete (Google suggest, gl=us, 2026-08-29): verbatim suggestions "refrigerator water filter compatibility chart", "refrigerator water filter cross reference", "refrigerator water filter cross reference chart", "samsung refrigerator water filter compatibility", "can i use any water filter for my refrigerator".
- Reddit r/Frugal — "Which Off-Brand Refrigerator Water Filters are Worth Purchasing?" (20+ comments): "I've found that the name brand filters are on the pricey side. There are a number of off-brand options available that are cheaper, and a few websites I've never heard of carrying the[m] … I'm unaware of reputable water filter storefront sites." https://www.reddit.com/r/Frugal/comments/1bdijp1/which_offbrand_refrigerator_water_filters_are/
- Google SERP (fetched 2026-08-29) shows recurring Q&A demand: "Do I need to use OEM water filters in my fridge…", "Is it a bad idea to buy refrigerator water filters from one of…", "Safe alternatives to name-brand filter$ : r/WaterFilters", "Cheaper NSF-53 certified version of Whirlpool EDR1RXD1…" (searchers literally asking for certified generics).
- HN: "Amazon sold us a defective and/or counterfeit refrigerator water filter that leaked and damaged our hardwood floors" https://news.ycombinator.com/item?id=22400350
- Consumer Reports covers "How to Find a Cheaper Replacement Water Filter" as an article, not a tool (SERP, 2026-08-29).
- Search volume / CPC: unknown (no Keyword Planner CSV this run). Trends exact-phrase "refrigerator water filter compatible" registered low relative values vs "washer capacity" (US, 12 mo); head-term volume unknown.

## History

- 2026-08-29 — candidate (emitted by scout run)
- 2026-08-29 — rejected: scout gate 4 disproved on validation. The neutral, certification-aware cross-reference hook is now served by multiple purpose-built, independent-positioned finder tools updated within the last 1–2 months — filterfitnow.com (verification claims to check certification records, updated Aug 24 2026), inspire-company.com (finder + NSF-certified-aftermarket framing + RFID flags, Jul 2026), filtersearcher.com ("independent lookup tool, we do not sell products" + NSF cert guide, Jul 14 2026), fit-checkr.com. Demand strong and monetization strong, but hook occupied; only residual edge (machine-verified per-SKU NSF-listing status) has no demand evidence. ([dossier](dossier.md) · [run](../../runs/2026-08-29-validate-fridge-filter-cert-checker.md))
