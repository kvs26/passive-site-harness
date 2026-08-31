# Free idea-research sources: what can an agent actually access?

Type: research
Status: resolved

## Question

For each free source class — web search, Google autocomplete / related searches, Google Trends, Reddit and niche forums, product/app reviews, existing websites, public spreadsheets/datasets, GitHub, manual Keyword Planner exports — determine what an agent can *practically* fetch today without paid APIs: endpoints or URL patterns that work, rate/ToS constraints, what signal each source realistically yields, and which (if any) need a deterministic fetch script vs plain browsing. Output a per-source capability table with recommended access method.

## Answer

Full findings: [research/01-source-access.md](../research/01-source-access.md). Key facts (live-probed Aug 2026):

- **Google autocomplete** is the strongest free signal: `suggestqueries.google.com/complete/search?client=firefox&q=` returns JSON, no auth. Alphabet-soup fan-out warrants a small caching fetch script.
- **Reddit `.json` endpoints are blocked (403)** from agent environments; use a free OAuth script app (100 QPM), or DDG `site:reddit.com` search. HN Algolia API works unauthenticated as a substitute forum source.
- **App Store reviews**: iTunes RSS `customerreviews` JSON works (~500 recent reviews/app). Play/Chrome Web Store need rendering for full reviews; Amazon is browse-only.
- **Google Trends** unofficial endpoints are 429/404'd; only trending RSS works — use web-UI CSV export (manual/browser). Keyword Planner stays a manual human CSV export.
- **GitHub** unauthenticated = 60 req/hr (search tighter); a free PAT gives 5,000/hr. DDG HTML SERPs work for competitor scans. data.gov CKAN API 404'd — re-verify before scripting.

Implication for ticket 02: autocomplete fan-out + DDG SERP + HN/Reddit-via-DDG + iTunes reviews form the reliable core of the scout checklist; Trends and Keyword Planner become optional manual-input passes.
