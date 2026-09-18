# Extract the distribution playbook into a `/spread-site` skill

Type: task
Status: resolved
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

**Deliberate override:** resolved ahead of ticket 10 (first-pass wrap) at the owner's request — none
of the 5 channels are confirmed posted yet, so this is built on the drafting-phase learnings (real
channel shortlist, ToS friction, the agent-drafts/owner-posts rhythm) rather than validated posting
outcomes. That's a real gap: the skill's *mechanics* don't depend on posting having happened, but its
*channel rankings* aren't yet backed by engagement data. Fold in real posting results later if/when
they change which channels are worth keeping.

**Shipped:**

- [.agents/skills/spread-site/SKILL.md](../../../.agents/skills/spread-site/SKILL.md) — the
  reusable skill. Works one channel at a time (foundation → Reddit/forums → Pinterest → directories
  → Q&A → YouTube comments), carries the hard rules verbatim (agent drafts/owner posts, free-only,
  real-evidence-only, only-link-when-it-helps), and folds in the channel-play unit from ticket 03's
  [docs/distribution-playbook.md](../../../docs/distribution-playbook.md) as its conceptual base.
- **Owner feedback baked in:** the pilot's site-specific files
  (`sites/runs-on-your-battery-finder/distribution/*.md`) came out much longer than a simple
  posting task needs (tables, multi-week schedules, long prose). The skill instead defines a short,
  4-line-per-channel checklist format (Where / Post this / Link / Watch for) — same underlying ideas
  as the playbook doc, condensed to something an owner can act on without reading a spec.
- [USAGE.md](../../../USAGE.md) — added a "Distribute" step (step 8) to the main workflow, plus table
  rows for the new skill and the new root doc.
- [DISTRIBUTION.md](../../../DISTRIBUTION.md) — new root-level file, plain-language explainer of what
  distribution is, how `/spread-site` works, and the rules that never change. Points to the skill and
  the deeper playbook doc for anyone who wants more detail.

Ticket 10 (first-pass wrap) still owns confirming the *runsonyourbattery.com* pass is genuinely
executed and consolidating what actually got posted — this ticket only extracts the reusable skill.
