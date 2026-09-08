#!/usr/bin/env python3
"""
Find direct Amazon product-page links for a build-site master CSV.

This script searches indexed Amazon pages; it does not scrape Amazon search pages.
It supports:
  1. DDGS (no API key, best effort):  pip install ddgs
  2. Serper Google Search API:         pip install requests
     Set SERPER_API_KEY in your environment.

Examples
--------
# Free/best-effort mode
python find_amazon_product_links.py \
  runsonyourbattery_master_products_and_links_2026-09-08.csv \
  --provider ddgs --output master_with_links.csv

# More reliable API-backed mode
export SERPER_API_KEY='your-key'
python find_amazon_product_links.py \
  runsonyourbattery_master_products_and_links_2026-09-08.csv \
  --provider serper --output master_with_links.csv

# Test only the first 10 rows and US market
python find_amazon_product_links.py INPUT.csv --provider ddgs --markets us \
  --max-rows 10 --dry-run

The script never overwrites rows marked VERIFIED_DIRECT unless --force is used.
Automatic matches remain clearly labelled AUTO_MATCH_HIGH_CONFIDENCE and should
still receive a quick human check before publication or affiliate use.

Expected input CSV columns (a "master CSV" per docs/agents/site-prd-template.md's
data-source convention, one row per product):
  record_id, platform, brand, model, product, region, exact_model,
  publish_readiness, research_action
Optional pre-existing columns per market (skipped unless --force):
  amazon_<market>_link_status, amazon_<market>_direct_url
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
from typing import Any, Iterable, Protocol
from urllib.parse import parse_qsl, urlencode, urlparse, urlunparse


MARKETS: dict[str, dict[str, str]] = {
    "us": {"domain": "amazon.com", "gl": "us", "hl": "en"},
    "uk": {"domain": "amazon.co.uk", "gl": "gb", "hl": "en"},
    "de": {"domain": "amazon.de", "gl": "de", "hl": "de"},
    "fr": {"domain": "amazon.fr", "gl": "fr", "hl": "fr"},
    "it": {"domain": "amazon.it", "gl": "it", "hl": "it"},
    "es": {"domain": "amazon.es", "gl": "es", "hl": "es"},
}

ASIN_RE = re.compile(
    r"/(?:dp|gp/product|gp/aw/d|product-reviews)/([A-Z0-9]{10})(?:[/?]|$)",
    flags=re.IGNORECASE,
)

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
    market: str
    query: str
    title: str
    source_url: str
    canonical_url: str
    asin: str
    score: int
    reasons: str


class SearchProvider(Protocol):
    def search(self, query: str, market: str, limit: int) -> list[SearchResult]:
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

    def search(self, query: str, market: str, limit: int) -> list[SearchResult]:
        region = {
            "us": "us-en",
            "uk": "uk-en",
            "de": "de-de",
            "fr": "fr-fr",
            "it": "it-it",
            "es": "es-es",
        }[market]
        rows: list[SearchResult] = []
        with self._ddgs_cls() as ddgs:
            for item in ddgs.text(
                query,
                region=region,
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

    def search(self, query: str, market: str, limit: int) -> list[SearchResult]:
        cfg = MARKETS[market]
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
    def key(provider: str, market: str, query: str, limit: int) -> str:
        raw = f"{provider}|{market}|{limit}|{query}".encode("utf-8")
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
    # Slash normally means alternative/regional codes. Preserve spaces inside models.
    raw_parts = re.split(r"\s*/\s*|\s+or\s+", model, flags=re.IGNORECASE)
    variants = []
    for part in raw_parts:
        part = part.strip()
        if part and normalize(part):
            variants.append(part)
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


def market_is_eligible(row: dict[str, str], market: str) -> bool:
    status = row.get(f"amazon_{market}_link_status", "")
    if status == "OUT_OF_SCOPE_FOR_ROW_REGION":
        return False
    region = row.get("region", "").lower()
    if market == "us":
        return "usa" in region
    return "europe" in region or "uk" in region


def build_query(row: dict[str, str], market: str) -> str:
    domain = MARKETS[market]["domain"]
    brand = row.get("brand", "").strip()
    model = row.get("model", "").strip()
    product = row.get("product", "").strip()
    # Exact model is the strongest signal. Product wording helps disambiguate codes.
    return f'site:{domain} "{model}" "{brand}" {product} -renewed -refurbished'.strip()


def extract_asin(url: str) -> str:
    match = ASIN_RE.search(url)
    return match.group(1).upper() if match else ""


def is_expected_domain(url: str, domain: str) -> bool:
    host = (urlparse(url).hostname or "").lower().lstrip("www.")
    return host == domain or host.endswith("." + domain)


def canonicalize_amazon_url(url: str, market: str) -> tuple[str, str]:
    asin = extract_asin(url)
    if not asin:
        return "", ""
    domain = MARKETS[market]["domain"]
    return f"https://www.{domain}/dp/{asin}", asin


def score_candidate(row: dict[str, str], market: str, result: SearchResult) -> tuple[int, list[str]]:
    domain = MARKETS[market]["domain"]
    text = f"{result.title} {result.snippet} {result.url}"
    text_norm = normalize(text)
    title_low = result.title.lower()
    reasons: list[str] = []
    score = 0

    if is_expected_domain(result.url, domain):
        score += 10
        reasons.append("expected Amazon domain")
    else:
        return -100, ["wrong domain"]

    asin = extract_asin(result.url)
    if asin:
        score += 5
        reasons.append("direct product-page pattern")
    else:
        return -80, ["not a direct /dp/ product URL"]

    normalized_models = [normalize(v) for v in model_variants(row.get("model", ""))]
    normalized_models = [v for v in normalized_models if len(v) >= 3]
    model_match = next((v for v in normalized_models if v in text_norm), "")
    if model_match:
        score += 65
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
        product_points = min(overlap * 4, 16)
        score += product_points
        reasons.append(f"{overlap} product-word matches")

    # Penalize obvious accessories or packages unless the requested product itself is one.
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


def affiliate_url(url: str, tag: str) -> str:
    if not url or not tag:
        return url
    parsed = urlparse(url)
    query = dict(parse_qsl(parsed.query, keep_blank_values=True))
    query["tag"] = tag
    return urlunparse(parsed._replace(query=urlencode(query)))


def ensure_columns(fieldnames: list[str], markets: Iterable[str]) -> list[str]:
    result = list(fieldnames)
    for market in markets:
        needed = [
            f"amazon_{market}_direct_url",
            f"amazon_{market}_asin",
            f"amazon_{market}_link_status",
            f"amazon_{market}_matched_title",
            f"amazon_{market}_match_score",
            f"amazon_{market}_checked_at",
            f"amazon_{market}_search_url",
        ]
        for column in needed:
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
    market: str,
    result_limit: int,
    dry_run: bool,
) -> tuple[str, list[Candidate]]:
    query = build_query(row, market)
    if dry_run:
        return query, []

    cache_key = cache.key(provider_name, market, query, result_limit)
    results = cache.get(cache_key)
    if results is None:
        results = provider.search(query, market, result_limit)
        cache.put(cache_key, results)

    candidates: list[Candidate] = []
    for result in results:
        canonical, asin = canonicalize_amazon_url(result.url, market)
        if not canonical:
            continue
        score, reasons = score_candidate(row, market, result)
        candidates.append(
            Candidate(
                market=market,
                query=query,
                title=result.title,
                source_url=result.url,
                canonical_url=canonical,
                asin=asin,
                score=score,
                reasons="; ".join(reasons),
            )
        )
    candidates.sort(key=lambda item: item.score, reverse=True)
    return query, candidates


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Discover direct Amazon product links for a build-site master CSV."
    )
    parser.add_argument("input", type=Path, help="Input master CSV")
    parser.add_argument("--output", type=Path, help="Output CSV; defaults to <input>_linked.csv")
    parser.add_argument(
        "--provider",
        choices=("ddgs", "serper"),
        default="ddgs",
        help="Search provider (default: ddgs)",
    )
    parser.add_argument(
        "--markets",
        default="us,uk,de,fr,it,es",
        help="Comma-separated market codes: us,uk,de,fr,it,es",
    )
    parser.add_argument("--result-limit", type=int, default=8)
    parser.add_argument(
        "--accept-threshold",
        type=int,
        default=82,
        help="Minimum candidate score to write as an automatic direct link",
    )
    parser.add_argument(
        "--review-threshold",
        type=int,
        default=55,
        help="Minimum score to include in the review-candidates CSV",
    )
    parser.add_argument("--max-rows", type=int, default=0, help="0 means all rows")
    parser.add_argument("--sleep", type=float, default=1.2, help="Base delay between live searches")
    parser.add_argument("--cache", type=Path, default=Path(".amazon_link_cache.json"))
    parser.add_argument(
        "--candidates-output",
        type=Path,
        help="Low-confidence candidate CSV; defaults beside output",
    )
    parser.add_argument("--force", action="store_true", help="Replace existing direct links")
    parser.add_argument(
        "--include-non-publishable",
        action="store_true",
        help="Also process MOVE/REMOVE and rows without exact SKUs",
    )
    parser.add_argument("--dry-run", action="store_true", help="Print queries but do not search")
    parser.add_argument("--verbose", action="store_true")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    logging.basicConfig(
        level=logging.DEBUG if args.verbose else logging.INFO,
        format="%(levelname)s: %(message)s",
    )

    if not args.input.exists():
        logging.error("Input CSV not found: %s", args.input)
        return 2

    markets = [m.strip().lower() for m in args.markets.split(",") if m.strip()]
    invalid = [m for m in markets if m not in MARKETS]
    if invalid:
        logging.error("Unknown markets: %s", ", ".join(invalid))
        return 2

    output = args.output or args.input.with_name(args.input.stem + "_linked.csv")
    candidates_output = args.candidates_output or output.with_name(
        output.stem + "_review_candidates.csv"
    )

    with args.input.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        if not reader.fieldnames:
            logging.error("Input CSV has no header row.")
            return 2
        fieldnames = ensure_columns(list(reader.fieldnames), markets)
        rows: list[dict[str, str]] = [dict(row) for row in reader]

    provider: SearchProvider | None = None
    if not args.dry_run:
        if args.provider == "ddgs":
            provider = DDGSProvider()
        else:
            provider = SerperProvider(os.environ.get("SERPER_API_KEY", ""))

    cache = JsonCache(args.cache)
    review_rows: list[dict[str, Any]] = []
    accepted = 0
    searched = 0
    skipped = 0
    processed_rows = 0

    affiliate_tags = {
        market: os.environ.get(f"AMAZON_TAG_{market.upper()}", "") for market in markets
    }

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

        processed_rows += 1
        logging.info(
            "[%d/%d] %s | %s | %s",
            row_index,
            len(rows),
            row.get("platform", ""),
            row.get("model", ""),
            row.get("product", ""),
        )

        for market in markets:
            if not market_is_eligible(row, market):
                continue

            existing_status = row.get(f"amazon_{market}_link_status", "")
            existing_url = row.get(f"amazon_{market}_direct_url", "")
            if not args.force and (existing_status == "VERIFIED_DIRECT" or existing_url):
                skipped += 1
                continue

            try:
                if provider is None and not args.dry_run:
                    raise RuntimeError("Search provider was not initialized")
                query, candidates = discover_candidates(
                    provider=provider,  # type: ignore[arg-type]
                    provider_name=args.provider,
                    cache=cache,
                    row=row,
                    market=market,
                    result_limit=args.result_limit,
                    dry_run=args.dry_run,
                )
                if args.dry_run:
                    print(f"{row.get('record_id','')}\t{market}\t{query}")
                    continue
                searched += 1
            except Exception as exc:  # keep the full batch alive
                logging.warning("Search failed for %s/%s: %s", row.get("model", ""), market, exc)
                row[f"amazon_{market}_link_status"] = "SEARCH_ERROR"
                row[f"amazon_{market}_checked_at"] = now_iso()
                continue

            if not candidates:
                row[f"amazon_{market}_link_status"] = "NO_DIRECT_PRODUCT_PAGE_FOUND"
                row[f"amazon_{market}_matched_title"] = ""
                row[f"amazon_{market}_match_score"] = ""
                row[f"amazon_{market}_checked_at"] = now_iso()
            else:
                best = candidates[0]
                if best.score >= args.accept_threshold:
                    row[f"amazon_{market}_direct_url"] = affiliate_url(
                        best.canonical_url, affiliate_tags[market]
                    )
                    row[f"amazon_{market}_asin"] = best.asin
                    row[f"amazon_{market}_link_status"] = "AUTO_MATCH_HIGH_CONFIDENCE"
                    row[f"amazon_{market}_matched_title"] = best.title
                    row[f"amazon_{market}_match_score"] = str(best.score)
                    row[f"amazon_{market}_checked_at"] = now_iso()
                    accepted += 1
                else:
                    row[f"amazon_{market}_link_status"] = "REVIEW_REQUIRED"
                    row[f"amazon_{market}_matched_title"] = best.title
                    row[f"amazon_{market}_match_score"] = str(best.score)
                    row[f"amazon_{market}_checked_at"] = now_iso()

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
                            "market": market,
                            "rank": rank,
                            "score": candidate.score,
                            "candidate_title": candidate.title,
                            "candidate_url": candidate.canonical_url,
                            "asin": candidate.asin,
                            "reasons": candidate.reasons,
                            "query": candidate.query,
                        }
                    )

            # Checkpoint after every market so a long run is resumable.
            write_csv(output, fieldnames, rows)
            if args.sleep > 0:
                time.sleep(args.sleep + random.uniform(0.0, args.sleep * 0.35))

    if not args.dry_run:
        write_csv(output, fieldnames, rows)
        review_fields = [
            "record_id",
            "platform",
            "brand",
            "model",
            "product",
            "market",
            "rank",
            "score",
            "candidate_title",
            "candidate_url",
            "asin",
            "reasons",
            "query",
        ]
        with candidates_output.open("w", encoding="utf-8-sig", newline="") as handle:
            writer = csv.DictWriter(handle, fieldnames=review_fields)
            writer.writeheader()
            writer.writerows(review_rows)

        logging.info("Output: %s", output)
        logging.info("Review candidates: %s", candidates_output)
        logging.info(
            "Processed rows=%d, live searches=%d, accepted=%d, skipped=%d",
            processed_rows,
            searched,
            accepted,
            skipped,
        )

    return 0


if __name__ == "__main__":
    sys.exit(main())
