# Map: Strategy v3 (passive-site-harness-v3) — is the passive-site game winnable, and with what edge?

Label: wayfinder:map
Status: open

## Destination

A locked strategy verdict — whether static passive sites are still winnable in 2026 given the gate-4 graveyard (AI-built incumbents saturating niches), and if so with what edge — followed by `idea-scout`, `idea-validate`, and `scripts/pain-fetch.py` rewritten to encode that strategy, ready to run. (Note: this effort's Notes override wayfinder's plan-only default for the skill/script rewrites — they are in-scope deliverables.)

## Notes

- Successor effort to [passive-site-harness-v1](../passive-site-harness-v1/map.md) (v1 spec) and [passive-site-harness-v2](../passive-site-harness-v2/map.md) (Keyword Planner + MCP; formerly "idea-skills-v2"). One map per effort; those maps are closed history.
- Domain: passive-website idea pipeline (`pipeline/`), skills in `.agents/skills/`, helper scripts in `scripts/`.
- Skills to consult per session: `/grilling`, `/domain-modeling`, `/research`, `/prototype`.
- Hard rules carry over: never invent numbers; evidence-only; no paid SEO tools.
- Board state that triggered this effort: ~24 ideas validated, only 2 survived (both pet-food-tools); ~17 kills are gate-4 "purpose-built incumbent found, link attached" — often 2026-fresh AI-built sites. Zero sites published so far.
- Research findings live in `research/NN-<slug>.md` inside this effort (v1 convention).

### Settled during charting

- **Viability bar:** a repeatable process where one validated idea can plausibly reach ~$100–300/mo within 6–9 months of launch, on ≤2–4 hrs/week maintenance across the whole portfolio.
- **Maintenance rule relaxed:** the ~quarterly-refresh ceiling is no longer a hard gate — *deliberate* complexity/maintenance can be the moat AI site farms won't copy. How that becomes a scout/validate criterion is ticket 06.
- **Distribution: Google SEO only**, aimed exclusively at query shapes Google's AI Overviews can't answer (interactive tools, user-specific inputs, multi-step lookups). No multi-channel marketing; "information on a page" ideas are out.
- **Monetization: affiliate + AdSense both, on every site.** Digital products (printables/PDFs via Gumroad-style checkout) are documented per idea in `idea.md`/dossier but OFF by default — user enables manually per site.
- **Site complexity: static + heavy client-side** ("option B") — no server/DB/accounts; value = curated dataset (JSON/CSV files in the site repo) + rich interactive tool logic. Affiliate links are fields in those data files; expected rot handled by a quarterly link-check pass. Payout mechanics understood (Associates signup needs a live site; W-8BEN; FTC disclosure line; Amazon 3-sales/180-days quirk).
- **Weak-signal clarification:** validate rejects only on factually disproven gates (usually gate 4), never on weak grades alone — the graveyard is scout proposing already-taken hooks, not validate over-strictness. Postmortem (ticket 01) confirms and operationalizes.
- **Scope split:** this effort ends at rewritten skills. Building/launching sites is the next wayfinder effort ("site factory", separate map, fresh session).

## Decisions so far

<!-- one line per closed ticket -->

- [Gate-4 graveyard postmortem](issues/01-graveyard-postmortem.md) — 18/20 kills were emitted already flagged gate-4 near-miss; survivors = incumbent-gap-confirmed + dataset + per-query compute; top fixes: hook-intent SERP probe (~13–14 kills), no-emit-with-named-incumbent (~6–7), shape filter (~8–10), AIO probe, differentiator fan-out; ~8 kills involved ≤8-week-old incumbents → SERP shelf-life is weeks.
- [AI-Overview-proof query and tool shapes](issues/02-aio-proof-shapes.md) — AIO costs pos-1 ~58% of clicks; informational triggers 21–36% vs transactional 2–5%; shape ranking: multi-input calculator > printable generator > SKU lookup > multi-constraint finder > data table > converter > article; scout test = manual Google check on 3–5 head queries (+`&udm=14` control); dog-treat calc survives, can-my-dog-eat fails as built (pivot: toxicity-by-weight calculator).
- [Realistic 2026 earnings per visitor](issues/03-earnings-per-visitor.md) — Pets/Reference/Food RPM ~$2.33–2.67 vs Home & Garden ~$13.33 (5×); Amazon 3–4.5%, 24-h cookie; ads-only $100/mo needs ~43K pv (pets) vs ~7.5K (home); blended $100/mo ≈ 4.3–11.5K visitors; **$300/mo in 6–9 months unsupported by evidence** — viability bar itself needs re-setting in ticket 05.
- [Pain-source expansion survey](issues/04-pain-source-survey.md) — build-now adapters: stackexchange, discourse, suggest (6 engines), lemmy, gplay, lobsters; credentialed: YouTube Data API v3, Reddit OAuth (pending), Product Hunt; plus ddg query-recipes (r/SomebodyMakeThis, "is there a tool", Trustpilot complaints); verified dead: Quora, Trustpilot direct, Amazon reviews, Chrome Web Store, Indie Hackers, X.

## Not yet specified

- **Re-triage of the existing pipeline** — what happens to today's `parked`/`candidate` ideas (and the 2 `validated` pet-food ideas) under the new gates once the rewrites land; whether old dossiers get re-graded. Sharpens after tickets 08–09.
- **Creative idea generation beyond pain mining** — the user wants "hard problems worth solving" and out-of-the-box discovery, not just complaint scraping; whether scout gains a generative/inversion pass (e.g. start from buying moments, from datasets, from tool shapes) — sharpens after the postmortem (01) and shape research (02).
- **Keyword Planner checkpoint's role** if monetization becomes a primary scout-time filter — may need re-weighting once ticket 07 resolves.
- **Reddit OAuth adapter** — user's developer-access application is pending; when approved, enabling it is a small task inside or after ticket 10.

## Out of scope

- **Building and launching sites** — the "site factory" effort: stack/hosting/domain choice, reusable high-design template, site-build skill, affiliate/AdSense integration, launch checklist, shipping dog-treat-portion-calculator. Next wayfinder map, new session.
- **Implementing digital-product checkout** — documented-only by default per the monetization stance; enabling is a per-site manual act later.
- **Non-Google traffic channels** (Reddit/Pinterest/YouTube/newsletter marketing) — ruled out with distribution decision; revisit only if the strategy verdict forces it.
