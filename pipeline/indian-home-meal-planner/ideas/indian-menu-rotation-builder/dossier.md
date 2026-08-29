# Dossier: Indian menu rotation builder

**Idea: a client-side tool to tick the dishes your household eats → generate a printable/shareable 7/14/30-day rotation chart to hand your cook; hook = the "own-dish-list rotation artifact," not another suggestion feed — REJECTED, gate-4 disproved (hook served by editable Indian planners + free printable templates + an Etsy rotating-plan template). Confidence medium (no CSV, but not needed for the kill).**

## Signal scorecard

**Demand: strong** — generic Indian weekly-meal-plan / chart / template demand recurs across autocomplete and a dense blog+tool SERP; but the *rotation-from-your-own-list* framing is not itself a searched query.
  - Autocomplete (fanout.py, hl=en gl=us, this run): "indian meal plan chart", "indian weekly food chart", "family weekly indian meal planning chart", "indian meal plan pdf", "indian meal plan generator", "indian meal plan weekly", "indian weekly meal plan vegetarian". (Note: autocomplete is dominated by diet/medical — "…for weight loss / diabetes / pcos / pregnancy / toddler" — and delivery — "…dubai / toronto / near me" — both out of scope.)
  - "Rotation" is a real generic mental model: "dinner meal rotation", "dinner rotation ideas", "meal plan builder", "meal plan creator", "meal plan calendar" (fanout.py, this run) — but generic, not Indian-specific.
  - Scout Reddit recurrence (prior run, not re-fetched this run — treat as corroborating, not primary): r/IndianTeenagers 12jnmdo, r/IndianFood 672dq4, r/recipes 2yv16y.

