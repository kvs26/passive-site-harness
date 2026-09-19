# Dossier: Board Game Expansion Buyer's Guide

**Per-game ranked expansion buyer's guide (worth-it verdict + buy-order + base-required + own-what-you-have filter) — differentiated past a thin yes/no checker and global listicles, high buying-intent affiliate route. Confidence: high.**

**Evidence dated 2026-09-18 (demand/SERP/AIO/hook/feasibility/moat dig) + 2026-09-20 top-up (Keyword Planner CSV ingested; Amazon Associates rate/cookie verified verbatim). SERP/AIO evidence expires 2026-10-16 — this run did not re-probe SERP/AIO so the clock is unchanged. Pre-build re-probe mandatory regardless.**

## Signal scorecard

**Demand: strong** — the "which expansion should I buy (first)" / "expansion worth it" pattern recurs across dozens of independent games, independent communities, and years.
  - SE `boardgames`: "I have the Alhambra base set only, in which order should I buy the expansions?" (q/5941); "I have the Dominion base set only, in what order should I buy the expansions?" (q/1997); "How do the various expansions for Arkham Horror change the game? In what order would you recommend buying them?" (q/3167); "Are they worth buying?" re: Race for the Galaxy (q/2186) — https://boardgames.stackexchange.com
  - Reddit r/boardgames, spanning 2013–2025: "Race For the Galaxy - Which one should I get first?" (2013); "Which Time Stories expansion should I get first?" (2017); "Which dominion expansion should I get first?" (2020); "Which expansion of small world should I buy to add to small world of warcraft?" (2025) — https://www.reddit.com/r/boardgames
  - Google Suggest fan-out (question-mode) independently surfaced the same buy-order phrasing for Catan, Dominion, Dixit, Carcassonne, Root, Spirit Island, Arkham Horror, Destiny, D4 ("which [game] expansion should i buy first"), plus a parallel "[game] expansions ranked" pattern for Root, Dominion, Nemesis, Heat, Destinies, Carcassonne, Everdell, Pandemic, Villainous.
  - **Keyword Planner corroboration (2026-09-20, `keyword-planner.csv`):** "catan expansions" lands in the **50,000 bucket** (High competition) and "dominion expansions" in the **5,000 bucket** (Medium competition) — both clear the rubric's 5K-bucket-or-higher bar for real, sizable head-term volume behind the qualitative recurrence above. "root expansions ranked" and "everdell expansions ranked" sit at the 500 bucket (weak-tier alone, but consistent direction). One contradicting note: "dominion expansion order" shows a **-90% YoY** trend at its 500 bucket — flagged, doesn't offset the 50K/5K head-term strength.

**SERP, AIO & competitor weakness: strong (beatable)** — dated 2026-09-18.
  - Direct Bing SERP for the scout-named incumbent query ("board game expansion checker does it need the base game") no longer surfaces a distinct authoritative purpose-built site: top results are a Reddit thread (off-topic, about shelf storage), spammy/hijacked government-portal pages (`ap.gov.in` — not a real board-game site), a BGG taxonomy category page, and an "Introduction to board game expansions" blog post — https://www.bing.com/search?q=board+game+expansion+checker+does+it+need+the+base+game
  - Searching the exact scout-quoted name ("Board Game Expansion Checker") surfaces only a GitHub repo with a **different purpose** ("Tool to check if any new expansions for board games are released" — a release-tracker, not a base-required/worth-it checker) — https://github.com/aboe026/board-game-expansion-checker — reinforcing that the scout's named incumbent is thin/low-authority, not a dominant purpose-built ranker.
  - Google's own search UI returned a bot-check ("unusual traffic") this run, blocking the direct Google SERP re-probe and the manual AIO checkpoint (see below) — degraded to Bing, which is DDG/Google-adjacent for ranking signal but not identical.
  - **AIO re-probe: could not complete this run** (Google blocked with a CAPTCHA challenge on the first query). Per query-form prediction only: "which [game] expansion should I buy first" is a personalized, per-game, per-collection compound query (closer to the "X vs Y"/multi-input shape) rather than a bare 1–2 word tool query or single-fact question, so it plausibly carries the same lower AIO-trigger profile scout assessed (predict-from-form, low risk) — but this is unverified this run. **Manual google.com checkpoint remains owed before build**, same as scout flagged.

**Hook depth: strong** — the specific hook (ranked worth-it + buy-order + base-required + filtered by what you own) is not what any opened incumbent does.
  - The one directly-competing named tool (yes/no base-game-required checker) does not rank or advise order — confirmed absent from SERP entirely this run (see above), and its closest GitHub analog does something else entirely (release tracking).
  - Global listicles ("Best Board Game Expansions Ranked") and per-game YouTube buyer's guides exist but are single global list / single-game video, not an interactive per-game + own-collection filter — this gap was the basis of the scout emit and nothing found this run closes it.
  - Direct buy-order asks recur on SE/Reddit specifically because no consolidated per-game answer exists; posters get one-off forum opinions, not a systematic ranked source.

