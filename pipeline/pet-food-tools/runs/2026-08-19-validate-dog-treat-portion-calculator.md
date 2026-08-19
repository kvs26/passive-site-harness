# Validate run — 2026-08-19 — dog-treat-portion-calculator

One idea, one session. Fresh validation (no prior dossier). Outcome: **parked** at **medium** confidence — full six-signal dig done, but no Keyword Planner CSV yet.

## Setup

- Context read: `idea.md`, origin scout log `runs/2026-08-17-scout.md`, `niche.md` (US default). No prior `dossier.md`. No `keyword-planner.csv` / `keywords-request.md` existed → missing-CSV path.
- Tools: Playwright MCP available (used for all SERP/competitor/pain fetches). Brave MCP needs a key (none) — skipped. `scripts/fanout.py` for autocomplete. `scripts/pain-fetch.py ddg` bot-challenged again (empty) → Playwright browser for Reddit via DDG.

## What was dug

1. **Demand** — `fanout.py` over 11 per-food seeds → dense per-food × per-size × per-day × "calculator" tail. Reddit (via DDG browser) on blueberries and carrots: recurring "how many/how much is too much" threads across r/AskVet, r/dogs, r/DogAdvice, r/puppy101, r/coolguides, 2015→2024. **Strong.**
2. **SERP** — blueberry-calculator SERP (all static articles) + carrot-calculator SERP (all articles, top result an AI-spun "1/2 clove" page) + caneat.pet/tools re-fetch (no treat-portion tool). **Strong** on target-query beatability.
3. **Hook depth** — carrot threads show owners anchoring quantity to dog weight and manually tracking per-fruit calories; a vet answers in kcal. **Strong.**
4. **Monetization** — bestpetfacts (AdSense+Ezoic+Amazon) and fluffytamer (Grow.me) monetize the exact article queries. **Strong**, with low-CPC/volume caveat + tool incumbents ad-free. No CPC numbers (no CSV).
5. **Feasibility** — USDA FoodData Central re-verified live; VCA/AKC/AAHA document the 10% rule. Client-side static build, ≤quarterly. **Strong.**
6. **Unique data** — **weak**: furcalc.com/dog/treat-calorie-calculator already does food→count for ~25 options, partially disproving the scout's "only tool" premise. Surviving edge = breadth (100+ foods) + long-tail ranking, which is USDA-derivable, not a moat.

## Key finding / correction to scout

The scout framed this as an unserved mechanic. Re-check found **FurCalc** — a working, non-ranking treat-calorie calculator with a food dropdown that outputs counts. The gap is narrower than "only tool": it's **catalog breadth + ranking for per-food long-tail queries**, not a novel calculation. Logged as the primary erosion risk. Not fatal (FurCalc is generic, ad-free, and absent from every per-food SERP checked), so not a gate-4 kill — but it downgrades unique-data to weak.

## Keyword Planner checkpoint

No CSV. Wrote `keywords-request.md` (~24 keywords, grouped head / variants / hook-specific / monetization-CPC) built from this run's autocomplete + pain queries. Finished the full dig regardless and parked.

## Dead ends / inconclusive

- `scripts/pain-fetch.py ddg` — bot-challenged, empty (recurring). Browser fallback worked.
- `site:reddit.com … OR …` query returned noise (r/cringe, r/nekoatsume) — DDG mishandled the OR; re-ran per-food instead.
- No free per-keyword volume/CPC source — the Keyword Planner gap; volume ceiling unproven.

## Outcome

- Status: candidate → **parked**.
- Dossier written (medium confidence). Board regenerated.
- No comparison brief: only 1 idea `validated` in this niche (parked ideas don't count; ≥3 needed).

Parked — export Keyword Planner data for the keywords in `keywords-request.md` to `keyword-planner.csv`, then re-run validate on this idea to finish.

## Top-up (same day, 2026-08-19)

Human exported the Keyword Planner CSV and supplied it later this session. Ingested via `scripts/planner-report.py` (INR/tab-separated export parsed cleanly). USD conversion at 1 INR = 0.010442 (open.er-api.com, fetched this run).

- **Demand → upgraded to Keyword-Planner-backed strong**: core per-food head-term group sums to ~13,100 (well above the 5K bar): carrots 5000, peanut butter 5000, blueberries/cheese/strawberries/watermelon/banana 500 each.
- **New finding**: literal "calculator"-branded phrasing has almost no volume (50 bucket or absent, one at -100% trend) — demand is for the informational question, not the tool name. Logged as a positioning risk in the dossier, not a kill.
- **Monetization → upgraded**: per-food long-tail bids confirmed < $0.10 USD-equiv (as expected/low); generic commercial terms ("best healthy dog treats", "dog calorie calculator", "dog treats for training") bid $0.70+ — new secondary monetization angle.
- **Confidence**: medium → high (no signal unknown; demand + SERP-weakness each ≥2 independent sources; CSV now present).
- **Status**: parked → validated. Unique-data stays weak (FurCalc precedent unchanged) — not a rejection trigger since demand didn't collapse.
- Comparison brief check: 2 ideas validated in this niche (can-my-dog-eat-database, dog-treat-portion-calculator) — below the ≥3 trigger; no brief written.

