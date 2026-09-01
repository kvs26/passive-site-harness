# Validate run — 2026-09-01 — runs-on-your-battery-finder

Niche: power-tool-battery-compat. Idea: filterable cross-platform directory of gadgets/accessories that run on power-tool batteries, flagged native / direct-fit / adapter-path, Amazon-affiliate route. Origin: 2026-09-01 scout (sole survivor of 12+ probed shapes).

Outcome: **validated (confidence: high)** — CSV ingested same day (see top-up addendum). Originally parked at medium confidence pending the Keyword Planner CSV.

## What was dug

- **Demand (strong):** fresh autocomplete fan-out (two passes) surfaced dense per-gadget × platform completions across DeWalt/Milwaukee/Makita/Ryobi. Re-verified recurrence on an independent community (live r/ryobi "Any Cool Third Party Tools That Work With Ryobi Batteries?") with real quotes + scattered-answers pattern. Publisher cadence (SlashGear Jul 2026, HowToGeek "4 days ago", House Digest Mar 2025) corroborates.
- **SERP + AIO (weak, not kill):** incumbent SERP confirmed listicles + battery-compat guides only; toolcompatibility.com opened (adapter tables, UK-focused, no gadget catalog). AIO re-probe at validate depth on 3 head queries via live google.com: M18 head query AIO-present (category-level + conversational "tell me what you want to power" follow-up); HART small-platform head query ALSO AIO-present (native ecosystem) — broader encroachment than scout's DeWalt-only probe. Transactional control "dewalt 20v battery powered misting fan" = **no AIO**, Shopping SERP → wedge verified at the product-selection layer.
- **Hook (strong):** fit-type distinction matters on safety grounds — r/ryobi "non-sketchy" native-fit vs adapter, toolcompatibility's over-discharge safety table. Small-platform leg thinner (gadget-discovery demand for Hart/Bauer/Kobalt weak).
- **Monetization (strong):** Amazon Associates rate verified verbatim from primary source — 3.00% Tools/Home Improvement/Lawn & Garden/Outdoors, 4.50% Kitchen; all outputs linkable; competitor toolcompatibility runs the program. Cookie window not re-verified (unknown).
- **Feasibility (strong):** static + client-side JSON filter; monthly product sweep + quarterly link check ≈ under 3 hrs/wk.
- **Moat (strong):** merge + per-row hand-verify barrier holds; platform × category long-tail surface confirmed by autocomplete.

## Dead ends / inconclusive

- DDG html endpoint bot-challenged throughout — Bing (fetch) + live google.com (browser) used instead.
- Reddit unauth fetch returns image-only / CSP-blocked; scout-cited r/Dewalt threads wereef6 + 14j3jqg **404'd** on re-probe (slug change or removal) — recurrence re-verified via live r/ryobi thread instead.
- HowToGeek article fetch redirected to a Mediavine ad-sync URL — content confirmed via Bing snippet.
- No Keyword Planner CSV this run → wrote `keywords-request.md` (grouped: head / per-gadget×platform variants / hook-specific / monetization-CPC), completed full dig, parked at medium confidence.

## Verdict

Not rejected — no scout gate factually disproved (AIO does not fully answer; transactional queries AIO-free; incumbents are listicles, not a filterable gadget catalog). But the SERP/AIO signal graded *weak* because the informational head has eroded to AIO since scout, leaving the case resting on the transactional long-tail. Parked pending CSV; the per-gadget × platform volume/bid data is the deciding evidence for the final validated/rejected call.

## Comparison brief

Not triggered — 1 idea at `Status: validated` in this niche (need ≥3).

## Top-up addendum — 2026-09-01 (CSV ingested)

Cheap top-up per skill rule: idea was parked waiting on Planner data; CSV now exists, so ingest + upgrade Demand/Monetization + confidence + flip status, no full re-dig. SERP/AIO **not** re-probed → original evidence expiry (2026-09-29) stands.

Ingested `keyword-planner.csv` (US, Aug 2025–Jul 2026) via `scripts/planner-report.py`. Bids in INR converted at 1 INR = $0.010504 (open.er-api.com, 2026-09-01).

- **Volume-bearing product queries:** milwaukee m18 fan **50K bucket**; dewalt battery fan / vacuum / chainsaw **5K** each; misting fan / inverter / portable fan / adapters **500**; coffee maker **50**. All High competition, all 0% YoY (misting/portable fan +900% 3-mo seasonal). Top-of-page LOW bids ~$0.13–$0.28 (high-end ~$1.15–$1.22 on m18 fan / dewalt vacuum). Route is affiliate → bids supporting-only, don't gate.
- **Zero/no-data:** every informational-head and discovery/directory-framing query — "what gadgets run on dewalt batteries", "what runs on milwaukee m18 battery", "things that use ryobi batteries", "third party dewalt battery products", "power tool battery gadgets", the small-platform "what runs on hart 20v battery" / "bauer 20v battery gadgets", and the per-gadget×platform phrasings ("dewalt battery compatible misting fan", "milwaukee m18 powered cooler", "ryobi one+ coffee maker", "makita lxt power station").

**Re-grade:** Demand stays **strong**, now CSV-backed (50K/5K product buckets = one more independent evidence piece alongside autocomplete + community recurrence). Monetization stays **strong** (bids confirm live commercial intent). No signal unknown; Demand and SERP/AIO-weakness each from ≥2 independent sources → **confidence high**. No kill-level finding → **status validated**.

**Positioning correction the CSV forced:** the measured volume is in *specific product* queries, not the directory/discovery hook (zero data on every "what runs on my battery" phrasing). So this validates as a **competitive product-directory play** — rank product-category landing pages against Shopping SERPs + established listicles (all High comp) — not an uncontested-niche play. The fit-type / small-platform differentiator is a conversion/trust asset on those pages, not its own traffic channel. Execution (ranking vs Amazon/Walmart Shopping) is the real risk, not demand.

Reminder: SERP/AIO evidence expires 2026-09-29 — mandatory pre-build re-probe before any build.
