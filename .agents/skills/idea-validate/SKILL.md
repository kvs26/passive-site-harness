---
name: idea-validate
description: Build an evidence dossier for one candidate idea from the pipeline. Use when the user wants to validate a scouted candidate — digs deep across free sources, re-probes incumbents and AI Overviews at validate depth, includes a manual Google Keyword Planner checkpoint, grades six signals strong/weak/unknown with real evidence only, runs a traffic sanity-check against the viability bar, assigns a confidence grade, and triggers a comparison brief once three or more ideas are validated.
---

# Idea Validate

One run = one idea = one session. The run ends with a six-signal **dossier** on disk, the idea's `Status:` advanced (or side-exited), a validate run log, and — when ≥3 ideas in the niche are `validated` — a **comparison brief** for the human to pick from.

**Validate is the throttle.** Scout runs ahead freely; a `validated` idea's SERP evidence **expires 4 weeks after the run date**, and a pre-build re-probe is mandatory regardless of age. Only validate an idea when prepared to build within that window — don't stockpile validated dossiers.

**Target market is US by default** unless `pipeline/<niche>/niche.md` records an override.

## Hard rules

- **Never invent numbers.** No estimated search volume, CPC, difficulty, traffic, or revenue figures — ever. Numbers **read directly from an artifact on disk or a fetched page** (e.g. Keyword Planner buckets, bid columns, an exchange rate) may be quoted verbatim with their source; derived arithmetic (currency conversion, bucket sums) must show its inputs. `unknown` stays a first-class value.
- **Real evidence only.** Every quote from a page actually fetched this run, with its URL. A grade without at least one link/quote beside it is **invalid** — the dossier template forces evidence next to every grade.
- **Rejection is factual disproof only.** An idea is `rejected` only when the dig **factually disproves a scout gate** (purpose-built incumbent found and opened, data source paid/unlicensed, upkeep over cap, AIO fully answers the head queries, no monetization route survives). **Weak grades alone never reject** — a weak-but-undisproven idea stays `validated` or `parked` with its weaknesses on record.
- **Evidence is dated and rots.** Date every SERP/AIO observation in the dossier. The dossier's SERP evidence expires 4 weeks from the run date; the expiry date is written into the dossier and the `validated` History line.
- **No numeric scores, ever.** Grades are strong/weak/unknown; confidence is high/medium/low; the agent's read in a comparison brief is labelled opinion, never a score.
- **No paid SEO tools or APIs.** Same source catalog and access ladders as `idea-scout`; reuse its helper scripts (`scripts/fanout.*`, `scripts/pain-fetch.*`). The one paid-account artifact allowed is the **manual Keyword Planner CSV export** the human produces at the checkpoint below.
- **MCP tools are optional.** If the Fetch or Brave Search MCP servers are available (config in `.vscode/mcp.json`), use them for source-gathering; if the Playwright MCP is available, use it for the SERP/competitor deep-dive. Absence degrades gracefully to the helper scripts and built-in fetch/search tools — no prescribed fallback order.
- **Do not pick a winner.** Picking is a human checkpoint; this skill only presents.

## Run inputs

1. **Idea** — if the user names one, use it. Otherwise open `pipeline/board.md` and propose the `candidate` ideas available; the user picks one. One idea per run, no exceptions. Before starting, remind the user of the throttle rule: validating now starts the 4-week evidence clock.
2. **Context** — read the idea's `idea.md` (including its **Edge** block — the four parts validate re-checks at evidence level), its origin scout run log (one hop via `Origin:`), and `niche.md`. Prior scout evidence seeds the dig but does **not** count as this run's evidence unless re-verified (link still live, still says what it said).
3. **Prior dead ends** — if a `dossier.md` already exists (re-validation), read its Risks & unknowns and Sources log so searches aren't repeated.
4. **Keyword Planner artifacts** — check for `keyword-planner.csv` and `keywords-request.md` in the idea's folder. If the idea is `parked` waiting on Planner data and the CSV now exists, this run is a **cheap top-up**: ingest the CSV, upgrade Demand/Monetization and confidence, and flip the status — no full re-dig needed. The 4-week expiry clock still restarts only if the SERP/AIO evidence is re-probed; otherwise the original expiry date stands.

## The six signals

The six signals are the evidence-level re-check of scout's seven gates and the four-part edge: Demand (1), AIO + incumbents (2), hook (3 ↔ gate 4), monetization (4 ↔ gate 7), sustainability (5 ↔ gates 2–3a), moat + long-tail surface (6 ↔ gate 3b, edge parts 1+3).

Grade each **strong / weak / unknown**, per the rubric:

