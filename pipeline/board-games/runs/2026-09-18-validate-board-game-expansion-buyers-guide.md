# Validate run — board-game-expansion-buyers-guide (2026-09-18)

Idea: [board-game-expansion-buyers-guide](../ideas/board-game-expansion-buyers-guide/idea.md). Origin: [2026-09-18-scout.md](2026-09-18-scout.md).

## Dig log

1. **Demand** — Google Suggest fan-out (`scripts/fanout.py`, question mode) on 4 core queries: dense "which [game] expansion should I buy first" and "[game] expansions ranked" pattern across ~15 distinct games (Catan, Dominion, Dixit, Carcassonne, Root, Spirit Island, Arkham Horror, Nemesis, Heat, Destinies, Everdell, Pandemic, Villainous). SE `boardgames` (`scripts/pain-fetch.py stackexchange`): 3 queries ("which expansion should i buy first", "expansion worth it", "order to buy expansions") surfaced 19 relevant Q&As spanning Alhambra, Dominion, Arkham Horror, Race for the Galaxy, Carcassonne, Pandemic, Ticket to Ride, Munchkin, Catan Card Game — recurring buy-order/worth-it asks, some dating back to the site's early years. HN Algolia: 1 query, low yield (off-topic hits) — logged as low-signal source for this niche, not re-queried further. Reddit `search.rss` r/boardgames: 1 query, strong hits spanning 2013–2025 (Race for the Galaxy, Time Stories, Dominion, Small World). **Demand: strong.**
2. **SERP/AIO** — DDG via `pain-fetch.py` failed (SSL/connection errors, both queries) — consistent with prior niches' DDG throttling notes. Google web search via browser blocked by a bot-check ("unusual traffic") on the first query — could not complete the manual AIO checkpoint this run; flagged as owed pre-build. Fell back to Bing for the SERP dig: the scout-named incumbent ("Board Game Expansion Checker: Does It Need the Base Game?") does not appear as a distinct site in today's results — top hits are a Reddit thread (off-topic), spammy hijacked government-portal pages, a BGG taxonomy page, and an intro blog post. Searching the exact name surfaced only an unrelated GitHub repo (a release-tracker, not a base-required checker).
3. **Hook depth** — confirmed via the same SERP dig: no opened result ranks expansions or gives buy-order + own-collection filtering; the named incumbent's closest match does something entirely different.
4. **Monetization** — fetched Amazon Associates public Operating Agreement (confirms program mechanics, disclosure requirement). Rates/commission-schedule page returned an error / requires login — exact Toys & Games rate stays unknown, consistent with idea.md's own prior caveat not to trust unsourced SEO-blog rate claims.
5. **Feasibility** — not independently re-verified beyond scout's read (BGG API + publisher expansion lists + review consensus); judged low-churn/low-upkeep by nature of expansion release cadence.
6. **Data moat** — re-confirmed via the SERP dig: incumbents are single global lists or yes/no checkers, not merged + judgment-layered per-game rankings.

## Dead ends

- DDG (`pain-fetch.py ddg`): both queries failed with SSL/connection-reset errors.
- Google web search (browser): blocked with a CAPTCHA/bot-check on the very first query; abandoned for this run rather than retried repeatedly.
- HN Algolia: "board game expansion worth it" — mostly unrelated software-industry hits.

## Early-stop decisions

None — demand came out strong on the first pass, so the full six-signal dig proceeded as planned rather than stopping early.

## Outcome

No `keyword-planner.csv` existed; wrote `keywords-request.md` (~19 keywords, grouped). Dossier completed at **medium confidence** (capped by the missing CSV, plus the AIO checkpoint being blocked this run). No kill-level finding — **parked**, not rejected. See `dossier.md` for the full six-signal scorecard.
