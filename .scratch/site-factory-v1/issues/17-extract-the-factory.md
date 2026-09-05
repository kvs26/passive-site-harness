# Extract the factory

Type: task
Status: open
Blocked by: 14, 15, 16

## Question

The map's **final** ticket. Distill everything shipping site #1 taught into the reusable **factory** —
the destination of this whole effort. Resolves the deferred **skill-shape decision** (map Notes:
"Skill-shape deferred to the final 'extract the factory' step, decided from the real build").

Deliver:

1. **The `/build-site` skill** — turn the now-proven manual sequence (clone `factory/house-template/`
   → edit `src/lib/site.config.mjs` → drop in `src/data/catalog.json` + brand assets → build) into a
   documented skill under `.agents/skills/`. Confirm the starting hypothesis (repo-tracked starter +
   one `/build-site` skill that plugs into `/implement`) against what the real build showed — tickets
   12/13 already confirmed the one-seam clone works, tickets 15/16 confirm the monetization pass.
2. **The documented standards** — capture the factory-wide conventions in one place: the stack
   conventions (ticket 08), the house-template seam + page set (tickets 09/10), the SEO baseline
   (ticket 03), the deploy checklist (ticket 06), and the two monetization passes (tickets 15/16) as a
   later "add monetization" step.
3. **End-state usage** the skill should support (map Notes): `/to-spec` an idea → `/build-site <prd>` →
   guided one-time Cloudflare wiring → live → later an "add monetization" pass.

This is where the map closes: once the factory is extracted and the skill exists, the destination is
reached and site-factory-v1 is complete.