**Monetization: strong** — route facts fully verified this run (2026-09-20).
  - **Rate:** Amazon Associates Program Standard Commission Income Statement (public, no login required — corrects the prior run's assumption): Table 1 lists **Toys = 3.00%** — https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ
  - **Cookie/session window:** Associates Program Policies (public) confirm a Qualifying Purchase session runs **24 hours** from click-through, extended to **89 days** if the customer adds the product to cart within that session and completes the order within 89 days — https://affiliate-program.amazon.com/help/operating/policies
  - **Linkability:** the tool's outputs (specific expansion products, e.g. "Catan: Seafarers", "Dominion: Prosperity") are standard retail products with active Amazon listings — plainly linkable via ASIN.
  - Keyword Planner bids are supporting-only for this affiliate-route idea (per rubric, low/blank bids never downgrade): "catan expansions" bids 16.90–44.22 INR, "dominion expansions" 17.86–48.39 INR (raw, account-currency INR; not converted since not needed for the grade) — a real, non-zero advertiser market exists on the head terms, a bonus data point on top of the verified program facts.

**Feasibility & sustainable upkeep: strong.**
  - Data sources: official publisher/BGG expansion lists (stable, versioned per game) + BGG ratings/weight fields (public, low-churn) + review-consensus write-ups (secondary, used for the "worth it" judgment layer). All are static reference data — no scraping-hostile terms found; BGG's own API is publicly documented and widely used by hobbyist tools (the r/SideProject BGG-filter clone found in scout's pass 4b confirms casual public access is normal).
  - Upkeep is inherently low-frequency: new expansions for any given base game release on the order of months to years apart (e.g. Catan expansions ship roughly every few years), so per-game re-checks are infrequent; a quarterly full-catalog re-scan plus ad-hoc updates when a publisher announces a new expansion (trackable via the same BGG feed) stays well under the ~3 hrs/week cap even across hundreds of base games.

**Data moat: strong.**
  - Replication barrier = (a) merge of 2+ independent sources (official/BGG expansion list + BGG community ratings/weight + review-consensus text) **plus** (c) per-row editorial judgment on buy-order and worth-it verdict — the exact judgment layer incumbents don't ship (confirmed: the named checker is yes/no only; listicles are single global ranked lists, not per-game-conditioned on what's owned).
  - Long-tail surface: one page per base game × its full expansion set + combo/buy-order pages is a genuinely large page count (BGG alone lists thousands of games with expansions); this is structurally larger than any single competitor's global top-10 listicle or one-off per-game blog post.

## SERP & AIO snapshot

Dated 2026-09-18. Bing SERP for the named incumbent query surfaced no dominant purpose-built ranker (Reddit thread on shelf storage, spammy `ap.gov.in` pages, a BGG taxonomy page, an intro blog post); exact-name search surfaced only an unrelated GitHub release-tracker. Google's own search UI returned a bot-check this run, so the direct Google SERP and the manual AIO checkpoint (3–5 head queries, AIO present/hedge/full-answer, `&udm=14` control) could **not** be completed — this is a genuine gap in this run's evidence, not a "no AIO" finding. The per-game, per-collection buy-order query shape (personalized, multi-input) is predicted low-AIO-risk by form alone (same read as scout), but this is unverified and the manual checkpoint is **owed before build**.

## Keyword data

Exported 2026-09-20 (`keyword-planner.csv`, US, Sep 2025–Aug 2026 window; bids in INR). Normalized via `scripts/planner-report.py`:

| Keyword | Avg searches (bucket) | 3-mo | YoY | Competition | Bid low (INR) | Bid high (INR) |
|---|---|---|---|---|---|---|
| catan expansions | 50,000 | 900% | 900% | High | 16.90 | 44.22 |
| dominion expansions | 5,000 | 0% | 0% | Medium | 17.86 | 48.39 |
| dominion expansion order | 500 | 0% | -90% | Low | — | — |
| everdell expansions ranked | 500 | 0% | 0% | Low | — | — |
| root expansions ranked | 500 | 0% | 900% | Low | — | — |
| board game expansion | 50 | 0% | 0% | Medium | — | — |
| catan expansion order | 50 | 0% | 0% | Low | — | — |
| arkham horror expansion order | 50 | 0% | 0% | Low | — | — |
| buy catan seafarers | 50 | 0% | 0% | High | — | — |
| buy dominion prosperity | 50 | ∞ | ∞ | High | — | — |
| what catan expansion should i get first | 50 | 0% | ∞ | Low | — | — |

Zero/no-data (empty metrics in export): best board game expansions to buy, board game expansion amazon, board game expansion buying guide, board game expansion guide, board game expansions ranked, carcassonne expansion worth it, is expansion worth it, what dominion expansion should i get first, which expansion should i buy first.

The two per-game head terms ("catan expansions" 50K, "dominion expansions" 5K) each independently clear the 5K-bucket-or-higher bar — real evidence the per-game head-term pattern carries meaningful volume beyond the qualitative recurrence, corroborating rather than driving the Demand grade (which was already strong pre-CSV). Buckets are order-of-magnitude, not exact counts.

