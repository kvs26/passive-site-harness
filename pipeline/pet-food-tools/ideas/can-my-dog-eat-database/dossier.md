# Dossier: Can-my-dog-eat searchable database (v3 re-validation of the toxicity-calculator pivot)

**The per-food verdict database fails gate 1 (AIO answers "can dogs eat X" lookups); its surviving pivot — a quantity × dog-weight toxicity calculator — fails gate 4: a dedicated multi-substance grape/raisin toxicity-by-weight calculator field is already saturated (≥7 sites, several 2026-dated, incl. a multi-substance farm opened this run), the same disproof that killed `chocolate-toxicity-calculator`; rejected; confidence: high.**

**Evidence dated 2026-09-01 — SERP/AIO evidence would expire 2026-09-29, but the idea exits rejected so the clock is moot. Dossier kept as the record.**

> Re-validation note: this supersedes the 2026-08-06/2026-08-17 dossier that validated the database as built. The database was demoted to `candidate` on the 2026-09-01 v3 re-triage (idea.md pivot); this run tests the pivot's two survival conditions — gate 4 (multi-substance × weight unserved) and gate 5 (liability) — and disproves gate 4.

## Signal scorecard

**Demand: strong** — the quantity × dog-weight question recurs across many substances, with weight-specific phrasing surfacing directly in autocomplete, and the head + tool queries are Keyword-Planner-backed.
  - Autocomplete (Google suggest, US, this run via `scripts/fanout.py`): grape × weight phrasing appears in raw suggestions — "how many grapes are toxic to a 20 pound dog", "how many grapes are toxic to 70 lb dog", "…to a small dog", "…to large dogs"; plus a dense chocolate-calculator tail ("how much chocolate can a dog eat calculator", "how much dark/milk/cocoa powder is toxic to dogs calculator") and panic queries ("my dog ate a grape", "my dog ate onion", "my dog ate banana peel").
  - Keyword Planner export (2026-08-15, US; parsed via `scripts/planner-report.py` this run): "can dogs eat grapes" **500000** bucket, "can dogs eat chocolate" **50000**, "dog chocolate toxicity calculator" **50000** (3-mo +900%, YoY +900%), "how much chocolate is toxic to dogs" 5000, "my dog ate a grape" 5000 — core group far above the 5K bar (one independent piece per rubric).
  - *Caveat:* demand is real but points at queries the incumbents already serve (see SERP), and the CSV keyword set was built for the database — it does **not** measure the pivot's grape-calculator queries (e.g. "how many grapes are toxic to dogs calculator"). Demand for the pivot's exact phrasing is inferred from autocomplete, not bucketed.

**SERP, AIO & competitor weakness: weak — KILL-LEVEL FINDING (gate 4, and gate 1 for the DB-as-built).** The pivot's flagship substance (grapes/raisins × weight) is served by a saturated field of dedicated calculators, including a multi-substance farm opened this run.
  - "how many grapes are toxic to dogs calculator by weight" (DDG, 2026-09-01) — top organic results are **all dedicated grape/raisin toxicity-by-weight calculators**: a2zcalculators.com "Dog Grape Toxicity Calculator" ("check if grapes or raisins are toxic to your dog by weight"), dogscalculators.com "Dog Grape Toxicity Calculator [2026]" ("inputting your dog's weight and the number of grapes or raisins consumed"), calculatorsfordogs.com "Grape & Raisin Toxicity Calculator", mypawsafe.com "Dog Grape Toxicity Calculator (Vet-Backed 2026)", 360calculator.net "Dog Grapes Toxicity Calculator" (20 Aug 2026), calculator.everycalculators.com "Grape Toxicity In Dogs Calculator", caninebible.com "Dog Grape Toxicity Calculator" (8 Jul 2026). ≥7 purpose-built incumbents on the exact query.
  - https://www.calculatorsfordogs.com/health-nutrition-calculators/grape-raisin-toxicity-calculator (fetched this run) is a **multi-substance farm**, not a one-off: full grape/raisin calculator (weight input, product-type dropdown with per-unit grams — "Whole Grapes ~5g", "Raisins ~1g", "Currants ~0.5g", "Grape Juice ~15g/tbsp", "Custom grams" — amount, time-since-ingestion, g/kg risk-band table), an **Embed** button for distribution, GA4 analytics, and a "Related Calculators" block linking a **Xylitol Toxicity Calculator**. The same site served the "Chocolate Toxicity Chart for Dogs by Weight & Type (2026)" in the `chocolate-toxicity-calculator` kill and, per the 2026-09-01 `dog-treat-portion-calculator` re-probe, is a maintained **139-calculator hub with an offline Android app**. The pivot's "multi-substance × weight is unserved" survival condition is factually disproved.
  - DB-as-built (gate 1): the "can dogs eat X" verdict-lookup head queries are fully answered by AI Overviews (harness-v3 ticket 02) — carried from that analysis, **not re-probed this run** because the gate-4 kill on the surviving pivot already rejects the idea (see Risks & unknowns for the AIO re-probe status). Two flat interactive DBs (dogtoxic.com, canmydogeat.org) also already exist per the prior dossier.

