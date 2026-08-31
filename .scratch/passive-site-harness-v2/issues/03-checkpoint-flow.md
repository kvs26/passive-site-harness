# 03 — Checkpoint flow in the validate run

Type: grilling
Status: resolved

## Question

Where exactly in the validate dig does the checkpoint sit and how does the run behave around it? Decide: when the agent writes `keywords-request.md` (before the dig? after demand pass 1?); how many keywords it requests; what happens on a re-validation when a CSV already exists (staleness window?); and the exact park/resume wording.

## Answer

Decided with the human, 2026-08-15:

1. **When the request is written**: after demand pass 1 (autocomplete fan-out + pain dig), so the keyword list is built from real query variants, not just `idea.md` seeds. If `keyword-planner.csv` already exists and is fresh, the run uses it silently — no checkpoint interruption.
2. **Keyword count**: ~15–25, grouped in `keywords-request.md` (head / variants / hook-specific / monetization-CPC) so CSV rows map back to the signal they inform.
3. **Staleness**: soft ~6-month window. Older CSV is still used but flagged stale in the dossier with a refresh suggestion; never re-parks. If `keywords-request.md` gained keywords since the export, note the gap rather than park.
4. **Missing CSV behaviour**: finish the full dig, grade all six signals, write the complete dossier (confidence capped at medium per issue 02), *then* set `Status: parked`. Parking is a state, not an abort. Re-validation is a cheap top-up: ingest CSV, upgrade Demand/Monetization + confidence, flip to validated/rejected.
5. **Wording**:
   - `idea.md` History: `<date> — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate.`
   - End-of-run message: *"Parked — export Keyword Planner data for the keywords in `keywords-request.md` to `keyword-planner.csv`, then re-run validate on this idea to finish."*
6. **Parked ≠ validated**: parked ideas don't count toward the ≥3-validated comparison-brief trigger; only the CSV-backed re-run can flip to `validated`.
