#!/usr/bin/env python3
"""Pain-source fetcher with pluggable adapters. Credential-free adapters work
out of the box; credentialed ones (GitHub PAT, YouTube Data API, Product Hunt,
optional Stack Exchange key) activate only if .env supplies credentials.
Results cached under .cache/pain/.

Note: Reddit's official Data API (OAuth) now requires an approved support
ticket under the 2026 Responsible Builder Policy — self-serve app creation
alone no longer works, and our request was denied (2026-09-09). That's a
different surface than Reddit's own public search, though: `reddit.com/search.rss`
stays open with no login, no app, and no approval (verified live 2026-09-09).
The `reddit` adapter uses that RSS search; `arcticshift` is a second
credential-free option (free community-run archive/API, Pushshift successor)
for subreddit browsing and historical lookups. Do not retry the OAuth path via
a logged-in browser session as a workaround — that risks the account.

Usage: python3 scripts/pain-fetch.py <adapter> "query"
Run without arguments for per-adapter query formats.
"""
import gzip
import hashlib
import html
import json
import os
import pathlib
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

CACHE = pathlib.Path(".cache/pain")
CACHE.mkdir(parents=True, exist_ok=True)

# Load .env if present (never committed)
env_file = pathlib.Path(".env")
if env_file.exists():
    for line in env_file.read_text().splitlines():
        if "=" in line and not line.strip().startswith("#"):
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip())


def fetch(url: str, headers: dict | None = None, data: str | None = None) -> str:
    cache_id = url + ("|" + data if data else "")
    key = CACHE / (hashlib.sha1(cache_id.encode()).hexdigest() + ".txt")
    if key.exists():
        return key.read_text()
    req = urllib.request.Request(
        url,
        data=data.encode() if data else None,
        headers={"User-Agent": "Mozilla/5.0", "Accept-Encoding": "gzip", **(headers or {})},
    )
    with urllib.request.urlopen(req, timeout=20) as r:
        raw = r.read()
    if raw[:2] == b"\x1f\x8b":  # Stack Exchange always gzips
        raw = gzip.decompress(raw)
    body = raw.decode("utf-8", "replace")
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


def stackexchange(arg: str) -> None:
    """arg: "site|query"; site defaults to softwarerecs. Keyless = 300 req/day."""
    site, _, q = arg.rpartition("|")
    site = site or "softwarerecs"
    url = (
        "https://api.stackexchange.com/2.3/search/excerpts?order=desc&sort=relevance"
        f"&q={urllib.parse.quote(q)}&site={site}&pagesize=15"
    )
    if os.environ.get("STACKEXCHANGE_KEY"):
        url += "&key=" + os.environ["STACKEXCHANGE_KEY"]
    data = json.loads(fetch(url))
    domain = site + (".com" if site in (
        "stackoverflow", "superuser", "serverfault", "askubuntu", "mathoverflow"
    ) else ".stackexchange.com")
    for item in data.get("items", [])[:15]:
        title = html.unescape(item.get("title", ""))
        excerpt = re.sub(r"<[^>]+>", "", html.unescape(item.get("excerpt", "")))
        excerpt = re.sub(r"\s+", " ", excerpt)[:160]
        print(f"- {title}: {excerpt}\n  https://{domain}/q/{item.get('question_id')}")


def discourse(arg: str) -> None:
    """arg: "instance|query"; empty query = /latest.json firehose."""
    instance, _, q = arg.partition("|")
    if not q:
        data = json.loads(fetch(f"https://{instance}/latest.json"))
        for t in data.get("topic_list", {}).get("topics", [])[:20]:
            print(
                f"- {t.get('title')} ({t.get('posts_count')} posts)\n"
                f"  https://{instance}/t/{t.get('slug')}/{t.get('id')}"
            )
        return
    data = json.loads(fetch(f"https://{instance}/search.json?q=" + urllib.parse.quote(q)))
    topics = {t["id"]: t for t in data.get("topics", [])}
    for p in data.get("posts", [])[:15]:
        title = topics.get(p.get("topic_id"), {}).get("title", "?")
        blurb = re.sub(r"\s+", " ", html.unescape(p.get("blurb", "")))[:160]
        print(f"- {title}: {blurb}\n  https://{instance}/t/{p.get('topic_id')}")


