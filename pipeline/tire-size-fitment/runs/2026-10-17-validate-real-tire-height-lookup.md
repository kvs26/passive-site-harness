# Validate run: real-tire-height-lookup (2026-10-17)

Niche: tire-size-fitment. Run in the same session as `lifted-truck-tire-fit-verdict` at the user's "validate all ideas" request (one-idea-per-run rule relaxed; no winner picked).

## Outcome
Validated, low confidence (after CSV top-up; initially parked). Dossier: `../ideas/real-tire-height-lookup/dossier.md`. Keyword request: `../ideas/real-tire-height-lookup/keywords-request.md`.

## What was dug
- Google autocomplete fan-out (`--mode=plain`): model-specific phrasings exist ("ko2 285 70r17 diameter", "285 70r17 actual height").
- The scout's required test: obtain 3–5 manufacturer-published overall diameters for 285/70R17 to see the spread. **Failed** — see dead ends.
- Tire Rack affiliate page (6%, AOV >$400) for monetization.
- USD/INR 95.111965 (open.er-api.com) for the Planner bids.

## Dead ends / early stops
- Tire Rack model pages (BFGoodrich KO2, Falken Wildpeak AT3W, Toyo Open Country AT III) via curl: HTTP 200 but ~565-byte stubs.
- Discount Tire size page: ~1.4 MB JS shell, no spec text. SimpleTire 404, TireBuyer 500, tiresize.com model page 300, wheelsize.com connection failure.
- Earlier in the session: toyotires 404, bfgoodrichtires not extractable, Bing snippets without diameters.
- Bing SERP for "real height by model" returned the challenge shell; the incumbent question is not re-answered beyond scout.
- Google AIO not checkable — manual checkpoint listed.

## Key finding
No factual disproof of a scout gate, so no rejection. Hook (premise spread) unknown, Feasibility weak because spec data is hard to collect at scale, Moat weak. Demand for the model-specific intent unmeasured.

## Parked, then unparked (same day)
Parked at the end of the dig waiting on the CSV. Keyword Stats export (10_52_09) arrived 2026-10-17 and was ingested as a cheap top-up: all model-specific height phrasings measure zero; volume is nominal intent ("285 70r17 in inches" 50K) plus 500-bucket brand + size shopping terms. Demand stays weak, traffic sanity-check rewritten, status flipped to `validated`, confidence low. Original SERP/AIO expiry stands (2026-11-14). The per-model spread (3–5 spec sheets for one size) and the Google AIO checkpoint are still owed.

## Google AIO checkpoint (same day) — rejected
Run in an automated browser (US, signed out, no CAPTCHA). AIO present on all four queries and fully answers them: "285 70r17 in inches" (32.7in, 11.2in wide), "275 65r18 vs 275 70r18" (32.07 vs 33.16in, sidewall, revs/mile, 3.3% speedo), "how tall is a 285/70r17 ko2" (32.8in, cites Tire Rack, notes the "33-inch" label vs spec) and "ko2 285 70r17 diameter" (32.8in, TireSize.com/Coker). The `&udm=14` control is all retailer spec pages. Per-model spread still unmeasured, and model-specific phrasings are zero in Planner. Gate 1 disproved: status flipped `validated` -> `rejected`. See dossier SERP & AIO snapshot.