1. **Demand** — do people have this problem, repeatedly? Problem recurrence + query breadth. Feeds the traffic sanity-check below.
2. **SERP, AIO & competitor weakness** — how beatable are current results, and does an AI Overview already answer the head queries? Includes the **AIO re-probe** (dig step 2): a head-query set fully answered by AIO with no per-query-compute wedge past it is a kill-level finding (disproves scout gate 1).
3. **Hook depth** — evidence-level re-check of scout gate 4: does the evidence show the hook actually matters to users, and is the incumbent gap still open *this run*?
4. **Monetization** — evidence-level re-check of scout gate 7, graded by route. **Affiliate-route:** fetch the program's terms page; quote rate/cookie verbatim; confirm the tool's actual outputs are linkable products. Planner bids are supporting-only — low bids never downgrade an affiliate-route idea. **High-RPM-route:** requires the Keyword Planner CSV; top-of-page LOW bid **≥ ~$1.00 USD-equiv** on head terms = one evidence piece toward strong (currency conversion shown, raw figures verbatim). **Strong** = route facts verified at evidence level; **weak** = program exists but fit is partial (some outputs unlinkable, bids near the bar); kill-level finding = neither route survives evidence contact.
5. **Feasibility & sustainable upkeep** — evidence-level re-check of scout gates 2–3: static-build feasibility, plus a **realistic steady-state upkeep estimate** (hrs/week) built from the real data sources — what changes, how often, how it's detected, minutes per touch. **Strong** = sources located with licence/access confirmed AND estimate credibly ≤ ~3 hrs/week; **weak** = upkeep approaches the cap or source access is shaky; kill-level finding = no viable source, or estimate over cap.
6. **Data moat** — evidence-level re-check of the moat side of scout gate 3: verify against the actual sources **which replication barrier holds** — (a) merging/reconciling 2+ independent sources, (b) per-row hand-verification against a primary source, (c) per-row expert/editorial judgment — and that the dataset's structure yields a **long-tail page surface** (per-item/brand/model pages an incumbent single-pager can't match). **Strong** = a named barrier verified against real sources AND a credible long-tail surface; **weak** = barrier exists but is thin (one source, light verification) or surface is small; kill-level finding = dataset is mechanically replicable (fails a/b/c).

### Grading rules

- **Strong** — ≥2 **independent** pieces of real evidence pointing the same way. Independent = different site, or different community/thread on the same site; two quotes from one thread = one piece. The Keyword Planner CSV counts as **one independent evidence piece** (per the rules below), never an automatic grade-setter.
- **Weak** — evidence exists but is thin, old (>~2 years, uncorroborated by anything recent), or contradicted by other evidence.
- **Unknown** — no real evidence found. Record **what was searched** so a later pass doesn't repeat it.
- **Kill-level finding** — a fact that disproves a scout gate (signals 2–6 name theirs). Kill-level findings are what reject an idea; weak grades are not.
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
- **Monetization** — the bid bar **splits by route**:
  - **High-RPM-route ideas**: top-of-page LOW bid **≥ ~$1.00 USD-equiv** on head terms (converted using a current exchange rate fetched from the web; note the conversion, quote raw figures verbatim) → one evidence piece toward *strong*. Below the bar → supports *weak* at best. Expensive clicks are this route's premise, so the stiffer bar is the point.
  - **Affiliate-route ideas**: bids are **supporting-only** — a high bid is a bonus data point; **low or blank bids never downgrade** (advertisers underbid informational queries that still convert via 24-h-cookie affiliate links). The Monetization grade rides on program-fact verification instead.
  - The Competition column is context only, not a grade input.

The AdSense ≈ 25–40%-of-advertiser-CPC heuristic may be mentioned *as a heuristic* but never used to output a revenue number.

**CSV format note:** the export is UTF-16LE with BOM and **tab-separated** despite the `.csv` extension; header is row 3 (two preamble rows), followed by two aggregate segmentation rows before the keywords. Zero-volume keywords have empty metric cells, not zeros. Don't read the raw file — run `python3 scripts/planner-report.py <path-to-keyword-planner.csv>` to get a normalized table (per-keyword buckets, trends, competition, bids in account currency; zero-volume keywords listed separately). USD bid conversion stays your job per the rubric.

### Confidence grade (whole dossier)

*"How much digging backs this dossier up?"* — confidence in the evidence, not a verdict on the idea. A bad idea can have a high-confidence dossier.

- **High** — no signal unknown; demand and SERP/AIO-weakness each graded from ≥2 independent sources.
- **Medium** — one or two unknowns, but demand itself is evidenced.
- **Low** — demand is weak/unknown, or ≥3 signals unknown.

A dossier **cannot be high confidence without the Keyword Planner CSV** — its absence caps confidence at *medium*, including on re-validations, affiliate-route ideas, and explicit waivers.

## Dig process