**SERP & competitor weakness: weak (SERP is saturated → not beatable)** — the idea's exact artifact query returns dedicated Indian planners *and* free printable templates *and* a rotating-plan product. This is the kill.
  - Bing "indian meal rotation chart printable weekly menu builder" — "About 53,500 results" (fetched this run, https://www.bing.com/search?q=indian+meal+rotation+chart+printable+weekly+menu+builder). Top organic:
    - planneat.in — "PlanNEat: Indian Meal Planner with AI & Grocery List … Plan a week of home-style Indian meals with AI. 800+ dishes, 50+ cuisines … auto grocery" (https://planneat.in)
    - forjitai.in/tools/indian-cooking-planner — "Indian Cooking Planner — 72 Recipes, Weekly Meal Plan & Shopping … Adjust servings, rate recipes, track what you …"
    - indianmealplanner.in — "Ultimate Indian Meal Planner for Families … Plan meals in minutes with automatic grocery lists"
    - khanakyabanau.in/meal-plans (see hook depth)
    - Free fill-your-own templates: kitchenflavours.net — "Download the free weekly meal plan template now"; plus Pinterest/blog printable weekly Indian menu charts (vidhyashomecooking.com ×2, mytastycurry.com, whatparentsask.com, rakskitchen.net).
    - Etsy image result: "4-week Rotating Meal Plan | Digital Template | Canva Customisable" — a customizable *rotating* plan product already sold.

**Hook depth: weak** — the differentiator ("build a no-decision rotation from your own dishes → printable/shareable chart for the household cook") is already served three independent ways.
  - Editable + printable in the cook's language: khanakyabanau.in homepage (fetched this run, https://www.khanakyabanau.in/) — "type your own, or drag it to a different day — nothing is locked in"; "Download the plan and list in Hindi, Marathi, Bengali, Tamil, Telugu, Gujarati, Kannada, Malayalam, Punjabi or English"; "Tick off what you have and download the rest as a PDF." Same anti-decision-fatigue framing as the idea: "Answer the Daily Question, Once a Week" / "Decide Once a Week, Not Three Times a Day."
  - Fill-your-own printable: free blank weekly Indian menu templates (kitchenflavours.net + Pinterest chart images, this run) already are the "print and stick on the fridge / hand over" artifact.
  - Rotating-cycle artifact: Etsy "4-week Rotating Meal Plan … Canva Customisable" (this run) is literally a customizable rotation you fill with your own dishes.

**Monetization: strong** — ad-driven generic-tool competitors and commercial adjacent intent exist; moot given the kill.
  - tooliro.com (Niche Utils) serves AdSense in this space (observed googleads request, publisher ca-pub-8251732556629149, this run).
  - Commercial adjacency in autocomplete: "indian meal plan delivery", "indian meal plan service", "indian meal service near me" (grocery/meal-kit affiliate routes).

**Feasibility & maintenance: strong** — the static variant is genuinely buildable and low-maintenance.
  - Client-side generator + localStorage + print CSS; dish list is user-supplied + a static starter catalog (no external data, no refresh burden). Competitors confirm the catalog is commodity (planneat "800+ dishes", forjitai "72 recipes").

**Unique-data opportunity: weak** — no dataset competitors lack; the dish canon is commodity and already shipped at larger scale by incumbents (planneat 800+, forjitai 72). No derivable structure identified that the printable-template + editable-planner incumbents don't already cover.

## SERP snapshot

Query: **"indian meal rotation chart printable weekly menu builder"** — Bing, ~53,500 results (this run).
1. Scribd — "Weekly Indian Meal Plan Guide | PDF" (static PDF).
2. Image pack + related searches: "Indian Food Weekly Menu Planner", "Weekly Indian Meal Plan Template", "Indian Meal Planning Chart", "Meal Rotation Planner", plus Etsy "4-week Rotating Meal Plan | Canva Customisable".
3. khanakyabanau.in/meal-plans — 24 curated plans, import + edit, PDF, multilingual.
4. vidhyashomecooking.com — weekly South Indian meal planner (blog, per-day menu tabs).
5. planneat.in — AI Indian meal planner, 800+ dishes, auto grocery.
6. forjitai.in/tools/indian-cooking-planner — 72-recipe weekly planner + shopping list.
7. indianmealplanner.in — family Indian meal planner, automatic grocery lists.
8. Blog weekly planners w/ free templates: kitchenflavours.net, mytastycurry.com.

Why not beatable: the head query is simultaneously served by (a) polished, multi-platform, editable Indian planners with PDF export in the cook's language, (b) an abundance of free printable fill-your-own weekly-menu templates, and (c) a paid customizable *rotating* plan template on Etsy. The idea's distinctive artifact has no unserved gap.

## Keyword data

No `keyword-planner.csv` present. Not requested — the rejection rests on gate-4 SERP saturation and served-hook evidence (fetched this run), which volume data would not overturn (cf. sticker-monetization-directory, fridge-filter-cert-checker kills). Confidence capped at medium by the missing CSV per the rubric.

## Monetization sketch

Had it survived: AdSense on a static generator (precedent: tooliro AdSense in this exact space) plus grocery/meal-kit affiliate on the shopping-list output. Route is fine; it is not the blocker.

## Risks & unknowns

- **Search volume / CPC / Trends: unknown** — no Keyword Planner CSV this run; Google Trends not attempted (429 in scout). Would not change the gate-4 kill.
- **Rotation-specific demand: unknown/weak** — searched autocomplete for "meal rotation / rotating dinner menu / fixed weekly menu"; the rotation concept exists generically but no Indian-specific rotation query surfaced.
- **Reddit recurrence not re-verified this run** — DDG `site:reddit.com` hit captcha; relied on scout links as corroboration only, not primary evidence.

## Sources log

- `scripts/fanout.py` (hl=en gl=us) — seeds: "indian meal rotation", "weekly indian menu chart", "indian family meal plan printable", "rotating menu indian", "monthly indian menu"; and "meal rotation", "rotating dinner menu", "fixed weekly menu", "meal plan same meals". Result: generic planner/chart demand + diet/delivery domination; rotation is a generic mental model.
- html.duckduckgo.com `site:reddit.com` (meal rotation own list; indian give cook menu list) — **captcha-blocked**, no results.
- Playwright browser:
  - https://www.khanakyabanau.in/meal-plans — 24 curated plans, filters, "Import any plan into your own planner in one click."
  - https://www.khanakyabanau.in/ — editable ("type your own … drag it"), PDF export, multilingual download, "Decide Once a Week, Not Three Times a Day", Play + App Store apps.
  - https://www.tooliro.com/tools/weekly-meal-rotation-generator — **404 (dead since scout)**; site runs AdSense.
  - https://www.bing.com/search?q=indian+meal+rotation+chart+printable+weekly+menu+builder — full incumbent SERP (planneat.in, forjitai.in, indianmealplanner.in, khanakyabanau, blog templates, Etsy rotating template).
- iTunes / prior scout evidence (PlanNEat 0-ratings) — not re-verified this run.
