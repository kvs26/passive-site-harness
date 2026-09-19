# Validate top-up: token-capsule-shopping-planner — 2026-09-20

Cheap top-up per the missing-CSV park reason on the 2026-09-19 dossier. No fresh SERP/AIO/pain dig this run — the manual Google AIO checkpoint is still owed (Google 429-blocked on 2026-09-19) and stays a pre-build item regardless of status.

## What was done

1. Located the human's Keyword Planner export (`Keyword Stats 2026-09-20 at 01_14_55.csv` in Downloads) and copied it to `keyword-planner.csv` in the idea's folder.
2. Ran `scripts/planner-report.py keyword-planner.csv` to normalize the UTF-16LE/tab-separated export.
3. Result: of the 17 keywords in `keywords-request.md`, 13 came back zero/no-data — including **every** per-game hook keyword (Battle for Rokugan, Nemesis Lockdown, Orleans, Fromage, Quacks ×2, folded-space insert-fit) and every generic "board game token capsule(s)" phrasing. The 4 that registered any volume are generic seller-side terms (`21mm coin capsules`, `25mm coin capsules`, `coin capsule holders`, `coin capsule size chart`), all at the bare-minimum 50 bucket.
4. Converted the 3 bid ranges (INR) to USD via `api.frankfurter.app/latest?amount=1&from=INR&to=USD` (1 INR = 0.01043 USD, fetched 2026-09-20): `21mm coin capsules` ≈ $0.27–$1.37, `25mm coin capsules` ≈ $0.32–$1.23, `coin capsule holders` ≈ $0.17–$0.92.

## Signal updates

- **Demand** — stays strong (unaffected; the pre-CSV grade rested on forum-recurrence evidence, not search volume). The CSV's near-total zero-volume result gives no support either way per the rubric (50 bucket / absent → no support), but confirms the demand routes through community threads rather than Google search — same pattern as this niche's other CSV top-ups (companion-app-dependency-checker, rules-youre-playing-wrong).
- **Monetization** — stays weak. The 3 generic-term bid ranges are real advertiser interest in the exact product category (bonus, affiliate-route bids are supporting-only per the rubric) but don't resolve the still-unverified exact Amazon Toys & Games commission rate.
- **Traffic sanity-check** — updated with the real bucket numbers; reads less optimistic than the qualitative pre-CSV pass (50-bucket universe, no long-tail-surface keyword support), consistent with scout's original "smallest market of the batch" framing.
- All other signals (SERP/AIO unknown, Hook strong, Feasibility weak, Data moat weak) unchanged — no fresh dig this run.

## Confidence

Stays **medium** — the CSV lifts the "no CSV caps at medium" restriction, but the still-unknown SERP/AIO signal (manual AIO checkpoint blocked, not re-attempted this run) independently caps confidence below high.

## State change

No kill-level finding surfaced (weak/thin CSV data isn't kill-level — it just fails to help). Flipped `Status: parked` → `validated (confidence: medium)`. SERP/AIO evidence expiry unchanged at 2026-10-17 (not re-probed this run) — pre-build re-probe mandatory regardless, prioritizing per-game single-fact lookup queries per the standing risk note.

## Comparison brief

This niche now has 7 validated ideas (was already ≥3 before this run) — regenerated `pipeline/board-games/comparison-2026-09-20.md` to add this idea and pick up two other already-validated ideas (errata-correction-kit-builder, rules-youre-playing-wrong) that the existing brief predated.