Work signal by signal, demand first — if demand comes out weak/unknown after a genuine dig, grade the remaining signals from what's already in hand rather than digging deep on a dead idea, and say so in the run log.

1. **Demand** — fresh autocomplete fan-out on the idea's core queries; pain-source dig (same catalog + access ladders as scout, including Reddit's ladder) hunting recurrence across independent communities. **Go deep on the cheap, uncapped sources — don't run one query per source and move on.** Recurrence is the whole Demand grade, and *strong* needs ≥2 *independent* pieces, so exhaust the headroom: against `stackexchange` (10K/day with the key in `.env`), `hn`, `lemmy`, and `discourse`, run **every core query plus phrasing variants** ("is there a tool for X", "X vs Y", "how do you X", "X alternative", the niche's own jargon) across the relevant sub-sites, not a single generic query. Reserve the "stop after two sources add nothing new" rule for whole *sources*, never for abandoning a cheap source after one query. Ration only the throttled sources — treat `reddit`/`arcticshift` as 1–2 targeted queries, and lean on the uncapped ones for bulk. Then run the **Keyword Planner checkpoint** (below).
2. **SERP, AIO & competitor weakness** — two parts, both dated in the dossier:
   - **SERP dig:** fetch actual top results for 2–3 key queries (DDG); open the top contenders (Playwright MCP if available); note staleness, thin content, missing hook coverage. Open **every named incumbent** — an unopened incumbent is a scout defect; fix it here, not in a note.
   - **AIO re-probe:** DDG SERPs are structurally AIO-blind, so this is a manual checkpoint — the user loads google.com/search for **3–5 head queries**, recording per query: AIO present? Does it *fully answer* or hedge? Use `&udm=14` as the AIO-free control. Predict from query form first (question-word queries ≈58–86% AIO trigger rate; 1–2-word tool queries ≈9–10%; "X vs Y" ≈95%) so the user's checks target the risky queries. Scout's AIO probe seeds this but does not replace it — re-run at validate depth even if scout probed, and record what the *wedge past the AIO* is (the per-query compute a summary can't perform).
3. **Hook depth** — search for the hook's differentiator specifically: do complaints/requests mention it, or is it our invention?
4. **Monetization** — by the idea's route (from `idea.md`'s Edge block; verify the route claim rather than trusting it). **Affiliate-route:** fetch the named program's terms/rates page; quote rate and cookie window verbatim with URL; spot-check that the tool's actual outputs (the products/items it would surface) are linkable in the program's catalog. **High-RPM-route:** confirm the niche's ad-category mapping and lean on the Planner bid bar above. Both routes: note ads/affiliate links visible on competitor sites and where the route would sit on our site.
5. **Feasibility & sustainable upkeep** — locate the actual data source(s); verify licence/access; build the upkeep estimate bottom-up (change frequency × touch time, + quarterly affiliate-link check). Judge against the ~3 hrs/week per-site cap — high-touch is *fine* if each touch is small and the total fits.
6. **Data moat** — inspect the actual sources: which replication barrier (merge / hand-verify / judgment) holds in practice, and what per-item/brand/model page set the dataset's structure yields. One inspection feeds both halves of the grade.

Then run the **traffic sanity-check** (below) before writing the dossier.

Log every source consulted — **including dead ends** — as you go; they become the Sources log.

### Keyword Planner checkpoint (after demand pass 1)

Google Keyword Planner can't be automated here — the human runs the export manually. The checkpoint sits **after** the autocomplete fan-out + pain dig, so the keyword list is built from real query variants, not just `idea.md` seeds.

1. **Existing CSV**: if `keyword-planner.csv` already exists and is fresh, use it silently — no interruption. Freshness is a **soft ~6-month window**: an older CSV is still used but flagged stale in the dossier with a refresh suggestion; it never re-parks the idea. If `keywords-request.md` gained keywords since the export, note the gap rather than park.
2. **No CSV**: write `pipeline/<niche>/ideas/<idea-slug>/keywords-request.md` with **~15–25 keywords, grouped** (head / variants / hook-specific / monetization-CPC) so CSV rows map back to the signal they inform. Then **finish the full dig anyway**: grade all six signals, write the complete dossier (confidence capped at medium), and park at the end of the run — parking is a state, not an abort.
3. **Human's side**: run "Get search volume and forecasts" on the requested keywords in Keyword Planner and download the historical-metrics export to `pipeline/<niche>/ideas/<idea-slug>/keyword-planner.csv`. Optional extras worth suggesting when relevant: competitor-website keyword discovery, the forecast-tab impressions trick.

### Traffic sanity-check (after the dig, before the dossier)

