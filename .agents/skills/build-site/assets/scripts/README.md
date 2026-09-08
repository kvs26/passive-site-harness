# Scripts

Helper scripts for the `/build-site` skill. These are tools the agent runs during step 6
("Attach product/affiliate links") — they never replace the hard rule that every link written
into `affiliate.affiliate_url` must be verified, not just discovered.

Both scripts read the same kind of input: a "master CSV" with one row per product
(`record_id, platform, brand, model, product, region, exact_model, publish_readiness,
research_action`, per `docs/agents/site-prd-template.md`'s data-source convention) — this master
CSV usually comes from the site's own `raw-source/` folder, or is built from it. Pick the script
based on where the site's links should point:

| Script | Scope | Use when |
| --- | --- | --- |
| `find_amazon_product_links.py` | **Amazon only** — searches `site:amazon.com` (and other Amazon country domains) and only accepts direct `/dp/<ASIN>` product pages. | The site sells/links exclusively through Amazon. |
| `find_product_links.py` | **Any domain** — open web search (or an optional `--domains` allowlist like `homedepot.com,lowes.com`), scored by URL shape (`/p/`, `/product/`, `/dp/`, etc.) instead of a fixed retailer. | The site's links span multiple retailers/manufacturers (Home Depot, Lowe's, manufacturer sites, etc.) — this repo's own `runs-on-your-battery-finder` catalog already mixes Amazon and Home Depot links. |

## `find_amazon_product_links.py`

Given the master CSV, searches for the row's direct Amazon product page (`/dp/<ASIN>`) per market
and scores each candidate on domain match, exact model-code match, brand match, and product-word
overlap. Writes an enriched copy of the CSV plus a separate low/medium-confidence review CSV — it
never overwrites a row already marked `VERIFIED_DIRECT` unless `--force` is passed.

**Tested and working** (2026-09-08) against this repo's `.venv` (Python 3.10) using the free `ddgs`
provider — confirmed it finds real, correct direct Amazon links (e.g. matched the DeWalt DCE511B
jobsite fan already in `runs-on-your-battery-finder`'s catalog to its real `/dp/` page with a 100
score).

### Setup

```bash
# from the repo root, using the project venv
.venv/bin/python -m pip install ddgs
```

`ddgs` (no API key) is the default `--provider`. A `--provider serper` mode also exists for the
paid Serper Google Search API (needs `pip install requests` and `SERPER_API_KEY` set) — use it only
if `ddgs` results are too noisy for a given batch.

### Usage

```bash
# Preview the search queries without hitting the network
.venv/bin/python .agents/skills/build-site/assets/scripts/find_amazon_product_links.py \
  sites/<slug>/raw-source/master.csv --provider ddgs --dry-run

# Real run, US market only, capped to 20 rows while testing
.venv/bin/python .agents/skills/build-site/assets/scripts/find_amazon_product_links.py \
  sites/<slug>/raw-source/master.csv --provider ddgs --markets us --max-rows 20 \
  --output sites/<slug>/raw-source/master_linked.csv
```

Output columns are added per market: `amazon_<mkt>_direct_url`, `_asin`, `_link_status`,
`_matched_title`, `_match_score`, `_checked_at`. `_link_status` of `AUTO_MATCH_HIGH_CONFIDENCE`
still needs the same spot-check the skill's step 6 already requires (fetch the link, confirm it
200s and looks like the right product) before it goes into `catalog.json`'s `affiliate_url` —
this script finds candidates, it doesn't replace verification.

## `find_product_links.py`

Same idea, but not tied to Amazon: runs an open web search per row (or one search per domain if
`--domains` is given) and scores candidates on whether the URL *looks* like a single-product page
(`/p/`, `/product/`, `/products/`, `/dp/`, `/pd/`, `/ip/`, `/item/`), plus the same exact
model-code/brand/product-word checks. Known non-retail domains (Wikipedia, YouTube, Reddit,
Pinterest, forums, etc.) are filtered out before scoring.

**Tested and working** (2026-09-08) against this repo's `.venv` — a capped live run found the
Home Depot product page for the DeWalt DCR010 Bluetooth speaker (already in
`runs-on-your-battery-finder`'s catalog) at 100/100, correctly out-ranking a non-product Amazon
search-results page.

### Usage

```bash
# Open web search, any domain
.venv/bin/python .agents/skills/build-site/assets/scripts/find_product_links.py \
  sites/<slug>/raw-source/master.csv --provider ddgs --dry-run

# Restrict to a set of known retailers for this niche
.venv/bin/python .agents/skills/build-site/assets/scripts/find_product_links.py \
  sites/<slug>/raw-source/master.csv --provider ddgs \
  --domains homedepot.com,lowes.com,walmart.com --max-rows 20
```

Output columns (single set, no per-market prefix): `link_direct_url`, `link_domain`,
`link_status`, `link_matched_title`, `link_match_score`, `link_checked_at`. Same rule applies:
`AUTO_MATCH_HIGH_CONFIDENCE` is a candidate to spot-check, not a verified link.

## Shared notes

Live searches write a cache file (`.amazon_link_cache.json` / `.product_link_cache.json`, or
wherever `--cache` points) next to where the command is run — don't commit that cache file, it's
just a resume/rate-limit aid.

