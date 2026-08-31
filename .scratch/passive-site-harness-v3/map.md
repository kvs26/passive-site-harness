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

- **Viability bar:** *(re-set by the strategy verdict, ticket 05)* $100/mo per surviving site within 9–12 months of launch; $300/mo is a portfolio outcome across 3+ sites, not a per-site gate; time budget re-set again by ticket 06 to ~10 hrs/week portfolio with a ~3 hrs/week per-site upkeep cap. *(Original charting figure was ~$100–300/mo per idea in 6–9 months — unsupported by ticket 03.)*
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
- [Strategy verdict: winnable, and with what edge?](issues/05-strategy-verdict.md) — **winnable, conditional on speed + moat**; bar re-set to $100/mo per site in 9–12 months with $300/mo a portfolio outcome across 3+ sites; the edge = **"compound interactive dataset tool"** (hand-verified dataset + per-query compute on user inputs + long-tail surface + monetization fit), all four mandatory; edge is a layer above the six gates not a replacement; speed rules: validation expires at 4 weeks, mandatory pre-build re-probe, no stockpiling (validate is the throttle) — the 2 pet-food dossiers need re-probing before build.
- [Complexity-as-moat criteria](issues/06-complexity-moat-criteria.md) — time budget re-set to **~10 hrs/week portfolio, ~3 hrs/week per-site upkeep cap** (hours-based; quarterly-cadence rule dropped); scout gate 3 → two-sided **"Data won't moat"** (kills unsustainable *and* moat-free data; moat floor = qualitative replication test, no row minimum); validate signal 5 → **"Feasibility & sustainable upkeep"** (upkeep estimate is the deliverable, only the cap kills); signal 6 → **"Data moat"** with long-tail surface folded in; exact replacement wording ready for tickets 08–09.
- [Buying-intent niche stance](issues/07-buying-intent-stance.md) — hard gate + ranked preference: new scout **gate 7 "No monetization fit"** (disjunctive: named-program affiliate-linkable outputs OR high-RPM category), affiliate-route candidates outrank pure high-RPM ones at emit; Planner bid bar splits by route (high-RPM needs ≥ ~$1.00 head-term bids, affiliate-route bids supporting-only); low-RPM pure-ads ideas dead (kills poem/poetry niches), high-RPM pure-ads second-class-but-allowed; exact gate/ranking/signal-4 wording ready for tickets 08–09.
- [Rewrite idea-scout SKILL.md (v3)](issues/08-rewrite-idea-scout.md) — accepted draft installed at `.agents/skills/idea-scout/SKILL.md`: edge section (compound interactive dataset tool, 4 mandatory parts), 6 passes (new generative-inversion pass; hardened scout-time incumbent probe; AIO probe with manual user check on top 5–10 candidates), 7 gates (verbatim "Data won't moat" and "No monetization fit"), gate-4 near-miss auto-kill, emit ranking (affiliate-route first), updated source catalog + idea.md template.
- [Rewrite idea-validate SKILL.md (v3)](issues/09-rewrite-idea-validate.md) — accepted draft installed at `.agents/skills/idea-validate/SKILL.md`: validate-is-the-throttle framing (4-week evidence expiry in dossier + History, mandatory pre-build re-probe), signal 4 → route-graded Monetization (affiliate bids supporting-only; high-RPM needs ≥ ~$1.00 head-term bids + CSV), signal 5 → Feasibility & sustainable upkeep (hrs/week estimate, only the ~3 hrs/week cap kills), signal 6 → Data moat (named barrier + long-tail surface), manual AIO re-probe inside signal 2, advisory traffic sanity-check (blended $100/mo ≈ 4.3–11.5K visitors), digital-products documented-off-by-default dossier section, kill-level-finding rule (weak grades never reject).
- [Extend pain-fetch adapters](issues/10-extend-pain-fetch.md) — `scripts/pain-fetch.py` grown 4 → 12 adapters, matching the v3 scout catalog: credential-free `stackexchange`, `discourse`, `suggest` (6 engines), `lemmy`, `gplay`, `lobsters` all live-tested; `.env`-gated `youtube` + `producthunt` dormant until keys arrive; `fetch()` gained gzip + POST; Reddit OAuth still pending — not wired, unauthenticated confirmed dead.
- [Re-triage the existing pipeline under v3](issues/11-retriage-pipeline.md) — rejected ideas stay rejected; all 4 parked ideas killed (poem-by-persona-finder gate 7, roti-sabzi-pairing-matrix gates 1+7, sabzi-by-vegetable-index gate 7, animated-sticker-checker gates 7+3b); dog-treat-portion-calculator kept validated (in-window, expires 2026-09-16, v3 Edge block added, pre-build re-probe mandatory); can-my-dog-eat-database demoted to candidate with a toxicity-by-weight pivot note pending full v3 re-validate. Net: 1 validated, 1 candidate, 24 rejected.

## Not yet specified

- **Reddit OAuth adapter** — user's developer-access application is still pending (checked 2026-09-01, during [Extend pain-fetch adapters](issues/10-extend-pain-fetch.md)); when approved, wiring it is a small standalone task — gate on `REDDIT_CLIENT_ID`/`REDDIT_CLIENT_SECRET`, endpoint notes in the ticket's answer.

## Out of scope

- **Building and launching sites** — the "site factory" effort: stack/hosting/domain choice, reusable high-design template, site-build skill, affiliate/AdSense integration, launch checklist, shipping dog-treat-portion-calculator. Next wayfinder map, new session.
- **Implementing digital-product checkout** — documented-only by default per the monetization stance; enabling is a per-site manual act later.
- **Non-Google traffic channels** (Reddit/Pinterest/YouTube/newsletter marketing) — ruled out with distribution decision; revisit only if the strategy verdict forces it.