**Hook depth: weak (disproved).** Quantity × dog-weight is what users want (autocomplete confirms grape × weight phrasing), but it is not our differentiator — the incumbents already compute grape/raisin g/kg by weight with risk bands.
  - calculatorsfordogs.com (fetched this run) publishes the exact model a build would ship: per-product g/kg thresholds ("Grapes 10-20 g/kg — Moderate, kidney injury reported"; "Raisins/Currants >10 g/kg — High risk, kidney failure likely") computed from the user's weight + amount inputs, with the correct "NO established safe dose" framing.
  - This is the same disproof recorded for `chocolate-toxicity-calculator` (PetMD/Omni/Merck/Vets-Now serve chocolate × weight) — now confirmed to extend to the pivot's flagship substance (grapes) and to xylitol.

**Monetization: strong (route real, does not rescue the served hook).** Affiliate + display, verified on the exact page type.
  - calculatorsfordogs.com (fetched this run) runs GA4 (`google-analytics.com/g/collect` request observed) on the calculator page — programmatic monetization on the identical format.
  - Prior-dossier evidence (not re-fetched this run): caninebible.com/can-dogs-eat-grapes carries Chewy (chewy.sjv.io), Dutch/The Vets telehealth (dutchpetinc.pxf.io, the-vets.sjv.io), Embark, Amazon Associates; dogtoxic.com serves display ads. CSV bids are low on head terms (top-of-page LOW mostly < $0.10 USD-equiv), so the route would lean affiliate over display RPM — but a served hook cannot be monetized past the incumbents already occupying it.

**Feasibility & sustainable upkeep: strong (feasible, not a moat).** Free, stable dose data; static build proven — but that same stability is why the field is saturated.
  - Merck Vet Manual "Food Hazards" (prior dossier, updated May 2026) and USDA FoodData Central give stable per-weight thresholds; refresh burden ≤ quarterly. The seven live grape calculators (several 2026-dated) prove the build shape and low upkeep.
  - Grape/raisin toxicity is idiosyncratic (no safe dose); incumbents already handle this correctly by outputting an "exposure estimate, not a safety determination" — the toxicological nuance the database hoped to own is not differentiating.

**Data moat: weak — KILL-LEVEL FINDING (gate 3b, mechanically replicable).** The dose-per-body-weight dataset is public and already computed by the farms; no merge / hand-verify / editorial-judgment barrier holds.
  - The g/kg thresholds are published veterinary-toxicology values (Merck/USDA) that any site can key in; ≥7 sites have done exactly that, and a single farm (calculatorsfordogs.com) hosts 139 such calculators. The long-tail per-food/per-substance page surface the database counted on is itself occupied by the farms' per-substance calculator pages.

