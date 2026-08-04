# Validation rubric and dossier structure

Type: grilling
Status: resolved
Blocked by: 01

## Question

Define the `idea-validate` rubric: the exact signal list (problem recurrence, query breadth, SERP weakness, competitor quality, hook, monetization paths, build complexity, maintenance burden, unique-data opportunity), the strong/weak/unknown grading rules per signal, the evidence standard (real quotes/links only), the confidence grade, and the dossier + comparison-brief section layout. Output: rubric and templates that go verbatim into the skill.

## Answer

Settled via grilling on 3 Aug 2026.

### Signal list (six — overlapping signals merged)

1. **Demand** — problem recurrence + query breadth merged: do people have this problem, repeatedly?
2. **SERP & competitor weakness** — SERP weakness + competitor quality merged: how beatable are current results?
3. **Hook depth** — evidence-level re-check of scout gate 4: does the evidence show the hook actually matters to users?
4. **Monetization paths** — plausible AdSense/affiliate/other routes.
5. **Feasibility & maintenance** — build complexity + maintenance burden merged; evidence-level re-check of scout gates 2–3.
6. **Unique-data opportunity** — can we get/derive data competitors don't have?

Scout applies gates as coarse pass/fail; validate re-examines the gate-overlapping signals (3, 5) in depth with evidence.

### Grading rules (strong/weak/unknown — no numbers, ever)

- **Strong** — ≥2 independent pieces of real evidence (quotes, links, SERP observations) pointing the same way.
- **Weak** — evidence exists but is thin, old, or contradicted by other evidence.
- **Unknown** — no real evidence found; first-class value. Must record *what was searched* so a later pass doesn't repeat it.
- **Anti-gaming rule:** a grade without at least one link/quote beside it is invalid — the template forces evidence next to every grade.
- **Every grade carries a one-line why** plus its evidence:

  ```
  **Demand: strong** — same complaint recurs across 3 forums over 18 months.
    - "quote..." (link)
    - "quote..." (link)
  ```

  For unknown, the "why" is what was searched and came up empty.

### Evidence standard

- Real quotes/links only — never paraphrased or invented.
- **Independence:** two quotes from the same thread = one piece of evidence. Independent = different site, or different community/thread on the same site.
- **Freshness:** evidence older than ~2 years counts toward *weak* unless corroborated by something recent.

### Confidence grade (per dossier)

One-liner: *"How much digging backs this dossier up?"* — confidence in the evidence, not a verdict on the idea. A bad idea can have a high-confidence dossier.

- **High** — no signal unknown; demand and SERP-weakness each graded from ≥2 independent sources.
- **Medium** — one or two unknowns, but demand itself is evidenced.
- **Low** — demand is weak/unknown, or ≥3 signals unknown.

### Dossier layout (one file per idea)

1. **Verdict line** — one sentence: idea, hook, confidence grade.
2. **Signal scorecard** — six signals, each grade + why + evidence.
3. **SERP snapshot** — actual top results for 2–3 key queries and why they're beatable (or not).
4. **Monetization sketch** — likeliest route and where it'd sit on the site.
5. **Risks & unknowns** — everything graded unknown, plus what was searched.
6. **Sources log** — every source consulted, including dead ends.

### Comparison brief (triggered at ≥3 validated ideas; one file per batch, links each dossier)

1. **One-glance table** — rows = ideas, columns = six signals + confidence, cells = strong/weak/unknown.
2. **Per-idea paragraph** — 3–4 sentences: hook, strongest evidence, biggest risk.
3. **Agent's read** — short "if I had to rank them" note with reasons, clearly labelled opinion, never a score.
4. **Decision prompt** — explicit line that picking is the human's checkpoint.
