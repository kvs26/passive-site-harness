# Pain-Source Survey — free adapters for scripts/pain-fetch.py

Date: 2026-08-31. Method: every "verified" claim below was tested live with curl
(macOS, residential IP, plain `Mozilla/5.0`-style UA, no cookies) — i.e. exactly the
conditions `pain-fetch.py`'s stdlib `urllib` fetcher would see. Claims not tested are
marked **unverified**.

Existing adapters: `hn` (HN Algolia), `ddg` (html.duckduckgo.com), `github`
(unauthenticated API, PAT-gated upgrade), `itunes` (review RSS). Reddit OAuth app
still pending approval.

---

## Comparison table

| Source | Access method | Auth | Verified 2026-08-31 | Pain-signal quality | stdlib feasible | Verdict |
|---|---|---|---|---|---|---|
| Stack Exchange API | JSON GET, keyless | none (300 req/day/IP) | ✅ 200, quota header confirmed | **High** — `software-rec` tag, "is there a tool" questions | Yes, trivial | **BUILD-NOW** |
| Discourse forums | `/search.json`, `/latest.json` | none | ✅ 200 on 2 instances | **High** — niche communities, feature requests | Yes, trivial | **BUILD-NOW** |
| Autocomplete suite (Google/Bing/Brave/DDG/YouTube/Amazon) | JSON GET | none | ✅ all 6 returned 200 + parseable JSON | **High** for demand phrasing; complements pain mining | Yes, trivial | **BUILD-NOW** |
| Lemmy (lemmy.world) | `/api/v3/search` JSON GET | none | ✅ 200 posts + comments | Medium — search relevance is weak keyword match | Yes, trivial | **BUILD-NOW** |
| Google Play reviews | internal `batchexecute` POST | none | ✅ 200, real reviews returned | **High** — 1–2★ complaints | Yes, but fragile protocol | **BUILD-NOW** (fragile) |
| Lobsters | HTML search | none | ✅ 200, 20 results | Medium — dev-only, low volume | Yes (regex) | BUILD-NOW (optional) |
| YouTube comments | Data API v3 | free API key | ❌ not tested (no key) | High on review/rant videos | Yes | **BUILD-WHEN-CREDENTIALED** |
| Reddit API | OAuth | pending | ✅ unauthenticated confirmed dead (403/302) | Highest | Yes once approved | **BUILD-WHEN-CREDENTIALED** |
| Product Hunt | GraphQL v2 API | free dev token | ✅ web = Cloudflare 403; API unverified | Medium — launch comments | Yes (POST JSON) | BUILD-WHEN-CREDENTIALED (low pri) |
| AlternativeTo | SSR HTML | none | ✅ 200, app names in HTML | Low-medium — alternative-seeking, not complaints | Yes (regex) | QUERY-RECIPE instead |
| YC RFS | SSR HTML, static page | none | ✅ 200, ~2,500 words SSR | Medium — idea validation, updated ~yearly | Yes | QUERY-RECIPE / one-off fetch |
| r/SomebodyMakeThis etc. | via existing `ddg` adapter | none | ✅ (ddg adapter already works) | **High** | n/a | **QUERY-RECIPE** |
| Quora | direct fetch | — | ✅ JS/robot wall confirmed ("Enable JavaScript", "Robot") | High but unreachable | No | SKIP → ddg recipe |
| Trustpilot | direct fetch | — | ✅ 403 Cloudflare "Verifying Connection" | Medium | No | SKIP → ddg recipe |
| Amazon reviews | direct fetch | — | ✅ 302 → login/captcha | High but unreachable | No | SKIP → ddg recipe + suggest |
| Chrome Web Store reviews | — | — | ✅ 200 but zero data in HTML (`AF_initDataCallback` absent); no public API | High but unreachable | No | SKIP |
| Product Hunt web | direct fetch | — | ✅ 403 Cloudflare "Just a moment…" | — | No | SKIP (see API row) |
| Indie Hackers | direct fetch / legacy Algolia | — | ✅ JS shell (6 KB); legacy Algolia index `posts` = 404 | High but unreachable | No | SKIP → ddg recipe |
| Twitter/X | API | $200+/mo Basic tier | ❌ unverified (well-documented: free tier write-only since Feb 2023) | — | — | SKIP |
| Google PAA | SERP scraping | — | not tested (Google SERP bot-wall assumed) | High | No free JSON endpoint found | SKIP → suggest fan-out recipe |

---

## Per-source notes (verified endpoints)

### 1. Stack Exchange API — BUILD-NOW ⭐

- **Endpoint (verified 200):**
  `https://api.stackexchange.com/2.3/search/excerpts?order=desc&sort=relevance&q={q}&site={site}&pagesize=15`
  — `/search/excerpts` returns question **and answer body snippets** (better pain
  text than `/search/advanced`, which was also verified 200).