SUGGEST_ENGINES = {
    "google": "https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q={q}",
    "youtube": "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q={q}",
    "bing": "https://api.bing.com/osjson.aspx?query={q}",
    "brave": "https://search.brave.com/api/suggest?q={q}",
    "ddg": "https://duckduckgo.com/ac/?q={q}&type=list",
    "amazon": (
        "https://completion.amazon.com/api/2017/suggestions"
        "?alias=aps&mid=ATVPDKIKX0DER&prefix={q}&suggestion-type=KEYWORD"
    ),
}


def suggest(arg: str) -> None:
    """arg: "engine|query"; engine: google|youtube|bing|brave|ddg|amazon.
    For alphabet-soup fan-out (Google only) use scripts/fanout.py."""
    engine, _, q = arg.partition("|")
    if engine not in SUGGEST_ENGINES or not q:
        print(f"usage: suggest {{{'|'.join(SUGGEST_ENGINES)}}}|<query>", file=sys.stderr)
        sys.exit(1)
    data = json.loads(fetch(SUGGEST_ENGINES[engine].format(q=urllib.parse.quote(q))))
    if engine == "amazon":
        items = [s.get("value", "") for s in data.get("suggestions", [])]
    else:
        items = data[1] if len(data) > 1 else []
    for s in items:
        print(f"- {s}")


def lemmy(arg: str) -> None:
    """arg: "instance|query"; instance defaults to lemmy.world. Weak relevance —
    quote pain phrases."""
    instance, _, q = arg.rpartition("|")
    instance = instance or "lemmy.world"
    base = f"https://{instance}/api/v3/search?q={urllib.parse.quote(q)}&sort=New&limit=15"
    data = json.loads(fetch(base + "&type_=Posts"))
    for p in data.get("posts", [])[:15]:
        post = p.get("post", {})
        print(f"- {post.get('name')}\n  {post.get('ap_id')}")
    data = json.loads(fetch(base + "&type_=Comments"))
    for c in data.get("comments", [])[:15]:
        comment = c.get("comment", {})
        text = re.sub(r"\s+", " ", comment.get("content", ""))[:160]
        print(f"- [comment] {text}\n  {comment.get('ap_id')}")


def gplay(package_id: str) -> None:
    """Google Play reviews via internal batchexecute RPC (UsvDTd) — undocumented
    protocol, may break; fails soft."""
    inner = json.dumps([None, None, [2, None, [20, None, None], None, []], [package_id, 7]])
    body_arg = urllib.parse.urlencode({"f.req": json.dumps([[["UsvDTd", inner, None, "generic"]]])})
    try:
        body = fetch(
            "https://play.google.com/_/PlayStoreUi/data/batchexecute",
            headers={"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"},
            data=body_arg,
        )
        envelope = next(json.loads(ln) for ln in body.splitlines() if ln.startswith("[["))
        reviews = json.loads(envelope[0][2])[0]
        for r_ in reviews[:15]:
            text = re.sub(r"\s+", " ", r_[4] or "")[:200]
            print(f"- [{r_[2]}\u2605] {text}")
    except Exception as e:  # noqa: BLE001 — internal protocol, fail soft by design
        print(f"# gplay adapter failed (internal RPC may have changed): {e}", file=sys.stderr)
        sys.exit(2)


def lobsters(query: str) -> None:
    url = (
        "https://lobste.rs/search?what=stories&order=newest&q=" + urllib.parse.quote(query)
    )
    body = fetch(url)
    hits = re.findall(r'<a[^>]*class="u-url"[^>]*href="([^"]+)"[^>]*>([^<]+)</a>', body)
    if not hits:
        print("# no results (or lobste.rs markup changed)", file=sys.stderr)
    for href, title in hits[:15]:
        print(f"- {html.unescape(title)}\n  {href}")


