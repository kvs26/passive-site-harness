# Dossier: Convention Carry-Bag / Game-Load Packing Optimizer

**A computed bin-packing tool for board-game convention bags — real recurring demand for the underlying problem, but Google's AI Overview already gives usable generic-formula answers and the compute mechanism itself is commoditized by generic bin-packing calculators, leaving a narrower wedge (named game/bag catalog + multi-item convention-haul optimization) than scout assumed. Confidence: high (Keyword Planner CSV ingested 2026-09-20 — no signal graded unknown, demand and SERP/AIO-weakness each carry ≥2 independent sources).**

**Evidence dated 2026-09-19 — SERP/AIO evidence expires 2026-10-17 (unchanged; this run's top-up did not re-probe SERP/AIO). Pre-build re-probe mandatory regardless.**

## Signal scorecard

**Demand: strong** — the underlying problem (will my games fit in this bag?) recurs across independent communities and formats, with people solving it by hand rather than with a tool.
  - BGG forum thread 3157518 ("how many board games fit in an AllPlay/Game Haul bag", Sept 2023, 30+ replies): manual box-counting reports — "AllPlay bag could fit 6 boxes... Game Haul could fit six boxes" (https://boardgamegeek.com/thread/3157518)
  - BGG forum thread 3151637 ("Board Game transport", Sept 2023): "Inis-size boxes will not fit, but you can cram in Scythe, Rurik, Shogun, etc." — manual trial-and-error, no calculator referenced (https://boardgamegeek.com/thread/3151637)
  - YouTube "Packing 16 Games for BGG.CON (Will They Fit?) | Table Scraps" — 657 views, "attempting to pack 16 board games into one bag... The big questions: Will..." (via Bing SERP, 2026-09-19)
  - YouTube "10 Travel Board Games in One Tiny Case? | Ultimate Cruise Game Packing Hack" — 9.8K views (via Bing SERP, 2026-09-19)
  - Reddit thread titles surfaced via Bing ("Board game carrying bag?", "Which games do you always have in your bag?") corroborate but full content was blocked by Reddit's login wall
  - **Keyword Planner CSV (ingested 2026-09-20, Sept 2025–Aug 2026 window):** corroborates but doesn't independently carry the grade — "board game bag" and "board game travel bag" each land in the **500 bucket** (flat 0% YoY); "board game carrying case" is a **50 bucket** (flat 0% YoY); "board game bag amazon" collapsed **-100% YoY/3-mo** (no current data). Per the rubric, 500-bucket keywords support at most *weak* on their own — this corroborates the already-strong grade from the BGG/YouTube pieces above rather than setting it.

**SERP, AIO & competitor weakness: weak** — competitor pages are beatable, but Google's AI Overview already gives a usable generic answer to every head query tested, narrowing the wedge.
  - Competitor pages opened directly (2026-09-19): thewearify.com and boardgamesguide.com are AI-generated/templated "Top 10" affiliate listicles (Amazon Associate links throughout) — not computed tools, confirms scout's "no incumbent tool" finding.
  - **AIO re-probe (manual checkpoint, run by the human on google.com, 2026-09-19)** on 4 head queries — AI Overview present and gives a full formulaic answer on all 4:
    - "how many board games fit in a bag" → AIO gives capacity ranges by bag type (dedicated bags: 3–7 large boxes; totes: 5–7; backpacks: 1–2 or 40+ micro games; "bag-de-boxing" into zip pouches: 10–44) and ends with "If you want a specific recommendation, tell me [your games/bag] — I can help you figure out the best packing strategy."
    - "best bag for carrying board games to a convention" → AIO recommends a specific product (ENHANCE Board Game Backpack, with shopping-ad price/rating) plus feature call-outs (padding, weight capacity, chest strap).
    - "board game bag size calculator" → AIO gives an explicit formula (bag width = box width + 1–2in; bag depth = stacked-box thickness + 1in; bag height = box length + box height + 2in) with reference box sizes (Ticket to Ride/Catan ≈11.5×11.5×3in, Gateway ≈10×10×2.5in, large box ≈12×16×6in) and ends with "tell me [your boxes] — I can calculate the exact interior bag dimensions you need."
    - "will my board games fit in a travel bag" → AIO gives a size-matching heuristic (big-box games need dedicated bags/duffels; compact games fit regular backpacks) and recommends "bag-de-boxing."
  - **Gap:** the human did not complete the `&udm=14` AIO-free control comparison this run — the presence of AIO is confirmed directly from the panels shown, but the side-by-side control wasn't captured. Flagged in Risks & unknowns.
  - **Wedge past the AIO (what survives):** AIO's answers use generic reference categories (3 size classes), not the user's *named* games and *named* bag model; it doesn't do multi-game bin-packing across a whole convention haul list at once; no orientation/stacking-order output, no weight total, no crush-risk flag, and no persistent/bookmarkable/shareable result — every AIO answer ends by inviting a follow-up chat rather than producing a tool output. This wedge is real but narrower than the "top of the AIO-resistance ranking" assumption in idea.md's original AIO probe.

**Hook depth: weak** — the "no tool computes this" claim doesn't survive contact with the generic bin-packing-calculator market, though no board-game-specific one exists.
  - Search for "board game packing calculator tool bin packing" (Bing, 2026-09-19) surfaces multiple live, generic 3D/box bin-packing calculators (abc.tools, easypacksimulator.com, 3dpack.ing, venator.dev, calcchef.com, dimpack3d.com, boxvolume.com) — proving the underlying compute (does X fit in Y, given dimensions) is already commoditized as a generic tool category.
  - None of these are board-game-specific or pre-loaded with game/bag catalog data — a user would still have to manually look up and type in every box and bag dimension.
  - No evidence found this run of anyone explicitly requesting a *board-game-specific* packing calculator by name (only the manual trial-and-error BGG/YouTube content already counted under Demand) — searched "board game bin packing tool", "board game packing calculator" variants, came up empty for direct asks.
  - **Keyword Planner CSV (ingested 2026-09-20) corroborates this directly:** every hook-specific query in the export — "board game packing calculator", "board game bin packing tool", "which games fit in my bag calculator", "board game convention packing list", "will my board games fit in a bag", "board game bag capacity/size", "gloomhaven storage bag" — came back **zero/no-data** (empty metric cells, i.e. below Planner's minimum reporting threshold). No search-volume evidence anyone is looking for a named calculator by this description.
  - Net: the differentiator has to rest entirely on the pre-built game+bag name catalog (removing manual dimension lookup), not on the compute itself, which is a thinner hook than idea.md originally scoped ("no tool computes the fit from box + bag dimensions").

**Monetization: strong** — affiliate route verified at evidence level against the primary source.
  - Amazon Associates Standard Commission Income table fetched verbatim (2026-09-19, https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ): **Luggage → 4.00%** (bucketed with Watches, Jewelry, Shoes, Handbags & Accessories); **Toys → 3.00%** (bucketed with Furniture, Home, Home Improvement, Pets Products, Sports, etc.) — Table 1.
  - Operating Agreement (fetched verbatim, https://affiliate-program.amazon.com/help/operating/agreement, updated Oct 15 2025) confirms the required disclosure ("As an Amazon Associate I earn from qualifying purchases") and standard link mechanics (Special Links / tagged links).
  - Both tool outputs — travel bags/cases (Luggage category) and the games themselves (Toys category) — are standard, broadly-stocked Amazon catalog categories with confirmed per-category commission rates, so both halves of the dual-sided route are linkable in practice.
  - Cookie/session tracking window: **now confirmed** (reused from repo memory, originally fetched verbatim from https://affiliate-program.amazon.com/help/operating/policies during this niche's 2026-09-19/2026-09-20 validate work) — 24-hour click session, extendable to 89 days if the customer adds to cart within that session and completes the order within 89 days.
  - Planner bid context (bonus data point only — affiliate route, low bids never downgrade): top-of-page bids across the three keywords with volume convert to roughly **$0.37–$1.92** (board game bag), **$0.44–$1.84** (board game carrying case), **$0.50–$2.30** (board game travel bag) at the fetched 2026-09-19 USD/INR rate of 95.99 (https://open.er-api.com, raw figures 35.24–184.63 / 41.83–176.81 / 48.16–220.33 INR verbatim from the export) — consistent with genuine commercial (not purely informational) intent on these queries.

**Feasibility & sustainable upkeep: weak** — data exists and is public, but reliable structured access is harder than scout's "merge two API feeds" framing assumed.
  - BoardGameGeek's XML API2 "thing" endpoint does **not** expose physical box dimensions/weight — confirmed via a Reddit thread surfaced this run ("Extracting BGG weight using xmlapi2", r/boardgames) where users trying to pull "weight" from the API discover it's the community *complexity* rating (1–5 scale), not physical box weight — a naming collision that would trip up naive automated ingestion.
  - Where BGG does carry physical dimensions/weight, it lives in per-*version* community-editable fields (varies by printing/edition) rather than the base game record — coverage is inconsistent across titles.
  - Net: building even a starting game×bag dataset requires meaningful one-time hand-collection from publisher listings and retailer product-spec pages (Amazon, etc.), not a clean two-source API merge — this raises initial-build labor above idea.md's "low incremental upkeep" framing. Steady-state weekly upkeep (new releases only) may still be low once a base catalog exists, but that wasn't separately verified this run.

**Data moat: weak** — the replication barrier is real, but the long-tail surface it can support is now a bigger open question.
  - The API-gap finding above confirms the dataset is **not** mechanically replicable in one clean automated pull — it requires (a) merging publisher/retailer/BGG-version sources and (b) hand-verification against primary listings, both of which hold up as a genuine barrier.
  - But because that hand-collection labor is real, the credible *initial* long-tail surface (per-bag-model and per-large-game pages) is likely to start narrow (a limited set of popular bags × popular games) rather than the broad surface scout's framing implied — scaling it to genuine long-tail breadth means sustained manual research, not just periodic upkeep touches.

## SERP & AIO snapshot

Dated 2026-09-19. Competitor pages (thewearify.com, boardgamesguide.com) opened directly — confirmed templated/AI-generated affiliate listicles with no computed fit-checking, matching the scout-run incumbent-probe finding of "manual advice or demonstration video only."

AIO re-probe (manual, human-run on google.com, this run) — see full detail under the SERP/AIO scorecard line above. Summary: AIO present and gives a full, usable, formula-based answer with reference sizes and (for the "best bag" query) an actual shopping recommendation, on all 4 head queries tested. Every answer ends with an invitation to continue in chat with the user's specific games/bag for an "exact" calculation — Google is already offering the personalized-compute step conversationally, even though it isn't shipping a standalone bookmarkable tool. The `&udm=14` AIO-free control was not captured this run (see Risks & unknowns).

## Keyword data

Ingested 2026-09-20 from `keyword-planner.csv` (export window: Sept 1, 2025 – Aug 31, 2026; bids in INR, converted at 2026-09-19 USD/INR rate of 95.99 from https://open.er-api.com). Values are order-of-magnitude buckets, not exact counts.

| Keyword group | Keyword | Avg searches (bucket) | 3-mo / YoY trend | Competition | Bid low–high (INR → USD) |
|---|---|---|---|---|---|
| Head | board game bag | 500 | 0% / 0% | High | 35.24–184.63 → $0.37–$1.92 |
| Head | board game carrying case | 50 | 0% / 0% | High | 41.83–176.81 → $0.44–$1.84 |
| Head | board game travel bag | 500 | 0% / 0% | High | 48.16–220.33 → $0.50–$2.30 |
| Monetization-CPC | board game bag amazon | 50 | -100% / -100% | — | no current bid data |
| Head/Variants/Hook | convention board game packing, board game bag size, best bag for board games convention, board game backpack size guide, board game bag capacity, board game packing calculator, board game bin packing tool, which games fit in my bag calculator, board game convention packing list, will my board games fit in a bag, gloomhaven storage bag, board game carrying case backpack, board game case for travel, convention game bag, large board game storage bag, how many board games fit in a bag | zero/no-data | — | — | — |

11 of 15 requested keywords came back zero/no-data — the head problem has thin-but-real Planner-visible volume (two 500-bucket terms), while every hook-specific/calculator-framed phrasing is below Planner's reporting floor, corroborating the Hook depth grade above.

## Monetization sketch

Affiliate route (Amazon Associates), dual-sided: travel bags/cases at the **Luggage** rate (4.00%, verified verbatim 2026-09-19) and the games themselves at the **Toys** rate (3.00%, verified verbatim 2026-09-19). Both categories are standard, deep Amazon catalog categories, so the tool's actual outputs (a named bag model, a named game) are linkable in practice. Would sit as in-line product links on each bag-model and per-game result page. Cookie/session window not verbatim-confirmed this run (see Feasibility note above and Risks & unknowns).

## Digital products (documented, off by default)

A printable "convention packing checklist" (per-bag-model or per-user-list PDF summary of what fits, weight total, and packing order) is a plausible Gumroad-style add-on given the tool's compute already produces this data — documented for the record, ships OFF.

## Traffic sanity-check

Directional opinion, not a number. The viability bar is ≈4,300–11,500 blended visitors/mo (or ads-only equivalents ≈43K pv/mo at pets-class RPM ~$2.33 / ≈7.5K pv/mo at Home & Garden-class RPM ~$13.33) for $100/mo within 9–12 months.

Demand for the underlying problem is strong and recurs across independent communities, which is a good sign for a broad "how many games fit in a bag" head term. But the long-tail page surface this idea depends on to reach blended-visitor scale (per-bag-model × per-game pages) is now credibly narrower at launch than scout assumed, per the Feasibility/Moat findings above — a limited starting catalog of popular bags × popular games may not generate enough distinct indexable pages to clear the visitor bar on its own, and the AIO's generic-formula answers may siphon off some of the broad "how many games fit" head-query traffic before it reaches a site at all. Opinion: plausible only if the catalog can be grown well past an initial narrow set — this is a bigger execution dependency than the scout-stage framing suggested.

## Risks & unknowns

- AIO `&udm=14` control comparison not completed (human checked live panels but didn't run the side-by-side no-AIO control) — should be captured on the mandatory pre-build re-probe.
- Steady-state (post-launch) weekly upkeep hours were not independently estimated — only the harder-than-assumed *initial* build labor was surfaced. A bottom-up hrs/week estimate is still owed, ideally on the pre-build re-probe.
- Searched and found nothing: direct requests for a "board game packing calculator" or "board game bin packing tool" by name (only generic non-board-game bin-packing tools and manual-advice content turned up; Keyword Planner corroborates with zero volume on these exact phrasings).

## Sources log

- BoardGameGeek forum thread 3157518 — https://boardgamegeek.com/thread/3157518 (fetched directly, 2026-09-19)
- BoardGameGeek forum thread 3151637 — https://boardgamegeek.com/thread/3151637 (fetched directly, 2026-09-19)
- Bing SERP: "board game convention bag packing optimizer which games fit" (2026-09-19, carried from scout run)
- Bing SERP: various board-game-bag/travel-bag demand queries (2026-09-19)
- thewearify.com, boardgamesguide.com — opened directly, confirmed AI-generated/templated affiliate listicles (2026-09-19)
- Google search (manual, human-run), 4 head queries with AIO panels recorded verbatim (2026-09-19)
- Bing SERP: "board game packing calculator tool bin packing" → abc.tools, easypacksimulator.com, 3dpack.ing, venator.dev, calcchef.com, dimpack3d.com, boxvolume.com (2026-09-19)
- Amazon Associates rate table — https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ (fetched verbatim, 2026-09-19)
- Amazon Associates Operating Agreement — https://affiliate-program.amazon.com/help/operating/agreement (fetched verbatim, 2026-09-19)
- Attempted: https://affiliate-program.amazon.com/help/operating/rates (HTTP 400, dead end)
- Bing SERP: "amazon associates commission rate table 2026 toys luggage" → led to the primary rate-table page above (2026-09-19)
- BGG XML API2 direct fetch attempt (`boardgamegeek.com/xmlapi2/thing?id=13`) — blocked by Cloudflare challenge (dead end, 2026-09-19)
- Bing SERP: "boardgamegeek xmlapi2 box dimensions weight not included" → surfaced r/boardgames "Extracting BGG weight using xmlapi2" thread confirming the weight-field naming collision (2026-09-19)
- Dead ends: `ddg` adapter (pain-fetch.py) returned empty for all queries this run (bot-blocked, per prior memory note); `lemmy` adapter low-relevance for board-game niche queries; `stackexchange` adapter (boardgames.stackexchange.com) weak/irrelevant excerpt matches; `old.reddit.com` direct fetch hit login wall.
- Keyword Planner export — `keyword-planner.csv` (downloaded by the human, ingested 2026-09-20 via `scripts/planner-report.py`)
- Amazon Associates Program Policies (cookie/session window) — https://affiliate-program.amazon.com/help/operating/policies (reused from repo memory, originally fetched verbatim during this niche's 2026-09-19/2026-09-20 validate work)
- USD/INR exchange rate — https://open.er-api.com/v6/latest/USD (fetched 2026-09-19/20, rate 95.99, used for bid conversion)
