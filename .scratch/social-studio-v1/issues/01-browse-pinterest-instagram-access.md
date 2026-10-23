# Can the agent browse Pinterest and Instagram for design/niche research?

Type: research
Status: resolved
Blocked by: —

## Question

The style-kit and batch-planning steps depend on the agent *looking at* what currently works in a niche (top pins, Pinterest Trends, top niche Instagram accounts) via Playwright screenshots it can view. Which of these are reachable, and how?

- **Logged out, on the owner's Verisk network:** Pinterest search (`pinterest.com/search/pins/?q=...`), board pages, pin pages; Pinterest Trends (`trends.pinterest.com`); the latest "Pinterest Predicts" report; Instagram profile pages, hashtag/explore pages. What renders vs. login wall vs. "Browser Isolation" block?
- **Logged in** (owner signs in to the agent's Playwright browser themselves): does the session persist across tool calls; anything ToS-sensitive about an agent *reading* (not posting) while logged in?
- Fallbacks that work: owner screenshots, `r.jina.ai` reader, Bing/DDG image results, design galleries (Dribbble, Behance, Canva templates).

Output: a short "what works, how" table the skill can encode as its research procedure.

## Answer

Tested logged out on 2026-10-23. No Verisk Browser Isolation blocks were seen.

- **Works in Playwright:** Pinterest boards, profiles and pins, Trends home, Predicts (2026), the Instagram hashtag page (redirects to `/popular/<tag>/`, with a reel grid, view counts and captions), Dribbble, Behance, and Canva (needs `load` + 12 s).
- **Partial:** Pinterest search shows images only behind a signup modal, with no titles or saves. Instagram profiles show the header plus about 12 posts.
- **Login-wall:** Pinterest Trends keyword search.
- **Text fallbacks:**
  - fetch_webpage works for Trends home, Instagram hashtag pages and Canva.
  - r.jina.ai works for Dribbble, Behance, Predicts, Trends and Pinterest image URLs.
  - Raw curl only works for Predicts, Canva and board image URLs; Dribbble and Behance block both curl and fetch_webpage.
- **Logins:** cookies persist across tool calls (tested). The MCP profile is on disk and shared by all agent sessions, so a login would likely survive restarts (untested).
- **ToS:** Pinterest §2(a) and Instagram §4.2 / Meta ADC terms bar automated access. Instagram says this applies even while logged in, so an owner login puts the owner's account at risk.
- **Procedure:** Playwright logged out, low volume, no modal stripping → fetch_webpage/jina text → owner screenshots for login-walled data. An owner login in the agent browser is not recommended.

Full table, citations and procedure: [research/01-browse-pinterest-instagram-access.md](../research/01-browse-pinterest-instagram-access.md)
