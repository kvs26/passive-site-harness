#!/usr/bin/env python3
"""Pain-source fetcher with pluggable adapters. Credential-free adapters work
out of the box; credentialed ones (Reddit OAuth, GitHub PAT) activate only if
.env supplies credentials. Results cached under .cache/pain/.

Usage: python3 scripts/pain-fetch.py <adapter> "query"
Adapters: hn, ddg, github, itunes
"""
import hashlib
import json
import os
import pathlib
import sys
import urllib.parse
import urllib.request

CACHE = pathlib.Path(".cache/pain")
CACHE.mkdir(parents=True, exist_ok=True)

# Load .env if present (never committed)
env_file = pathlib.Path(".env")
if env_file.exists():
    for line in env_file.read_text().splitlines():
        if "=" in line and not line.strip().startswith("#"):
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip())


def fetch(url: str, headers: dict | None = None) -> str:
    key = CACHE / (hashlib.sha1(url.encode()).hexdigest() + ".txt")
    if key.exists():
        return key.read_text()
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", **(headers or {})})
    with urllib.request.urlopen(req, timeout=15) as r:
        body = r.read().decode("utf-8", "replace")
    key.write_text(body)
    return body


def hn(query: str) -> None:
    url = "https://hn.algolia.com/api/v1/search?query=" + urllib.parse.quote(query)
    data = json.loads(fetch(url))
    for hit in data.get("hits", [])[:15]:
        title = hit.get("title") or (hit.get("comment_text") or "")[:120]
        print(f"- {title}\n  https://news.ycombinator.com/item?id={hit.get('objectID')}")


def ddg(query: str) -> None:
    url = "https://html.duckduckgo.com/html/?q=" + urllib.parse.quote(query)
    body = fetch(url)
    import re

    for href, title in re.findall(
        r'class="result__a"[^>]*href="([^"]+)"[^>]*>(.*?)</a>', body
    )[:15]:
        title = re.sub(r"<[^>]+>", "", title)
        if "uddg=" in href:
            href = urllib.parse.unquote(href.split("uddg=", 1)[1].split("&", 1)[0])
        print(f"- {title}\n  {href}")


def github(query: str) -> None:
    headers = {}
    if os.environ.get("GITHUB_PAT"):
        headers["Authorization"] = "Bearer " + os.environ["GITHUB_PAT"]
    url = "https://api.github.com/search/issues?q=" + urllib.parse.quote(query)
    data = json.loads(fetch(url, headers))
    for item in data.get("items", [])[:15]:
        print(f"- {item['title']}\n  {item['html_url']}")


def itunes(app_id: str) -> None:
    url = f"https://itunes.apple.com/us/rss/customerreviews/id={app_id}/sortby=mostrecent/json"
    data = json.loads(fetch(url))
    for entry in data.get("feed", {}).get("entry", [])[1:16]:
        rating = entry.get("im:rating", {}).get("label", "?")
        title = entry.get("title", {}).get("label", "")
        print(f"- [{rating}★] {title}")


ADAPTERS = {"hn": hn, "ddg": ddg, "github": github, "itunes": itunes}

if __name__ == "__main__":
    if len(sys.argv) < 3 or sys.argv[1] not in ADAPTERS:
        print(f"usage: pain-fetch.py {{{'|'.join(ADAPTERS)}}} <query>", file=sys.stderr)
        sys.exit(1)
    ADAPTERS[sys.argv[1]](sys.argv[2])
