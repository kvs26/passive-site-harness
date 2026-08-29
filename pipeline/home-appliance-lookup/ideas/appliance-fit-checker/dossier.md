# Dossier: Appliance Fit Checker

**"Will it fit?" checker (model/dimensions + doorway → verdict with doors-off/handles-off depths and turn-radius) — rejected at medium confidence: real demand, but the exact hook (per-model appliance fit verdict with doors-off/handles-off guidance) is already served by a maintained purpose-built incumbent (itemfits.com) plus a second calculator and OEM guidance on the SERP.**

## Signal scorecard

**Demand: strong** — the tool-intent phrasing and dimension-specific variants recur across autocomplete, and an incumbent tool publicly counts ~98k questions answered.
  - Google autocomplete (gl=us, fetched 2026-08-29) surfaces the calculator intent verbatim: "will my refrigerator fit calculator", "will my fridge fit calculator", plus "what if my fridge doesn't fit through the door". (scripts/fanout.py, this run)
  - Dimension-specific washer/dryer variants (real tool use-case): "will a 27 inch washer fit through a 27 inch door", "will a washer and dryer fit through a 30 inch door", "will a washer fit through a 32 inch door". (scripts/fanout.py, this run)
  - Incumbent usage counter: "98,186 questions answered" on itemfits.com/fit/door/fridge (fetched 2026-08-29) — independent confirmation people repeatedly ask this.

**SERP & competitor weakness: weak** — the SERP is not beatable; it already contains two purpose-built fit calculators plus an OEM measuring page, not just prose.
  - itemfits.com/fit/door/fridge ranks organically: "Enter fridge and doorway sizes for a verdict that accounts for handles, hinges, and dolly height — plus how to remove doors if it's tight." (DuckDuckGo Lite SERP for "will my refrigerator fit through the door", fetched 2026-08-29)
  - meltflexai.com/blog/will-my-fridge-fit-through-the-door (dated 2026-07-12): "compare it to the clear opening, and check our free calculator" — a *second*, recent calculator competitor. (same SERP)
  - GE Appliances official measuring page + guide sites (appliancesfirst.com, myhomeniche.com) fill the remaining slots. (same SERP)