**Confidence: high** — no signal graded unknown; Demand and SERP/competitor-weakness each rest on ≥2 independent sources fetched this run; Keyword Planner CSV present (2026-08-15, fresh). The CSV's keyword-gap for the pivot's grape-calculator phrasing is noted but does not create an unknown signal — the SERP saturation is directly observed.

## SERP & AIO snapshot

- **"how many grapes are toxic to dogs calculator by weight" (DDG, 2026-09-01):** a2zcalculators.com, dogscalculators.com "[2026]", calculatorsfordogs.com, mypawsafe.com "(Vet-Backed 2026)", 360calculator.net (20 Aug 2026), calculator.everycalculators.com, caninebible.com (8 Jul 2026) — the entire first page is dedicated grape/raisin toxicity-by-weight calculators. There is no thin/stale field to beat; the pivot's "multi-substance × weight is unserved" premise is false.
- **calculatorsfordogs.com grape/raisin calculator (fetched, 2026-09-01):** live weight + product-type + amount + time inputs → g/kg risk bands; Embed button; Related Calculators → Xylitol; GA4. Multi-substance farm, not a single-substance one-off.
- **AIO re-probe (DB-as-built): not run this run.** DDG SERPs are AIO-blind and the rejection does not depend on the AIO status — the surviving pivot is killed on gate 4 regardless. The gate-1 AIO finding for "can dogs eat X" verdict lookups is carried from harness-v3 ticket 02 (question-word queries ≈58–86% AIO trigger; the verdict is a summary an AIO performs with no per-query-compute wedge past it). If the idea were ever revived on a genuinely unserved angle, a fresh manual Google AIO re-probe of 3–5 head queries (with the `&udm=14` control) would be required.

## Keyword data

