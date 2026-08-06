#!/usr/bin/env python3
"""Autocomplete fan-out fetcher (Google suggest, US locale) with caching + dedup.

Usage: python3 scripts/fanout.py "seed one" "seed two" [--mode alpha|question|plain]
Writes cache to .cache/fanout/<hash>.json; prints deduped suggestions to stdout.
"""
import hashlib
import json
import pathlib
import sys
import time
import urllib.parse
import urllib.request

CACHE = pathlib.Path(".cache/fanout")
CACHE.mkdir(parents=True, exist_ok=True)

QUESTION_PREFIXES = ["how", "what", "why", "can", "is", "best", "vs", "calculator"]
ALPHABET = "abcdefghijklmnopqrstuvwxyz"


def suggest(query: str) -> list[str]:
    key = CACHE / (hashlib.sha1(query.encode()).hexdigest() + ".json")
    if key.exists():
        return json.loads(key.read_text())
    url = (
        "https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q="
        + urllib.parse.quote(query)
    )
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read().decode("utf-8", "replace"))
        results = data[1] if len(data) > 1 else []
    except Exception as e:
        print(f"# error for {query!r}: {e}", file=sys.stderr)
        results = []
    key.write_text(json.dumps(results))
    time.sleep(0.4)
    return results


def main() -> None:
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    mode = "all"
    for a in sys.argv[1:]:
        if a.startswith("--mode="):
            mode = a.split("=", 1)[1]
    seen: set[str] = set()
    for seed in args:
        queries = [seed]
        if mode in ("all", "alpha"):
            queries += [f"{seed} {c}" for c in ALPHABET]
        if mode in ("all", "question"):
            queries += [f"{p} {seed}" for p in QUESTION_PREFIXES]
        for q in queries:
            for s in suggest(q):
                s = s.strip().lower()
                if s and s not in seen:
                    seen.add(s)
                    print(s)


if __name__ == "__main__":
    main()
