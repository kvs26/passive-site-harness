# 08 — Keyword Planner CSV parsing helper?

Type: grilling
Status: open

## Question

Given the real export shape (UTF-16LE tab-separated, 2-row preamble, aggregate segmentation rows, bucketed volumes, account-currency bids — see [ticket 01](01-sample-keyword-planner-export.md)), should `scripts/` gain a small helper that normalizes `keyword-planner.csv` into a readable table for the validate skill, or should the skill just instruct the agent to read the raw file (e.g. via `iconv`)? Decide and, if yes, define the helper's output shape.
