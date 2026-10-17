# Dossier: Real Tire Height Lookup

**Per-size pages and a compare tool showing manufacturer-published overall diameter, width, weight and load index by tire model, instead of nominal math. The Planner CSV confirms the big volume is the nominal intent this idea doesn't own ("285 70r17 in inches" 50K), while every model-specific height phrasing ("ko2 285 70r17 diameter", "how tall is a 285 70r17 ko2", "285 70r17 actual height") returned zero data; only brand + size shopping queries reach 500. The core premise (per-model height spread matters) is still unverified because retailer spec pages are bot-blocked, so Hook and SERP/AIO stay unknown. Monetization is verified (Tire Rack 6%); Feasibility and Moat are weak. Kill-level finding added by the Google AIO checkpoint (2026-10-17): AI Overview fully answers all four head and hook queries, including the brand-specific KO2 height, with no per-query wedge. Rejected on gate 1. Confidence: low.**

**Evidence dated 2026-10-17 (Planner CSV ingested 2026-10-17, same day) — SERP/AIO evidence expires 2026-11-14 (+4 weeks). Pre-build re-probe mandatory regardless.**

## Signal scorecard

**Demand: weak** — the measured volume is nominal-math intent this idea doesn't own; every model-specific height phrasing measured zero.
  - **Keyword Planner CSV (2026-10-17, US, Oct 2025–Sep 2026):** "285 70r17 in inches" 50,000 (3-mo +900%, Medium competition); "tire size chart" 50,000; "tire size comparison" 50,000; "275 65r18 vs 275 70r18" 500; "285 70r17 vs 265 70r17" 500; "tire size difference calculator" 500; "285 70r17 height in inches" 50; "what is the diameter of a 33 inch tire" 50; "33x12 50r17 vs 285 70r17" 50. **Zero/no data:** "ko2 285 70r17 diameter", "ko2 285 70r17 actual height", "how tall is a 285 70r17 ko2", "285 70r17 actual height", "285 75r16 actual height", "33 inch tire actual size", "actual diameter of 275 65r18 all terrain", "speedometer error tire size".
  - Only brand + size shopping queries reach 500 ("bfgoodrich ko2 285 70r17", "falken wildpeak at3w 285 70r17", "toyo open country at3 285 70r17"; High competition): these are buy-intent queries Tire Rack/Discount Tire serve, not a height-comparison need.
  - Google autocomplete (`scripts/fanout.py --mode=plain`, US, 2026-10-17) shows model-specific phrasing exists ("285 70r17 actual height", "ko2 285 70r17 diameter", "33 inch tires actual size"), but the CSV measures it at zero. Autocomplete shows existence, not volume.
  - No owner-community thread specifically about per-model overall diameter was collected this run. The Planner head is nominal-math intent (scout already killed generic calculator and size-vs-size as hooks).

**SERP, AIO & competitor weakness: weak, kill-level (gate 1 disproved)** — Google AI Overview was checked 2026-10-17 (see SERP & AIO snapshot): it fully answers the nominal head queries AND the model-specific KO2 height queries with manufacturer-style numbers, and the organic results for the model-specific query are retailer spec pages. No per-query-compute wedge remains that a static site could own.
  - Earlier note (pre-AIO): nominal intent is a commodity; Bing was challenged so "does any site rank real height by model" was only partly answered.
  - Nominal conversion is served well by tiresize.com, tirecalculatorhub.com, tiremath.com and tacotires.com/tire-size-to-inches (scout-opened, e.g. 285/70R17 = 32.71in).
  - Tire Rack product pages publish specs per model (scout note), but no cross-model height comparison was seen at scout.
  - 2026-10-17 Bing attempt ("ko2 285/70r17 actual height vs nominal tire overall diameter by model") returned the Bing challenge shell — no result data. No site was confirmed to rank "real height by model".

