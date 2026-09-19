# Validate run: rules-youre-playing-wrong — 2026-09-18

## Dig

1. **Demand** — autocomplete fan-out (`scripts/fanout.py`) on "board game common mistakes" / "rules you're playing wrong" variants (several requests errored `Connection reset by peer` mid-run; usable results still returned). Stack Exchange `boardgames` pain dig across 4 phrasing variants ("rules we play wrong", "misplayed rule", "we've been playing this wrong", "rule we got wrong") — dense recurrence across independent games (Orléans, Agricola, ONUW, Dungeon!, Uno, Catan, Zombicide, Gloom). HN Algolia checked — no relevant signal (generic programming discussion only), logged as dead end.
2. **Keyword Planner checkpoint** — no existing CSV; wrote `keywords-request.md` (~20 terms, grouped head/variants/hook/monetization-CPC). Continuing full dig per the "finish anyway" rule.
3. **SERP & AIO** — live Google (browser) on 3 queries: `catan common mistakes` (full AIO, but strategy-scoped, off-hook), `catan rules everyone gets wrong` (no AIO, scattered Reddit threads), `board game rules everyone gets wrong` (AI Mode stalled, generic video results). Found the key distinction: rules-misplay phrasing escapes full AIO capture; a very plausible entry query ("[game] common mistakes") does not, but answers strategy not rules — real near-miss risk, recorded as such rather than papered over.
4. **Hook depth** — same SE evidence doubles as hook evidence (people trying to verify specific misplays against the rulebook, unstructured).
5. **Monetization** — fetched the live Amazon Associates Operating Agreement; confirmed program mechanism; exact Toys & Games rate is login-gated (Commission Income Statement), stays `unknown` this run. One dead-end URL (404) logged.
6. **Feasibility & moat** — reasoned from the SERP dig (no structured source exists anywhere for this data — confirms both the moat and the "hand-build" feasibility profile) rather than a fresh source-by-source crawl; flagged as a weak/thin evidence spot in Risks & unknowns since no actual publisher errata page was timed this run.

## Dead ends

- `scripts/fanout.py` — several suggest-API calls errored with connection resets; retried with different phrasing rather than the same query.
- HN Algolia — no relevant results for board-game rules-mistake queries.
- `affiliate-program.amazon.com/help/node/topic/GRZC2SXVYCZZG5UY` — 404.
- Amazon commission rate card — login-gated, not reachable this run.

## Outcome

No kill-level finding (AIO near-miss is a documented risk, not a disproof — the rules-misplay phrasing itself isn't fully AIO-answered). Dossier written at **medium confidence** (capped by missing Keyword Planner CSV, per the hard rule). Status → `parked`, per the missing-CSV wording, with the AIO near-miss also flagged as something the pre-build re-probe must re-check regardless of CSV status.
