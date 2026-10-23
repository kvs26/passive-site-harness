# Can the agent browse Pinterest and Instagram for design/niche research?

Date: 2026-10-23
Ticket: `.scratch/social-studio-v1/issues/01-browse-pinterest-instagram-access.md`

## How this was tested

- **When and where:** 2026-10-23, logged out, on the owner's Verisk network.
- **Geo-IP:** looks like India. Business pages redirected to `/en-in/` for curl and `/en-gb/` for Playwright, and Canva served `en_in` links.
- **Browser Isolation:** no Verisk "Browser Isolation" interstitial appeared on any target. Every block seen came from the site's own WAF or from the reader service.
- **Routes tried:**
  - **Playwright MCP:** headed Google Chrome 156. The agent used its own tab (`page.context().newPage()`), a 1280×900 viewport, JPEG screenshots (quality 40–50) saved to `/tmp/ss01-pw-*.jpg`, and viewed them one at a time.
  - **fetch_webpage.**
  - **curl:** `-m 15`, full Chrome UA, output to `/tmp/ss01-curl-*`.
  - **r.jina.ai reader:** `curl https://r.jina.ai/<url>`.
- **Sample queries:** "board game" niche, plus Pinterest profile `funattic` and Instagram account `@jameystegmaier`.

Legend:
- **Works:** the useful content is readable.
- **Partial:** some content, but key fields are missing or hidden behind an overlay.
- **Login-wall:** redirected to login, or only the login prompt comes back.
- **Blocked:** a WAF or bot challenge.
- **Untested:** not tried.

## What works, how

| Source (URL tested) | Playwright (logged out) | fetch_webpage | curl | r.jina.ai |
|---|---|---|---|---|
| Pinterest search — `https://www.pinterest.com/search/pins/?q=board%20game%20strategy` | **Partial.** HTTP 200, but a full-page signup modal (`fullPageSignupModal`) covers the grid. The grid renders behind it with relevant pins (Quoridor, Catan, Risk…). Feed is `gated-search-pins-feed`: every img alt is "Pin", with no `/pin/` links, titles or save counts. Scrolling loads nothing more. Filter pills are visible. | **Partial.** About 14 `i.pinimg.com/474x` image URLs plus "Log in to see more". | **No content.** 200, 169 KB JS shell, 1 pinimg URL. | **Partial.** 200, about 14 `236x` image URLs, no titles. |
| Pinterest profile — `https://www.pinterest.com/funattic/` | **Works.** Board names, pin counts and board links, plus a dismissable signup prompt. | Untested | Untested | Untested |
| Pinterest board — `https://www.pinterest.com/funattic/posters-for-my-wall/` | **Works.** Title "46 Posters for my wall ideas", "46 Pins · 9y", and the image grid. Individual pins are still gated (alt "Pin", no links). | Untested | **Works for image URLs.** 200, 211 KB, 195 pinimg URLs, `og:description`. | **Works for image URLs.** 200, title plus pin image URLs. |
| Pinterest pin — `https://www.pinterest.com/pin/309692911902891416/` | **Works.** Save count (31), "Board containing this Pin" (17.4k Pins), related interests, 3 comments. | Untested | Untested | Untested |
| Pinterest Ideas — `https://www.pinterest.com/ideas/` | **Works.** Categories and editorial boards. A slug without an ID (`/ideas/board-games/`) shows "We can't find that idea". | Untested | Untested | Untested |
| Pinterest Trends home — `https://trends.pinterest.com/` | **Works.** Region selector, "Trends in the spotlight" (e.g. Plaid Sweater Styles 10,001% MoM), Moments. | **Works — richest.** Spotlight, Moments, Shopping trends, Search-trends table, Editors' picks, Predicts 2026 links. Page states the data is "based on searches, Pin saves, outbound clicks … users in the United States" and "Log in to fully explore what's trending". | **No content.** 200, 13.8 KB JS shell. | **Works.** 200, 6.4 KB. Spotlight list with MoM % and categories. |
| Pinterest Trends keyword search — `https://trends.pinterest.com/search/?q=board%20games&country=US` | **Login-wall.** Redirects to `/?showUnauthModal=true&nextUrl=/search/`. | Untested | Untested | Untested |
| Pinterest Predicts — `https://business.pinterest.com/pinterest-predicts/` | **Works.** Redirects to `/en-gb/`. "Pinterest Predicts™: Top Trends for 2026", 21 trends with search lifts (e.g. "jelly blush +130%"). 2026 is the latest edition; Trends says it is "released in December every year". | Untested | **Works.** 200, 250 KB, redirects to `/en-in/`, same content. | **Works.** 200, 52 KB markdown, 105 images. |
| Instagram profile — `https://www.instagram.com/jameystegmaier/` | **Partial.** Header (58.9k followers, bio) and the first ~12 grid thumbnails show behind a dismissable "See photos, videos and more" modal. Scrolling loads no more posts. | **Login-wall.** Modal text only. | **No content.** 200, 133 KB, title "Instagram". | **Blocked.** 403 `AbuseAlleviationError`: Jina blocked anonymous access to all of instagram.com "until … 07:49 UTC" because of *other* users' traffic. Retry later; unreliable. |
| Instagram hashtag — `https://www.instagram.com/explore/tags/boardgames/` | **Works.** Redirects to `/popular/boardgames/`, titled "Boardgames • 41M reels". Reel grid with handles, view counts (23.9M, 19.8M…), captions and related-topic pills. No blocking modal. | **Works.** Topic pills, reel URLs, view counts, full captions. | **No content.** 200, 134 KB, title "Instagram". | **Blocked.** Same Jina 403. |
| Dribbble — `https://dribbble.com/search/board-game` | **Works.** HTTP 202 but renders. Shot titles, 14 images, then 32 after scrolling. | **Blocked.** AWS WAF "verify that you're not a robot". | **Blocked.** 202, 2 KB WAF challenge. | **Works.** 200, 46 KB. Shot titles, tag lists and shot URLs, 78 images. |
| Behance — `https://www.behance.net/search/projects/board%20game` | **Works.** HTTP 403 but the JS challenge passes. "10,000+ Results", project titles with appreciation and view counts, 24 images. | **Blocked.** 403. | **Blocked.** 403 `js_challenge`. | **Works.** 200, 31 KB. Titles, appreciation and view counts (e.g. "Eloquentia \| The Board Game" 1.2K / 14.6K). |
| Canva templates — `https://www.canva.com/templates/?query=pinterest%20pin%20board%20game` | **Works with a long wait.** Blank with `domcontentloaded` + 8 s. Works with `waitUntil:'load'` + 12 s + scroll: 25 images and titles. Results are mostly generic "mood board" pins; few are board-game specific. | **Works.** 50 of "20,000+" template titles with URLs. | **Partial.** 200, 25 KB, title plus 203 template image URLs. | **Works.** 200, 38 KB, titles, URLs and images. |
| Bing / DDG image results | Untested | Untested | Untested | Untested |

