# Validate run — poetry-craft-tools — fixed-forms-spec-index — 2026-08-29

Idea: fixed-forms-spec-index (candidate, weak). Origin scout: `../runs/2026-08-29-scout.md`. Target market US.
Credentials: no `.env` → credential-free tools only. No `keyword-planner.csv` / `keywords-request.md` present (fresh validation).

## What was dug

1. **Demand — autocomplete fan-out** (`scripts/fanout.py`, hl=en gl=us): core form-reference + constraint + template seeds. Real breadth for the *forms reference/template* need ("poetic forms list/examples/pdf/to try", "list of 168 poetic forms", "poem template free/canva/maker", "villanelle template/structure", "types of poems based on number of lines", "poetic forms with repeating lines"). Caveat: the filter-by-constraint phrasings ("syllabic poetry form", "poems with a refrain") are mostly crossword-clue traffic, not writer traffic.
2. **Demand — pain**: r/Poetry help threads confirming a forms-discovery need — "How to choose a poetic form?" (14s1xa6), "[HELP] Good beginner formats/styles" (143n8jk), "can't find a good list to try some out" (8h8shq), "I have no idea how to structure my poem" (7lb0h8). But the answers in those threads frame form choice as an emotional/aesthetic decision ("comes naturally"), not a constraint-filter decision.
3. **SERP & competitor** (DDG): "list of poetic forms" / "…with templates" head is saturated by list+example+template incumbents; "poetry form finder / filter by constraint" returns no filter tool, only a grouped index (storgy) + a random spin wheel + quizzes.
4. **Hook depth**: opened the two decisive incumbents.

## Decisive finding (gate-4 kill)

- **storgy.com/forms/** ("The architecture of verse", © 2026) is a purpose-built match to the idea: **38 forms grouped by governing constraint** (meter / rhyme scheme / syllable count / line repetition), each with its spec inline, "definition, history, and famous examples" from a **public-domain corpus (Project Gutenberg + Wikidata, with provenance)**, plus a per-form write-it-yourself workbench with checkers. That covers all three legs the idea claimed — constraint grouping + verified PD example + template/guardrail.
- **poemsteric.com/poetry-forms/** (dated 2026-07-29) independently ships a comparison table matching **line count + rhyme scheme + difficulty**, per-form templates, and a "How to Choose the Right Poetry Form" section.
- Writer's Digest (168 forms, each with an example) + familyfriendpoems (examples + PDF templates) round out a crowded, fresh head.

The scout's gate-4 near-miss (differentiator = filter-by-constraint + verified example + template vs prose glossaries/Form Atlas) is therefore **disproved**: that exact differentiator is now served by a fresh purpose-built site.

## Dead ends / inconclusive

- No interactive multi-attribute filter ("short syllabic forms with a refrain") exists — the one unserved sliver — but demand for that specific interaction is unproven (crossword-clue noise; adjacent intent is quiz/random-shaped). Not enough to revive.
- writersdigest.com direct fetch redirected to a doubleclick tracking URL; used SERP title/snippet instead.
- Constraint-phrasing autocomplete polluted by crossword-clue results.

## Keyword Planner checkpoint

Skipped the request/park path: the idea is rejected on a disproved gate, not on demand sizing, so no CSV is needed for the kill (confidence capped at medium regardless).

## Outcome

**Rejected** — gate 4 disproved (hook occupied by storgy.com/forms + poemsteric comparison-table guide + Writer's Digest). Signals: Demand strong (general forms/template need), SERP-weakness weak, Hook depth weak, Monetization weak, Feasibility strong, Unique-data weak. Confidence medium (no CSV — not needed for the kill). Dossier kept as the record.