**Hook depth: weak** — the differentiator (a per-model verdict that knows a specific model's doors-off/handles-off dimensions and the turn-radius gotchas) is exactly what itemfits already ships; there is no one-sentence beat left.
  - Per-model appliance fit pages already exist: "Samsung Bespoke refrigerator — About 35.9 in wide", "LG Craft Ice refrigerator — About 35.75 in wide", "Whirlpool french door refrigerator — About 35.7 in wide", "GE Profile refrigerator — About 35.6 in wide"; page states "Check a specific model or a general appliance against your doorways." (itemfits.com/fit/appliances, fetched 2026-08-29)
  - The buried gotchas the idea claimed to surface are already surfaced: doors-off ("French door and side-by-side models shed 3–5 inches of width once the doors come off"), handles ("outermost handle point, not just the fridge body"), water line ("braided steel line ... adds 2–4 inches of depth"), dolly height, and hallway turn ("the hallway in front of the door determines your turning radius"). (itemfits.com/fit/door/fridge and /fit/door, fetched 2026-08-29)
  - Point-of-purchase per-model dimensions are also covered by their Chrome/Shopify extension: "Reads product dimensions automatically — 500+ retailers." (itemfits.com, fetched 2026-08-29)

**Monetization paths: weak** — a normal display-ad / appliance-affiliate vertical, evidenced by ad-supported competitors, but no CPC data this run (no Keyword Planner CSV) so no strong read.
  - Content competitors in the SERP are ad-monetized guide sites (appliancesfirst.com, myhomeniche.com). (DuckDuckGo Lite SERP, fetched 2026-08-29)
  - No `keyword-planner.csv` for this idea → top-of-page bids unquantified; USD-equiv bid check not possible this run.

**Feasibility & maintenance: strong** — a client-side calculator with per-model dims compiled from public spec sheets is genuinely buildable and low-maintenance; this was never the blocker.
  - Verdict math is arithmetic on clear-opening vs. width/handles/doors-off; itemfits documents the same inputs on published standards (IRC R311.2 32" egress, ADA 404), confirming the compute is standard and static. (itemfits.com/fit/door, fetched 2026-08-29)
  - Installed base people actually move is static; new-model additions are incremental, not a refresh treadmill. (idea.md gate-3 reasoning, re-confirmed)

**Unique-data opportunity: weak** — a comprehensive per-model doors-off *depth* table could in principle be unique, but the one moat available is exactly the corpus itemfits is already building (auto-read product dims + per-model pages + "thousands of real checks" dataset).
  - itemfits publishes its own derived dataset ("from our fit data ... not generic spec tables": state-of-will-it-fit, what-stops-things-fitting, which-items-fit). (itemfits.com/fit/door, fetched 2026-08-29)

## SERP snapshot

Query: **"will my refrigerator fit through the door"** — DuckDuckGo Lite (All Regions), fetched 2026-08-29:

1. appliancesfirst.com — "Will My Refrigerator Fit Through the Door? A Comprehensive Guide" (measuring prose)
2. meltflexai.com/blog/will-my-fridge-fit-through-the-door (2026-07-12) — guide + **free calculator**
3. **itemfits.com/fit/door/fridge** — dedicated **doorway calculator** (handles/hinges/dolly, doors-off)
4. myhomeniche.com — guide prose
5. itemfits.com/blog/will-refrigerator-fit-through-door (2026-02-14) — measuring guide
6. GE Appliances — official refrigerator measurements page

Why it's not beatable: the scout premise was "no tool computes the verdict from your numbers." That is now false — **two** purpose-built calculators (itemfits, meltflexai) rank on page one, itemfits carries a **per-model** appliance-fit collection, and the OEM (GE) owns the authoritative measuring slot. There's no unserved cut for a one-sentence beat.

## Keyword data

No `keyword-planner.csv` for this idea. Demand volume and top-of-page CPC are unquantified this run; the rejection does not rest on volume (it rests on the served hook), so no export was requested. If revisited, request buckets/bids for: `will my refrigerator fit through the door`, `will my fridge fit calculator`, `will a washer fit through a [30/32] inch door`, `refrigerator doors off depth`, `counter depth refrigerator dimensions`.

## Monetization sketch

If ever built: display ads (home/moving vertical) above and beside the verdict, plus appliance-retailer affiliate links on the result ("doesn't fit — see counter-depth models"). Competitors already monetize this way (ad-supported guide sites) or via SaaS/extension (itemfits). Not a differentiator.

## Risks & unknowns

- **Search volume & CPC — unknown**: no Keyword Planner CSV this run (caps confidence at medium). Searched for demand proxies via autocomplete + incumbent usage counter instead.
- **Per-model doors-off *depth* specifically**: itemfits per-model pages I inspected list *width* ("About 35.9 in wide"), not a per-model doors-off depth column — a narrow, undefended gap. But it is thin differentiation against an actively-expanding, daily-updated incumbent with auto-read product dimensions, and does not amount to a one-sentence beat. Not enough to overturn the gate-4 rejection.
- **meltflexai calculator depth** not opened this run (SERP snippet only); irrelevant to the verdict since itemfits alone already serves the hook.

## Sources log

- scripts/fanout.py — Google autocomplete (gl=us), seeds: "will my refrigerator fit", "will my fridge fit through", "refrigerator doorway clearance", "refrigerator doors off to fit", "will washer fit through door", "will appliance fit through door", "how wide door for refrigerator", "counter depth fridge fit" — ✅ worked (tool-intent + dimension-specific variants)
- scripts/pain-fetch.py hn "refrigerator fit through door" — ✅ worked but thin (no on-topic fit complaints; off-topic hits only)
- scripts/pain-fetch.py ddg — ❌ empty (bot challenge, as in scout)
- itemfits.com (home) — ✅ general-purpose "will it fit" tool; Door Fit Calculator; Chrome + Shopify extensions
- itemfits.com/fit/door — ✅ doors-off/handles/trim/turning-radius verdict logic; published-standards refs (IRC/IBC/ADA); methodology/formulas
- itemfits.com/fit/appliances — ✅ **per-model** appliance fit pages (Samsung/LG/Whirlpool/GE) + "check a specific model"
- itemfits.com/fit/door/fridge — ✅ fridge verdict calc; "98,186 questions answered"; water-line/dolly gotchas
- itemfits.com/fit/moving — ✅ moving-day route chaining (door→hallway→stairs→elevator)
- DuckDuckGo Lite SERP "will my refrigerator fit through the door" (All Regions) — ✅ full organic top-6 captured
- Bing SERP (integrated browser) — ❌ returned personalized/junk results, not usable
- Google SERP direct fetch — ❌ JS challenge/redirect, not usable