### What is never available logged out

- **Pinterest search:** pin titles, outbound links and save counts.
- **Pinterest Trends:** keyword-level curves.
- **Instagram profiles:** more than about 12 posts.

## Logged-in sessions: does a login persist?

**Within one MCP server session: yes (tested).**
- A cookie set with `context.addCookies` in one tool call was read back in a separate later call. The test cookie was then removed.
- Pinterest and Instagram cookies set by earlier calls (`_pinterest_sess`, `csrftoken`, `ig_did`, …) were still present.
- Pinterest `_auth=0` confirms the session was logged out.

**On disk:**
- `chrome://version` shows `--user-data-dir=~/Library/Caches/ms-playwright-mcp/mcp-chrome-7f3cb99`.
- `.vscode/mcp.json` launches `@playwright/mcp@latest` without `--isolated`.
- The Playwright MCP README ([github.com/microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp#user-profile)) says the persistent profile is the default, that "All the logged in information will be stored in the persistent profile", and that `--isolated` keeps it in memory only.
- So an owner login would most likely also survive VS Code / MCP restarts. **Untested:** no real login was attempted, and no restart was performed.

**Caveats:**
- That one profile is shared by every agent session in this workspace. An owner login would be visible to all parallel agents.
- The README notes that a persistent profile "can only be used by one browser instance at a time".
- **Logged-in rendering: untested.** For example, whether pin titles and Trends search unlock.

## ToS note: an agent *reading* (not posting)

**Pinterest**
- [Terms of Service §2(a)](https://policy.pinterest.com/en/terms-of-service#section-2-using-pinterest) (effective 30 Apr 2025): "you agree not to scrape, collect, search, copy or otherwise access data or content from Pinterest in unauthorized ways, such as by using automated means (without our express prior permission)".
  - The same sentence is in the [preview ToS effective 12 Nov 2026](https://policy.pinterest.com/terms-of-service-preview).
  - §2(c): commercial use requires a business account under the [Business Terms](https://business.pinterest.com/business-terms-of-service).
- [Community Guidelines](https://policy.pinterest.com/en/community-guidelines) (last updated May 2026):
  - Site security and access: "Don't use any undocumented or unsupported method to access, search, scrape, download or change any part of Pinterest" and "Don't share your password, let anyone access your account…".
  - Spam: "Don't use automation that hasn't been explicitly approved by Pinterest. This includes unauthorized services that automatically perform actions on your behalf."

**Instagram / Meta**
- [Instagram Terms of Use §4.2](https://help.instagram.com/581066165581870): "You can't attempt to … access or collect information in unauthorised ways. This includes … accessing or collecting information in an automated way without our express permission, regardless of whether such automated access or collection is undertaken while logged in to an Instagram account."
  - Also: you can't "circumvent, bypass or override any technological measures that control or limit access".
- Instagram restricts accounts for this: see [Why your account has been restricted for data scraping](https://help.instagram.com/740480200552298).
- [Meta Automated Data Collection Terms](https://www.facebook.com/legal/automated_data_collection_terms) (effective 7 Oct 2024):
  - §2: no "Automated Data Collection without first obtaining Meta's express written permission".
  - §8(b) defines it as collection "via the use of automated or programmatic tools … web scrapers, bots, robots, spiders, crawlers, user-agents…".

**Reading of the above (not legal advice)**
- An LLM-driven browser plausibly counts as "automated means" on both platforms, logged in or out. Instagram says so explicitly for logged-in use.
- Logged out, the practical exposure is IP or rate blocking.
- Logged in, the exposure moves to the **owner's account**: restriction or suspension. Pinterest also forbids letting anyone else access your account.
- Removing a signup modal through the DOM to see the grid behind it is arguably an "undocumented method" (Pinterest) or "circumventing a technological measure" (Instagram). The procedure below therefore does **not** remove modals.
- Not reviewed: the Dribbble, Behance, Canva and Jina terms.

## Recommended research procedure

1. **Primary route: Playwright, logged out, low volume.**
   - Open your own tab with `page.context().newPage()`, set the viewport to 1280×900, and navigate with `waitUntil:'load'` plus 8–12 s (Canva needs 12 s and a scroll).
   - Take a JPEG screenshot (quality 40–50, `scale:'css'`) to `/tmp`, view it, and close the tab.
   - Keep to a handful of pages per site per session, with gaps between them. Do not strip modals.
   - Use it for:
     - Pinterest board, profile and pin pages, Trends home and Predicts.
     - The Instagram hashtag page (`/explore/tags/<tag>/` → `/popular/<tag>/`) and the Instagram profile header.
     - Dribbble, Behance and Canva.
2. **Text fallback: fetch_webpage.**
   - Pinterest Trends home (richest), Instagram hashtag pages (captions and view counts), Canva template titles.
   - Not useful for Dribbble or Behance, which are WAF-blocked.
3. **Text fallback: r.jina.ai.**
   - Dribbble and Behance (titles plus appreciations, views and tags), Pinterest Predicts, Trends home.
   - Pinterest board and search image URLs.
   - Instagram is unreliable here because of Jina's own temporary 403.
4. **Owner shares screenshots** (the ToS-clean route, and the only one for login-walled data).
   - Use it for Pinterest Trends keyword search, Pinterest search with pin titles and saves, and full Instagram profiles.
   - The owner browses in their own browser and drops screenshots into a folder; the agent reads them with its image viewer.
5. **Owner logs into the agent browser: possible but not recommended.**
   - The profile persists on disk and is shared across agent sessions.
   - Both platforms bar automated access while logged in.
   - If the owner still chooses this, they type the credentials themselves, keep it read-only and low-volume, then log out or delete `~/Library/Caches/ms-playwright-mcp/mcp-chrome-7f3cb99`. Real logged-in behaviour is untested.
6. **Untested:**
   - Bing/DDG image results as a pin proxy.
   - Logged-in rendering.
   - Persistence across restarts.
   - fetch_webpage on Pinterest profile, board, pin and Predicts pages.
   - curl and jina on Pinterest profile, pin and Trends-search pages.
