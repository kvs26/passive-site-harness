# Site-PRD template for /to-spec

Type: grilling
Status: resolved

## Question

Define the site-PRD template that augments `/to-spec` for website PRDs: sections for the tool's core job, data source & update plan, page map (tool + crawlable methodology/data/comparison pages), SEO targets drawn from the dossier's real queries, monetization placement, and the standing constraints (static, no accounts/DB/backend, mobile-first, fast, crawlable). Decide where the template lives and how `/to-spec` is pointed at it.

## Answer

Template created at [docs/agents/site-prd-template.md](../../../docs/agents/site-prd-template.md).

- **Wiring**: standalone doc, referenced at invocation — the user attaches `idea.md` + `dossier.md` + the template when invoking `/to-spec`; the shared skill is never modified. Output goes to `pipeline/<niche>/ideas/<idea-slug>/prd.md`.
- **Structure**: **extends** `/to-spec`'s generic sections (Problem Statement, Solution, User Stories, Implementation Decisions, Testing Decisions, Out of Scope) rather than replacing them.
- **Seven site sections**: Core job, Data source & update plan, Page map, SEO targets, Monetization placement, Maintenance plan (added during grilling — "passive" is the point), Standing constraints.
- **Monetization default**: Google AdSense, with affiliate/other options when the dossier shows they pay better; placement recorded per page type. The broader monetization playbook stays in the map's fog.
- **Usage instructions** live in a "How to use" header note inside the template itself, so one attachment carries both structure and workflow. It also restates the hard rule: never invent volume/CPC/traffic/revenue figures.