- **Auth/limits:** keyless = 300 req/day/IP (verified: response contained
  `"quota_max":300,"quota_remaining":298`). A free registered app key raises this to
  10,000/day → optional `STACKEXCHANGE_KEY` in `.env`, same pattern as `GITHUB_PAT`.
- **Gotcha:** responses are **always gzipped**; `urllib` must decompress
  (`gzip.decompress()` — the current `fetch()` would need a small tweak or an
  `Accept-Encoding: identity` attempt; curl `--compressed` handled it in testing).
- **Pain quality:** high. `site=superuser`, `site=softwarerecs` (an entire SE site for
  "is there a tool that…"), `site=webapps`, `site=cooking`, `site=pets`, plus
  `tagged=software-rec`. Directly maps to this pipeline's niches.

### 2. Public Discourse forums — BUILD-NOW ⭐

- **Endpoints (verified 200 on both instances):**
  - `https://meta.discourse.org/search.json?q={q}` → `{"posts":[{blurb, created_at, like_count, topic_id, ...}]}`
  - `https://community.home-assistant.io/search.json?q=wish%20there%20was%20a%20way`
  - `https://community.home-assistant.io/latest.json` → 30 topics with titles/reply counts.
- **Auth/limits:** anonymous JSON is a core Discourse feature (append `.json` to most
  URLs). Default anonymous rate limits are generous for this use; no key.
- **Adapter shape:** parameterize the instance —
  `pain-fetch.py discourse "community.home-assistant.io|wish there was"`. Search
  operators work in `q` (`order:latest`, `after:2025-01-01`, `in:title`).
- **Pain quality:** high — thousands of niche instances (home-assistant, obsidian.md
  `forum.obsidian.md`, printables, gardening, keyboard forums). Great niche coverage.

### 3. Autocomplete suggest suite — BUILD-NOW ⭐ (one adapter, engine param)

All six verified 200 with parseable output on 2026-08-31:

| Engine | Verified URL pattern | Format |
|---|---|---|
| Google | `https://suggestqueries.google.com/complete/search?client=firefox&q={q}` | OpenSearch JSON `[q, [suggestions]]` |
| YouTube | `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q={q}` | same clean JSON (⚠️ `client=youtube` returns JSONP `window.google.ac.h(...)` — use `client=firefox&ds=yt`) |
| Bing | `https://api.bing.com/osjson.aspx?query={q}` | OpenSearch JSON |
| Brave | `https://search.brave.com/api/suggest?q={q}` | OpenSearch JSON |
| DuckDuckGo | `https://duckduckgo.com/ac/?q={q}&type=list` | OpenSearch JSON |
| Amazon | `https://completion.amazon.com/api/2017/suggestions?alias=aps&mid=ATVPDKIKX0DER&prefix={q}&suggestion-type=KEYWORD` | rich JSON `{"suggestions":[{"value":...}]}` (`mid=ATVPDKIKX0DER` = US marketplace) |

- **Auth/limits:** none observed; sub-second responses. These are the endpoints
  browsers hit, so they are stable, but they are technically unofficial — be polite
  (cache, low volume; the existing cache layer covers this).
