# 06 — Write the v2 skill edits

Type: task
Status: resolved
Blocked by: 01, 02, 03, 05

## Question

Apply the decided changes: edit `.agents/skills/idea-validate/SKILL.md` (Keyword Planner checkpoint, rubric changes, dossier template additions) and, if the MCP decision touches it, `.agents/skills/idea-scout/SKILL.md`. Update any templates/docs the changes reference. This is the destination ticket — closing it ends the map.

## Answer

Done 2026-08-15. Edits applied:

**`.agents/skills/idea-validate/SKILL.md`** (v2):

- Hard rule "never invent numbers" amended per issue 02(d): verbatim quoting from on-disk artifacts / fetched pages allowed with source; derived arithmetic shows inputs.
- Hard rule added: MCP tools optional (Fetch + Brave for source-gathering, Playwright for SERP/competitor deep-dive), graceful degrade, no fallback order (issue 05).
- Run inputs: check for `keyword-planner.csv` / `keywords-request.md`; parked-with-CSV re-run is a cheap top-up.
- New "Keyword Planner checkpoint" section after demand pass 1: request written from real query variants (~15–25 grouped keywords), fresh CSV used silently, soft 6-month staleness flag, missing CSV ⇒ finish full dig then park (issue 03).
- New "Keyword Planner data in the rubric" section: volume-bucket gates for Demand, top-of-page-low-bid USD-equiv thresholds for Monetization, Competition column context-only, AdSense heuristic never outputs a number, CSV format note (UTF-16LE, tab-separated, preamble rows) (issues 01–02).
- Confidence: no CSV caps at medium.
- Dossier template: new "Keyword data" section between SERP snapshot and Monetization sketch.
- `parked` state: exact History + end-of-run wording from issue 03; comparison-brief trigger states parked never counts toward ≥3.
- Frontmatter description mentions the manual checkpoint.

**`.agents/skills/idea-scout/SKILL.md`**: mention-only hard-rule note that Fetch/Brave MCPs may be used if available; catalog and scripts unchanged.

No other templates needed changes (`comparison-brief-template.md` untouched by the decisions). Remaining open tickets 07–09 (env credentials, CSV parsing helper, MCP config) are setup tasks past the skill edits.
