---
name: idea-validate
description: Build an evidence dossier for one candidate idea from the pipeline. Use when the user wants to validate a scouted candidate — digs deep across free sources, grades six signals strong/weak/unknown with real evidence only, assigns a confidence grade, and triggers a comparison brief once three or more ideas are validated.
---

<!-- PROTOTYPE DRAFT — asset for wayfinder ticket 06. React, don't ship. -->

# Idea Validate

One run = one idea = one session. The run ends with a six-signal **dossier** on disk, the idea's `Status:` advanced (or side-exited), a validate run log, and — when ≥3 ideas in the niche are `validated` — a **comparison brief** for the human to pick from.

**Target market is US by default** unless `pipeline/<niche>/niche.md` records an override.

## Hard rules

- **Never invent numbers.** No search volume, CPC, difficulty, traffic, or revenue figures — ever. `unknown` is a first-class value.
- **Real evidence only.** Every quote from a page actually fetched this run, with its URL. A grade without at least one link/quote beside it is **invalid** — the dossier template forces evidence next to every grade.
- **No numeric scores, ever.** Grades are strong/weak/unknown; confidence is high/medium/low; the agent's read in a comparison brief is labelled opinion, never a score.
- **No paid SEO tools or APIs.** Same source catalog and access ladders as `idea-scout`; reuse its helper scripts (`scripts/fanout.*`, `scripts/pain-fetch.*`).
- **Do not pick a winner.** Picking is a human checkpoint; this skill only presents.

## Run inputs

1. **Idea** — if the user names one, use it. Otherwise open `pipeline/board.md` and propose the `candidate` ideas available; the user picks one. One idea per run, no exceptions.
2. **Context** — read the idea's `idea.md`, its origin scout run log (one hop via `Origin:`), and `niche.md`. Prior scout evidence seeds the dig but does **not** count as this run's evidence unless re-verified (link still live, still says what it said).
3. **Prior dead ends** — if a `dossier.md` already exists (re-validation), read its Risks & unknowns and Sources log so searches aren't repeated.

## The six signals

Grade each **strong / weak / unknown**, per the rubric:

1. **Demand** — do people have this problem, repeatedly? Problem recurrence + query breadth.
2. **SERP & competitor weakness** — how beatable are current results?
3. **Hook depth** — evidence-level re-check of scout gate 4: does the evidence show the hook actually matters to users?
4. **Monetization paths** — plausible AdSense/affiliate/other routes.
5. **Feasibility & maintenance** — evidence-level re-check of scout gates 2–3: build complexity + refresh burden, verified against the real data sources.
6. **Unique-data opportunity** — can we get/derive data competitors don't have?

### Grading rules

- **Strong** — ≥2 **independent** pieces of real evidence pointing the same way. Independent = different site, or different community/thread on the same site; two quotes from one thread = one piece.
- **Weak** — evidence exists but is thin, old (>~2 years, uncorroborated by anything recent), or contradicted by other evidence.
- **Unknown** — no real evidence found. Record **what was searched** so a later pass doesn't repeat it.
- Every grade carries a **one-line why** plus its evidence, in this exact shape:

  ```markdown
  **Demand: strong** — same complaint recurs across 3 forums over 18 months.
    - "quote..." (link)
    - "quote..." (link)
  ```

  For unknown, the "why" is what was searched and came up empty.

### Confidence grade (whole dossier)

*"How much digging backs this dossier up?"* — confidence in the evidence, not a verdict on the idea. A bad idea can have a high-confidence dossier.

- **High** — no signal unknown; demand and SERP-weakness each graded from ≥2 independent sources.
- **Medium** — one or two unknowns, but demand itself is evidenced.
- **Low** — demand is weak/unknown, or ≥3 signals unknown.

## Dig process

Work signal by signal, demand first — if demand comes out weak/unknown after a genuine dig, grade the remaining signals from what's already in hand rather than digging deep on a dead idea, and say so in the run log.

1. **Demand** — fresh autocomplete fan-out on the idea's core queries; pain-source dig (same catalog + access ladders as scout, including Reddit's ladder) hunting recurrence across independent communities.
2. **SERP & competitor weakness** — fetch actual top results for 2–3 key queries (DDG); open the top contenders; note staleness, thin content, missing hook coverage. This feeds the SERP snapshot verbatim.
3. **Hook depth** — search for the hook's differentiator specifically: do complaints/requests mention it, or is it our invention?
4. **Monetization** — look for existing ads/affiliate programs on competitor sites in the space; identify the likeliest route and where it'd sit on our site.
5. **Feasibility & maintenance** — locate the actual data source(s) the site would need; verify licence/access/refresh cadence against the ~quarterly bar.
6. **Unique data** — check public datasets, combinable sources, or derivable structure competitors lack.

Log every source consulted — **including dead ends** — as you go; they become the Sources log.

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
- **`parked`** — evidence inconclusive and further digging needs something not available this run (e.g. credentials, a manual checkpoint). Say what would unpark it.

Then regenerate `pipeline/board.md` (derived view; `Status:` lines are canonical).

## Comparison brief trigger

After the state change, count ideas with `Status: validated` in this niche. **If ≥3**, write `pipeline/<niche>/comparison-<YYYY-MM-DD>.md` from the comparison-brief template (see `comparison-brief-template.md`), linking every validated dossier — including ones validated in earlier runs. If a brief already exists for this batch, regenerate it rather than adding a second.

## End of run

Stop after the dossier, state change, board, and (if triggered) the brief. **Do not pick.** Do not start a PRD — that's `/to-spec`, after the human picks.
