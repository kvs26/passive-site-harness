# Guinea pig searchable food database — **weak**

Status: rejected
Origin: ../../runs/2026-08-17-scout.md

## Idea

A searchable/filterable "can guinea pigs eat X" database (filter by daily / weekly / occasional / never, by vitamin-C-rich, by low-calcium/oxalate) covering 150+ foods, with per-food frequency, prep, and the species-specific why (vitamin C need, calcium/oxalate stones, sugar, gas).

## Hook

The A-Z guinea-pig food lists that dominate the SERP are static articles; a filterable tool ("show me safe daily vitamin-C veg" / "is this high-calcium?") turns the same facts into a browsable lookup instead of a wall of text.

## Gate results

1. Answer-it — pass (near-miss): individual foods are LLM-answerable, but the recurring "is this safe?" panic + species-specific constraints favor a browsable filtered DB.
2. Static feasibility — pass: static pages + client-side search/filter.
3. Data maintainability — pass: herbivore food-safety facts are stable (RSPCA/PDSA/Merck references); rare additions only.
4. Specific hook — **pass, weak / near-miss**: the SERP is beatable *on format* only. A strong content incumbent already exists (guineapigtube.com: 150+ food A-Z table WITH per-food frequency verdicts, vet-tech authored + DVM reviewed, updated 2026), and an interactive multi-species incumbent already exists (NibbleCheck). Differentiation is thin — filter UX + per-body-weight grams (which neither computes, but guinea-pig portions are qualitative, so the compute angle is weak).
5. Legal/policy — pass with care: informational; route toxic foods (avocado, alliums, raw potato) to caution + vet.
6. US-market — pass (some incumbents UK; demand fan-out is US-locale).

## Evidence

- Autocomplete (Google suggest, US, this run): "can guinea pigs eat apples/broccoli/carrots/grapes/pineapple/strawberries/tomatoes/watermelon/cabbage/celery/corn/guava/lychee/mango/papaya" — very broad tail; plus "how often can guinea pig eat".
- Reddit (recurring "is this safe?" pain, via DDG this run): "safe to eat" — https://www.reddit.com/r/guineapigs/comments/7othe3/safe_to_eat/ ; "Are these safe to feed Guinea Pigs?" — https://www.reddit.com/r/guineapigs/comments/pmw30r/are_these_safe_to_feed_guinea_pigs_i_want_to_give/ ; "Is this safe for my piggies to eat?" — https://www.reddit.com/r/guineapigs/comments/13b53oc/is_this_safe_for_my_piggies_to_eat/ ; community self-compiling a list: "Any suggestions to try out? This is the list I've compiled so far" — https://www.reddit.com/r/guineapigs/comments/swtm41/any_suggestions_to_try_out_this_is_the_list_ive/
- Content incumbent (guineapigtube.com "Full A-Z Food List", fetched this run): already a per-food table with verdict + frequency ("Bell peppers — Daily", "Blueberries — Treat 1–2× a week", "Avocado — toxic, never"), "regularly-updated", "Medically reviewed by Peter Wanner, DVM", cites RSPCA/PDSA/Humane Society/Merck. Runs Amazon Associates affiliate.
- Interactive incumbent (NibbleCheck, fetched this run for the sibling rabbit page): multi-species checker, per-food verdict pages, "Every verdict below cites a veterinary or rescue source", last reviewed 2026-06-04 — the interactive niche is partly occupied.
- Monetization: guineapigtube runs Amazon affiliate + product round-ups on the exact page format; display ads viable. CPC/volume: unknown (no CSV; none invented).

## Why weak (kept per gate list, not killed)

Demand and pain are large and real, but both the *content* (guineapigtube) and the *interactive format* (NibbleCheck) are already served by credible, vet-sourced incumbents; the only open edge is filter UX. Kept as weak — validate should decide if a filter-first angle or a specific under-served species/food set is enough of a hook, or reject on incumbent strength (mirrors the calculator-saturation rejections).

## History

- 2026-08-17 — candidate (emitted by scout run; marked weak — gate-4 near-miss on incumbent strength)
- 2026-08-19 — rejected: validation disproved the gate-4 hook. Demand strong (broad food + vitamin-C/calcium/chart tail; recurring "is this safe to eat" threads 2024–2026) and monetization strong (guineapigtube runs AdSense+Mediavine+Amazon), but the hook is served three ways by credible incumbents — NibbleCheck interactive guinea-pig checker (150 foods, vet-sourced), Guinea Lynx ranked Vitamin-C/Calcium/Ca:P/Oxalic charts **plus a Ca:P Excel calculator**, and guineapigtube's DVM-reviewed A-Z with per-food frequency. Same death shape as the niche's cat/rabbit-database rejections. Dossier kept as record. ([dossier](dossier.md) · [run](../../runs/2026-08-19-validate-guinea-pig-food-database.md))
