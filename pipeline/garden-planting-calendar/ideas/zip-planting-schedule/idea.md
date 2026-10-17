# zip-planting-schedule

Status: rejected
Origin: ../../runs/2026-10-09-scout.md
Strength: **moderate** (big measured demand; incumbents beatable but Almanac has huge authority)

## Idea
ZIP + risk level (10/50/90% frost probability, 32° or 36°) + your crop list → personalised dated schedule: sow indoors, harden off, transplant, direct sow, succession re-sows until the fall cut-off, harvest window; printable PDF + .ics export. Long-tail pages per crop × state/city/zone.

## Demand
- planting calendar 5K; last frost date 5K; garden planner 5K; seed starting calculator 5K; first frost date 500; frost dates by zip code 500; vegetable planting calendar by zip code 500; when to plant vegetables zone 7 50; entry traffic from planting zone by zip code 50K; when to plant tomatoes/potatoes 5K each (Keyword Planner US, Sep 2025–Aug 2026).
- Frequency: recurring — multiple visits per season, every year (seed order, start, transplant, succession, fall).
- Audience: US home vegetable gardeners; long tail of plant × state/zone queries (autocomplete, user-reported).

## Edge
- **Dataset:** NOAA NCEI 1991–2020 freeze-probability normals per station mapped to ZIP + per-crop timing rows (weeks before/after frost, soil temp, days to maturity, succession interval, fall cut-off) hand-verified against 2+ extension services/seed catalogs. Merge + per-row judgment = moat.
- **Compute:** risk-level frost date × crop rules → dated actions; fall cut-off = first-frost − DTM − buffer; succession count.
- **Long-tail surface:** "when to plant tomatoes in Ohio", "Columbus OH planting calendar", "zone 7 vegetable planting calendar".
- **Monetization route:** high-RPM Home & Garden ads + affiliate (Amazon Lawn & Garden 3%, per Associates rate table fetched 2026-10-09; seed-company programs unknown).

## Hook
The only page that takes your ZIP *and* your risk tolerance and gives every crop you grow a dated, printable, succession-aware schedule — garden.org stops at frost odds, Johnny's makes you type the date, Almanac gives one average under a Raptive ad stack.

## Incumbent probe (2026-10-09)
Almanac ZIP calendar (Raptive/AdThrive, single-average, no custom list observed), garden.org (probabilities, no crops), Johnny's (crop table, manual date), veggieharvest (static 2020 zone posts), plantmaps (maps). Details in run log. Gap: nobody merges probability frost dates + crop rules + succession + export.

## AIO probe
Manual checkpoint queries: "planting calendar", "vegetable planting calendar by zip code", "when to plant tomatoes", "last frost date", "when to plant vegetables zone 7". Predicted: tool queries low AIO; "when to plant tomatoes" high AIO but hedged (location-dependent).

## Gate results
1 pass-predicted (compute wedge) · 2 pass (static, precomputed ZIP→station JSON) · 3 pass (merge + verification; upkeep low, normals are decadal) · 4 pass — beatable, not served well · 5 pass · 6 pass · 7 pass (both routes).

## Evidence
- gardening.SE q/64540 — asks 90%-confidence date; "always used the last frost date to decide when to plant my tomatos".
- gardening.SE q/44395 — "plant seeds 2 weeks after the last expected frost date".
- garden.org 43215: "by April 30 we are at the 50/50 point" (probability demand).
- Reddit: unknown (Arctic Shift timeouts).

## History
- 2026-10-09 — candidate (emitted by scout run)
- 2026-10-17 — rejected: scout gate 4 (hook not served well / purpose-built incumbent) disproved on validation. whentoplant.net's free Garden Planner (tools/garden-planner/) takes a ZIP, lets users pick crops and returns one dated start-indoors / harden-off / transplant / direct-sow / harvest schedule with "Print plan" and "Add to calendar (.ics)", no account, on the same NOAA 1991–2020 station normals (live run ZIP 43215) across a 3,338-URL site; also plantbyzip.com, planyourhomestead.com, rootedreminders.com. Residual gap (selectable 10/50/90% risk, succession re-sows, fall cut-off) is a feature delta, not a site. Confidence medium (no CSV — not needed for the kill). Dossier: [dossier.md](dossier.md); run: [../../runs/2026-10-17-validate-zip-planting-schedule.md](../../runs/2026-10-17-validate-zip-planting-schedule.md).
