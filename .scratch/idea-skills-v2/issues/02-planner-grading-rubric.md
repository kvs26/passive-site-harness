# 02 — Demand & monetization rubric with Planner data

Type: grilling
Status: resolved

## Question

How do Keyword Planner numbers feed the grading rubric? Decide: (a) how volume ranges + Trends corroboration map onto Demand strong/weak/unknown; (b) how top-of-page bids map onto the Monetization grade (thresholds? e.g. high bid > $1?); (c) whether Planner data affects the dossier confidence grade (e.g. can a dossier be "high" confidence without the CSV?); (d) how "never invent numbers" phrasing accommodates quoting ranges from the CSV.

## Answer

**(a) Demand.** The CSV counts as **one independent evidence piece**, never an automatic grade-setter, gated by volume buckets:

- Core keyword group summing to the **5K bucket or higher** → counts toward *strong* (still needs one more independent piece, e.g. pain-source recurrence or Trends corroboration).
- **500 bucket** → supports at most *weak* on its own; corroborates strong only alongside two other pieces.
- **≤50 bucket / keywords absent from the export** → no support; Demand falls back to v1 rules.
- A **falling YoY trend** in the CSV counts as contradicting evidence (existing rubric downgrades contradicted evidence to weak).

**(b) Monetization.** Judge on the **top-of-page LOW bid**, converted to USD-equivalent using a **current exchange rate fetched from the web** (conversion noted in the dossier, raw account-currency figures quoted verbatim):

- **≥ ~$0.50** → one evidence piece toward *strong* (still pair with visible ads/affiliate programs on competitor sites).
- **$0.10–0.50** → supports *weak*.
- **< $0.10 or blank** → no support.
- The Competition column is context only, not a grade input.

**(c) Confidence.** Rubric unchanged except one rule: **a dossier cannot be *high* confidence without the Keyword Planner CSV** — its absence caps confidence at *medium* (parking already handles the normal missing-CSV case; this covers re-validations and explicit waivers).

**(d) Hard-rule wording.** Amend "never invent numbers" to distinguish inventing from citing:

> **Never invent numbers.** No estimated search volume, CPC, difficulty, traffic, or revenue figures — ever. Numbers **read directly from an artifact on disk or a fetched page** (e.g. Keyword Planner buckets, bid columns, an exchange rate) may be quoted verbatim with their source; derived arithmetic (currency conversion, bucket sums) must show its inputs. `unknown` stays a first-class value.

The AdSense ≈ 25–40%-of-CPC heuristic may be mentioned *as a heuristic* but never used to output a revenue number.
