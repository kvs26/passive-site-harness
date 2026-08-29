# Dossier: Washer Capacity Converter

**A washer/dryer cu ft ↔ kg ↔ real-world-load converter with capacity-adequacy answers (comforter/family/towels); demand is real and recurring, but the interactive hook is already served by Google's AI Overview + AI Mode (which answer all three legs conversationally) and by maintained prose guides, so the "answer-it" gate the scout flagged now fails at evidence level — confidence: medium (no Keyword Planner CSV).**

## Signal scorecard

**Demand: strong** — the same cu-ft/kg/adequacy confusion recurs across ≥4 independent subreddits over a 5-year span, including very recent threads, and autocomplete fans out per-cuft-value × per-brand × comforter/family/towels/kg.
  - Autocomplete (Google, US, `scripts/fanout.py`, this run): "washer capacity cu ft to kg", "washer capacity cubic feet vs kg", "5.2 cu ft washer capacity in kg", "how many kg is a 4.5 cu ft washer", "is 4.5 cu ft washer big enough for family of 5", "is 4.5 cu ft washer big enough for king size comforter", "4.5 cubic feet washer how many towels", "washer capacity for queen size comforter", "washer size for family of 4" — the exact three hook legs (kg conversion, capacity adequacy, real-world load) all surface as real query variants.
  - Reddit threads surfaced on Google SERP (fetched this run) across independent communities and years: "Cubic foot to KG conversion for washer / dryer" (r/Appliances, 9 comments, ~5 yr ago); "Can a washing machine be too big? 4.8 vs 5.3" (r/HomeImprovement, 10+ comments, ~5 yr ago); "Washing Machine - 5.2 vs 5.8 Capacity Difference" (r/Appliances, 10+ comments, ~2 yr ago); "Give it to me straight is 2.4 cu ft too small for a washing…" (r/Appliances, 25 answers, ~2 yr ago); "3.5 cu ft washer big enough?" (r/Appliances, 7 comments, ~1 yr ago) — independent threads, same problem.
  - Recency: "Washer drum size for king size comforter" (r/laundry-area, 30 answers, **Dec 9, 2025**) and "What does 10 kg weight capacity in a washing machine mean?" (Reddit, **Jan 8, 2026** — "10 kg/22 lb. capacity means you should never exceed that amount of dry items in the washer, not that your goal should be…") — both surfaced verbatim in the AI Overview / web results for "washer capacity cu ft to kg reddit" (Google SERP, fetched this run). Demand is live, not stale.

**SERP & competitor weakness: weak** — no dedicated interactive converter ranks, but that's not an opening: the top of every target SERP is an AI Overview that fully and *interactively* answers the question, backed by maintained prose guides from high-authority publishers.
  - "washer capacity cu ft to kg reddit" (Google SERP, fetched this run): AI Overview leads with "You cannot directly convert cubic feet (volume) to kilograms (weight) with a simple mathematical formula," then gives an equivalency table ("3.1 to 4.0 cu. ft. roughly equals 5 kg to 7 kg", "4.2 to 4.5 cu. ft. ≈ 8 kg to 9 kg", "4.5 to 5.0+ cu. ft. ≈ 10 kg to 12 kg+") and offers a follow-up ("Would you like to know how many cubic feet a specific kilogram size is…?"). Below it: The Spruce load-size chart (Apr 17, 2026) and TCL capacity guide — static but authoritative.
  - "is 4.5 cu ft washer big enough for king comforter" (Google SERP, fetched this run): AI Overview: "Yes, you can wash a standard, lightweight king-size comforter in a 4.5 cubic foot washing machine… A 4.5 cu ft drum is the minimum size generally recommended for a king-size bedding set," plus a fill-rule ("Leave about one-third of the drum empty") and an interactive close: "If you tell me the material or thickness… I can tell you if it is safe for your specific machine size." Cited to Quora + Wayfair ("you'll typically need a washing machine with at least 4.5 cubic feet").
  - "how many towels fit in 4.5 cu ft washer" (Google SERP, fetched this run): AI Overview: "A 4.5 cu. ft. washer handles about 14 to 18 pounds of dry laundry safely," a palm test, and again an interactive close: "tell me: Are your towels standard size or oversized bath sheets? Is your washer front-load or top-load? I can give you a more precise maximum count." Cited to Whirlpool "What Size Washer Do I Need?" and Tide's capacity guide.

**Hook depth: weak** — the "interactive converter" differentiator is genuinely how users phrase the problem, but it is precisely what the AI Overview now delivers (it takes follow-up inputs and personalizes), and the underlying premise is fuzzy: there is no true cu ft → kg formula, only rough equivalency ranges anyone can publish.
  - The hook's edge (per `idea.md`) was "an interactive converter + comforter-fit answers per capacity, which is exactly the phrasing people search with." Evidence this run shows the phrasing is real (autocomplete + Reddit above) — but the AI Overview answers all three legs interactively (see SERP snapshot), so the differentiator is occupied, not open.
  - The AI Overview's own lead line — "You cannot directly convert cubic feet (volume) to kilograms (weight) with a simple mathematical formula" (Google SERP, fetched this run) — undercuts the "converter" premise: a tool can only reproduce the same order-of-magnitude equivalency table Google already shows.

**Monetization paths: weak** — a display-ad route plausibly exists (the incumbents are ad/affiliate publishers), but it wasn't verified with ad-script inspection this run, no CSV exists to gauge CPC, and the zero-click AI Overview absorbs the informational traffic the site would depend on.
  - Incumbents owning these queries are commercial editorial/retail publishers (The Spruce / Dotdash Meredith, Wayfair, Tide/Whirlpool brand blogs) — display-ad and affiliate business models — but no ad/affiliate script was inspected on-page this run, so this is context, not confirmed evidence.
  - No `keyword-planner.csv` → capacity-keyword CPC buckets unknown; monetization strength cannot be graded up without it.

