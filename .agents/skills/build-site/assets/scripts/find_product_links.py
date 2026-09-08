#!/usr/bin/env python3
"""
Find candidate product-page links from anywhere on the web (not just Amazon) for a
build-site master CSV.

Unlike find_amazon_product_links.py, this script does not restrict results to a single
retailer's domain. It runs an open web search for each row (brand + model + product),
optionally narrowed to a domain allowlist, and scores results using:
  - a "looks like a real product page" URL-shape check (e.g. /p/, /product/, /dp/, /pd/, /ip/)
  - a blocklist of common non-retail domains (Wikipedia, YouTube, Reddit, Pinterest, forums, ...)
  - exact model-code match, brand match, and product-word overlap (same scoring spirit as the
    Amazon-only script)

It supports the same two providers:
  1. DDGS (no API key, best effort):  pip install ddgs
  2. Serper Google Search API:         pip install requests
     Set SERPER_API_KEY in your environment.

Examples
--------
# Open web search, any domain
python find_product_links.py master.csv --provider ddgs --dry-run

# Restrict to specific retailers (one query per domain, results merged)
python find_product_links.py master.csv --provider ddgs \
  --domains homedepot.com,lowes.com,walmart.com --max-rows 20

The script never overwrites rows marked VERIFIED_DIRECT unless --force is used.
Every match is a *candidate* — spot-check it (fetch it, confirm it's the right product)
before writing it into affiliate_url. This script finds candidates, it doesn't replace
verification.

Expected input CSV columns (a "master CSV" per docs/agents/site-prd-template.md's
data-source convention, one row per product):
  record_id, platform, brand, model, product, region, exact_model,
  publish_readiness, research_action
Optional pre-existing columns (skipped unless --force):
  link_status, link_direct_url
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
import logging
import os
import random
import re
import sys
import time
from dataclasses import asdict, dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Protocol
from urllib.parse import parse_qsl, urlencode, urlparse, urlunparse

REGIONS: dict[str, dict[str, str]] = {
    "us": {"gl": "us", "hl": "en", "ddgs_region": "us-en"},
    "uk": {"gl": "gb", "hl": "en", "ddgs_region": "uk-en"},
    "de": {"gl": "de", "hl": "de", "ddgs_region": "de-de"},
    "fr": {"gl": "fr", "hl": "fr", "ddgs_region": "fr-fr"},
    "it": {"gl": "it", "hl": "it", "ddgs_region": "it-it"},
    "es": {"gl": "es", "hl": "es", "ddgs_region": "es-es"},
}

# URL path shapes commonly used for a single-product page across retailers/manufacturers.
PRODUCT_PATH_RE = re.compile(
    r"/(?:dp|gp/product|product|products|p|pd|pip|ip|item|itm)/[^/?#]+",
    flags=re.IGNORECASE,
)

# Domains that are almost never a product page worth buying from, even if they mention
# the product by name. Filtered out before scoring, not just penalized.
NON_RETAIL_DOMAINS = {
    "wikipedia.org",
    "en.wikipedia.org",
    "youtube.com",
    "youtu.be",
    "reddit.com",
    "pinterest.com",
    "facebook.com",
    "instagram.com",
    "twitter.com",
    "x.com",
    "quora.com",
    "tiktok.com",
    "manualslib.com",
    "scribd.com",
    "slideshare.net",
    "answers.com",
}

NON_EXACT_MODEL_TERMS = (
    "generic",
    "family",
    "retail sku",
    "catalog",
    "range",
    "multiple",
    "various",
)

ACCESSORY_TERMS = {
    "battery",
    "batteries",
    "charger",
    "replacement",
    "adapter",
    "mount",
    "holder",
    "case",
    "cover",
    "filter",
    "filters",
    "bag",
    "bags",
    "hose",
    "nozzle",
    "brush",
    "belt",
    "parts",
    "accessory",
    "accessories",
    "renewed",
    "refurbished",
    "compatible with",
}

BUNDLE_TERMS = {"bundle", "combo", "kit with battery", "starter kit", "2-pack"}

STOPWORDS = {
    "and",
    "with",
    "for",
    "the",
    "from",
    "cordless",
    "battery",
    "powered",
    "power",
    "native",
    "tool",
    "only",
    "system",
    "portable",
    "professional",
    "product",
    "family",
    "plus",
    "max",
}


@dataclass(frozen=True)
class SearchResult:
    title: str
    url: str
    snippet: str = ""


@dataclass(frozen=True)
class Candidate:
    query: str
    title: str
    url: str
    domain: str
    score: int
    reasons: str


class SearchProvider(Protocol):
    def search(self, query: str, region: str, limit: int) -> list[SearchResult]:
        ...


class DDGSProvider:
    def __init__(self) -> None:
        try:
            from ddgs import DDGS  # type: ignore
        except ImportError as exc:
            raise RuntimeError(
                "DDGS provider requires the 'ddgs' package. Install it with: pip install ddgs"
            ) from exc
        self._ddgs_cls = DDGS

    def search(self, query: str, region: str, limit: int) -> list[SearchResult]:
        ddgs_region = REGIONS[region]["ddgs_region"]
        rows: list[SearchResult] = []
        with self._ddgs_cls() as ddgs:
            for item in ddgs.text(
                query,
                region=ddgs_region,
                safesearch="moderate",
                max_results=limit,
            ):
                rows.append(
                    SearchResult(
                        title=str(item.get("title", "")),
                        url=str(item.get("href", item.get("url", ""))),
                        snippet=str(item.get("body", item.get("snippet", ""))),
                    )
                )
        return rows


class SerperProvider:
    ENDPOINT = "https://google.serper.dev/search"

    def __init__(self, api_key: str, timeout: float = 30.0) -> None:
        if not api_key:
            raise RuntimeError("SERPER_API_KEY is not set.")
        try:
            import requests  # type: ignore
        except ImportError as exc:
            raise RuntimeError(
                "Serper provider requires 'requests'. Install it with: pip install requests"
            ) from exc
        self._requests = requests
        self._api_key = api_key
        self._timeout = timeout

    def search(self, query: str, region: str, limit: int) -> list[SearchResult]:
        cfg = REGIONS[region]
        response = self._requests.post(
            self.ENDPOINT,
            headers={
                "X-API-KEY": self._api_key,
                "Content-Type": "application/json",
            },
            json={
                "q": query,
                "gl": cfg["gl"],
                "hl": cfg["hl"],
                "num": min(max(limit, 1), 20),
            },
            timeout=self._timeout,
        )
        response.raise_for_status()
        payload = response.json()
        return [
            SearchResult(
                title=str(item.get("title", "")),
                url=str(item.get("link", "")),
                snippet=str(item.get("snippet", "")),
            )
            for item in payload.get("organic", [])[:limit]
        ]


class JsonCache:
    def __init__(self, path: Path) -> None:
        self.path = path
        self.data: dict[str, list[dict[str, str]]] = {}
        if path.exists():
            try:
                loaded = json.loads(path.read_text(encoding="utf-8"))
                if isinstance(loaded, dict):
                    self.data = loaded
            except (json.JSONDecodeError, OSError):
                logging.warning("Ignoring unreadable cache file: %s", path)

    @staticmethod
    def key(provider: str, region: str, query: str, limit: int) -> str:
        raw = f"{provider}|{region}|{limit}|{query}".encode("utf-8")
        return hashlib.sha256(raw).hexdigest()

    def get(self, key: str) -> list[SearchResult] | None:
        value = self.data.get(key)
        if value is None:
            return None
        return [SearchResult(**item) for item in value]

    def put(self, key: str, results: list[SearchResult]) -> None:
        self.data[key] = [asdict(result) for result in results]
        tmp = self.path.with_suffix(self.path.suffix + ".tmp")
        tmp.write_text(json.dumps(self.data, ensure_ascii=False, indent=2), encoding="utf-8")
        tmp.replace(self.path)


def now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def normalize(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", value.lower())


def words(value: str) -> list[str]:
    return [
        token
        for token in re.findall(r"[a-z0-9]+", value.lower())
        if len(token) >= 3 and token not in STOPWORDS
    ]


def model_variants(model: str) -> list[str]:
    if not model:
        return []
    raw_parts = re.split(r"\s*/\s*|\s+or\s+", model, flags=re.IGNORECASE)
    variants = [part.strip() for part in raw_parts if part.strip() and normalize(part)]
    return variants or [model]


def is_exact_model(row: dict[str, str]) -> bool:
    explicit = row.get("exact_model", "").upper()
    if explicit == "NO":
        return False
    model = row.get("model", "").strip()
    low = model.lower()
    if not model or any(term in low for term in NON_EXACT_MODEL_TERMS):
        return False
    return True


def get_domain(url: str) -> str:
    host = (urlparse(url).hostname or "").lower()
    return host[4:] if host.startswith("www.") else host


def is_non_retail_domain(domain: str) -> bool:
    return any(domain == d or domain.endswith("." + d) for d in NON_RETAIL_DOMAINS)


def looks_like_product_page(url: str) -> bool:
    return bool(PRODUCT_PATH_RE.search(urlparse(url).path))


def strip_tracking_params(url: str) -> str:
    parsed = urlparse(url)
    dropped_prefixes = ("utm_", "ref", "tag", "gclid", "fbclid", "affid", "aff_id", "sr", "psc")
    kept = [
        (k, v)
        for k, v in parse_qsl(parsed.query, keep_blank_values=True)
        if not any(k.lower() == p or k.lower().startswith(p) for p in dropped_prefixes)
    ]
    return urlunparse(parsed._replace(query=urlencode(kept)))


def build_query(row: dict[str, str], domain: str | None) -> str:
    brand = row.get("brand", "").strip()
    model = row.get("model", "").strip()
    product = row.get("product", "").strip()
    prefix = f"site:{domain} " if domain else ""
    return f'{prefix}"{model}" "{brand}" {product} buy -renewed -refurbished'.strip()


def score_candidate(row: dict[str, str], result: SearchResult) -> tuple[int, list[str]]:
    text = f"{result.title} {result.snippet} {result.url}"
    text_norm = normalize(text)
    title_low = result.title.lower()
    reasons: list[str] = []
    score = 0

    if looks_like_product_page(result.url):
        score += 15
        reasons.append("URL looks like a single-product page")
    else:
        score -= 20
        reasons.append("URL doesn't look like a single-product page")

    normalized_models = [normalize(v) for v in model_variants(row.get("model", ""))]
    normalized_models = [v for v in normalized_models if len(v) >= 3]
    model_match = next((v for v in normalized_models if v in text_norm), "")
    if model_match:
        score += 60
        reasons.append("exact model code found")
    else:
        score -= 55
        reasons.append("exact model code missing")

    brand = row.get("brand", "")
    brand_norm = normalize(brand)
    if brand_norm and brand_norm in text_norm:
        score += 15
        reasons.append("brand found")
    elif brand_norm:
        score -= 12
        reasons.append("brand missing")

    product_tokens = set(words(row.get("product", "")))
    title_tokens = set(words(result.title + " " + result.snippet))
    overlap = len(product_tokens & title_tokens)
    if overlap:
        score += min(overlap * 4, 16)
        reasons.append(f"{overlap} product-word matches")

    requested_low = row.get("product", "").lower()
    for term in ACCESSORY_TERMS:
        if term in title_low and term not in requested_low:
            score -= 18
            reasons.append(f"possible accessory: {term}")
            break

    for term in BUNDLE_TERMS:
        if term in title_low and term not in requested_low:
            score -= 15
            reasons.append(f"possible bundle: {term}")
            break

    return max(min(score, 100), -100), reasons


def ensure_columns(fieldnames: list[str]) -> list[str]:
    result = list(fieldnames)
    for column in (
        "link_direct_url",
        "link_domain",
        "link_status",
        "link_matched_title",
        "link_match_score",
        "link_checked_at",
    ):
        if column not in result:
            result.append(column)
    return result


def write_csv(path: Path, fieldnames: list[str], rows: list[dict[str, str]]) -> None:
    tmp = path.with_suffix(path.suffix + ".tmp")
    with tmp.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)
    tmp.replace(path)


def discover_candidates(
    provider: SearchProvider,
    provider_name: str,
    cache: JsonCache,
    row: dict[str, str],
    domains: list[str],
    region: str,
    result_limit: int,
    dry_run: bool,
) -> tuple[list[str], list[Candidate]]:
    queries = [build_query(row, domain) for domain in domains] if domains else [build_query(row, None)]
    if dry_run:
        return queries, []

    candidates: list[Candidate] = []
    for query in queries:
        cache_key = cache.key(provider_name, region, query, result_limit)
        results = cache.get(cache_key)
        if results is None:
            results = provider.search(query, region, result_limit)
            cache.put(cache_key, results)

        for result in results:
            domain = get_domain(result.url)
            if not domain or is_non_retail_domain(domain):
                continue
            score, reasons = score_candidate(row, result)
            candidates.append(
                Candidate(
                    query=query,
                    title=result.title,
                    url=strip_tracking_params(result.url),
                    domain=domain,
                    score=score,
                    reasons="; ".join(reasons),
                )
            )
    candidates.sort(key=lambda item: item.score, reverse=True)
    return queries, candidates


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Discover candidate product-page links from anywhere on the web for a "
        "build-site master CSV (not restricted to one retailer)."
    )
    parser.add_argument("input", type=Path, help="Input master CSV")
    parser.add_argument("--output", type=Path, help="Output CSV; defaults to <input>_linked.csv")
    parser.add_argument(
        "--provider", choices=("ddgs", "serper"), default="ddgs", help="Search provider (default: ddgs)"
    )
    parser.add_argument(
        "--domains",
        default="",
        help="Comma-separated domain allowlist (e.g. homedepot.com,lowes.com). "
        "Empty means open web search across any domain.",
    )
    parser.add_argument("--region", default="us", choices=sorted(REGIONS), help="Search locale")
    parser.add_argument("--result-limit", type=int, default=8)
    parser.add_argument("--accept-threshold", type=int, default=75)
    parser.add_argument("--review-threshold", type=int, default=45)
    parser.add_argument("--max-rows", type=int, default=0, help="0 means all rows")
    parser.add_argument("--sleep", type=float, default=1.2)
    parser.add_argument("--cache", type=Path, default=Path(".product_link_cache.json"))
    parser.add_argument("--candidates-output", type=Path)
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--include-non-publishable", action="store_true")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--verbose", action="store_true")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    logging.basicConfig(
        level=logging.DEBUG if args.verbose else logging.INFO, format="%(levelname)s: %(message)s"
    )

    if not args.input.exists():
        logging.error("Input CSV not found: %s", args.input)
        return 2

    domains = [d.strip().lower() for d in args.domains.split(",") if d.strip()]

    output = args.output or args.input.with_name(args.input.stem + "_linked.csv")
    candidates_output = args.candidates_output or output.with_name(output.stem + "_review_candidates.csv")

    with args.input.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        if not reader.fieldnames:
            logging.error("Input CSV has no header row.")
            return 2
        fieldnames = ensure_columns(list(reader.fieldnames))
        rows: list[dict[str, str]] = [dict(row) for row in reader]

    provider: SearchProvider | None = None
    if not args.dry_run:
        provider = DDGSProvider() if args.provider == "ddgs" else SerperProvider(
            os.environ.get("SERPER_API_KEY", "")
        )

    cache = JsonCache(args.cache)
    review_rows: list[dict[str, Any]] = []
    accepted = 0
    searched = 0
    skipped = 0
    processed_rows = 0

    for row_index, row in enumerate(rows, start=1):
        if args.max_rows and processed_rows >= args.max_rows:
            break

        readiness = row.get("publish_readiness", "")
        action = row.get("research_action", "").upper()
        if not args.include_non_publishable:
            if action in {"MOVE", "REMOVE"} or readiness in {
                "EXCLUDE_FROM_MAIN_GADGET_DIRECTORY",
                "NEEDS_MODEL_EXPANSION",
            }:
                skipped += 1
                continue
            if not is_exact_model(row):
                skipped += 1
                continue

        existing_status = row.get("link_status", "")
        existing_url = row.get("link_direct_url", "")
        if not args.force and (existing_status == "VERIFIED_DIRECT" or existing_url):
            skipped += 1
            continue

        processed_rows += 1
        logging.info(
            "[%d/%d] %s | %s | %s", row_index, len(rows), row.get("platform", ""),
            row.get("model", ""), row.get("product", ""),
        )

        try:
            if provider is None and not args.dry_run:
                raise RuntimeError("Search provider was not initialized")
            queries, candidates = discover_candidates(
                provider=provider,  # type: ignore[arg-type]
                provider_name=args.provider,
                cache=cache,
                row=row,
                domains=domains,
                region=args.region,
                result_limit=args.result_limit,
                dry_run=args.dry_run,
            )
            if args.dry_run:
                for query in queries:
                    print(f"{row.get('record_id','')}\t{query}")
                continue
            searched += 1
        except Exception as exc:  # keep the full batch alive
            logging.warning("Search failed for %s: %s", row.get("model", ""), exc)
            row["link_status"] = "SEARCH_ERROR"
            row["link_checked_at"] = now_iso()
            write_csv(output, fieldnames, rows)
            continue

        if not candidates:
            row["link_status"] = "NO_PRODUCT_PAGE_FOUND"
            row["link_checked_at"] = now_iso()
        else:
            best = candidates[0]
            if best.score >= args.accept_threshold:
                row["link_direct_url"] = best.url
                row["link_domain"] = best.domain
                row["link_status"] = "AUTO_MATCH_HIGH_CONFIDENCE"
                row["link_matched_title"] = best.title
                row["link_match_score"] = str(best.score)
                row["link_checked_at"] = now_iso()
                accepted += 1
            else:
                row["link_status"] = "REVIEW_REQUIRED"
                row["link_domain"] = best.domain
                row["link_matched_title"] = best.title
                row["link_match_score"] = str(best.score)
                row["link_checked_at"] = now_iso()

            for rank, candidate in enumerate(candidates, start=1):
                if candidate.score < args.review_threshold:
                    continue
                review_rows.append(
                    {
                        "record_id": row.get("record_id", ""),
                        "platform": row.get("platform", ""),
                        "brand": row.get("brand", ""),
                        "model": row.get("model", ""),
                        "product": row.get("product", ""),
                        "rank": rank,
                        "score": candidate.score,
                        "candidate_title": candidate.title,
                        "candidate_url": candidate.url,
                        "domain": candidate.domain,
                        "reasons": candidate.reasons,
                        "query": candidate.query,
                    }
                )

        write_csv(output, fieldnames, rows)
        if args.sleep > 0:
            time.sleep(args.sleep + random.uniform(0.0, args.sleep * 0.35))

    if not args.dry_run:
        write_csv(output, fieldnames, rows)
        review_fields = [
            "record_id", "platform", "brand", "model", "product", "rank", "score",
            "candidate_title", "candidate_url", "domain", "reasons", "query",
        ]
        with candidates_output.open("w", encoding="utf-8-sig", newline="") as handle:
            writer = csv.DictWriter(handle, fieldnames=review_fields)
            writer.writeheader()
            writer.writerows(review_rows)

        logging.info("Output: %s", output)
        logging.info("Review candidates: %s", candidates_output)
        logging.info(
            "Processed rows=%d, live searches=%d, accepted=%d, skipped=%d",
            processed_rows, searched, accepted, skipped,
        )

    return 0


if __name__ == "__main__":
    sys.exit(main())
