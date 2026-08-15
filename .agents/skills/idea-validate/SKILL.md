---
name: idea-validate
description: Build an evidence dossier for one candidate idea from the pipeline. Use when the user wants to validate a scouted candidate — digs deep across free sources, includes a manual Google Keyword Planner checkpoint, grades six signals strong/weak/unknown with real evidence only, assigns a confidence grade, and triggers a comparison brief once three or more ideas are validated.
---

# Idea Validate

One run = one idea = one session. The run ends with a six-signal **dossier** on disk, the idea's `Status:` advanced (or side-exited), a validate run log, and — when ≥3 ideas in the niche are `validated` — a **comparison brief** for the human to pick from.

**Target market is US by default** unless `pipeline/<niche>/niche.md` records an override.

## Hard rules

- **Never invent numbers.** No estimated search volume, CPC, difficulty, traffic, or revenue figures — ever. Numbers **read directly from an artifact on disk or a fetched page** (e.g. Keyword Planner buckets, bid columns, an exchange rate) may be quoted verbatim with their source; derived arithmetic (currency conversion, bucket sums) must show its inputs. `unknown` stays a first-class value.
- **Real evidence only.** Every quote from a page actually fetched this run, with its URL. A grade without at least one link/quote beside it is **invalid** — the dossier template forces evidence next to every grade.
- **No numeric scores, ever.** Grades are strong/weak/unknown; confidence is high/medium/low; the agent's read in a comparison brief is labelled opinion, never a score.
- **No paid SEO tools or APIs.** Same source catalog and access ladders as `idea-scout`; reuse its helper scripts (`scripts/fanout.*`, `scripts/pain-fetch.*`). The one paid-account artifact allowed is the **manual Keyword Planner CSV export** the human produces at the checkpoint below.
- **MCP tools are optional.** If the Fetch or Brave Search MCP servers are available (config in `.vscode/mcp.json`), use them for source-gathering; if the Playwright MCP is available, use it for the SERP/competitor deep-dive. Absence degrades gracefully to the helper scripts and built-in fetch/search tools — no prescribed fallback order.
- **Do not pick a winner.** Picking is a human checkpoint; this skill only presents.

## Run inputs

1. **Idea** — if the user names one, use it. Otherwise open `pipeline/board.md` and propose the `candidate` ideas available; the user picks one. One idea per run, no exceptions.
2. **Context** — read the idea's `idea.md`, its origin scout run log (one hop via `Origin:`), and `niche.md`. Prior scout evidence seeds the dig but does **not** count as this run's evidence unless re-verified (link still live, still says what it said).
3. **Prior dead ends** — if a `dossier.md` already exists (re-validation), read its Risks & unknowns and Sources log so searches aren't repeated.
4. **Keyword Planner artifacts** — check for `keyword-planner.csv` and `keywords-request.md` in the idea's folder. If the idea is `parked` waiting on Planner data and the CSV now exists, this run is a **cheap top-up**: ingest the CSV, upgrade Demand/Monetization and confidence, and flip the status — no full re-dig needed.

## The six signals

Grade each **strong / weak / unknown**, per the rubric:

1. **Demand** — do people have this problem, repeatedly? Problem recurrence + query breadth.
2. **SERP & competitor weakness** — how beatable are current results?
3. **Hook depth** — evidence-level re-check of scout gate 4: does the evidence show the hook actually matters to users?
4. **Monetization paths** — plausible AdSense/affiliate/other routes.
5. **Feasibility & maintenance** — evidence-level re-check of scout gates 2–3: build complexity + refresh burden, verified against the real data sources.
6. **Unique-data opportunity** — can we get/derive data competitors don't have?

### Grading rules

