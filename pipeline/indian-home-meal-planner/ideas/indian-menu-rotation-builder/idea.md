# Indian menu rotation builder

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

Tick the dishes your household actually eats → generate a 7/14/30-day rotation chart (breakfast/lunch/dinner), printable and WhatsApp-shareable — a menu you hand to your cook (or stick on the fridge) so nobody has to decide daily. localStorage only, regenerate anytime.

## Hook

Existing Indian meal planners hand you *their* menu or an AI plan; none build a no-decision rotation from *your own* dish list and output a printable/shareable chart for the household cook — the "what do I tell my cook" artifact, not another suggestion feed.

## Gate results

1. Answer-it — pass: an LLM can draft one menu, but the value is the reusable, editable, regenerable household artifact.
2. Static feasibility — pass: client-side generator + localStorage + print CSS; no accounts (user's full "app" version was killed on gate 2 — this is the static variant).
3. Maintainable data — pass: dish list is user-supplied + a static starter catalog.
4. Specific hook — **near-miss**: khanakyabanau.in/meal-plans, forjitai.in/tools/indian-cooking-planner, zerosoch.app/planner, toolzfy.in, familyplate.ai all sit on the planner SERP. Differentiator (own-dish-list rotation + hand-to-cook printable) not confirmed absent — validate must open these.
5. Legal/policy — pass (no diet/medical claims; weight-loss/diabetic variants excluded).
6. US market — pass with note: "weekly menu for indian family", "7 day weekly meal plan kid friendly indian vegetarian pdf" returned via gl=us; the hired-cook framing skews India, the fridge-chart framing is diaspora-fit.

## Evidence

- Autocomplete (gl=us): "weekly menu for indian family", "family weekly indian meal planning chart", "7 day weekly meal plan kid friendly indian vegetarian pdf", "healthy indian weekly meal plan", "indian meal planner app free", "best indian meal planner app".
- Community behavior: r/IndianFood thread crowdsourcing exactly this artifact — "I will try to put my weekly plan together and share it here." — https://www.reddit.com/r/IndianFood/comments/672dq4/post_your_weekly_meal_plan_here/
- Product gap: only Indian-specific planner app in US App Store is PlanNEat (id 6761127147) with 0 ratings; generic planners (MealBoard 2786 ratings, Plan to Eat 6107) have no Indian dish canon. (iTunes Search API, this run.)
- Incumbents (near-miss list): https://www.khanakyabanau.in/meal-plans, https://www.forjitai.in/tools/indian-cooking-planner, https://www.zerosoch.app/planner, https://toolzfy.in/recipe/meal-planner, https://www.familyplate.ai/meal-plan/indian
- Search volume / CPC / trends: unknown (Trends 429; no Keyword Planner).

## History

- 2026-08-29 — candidate, marked weak (emitted by scout run; gate-4 near-miss)
- 2026-08-29 — rejected on validation: gate 4 disproved. The own-dish-list rotation → printable/hand-to-cook chart is already served — khanakyabanau.in (editable "type your own … drag it", PDF export, download in 10 Indian languages, "Decide Once a Week, Not Three Times a Day"), free fill-your-own printable weekly-menu templates (kitchenflavours.net + Pinterest/blogs), and an Etsy "4-week Rotating Meal Plan | Canva Customisable" template; SERP also carries planneat.in (800+ dishes), forjitai.in, indianmealplanner.in. Demand real but generic; confidence medium (no CSV — not needed for the kill). See dossier.md.
