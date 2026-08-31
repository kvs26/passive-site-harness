# Rewrite idea-scout SKILL.md (v3)

Type: prototype
Status: resolved
Blocked by: 04, 05, 06, 07

## Question

Draft the v3 `idea-scout` skill encoding every settled decision: the strategy edge (05), new scout-time kills from the postmortem (01, esp. SERP-incumbent probe at candidate time and AIO-trigger test from 02), complexity-as-moat gate wording (06), buying-intent stance (07), monetization stance (affiliate+AdSense every site, products documented-only), relaxed maintenance gate, and the expanded source catalog from the pain-source survey (04) — plus the fog item on creative generation (generative/inversion pass: from buying moments, from datasets, from tool shapes — not just complaint scraping). User reacts to the draft; accepted draft replaces `.agents/skills/idea-scout/SKILL.md`.

## Answer

Draft accepted and installed as `.agents/skills/idea-scout/SKILL.md`; prototype asset kept at [prototypes/idea-scout-SKILL-v3.md](../prototypes/idea-scout-SKILL-v3.md). Shape of the v3 skill:

- **Edge section up top** — every candidate must be a "compound interactive dataset tool" (05's four mandatory parts: hand-verified dataset, per-query compute, long-tail surface, monetization fit), with the AIO shape ranking from 02 as guidance.
- **Hard rules added:** gate-4 near-misses **die at scout** (weak-kept survives for all other gates); "never emit with a named incumbent unopened"; SERP evidence is dated, 4-week validation expiry noted, scout runs ahead / validate throttles.
- **Passes 4 → 6:** pass 1 = 6-engine `suggest` fan-out flagging purchase-shaped completions; **pass 2 new: generative inversion** (buying moments / datasets / tool shapes, ≥2 per run, no evidence privilege) — consumes the creative-generation fog item; pass 3 = pain mining with 04's verified catalog incl. DDG query-recipes and a verified-dead list; **pass 4 = hardened incumbent probe** (tool-intent queries, fetch top hits, open incumbents, kill at scout, record incumbent affiliate links); **pass 5 = AIO probe** — predict-from-form for all, then *manual user checkpoint on top 5–10 candidates* (user's explicit choice: wider than emit shortlist), 3–5 head queries each, `&udm=14` control; pass 6 = Trends + dataset reconnaissance feeding gate 3.
- **Gates 6 → 7:** gate 1 → "AIO answers it"; gate 3 → verbatim two-sided "Data won't moat" (06); gate 4 → probe-backed "hook already served"; gate 7 → verbatim "No monetization fit" (07); **emit-ranking rule** (affiliate-route above pure high-RPM) verbatim as its own section.
- **idea.md template** gains `## Edge` (four parts + products-documented-only note), `## Incumbent probe` (dated), `## AIO probe`.
- Helper-scripts section lists 04's adapter roster (credential-free + credentialed) for ticket 10 to implement.

User decisions during review: AIO probe = mixed depth (predict-from-form everywhere, manual check on top 5–10); gate-4 near-miss auto-kill accepted as drafted.

