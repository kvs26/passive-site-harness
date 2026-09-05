# Write the PRD for site #1

Type: task
Status: resolved
Blocked by: 08, 09, 10

## Question

Write the site-PRD for [runs-on-your-battery-finder](../../../pipeline/power-tool-battery-compat/ideas/runs-on-your-battery-finder/idea.md) via `/to-spec` + the site-PRD template
(`docs/agents/site-prd-template.md`), attaching the idea's `idea.md` and `dossier.md`. Now unblocked —
the stack (ticket 08) and house template (tickets 09/10) are settled, so the PRD's Implementation
Decisions can write against the template's concrete per-site seam: `src/lib/site.config.mjs` +
`src/data/catalog.json` in `factory/house-template/`.

Output lands at `pipeline/power-tool-battery-compat/ideas/runs-on-your-battery-finder/prd.md`.

## Answer

Written to [prd.md](../../../pipeline/power-tool-battery-compat/ideas/runs-on-your-battery-finder/prd.md).
Site #1 is a config-and-dataset-only consumer of `factory/house-template/`: `layoutMode: 'list'`,
`neutral` skin, the template's existing `catalog.json` schema extended with real platforms/categories,
mandatory hand-verified `fit` per row, long-tail pages via the template's `[platform]/[category].astro`
route, monetization config populated but switched off at launch (ship-first ordering). SEO targets map
directly to the dossier's CSV-evidenced queries (milwaukee m18 fan, dewalt battery fan/vacuum/chainsaw,
etc.) — no invented volumes. Out of scope: actual dataset population, domain/Cloudflare wiring (ticket
06), turning on monetization, and any template/layout changes.