def youtube(query: str) -> None:
    """Search videos + top comments. Needs YOUTUBE_API_KEY in .env
    (free key, 10K units/day; search = 100 units, comments = 1 unit)."""
    key = os.environ.get("YOUTUBE_API_KEY")
    if not key:
        print("# youtube adapter requires YOUTUBE_API_KEY in .env", file=sys.stderr)
        sys.exit(2)
    surl = (
        "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=3"
        f"&q={urllib.parse.quote(query)}&key={key}"
    )
    for item in json.loads(fetch(surl)).get("items", []):
        vid = item["id"]["videoId"]
        print(f"## {item['snippet']['title']}\n   https://www.youtube.com/watch?v={vid}")
        curl = (
            f"https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId={vid}"
            f"&order=relevance&maxResults=10&key={key}"
        )
        try:
            cdata = json.loads(fetch(curl))
        except Exception as e:
            print(f"# comments unavailable for {vid}: {e}", file=sys.stderr)
            continue
        for c in cdata.get("items", []):
            s = c["snippet"]["topLevelComment"]["snippet"]
            text = re.sub(r"<[^>]+>|\s+", " ", html.unescape(s.get("textDisplay", "")))[:180]
            print(f"- {text}")


def producthunt(topic: str) -> None:
    """Newest posts for a topic slug via GraphQL v2. Needs PRODUCTHUNT_TOKEN in .env."""
    token = os.environ.get("PRODUCTHUNT_TOKEN")
    if not token:
        print("# producthunt adapter requires PRODUCTHUNT_TOKEN in .env", file=sys.stderr)
        sys.exit(2)
    gql = {
        "query": (
            "query($topic:String){posts(first:15,topic:$topic,order:NEWEST)"
            "{edges{node{name tagline votesCount commentsCount url}}}}"
        ),
        "variables": {"topic": topic},
    }
    try:
        body = fetch(
            "https://api.producthunt.com/v2/api/graphql",
            headers={"Content-Type": "application/json", "Authorization": "Bearer " + token},
            data=json.dumps(gql),
        )
        data = json.loads(body)
        for edge in data.get("data", {}).get("posts", {}).get("edges", []):
            n = edge["node"]
            print(
                f"- {n['name']} \u2014 {n['tagline']} "
                f"({n['votesCount']}\u25b2, {n['commentsCount']} comments)\n  {n['url']}"
            )
    except Exception as e:  # noqa: BLE001 — API shape unverified, fail soft
        print(f"# producthunt adapter failed: {e}", file=sys.stderr)
        sys.exit(2)


REDDIT_UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/120.0 Safari/537.36"
)


def reddit(arg: str) -> None:
    """arg: "subreddit|query" (subreddit optional — "|budgeting app" searches
    all of Reddit; "personalfinance|budgeting app" scopes to a sub). Uses
    Reddit's public search.rss — credential-free, no app/approval needed,
    verified live 2026-09-09. A generic User-Agent ("Mozilla/5.0" alone) gets
    WAF-blocked; a full browser UA (above) does not. Anonymous access is
    IP-rate-limited to roughly one request per ~45s — on a 429 this waits out
    Reddit's own reported reset window (once, capped at 90s) and retries
    rather than failing the caller; fetch()'s disk cache means a retried
    identical query after that is instant next time.
    """
    sub, _, q = arg.partition("|")
    if not q:
        sub, q = "", arg
    base = f"https://www.reddit.com/r/{sub}/search.rss" if sub else "https://www.reddit.com/search.rss"
    url = f"{base}?q={urllib.parse.quote(q)}&sort=relevance" + ("&restrict_sr=1" if sub else "")
    try:
        body = fetch(url, headers={"User-Agent": REDDIT_UA})
    except urllib.error.HTTPError as e:
        if e.code == 429:
            wait = min(int(e.headers.get("x-ratelimit-reset", 60) or 60), 90)
            print(f"# reddit adapter rate-limited, waiting {wait}s and retrying once...", file=sys.stderr)
            time.sleep(wait)
            try:
                body = fetch(url, headers={"User-Agent": REDDIT_UA})
            except urllib.error.HTTPError as e2:
                print(f"# reddit adapter still rate-limited: {e2}", file=sys.stderr)
                sys.exit(2)
        else:
            print(f"# reddit adapter failed: {e}", file=sys.stderr)
            sys.exit(2)
    ns = {"a": "http://www.w3.org/2005/Atom"}
    root = ET.fromstring(body)
    for entry in root.findall("a:entry", ns)[:15]:
        title = (entry.findtext("a:title", default="", namespaces=ns) or "").strip()
        link_el = entry.find("a:link", ns)
        link = link_el.get("href") if link_el is not None else ""
        content = entry.findtext("a:content", default="", namespaces=ns) or ""
        snippet = re.sub(r"<[^>]+>", " ", html.unescape(content))
        snippet = re.sub(r"\s+", " ", snippet).strip()[:160]
        print(f"- {title}: {snippet}\n  {link}")


