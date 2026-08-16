# Validate run — 2026-08-17 — can-my-dog-eat-database (pet-food-tools) — Keyword Planner top-up

## Setup

Cheap top-up run per skill input rule 4: idea already `validated` (2026-08-06 full dig), and `keyword-planner.csv` appeared since (export dated 2026-08-15 — fresh, well inside the ~6-month window). No full re-dig; CSV ingested via `scripts/planner-report.py`, folded into Demand and Monetization, dossier updated.

## What was done

1. **CSV ingest** — 16/16 requested keywords present in the export (14 with metrics, 2 zero-data). Coverage matches `keywords-request.md`; no gap to note. Buckets (order-of-magnitude): "can dogs eat grapes" 500K; "can dogs eat chocolate" and "dog chocolate toxicity calculator" 50K; five panic/quantity long-tail terms at 5K; the calculator query shows 3-mo and YoY +900%.
2. **Currency conversion** — bids exported in INR; fetched https://open.er-api.com/v6/latest/INR → 1 INR = 0.010471 USD (updated 2026-08-16). All USD figures in the dossier derived from that rate with INR inputs shown.
3. **Demand** — CSV counts as one independent piece per rubric (core group ≥5K bucket, easily cleared). Already strong from Reddit recurrence + fan-out; now corroborated. Stays **strong**.
4. **Monetization** — top-of-page LOW bids mostly < $0.10 USD-equiv (₹1.12–4.76 → $0.01–0.05); only "dog ate grapes and is fine" (₹45.07 → $0.47) and "my dog ate a grape" (₹12.91 → $0.14) reach the $0.10–0.50 weak-support band. No keyword clears the ≥$0.50 bar. Grade stays **strong** on the pre-existing on-page evidence (dogtoxic ads, caninebible affiliate stack), but a low-display-RPM caveat was added: monetization likely leans affiliate over AdSense.
5. **Trend check** — falling YoY on peripheral terms only ("dog ate a banana peel" −90%, "what can dogs eat" −90%); core group flat or rising. No downgrade triggered.
6. **Confidence** — high, now properly CSV-backed (the 2026-08-06 run had graded high pre-CSV; that gap is closed).

## Notable findings

- "dog chocolate toxicity calculator" at the 50K bucket with +900% YoY is direct, growing tool-intent demand — stronger keyword support for the hook than expected.
- Generic checker phrasings ("can my dog eat this checker", "dog food safety lookup") have no data — the demand phrasing is calculator-shaped, not database-shaped; worth remembering at PRD time.
- Advertiser CPCs in this space are low; head terms bid ~$0.02–0.03 USD-equiv.

## Dead ends

None — no searching this run; artifact ingest + one exchange-rate fetch only.

## Outcome

Dossier updated (Keyword data section added; Demand/Monetization evidence extended; confidence high, CSV-backed). Status stays `validated`; History appended. Board regenerated. Validated count in niche = 1 → no comparison brief.
