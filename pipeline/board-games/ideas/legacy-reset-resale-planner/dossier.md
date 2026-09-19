# Dossier: Legacy Campaign Reset / Resale-Readiness Planner

**A reset-eligibility + official-reset-kit router for legacy/campaign board games, paired with a resale-completeness report; the reset half has real recurring demand across several flagship titles, but the resale/completeness half — the part meant to differentiate it from general AI collectible-scanner apps — has no independent demand evidence and a fragmented, partly-unlinkable monetization path. Keyword Planner top-up (2026-09-20) doesn't rescue either half — every reset-kit head term tops out at the bare-minimum 50 bucket and every resale/completeness phrasing is zero/no-data, exactly as predicted. Confidence: low (weak demand, per the rubric).**

**Evidence dated 2026-09-19 — SERP/AIO evidence expires 2026-10-17 (unchanged; not re-probed this run). Pre-build re-probe mandatory regardless.**

## Signal scorecard

**Demand: weak** — the reset-kit half recurs across several independent games/communities; the resale/completeness half (the idea's actual differentiator) has zero autocomplete signal and only one aging thread.
  - Google autocomplete (curl, 2026-09-19) returned "reset kit" / "reset pack" completions for **5 of 6** head queries tried: `pandemic legacy reset kit`, `gloomhaven reset kit` / `reset pack`, `risk legacy reset`, `betrayal legacy reset pack`, `charterstone reset pack`.
  - Autocomplete for every resale/completeness phrasing tried (`legacy board game resale`, `legacy board game completeness`, `sell legacy board game`, `can i sell my legacy board game`) returned **zero** legacy-specific suggestions.
  - BGG thread [Aeon's End: Legacy — reselling after resetting?](https://boardgamegeek.com/thread/2485472) (dated 16 Aug 2020, direct hook match) — hedged, uncertain crowdsourced answers, no consensus, not corroborated by a second independent thread on the resale question specifically.
  - Two dated Facebook posts (17 Apr 2024, 2 Jan 2026) on *resetting* Pandemic Legacy confirm multi-year recurrence of the reset question, but neither touches resale/completeness.
  - Two independent pieces exist for "is resetting possible/how" (reset half); the resale-completeness half — the differentiator — has exactly one aging, uncorroborated data point. Per the grading rubric this nets **weak**, not strong, because the half that actually separates this idea from a plain reset-kit wiki page is thin.
  - **Keyword Planner CSV top-up (2026-09-20):** confirms rather than rescues the weak read. Every reset-kit head/variant term that returned any data at all — `pandemic legacy reset kit`, `gloomhaven reset kit`, `how to reset gloomhaven`, `aeon's end legacy reset pack`, `betrayal legacy reset pack`, `charterstone reset pack` — sits at the bare-minimum **50 bucket** (summed across all six, ~300 total), which per the rubric is a **no-support** result, not corroboration. `risk legacy reset` and `gloomhaven reset pack` came back zero/no-data despite autocomplete-confirmed demand. Every resale/completeness-half phrasing (`sell legacy board game`, `legacy board game resale value`, `legacy board game completeness`, `can i sell my legacy board game after playing`, `legacy campaign game resale`) is also zero/no-data — exactly the outcome `keywords-request.md` flagged as corroborating rather than contradicting this run's dig. Demand **stays graded weak** per the rubric ("Demand falls back to the base rules" at ≤50-bucket).

**SERP, AIO & competitor weakness: weak** — no purpose-built incumbent found (favorable), but the AIO re-probe is an outstanding manual checkpoint.
  - Re-opened both scout-named incumbents this run (both were snippet-only in the scout run):
    - [valueidentifier.app](https://www.valueidentifier.app/) — landing page is a generic multi-category "AI photo → price/condition/rarity" scanner (sample result shown is a **Rolex watch**); no board-game-specific mention, no completeness-assessment feature, no reset-kit routing anywhere on the page.
    - [minti-app.com](https://minti-app.com/) — a generic collectibles app (buttons: "Scan & identify", "Know its value", "Buy & sell", "Track collections"); no board-game- or legacy-specific content visible.
  - Actual overlap is **thinner than scout's SERP-snippet framing suggested** — both apps' real landing-page content is a generic collectible scanner, not a legacy-game-specific tool. This is favorable evidence, not a kill-level finding (scout's snippets did describe board-game-specific copy that isn't on the live landing pages today).
  - AIO re-probe: **not yet run by a human** (Google web search is 429-blocked for automated queries this session per the prior scout run's finding; DDG is structurally AIO-blind per the skill). Predicting from query form: `pandemic legacy reset kit` is a 2–3 word tool/product query (~9–10% AIO base rate, low risk); `can you reset a legacy board game after playing it` and `how do you sell a legacy board game` are question-form queries (~58–86% base rate, real risk). **Owed to the user before build**: check these two question-form queries directly on google.com/search.

**Hook depth: weak** — the reset-routing half is evidenced as a real, recurring, unsatisfied need; the resale/completeness half is not evidenced as something users are asking for, only something the idea assumes.
  - Reset half: the BGG [Pandemic Legacy Reset Kit filepage](https://boardgamegeek.com/filepage/125892/pandemic-legacy-reset-kit) comment thread spans **2016–2024** with users repeatedly asking for help, reporting broken links, and inventing ad-hoc workarounds (washi tape, post-it notes, hand relabeling) — direct evidence the routing/instructions problem recurs and isn't solved once and for all.
  - Resale half: no thread found where a user asks "which specific official product do I need to make this resellable" as opposed to the generic "how do I sell a used board game" question that generic marketplaces/videos already answer.

**Monetization: weak** — Amazon Associates is the nominal route (per `idea.md`'s Edge block), but the actual reset-kit product landscape is fragmented and partly unlinkable, and the highest-demand example has no commercial product at all.
  - Amazon Associates operating agreement confirmed live: [affiliate-program.amazon.com/help/operating/agreement](https://affiliate-program.amazon.com/help/operating/agreement) (Updated 15 Oct 2025); Toys & Games category commission rate remains **unknown** (rate table is login-gated) — same finding as the sibling dossier [rules-youre-playing-wrong/dossier.md](../rules-youre-playing-wrong/dossier.md).
  - **Pandemic Legacy** (the single highest-autocomplete-demand title) has **no official commercial reset product** — its "reset kit" is a free, fan-made, print-your-own-labels ZIP by BGG user `sfrazer` (confirmed by fetching the [filepage](https://boardgamegeek.com/filepage/125892/pandemic-legacy-reset-kit) directly). The only affiliate-linkable products adjacent to it are generic craft supplies (Avery labels, card sleeves) — and BGG itself already runs Amazon affiliate links on that exact page and in its comments (e.g. an embedded `tag=article-geekdo-20` Amazon link for Avery labels), meaning the highest-traffic case's affiliate real estate is already occupied by a much larger incumbent.
  - **Gloomhaven/Jaws of the Lion** does have a genuine official commercial reset product — Cephalofair sells a "Jaws of the Lion Removable Sticker & Map (Reset Pack)" directly via [cephalofair.com](https://cephalofair.com) — but no public Cephalofair affiliate/partner program was found this run (small-publisher direct Shopify store), so this product is likely **not affiliate-linkable** at all; only third-party resale listings (eBay, eBay Partner Network) would be.
  - Net: the route exists on paper, but per-game linkability is inconsistent — some games have no commercial product, some have a commercial product with no known affiliate program, and the one confirmed-affiliate case (Amazon, generic supplies) is already served by BGG.
  - **Keyword Planner CSV (2026-09-20), supporting only:** `card sleeves board game` — the one monetization-CPC keyword with real volume — cleared the **500 bucket** (Low competition) with a top-of-page bid of 36.06–94.20 INR, converted at the live rate (1 INR = 0.01043 USD, fetched 2026-09-20 via api.frankfurter.app) to **≈$0.38–$0.98 USD** — just under the ~$1.00 high-RPM bar, though that bar doesn't strictly apply to an affiliate-route idea (bids are supporting-only here). It's also a generic accessory keyword, not the reset-kit product itself, so it doesn't close the per-game linkability gap identified above. Every other monetization-CPC keyword (`board game reset kit`, `board game replacement stickers`, `board game sticker sheet replacement`, `legacy board game accessories`) was zero/no-data, and `card sleeves board game` carries a **-90% YoY** decline — a mild additional negative signal, not scored against an affiliate-route idea per the rubric. Monetization **stays weak**.

**Feasibility & sustainable upkeep: weak** — real, free, no-login sources exist, but building an accurate per-game answer requires synthesizing scattered, sometimes contradictory community threads rather than reading one authoritative source.
  - Sources are free and open (publisher pages, BGG filepages/community PnP kits, forum threads) — access itself is not the risk.
  - The Aeon's End Legacy BGG thread shows **experienced community members years into the game's release still giving hedged/uncertain answers** to "can this be reset and resold" — evidence that a hand-verified per-game answer isn't a quick lookup, it requires actual synthesis and judgment call per title.
  - The legacy/campaign genre is a bounded universe (see moat signal below), which keeps steady-state upkeep plausible within the ~3 hrs/week cap once the initial per-game buildout is done — but that initial buildout is nontrivial given the source messiness above.

**Data moat: weak** — the replication barrier (merge + hand-verify) is real, but the long-tail page surface is small and demand is concentrated in a handful of titles.
  - Barrier confirmed real: no single authoritative source exists per game — building an accurate reset/resale verdict requires merging publisher pages (when they exist), BGG filepages/community PnP kits (when they don't), and forum-thread nuance, then hand-verifying, exactly as scout's Edge block claimed.
  - Long-tail surface is genuinely bounded and small: the legacy/campaign board-game subgenre is on the order of a few dozen notable titles (Pandemic Legacy S0–S2, Risk Legacy, SeaFall, Betrayal Legacy, Charterstone, Gloomhaven, Frosthaven, Jaws of the Lion, Aeon's End: Legacy, Near and Far, Clank! Legacy, etc.), and this run's autocomplete dig found reset-specific demand concentrated in only **~5–6** of them. A single-pager incumbent genuinely can't match a per-game page set, but the set itself is thin next to sibling board-games ideas (e.g. rules-misplayed or expansion-buyer's-guide, whose page surfaces run to hundreds of titles).

## SERP & AIO snapshot

Dated 2026-09-19. DDG (`html.duckduckgo.com`) returned a landing/redirect page for site-scoped pain queries this session (rate-limited/blocked) — pivoted to Bing web search via the browser tool, consistent with the prior scout run's fallback for this niche.

- `gloomhaven official reset pack cephalofair buy` (Bing, ~205 results) — top hit is Cephalofair's own Gloomhaven collection page; a later query (`cephalofair store "reset pack" gloomhaven price`) surfaced the actual product: "Jaws of the Lion Removable Sticker & Map (Reset Pack)" on cephalofair.com, plus BackerKit and eBay listings. No third-party tool or wiki page routes users to this — genuinely beatable, but also genuinely thin (the publisher's own store already answers "where do I buy it").
- `pandemic legacy reset kit official zman games buy` (Bing, ~22,700 results) — top hits are Z-Man Games' own product pages (base game, no reset-kit SKU) and BoardGameGeek's game page/filepage. No official commercial reset kit exists for this title; the community fan-kit is the de facto answer and already ranks well on BGG's own domain authority.
- AIO checkpoint: **not run** (owed to the user — see Risks & unknowns). Predicted low risk on 2–3 word product-style queries (`pandemic legacy reset kit`), higher risk on question-form queries (`can you reset a legacy board game`, `how do you sell a legacy board game`) per the skill's base-rate table.

## Keyword data

Ingested 2026-09-20 (`keyword-planner.csv`, export window Sept 1 2025 – Aug 31 2026, bids in INR). Normalized via `scripts/planner-report.py`:

| Keyword | Bucket | 3-mo | YoY | Competition | Bid low (INR) | Bid high (INR) |
|---|---|---|---|---|---|---|
| pandemic legacy reset kit | 50 | 0% | 0% | Low | — | — |
| gloomhaven reset kit | 50 | 0% | 0% | High | — | — |
| how to reset gloomhaven | 50 | 0% | 0% | Low | — | — |
| aeon's end legacy reset pack | 50 | 0% | 0% | Medium | — | — |
| betrayal legacy reset pack | 50 | 0% | 0% | Medium | — | — |
| charterstone reset pack | 50 | 0% | 0% | Low | — | — |
| card sleeves board game | 500 | 0% | -90% | Low | 36.06 | 94.20 |

Zero/no-data (empty metrics in export): `gloomhaven reset pack`, `risk legacy reset`, `legacy board game reset`, `reset kit legacy board game`, `can you reset a legacy board game`, `sell legacy board game`, `legacy board game resale value`, `legacy board game completeness`, `can i sell my legacy board game after playing`, `legacy campaign game resale`, `board game reset kit`, `board game replacement stickers`, `board game sticker sheet replacement`, `legacy board game accessories`.

USD conversion (1 INR = 0.01043 USD, fetched 2026-09-20 via api.frankfurter.app): `card sleeves board game` bid range ≈ **$0.38–$0.98**. No other keyword carried bid data. Buckets are order-of-magnitude (50/500/5K/...), not exact counts.

## Monetization sketch

Route: **affiliate** (per `idea.md`'s Edge block). Amazon Associates is the only confirmed-live program (mechanism verified via the operating agreement; Toys & Games rate unknown/login-gated). Fit is uneven per game: some titles (Pandemic Legacy) route only to generic craft-supply Amazon links already used by BGG itself on the exact same content; others (Gloomhaven/Jaws of the Lion) have a real commercial reset product but it's sold direct by the publisher with no known affiliate program, leaving only third-party resale marketplaces (eBay) as a linkable alternative. No single clean "click the official reset kit, earn a commission" path holds across the dataset — it would need to be built and disclosed per game, with several games having no monetizable product at all for the reset half.

## Digital products (documented, off by default)

A paid downloadable "legacy reset checklist" PDF per game is a plausible product shape, but a free community-made equivalent already exists for at least the highest-demand title (BGG's Pandemic Legacy Reset Kit ZIP, 17K+ downloads since 2016), which weakens willingness-to-pay for that title specifically. Left off by default; would need per-game differentiation from existing free fan kits to be worth enabling.

## Traffic sanity-check

Viability bar: ≈4,300–11,500 visitors/mo blended (ads + affiliate) for $100/mo, per the reference table. The Keyword Planner top-up sharpens rather than reverses the prior directional read: every reset-kit head term that has any measurable volume at all sits at the bare-minimum 50 bucket, and the resale/completeness half is confirmed zero-volume across every phrasing tried. With a long-tail surface bounded to a few dozen legacy/campaign titles and real per-game recurrence found in only ~5–6 of them, this idea's addressable traffic — even summed across its whole eventual page set — reads as falling well short of the viability bar. This is now a measurement-backed opinion, not a guess: the CSV gives no head term or bucket total anywhere near the range sibling board-games ideas (e.g. board-game-expansion-buyers-guide's 50K/5K-bucket terms) cleared.

## Risks & unknowns

- AIO manual checkpoint not yet run by a human on google.com/search — owed before build regardless of this run's outcome.
- Toys & Games Amazon Associates commission rate: unknown (login-gated), consistent with every other board-games-niche dossier this session.
- Whether Cephalofair (or other legacy-game publishers with direct-sold reset packs) run any affiliate/partner program: searched (`cephalofair affiliate program`-style Bing queries were not run this session due to time; noted as a gap, not a checked-and-failed search) — worth a follow-up before treating that product line as monetizable.
- Reddit (`search.rss`) hit HTTP 429 this session (anon rate limit ~1/45s per repo memory); not retried. Lemmy adapter failed with a DNS resolution error (`lemmy.world` — `socket.gaierror`), not retried.
- moderncollege.net appeared in Bing SERP snippets during the demand dig with a plausible dated article title but returned a live Cloudflare 522 error when opened directly — not a real incumbent, dead end.

## Sources log

- `keyword-planner.csv` (Google Keyword Planner historical-metrics export, Sept 1 2025 – Aug 31 2026, INR) — ingested 2026-09-20 via `scripts/planner-report.py`.
- api.frankfurter.app INR→USD rate — fetched 2026-09-20 (1 INR = 0.01043 USD).
- [valueidentifier.app](https://www.valueidentifier.app/) — fetched 2026-09-19, generic collectibles scanner, no board-game-specific content.
- [minti-app.com](https://minti-app.com/) — fetched 2026-09-19, generic collectibles scanner (JS app shell), no board-game-specific content.
- [BGG: Pandemic Legacy Reset Kit filepage](https://boardgamegeek.com/filepage/125892/pandemic-legacy-reset-kit) — fetched 2026-09-19, confirms fan-made free PnP kit, not an official commercial product; comment thread 2016–2024.
- [BGG thread 2485472: Aeon's End Legacy reselling after resetting](https://boardgamegeek.com/thread/2485472) — dated 16 Aug 2020, hedged/uncertain answers.
- [Amazon Associates operating agreement](https://affiliate-program.amazon.com/help/operating/agreement) — fetched 2026-09-19, "Updated: October 15, 2025", mechanism live, Toys & Games rate login-gated/unknown.
- [Noble Knight Games: Referrals and Links](https://www.nobleknight.com/Referrals-And-Links) — banner-exchange only, no commissioned affiliate program; ruled out as a route.
- Bing: `gloomhaven official reset pack cephalofair buy` — fetched 2026-09-19, surfaced Cephalofair's own Gloomhaven collection.
- Bing: `cephalofair store "reset pack" gloomhaven price` — fetched 2026-09-19, surfaced the Jaws of the Lion Removable Sticker & Map (Reset Pack) product.
- Bing: `pandemic legacy reset kit official zman games buy` — fetched 2026-09-19, no official reset-kit SKU found, only base-game product pages.
- Google autocomplete (curl, realistic Chrome UA, `suggestqueries.google.com`) — fan-out across 6 head queries + 4 resale-phrasing variants, 2026-09-19.
- Two dated Facebook posts on Pandemic Legacy resetting (17 Apr 2024, 2 Jan 2026) — surfaced via Bing search, not opened directly (platform login wall).
- moderncollege.net — dead end, Cloudflare 522 error on direct open despite a plausible SERP snippet.
- Reddit `search.rss` — HTTP 429, not retried (repo memory: anon rate limit ~1/45s).
- Lemmy (`lemmy.world`) — DNS resolution failure (`socket.gaierror`), not retried.
- DDG (`html.duckduckgo.com`) — served a redirect/landing page for pain-source queries this session, treated as blocked; Bing used as fallback (matches prior scout run's pattern for this niche).
