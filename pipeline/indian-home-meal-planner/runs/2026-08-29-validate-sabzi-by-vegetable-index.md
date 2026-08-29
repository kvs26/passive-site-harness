# Validate run — indian-home-meal-planner — sabzi-by-vegetable-index — 2026-08-29

Idea: **Sabzi-by-vegetable index** (pick the vegetable → filterable index of every sabzi, tagged dry/gravy · region · effort · roti-vs-rice pairing). Origin: `../runs/2026-08-29-scout.md` (strongest candidate of the scout run).

Credentials: no `.env` → credential-free adapters only. MCP: Playwright available (used for Bing SERP reads after DDG lite/html were both bot-challenged); Brave Search MCP configured but no tools exposed this session. No `keyword-planner.csv` / `keywords-request.md` at start → full dig + park.

## What was dug

- **Demand — autocomplete:** two fresh `fanout.py` fan-outs (gl=us). Strong by-vegetable + facet breadth: "which sabzi to make", "sabzi from aloo/palak/besan", "what to make with bhindi", "what goes with bhindi", "dry sabzi list/options", "gujarati sabzi list/options", "sabzi ideas when no vegetables are there", and a full regional set on cabbage ("cabbage sabzi punjabi/maharashtrian/rajasthani/gujarati/south indian/north indian style"). This is the clearest evidence the index's tag axes = real query dimensions.
- **Demand — pain:** `pain-fetch.py hn` came back generic (same-meal/grocery, nothing Indian). Reddit direct fetch blocked (image/JS wall); DDG lite + html both CAPTCHA'd. Bing SERP recovered recurrence: r/IndianTeenagers "same food everyday", r/IndianFood "only end up making two dishes at a time", and NDTV Food "Tired Of Bland Sabzi? 6 Tips" (25 Jul 2024) as mainstream coverage of the pain.
- **SERP & competitor weakness:** Bing on "sabzi ideas" and "bhindi sabzi ideas different ways". Head query = flat category listicles (spiceupthecurry 50+, vegrecipesofindia 150, tarladalal 251); per-vegetable query = single-dish recipe page (vegrecipesofindia "Bhindi ki Sabji"). No vegetable-picker / faceted index anywhere on the front page — re-verifies the scout's "no tool" finding.
- **Hook depth:** regional + dry/gravy + pairing autocomplete variants, plus incumbents already selling those cuts as separate pages → differentiator maps onto shown demand, not our invention.
- **Feasibility & unique data:** the dish universe is openly enumerated by the incumbent category pages (50+/150/251), dish names/attributes are facts (no licence), canon is multi-year-stable, static JSON build. The pivot (vegetable × dry/gravy × region × effort × pairing) is derivable but published nowhere → unique structure.

## Grades

Demand **strong** · SERP weakness **strong** · Hook depth **strong** · Monetization **weak** (no CPC/ad-tag read this run) · Feasibility **strong** · Unique data **strong**. Confidence **medium** (capped — no CSV).

## Dead ends / inconclusive

- HN Algolia: no Indian-specific sabzi-boredom thread (only generic).
- Reddit direct fetch + DDG (lite & html): blocked/CAPTCHA — pain recurrence rests on Bing-surfaced titles/snippets + autocomplete, not an on-page Reddit quote this run.
- Google Trends: not retried after the scout's 429; trend direction still unknown.
- Monetization: graded weak only for lack of bid data / un-fetched competitor ad tags, not for lack of a route — the space is a standard recipe display/affiliate niche. Expect an upgrade once the CSV lands.

## Keyword Planner checkpoint

No CSV → wrote `keywords-request.md` (~22 keywords, grouped head / by-vegetable / hook-specific / monetization-CPC). Completed the full dig and dossier anyway (confidence capped at medium), and **parked**.

## Outcome

Parked — dossier complete at medium confidence; waiting on the Keyword Planner CSV. Idea `Status:` → parked; board regenerated. No comparison brief triggered (0 `validated` ideas in this niche — parked ideas never count).
