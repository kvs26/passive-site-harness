# Extract the distribution playbook into a `/spread-site` skill

Type: task
Status: open
Blocked by: 10

## Question

Turn the proven playbook into a reusable **`/spread-site` skill** — so that for any newly published site, invoking it walks the owner through the distribution channels **one at a time** (agent creates the assets/drafts per channel, owner posts), the same way `/build-site` was extracted from the site factory.

Only specifiable *after* the first pass (ticket 10) — the real runsonyourbattery.com execution reveals which channels are worth keeping, the true agent-drafts/owner-posts rhythm, and the ToS friction to bake into the skill. Do not build it on the plan; build it on what actually happened.

Deliverables:

- `.agents/skills/spread-site/SKILL.md` — a clone-and-run distribution skill: takes a live site (URL + `sites/<slug>/`), then per channel (foundation → Reddit/forums → Pinterest → directories → Q&A → YouTube comments) does the agent-side work and hands the owner a ready-to-post checklist, **one channel at a time**.
- Fold in the reusable "channel play" unit (ticket 03) as the skill's per-channel template; keep site-specific content out.
- Carry the hard rules verbatim: agent drafts / owner posts, free-only, no spam/ToS violations, no automated posting under the owner's identity.
- Note where the deep-SEO diagnosis (factory-site v2) and the scout/validate-v4 stance change hand off — this skill is distribution execution, not those.

## Answer

<!-- filled on resolution -->
