# Validate run — poem-by-persona-finder — 2026-08-29

Niche: occasion-poem-finder (US). Idea: poem-by-persona-finder (candidate → parked).
Credentials: no `.env`; credential-free adapters + Playwright MCP browser for SERP. DDG-HTML script captcha'd (as at scout); used DDG in-browser instead.

## Dug

- **Demand (pass 1):** autocomplete fan-out (`scripts/fanout.py`, alpha + plain) on "funeral poem for a / for someone who loved / funeral reading for a". Confirmed a very broad persona long-tail — professions, hobbies, fandom (sports teams), personality, plus recurring tone qualifiers (non religious / secular / short). Graded **strong**, corroborated by independent supplier proliferation (markyouroccasion persona web, poemverse/ecopatchy farms, candlestickpress pamphlet, Etsy printable).
- **SERP & competitor:** DDG in-browser on "funeral poem for a gardener" and "…knitter"; opened poemverse (AI-fabricated poems + AdSense) and markyouroccasion (curated, credited poets, persona web). The persona axis is occupied and crowded, one genuinely curated incumbent → **weak**.
- **Hook depth:** the scout's "relationship finders don't index by persona" premise is contradicted — markyouroccasion already indexes by hobby/persona; per-persona pages satisfy per-persona queries. **weak**.
- **Monetization:** AdSense confirmed live on poemverse; Etsy/candlestickpress print-product route visible. No CPC read without CSV → **weak**.
- **Feasibility:** static PD/free-to-use corpus + tags + client-side filter, near-zero refresh → **strong** (caveat: heavy one-time curation; real fitting poems scarce for narrow personas).
- **Unique data:** curation, not proprietary data; AI floods persona poems → **weak**.

## Dead ends

- `scripts/pain-fetch.py ddg` — captcha, empty.
- `site:reddit.com` persona-poem search — DDG swallowed the operator, returned the generic knitting SERP; no forum recurrence established.

## Keyword Planner checkpoint

No `keyword-planner.csv`. Wrote `keywords-request.md` (~22 keywords: head / persona variants / hook+tone / print-CPC). Finished the full dig, wrote the dossier at medium confidence, and parked.

## Outcome

Not rejected — demand is strong and no scout gate was cleanly disproved (a filterable multi-facet finder of *verified* poems is still technically unbuilt). But the hook is contradicted (persona index already exists) and the deciding question is whether the persona long-tail carries enough volume/CPC to be worth fighting the AI farms — which needs the CSV. **Parked** at medium confidence.

No winner picked. Comparison brief not triggered (0 validated ideas in this niche).
