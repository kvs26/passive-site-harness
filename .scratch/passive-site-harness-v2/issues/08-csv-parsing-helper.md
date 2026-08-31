# 08 — Keyword Planner CSV parsing helper?

Type: grilling
Status: resolved

## Question

Given the real export shape (UTF-16LE tab-separated, 2-row preamble, aggregate segmentation rows, bucketed volumes, account-currency bids — see [ticket 01](01-sample-keyword-planner-export.md)), should `scripts/` gain a small helper that normalizes `keyword-planner.csv` into a readable table for the validate skill, or should the skill just instruct the agent to read the raw file (e.g. via `iconv`)? Decide and, if yes, define the helper's output shape.

## Answer

Yes — helper adopted, and (per the user, overriding the plan-only default) built in this session.

- **Script**: `scripts/planner-report.py`, invoked as `python3 scripts/planner-report.py <path-to-keyword-planner.csv>`.
- **Output shape**: aligned plain-text table to stdout — Keyword, Avg searches (bucket, `.0` stripped), 3-mo change, YoY change, Competition, Bid low/high — preceded by a one-line header (report title, date range, account currency). Preamble and aggregate segmentation rows are dropped; zero/no-data keywords are listed separately; a trailing note reminds that volumes are order-of-magnitude buckets. No second artifact is written.
- **USD conversion**: deliberately *not* done by the helper — it stays offline/deterministic and prints bids in account currency with the currency code; the agent converts at a live rate and cites it, per the rubric from [ticket 02](02-planner-grading-rubric.md).
- **Skill wiring**: idea-validate's CSV format note now says "don't read the raw file" and points at the helper.
- Verified against the real export at `pipeline/pet-food-tools/ideas/can-my-dog-eat-database/keyword-planner.csv`.
