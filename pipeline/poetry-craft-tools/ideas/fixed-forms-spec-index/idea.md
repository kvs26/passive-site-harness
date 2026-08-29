# Fixed-forms spec index

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

A filterable reference of fixed poetic forms: each form's rules (line count, rhyme scheme, meter, refrain/repetition pattern), plus one *verified* public-domain example and a blank fill-in template — filterable by constraint (syllabic vs metrical, needs-a-refrain, line count, stanza shape).

## Hook

Glossaries (poets.org, shadowpoetry) list forms alphabetically as prose; this lets a writer filter *by the constraint they want* ("give me short syllabic forms with a refrain") and get the spec + a real example + a ready template in one place.

## Gate results

- Answer-it: PASS — filtering ~100 forms by structural constraints isn't a single LLM answer.
- Static feasibility: PASS — static form dataset + client-side filter + templates.
- Unmaintainable data: PASS — fixed-form definitions are stable; example poems are public-domain.
- No specific hook: NEAR-MISS — must beat form glossaries (poets.org, shadowpoetry) and the new Form Atlas; edge is filter-by-constraint + verified example + copy template rather than a prose A–Z list or a live drafting guardrail. Marked weak.
- Legal/policy: PASS — public-domain examples; definitions are common knowledge.
- US-market: PASS — US poets/students.

## Evidence

- Demand for form structure (autocomplete, this run): "different sonnet structures"; villanelle/sestina structure queries dominate the form SERP (Bing, this run: "Villanelle Poem Structure/Format/Template", "villanelle structure checker to validate 19 lines").
- Incumbent shape (Bing, this run): "Form Atlas … live guardrails" and "Poem Form Identifier" serve *drafting/identifying*, not a constraint-filterable spec+example+template index; glossaries (poets.org, shadowpoetry) are prose lists.
- Volume/CPC: `unknown` (no Keyword Planner CSV this run).

## History

- 2026-08-29 — candidate (emitted by scout run), marked weak (gate-4 near-miss vs glossaries + Form Atlas)
- 2026-08-29 — rejected: gate 4 disproved on validation. The differentiator (forms grouped/filterable by constraint + one verified public-domain example + write-it-yourself template) is served by a fresh purpose-built incumbent — storgy.com/forms ("The architecture of verse": 38 forms grouped by governing constraint meter/rhyme/syllable/line-repetition, PD examples from Gutenberg+Wikidata with provenance, per-form checkers) — plus poemsteric.com's 2026-07-29 guide (comparison table matching line count+rhyme+difficulty + templates + how-to-choose) and Writer's Digest's 168-forms-with-examples list. Filter-by-constraint demand is also thin (crossword-clue noise). Confidence medium (no CSV — not needed for the kill). See [dossier](dossier.md) · [run](../../runs/2026-08-29-validate-fixed-forms-spec-index.md).
