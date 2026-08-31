# Poem-by-persona finder

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

An occasion-poem finder that matches on the *person*, not just the relationship: pick the deceased's (or couple's) hobbies, profession, personality traits, and tone (religious / non-religious, light / solemn, short) and get poems that actually fit — e.g. a gardener, a knitter, a pilot, a navy veteran.

## Hook

Relationship/occasion finders (griefandsympathy "By Relationship, Occasion & Style", familyfriendpoems) don't index by the deceased's hobby or personality, yet the proven long-tail is exactly that ("funeral poem for a knitter / keen gardener / pilot / navy veteran") — a persona→poem match is the unserved axis.

## Gate results

- Answer-it: PASS — matching a curated corpus across multiple persona facets is a browse/filter task, not a single answer.
- Static feasibility: PASS — static poem corpus + persona tags + client-side filter.
- Unmaintainable data: PASS — public-domain + free-to-use poems, tagged once.
- No specific hook: NEAR-MISS — must beat relationship-based finders and AI generators; edge is the hobby/profession/personality index. Marked weak.
- Legal/policy: PASS — use PD / free-to-use poems (overlaps reprint-clear idea).
- US-market: PASS — US funerals/weddings.

## Evidence

- Persona long-tail (autocomplete, this run): "funeral poem for a knitter", "…for a quilter", "…for a keen gardener", "…for a pilot", "…for a navy veteran", "…for an outdoorsman", "…for a rugby player"; tone qualifiers "non religious", "secular", "short".
- Incumbent shape (Bing, this run): griefandsympathy.com categorizes "By Relationship, Occasion & Style" — not by hobby/personality.
- Risk: AI generators (aipoemgenerator.co) now produce bespoke persona poems on demand — competitive pressure noted.
- Volume/CPC: `unknown` (no Keyword Planner CSV this run).

## History

- 2026-08-29 — candidate (emitted by scout run), marked weak (gate-4 near-miss + AI-generator pressure)
- 2026-08-29 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate. Dig read: demand strong (broad persona long-tail + supplier proliferation), feasibility strong, but hook weak/contradicted (markyouroccasion.com already runs a curated persona index; poemverse/ecopatchy AI farms saturate the long-tail), SERP-weakness/monetization/unique-data weak. See [dossier](dossier.md) · [run](../../runs/2026-08-29-validate-poem-by-persona-finder.md)
- 2026-09-01 — rejected on v3 re-triage (harness-v3 ticket 11): fails v3 gate 7 "No monetization fit" on both routes — (a) affiliate: poems aren't affiliate-linkable outputs via any named program; (b) high-RPM: poetry/Reference sits at the ~$2.33–2.67 low-RPM baseline. Ticket 07 of the v3 strategy effort ruled low-RPM pure-ads ideas dead, killing the occasion-poem niche. Hook was already weak/contradicted (markyouroccasion + AI farms). Structural kill — no re-probe needed.