Keyword Planner historical-metrics export, 2026-08-15 (fresh; Aug 2025–Jul 2026, bids in INR), parsed via `scripts/planner-report.py` this run. USD conversion 1 INR ≈ 0.010471 USD (rate quoted from the prior dossier's 2026-08-16 open.er-api.com fetch; not re-fetched this run). Buckets are order-of-magnitude (50/500/5K/50K/500K).

- **Head/tool terms:** "can dogs eat grapes" **500000** (3-mo +900%, YoY 0%); "can dogs eat chocolate" **50000**; "dog chocolate toxicity calculator" **50000** (3-mo +900%, YoY +900%); "how much chocolate is toxic to dogs" 5000; "my dog ate a grape" 5000; "my dog ate chocolate" 5000; "dog ate chocolate chip cookie" 5000; "dog ate a banana peel" 5000 (3-mo/YoY −90%); "my dog ate an onion" 500; "dog ate grapes and is fine" 500 (YoY +900%); "dog ate grapes 24 hours ago" 50.
- **Zero/no-data:** "can my dog eat this checker", "dog food safety lookup" (empty metrics — generic-checker phrasings don't exist).
- **Bids (top-of-page LOW, verbatim INR → USD):** "dog ate grapes and is fine" ₹45.07 → $0.47; "my dog ate a grape" ₹12.91 → $0.14; "dog chocolate toxicity calculator" ₹4.76 → $0.05; head terms ₹2.01–3.16 → $0.02–0.03; "dog ate a banana peel" ₹1.12 → $0.01. Low across the board — affiliate-leaning route.
- **Keyword-gap flag:** the export measures the database's verdict-lookup and chocolate-calculator queries, not the pivot's grape/multi-substance calculator queries. It corroborates that the *tool* intent is large and rising (chocolate calc 50K, +900%) — which is precisely why the field is saturated — but does not size the specific pivot phrasing.

## Monetization sketch

Display ads (AdSense/GA4, proven on calculatorsfordogs.com and dogtoxic.com) on per-substance pages, plus pet-insurance / vet-telehealth affiliate (Chewy, Dutch, The Vets — the caninebible placements) below an emergency-hotline callout. Route is real and low-friction, but every placement sits on a page type the incumbent farms already occupy; monetization does not offset a served hook.

## Digital products (documented, off by default)

A printable "dog toxic-foods emergency card" (per-substance g/kg thresholds + Pet Poison Helpline 855-764-7661 / ASPCA 888-426-4435 + symptom timeline) is a plausible Gumroad-style download — but it ships OFF and, given the saturated free field, would not change the verdict. Documented for the record only.

## Traffic sanity-check (labelled opinion)

The viability bar is $100/mo per site within 9–12 months. Reference figures (ticket-03 research, quoted not recomputed): blended ads+affiliate $100/mo ≈ 4,300–11,500 visitors/mo; ads-only at pets/reference RPM (~$2.33) ≈ 43K pv/mo. The demand universe is unambiguously large enough (500K + 50K buckets, huge panic tail) to clear the visitor bar in principle — but that is moot: the traffic is captured by ≥7 dedicated grape calculators, a 139-calculator farm, AI Overviews on the verdict head, and two interactive verdict DBs. My read: demand clears the bar, but a new undifferentiated entrant cannot capture enough of it. The sanity-check does not save an idea rejected on gate 4.

## Risks & unknowns

- **No signal graded unknown.**
- **AIO re-probe for the DB-as-built not run this run** (rejection is gate-4-driven on the pivot; DB gate-1 AIO finding carried from ticket 02). A fresh manual Google AIO probe would be required only on a revival with a new angle.
- **CSV keyword-gap:** the pivot's grape/multi-substance calculator phrasing is not in the 2026-08-15 export; the export sizes the database's and chocolate calculator's queries instead. Not re-parked — the SERP saturation is decisive regardless of bucket sizes.
- **Exchange rate not re-fetched** this run; USD conversions are quoted from the prior dossier's 2026-08-16 rate (order-of-magnitude use only).
- **Gate 5 (liability) not resolved but moot:** grape/raisin poisoning triage borders veterinary-medical advice; the idea exits rejected on gate 4 before gate 5 becomes decisive. The incumbents' uniform "no safe dose / call your vet / Pet Poison Helpline" posture shows the standard hedge a new entrant would also have to carry, without institutional cover.

## Sources log

- `scripts/fanout.py` (Google suggest, US, `--mode=question`): seeds "my dog ate", "how much chocolate is toxic to dogs", "how many grapes are toxic to dogs", "dog toxicity calculator", "how much xylitol is toxic to dogs", "how much onion is toxic to dogs" — grape × weight phrasing + chocolate-calculator tail (this run).
- `scripts/planner-report.py pipeline/pet-food-tools/ideas/can-my-dog-eat-database/keyword-planner.csv` — re-parsed the 2026-08-15 export (this run).
- Integrated browser (DDG): `how many grapes are toxic to dogs calculator by weight` — ≥7 dedicated grape/raisin toxicity-by-weight calculators (a2zcalculators, dogscalculators, calculatorsfordogs, mypawsafe, 360calculator, everycalculators, caninebible) (this run).
- Fetched (integrated browser): https://www.calculatorsfordogs.com/health-nutrition-calculators/grape-raisin-toxicity-calculator — live grape/raisin calculator (weight/product/amount/time inputs, g/kg risk-band table, Embed, GA4, Related → Xylitol) (this run).
- Prior-dossier evidence re-used (not re-fetched this run, cited as such): Merck Vet Manual "Food Hazards" (May 2026), caninebible.com affiliate inventory, dogtoxic.com / canmydogeat.org flat interactive DBs, INR→USD 0.010471 (2026-08-16).
- Cross-idea corroboration: `chocolate-toxicity-calculator` dossier (PetMD/Omni/Merck/Vets-Now chocolate × weight saturation) and `dog-treat-portion-calculator` 2026-09-01 re-probe (calculatorsfordogs.com = 139-calculator hub + offline Android app).
- Carried finding (not re-probed): harness-v3 ticket 02 — AIO fully answers "can dogs eat X" verdict lookups.
