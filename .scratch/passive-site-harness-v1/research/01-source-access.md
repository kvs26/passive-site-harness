# Research: Free Source Access for Problem-Discovery (Agent-Practical, Aug 2026)

**Ticket:** 01-source-access · **Method:** live probes (curl + agent fetch) against the actual endpoints on 3 Aug 2026, plus primary docs. Every HTTP status below was observed directly; no numbers are guessed.

## Summary capability table

| # | Source | Access method | Reliability (observed) | Script needed? | Signal value for idea discovery |
|---|--------|---------------|------------------------|----------------|--------------------------------|
| 1 | Web search | DuckDuckGo HTML/Lite endpoints (`html.duckduckgo.com/html/?q=`) | High — returned full SERPs (200) | Optional; plain agent fetch works | Medium — competitor landscape, "site:reddit.com" workaround |
| 2 | Google autocomplete | `suggestqueries.google.com/complete/search?client=firefox&q=` | High — clean JSON, no auth (200) | **Yes** — alphabet-soup fan-out is ~100s of calls | **High** — direct, phrasing-level demand signal |
| 3 | Google Trends | RSS trending feed works; `api/explore` returns 429 without cookies | Mixed — RSS 200, explore 429 | Yes for RSS; browser/manual for explore/CSV | Medium — validation of trajectory, not discovery |
| 4 | Reddit / forums | `.json` endpoints **403-blocked from this network** (all UAs, www + old). Fallbacks: free OAuth script, or DDG `site:reddit.com` search | Low direct / High via fallback | **Yes** (OAuth script) | **Very high** — richest raw frustration text |
| 5 | Product/app reviews | iTunes RSS reviews JSON (200); Play Store & Chrome Web Store pages fetchable (200); Amazon page 200 but reviews JS/limited | Medium–High | Yes for iTunes RSS pagination; agent fetch for store pages | **High** — 1–2★ reviews are literal problem statements |
| 6 | Competitor sites | Plain fetch + `/sitemap.xml`, `/robots.txt` | High | No — agent browsing suffices | Medium — gap analysis, what pages exist/rank |
| 7 | Public datasets | data.gov CKAN API returned **404** in probe; Kaggle public pages 200; Google Dataset Search browsable | Mixed | No — browse/manual | Low–Medium — supply-side (what data a utility could be built on) |
| 8 | GitHub | REST API unauth: 60 req/hr core, search more restricted; search worked unauth (200) | High within limits | Optional; small script for issue mining | Medium — dev-tool niches, awesome-list gap mining |
| 9 | Keyword Planner | **Manual only** — human logs into Google Ads UI, exports CSV/Google Sheets | N/A (human step) | N/A — human, then script parses CSV | High — the only free-ish volume + bid data |

---

## 1. Normal web search

- **Recommended:** DuckDuckGo's no-JS endpoints:
  - `https://html.duckduckgo.com/html/?q=<query>` — full SERP as plain HTML (verified 200, real organic results returned).
  - `https://lite.duckduckgo.com/lite/?q=<query>` — even lighter markup (verified 200).
  - Result links are wrapped in a redirect (`duckduckgo.com/l/?uddg=<urlencoded-target>&rut=…`); decode `uddg` to get the real URL.
- **Blocking/ToS:** DDG tolerates modest scripted use but will throw an anomaly/CAPTCHA page under bursty automated traffic; keep it low-volume (a few queries per run, spaced out). Google SERP scraping is against Google ToS and aggressively bot-checked — don't bother; use DDG. Bing HTML is similarly hostile without an API key.
- **Signal:** who already ranks for a candidate niche, whether SERPs are weak (forums/PDFs ranking = opportunity), and `site:reddit.com <pain phrase>` as a Reddit-access workaround.
- **Script?** Plain agent browsing/fetching suffices for exploration. A tiny deterministic fetch script is worth it only if you want repeatable SERP snapshots across many queries.

## 2. Google autocomplete / related searches

- **Recommended (verified working, no auth):**
  - `https://suggestqueries.google.com/complete/search?client=firefox&q=<seed>` → JSON array `["seed", ["sugg1", …]]`.
  - `https://www.google.com/complete/search?client=chrome&q=<seed>` → richer JSON incl. `google:suggestrelevance` scores (verified).
  - Vertical suggestions: add `&ds=yt` (YouTube — verified working), `&hl=<lang>&gl=<country>` for locale.
  - Fan-out pattern ("alphabet soup"): `<seed> a` … `<seed> z`, plus question prefixes (`how to`, `why does my`, `best free`, `<seed> vs`), each a separate call.
