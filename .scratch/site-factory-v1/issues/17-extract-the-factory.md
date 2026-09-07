# Extract the factory

Type: task
Status: resolved
Blocked by: 14 (15, 16 ruled out of scope — see their files)

## Question

The map's **final** ticket. Distill everything shipping site #1 taught into the reusable **factory** —
the destination of this whole effort. Resolves the deferred **skill-shape decision** (map Notes:
"Skill-shape deferred to the final 'extract the factory' step, decided from the real build").

Deliver:

1. **The `/build-site` skill** — turn the now-proven manual sequence (clone `factory/house-template/`
   → edit `src/lib/site.config.mjs` → drop in `src/data/catalog.json` + brand assets → build) into a
   documented skill under `.agents/skills/`. Confirm the starting hypothesis (repo-tracked starter +
   one `/build-site` skill that plugs into `/implement`) against what the real build showed — tickets
   12/13 already confirmed the one-seam clone works, tickets 15/16 confirm the monetization pass. The
   skill must **ask the site owner whether to enable `SITE.monetization.productLinks`** (ticket 18) —
   plain, untagged outbound product links are safe pre-launch/pre-Associates but are off by default;
   don't leave the question unasked.
2. **The documented standards** — capture the factory-wide conventions in one place: the stack
   conventions (ticket 08), the house-template seam + page set (tickets 09/10), the SEO baseline
   (ticket 03), the deploy checklist (ticket 06), and the two monetization passes (tickets 15/16) as a
   later "add monetization" step.
3. **End-state usage** the skill should support (map Notes): `/to-spec` an idea → `/build-site <prd>` →
   guided one-time Cloudflare wiring → live → later an "add monetization" pass.

This is where the map closes: once the factory is extracted and the skill exists, the destination is
reached and site-factory-v1 is complete.

## Answer

Resolved with an explicit override from the site owner (see this ticket's session): tickets 15/16 are
ruled **out of scope** rather than executed — AdSense and Amazon Associates signup/linking stay the
site owner's own manual, per-site action, never an agent-driven activation pass. That freed this
ticket to close on its own, unblocked by them.

Delivered:

1. **The `.agents/skills/build-site/` skill** (`SKILL.md`) — the reusable clone-and-fill procedure,
   confirming the starting hypothesis (repo-tracked starter + one skill). Departs from the original
   plan in two ways the owner asked for:
   - **The template is no longer a standalone `factory/house-template/` folder.** Its contents moved
     to `.agents/skills/build-site/assets/house-template/` — the skill bundles its own template asset
     rather than pointing at a sibling folder. `factory/` no longer exists.
   - **Dataset and links are owner-supplied, not agent-researched.** The skill asks the site owner to
     hand over raw material (markdown/PDF/CSV/notes for the dataset, a raw link list for
     affiliate/product URLs) and applies judgement to shape it into `catalog.json` + verified links —
     it never sources data or links itself. `SITE.monetization.productLinks` stays an explicit
     yes/no question per ticket 18, not a silent default.
   - Everything site-specific — config, dataset, links, brand assets, `wrangler.jsonc` — lives only in
     `sites/<slug>/`; the bundled template asset is never mutated while building a specific site.
2. **Lessons from `sites/runs-on-your-battery-finder`'s real drift folded into the bundled template**:
   `AdSlot.astro` now only shows its reserved-space placeholder in dev (a production visitor never
   sees an empty ad box); `wrangler.jsonc` is now bundled from the start (Cloudflare onboards new
   static sites via Workers, needing this file); the whitespace-before/after-`<a>` bug and the
   "match the niche's own voice rather than copying site #1's copy verbatim" note are both documented
   in the skill so future sessions don't rediscover them.
3. **Documented standards** live inside the skill (`SKILL.md`) and the bundled template's own
   `README.md` (skin/layout-mode system, SEO baseline, page set, monetization holes) rather than a
   separate standards doc — one place to read, not two.
4. **End-state usage confirmed**: `/to-spec` an idea → `/build-site` (scaffold + config + dataset/links
   intake) → owner does domain/Git/Cloudflare wiring manually → live → owner separately asks for the
   monetization-switch flip once they've joined AdSense/Associates themselves.

The map closes here: the destination (a repeatable factory, proven by shipping site #1) is reached.
