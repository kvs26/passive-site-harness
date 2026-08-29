# Validate run — poetry-craft-tools — poems-by-form-index — 2026-08-29

Idea: poems-by-form-index (filterable, hand-verified corpus of the PD canon: form + meter + rhyme + length + theme). Origin scout: `../runs/2026-08-29-scout.md` (emitted weak, gate-4 near-miss vs listicles/per-poem pages; unique-data moat). Target market: US (niche default, no override).

Credentials: no `.env` → credential-free adapters only. MCP Fetch/Brave/Playwright absent → helper scripts + built-in fetch. Reddit (new + old + `.json`) login-gated/blocked this run; DDG-HTML empty (captcha, as in scout) → SERP/pain surfaced via Bing.

## What was dug

1. **Demand (pass 1)** — autocomplete fan-out on "sonnet examples", "villanelle examples", "poems in iambic pentameter", "list of villanelles". Dense example-seeking breadth ("list of villanelles", "famous villanelles", "most famous villanelles", "examples of poems written in iambic pentameter", "sonnet examples by students", "curtal/corona/caudate sonnet examples"). Pain: HN hits were "can AI write a villanelle/sestina" (not corpus-seeking); Bing surfaced a live r/Poetry request "[Help] What are some poems written in *perfect* iambic pentameter?" (reddit.com/r/Poetry/comments/4eo5tr/). Demand graded **strong** (breadth + request thread).

2. **SERP & competitor (pass 2)** — fetched the top contenders. **Decisive dead end for the idea:** poemanalysis.com already ships the proposed product — "200+ Best Iambic Pentameter Poems" (215-poem verified-canon collection) with each poem tagged form + rhyme + meter + theme + period and a faceted **Poem Explorer** (Poet/Period/Nationality/Theme/Emotion/Topic/Form/Genre/Rhyme/Meter), plus sibling archive pages `/poems-with-rhyme-scheme/`, `/form/`, `/poems-with-meter/`. PoetrySoup independently ships a 928-poem iambic-pentameter collection with Short/Famous/Best/Long + theme sub-filters. WebExhibits/LiteraryDevices/bridesmaidforhire own "villanelle examples".

3. **Hook depth** — the scout differentiator ("filter a *verified* multi-attribute set; not per-poem pages, not a 5-item listicle") describes poemanalysis's Poem Explorer exactly. No fetched complaint says the existing faceted corpora fail users; the scout's meter-pain threads are about scanning an *arbitrary pasted poem* (different job). Hook **collapsed**.

4. **Monetization** — poemanalysis runs Google/DoubleClick ads + "RAPTIVE PARTNER SITE" + Poetry+ subscription + paid PDFs on this exact content: niche pays, but inventory already captured. Weak.

5. **Feasibility** — strong (fixed PD canon, label once); never the blocker.

6. **Unique data** — poemanalysis has already labeled the canon by form/meter/rhyme/theme/emotion/period and exposed facets; no obvious slice left. Moat gone.

## Early-stop / decision

Not an early-stop on weak demand (demand is fine) — stopped deep-digging remaining signals once pass 2 disproved scout **gate 4**: the differentiating hook (filterable verified multi-attribute corpus) is already built by a strong, well-resourced incumbent. Graded the rest from evidence in hand.

## Keyword Planner checkpoint

Skipped writing `keywords-request.md`: the verdict is a rejection on competitor discovery, not inconclusive evidence, so it does not hinge on volume — a high bucket would not restore a differentiator. (Suggested keywords recorded in the dossier if ever reconsidered.)

## Outcome

**Rejected** — scout gate 4 disproved (hook already served by poemanalysis.com Poem Explorer; unique-data moat gone). Confidence: medium (no CSV caps it; SERP/competitor evidence strong from 2 independent incumbents). Dossier kept as the record. No comparison brief (0 validated in niche).