- **Pain quality:** demand-side rather than complaint-side — reveals exact search
  phrasing ("washer capacity **to wash king size comforter**", "dog food
  **calculator**"). This is the free stand-in for Keyword Planner during scouting.
- **Fan-out recipe (PAA substitute):** prefix-expand `{q} + " a".." z"` and question
  stems (`how do i {q}`, `is there a {q}`, `why does {q}`, `{q} vs`) against
  Google/Bing — the classic alphabet-soup technique using only verified endpoints.
  `scripts/fanout.py` may already partially cover this — check before duplicating.

### 4. Lemmy — BUILD-NOW

- **Endpoint (verified 200):**
  `https://lemmy.world/api/v3/search?q={q}&type_=Posts&sort=New&limit=15`
  (also verified `type_=Comments`). Response: `{"posts":[{"post":{"name","body","ap_id"}}], "comments":[...]}`.
- **Auth/limits:** none for read. Other instances (lemmy.ml, programming.dev,
  sh.itjust.works) share the same API — instance could be a param.
- **Caveat (observed):** search relevance is weak — the posts query returned
  loosely-related results; comments query matched literally but noisily. Use quoted
  pain phrases and `sort=New`; treat as a Reddit-diaspora supplement, not a Reddit
  substitute. Response time was slow (~6.5 s) on lemmy.world.

### 5. Google Play reviews — BUILD-NOW (fragile, document clearly)

- **Endpoint (verified 200, real review text returned):**
  `POST https://play.google.com/_/PlayStoreUi/data/batchexecute`
  with `Content-Type: application/x-www-form-urlencoded;charset=UTF-8` and body
  `f.req=[[["UsvDTd","[null,null,[2,null,[20,null,null],null,[]],[\"{package_id}\",7]]",null,"generic"]]]`
  (URL-encoded). Response starts with anti-JSON prefix `)]}'` then a JSON envelope
  `[["wrb.fr","UsvDTd","<escaped JSON string>"...]]` — parse with
  `json.loads(json.loads(body.split("\n",1)[1])[0][2])`. Test returned e.g.
  *"I dislike aspects of the new UI. It's so much harder to…"* with star ratings.
- **Auth/limits:** none; this is the store frontend's own RPC. It is an **internal,
  undocumented protocol** (same one `google-play-scraper` uses) — expect occasional
  breakage; keep the adapter isolated and fail soft.
- **Pain quality:** high — sort/filter params in the serialized payload allow 1–2★
  filtering; complements the existing `itunes` adapter for the Android side.
- Note: the app-details HTML page (verified 200, `AF_initDataCallback` present) also
  embeds the first few reviews if the POST protocol ever breaks.

### 6. Lobsters — BUILD-NOW (optional, cheap)

- **Endpoint (verified 200, 20 results):**
  `https://lobste.rs/search?q=%22wish+there+was%22&what=stories&order=newest` (HTML;
  regex like the `ddg` adapter). `/newest.json` also exists for firehose use.
- Low volume, dev-centric. Only worth it because the adapter is ~10 lines.

### 7. YouTube comments — BUILD-WHEN-CREDENTIALED

- **Endpoints (unverified — no key on hand; official docs):**
  - `https://www.googleapis.com/youtube/v3/search?part=snippet&q={q}&type=video&key={KEY}` (100 quota units/call)
  - `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId={id}&order=relevance&maxResults=50&key={KEY}` (1 unit/call)
- **Auth:** free API key from Google Cloud console, no OAuth for public data;
  10,000 units/day free quota → ~99 search+comments cycles/day. Gate on
  `YOUTUBE_API_KEY` in `.env`, mirroring the `GITHUB_PAT` pattern.
- **Pain quality:** high under "top 5 X apps" / product-review videos — commenters
  state what's missing. Best-value credentialed source after Reddit.

### 8. Reddit — BUILD-WHEN-CREDENTIALED (OAuth pending)

- **Verified dead without OAuth (2026-08-31):**
  `https://www.reddit.com/search.json` → **403** (HTML wall) even with a descriptive
  UA; `https://old.reddit.com/r/SomebodyMakeThis/new.json` → **302** (redirect wall).
  Do not build an unauthenticated adapter; it will not work.
- Once the pending OAuth app is approved: `https://oauth.reddit.com/search?q=...`
  with `client_credentials` token; 100 QPM. Gate on `REDDIT_CLIENT_ID`/`_SECRET`.
- Until then, Reddit content is reachable via the `ddg` recipes below.

### 9. Product Hunt — BUILD-WHEN-CREDENTIALED (low priority)

- **Web verified dead:** `producthunt.com/search` → **403 Cloudflare** "Just a moment…".
- **API (unverified):** GraphQL v2 at `https://api.producthunt.com/v2/api/graphql`,
  free developer token from an account's API dashboard; complexity-based rate limit.
  Pain signal is mediocre (launch hype > complaints) — build only if a token already exists.

### 10. AlternativeTo — QUERY-RECIPE instead of adapter

- **Verified:** `https://alternativeto.net/browse/search/?q=notion` → 200, app names
  server-rendered in `<h2>` tags (Next.js RSC — no `__NEXT_DATA__` JSON blob, so
  structured extraction is regex-only). No visible bot wall today, but the useful
  pain text (user comments, "I switched because…") is not in the SSR payload.
- Better via ddg: `site:alternativeto.net "open source" alternative {product}`.

### 11. YC Requests for Startups — QUERY-RECIPE / one-off fetch

- **Verified:** `https://www.ycombinator.com/rfs` → 200, fully server-rendered
  (~2,500 words extractable by tag-stripping). Static, updated ~1×/batch — not worth
  a cached adapter; fetch manually per scouting cycle. Similar idea boards
  (unverified): `requestsforstartups.com` (defunct?), a16z "Big Ideas" posts.

### 12. Quora — SKIP (verified)

- `quora.com/search` → 200 but the body is a JS shell containing "Enable JavaScript"
  and robot-check markers; no content without a browser. Reach it via ddg instead.

### 13. Trustpilot — SKIP (verified)

- `trustpilot.com/review/{domain}` → **403** Cloudflare "Verifying Connection".
  (Historically data lived in `__NEXT_DATA__`, but the wall now blocks plain urllib.)
  Reach via ddg recipe.

### 14. Amazon reviews — SKIP (verified) / suggest only

- `amazon.com/product-reviews/{ASIN}` → **302** to login/captcha. Review scraping is
  not stdlib-feasible in 2026. The **Amazon completion endpoint** (§3) is the
  reliable free Amazon demand signal; review pain via ddg recipe.

### 15. Chrome Web Store — SKIP (verified)

- Reviews page returns 200 but contains **zero** embedded data
  (`AF_initDataCallback` count = 0 on the reviews route); reviews load via
  authenticated XHR. No public API. No free path found.

### 16. Twitter/X — SKIP (unverified, well-documented)

- Free tier has been write-only since Feb 2023; read/search requires the paid Basic
  tier (~$200/mo as of 2025). Nitter instances are dead/unreliable. Not free, skip.

### 17. Indie Hackers — SKIP direct (verified) → recipe

- Site is a 6 KB JS shell; the legacy public Algolia index (`N86T1R3OWZ`/`posts`)
  returns **404 "Index posts does not exist"** — the old scraping route is dead.
  Content is indexed by search engines, so use the ddg recipe.

---

## Ranked shortlist

### BUILD-NOW (in priority order)

1. **`stackexchange`** — `GET https://api.stackexchange.com/2.3/search/excerpts?order=desc&sort=relevance&q={q}&site={site}&pagesize=15` (keyless 300/day; optional `STACKEXCHANGE_KEY`; handle gzip).
2. **`discourse`** — `GET https://{instance}/search.json?q={q}` with instance as part of the query arg (`"instance|query"`), plus `/latest.json` firehose mode.
3. **`suggest`** — one adapter, engine param (`google|bing|brave|ddg|youtube|amazon`), URLs as in §3; includes the alphabet-soup fan-out as the PAA substitute.
4. **`lemmy`** — `GET https://lemmy.world/api/v3/search?q={q}&type_=Posts&sort=New&limit=15` (quote phrases; expect weak relevance).
5. **`gplay`** — `POST https://play.google.com/_/PlayStoreUi/data/batchexecute` RPC `UsvDTd` (fragile internal protocol; isolate + fail soft).
6. *(optional)* **`lobsters`** — HTML regex on `https://lobste.rs/search?q={q}&what=stories&order=newest`.

### BUILD-WHEN-CREDENTIALED (`.env`-gated)

- **`youtube`** — `YOUTUBE_API_KEY`; search (100 u) + commentThreads (1 u), 10k u/day free.
- **`reddit`** — `REDDIT_CLIENT_ID`/`REDDIT_CLIENT_SECRET` once OAuth app approved; unauthenticated confirmed dead (403/302).
- **`producthunt`** — `PRODUCTHUNT_TOKEN`, GraphQL v2; low priority.
- *(existing)* `github` PAT upgrade already implemented.

### QUERY-RECIPE (existing `ddg` adapter — document in scout skill)

```
site:reddit.com/r/SomebodyMakeThis "{niche}"
site:reddit.com (r/AppIdeas OR r/Lightbulb OR r/SomebodyMakeThis) "I wish"
site:reddit.com "{niche}" ("is there an app" OR "is there a tool" OR "does anyone know a site")
site:quora.com "is there a tool" {niche}
site:trustpilot.com {brand} ("useless" OR "doesn't work" OR "waste of money")
site:indiehackers.com "looking for" {niche}
site:alternativeto.net {product} alternative
site:amazon.com {product} review ("wish it" OR "doesn't")
{niche} "wish there was a website"
```

Plus the **suggest fan-out** recipe (PAA substitute): expand `{seed}` × (`a`–`z`
suffixes + `how do i` / `is there a` / `why does` / `{seed} vs` prefixes) against the
verified Google/Bing suggest endpoints.

### SKIP (with verified reason)

| Source | Reason (verified 2026-08-31 unless noted) |
|---|---|
| Quora direct | JS shell + robot markers, no SSR content |
| Trustpilot direct | Cloudflare 403 |
| Product Hunt web | Cloudflare 403 |
| Amazon reviews direct | 302 → login/captcha |
| Chrome Web Store | 200 but zero embedded review data; no API |
| Indie Hackers direct | JS shell; legacy Algolia index 404 |
| Twitter/X | paid-only read API since 2023 (unverified, well-documented) |
| Google PAA direct | no free JSON endpoint found; SERP bot-wall (untested); use suggest fan-out |

### Implementation notes for pain-fetch.py

- `fetch()` must handle gzip: Stack Exchange always compresses. Add
  `import gzip` + decompress when `Content-Encoding: gzip` (or send
  `Accept-Encoding: gzip` deliberately and always decompress).
- `gplay` needs a POST variant of `fetch()` (current helper is GET-only) and the
  `)]}'` prefix strip.
- Cache keys are URL-hash only — fine for GETs; for `gplay` include the POST body in
  the hash.
