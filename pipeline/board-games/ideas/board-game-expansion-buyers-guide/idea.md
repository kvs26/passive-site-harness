# Board Game Expansion Buyer's Guide

Status: validated
Origin: ../../runs/2026-09-18-scout.md

## Idea

A per-game interactive expansion guide: for each base game, every expansion ranked by "worth it," in a recommended buy-order, with a base-game-required flag and a one-line "what it adds / fixes" — filterable by what you already own and your group.

## Edge

- **Dataset:** every expansion for each popular base game, each row carrying: base-game-required (yes/no), what-it-adds, what-it-fixes, community worth-it verdict, and rough price band. Built by **merging** the official rulebook/publisher expansion list + BGG ratings/weights + review consensus, with **per-row editorial judgment** on buy-order and "worth it" (the part an AI farm can't fake without playing). Merge-2+-sources + judgment moat.
- **Compute:** per-query on the user's own inputs — "I own the base + expansion A, my group is 3 casual players; what should I buy next?" → a ranked, filtered next-buy list. Not a single-answer lookup.
- **Long-tail surface:** one page per base game (`/catan/expansions`), one per expansion, plus buy-order combo pages — thousands of pages generated from the dataset.
- **Monetization route:** affiliate — Amazon Associates (US), Toys & Games. Expansions are direct Amazon purchases and the query is high-intent ("which expansion should I buy"). Exact category commission rate `unknown` — must be read from Associates Central at validate; do NOT trust SEO-blog "games 20%" (that conflates digital games). Products noted here are documented-only; enabling checkout links is a manual per-site act.

## Hook

Global "best expansions" listicles and a yes/no "does it need the base game" checker exist — none gives you a *per-game, ranked, buy-in-this-order, worth-it* verdict filtered by what you already own.

## Incumbent probe

Dated 2026-09-18. Queries run on Google: `board game expansion compatibility checker which edition works with`; `board game expansions ranked worth it which to buy guide per game`. Top hits fetched/opened: **"Board Game Expansion Checker: Does It Need the Base Game?"** (yes/no base-required only — does not rank or advise buy-order); global listicles **"The 9 Best Board Game Expansions Ranked (And When to...)"**, **"Top 10 Board Game Expansions"**; BGG forum **"An attempt at an expansion buying guide"**; per-popular-game YouTube/blogs (**"The Complete 7 Wonders Buyer's Guide"**). Confirmed gap: no systematic per-game interactive ranker that combines base-required + buy-order + worth-it + own-what-you-have filtering. Affiliate disclosures spotted on incumbents: per-game buyer-guide blogs are affiliate-monetized (buying intent confirmed). SERP evidence expires ~2026-10-16.

## AIO probe

Manual google.com checkpoint completed 2026-09-20 (validate top-up). Five head queries checked directly: "catan expansions ranked", "which catan expansion should i buy first", and "dominion expansions ranked" showed **no AI Overview** (straight to Web results). "catan seafarers vs cities and knights" showed an AI Overview, but it only describes each expansion's focus/mechanics — no ranking, buy-order, or ownership filtering. "which expansion should i buy first" (no game named) also showed an AI Overview, but answered for an unrelated domain (Guild Wars 2), confirming the generic phrasing doesn't reach our niche. `&udm=14` control confirmed the AIO-free baseline. Confirmed low AIO risk at evidence level — the per-user, own-what-you-have ranked next-buy wedge survives past every AIO seen.

## Gate results

- **1 AIO:** pass — confirmed at evidence level 2026-09-20 (manual checkpoint complete; core head queries show no AIO, and the one AIO seen doesn't rank/filter).
- **2 Static feasibility:** pass — static site over a curated dataset + client-side filter; no backend/accounts.
- **3 Data moat:** pass — merges publisher list + BGG data + review consensus with per-row worth-it/buy-order judgment; upkeep is periodic (new expansions release slowly) — well within the ~3 hr/week cap.
- **4 Hook served:** pass — differentiated cut; incumbents are yes/no checker + global listicles, not a per-game ranked own-aware guide (see probe).
- **5 Legal/policy:** pass — public product facts + opinion; no scraping-hostile or advice-regulated data.
- **6 US-market:** pass — US board-game buyers; Amazon US affiliate.
- **7 Monetization:** pass via **affiliate** (Amazon Associates Toys & Games; high buying intent). Exact rate to verify.

## Evidence

- SE `boardgames` q/5941 — "I have the Alhambra base set only, in which order should I buy the expansions?" https://boardgames.stackexchange.com/q/5941 (verbatim buy-order demand).
- Google SERP 2026-09-18: named incumbent "Board Game Expansion Checker: Does It Need the Base Game?" (yes/no base-required only); global listicle "The 9 Best Board Game Expansions Ranked (And When to...)"; BGG forum "An attempt at an expansion buying guide"; "The Complete 7 Wonders Buyer's Guide".
- Amazon Associates Toys & Games commission rate: `unknown` (verify at validate against Associates Central fee schedule).

## History

- 2026-09-18 — candidate (emitted by scout run, deeper re-dig pass)
- 2026-09-18 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Also owed: manual Google AIO checkpoint (blocked by CAPTCHA this run) — re-run before build. Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate. See [dossier.md](dossier.md).
- 2026-09-20 — validated (confidence: high). Cheap top-up: keyword-planner.csv ingested (catan expansions 50K bucket, dominion expansions 5K bucket — corroborates Demand); Amazon Associates Toys rate (3.00%) + 24hr/89-day cookie window verified verbatim, upgrading Monetization to strong. SERP/AIO evidence expires 2026-10-16 (unchanged — not re-probed this run); manual Google AIO checkpoint still owed before build per the standing pre-build re-probe rule.
- 2026-09-20 — manual Google AIO checkpoint completed (no CAPTCHA this run): 5 head queries checked, `&udm=14` control run. Core buy-order/ranked queries show no AIO; the one AIO seen (comparison-form) only describes, doesn't rank/filter — wedge intact. No kill-level finding. SERP/AIO evidence expiry moved to 2026-10-18 (4 weeks from this AIO re-probe). See [dossier.md](dossier.md).