- **Blocking/ToS:** undocumented/unofficial endpoint; no published rate limit. Empirically tolerant of moderate use; throttle to ~1 req/sec and cache. Could vanish or change format without notice — treat as best-effort.
- **Signal:** **the highest-value free signal.** Suggestions are ranked by real query demand; question-form suggestions ("why does my X do Y") are literally repeated user problems in searcher phrasing.
- **Script?** **Yes.** Fan-out is 26+ requests per seed × many seeds — deterministic script with caching and dedup, not agent browsing.

## 3. Google Trends

- **Verified today:**
  - `https://trends.google.com/trending/rss?geo=US` → **200**, valid RSS of currently-trending searches. Works unauthenticated.
  - `https://trends.google.com/trends/api/explore?...` (the pytrends-style unofficial endpoint) → **429** without a browser cookie session. The old `api/dailytrends` path → **404** (retired).
- **Recommended:** for interest-over-time / related-queries data, drive the **web UI** (agent browser tool) and use the built-in **CSV export button** on each widget, or do it manually. The unofficial JSON API now requires cookie bootstrapping and is rate-limited (429s) — libraries like pytrends are chronically broken for this reason.
- **Blocking/ToS:** Trends data is free for personal/research use; scraping the internal API violates Google ToS and is actively throttled.
- **Signal:** relative interest and trajectory only (no absolute volumes). Good for *validating* a niche is stable/growing, weak for *discovering* problems. Related-queries "Rising" list is the one discovery-ish feature.
- **Script?** RSS: trivial script. Explore/CSV: browser automation or manual export — a plain fetch script will get 429'd.

## 4. Reddit and niche forums

- **Observed:** `www.reddit.com/...json`, `old.reddit.com/...json`, and search`.json` all returned **403 from this network**, with descriptive and browser user agents alike, and the agent fetcher was blocked too. Since mid-2023 Reddit blocks most unauthenticated/datacenter/corporate-IP traffic; the famous "just add `.json`" trick can no longer be relied on from an agent environment (it may still work from residential IPs — test per-environment).
- **Practical fallbacks (in order):**
  1. **Free official OAuth script** — create a Reddit "script" app (free), authenticate client-credentials, hit `oauth.reddit.com/r/<sub>/search?q=…&restrict_sr=1&sort=top&t=year`. Free tier allows **100 queries/min per client** per Reddit's Data API terms. This is the reliable path.
  2. **DDG site search** — `html.duckduckgo.com/html/?q=site:reddit.com+"is there a tool"` etc. (verified working); then fetch cached/rendered thread pages via the agent browser.
  3. **Hacker News via Algolia** — `https://hn.algolia.com/api/v1/search?query=<pain>&tags=story` → verified **200**, no auth, generous limits. Excellent Reddit substitute for tech niches ("Ask HN" complaints).
  4. Niche forums (vBulletin/Discourse/phpBB) are usually plainly fetchable; Discourse forums expose `.json` on every route (e.g. `/search.json?q=`), which generally works unauthenticated.
- **Signal:** **the richest source** — verbatim complaints, upvote counts as severity proxy, recurring threads = repeated problems.
- **Script?** **Yes** — an OAuth Reddit fetch script is warranted; plain agent browsing is blocked or flaky here.

## 5. Product / app reviews

- **App Store (iOS):** `https://itunes.apple.com/us/rss/customerreviews/id=<appId>/sortBy=mostRecent/page=<1-10>/json` → verified **200**, JSON, no auth, ~50 reviews/page, up to page 10 (~500 recent reviews). Also `https://itunes.apple.com/lookup?id=<id>` / `?term=<q>&entity=software` for app search — free official endpoints. Best review source available.
- **Google Play:** app pages (`https://play.google.com/store/apps/details?id=<pkg>&hl=en`) return **200** to plain fetch and include rating + a handful of reviews in the HTML; full review pagination is an internal batchexecute API (what the `google-play-scraper` npm/py libraries wrap). Practical: use the open-source scraper library in a script, or settle for the on-page sample via agent browsing.
- **Chrome Web Store:** listing pages (`chromewebstore.google.com/detail/<slug>/<id>`) return **200**; reviews load via JS — use the agent **browser** tool (rendered) rather than raw fetch. No public review API.
- **Amazon:** product pages returned **200** to curl, but review pagination is aggressively bot-gated (login walls after page 1, CAPTCHA) and scraping violates Amazon ToS. Treat as browse-only, small-sample.
- **Signal:** **high** — 1–2★ reviews of popular apps/extensions are enumerated feature gaps and frustrations; "I wish it could just…" is a niche-utility spec.
- **Script?** iTunes RSS: yes, trivial and reliable. Play: script via scraper lib. CWS/Amazon: agent browsing only.