The viability bar is **$100/mo per site within 9–12 months of launch** ($300/mo is a portfolio outcome, never a per-site gate). Judge — as labelled opinion, not a number — whether the demand evidence plausibly clears the visitors the bar implies. Reference figures (ticket-03 earnings research, 2026 sources; quote, don't recompute):

- **Blended (ads + affiliate), $100/mo:** ≈ 4,300–11,500 visitors/mo.
- **Ads-only, $100/mo:** ≈ 43K pv/mo at pets/reference-class RPM (~$2.33) vs ≈ 7.5K pv/mo at Home & Garden-class RPM (~$13.33).

The check is directional: a 500-bucket keyword universe with no long-tail surface plausibly cannot reach 4K+ monthly visitors; a 5K+ bucket head term plus a multi-hundred-page long-tail surface plausibly can. Write the reasoning in the dossier's Traffic sanity-check section. A failed sanity-check is **not** a kill-level finding on its own — it feeds the verdict line and the comparison brief as opinion.

## Outputs

### Dossier — `pipeline/<niche>/ideas/<idea-slug>/dossier.md`

```markdown
# Dossier: <Idea name>

<!-- 1. Verdict line -->
**<one sentence: idea, hook, confidence grade.>**

**Evidence dated <YYYY-MM-DD> — SERP/AIO evidence expires <YYYY-MM-DD (+4 weeks)>. Pre-build re-probe mandatory regardless.**

## Signal scorecard

<six signals, each in the grade-shape above: grade + one-line why + evidence>

## SERP & AIO snapshot

<dated. Actual top results for 2–3 key queries fetched this run and why they're beatable (or not); per head query: AIO present, full-answer vs hedge, the &udm=14 control, and the per-query-compute wedge past it>

## Keyword data

<Keyword Planner readout when the CSV exists: bucket totals per keyword group, top-of-page low bids with the USD conversion rate + source, YoY trend flags, and a staleness flag if the export is >~6 months old. If no CSV: "awaiting Keyword Planner export — see keywords-request.md">

## Monetization sketch

<the route (affiliate / high-RPM) with its verified facts — program name, rate, cookie window quoted verbatim, or ad category + bid evidence — and where it'd sit on the site>

## Digital products (documented, off by default)

<any printable/PDF/download product this idea could sell (Gumroad-style checkout), documented for the record. Products ship OFF — enabling checkout is a manual per-site act by the human, never part of a build. "None apparent" is a fine entry.>

## Traffic sanity-check

<the directional judgment from the sanity-check step: visitors the bar implies (figures quoted from the reference table), what the demand evidence supports, and the reasoning. Labelled opinion.>

## Risks & unknowns

<everything graded unknown, plus what was searched and came up empty>

## Sources log

<every source consulted this run, including dead ends>
```

### Run log — `pipeline/<niche>/runs/<YYYY-MM-DD>-validate-<idea>.md`

What was dug, dead ends, inconclusive leads, and any early-stop decision.

### State change — `idea.md`

Advance the canonical `Status:` line and append to History with a dated reason:

- **`validated`** — the dossier is complete, no kill-level finding, and demand isn't graded unknown at low confidence. The History line records the expiry:

  ```
  <date> — validated (confidence: <grade>). SERP/AIO evidence expires <date+4wk>; pre-build re-probe mandatory.
  ```

- **`rejected`** — a **kill-level finding**: the dig factually disproved a scout gate (purpose-built incumbent, AIO fully answers with no wedge, data source paid/unmaintainable, upkeep over cap, moat mechanically replicable, no monetization route). The disproven gate and the fact go in History; the dossier is kept as the record. **Weak grades alone never reject.**
- **`parked`** — evidence inconclusive and further digging needs something not available this run (e.g. credentials, a manual checkpoint). Say what would unpark it. For the missing-CSV case, use this exact History wording:

  ```
  <date> — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate.
  ```

  and end the run with: *"Parked — export Keyword Planner data for the keywords in `keywords-request.md` to `keyword-planner.csv`, then re-run validate on this idea to finish."*

Then regenerate `pipeline/board.md` (derived view; `Status:` lines are canonical).

## Comparison brief trigger

After the state change, count ideas with `Status: validated` in this niche — **parked ideas never count**; only a CSV-backed run can flip an idea to `validated`. **If ≥3**, write `pipeline/<niche>/comparison-<YYYY-MM-DD>.md` from the comparison-brief template (see `comparison-brief-template.md`), linking every validated dossier — including ones validated in earlier runs. If a brief already exists for this batch, regenerate it rather than adding a second. Flag any linked dossier whose evidence has passed its 4-week expiry.

## End of run

Stop after the dossier, state change, board, and (if triggered) the brief. **Do not pick.** Do not start a PRD — that's `/to-spec`, after the human picks. Remind the user: the evidence clock is running — a validated idea should enter build (with its mandatory pre-build re-probe) within 4 weeks, or expect to re-validate.
