# Errata & Printing Correction Kit Builder

Status: validated
Origin: ../../runs/2026-09-19-scout.md

## Idea

The user identifies their exact edition/printing (publisher, SKU, year, language, box/component markers). The tool returns only the corrections that apply to *that specific physical copy* — separating rules-only text fixes from replace-this-component fixes — and generates a printable application checklist linking to official errata files or replacement-ordering routes.

## Edge

- **Dataset:** per-game, per-printing errata mapped against physical identifiers (box-lid print codes, ISBNs, print-run markers, language editions) — merged from publisher FAQ/errata PDFs, BGG forum threads, and designer clarifications, with **hand-verification** matching each correction to the specific printing it applies to. No aggregator currently does this matching.
- **Compute:** per-user-input filter — given a user's specific printing markers, output only the subset of corrections that apply (not the full errata history of the game).
- **Long-tail surface:** one page per game × edition/printing combination.
- **Monetization route:** affiliate — Amazon/publisher-direct links to reprinted expansions or corrected components where the fix is "buy the corrected version"; publisher direct-order links for replacement parts.

## Hook

Nobody currently answers "is there a list [of errata for my specific printing]" — five independent people asked and got no tool in response, only scattered partial threads.

## Incumbent probe

Dated 2026-09-19. Query: `board game errata corrections by edition and printing list` (Bing). Top hits were all forum threads asking for exactly this with no resolution: Reddit "How does everyone handle FAQ/errata/misprints on boardgames?", BGG "Is there a complete list of errata in original printing of base game...", BGG "Differences between the Errata packs" (mentions box-lid print-run codes as the differentiator — confirms the physical-marker-matching approach is the right cut), Reddit "How do you handle errata for rulebook mistakes/updates?", two Facebook-group posts asking "Is there a list somewhere that explains which cards to replace with the errata pack?". A general blog post on the *concept* of errata exists (rolltoreview.com, "Who Pays for Tabletop Errata?") but is not a lookup tool. No per-edition correction-kit tool found. SERP evidence expires ~2026-10-17.

## AIO probe

Not yet run (predict-from-form only). Query shape is a multi-attribute lookup (game + edition + printing markers), not a single-fact question — assessed low AIO risk pending the manual checkpoint.

## Gate results

- 1 AIO: pass (predict-from-form; checkpoint owed)
- 2 Static feasibility: pass — client-side lookup over a curated dataset
- 3 Data moat: pass — merge of scattered publisher/forum sources + hand-verification against physical printing markers; bounded upkeep per popular title
- 4 Hook served: pass — confirmed unmet across 5 independent threads
- 5 Legal/policy: pass
- 6 US-market: pass
- 7 Monetization: pass — affiliate (replacement components/reprints)

## Evidence

- Reddit (via Bing SERP, 2026-09-19): "How does everyone handle FAQ/errata/misprints on boardgames?" (r/boardgames)
- BGG (via Bing SERP, 2026-09-19): "Is there a complete list of errata in original printing of base game..." — "So, having now got a copy of the original print run (base + first expansion), where can I go to see the full list of text errata so I can..."
- BGG (via Bing SERP, 2026-09-19): "Differences between the Errata packs" — "If your copy of the game has a number in the bottom right corner of the box lid, you have a 1st ed. printing and all three..."
- Facebook group post (via Bing SERP, 2026-09-19): "Is there a list somewhere that explains which cards to replace with the errata pack? Like which planets they go to, etc.?"
- Amazon Associates rate for replacement/reprint purchases: `unknown` — verify at validate.

## History

- 2026-09-19 — candidate (emitted by scout run, user-supplied candidate triage)
- 2026-09-19 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate.
- 2026-09-20 — validated (confidence: high). SERP/AIO evidence expires 2026-10-17; pre-build re-probe mandatory. Keyword Planner CSV top-up: no head term found (every generic errata phrasing zero/no-data), per-title hook keywords at bare-minimum 50 bucket — no kill-level finding, Demand stays strong on forum-recurrence evidence per the rubric, but the traffic sanity-check reads less optimistic as a result.
