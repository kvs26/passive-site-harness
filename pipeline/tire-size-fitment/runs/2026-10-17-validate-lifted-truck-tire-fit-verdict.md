# Validate run: lifted-truck-tire-fit-verdict (2026-10-17)

Niche: tire-size-fitment. Run in the same session as `real-tire-height-lookup` at the user's "validate all ideas" request (one-idea-per-run rule relaxed; ideas processed sequentially, no winner picked).

## Outcome
Validated, medium confidence (after CSV top-up; initially parked). Dossier: `../ideas/lifted-truck-tire-fit-verdict/dossier.md`. Keyword request: `../ideas/lifted-truck-tire-fit-verdict/keywords-request.md`.

## What was dug
- Pain mining: Reddit RSS (r/f150, r/4Runner, r/Ram1500), StackExchange (outdoors, mechanics), HN. Reddit gave 8 exact-setup threads across 3 independent subs; SE/HN gave nothing.
- Google autocomplete fan-out (`--mode=plain`): year × model × lift long tail.
- SERP: two Bing queries (F-150 leveling kit 33s; 4Runner 2in lift) + opened overlanding.tools, truckbedcoverfinder, tubetyre, tiresize.app.
- Monetization: Tire Rack affiliate page (6%, AOV >$400); FAQ answers collapsed.
- USD/INR rate for the Planner bids: 95.111965 (open.er-api.com).

## Key finding
overlanding.tools/calculators/lift-tire-clearance already gives a per-vehicle verdict for ~19 platforms (updated 2026-07-17). It lacks an offset input, per-row citations, Silverado/Sierra and year-level granularity. Scout gate 4 ("hook served") is partly disproved for the casual question, not for the offset-aware, cited, long-tail version. Graded Hook weak; not a rejection.

## Dead ends / early stops
- Google SERP/AIO not checkable by automation — manual checkpoint listed in the dossier.
- Reddit per-thread RSS rate-limits after 1–2 pulls; no further thread bodies read.
- Tire Rack affiliate FAQ and policy pages: cookie window not obtained.
- joteo.net, Torq Engineering guide, liftprocustoms, motoristcare not opened.
- Platform × lift volume cannot be read from the existing screen; CSV owed.

## Parked, then unparked (same day)
Parked at the end of the dig waiting on the CSV. Keyword Stats export (10_51_38) arrived 2026-10-17 and was ingested as a cheap top-up: Demand downgraded strong → weak (verdict phrasings 50-bucket/zero; volume in shopping terms "leveling kit for f150" 5K, "all terrain tires 275 65r20" 5K, "33 inch tires for f150" 500), traffic sanity-check rewritten, status flipped to `validated`, confidence medium. Original SERP/AIO expiry stands (2026-11-14). Google AIO manual checkpoint still owed.

## Google AIO checkpoint (same day) — stays validated, confidence lowered
Run in an automated browser (US, signed out, no CAPTCHA). AIO present on all four queries, each with a per-vehicle size answer: F-150 33s "will easily fit" with offset bands; 4Runner 2in ladder (275/70R17 sweet spot, 285 may rub); Wrangler JL (Rubicon 35s, Sport/Sahara 33s); 2021 Ram 1500 three tiers by offset. Each hedges on offset/trim and ends by asking for year, trim and wheel specs. `&udm=14` control (queries 1 and 4): forums, Reddit, YouTube, vendor fitment guides; overlanding.tools not on page 1. Pass condition partly failed (long-tail query answered at band level). Not kill-level: no cited exact-setup verdict. Confidence revised medium -> low (rubric: demand weak). Nearest-to-kill; re-probe before build.
