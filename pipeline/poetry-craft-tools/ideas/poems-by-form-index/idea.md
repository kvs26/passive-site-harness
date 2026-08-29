# Poems-by-form index

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

A filterable, hand-verified study corpus of the public-domain poetry canon: pick a form (sonnet / villanelle / sestina / ghazal / ode…), meter (iambic pentameter / tetrameter…), rhyme scheme, length, or theme, and get *many* real, correctly-labeled example poems — not one poem at a time, not a 5-item listicle.

## Hook

Incumbents give you one poem per page (shmoop/litcharts) or a static "10 famous sonnets" listicle; nobody lets a student say "show me 30 verified villanelles" or "poems in iambic tetrameter" and browse the filtered set — the verified, multi-attribute corpus is the moat.

## Gate results

- Answer-it: PASS — filtering/browsing a curated corpus for many examples isn't one LLM/Google answer.
- Static feasibility: PASS — static JSON + client-side filter + pages.
- Unmaintainable data: PASS — public-domain canon is fixed; analyze/label once.
- No specific hook: NEAR-MISS — must beat static listicles ("famous sonnets") and per-poem analysis pages; edge is filter-by-multiple-attributes over a *verified* set. Marked weak.
- Legal/policy: PASS — public-domain texts (pre-1929 canon).
- US-market: PASS — US AP/HS English & r/Poetry study audience.

## Evidence

- Demand for studying by form/meter (autocomplete, this run): "different sonnet structures", "does poetry need meter", "foot vs meter poetry".
- Pain = wanting the meter/form of *specific* poems and distrusting auto-scanners: r/Poetry pn3a7w "How do I identify metre in a specific poem?", tu0ro7 "website good for finding the meter", b5xxae "Can't find a scanner online that tracks word stress".
- Incumbent shape (Bing, this run): shmoop "The Road Not Taken Form and Meter", litcharts, owleyes = per-poem pages, not a filterable index. Checkers (poemanalysis, poemfolio, tembrica) analyze *your paste*, not a browsable verified corpus.
- Volume/CPC: `unknown` (no Keyword Planner CSV this run).

## History

- 2026-08-29 — candidate (emitted by scout run), marked weak (gate-4 near-miss vs listicles/per-poem pages; unique-data moat)
- 2026-08-29 — rejected (validate): scout gate 4 disproved. The differentiating hook — a filterable, verified, multi-attribute corpus of the PD canon — is already shipped by poemanalysis.com's faceted "Poem Explorer" (215-poem iambic-pentameter collection with per-poem form + rhyme + meter + theme tags and Form/Rhyme/Meter/Theme facets), with PoetrySoup independently offering the same shape (928 poems + sub-filters). Unique-data moat gone; demand real but idea not defensible. Medium confidence (no Keyword Planner CSV). See dossier.md + runs/2026-08-29-validate-poems-by-form-index.md.