- **Strong** — ≥2 **independent** pieces of real evidence pointing the same way. Independent = different site, or different community/thread on the same site; two quotes from one thread = one piece. The Keyword Planner CSV counts as **one independent evidence piece** (per the rules below), never an automatic grade-setter.
- **Weak** — evidence exists but is thin, old (>~2 years, uncorroborated by anything recent), or contradicted by other evidence.
- **Unknown** — no real evidence found. Record **what was searched** so a later pass doesn't repeat it.
- Every grade carries a **one-line why** plus its evidence, in this exact shape:

  ```markdown
  **Demand: strong** — same complaint recurs across 3 forums over 18 months.
    - "quote..." (link)
    - "quote..." (link)
  ```

  For unknown, the "why" is what was searched and came up empty.

### Keyword Planner data in the rubric

When `keyword-planner.csv` exists, it feeds two signals:

- **Demand** — gated by the export's volume buckets (values are order-of-magnitude buckets like `500.0`, `5000.0`, not exact counts):
  - Core keyword group summing to the **5K bucket or higher** → counts toward *strong* (still needs one more independent piece, e.g. pain-source recurrence or Trends corroboration).
  - **500 bucket** → supports at most *weak* on its own; corroborates strong only alongside two other pieces.
  - **≤50 bucket / keywords absent from the export** → no support; Demand falls back to the base rules.
  - A **falling YoY trend** in the CSV counts as contradicting evidence (downgrades to weak per the base rules).
- **Monetization** — judge on the **top-of-page LOW bid**, converted to USD-equivalent using a **current exchange rate fetched from the web** (bids are in the account's currency — note the conversion in the dossier, quote raw figures verbatim):
  - **≥ ~$0.50 USD-equiv** → one evidence piece toward *strong* (still pair with visible ads/affiliate programs on competitor sites).
  - **$0.10–0.50** → supports *weak*.
  - **< $0.10 or blank** → no support.
  - The Competition column is context only, not a grade input.

The AdSense ≈ 25–40%-of-advertiser-CPC heuristic may be mentioned *as a heuristic* but never used to output a revenue number.

**CSV format note:** the export is UTF-16LE with BOM and **tab-separated** despite the `.csv` extension; header is row 3 (two preamble rows), followed by two aggregate segmentation rows before the keywords. Zero-volume keywords have empty metric cells, not zeros. Don't read the raw file — run `python3 scripts/planner-report.py <path-to-keyword-planner.csv>` to get a normalized table (per-keyword buckets, trends, competition, bids in account currency; zero-volume keywords listed separately). USD bid conversion stays your job per the rubric.

### Confidence grade (whole dossier)

*"How much digging backs this dossier up?"* — confidence in the evidence, not a verdict on the idea. A bad idea can have a high-confidence dossier.

- **High** — no signal unknown; demand and SERP-weakness each graded from ≥2 independent sources.
- **Medium** — one or two unknowns, but demand itself is evidenced.
- **Low** — demand is weak/unknown, or ≥3 signals unknown.

A dossier **cannot be high confidence without the Keyword Planner CSV** — its absence caps confidence at *medium*, including on re-validations and explicit waivers.

## Dig process

Work signal by signal, demand first — if demand comes out weak/unknown after a genuine dig, grade the remaining signals from what's already in hand rather than digging deep on a dead idea, and say so in the run log.

1. **Demand** — fresh autocomplete fan-out on the idea's core queries; pain-source dig (same catalog + access ladders as scout, including Reddit's ladder) hunting recurrence across independent communities. Then run the **Keyword Planner checkpoint** (below).
2. **SERP & competitor weakness** — fetch actual top results for 2–3 key queries (DDG); open the top contenders (Playwright MCP if available); note staleness, thin content, missing hook coverage. This feeds the SERP snapshot verbatim.
3. **Hook depth** — search for the hook's differentiator specifically: do complaints/requests mention it, or is it our invention?
4. **Monetization** — look for existing ads/affiliate programs on competitor sites in the space; identify the likeliest route and where it'd sit on our site.
5. **Feasibility & maintenance** — locate the actual data source(s) the site would need; verify licence/access/refresh cadence against the ~quarterly bar.
6. **Unique data** — check public datasets, combinable sources, or derivable structure competitors lack.

