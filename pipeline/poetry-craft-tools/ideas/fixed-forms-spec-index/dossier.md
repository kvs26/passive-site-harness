# Dossier: Fixed-forms spec index

**A constraint-filterable reference of fixed poetic forms (rules + one verified public-domain example + blank template per form) — rejected: the differentiator (group/filter by constraint + verified PD example + write-it-yourself template) is served by a fresh purpose-built incumbent, storgy.com/forms. Confidence medium (no CSV — not needed for the kill).**

## Signal scorecard

**Demand: strong** — a general "forms reference + template" need recurs across broad autocomplete and r/Poetry help threads (note: this is demand for *a forms reference*, not for the filter-by-constraint hook specifically — see Hook depth).
  - Autocomplete breadth (Google suggest, hl=en gl=us, this run): "poetic forms list", "poetic forms examples", "poetic forms pdf", "poetic forms to try", "poetic forms with repeating lines", "types of poems based on number of lines", "list of 168 poetic forms". (`scripts/fanout.py`)
  - Template demand (same run): "poem template free", "poem template canva", "poem template maker", "poem template generator", "villanelle template", "villanelle structure template".
  - Recurring r/Poetry help threads: "How to choose a poetic form? [OPINION]" (https://www.reddit.com/r/Poetry/comments/14s1xa6/how_to_choose_a_poetic_form_opinion/); "[HELP] Good beginner formats/styles" (https://www.reddit.com/r/Poetry/comments/143n8jk/help_good_beginner_formatsstyles/); "[Discussion] Do you find that you stick to a particular poetic [form]" — commenter: "I've been searching for one to try some out but can't find a good list" (https://www.reddit.com/r/Poetry/comments/8h8shq/discussion_do_you_find_that_you_stick_to_a/); "[Help] I have no idea about how to structure my poem" (https://www.reddit.com/r/Poetry/comments/7lb0h8/help_i_have_no_idea_about_how_to_structure_my_poem/).

**SERP & competitor weakness: weak** — the "forms reference" SERP is saturated by fresh, comprehensive incumbents, including one purpose-built to the idea's exact spec.
  - storgy.com/forms/ — "A working taxonomy of **38 poetic forms** … grouped by their **governing constraints**" (Strict closed forms = "meter, rhyme scheme, syllable count, line repetition"; Modern & open; Traditional storytelling; Base architecture), each entry's spec inline ("Cinquain — Five lines, 2-4-6-8-2 syllables"; "Villanelle — 19 lines, two refrains rotating across 5 tercets and a quatrain"), "definition, history, and famous examples" from a "public-domain corpus, sourced from Project Gutenberg and Wikidata … nothing under copyright; nothing scraped without provenance", plus per-form checkers (Sonnet/Haiku/Limerick Checker). © 2026. (https://storgy.com/forms/)
  - poemsteric.com "Poetry Forms: The Complete Guide With Examples & Templates" (dated July 29, 2026) — ships a "comparison table [that] lets you match **rhyme scheme, line count, and difficulty** in seconds" (Form / Line Count / Rhyme Scheme / Difficulty for sonnet, haiku, villanelle, sestina, limerick, ballad), per-form rules, a "How to Choose the Right Poetry Form for Your Message" section, examples + templates. (https://poemsteric.com/poetry-forms/)
  - writersdigest.com "List of 168 Poetic Forms for Poets" — "Each listing links to a more comprehensive description of the form along with an example poem using the form." (https://www.writersdigest.com/write-better-poetry/list-of-50-poetic-forms-for-poets)
  - familyfriendpoems.com "15 Common Poetry Forms — Examples, PDF Templates" (https://www.familyfriendpoems.com/poem/article-poetic-forms); Poetry Foundation curated "Poetry and Form" collection (definitions, examples, prompts, https://www.poetryfoundation.org/collections/159875/poetry-and-form).

**Hook depth: weak** — the filter/group-by-constraint differentiator is both occupied and thinly wanted.
  - Occupied: storgy already groups its registry by "governing constraints" (meter/rhyme/syllable/line-repetition) and poemsteric already tabulates line-count + rhyme + difficulty (links above).
  - Thin demand: the specific constraint phrasings are largely crossword-clue traffic, not writer traffic — "syllabic poetry form crossword clue", "syllable poetic form 5 letters", "poem with a refrain crossword clue" (autocomplete, this run). Genuine writer intent is emotion/message-driven ("How to choose a poetic form?" answers say it's "an aesthetic choice" that "comes naturally"), which incumbents answer with "how to choose by message" sections, not a constraint filter.
  - No interactive constraint-filter tool exists, but the adjacent demand it would catch is quiz/random-shaped, not filter-shaped: gorhyme "Poetry Spin Wheel: Random Poetry Form Generator" (https://gorhyme.com/poetry-spin-wheel/), tryinteract/proprofs "which poetic form" quizzes.

**Monetization: weak** — poetry/education display AdSense skews low-value; competitors monetize via display ads (poemfolio free-tools hub, familyfriendpoems) and, for storgy, a paid subscription tier (storgy.com/pricing). No CPC read (no Keyword Planner CSV this run). Affiliate routes (writing courses/books, e.g. BBC Maestro) are thin and indirect.

**Feasibility & maintenance: strong** — fixed-form definitions are stable common knowledge; public-domain examples are stable and already demonstrably sourceable (storgy pulls its corpus from Project Gutenberg + Wikidata with provenance). A static form dataset + client-side filter + copy templates has near-zero refresh burden. Re-confirms scout gates 2–3.

**Unique-data opportunity: weak** — structured form metadata (line count / rhyme scheme / meter / refrain flags) paired with a verified PD example is not proprietary or defensible: storgy has already built exactly this (38 forms, constraint-grouped, PD examples with provenance), poemsteric tabulated the core six, and Writer's Digest lists 168 forms each with an example. Nothing here competitors lack.

## SERP snapshot

- **"list of poetic forms" / "poetic forms with templates" (DDG, this run):** Writer's Digest "List of 168 Poetic Forms" (each form → description + example poem), poemsteric "Complete Guide With Examples & Templates" (comparison table + templates), familyfriendpoems "15 Common Poetry Forms — Examples, PDF Templates", Poetry Foundation "Poetry and Form", Scholastic "Annotated List of Poetry Forms" (PDF), weareteachers "25 Types of Poetry … Free Printables", BBC Maestro "18 poetic forms". Head is owned by list+example+template pages, several refreshed in 2026. Not beatable with another list.
- **"poetry form finder / filter by line count / which form should I write" (DDG, this run):** no constraint-filter tool; results are the storgy forms taxonomy (constraint-grouped index + PD examples), a random "Poetry Spin Wheel", and "which poet are you"-style quizzes — i.e. the discovery intent is already met by a grouped index or a gamified picker, not an unmet filtering need.

## Keyword data

No Keyword Planner CSV this run — not required, since the idea is rejected on a disproved scout gate (gate 4) rather than on demand sizing. A `keywords-request.md` was **not** written because the kill does not hinge on volume/CPC.

## Monetization sketch

Likeliest route would be display AdSense on form pages plus template downloads, with soft affiliate links to writing courses/poetry books. It would sit on individual form/spec pages. Graded weak: low-value education vertical, and the traffic-earning head pages are already held by incumbents that monetize the same way (or via subscription, in storgy's case).

## Risks & unknowns

- **Volume/CPC: unknown** — no CSV; searched autocomplete + SERP only. Not blocking the kill.
- **Interactive multi-attribute filter** (e.g. "short syllabic forms with a refrain") is the one genuinely unserved sliver, but demand for that exact interaction is unproven (crossword-clue noise dominates the constraint phrasings; adjacent intent is quiz/random-shaped). Not enough to revive the idea.

## Sources log

- `scripts/fanout.py` autocomplete (Google suggest, hl=en gl=us), this run — seeds: "poetic forms", "types of poems", "poem forms", "list of poetic forms", "short poetic forms", "poems with a refrain", "syllabic poetry forms", "poetic forms with repeating lines", "poem template", "villanelle template", "poetic form 4 lines", "poem with a certain number of lines", "which poetic form should i use", "easy poetic forms".
- storgy.com/forms/ — "The architecture of verse" 38-form constraint-grouped registry + PD examples (Gutenberg/Wikidata) + per-form checkers (fetched this run). **Decisive incumbent.**
- poemsteric.com/poetry-forms/ — "Complete Guide With Examples & Templates", comparison table + how-to-choose (dated 2026-07-29, fetched this run).
- writersdigest.com list-of-168-poetic-forms (SERP result, this run) — 168 forms, each with description + example poem.
- familyfriendpoems.com/poem/article-poetic-forms; poetryfoundation.org/collections/159875/poetry-and-form; scholastic Annotated List of Poetry Forms (PDF); weareteachers.com/types-of-poetry; bbcmaestro.com/blog/poetic-forms (SERP results, this run).
- r/Poetry threads (DDG, this run): 14s1xa6 (how to choose a form), 143n8jk (beginner formats), 8h8shq ("can't find a good list to try"), 7lb0h8 (how to structure my poem), 311mqs, clqyue, 1pwi31.
- Dead ends: no interactive "poetry form finder / filter by constraint" tool exists (DDG) — closest are gorhyme Poetry Spin Wheel (random) and tryinteract/proprofs "which form" quizzes; constraint autocomplete phrasings ("syllabic poetry form", "poem with a refrain") returned mostly crossword-clue variants.
- writersdigest.com direct fetch redirected to a doubleclick ad-tracking URL (page shell not readable); title/snippet read from the SERP instead.