def arcticshift(arg: str) -> None:
    """arg: "subreddit|query" (subreddit required, query optional). Free,
    credential-free, community-run Reddit archive/API (Pushshift successor,
    https://github.com/ArthurHeitmann/arctic_shift). Subreddit-only browsing
    (no query) is reliable; adding `query` does full-text title/selftext
    search which the docs warn is slow and prone to server-side timeout on
    this free tier — fails soft with a retry hint rather than hanging."""
    sub, _, q = arg.partition("|")
    if not sub:
        print("usage: arcticshift <subreddit>|[query]", file=sys.stderr)
        sys.exit(1)
    url = (
        "https://arctic-shift.photon-reddit.com/api/posts/search"
        f"?subreddit={urllib.parse.quote(sub)}&limit=15&sort=desc"
        "&fields=title,selftext,subreddit,id,created_utc"
    )
    if q:
        url += "&query=" + urllib.parse.quote(q)
    try:
        data = json.loads(fetch(url))
    except Exception as e:  # noqa: BLE001 — free shared service, fail soft
        print(f"# arcticshift adapter failed: {e}", file=sys.stderr)
        sys.exit(2)
    if data.get("error"):
        print(f"# arcticshift: {data['error']} (try again, or drop the query filter)", file=sys.stderr)
        sys.exit(2)
    for p in (data.get("data") or [])[:15]:
        selftext = re.sub(r"\s+", " ", p.get("selftext") or "")[:160]
        print(
            f"- {p.get('title', '')}: {selftext}\n"
            f"  https://reddit.com/r/{p.get('subreddit', sub)}/comments/{p.get('id', '')}"
        )


USAGE = """usage: pain-fetch.py <adapter> <query>
  hn <query>                     HN Algolia search
  ddg <query>                    DuckDuckGo HTML (supports site: query-recipes)
  github <query>                 GitHub issue search (GITHUB_PAT optional)
  itunes <app_id>                iTunes review RSS
  stackexchange [site|]<query>   SE search/excerpts; default site softwarerecs
                                 (STACKEXCHANGE_KEY optional: 300/day -> 10K/day)
  discourse <instance>|[query]   Discourse search.json; empty query = latest.json
  suggest <engine>|<query>       engine: google|youtube|bing|brave|ddg|amazon
  lemmy [instance|]<query>       Lemmy posts+comments; default lemmy.world
  gplay <package_id>             Google Play reviews (fragile internal RPC)
  lobsters <query>               Lobsters story search
  youtube <query>                video search + comments (needs YOUTUBE_API_KEY)
  producthunt <topic-slug>       PH newest posts (needs PRODUCTHUNT_TOKEN)
  reddit [subreddit|]<query>     search.rss post search, no credentials needed;
                                 no subreddit = site-wide (anon IP rate limit ~1/45s)
  arcticshift <subreddit>|[query] community Reddit archive, no credentials needed;
                                 query is optional but can be slow/timeout upstream"""

ADAPTERS = {
    "hn": hn,
    "ddg": ddg,
    "github": github,
    "itunes": itunes,
    "stackexchange": stackexchange,
    "discourse": discourse,
    "suggest": suggest,
    "lemmy": lemmy,
    "gplay": gplay,
    "lobsters": lobsters,
    "youtube": youtube,
    "producthunt": producthunt,
    "reddit": reddit,
    "arcticshift": arcticshift,
}

if __name__ == "__main__":
    if len(sys.argv) < 3 or sys.argv[1] not in ADAPTERS:
        print(USAGE, file=sys.stderr)
        sys.exit(1)
    ADAPTERS[sys.argv[1]](sys.argv[2])
