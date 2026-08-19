# Validate run — 2026-08-19 — xylitol-brand-directory

One idea, one session. Verdict: **rejected** (gate 4 disproved). Confidence: medium (no Keyword Planner CSV; not needed — rejection rests on a competitive gate, not demand sizing).

## What was dug

- **Demand (pass 1):** autocomplete fan-out via `scripts/fanout.py` on brand/variant/candy/gum/birch-sugar/panic seeds → dense per-brand tail (Jif variants, Skippy, Kraft, Great Value, Best Choice/Best Yet, Orbit, Trident, candy, "birch sugar", "my dog ate xylitol"). Pain dig via DDG `site:reddit.com` (pain-fetch adapter bot-challenged; used fetch tool) → recurrence across r/dogs, r/puppy101, r/DogAdvice, r/LifeProTips, r/NoStupidQuestions, r/todayilearned, ~2015→2024. **Demand = strong.**
- **SERP & competitor (decisive):** Playwright DDG scans for the single-brand query, the brand-directory query, and the products-directory query. The products-directory query returns **Preventive Vet #1** — a maintained, searchable, 700+ product xylitol directory with per-product last-verified dates and a crowdsource intake form: i.e. the exact proposed product, already built by an authority. dogsafer.com and FDA reinforce. **SERP-weakness = weak** for the proposed format.
- **Hook / feasibility / unique-data:** NC State CVM article + Preventive Vet confirm the only data source is a denylist already published by authorities; the sole unserved angle (an explicit "SAFE" allowlist verdict) is the gate-5 liability. Community + vet quotes note xylitol PB is rare and mainstream brands are safe → thin marginal value. **Hook/feasibility/unique-data = weak/unknown.**
- **Monetization:** ad-network inspection — Preventive Vet (AdSense) and seniordogdays 28-brand list (AdSense+Ezoic+Amazon) monetize this content; low pet CPC. **Monetization = weak.**

## Keyword Planner checkpoint

Skipped the request/park path. The idea is rejected on a disproved competitive gate (gate 4), not on demand confidence — demand is already strong from autocomplete breadth + multi-community recurrence, and a CSV would not revive a hook that a maintained incumbent already serves. Consistent with the niche's prior gate-4 rejections (dog-food-calculator, chocolate-toxicity-calculator), which were rejected without waiting on CSV.

## Dead ends / degraded sources

- `scripts/pain-fetch.py ddg` — bot-challenged, empty output.
- Direct fetches of Google, Bing, DDG-html, lite.DDG, Mojeek SERPs — all bot-challenged/anomaly-gated this run. Playwright DDG html worked and supplied the live SERP snapshots.
- `scripts/fanout.py --mode plain` quirk: a bare word after `--mode` is parsed as a seed and mode falls back to "all" (needs `--mode=plain`); produced "plain …" noise in batch 1 — discarded.

## Decision

Rejected. Scout gate 4 ("searchable brand directory format is genuinely unserved") is disproved by Preventive Vet's maintained 700+ product searchable directory (ranks #1 for the directory query, per-product verified dates, crowdsource intake), with gate 5 (safe-claim liability) still unresolved on the only remaining differentiator. Dossier kept as the record.

## No comparison brief

After this state change, `pet-food-tools` still has exactly **1** `validated` idea (can-my-dog-eat-database); parked (dog-treat-portion-calculator) and rejected ideas don't count. < 3 → no comparison brief.