## Monetization sketch

**Route: Affiliate — Amazon Associates (US), Toys & Games.** Program mechanics verified via the public Operating Agreement (tagged Special Links, qualifying-purchase commissions, mandatory disclosure) plus the public rate card: **Toys = 3.00%** standard commission, on a **24-hour** click session extendable to **89 days** via cart-add. Every recommended expansion is a standard, ASIN-addressable Amazon product, so the linkability check passes. Sits as inline "Buy on Amazon" links against each ranked expansion row plus a per-game buy-order summary block.

## Digital products (documented, off by default)

A downloadable "buy-order cheat sheet" PDF per popular base game (printable checklist: owned/not-owned checkboxes + recommended order) is a plausible Gumroad-style product. Documented for the record only — ships OFF; enabling checkout is a manual per-site act.

## Traffic sanity-check

Viability bar: ≈4,300–11,500 visitors/mo (blended ads+affiliate) for $100/mo, or ≈7.5K pv/mo at Home-&-Garden-class RPM (~$13.33) ads-only — quoted from the ticket-03 reference table, not recomputed. The CSV shows two of the ~20 requested keywords alone ("catan expansions" 50K bucket, "dominion expansions" 5K bucket) already carry meaningful head-term volume — and those are just 2 of potentially hundreds of base games this dataset would eventually cover. Most of the buy-order/worth-it *phrasing* variants tested came back zero/50-bucket, meaning the bet isn't on any single query ranking well, it's on the long-tail page structure (one page per base game × its expansions, across the many games showing qualitative recurrence) aggregating toward the visitor range the way "catan"/"dominion" alone hint is possible. Still directional opinion — the full page-count × per-page-traffic math isn't computable from a ~20-keyword sample — but it's now backed by real bucket data on 2 of the largest expected pages, not qualitative recurrence alone.

## Risks & unknowns

- **AIO behavior on head queries** — still not verified (Google blocked the browser session with a CAPTCHA in the 2026-09-18 run; not re-attempted in this CSV top-up). Scout's predict-from-form assessment (low risk) is carried forward unverified. **Manual checkpoint owed before build — the standing pre-build re-probe requirement covers this.**
- **Google-side incumbent picture** — the 2026-09-18 SERP dig used Bing (Google blocked); Bing and Google rankings can diverge. The Bing read (thin/spammy competitors) is directionally reassuring but not a full substitute for a Google SERP check, which should happen alongside the AIO checkpoint pre-build.
- **Most buy-order/worth-it phrasing variants came back zero-volume in the CSV** (see Keyword data) — the two strong head terms (catan/dominion "expansions") are broader/less-qualified queries than the ranked buy-order hook itself; the specific hook phrasing isn't yet volume-confirmed beyond qualitative recurrence.

## Sources log

- SE `boardgames`: q/5941, q/1997, q/3167, q/2186, q/1573, q/591, q/14795, q/14155, q/11889, q/4041, q/5854, q/13348, q/1947, q/26946, q/56311, q/1984, q/5061, q/6087, q/19238 (searched "which expansion should i buy first", "expansion worth it", "order to buy expansions" — dead ends: several unrelated Dominion-strategy / Magic-cost hits mixed into results, filtered out).
- HN Algolia: "board game expansion worth it" — low yield, mostly unrelated software/game-industry hits (dead end, noted as low signal for this niche, consistent with scout's read).
- Reddit `search.rss` r/boardgames: "which expansion should i buy first" — strong recurring hits across 2013–2025 (Race for the Galaxy, Time Stories, Dominion, Small World).
- Google Suggest fan-out (`scripts/fanout.py`, question mode): "board game expansion", "which expansion should I buy", "expansion buying guide", "board game expansions ranked" — dense buy-order/ranked pattern across many named games.
- Bing SERP: `board game expansion checker does it need the base game`; `"Board Game Expansion Checker" base game` — no dominant purpose-built ranker found; GitHub repo with different purpose found instead.
- Google web search — blocked by bot-check this run (dead end this session; retry pre-build).
- Amazon Associates: Operating Agreement (`affiliate-program.amazon.com/help/operating/agreement`) — program mechanics confirmed; rates help page (`.../help/operating/rates`) — 400 error / requires login, rate not found.
- DDG via `scripts/pain-fetch.py ddg` — connection reset / SSL errors both queries tried (dead end, consistent with prior niches' DDG rate-limit notes).
- **2026-09-20 top-up:** `keyword-planner.csv` (human-exported, US, Sep 2025–Aug 2026) normalized via `scripts/planner-report.py`. Amazon Associates Standard Commission Income Statement (`affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ`) — Toys = 3.00%, fetched directly, no login required. Amazon Associates Program Policies (`affiliate-program.amazon.com/help/operating/policies`) — 24-hour session / 89-day cart-add extension, fetched directly.
