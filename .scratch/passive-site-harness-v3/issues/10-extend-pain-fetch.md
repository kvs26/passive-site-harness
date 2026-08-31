# Extend pain-fetch adapters

Type: task
Status: resolved
Blocked by: 04, 08

## Question

Implement the build-now adapter shortlist from the pain-source survey (04) in `scripts/pain-fetch.py` (same pluggable pattern: credential-free by default, `.env`-gated credentialed ones, cache under `.cache/pain/`), matching whatever source catalog the accepted v3 scout skill (08) names. Includes wiring the Reddit OAuth adapter if the user's pending developer access has arrived (check with the user; if still pending, note it and leave the ladder as-is). Resolution records: adapters added, endpoints used, any sources attempted and dropped with reason.

## Answer

Done 2026-09-01. `scripts/pain-fetch.py` extended from 4 to 12 adapters, all smoke-tested live except the two credential-gated ones (gating verified: clear message + exit 2 without keys).

**Adapters added (credential-free, all verified working):**

| Adapter | Endpoint | Notes |
|---|---|---|
| `stackexchange` | `GET api.stackexchange.com/2.3/search/excerpts` | arg `site\|query`, default site `softwarerecs`; keyless 300/day, optional `STACKEXCHANGE_KEY` → 10K/day; gzip handled; excerpt HTML stripped |
| `discourse` | `GET https://{instance}/search.json?q=` | arg `instance\|query`; empty query = `/latest.json` firehose; tested on community.home-assistant.io |
| `suggest` | 6 engines, one adapter | arg `engine\|query`; google / youtube (`client=firefox&ds=yt`) / bing (osjson) / brave / ddg (`/ac/?type=list`) / amazon (completion.amazon.com, US `mid`); all 6 tested |
| `lemmy` | `GET {instance}/api/v3/search` posts + comments | arg `instance\|query`, default lemmy.world; weak relevance as survey warned |
| `gplay` | `POST play.google.com/_/PlayStoreUi/data/batchexecute` RPC `UsvDTd` | fragile internal protocol; isolated, fails soft (stderr + exit 2); returned real 1–3★ reviews in test |
| `lobsters` | HTML regex on `lobste.rs/search` | optional/cheap; prints a note if markup changes |

**Adapters added (`.env`-gated, dormant until keys supplied):**

- `youtube` — Data API v3 search (100 u) + commentThreads (1 u), gated on `YOUTUBE_API_KEY`.
- `producthunt` — GraphQL v2 newest-posts-by-topic, gated on `PRODUCTHUNT_TOKEN` (user opted in; API shape unverified per survey, so it fails soft).

**Infra changes:** `fetch()` now sends `Accept-Encoding: gzip` and decompresses (Stack Exchange always gzips), supports POST bodies (gplay, producthunt), and includes the POST body in the cache key.

**Reddit:** still pending (user confirmed 2026-09-01) — no adapter wired, ladder as-is; docstring + usage note record that unauthenticated is dead (403/302) and the future adapter gates on `REDDIT_CLIENT_ID`/`REDDIT_CLIENT_SECRET`.

**Dropped/not built:** everything the survey marked SKIP (Quora, Trustpilot, Amazon reviews, Chrome Web Store, Indie Hackers, X, direct PAA) — reachable only via the ddg query-recipes already documented in the v3 scout skill. AlternativeTo and YC RFS stayed query-recipes/one-off fetches per the survey. `scripts/fanout.py` left untouched — it owns Google alphabet-soup fan-out; the `suggest` adapter covers single-query multi-engine lookups.