## 6. Existing websites / competitor pages

- **Method:** plain fetch of pages; `https://<site>/sitemap.xml` (or `sitemap_index.xml`, discoverable via `/robots.txt`) to enumerate every page/tool a competitor ships. Verified generally reliable — standard HTTP, no special endpoints.
- **Blocking/ToS:** respect `robots.txt`; small utility sites almost never block polite single-fetch traffic. Cloudflare-fronted sites may challenge raw curl — the agent browser tool gets through where curl doesn't.
- **Signal:** medium — what tools exist, their UX gaps, ad density (monetization proof), and sitemap size as a proxy for content strategy.
- **Script?** No — plain agent browsing suffices; sitemap parsing is a one-liner when needed.

## 7. Public spreadsheets and datasets

- **Observed:** `catalog.data.gov/api/3/action/package_search` returned **404** in today's probe (the CKAN API path appears moved/retired — don't hardcode it; verify current API docs at [data.gov](https://data.gov) before scripting). Kaggle dataset listing pages (`kaggle.com/datasets?search=…`) return **200** for browsing; the Kaggle *download* API needs a free account token. [Google Dataset Search](https://datasetsearch.research.google.com/) is browsable but JS-heavy — agent browser only.
- **Signal:** low–medium for *problem discovery*; mainly **supply-side**: confirms a dataset exists that a niche utility could be built on (e.g. tide tables, tax brackets, holiday calendars).
- **Script?** No — occasional manual/agent browsing is enough at this stage.

## 8. GitHub

- **Verified limits ([official docs](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api)):** unauthenticated REST = **60 requests/hour per IP**; with a free personal access token = **5,000/hour**. Search endpoints have their own tighter limit (docs: "more restrictive"; historically 10/min unauth, 30/min authenticated — see [search rate-limit endpoint docs](https://docs.github.com/en/rest/rate-limit/rate-limit)). Unauthenticated search worked in probe (**200**).
- **Useful patterns:**
  - Repo search: `https://api.github.com/search/repositories?q=<topic>&sort=stars`
  - Issue mining: `https://api.github.com/search/issues?q=<pain+phrase>+is:issue+is:open+label:enhancement`
  - Awesome lists: fetch raw READMEs — `https://raw.githubusercontent.com/<owner>/<repo>/HEAD/README.md` (no rate-limit cost, plain CDN).
- **Blocking/ToS:** clean, documented, permissive for public data. A free PAT removes all friction.
- **Signal:** medium — best for developer-adjacent niches: heavily-upvoted issues on stalled tools = unmet demand; gaps in awesome lists = missing tools.
- **Script?** Optional. Agent browsing fine for spot checks; a small authenticated script if mining issues at scale.

## 9. Manual Google Keyword Planner exports

- **What a human must do:** create a free Google Ads account (no campaign spend required) → Tools → Keyword Planner → "Discover new keywords" → enter seeds → **Download keyword ideas** (top-right).
- **Export format:** CSV (or direct-to-Google-Sheets). Columns include Keyword, Avg. monthly searches (a *range* like "1K–10K" on non-spending accounts — exact volumes only unlock with active spend), Competition, Top-of-page bid low/high.
- **Automation status:** no free API. The Google Ads API keyword-plan service requires a developer token + active account; scraping the UI violates Google Ads ToS. This is genuinely a **human-in-the-loop step**.
- **Signal:** high — the only free source with (bucketed) absolute search volume and commercial-intent bid data; ideal for *validating* ideas surfaced by autocomplete/Reddit.
- **Script?** Human exports; a small script then parses the CSV into the harness. Design the pipeline so this file is an optional drop-in input.

---

## Cross-cutting recommendations

1. **Discovery core = autocomplete fan-out + review mining + Reddit-via-OAuth (or HN Algolia).** These three yield verbatim problem statements at scale, free.
2. **Validation layer = DDG SERP checks + Trends UI CSV + manual Keyword Planner CSV.**
3. **Build exactly two small deterministic scripts:** (a) suggest-fan-out fetcher with cache, (b) review/Reddit fetcher (iTunes RSS + Reddit OAuth + HN Algolia). Everything else: agent browsing.
4. **Assume Reddit `.json` is dead from agent infrastructure** — don't build on it; build on the free OAuth app path.
5. **Re-verify data.gov's API path** before relying on it; today it 404'd.
