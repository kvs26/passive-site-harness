# Strategy verdict: winnable, and with what edge?

Type: grilling
Status: resolved
Blocked by: 01, 02, 03

## Question

Given the postmortem (01), the AIO-shape research (02), and the earnings math (03): is the static passive-site game still winnable for a solo builder in 2026 under the viability bar (~$100–300/mo per idea in 6–9 months, ≤2–4 hrs/week portfolio maintenance) — and if yes, what is the named edge every future idea must have (e.g. curated-verified dataset + interactive AIO-proof tool + buying intent)? If no, what pivot does the evidence point to? This is the keystone HITL decision; everything downstream (06–10) reshapes around its answer.

## Answer

**Verdict: winnable — conditional on speed + moat.** Nothing in the evidence says AIO-proof shapes are unrankable or unmonetizable; the graveyard was a self-inflicted *scout* failure (18/20 kills emitted already flagged gate-4) plus a fantasy bar, both now fixed/fixable. Four decisions:

**1. Re-set viability bar.** Old bar (~$100–300/mo per idea in 6–9 months) was half-unsupported by ticket 03. New bar: **$100/mo per surviving site within 9–12 months of launch; $300/mo is a portfolio outcome across 3+ sites** (not a per-site gate). The 6–9-month window is dropped. ~2–4 hrs/week portfolio-maintenance ceiling stays as guidance, but deliberate complexity is now allowed as moat (ticket 06 operationalizes).

**2. The named edge — "compound interactive dataset tool," all four parts mandatory:**
   1. **Curated, hand-verified dataset** — N rows of stable public data an AI farm won't hand-verify (the moat + deliberate-maintenance bet).
   2. **Per-query computation on user-specific inputs** — the AIO-proof mechanic; goal requires an action a summary can't perform (compute / generate a file / filter).
   3. **Long-tail surface** — per-item/per-brand pages generated from the dataset; the ranking surface that beats a single-page incumbent and degrades gracefully against a fresh one.
   4. **Monetization fit** — niche is buying-adjacent (affiliate program exists) *or* high-RPM (home/appliance-class ~5× RPM); at least one must hold (exact weighting = ticket 07).

   Ideas with only 1+3 (static directory) or only 2 (bare calculator) fail the edge — both graveyard patterns.

**3. Edge is a layer above the six gates, not a replacement.** Gates 2/5/6 survive ~as-is. Gate 1 → concrete AIO-probe (02); gate 4 → harder SERP-incumbent probe (01); gate 3 → *inverted* by complexity-as-moat (ticket 06). New positive requirements the current gates don't test: parts 3 (long-tail surface) and 4 (monetization fit). Final gate list/wording is ticket 08's deliverable; this ticket only locks the strategy sentence those gates encode.

**4. Speed condition operationalized (3 rules):**
   1. **Validation expires** — a `validated` idea's SERP evidence goes stale after **4 weeks**; entering build later requires re-running the lightweight hook-SERP probe (02's manual Google check) and re-confirming the incumbent gap.
   2. **Pre-build re-probe is mandatory regardless of age** — last check before any build starts.
   3. **WIP discipline** — don't stockpile validated ideas; validate only when prepared to build within the expiry window. Scout runs ahead freely (candidates are cheap); *validate* is the throttle.

**Consequence recorded:** the 2 validated pet-food ideas (validated ~May 2026, now past the 4-week window) must be re-probed before the site-factory effort builds them.

No new tickets surfaced — 06–10 already cover the downstream reshaping. No fog graduated; no scope changes.