**Hook depth: unknown** — the premise is plausible but the spread was not measured.
  - Supporting statement (tubetyre.com): "Tire sizes are nominal. Two tires with the same printed size can measure differently once mounted, inflated, and loaded." and "Always check the manufacturer's true diameter and section width before buying." (https://www.tubetyre.com — 4Runner tire chart, updated Jul 7, 2026). Says variation exists; gives no per-model numbers.
  - The claim in `idea.md` ("285/70R17 is 32.7in on paper. Which ones are actually 33?") remains unverified. The scout's required test — pull 3–5 spec sheets for one size — failed, see Sources log. Unknown, not disproved.

**Monetization: strong** — same verified program as the sibling idea, and a per-model page is a natural product link.
  - Tire Rack affiliate, verbatim: "Earn 6% commission on every sale you generate. Tire Rack's average order value is more than $400. That's over $20 in commission per order!" (https://www.tirerack.com/affiliate)
  - Every model × size row links to a Tire Rack product/size result.
  - Cookie window unknown (FAQ answers collapsed on fetch; policy pages blocked).

**Feasibility & sustainable upkeep: weak** — static build is easy, but the data pipeline is the problem.
  - Retailer spec sources tried 2026-10-17: Tire Rack model pages return ~565-byte stubs to curl (HTTP 200, no content); Discount Tire size page returns a ~1.4 MB JS shell with no spec text; SimpleTire size URL 404; TireBuyer 500; tiresize.com model URL returns 300. Manufacturer pages (e.g. BFGoodrich) were not extractable at scout/this run.
  - So per-model overall diameter has to come from manufacturer sites or PDFs one by one, hundreds of models × sizes, with new models and size additions yearly.
  - Upkeep estimate (bottom-up, labelled estimate): per-model churn is moderate (new generations of AT/MT lines, size additions), and the sweep must repeat across ~8–10 brands. Likely above the ~3 hrs/week cap unless limited to a few dozen popular truck sizes.
  - Build side is fine: Astro + JSON + client-side delta compute.

**Data moat: weak** — public manufacturer spec sheets; the aggregate is laborious but mechanically replicable.
  - Barrier (a) merge across brand sites exists but no hand-verification or judgment layer is needed beyond transcription; a scraper or AI farm can replicate it, and Tire Rack/Discount Tire already hold the same data natively.
  - Long-tail surface is real (per size × model, per size pair) but each page is a table of public specs.

## SERP & AIO snapshot

Dated 2026-10-17. Google checked in an automated browser (US, `hl=en&gl=us`, signed out); all four queries rendered an AI Overview, no CAPTCHA.

| Query | AIO | What it says |
|---|---|---|
| "285 70r17 in inches" | Yes | "approximately 32.7 inches in overall diameter, 11.2 inches in width, and has a 7.9-inch sidewall height"; notes it is often called a "33-inch" tire. Full answer. |
| "275 65r18 vs 275 70r18" | Yes | Full comparison: diameter 32.07 vs 33.16 in, sidewall 7.04 vs 7.58, revs/mile 628.78 vs 608.25, ~3.3% speedometer error, fitment and ride notes. Full answer. |
| "how tall is a 285/70r17 ko2" | Yes | "official overall diameter (height) of 32.8 inches" (cites Tire Rack), width 11.5, 635 revs/mile, and an explicit note that it is "commonly referred to as a '33-inch tire'" but spec measures 32.8. This is the idea's hook answered. |
| "ko2 285 70r17 diameter" | Yes | "32.8 inches (according to TireSize.com and Coker Tire)", width 11.5, 635 revs/mile. Organic carries tiresize.com's own KO2 page quoting 32.7". Full answer. |

- **Control (`&udm=14`, "how tall is a 285/70r17 ko2"):** top organic is Tire Rack, Discount Tire, Coker Tire, TireSize.com, a Shopify retailer and a forum thread. Every result is a retailer or spec page for that one model.
- **Wedge past the AIO:** the only claimed wedge was the per-model spread (which 285/70R17 is actually 33in). AIO already surfaces the model-specific published diameter and even notes the 32.7 vs 32.8 discrepancy between sources. A cross-model table is the one thing not shown, but it was not verified to matter (spread unmeasured), and every model-specific phrasing measured zero in the Planner export.
- **Verdict:** kill-level, gate 1 disproved. AIO fully answers the head and hook queries with no per-query compute wedge shown.

## Keyword data

Keyword Planner CSV ingested 2026-10-17 (`keyword-planner.csv`; US, Oct 2025–Sep 2026; bids in INR account currency; run through `scripts/planner-report.py`). Buckets are order-of-magnitude. INR → USD at 1 USD = 95.111965 INR (open.er-api.com, 2026-10-17).

| Keyword | Avg searches | 3-mo / YoY | Comp. | Top-of-page bid low–high (INR → USD) |
|---|---|---|---|---|
| 285 70r17 in inches | 50,000 | +900% / 0% | Medium | ₹52.99–₹338.94 → $0.56–$3.56 |
| tire size chart | 50,000 | 0% / 0% | Low | ₹51.45–₹210.34 → $0.54–$2.21 |
| tire size comparison | 50,000 | 0% / 0% | Low | ₹48.82–₹600.31 → $0.51–$6.31 |
| 275 65r18 vs 275 70r18 | 500 | 0% / 0% | Medium | ₹144.04–₹510.21 → $1.51–$5.36 |
| 285 70r17 vs 265 70r17 | 500 | 0% / 0% | Low | — |
| tire size difference calculator | 500 | 0% / 0% | Low | ₹1.17–₹275.74 → $0.01–$2.90 |
| bfgoodrich ko2 285 70r17 | 500 | 0% / −90% | High | ₹44.49–₹269.01 → $0.47–$2.83 |
| falken wildpeak at3w 285 70r17 | 500 | 0% / 0% | High | ₹44.46–₹230.73 → $0.47–$2.43 |
| toyo open country at3 285 70r17 | 500 | 0% / 0% | High | ₹64.12–₹304.36 → $0.67–$3.20 |
| 285 70r17 height in inches | 50 | 0% / 0% | Low | — |
| 33x12 50r17 vs 285 70r17 | 50 | +900% / +900% | Low | — |
| what is the diameter of a 33 inch tire | 50 | 0% / 0% | Low | — |

Zero/no-data (8): 285 70r17 actual height · 285 75r16 actual height · 33 inch tire actual size · actual diameter of 275 65r18 all terrain · how tall is a 285 70r17 ko2 · ko2 285 70r17 actual height · ko2 285 70r17 diameter · speedometer error tire size.

**Read:** all volume is the nominal / size-vs-size intent (which calculators and likely AIO serve); every model-specific height phrasing is zero. The 500-bucket brand + size queries are High competition shopping terms. Route is affiliate, so bids are supporting-only; they show live commercial intent ($0.47–$3.20 on the brand + size terms), nothing about the height hook.

## Monetization sketch

Affiliate route: Tire Rack, 6% verified verbatim, AOV >$400. Each per-model row carries a Tire Rack link for that model and size. Display ads secondary on the per-size pages; no RPM figure asserted. Cookie window unknown. Amazon is not a natural route here (tire buyers go to retailers with fitment/installation).

## Digital products (documented, off by default)

None apparent. A downloadable spec table adds nothing over the live page. Ships off.

## Traffic sanity-check

Labelled opinion. The viability bar ($100/mo within 9–12 months) implies, per the ticket-03 reference table (quoted, not recomputed): blended ≈ 4,300–11,500 visitors/mo; ads-only ≈ 43K pv/mo at pets-class RPM vs ≈ 7.5K pv/mo at Home & Garden RPM. The 50K-bucket queries look attractive but they are the nominal intent every calculator and likely AIO already answer, and the CSV measures every model-specific height phrasing at zero. The only 500-bucket terms are brand + size shopping queries (High competition) that retailers own, and the long tail is a table of public specs. My read: does not plausibly clear the bar on the hook as stated, and the AIO checkpoint (2026-10-17) now shows the nominal and model-specific head queries answered in full. Opinion, not a number.

## Risks & unknowns

- **Premise unverified** — the per-model spread was not measured; if it's mostly <0.3in, the hook collapses. Needs 3–5 manufacturer spec sheets for one size.
- **AIO (checked 2026-10-17)** — fully answers nominal, size-vs-size and the model-specific KO2 height queries. Kill-level.
- **Data access** — retailer spec pages blocked/JS-rendered; manufacturer data scattered; heavy per-model transcription and yearly churn.
- **Moat** — public specs; Tire Rack and Discount Tire hold the same data and could surface it natively.
- **Demand** — CSV measured every model-specific phrasing at zero; volume is nominal intent only.
- **Cookie window** unverified.

## Sources log

- `scripts/fanout.py --mode=plain` — Google autocomplete, US (359 lines raw); model-specific phrasing evidence.
- `pipeline/demand-csv/2026-10-09-demand-screen.csv` — Planner screen.
- `keyword-planner.csv` (Keyword Stats 2026-10-17 at 10_52_09; US, Oct 2025–Sep 2026) — ingested via `scripts/planner-report.py`.
- tirerack.com/affiliate — 6% / AOV >$400 verbatim; /affiliates/faq.jsp collapsed (cookie unverified).
- tubetyre.com 4Runner chart — "Tire sizes are nominal…" quote.
- open.er-api.com — USD/INR 95.111965 (2026-10-17).
- Google SERP + AI Overview, 4 queries + `&udm=14` control (2026-10-17, automated browser, US, no CAPTCHA).
- Scout run 2026-10-09 — tiresize.com, tirecalculatorhub.com, tiremath.com, tacotires.com nominal pages.
- Dead ends (2026-10-17): Tire Rack model pages via curl (565-byte stubs, 3 models); Discount Tire size page (JS shell, no specs); SimpleTire (404); TireBuyer (500); tiresize.com model page (300); wheelsize.com (connection failure); Bing SERP for per-model height (challenge shell); toyotires 404 and bfgoodrichtires not extractable earlier in the run.
