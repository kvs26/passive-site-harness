# Trail Menu Optimizer (real products, weight and volume constrained)

Status: rejected
Origin: ../../runs/2026-10-09-scout.md

## Idea

Choose nights, people, calories/day, diet, budget, and a max pack weight or canister volume. The tool picks a menu from a database of real branded trail foods and grocery items (per-serving kcal, grams, packed volume, protein, price, prep needs), minimizing weight or volume under calorie, protein, variety, and budget constraints, and outputs a shopping list and daily bags.

## Edge

- **Dataset:** a few hundred real products with measured weight, packed volume, kcal, macros, price. Nutrition labels are public (single source = weak moat); packed volume and prep need are hand-measured per row.
- **Compute:** constrained optimization (knapsack/LP-style) with variety and meal-slot rules, genuinely non-trivial.
- **Long-tail surface:** per product, per trip-length menus, per diet (vegan, GF).
- **Monetization route:** affiliate, Amazon Associates (Grocery rate unknown) and brand/retailer programs unknown.

## Hook

Generic food-weight calculators use average kcal/oz (miniwebtool, opened, updated June 13 2026) and wild10 meal planner is AI/recipe based. No opened tool builds a constrained menu from real SKUs. Weak: other planners likely exist, Backpacker article not accessible.

## Incumbent probe

Dated 2026-10-09. Opened: miniwebtool backpacking food weight calculator (formula, burn-down, no products), wild10 meal-planner (AI recipe planner). Backpacker "clever tool" article redirected to login, unseen. SERP blocked.

## AIO probe

Predict only. Open-ended menu generation is AIO-prone for generic menus, not for constrained SKU menus. Owed.

## Gate results

- **1 AIO:** unverified.
- **2 Static feasibility:** pass.
- **3 Data moat:** weak (labels public; measured volume is the only moat). Upkeep high due to SKU churn and prices.
- **4 Hook served:** unverified, risk.
- **5 Legal:** pass.
- **6 US-market:** pass.
- **7 Monetization:** pass on route, rate unknown. Price data goes stale; avoid showing prices.

## Evidence

- miniwebtool page opened 2026-10-09 (formula tool, density presets 90/125/150 kcal/oz).
- Demand numbers `unknown`.

## History

- 2026-10-09: candidate (scout run). Weak, flagged. Best used as the compute engine inside bear-canister-trip-fit-planner rather than standalone.
- 2026-10-17 — rejected (confidence: medium). Gate 4 disproved: PackByte (packbyte.app, 200+ verified items, cal/oz + weight optimizer, shopping list with buy links) and Backcountry Foodie (1,000+ commercial foods, shopping lists) already serve the real-SKU constrained menu. Amazon Grocery pays 1.00%. Canister volume is the only unserved angle; keep it as an engine idea inside bear-canister-trip-fit-planner. See [dossier](dossier.md) and [run log](../../runs/2026-10-17-validate-trail-menu-volume-optimizer.md).


## Demand (Keyword Planner 2026-10-09, screen 2, US)

Stays weak. Total ~73.3K/mo but 50K is brand 'mountain house meals'; backpacking meals/food/breakfast 5K each are recipe/listicle intent. Planner/calculator intent ~650 total. Keep only as engine inside bear-canister planner.
CSV: pipeline/demand-csv/2026-10-09-screen2.csv
