# 01 — Sample Keyword Planner export

Type: task
Status: resolved

## Question

Produce one real sample: run Keyword Planner on an existing validated idea's keywords (e.g. can-my-dog-eat-database), export the CSV, and drop it at `pipeline/pet-food-tools/ideas/can-my-dog-eat-database/keyword-planner.csv`. HITL — human runs the export; the answer records the actual CSV column shape so later tickets design against reality, not guesses.

## Answer

Done 2026-08-15. Human ran "Get search volume and forecasts" on the 16 keywords from `keywords-request.md` (US location, all languages — Planner offered no language filter on this view; Google network only, Aug 2025 – Jul 2026), then downloaded the **historical metrics** export from the Saved-keywords table. Artifact: `pipeline/pet-food-tools/ideas/can-my-dog-eat-database/keyword-planner.csv`.

Actual CSV shape (design against this, not guesses):

- **Encoding/format**: UTF-16LE with BOM, **tab-separated** despite the `.csv` extension.
- **Preamble**: row 1 = report title ("Keyword Stats <timestamp>"), row 2 = quoted date range; header is row 3.
- **Columns**: `Keyword, Currency, Segmentation, Avg. monthly searches, Three month change, YoY change, Competition, Competition (indexed value), Top of page bid (low range), Top of page bid (high range), Ad impression share, Organic average position, Organic impression share, In Account, Searches: <Month Year> × 12`.
- **Values**: Avg. monthly searches is a bucket midpoint-style number (`50.0`, `500.0`, `5000.0`, `50000.0`, `500000.0`) — order-of-magnitude buckets, not exact counts. Changes are percents (`0%`, `900%`, `-90%`). Competition is `Low/Medium/High` plus indexed 0–100. Bids in **account currency (INR here — account is India-based; expect any currency)**. Zero-volume keywords (e.g. "can my dog eat this checker", "dog food safety lookup") have empty metric cells, not zeros.
- **Aggregate rows**: two segmentation rows precede the keywords (blank keyword, `All` / `United States` totals).

