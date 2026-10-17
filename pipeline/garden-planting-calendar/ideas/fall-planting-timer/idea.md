# fall-planting-timer

Status: validated
Origin: ../../runs/2026-10-09-scout.md
Strength: **moderate-weak** (strong 5K-bucket heads; AIO risk on generic "when to plant X")

## Idea
ZIP → first-frost / ground-freeze timing → dated windows for garlic, tulip/daffodil/crocus bulbs, cool-season grass seed, fall potatoes/cover crops; per-variety notes (softneck vs hardneck, warm-zone bulb pre-chilling); printable checklist.

## Demand
- when to plant garlic 5K; when to plant tulip bulbs 5K; when to plant grass seed 5K; when to plant potatoes 5K; when to plant garlic in ohio 500; first frost date 500 (Keyword Planner US, Sep 2025–Aug 2026).
- Frequency: annual, seasonal (Sep–Nov + spring for grass/potatoes).
- Audience: gardeners + lawn owners (grass seed widens beyond veg gardeners).

## Edge
- **Dataset:** NOAA freeze normals + per-plant rules (soil-temp targets, weeks-before-freeze, chill hours for zones 8–10) verified per row against extension pages.
- **Compute:** ZIP → dated window + "too late / still OK this week" verdict.
- **Long-tail surface:** plant × state ("when to plant garlic in Ohio" — 500 bucket proves the pattern).
- **Monetization route:** affiliate — Amazon Lawn & Garden 3% (bulbs, grass seed, spreaders, bulb planters); seed-garlic/bulb vendors unknown; high-RPM Home & Garden.

## Hook
A dated, ZIP-specific "plant garlic/bulbs/grass between X and Y — today is OK/too late" verdict instead of "4–6 weeks before the ground freezes".

## Incumbent probe (2026-10-09)
Almanac and garden.org cover frost dates; none of the fetched incumbents gave a per-ZIP dated bulb/garlic/grass window. Not probed: dedicated lawn sites (Scotts) — validate must open.

## AIO probe
Checkpoint: "when to plant garlic", "when to plant tulip bulbs", "when to plant grass seed", "when to plant garlic in ohio". Predicted: AIO present for all; likely generic/hedged → kill if AIO gives dated per-state answers.

## Gate results
1 near-miss risk · 2 pass · 3 pass (moderate) · 4 pass (unopened lawn incumbents flagged) · 5–7 pass.

## Evidence
- gardening.SE q/3760: "When is the best time of year to plant grass seed? So as a new homeowner…"
- Keyword buckets above. Reddit: unknown.

## History
- 2026-10-09 — candidate (emitted by scout run)
- 2026-10-17 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate. Also outstanding: manual Google AIO checkpoint; lawn incumbents (Scotts etc.) could not be opened. No kill-level finding: the closest incumbent (whentoplant.net) answers "too late?" wrongly for tulips and grass seed. Dossier: [dossier.md](dossier.md); run: [../../runs/2026-10-17-validate-fall-planting-timer.md](../../runs/2026-10-17-validate-fall-planting-timer.md).
- 2026-10-17 — validated (confidence: medium). SERP/AIO evidence expires 2026-11-14; pre-build re-probe mandatory. Keyword Planner CSV ingested (top-up; SERP/AIO not re-probed): five 5K-bucket "when to plant" heads, "is it too late to plant grass seed" 500 (+900% YoY); affiliate linkability confirmed for 5 product families. Still open: manual Google AIO checkpoint (a fully answering AIO would be kill-level), lawn incumbents unopened. Demand peak is Sep–Nov, so a build now targets next fall. Dossier: [dossier.md](dossier.md).
- 2026-10-17 — AIO re-probe done via Playwright (SERP/AIO evidence dated 2026-10-17, expiry unchanged): AIO present on 6/6 fall queries, zone/region-level and hedged (Ohio garlic gets dated sub-regional windows); not kill-level. Remaining wedge is the per-ZIP dated verdict; Google AI Mode is a risk. Lawn incumbents still unopened (jonathangreen.com 403).