Log every source consulted — **including dead ends** — as you go; they become the Sources log.

### Keyword Planner checkpoint (after demand pass 1)

Google Keyword Planner can't be automated here — the human runs the export manually. The checkpoint sits **after** the autocomplete fan-out + pain dig, so the keyword list is built from real query variants, not just `idea.md` seeds.

1. **Existing CSV**: if `keyword-planner.csv` already exists and is fresh, use it silently — no interruption. Freshness is a **soft ~6-month window**: an older CSV is still used but flagged stale in the dossier with a refresh suggestion; it never re-parks the idea. If `keywords-request.md` gained keywords since the export, note the gap rather than park.
2. **No CSV**: write `pipeline/<niche>/ideas/<idea-slug>/keywords-request.md` with **~15–25 keywords, grouped** (head / variants / hook-specific / monetization-CPC) so CSV rows map back to the signal they inform. Then **finish the full dig anyway**: grade all six signals, write the complete dossier (confidence capped at medium), and park at the end of the run — parking is a state, not an abort.
3. **Human's side**: run "Get search volume and forecasts" on the requested keywords in Keyword Planner and download the historical-metrics export to `pipeline/<niche>/ideas/<idea-slug>/keyword-planner.csv`. Optional extras worth suggesting when relevant: competitor-website keyword discovery, the forecast-tab impressions trick.

## Outputs

### Dossier — `pipeline/<niche>/ideas/<idea-slug>/dossier.md`

```markdown
# Dossier: <Idea name>

<!-- 1. Verdict line -->
**<one sentence: idea, hook, confidence grade.>**

## Signal scorecard

<six signals, each in the grade-shape above: grade + one-line why + evidence>

## SERP snapshot

<actual top results for 2–3 key queries, fetched this run, and why they're beatable (or not)>

## Keyword data

<Keyword Planner readout when the CSV exists: bucket totals per keyword group, top-of-page low bids with the USD conversion rate + source, YoY trend flags, and a staleness flag if the export is >~6 months old. If no CSV: "awaiting Keyword Planner export — see keywords-request.md">

## Monetization sketch

<likeliest route and where it'd sit on the site>

## Risks & unknowns

<everything graded unknown, plus what was searched and came up empty>

## Sources log

<every source consulted this run, including dead ends>
```

### Run log — `pipeline/<niche>/runs/<YYYY-MM-DD>-validate-<idea>.md`

What was dug, dead ends, inconclusive leads, and any early-stop decision.

### State change — `idea.md`

Advance the canonical `Status:` line and append to History with a dated reason:

- **`validated`** — the dossier is complete and demand isn't graded unknown at low confidence.
- **`rejected`** — the dig disproved a scout gate (e.g. data source turns out paid/unmaintainable) or demand collapsed. Rejection reason goes in History; the dossier is kept as the record.
- **`parked`** — evidence inconclusive and further digging needs something not available this run (e.g. credentials, a manual checkpoint). Say what would unpark it. For the missing-CSV case, use this exact History wording:

  ```
  <date> — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate.
  ```

  and end the run with: *"Parked — export Keyword Planner data for the keywords in `keywords-request.md` to `keyword-planner.csv`, then re-run validate on this idea to finish."*

Then regenerate `pipeline/board.md` (derived view; `Status:` lines are canonical).

## Comparison brief trigger

After the state change, count ideas with `Status: validated` in this niche — **parked ideas never count**; only a CSV-backed run can flip an idea to `validated`. **If ≥3**, write `pipeline/<niche>/comparison-<YYYY-MM-DD>.md` from the comparison-brief template (see `comparison-brief-template.md`), linking every validated dossier — including ones validated in earlier runs. If a brief already exists for this batch, regenerate it rather than adding a second.

## End of run

Stop after the dossier, state change, board, and (if triggered) the brief. **Do not pick.** Do not start a PRD — that's `/to-spec`, after the human picks.
