# Idea: real-tire-height-lookup

## Status
candidate (scouted 2026-10-09)

## Origin
Scout run 2026-10-09 (tire-size-fitment). Inversion: "285 70r17 in inches" draws 50K/mo, but the nominal math (~32.7in) is trivial and AIO-prone. The question underneath is "how tall is the tire I'd actually buy?" Published overall diameters vary by model (an AT vs an MT in the same size).
Strength: **weak**. The nominal-inches query is almost certainly answered by AIO and every calculator. The value depends on whether the per-model spread is big enough to matter, which hasn't been verified yet.

## Idea
Per-size pages listing the nominal diameter and then the manufacturer-published overall diameter, section width, weight and load index for popular models in that size (KO2, Wildpeak AT, Falken, Toyo, Cooper, etc.). A compare tool shows the real height and weight difference between two specific tires, or between two sizes using real models.

## Edge
- **Dataset:** manufacturer spec sheets (overall diameter, width, weight, load index/range, UTQG) per model × size. Public data, but scattered across brand sites.
- **Compute:** real-model vs nominal and model vs model deltas, speedo error from published diameter, weight difference.
- **Long-tail:** per size ("285/70R17 real height by tire"), per size pair, per model.
- **Monetization:** Tire Rack affiliate links per model (6%, AOV >$400).

## Hook
"285/70R17 is 32.7in on paper. Which ones are actually 33?"

## Demand
Keyword Planner, US, Sep 2025–Aug 2026 (pipeline/demand-csv/2026-10-09-demand-screen.csv):
- 285 70r17 in inches: 50K/mo
- tire size chart: 50K
- tire size comparison: 50K
- 275 65r18 vs 275 70r18: 500
Most of this volume is the nominal-math intent, which this idea doesn't own.

## Incumbent probe (2026-10-09)
- tiresize.com: size calculators, charts and per-size pages with tire listings; ad-heavy. The guessed per-pair URL 404'd, so the pair-page structure wasn't confirmed.
- tirecalculatorhub.com, tiremath.com, tacotires.com/tire-size-to-inches: nominal conversion, served well.
- Tire Rack product pages publish specs per model, but no cross-model height comparison was seen. Validate whether any site ranks "real height by model".

## AIO probe
Not checkable by automation. **Manual checkpoint**: "285 70r17 in inches" (expect AIO, likely kills the nominal intent), "275 65r18 vs 275 70r18" (expect AIO), "how tall is a 285/70r17 ko2".

## Gate results
1. AIO: likely fail for the nominal intent; the model-specific intent is pending.
2. Static feasibility: pass.
3. Data moat: weak-pass. Spec sheets are public, so a cited aggregate takes effort but isn't hard to copy.
4. Hook served: unknown for the model-specific angle; nominal math is served well.
5. Legal: pass. Cite manufacturer specs, no copied images.
6. US: pass.
7. Monetization: pass (Tire Rack).

## Evidence
- Demand CSV rows above.
- tiremath.com lift-kit page lists nominal diameters (e.g. 285/70R17 = 32.71in), the same figure tacotires uses. The nominal answer is commodity.
- No real-model spread data was collected this run. Validation must pull 3–5 spec sheets for one size to confirm a meaningful spread before going further.

## History
- 2026-10-09: scouted (candidate, weak).
