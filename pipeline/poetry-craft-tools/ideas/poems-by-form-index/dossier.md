# Dossier: Poems-by-form index

**A filterable, hand-verified corpus of the public-domain poetry canon (filter by form / meter / rhyme / length / theme) — rejected at medium confidence: the differentiating hook is already shipped by a strong incumbent (poemanalysis.com's faceted "Poem Explorer" over the tagged canon), so the unique-data moat is gone.**

## Signal scorecard

**Demand: strong** — repeated, broad "show me many example poems in this form/meter" intent across autocomplete and a live r/Poetry request.
  - Autocomplete fan-out (Google suggest, hl=en gl=us, this run) returns dense example-seeking variants: "list of villanelles", "famous villanelles", "most famous villanelles", "examples of villanelle poems", "famous poems in iambic pentameter", "examples of poems written in iambic pentameter", "poems written in iambic pentameter", "sonnet examples by students", "shakespearean sonnet examples not by shakespeare", "curtal/caudate/corona sonnet examples". (`scripts/fanout.py "sonnet examples" "villanelle examples" "poems in iambic pentameter" "list of villanelles"`, this run)
  - r/Poetry request for exactly a form/meter example set: "[Help] What are some poems written in *perfect* iambic pentameter?" (https://www.reddit.com/r/Poetry/comments/4eo5tr/ — surfaced via Bing, this run)
  - (No Keyword Planner CSV this run → volume is `unknown`; demand rests on query breadth + the request thread, which is enough for strong on the base rule but caps whole-dossier confidence at medium.)

**SERP & competitor weakness: weak (incumbents are strong)** — the exact product already ranks, from a well-funded operator, with the verified canon already tagged and faceted.
  - poemanalysis.com "200+ Best Iambic Pentameter Poems" is a 215-poem browsable collection of the verified PD canon, each entry tagged with **form + rhyme scheme + meter + theme + period** and a faceted filter bar ("Poet · Period · Nationality · Theme · Emotion · Topic · Form · Genre · Rhyme · Meter · Sort"); e.g. Sonnet 14 is tagged "Shakespearean Sonnet" + "ABAB CDCD EFEF GG", with sibling archive pages `/poems-with-rhyme-scheme/abab-cdcd-efef-gg/`, `/form/shakespearean-sonnet-poems/`, `/poems-with-meter/iambic-pentameter/`. (https://poemanalysis.com/poems-with-meter/iambic-pentameter/, this run)
  - PoetrySoup independently ships the same shape: "Iambic Pentameter Poems | Examples … This collection contains 928 poems" with sub-filters (Short / Famous / Best / Long) and theme facets (christmas, dog, family, food, funny, kids, life, love). (https://www.poetrysoup.com/poems/iambic_pentameter, this run)

**Hook depth: weak (hook already served)** — the scout's differentiator ("filter a *verified* set by multiple attributes; not one-poem pages, not a 5-item listicle") describes a product that already exists.
  - poemanalysis's Poem Explorer is precisely multi-attribute filtering over the verified canon (Form + Rhyme + Meter + Theme facets, canonical poets Shakespeare/Keats/Kipling/Pope/Chaucer/Wheatley/McKay). The idea's premise that "nobody lets a student browse the filtered set" is contradicted by the fetched page. (https://poemanalysis.com/poems-with-meter/iambic-pentameter/, this run)
  - No fetched complaint this run says the *existing* faceted corpora (poemanalysis/PoetrySoup) fail users badly enough to switch — the pain threads the scout logged are about *scanning an arbitrary pasted poem* (a different job, owned by the scansion-checker axis), not about the absence of a browsable form/meter index.

**Monetization paths: weak** — a real route exists but only inside a saturated, incumbent-owned lane.
  - The head incumbent monetizes this exact content with display ads: poemanalysis.com carries Google/DoubleClick ad slots and is "A RAPTIVE PARTNER SITE", plus a "Poetry+" subscription and paid PDF guides. (ad + Raptive footer on https://poemanalysis.com/poems-with-meter/iambic-pentameter/, this run) — proves the niche pays, but the ad inventory is already captured.

**Feasibility & maintenance: strong** — never the blocker; the corpus is fixed PD text, label once.
  - The canon is pre-1929 public domain (Shakespeare, Keats, Pope, Chaucer, etc., all present on the poemanalysis list), so a static JSON + client-side filter + pages build is feasible with a near-zero refresh burden. (form/meter/rhyme labels visible on the fetched poemanalysis entries confirm the labeling is a one-time analyze-once task.)

**Unique-data opportunity: weak** — the "unique curated data" moat the scout leaned on is already built by a competitor.
  - poemanalysis has already labeled the canon by form, meter, rhyme scheme, theme, emotion, period and nationality and exposed all of it behind facets and per-attribute archive pages; there is no obvious attribute or corpus slice we could hold that they don't. (https://poemanalysis.com/poems-with-meter/iambic-pentameter/, this run)

## SERP snapshot

- **"poems in iambic pentameter" / "examples of poems written in iambic pentameter"** (Bing + direct fetch, this run): top organic is owned by faceted collections and listicles — poemanalysis.com "200+ Best Iambic Pentameter Poems" (215 tagged poems + Poem Explorer facets), PoetrySoup "Iambic Pentameter Poems | Examples" (928 poems + sub-filters), Interesting Literature "10 of the Best Examples of Iambic Pentameter", Prose & Poetry, Wikipedia. Not beatable on the "many verified examples, filtered" angle — that angle is the incumbent's home page.
- **"list of villanelles" / "examples of villanelles"** (Bing, this run): WebExhibits "Examples of Villanelle: Poetry through the Ages", poemanalysis "Villanelle Definition and Examples", Literary Devices, bridesmaidforhire "25 Villanelle Poem Examples", YourDictionary, Wikipedia. Multiple established example-collections already occupy the SERP.

## Keyword data

Awaiting Keyword Planner export — none produced, and none requested this run because the verdict does not hinge on volume: even strong search volume would not restore a differentiator, since the filterable-verified-corpus hook is already shipped by poemanalysis.com. (If this idea is ever reconsidered, request buckets for: "poems in iambic pentameter", "list of villanelles", "famous villanelles", "sonnet examples", "examples of villanelle poems".)

## Monetization sketch

Display ads (AdSense/Raptive-style) on high-traffic form/meter index and per-poem pages — the exact model poemanalysis runs today. On our site it would sit on the collection pages and individual poem pages. Rejected not because the route fails but because the inventory is already owned by a stronger, better-resourced incumbent in this precise lane.

## Risks & unknowns

- **Search volume: unknown** — no Keyword Planner CSV this run (not requested; see Keyword data). Does not change the verdict.
- **Did not dig** deep on non-English or hyper-niche forms (e.g. ghazal, sestina corpora) as a possible surviving slice; poemanalysis's `/form/` archive coverage and PoetrySoup's per-form collections make it unlikely any common form is unserved, but this was not exhaustively enumerated.

## Sources log

- `scripts/fanout.py "sonnet examples" "villanelle examples" "poems in iambic pentameter" "list of villanelles"` — autocomplete fan-out (US), this run (strong example-seeking breadth).
- `scripts/pain-fetch.py hn "villanelle" / "iambic pentameter examples" / "sestina"` — HN hits were mostly "can AI write a villanelle/sestina", not corpus-seeking; not usable demand for this idea.
- Bing SERP: `reddit r/Poetry "list of villanelles" OR "examples of villanelles"` and `reddit poetry "poems written in iambic pentameter" examples recommendations` — surfaced the r/Poetry "perfect iambic pentameter" request + incumbent collections.
- https://poemanalysis.com/poems-with-meter/iambic-pentameter/ — **decisive**: 215-poem verified-canon collection, per-poem form/meter/rhyme/theme tags, faceted Poem Explorer, sibling rhyme/form/meter archive pages, Raptive/Google ads + Poetry+ subscription.
- https://www.poetrysoup.com/poems/iambic_pentameter — 928-poem example collection with Short/Famous/Best/Long + theme sub-filters (user-submitted corpus).
- Dead ends: reddit.com and old.reddit.com search + thread `.json` endpoints all login-gated/blocked this run (used Bing to surface thread titles/URLs instead); DDG-HTML returned empty (captcha, consistent with the scout run).