**Feasibility & maintenance: strong** — pure client-side calculator over stable static tables; the conversion heuristics and capacity classes are published consistently by multiple sources and rarely change.
  - The tub-volume formula (Volume = π·r²·D) and capacity classes appear verbatim on TCL ("Compact 2.30-2.45 cu ft… Front-loading 4.2 to 5 cubic feet"), Tide, and The Spruce (Google SERP snippets, fetched this run) — no backend, no accounts, no paid API; refresh burden is near-zero (equivalency ranges are stable).

**Unique-data opportunity: weak** — every input is public and derivable; there is no proprietary dataset to build, and the "no true conversion" fact caps any tool at reproducing published equivalency ranges.
  - The equivalency ranges (cu ft → kg → lb → load) and capacity classes are already printed by The Spruce, TCL, Tide, Wayfair, and Whirlpool (SERP, this run). A per-model cu-ft database could add breadth, but capacity is a headline spec buyers already see on the product page, so there's no hidden structure to surface.

**Confidence: medium** — demand and SERP-weakness are each graded from ≥2 independent sources fetched this run, but no Keyword Planner CSV exists, which caps confidence at medium regardless.

## SERP snapshot

- **"washer capacity cu ft to kg reddit" (Google, 2026-08-29):** AI Overview (equivalency table + "cannot directly convert" caveat + interactive follow-up) → The Spruce load-size chart (Apr 17, 2026) → TCL capacity guide (2023) → a stack of Reddit threads (r/Appliances, r/HomeImprovement, r/clothdiaps). Top of page is an AI answer, not a beatable blue link.
- **"is 4.5 cu ft washer big enough for king comforter" (Google, 2026-08-29):** AI Overview ("Yes… 4.5 cu ft is the minimum recommended" + fill rules + interactive close) → Reddit r/laundry-area threads (incl. Dec 9, 2025, 30 answers) → Wayfair guide → YouTube "Will This Fit a King Comforter?" (Apr 14, 2026). Fully answered.
- **"how many towels fit in 4.5 cu ft washer" (Google, 2026-08-29):** AI Overview ("14 to 18 pounds" + palm test + interactive close) → Whirlpool "What Size Washer Do I Need?" → Tide capacity guide. Fully answered.
- **Why not beatable:** all three hook legs are served at the top of the SERP by an AI Overview that is itself interactive (accepts follow-up inputs and personalizes), with maintained high-authority prose guides beneath. A static converter reproduces public equivalency ranges Google already surfaces — this is the scout's flagged gate-1 near-miss failing at evidence level.

## Keyword data

No Keyword Planner CSV this run, and none was requested — the idea is rejected on a SERP/hook gate that search volume cannot reopen (high volume on a question the AI Overview fully answers is not a tool opportunity). Trend context from the scout (Google Trends, US, 12 mo, relative UI values): "washer capacity" steady 21–46 through winter, peaking 100 (Apr 12, 2026) — real, seasonal-leaning demand, absolute volume unknown.

## Monetization sketch

Likeliest route would have been display ads (AdSense) on per-capacity result pages, matching the editorial incumbents (The Spruce, Tide, Wayfair). But that model depends on capturing the informational click, and those clicks are increasingly resolved in-SERP by the AI Overview (zero-click) — so even setting the gate-1 rejection aside, the ad route sits on eroding ground here.

## Risks & unknowns

- **Monetization CPC — unknown:** no CSV; capacity-keyword bids not measured. Not pursued because the idea is rejected on gate 1 regardless of CPC.
- **Ad presence on incumbents — unknown:** The Spruce/Tide/Wayfair are ad/affiliate publishers by business model, but no ad/affiliate script was inspected on-page this run.
- **Decisive finding:** the scout's gate-1 near-miss ("an LLM gives a rough answer; the tool's edge is the interactive converter") is disproved — Google's AI Overview *is* the interactive converter, across all three hook legs, and cu ft ↔ kg has no true formula for a tool to own.

## Sources log

- `scripts/fanout.py "washer capacity" "washer capacity cu ft" "how many cubic feet washer"` (Google autocomplete, US) — ✅ rich per-cuft/per-brand/kg/comforter/family phrasing.
- `scripts/fanout.py "washer capacity kg" "is 4.5 cu ft washer" "washer capacity for family" "how many towels washer"` — ✅ confirmed all three hook legs surface as real variants.
- `scripts/pain-fetch.py hn "washing machine capacity cubic feet"` — ⚠️ thin (2 tangential hits, no usable recurrence).
- `scripts/pain-fetch.py ddg "washer capacity cu ft to kg conversion reddit"` — ❌ bot-challenge / empty (same as scout).
- Google SERP "washer capacity cu ft to kg reddit" (integrated browser) — ✅ AI Overview conversion table + "cannot convert" caveat + ~6 independent Reddit threads (5-yr span, incl. Jan 2026).
- Google SERP "is 4.5 cu ft washer big enough for king comforter" (integrated browser) — ✅ AI Overview comforter verdict + interactive follow-up; Wayfair/Quora/Reddit (incl. Dec 2025).
- Google SERP "how many towels fit in 4.5 cu ft washer" (integrated browser) — ✅ AI Overview load-count ("14–18 lbs") + interactive follow-up; Whirlpool/Tide guides.
- `reddit.com/r/Appliances/search` direct fetch — ❌ blocked/thin (image-only response), consistent with scout's Reddit ladder failures.
