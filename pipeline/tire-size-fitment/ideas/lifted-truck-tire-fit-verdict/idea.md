# Idea: lifted-truck-tire-fit-verdict

## Status
candidate (scouted 2026-10-09)

## Origin
Scout run 2026-10-09 (tire-size-fitment). Inversion: what does a truck owner need answered before buying bigger tires? "Will 33s/35s fit my F-150/4Runner/Wrangler with my leveling kit and these wheels, and what will I have to trim?"
Strength: **moderate**. Real demand and a clear gap outside Tacoma, but tacotires.com proves the exact shape works for one platform and could expand. The dataset (verified clearance per platform/lift/offset) is labor-heavy to build honestly.

## Idea
A multi-platform fit-verdict tool for popular US trucks/SUVs other than the Tacoma (F-150, Silverado/Sierra 1500, Ram 1500, Tundra, 4Runner, Wrangler/Gladiator, Bronco, Colorado/Canyon, Frontier). Inputs: platform/generation, lift (stock / level / 2–6in), wheel offset, and how much trimming you'll accept. Output: the biggest size that fits, a no-rub/rub/trim verdict for a chosen size, the trimming steps, speedometer error, effective gear ratio and regear flag, and a load-index check against OEM.

## Edge
- **Dataset:** per platform/generation: OEM sizes per trim (owner's manuals), stock wheel offset/backspacing, and per-lift-tier clearance verdicts sourced from kit-maker fitment charts and documented owner builds. Every row cites a source; no source means no verdict.
- **Compute:** combines size × lift × offset × trim tolerance into a verdict, plus speedometer, gearing and load math.
- **Long-tail:** per platform × size pages ("33s on a leveled 2021 F-150"), per platform × lift tier pages, per size pages.
- **Monetization:** Tire Rack affiliate, 6% commission, "average order value is more than $400" (tirerack.com/affiliate). Leveling/lift kits and wheels on Amazon as a secondary route (rate not checked this run).

## Hook
"Will 33-inch tires fit my F-150 with a leveling kit, and do I need to trim?" answered in one verdict, specific to my platform, with sources.

## Demand
Keyword Planner, US, Sep 2025–Aug 2026 (pipeline/demand-csv/2026-10-09-demand-screen.csv):
- tire size calculator: 500K/mo (head term, served by many tools)
- what size tires fit my car: 5K
- tire size by vehicle: 500
- will 33 inch tires fit my truck: 50
- plus size tires: 50
Platform-specific long tail ("f150 leveling kit tire size" etc.) was not in the screen. Pull it at validation.

## Incumbent probe (2026-10-09)
- **tacotires.com** (updated 2026-08-16): Tacoma-only. Max-tire calculator takes generation, lift height, wheel offset and trim willingness. It returns max size, a trimming ladder (mud flaps, liner, pinch weld, cab mount chop), and regear/speedo flags, plus a per-generation "least lift each size needs" table. **Serves the hook WELL for Tacoma**, so Tacoma is excluded.
- **tirecalculatorhub.com**: vehicle-specific calculators (F-150, RAM, GMC, Jeep, Toyota incl. 4Runner/Tundra, Tacoma). They give OEM sizes by trim from owner's manuals plus speedo/diameter math. They make no fitment or trimming claims, so the verdict is missing. Beatable on the hook.
- **tiremath.com/calculators/lift-kit**: generic. Lift height maps to a max diameter (e.g. 3in → 35in, "35" tires fit most trucks"). The page says "actual fitment varies by vehicle make, model, wheel offset" and it isn't vehicle-specific. Beatable.
- **wheel-size.com**: large per-vehicle OEM fitment DB, but no lift or clearance data.
- **F-150 SERP (Bing)**: blog articles (motoristcare, liftprocustoms, autosxpert, performanceplustire lift chart covering F-150/Silverado/Tacoma/Wrangler), tiresize.app and comparemytires. Static articles, no multi-input verdict.
- Risk: the tacotires model could be cloned per platform by its owner or others. Recheck at validation.

## AIO probe
Google is not checkable by automation (CAPTCHA). Bing showed a Copilot answer for "what size tires fit tacoma with leveling kit" that cited tacotires/low-offset/tubetyre and hedged ("Always confirm clearance on your exact truck"). That suggests the AI answer can't give a confident per-setup verdict. **Manual checkpoint** queries: "will 33 inch tires fit f150 with leveling kit", "what size tires fit 4runner with 2 inch lift", "biggest tire on stock wrangler jl".

## Gate results
1. AIO: pending manual check. The hedged Bing answer suggests verdict-type queries survive.
2. Static feasibility: pass. Static dataset plus client-side compute (Astro house template).
3. Data moat: pass, conditionally. A cited per-platform clearance matrix is real work. It is not a moat if sources are thin.
4. Hook served: pass outside Tacoma (tirecalculatorhub refuses fitment claims, tiremath is generic). Tacoma fails (tacotires.com).
5. Legal: pass. Facts with citations, no trademark use beyond nominative model names; include a "verify before buying" disclaimer.
6. US: pass.
7. Monetization: pass. Tire Rack 6%, AOV >$400.

## Evidence
- tacotires.com/max-tire-size-calculator (fetched 2026-10-09): inputs generation/lift/offset/trim; e.g. 3rd gen stock → 265/70R17 ~31.6in, "True 33s do not fit stock."
- tiremath.com/calculators/lift-kit (fetched 2026-10-09): generic lift→diameter table with the vehicle-variance disclaimer.
- tirecalculatorhub.com/calculators/all (fetched 2026-10-09): list of vehicle-specific calculators, all OEM sizes + speedo.
- mechanics.stackexchange.com/q/79564: "If you lift it, the company that made your lift will most likely have a chart showing what tires fit without rubbing." Fitment answers are scattered across kit-maker charts.
- mechanics.stackexchange.com/q/86248: "Is it okay to up the tire size? Whats the respectable range that's safe to go up or down".
- Reddit pain mining failed (Arctic Shift timeouts; r/Tacoma is the city sub). No owner-forum quotes yet. Gather at validation.
- Tire Rack affiliate page: 6% commission, AOV >$400.

## History
- 2026-10-09: scouted (candidate).
