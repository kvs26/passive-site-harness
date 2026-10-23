# Map: Social Studio v1 (social-studio-v1) — a `/social-studio` skill that designs superb Pinterest + Instagram content per site, proven on whichexpansion.com

Label: wayfinder:map
Status: open

## Destination

A shipped **`/social-studio` skill** that, for any site in `sites/<slug>/`, produces research-driven, strikingly designed Pinterest + Instagram content (agent designs and writes; owner approves and posts) — **with Pinterest removed from `/spread-site`** and its old files deleted from both sites — **proven by one real 2-week batch for [whichexpansion.com](../../sites/board-game-expansion-buyers-guide/) (14 pins + 6 Instagram posts) that the owner approves as post-worthy.**

This effort's Notes **override wayfinder's plan-only default** — building the renderer, the style kit, the skill, and the first batch are in-scope deliverables.

## Notes

- **Why:** `/spread-site`'s Pinterest output (Python/Pillow flat cards, e.g. `make_pins*.py`) looks dated and ugly. Pillow is the ceiling, not Copilot. Owner wants to experiment with social media for organic growth, with modern, bold design.
- Skills to consult per session: `/grilling`, `/domain-modeling`, `/research`, `/prototype`, `/frontend-design` (design-quality rules), `/writing-great-skills` (when writing the skill), `/spread-site` (hard rules to carry over).
- Research findings live in `research/NN-<slug>.md` inside this effort, with a pointer from the resolving ticket.
- Sites are independent git repos under `sites/` (ignored by this repo) — deletions there are recoverable via git.
- Owner is on a Verisk corporate network ("Browser Isolation" can block new domains — see user memory `tool-gotchas.md`). Chromium + ffmpeg (Playwright cache), node/npx, Python+Pillow are installed; Google Fonts + npm reachable (checked 2026-10-23).

### Settled during charting (2026-10-23 grilling)

- **Destination = B:** ship + prove on whichexpansion.com; not gated on traffic numbers.
- **Production = hybrid.** HTML/CSS (+ optional Three.js/WebGL 3D) is the backbone, rendered to PNG by headless Chromium at exact sizes — exact, on-brand text every time. Designs may have an optional **image slot**: the skill writes a detailed prompt, owner runs it in an external AI tool and drops the file in; if skipped, falls back to stock/screenshot. Nothing breaks without it.
- **Posting:** owner posts manually for now; skill also emits a day-by-day schedule usable later in Pinterest's / Meta Business Suite's **native** schedulers. No bots, no third-party posting APIs.
- **Content is broad and research-driven**, not limited to what the site contains (e.g. board games: strategy, history, trivia, "games like X"). Skill is **generic per site**, not board-game-specific.
- **Two post kinds:** **traffic posts** (~35%, match a real site page, link to it, measured by clicks) and **reach posts** (~65%, broad niche content for saves/follows; link to the closest honest page or no link; Instagram → link in bio). Pinterest penalises pin/landing mismatch. The skill reads the site's current pages each batch, so future paid-guide pages automatically become link targets for strategy posts.
- **Design inspiration:** web search + Playwright screenshots the agent can view (top niche pins, Pinterest Trends/Predicts, top niche IG accounts, Dribbble/Behance/Canva galleries) + `/frontend-design`. ~~Owner logs in to the agent's browser~~ — **amended by ticket 01:** Pinterest + Instagram ToS forbid automated access *even logged in*, so the owner does **not** log into the agent browser; login-walled views come via owner screenshots. **Fresh trend check every time** (owner, 2026-10-23): the skill looks at current trends *right before* proposing designs — both at style-kit setup and at the start of every batch (themes + design remix), never reusing stale research.
- **Style kit per site:** first run researches the niche and renders **5–6 distinct directions** (variety requested); owner picks one → `social/style-kit/` (palette, fonts, 4–6 signature layouts, AI-prompt style). Each kit defines a bold **hero** treatment (covers, pin hero; may be 3D) and a clean **info** treatment (tips/steps/inner slides; 2D) — one theme, two intensities. 3D is one possible direction, not a default.
- **v1 formats:** Pinterest static pins (2:3, 1000×1500), Instagram carousels + single posts (3:4, 1080×1440 per ticket 02). Stories/Reels/video pins → fog.
- **Accounts:** one faceless brand account per site per platform (Business/Creator); owner is creating a **new** Pinterest account and a new Instagram. Skill emits a one-time `accounts.md` setup checklist.
- **Layout:** `sites/<slug>/social/{accounts.md, style-kit/{directions/}, batches/<date>-NN/{plan.md, pinterest/, instagram/, preview.html, post-this.md, results.md}}`. One **shared renderer** lives in the skill folder; no per-site one-off scripts.
- **Content & image rules:** (1) no publisher art (box covers/card art) as hero — names in text fine; (2) AI prompts are "inspired by", never copies of protected art/characters; (3) owner's own photos welcome (image slot); (4) stock only from commercial-OK licences, source recorded in `plan.md`; (5) every reach-post fact has a real source link in `plan.md` — no invented facts; (6) prefer **stylised** AI imagery over photorealistic; flag a post for an AI label **only where a platform's rules require it**, and follow it there.
- **Batch = 2 weeks:** 14 pins (1/day) + 6 IG posts (3/week, ~4 carousels + 2 singles). Batch built around **3–4 shared themes**; each theme → an IG carousel + several pins (pins often re-cut from carousel slides, own hook).
- **Learning loop:** Pinterest links UTM-tagged `utm_source=pinterest&utm_medium=social&utm_campaign=social-studio&utm_content=<post-slug>`; IG bio link `utm_source=instagram`. Before each new batch the skill **reminds the owner once** for the previous batch's numbers (owner shares screenshots — not a logged-in agent browser, per ticket 01), writes `results.md`, and steers the next batch. Owner may say "skip".
- **spread-site trim:** remove Pinterest step + mentions, add a pointer to `/social-studio`, update DISTRIBUTION.md / USAGE.md / distribution-playbook; **delete** old Pinterest files in both sites (owner is starting a fresh Pinterest account; already-posted old pins are just left up).

## Decisions so far

<!-- the index — one line per closed ticket: gist the answer, link the ticket for detail -->

- [Can the agent browse Pinterest and Instagram for design/niche research?](issues/01-browse-pinterest-instagram-access.md) — logged out on the Verisk network, Playwright reads Pinterest boards/pins/profiles, Trends home, Predicts 2026, IG hashtag pages, Dribbble/Behance/Canva; Pinterest search is images-only behind a modal, Trends keyword search is login-walled. Both platforms' ToS forbid automated access even logged in → **no owner login in the agent browser**; light logged-out browsing + owner screenshots for walled data. ([research](research/01-browse-pinterest-instagram-access.md))
- [Current Pinterest + Instagram rules and best practice (2026)](issues/02-platform-rules-best-practice.md) — Pinterest 1000×1500 (taller gets cropped), title ≤100 chars, claim the website, "no surprises" landing pages, new anti-mass-produced/repetitive-pin policy from 12 Nov 2026; IG max ratio 3:4 (1080×1440), carousels ≤20 same-orientation slides, **≤5 hashtags**, originality rule (each slide must add own value); AI labels: Pinterest auto-labels (no self-disclosure for organic), Meta requires disclosure only for realistic video/audio; native schedulers: Pinterest 30 days/10 queued (bulk CSV 200), IG 30 days incl. carousels. ([research](research/02-platform-rules-best-practice.md))
- [Rendering stack: HTML/CSS (+ Three.js 3D) → PNG in headless Chromium](issues/03-rendering-stack.md) — smoke test passed: Playwright's bundled headless Chromium + local `three`, WebGL2 via SwiftShader (`--enable-unsafe-swiftshader`), exact-size viewport at DSF 1, `window.__ready` wait; ~1 s/render, ~0.6 s/extra slide. Satori/Puppeteer rejected. Deps in `.agents/skills/social-studio/package.json`; fonts via local `@fontsource` (CDN also works). ([research](research/03-rendering-stack.md))
- [External AI image tools for the optional image slot](issues/04-external-ai-image-tools.md) — primary **Gemini app (Nano Banana 2)**, secondary **ChatGPT (GPT Image)**: free personal tiers, commercial use OK, reference-image consistency; Copilot/Bing Image Creator excluded (personal-use-only terms). APIs are paid and Canva's MCP builds Canva designs not raw images → **v1 stays manual** (paste prompt, drop file). 5-part prompt template (subject / composition with reserved empty zone / style lock / "clean unmarked surfaces" / consistency line), never naming real games or art. ([research](research/04-external-ai-image-tools.md))

## Not yet specified

- **Motion formats** — Instagram Stories, Reels, Pinterest video pins. Likely the same HTML designs animated and recorded (Playwright video + ffmpeg). Revisit once the static pipeline and style kit are proven.
- **Matching site pages for winning reach topics** — when a reach theme takes off (e.g. Catan strategy), add a short landing page on the site so pins have a true destination. Overlaps `/build-site`; depends on results data.
- **Results → paid-guide prioritisation** — use reach-post saves per game to pick which games get the paid guide first (the guides themselves are out of scope).
- **Native scheduler adoption** — when owner moves from manual posting to Pinterest/Meta built-in schedulers; how the schedule in `post-this.md` maps onto them.

## Open tickets (the remaining route)

<!-- convenience index for this local-markdown tracker; frontier = open + unblocked + unclaimed, first by number -->

- **Frontier (takeable now):** 05 (spread-site trim), 06 (shared renderer). *(01–04 resolved by research subagents at charting.)*
- **Blocked:** 07 ← 06 · 08 ← 07 · 09 ← 08.

## Out of scope

- **Paywall / paid comprehensive game guides** on whichexpansion.com — a site feature with its own decisions (payment, format, pricing); separate effort. This skill only links to guide pages once they exist.
- **Paid promotion / ads** — free/organic only.
- **API- or bot-driven posting**, third-party posting tools (Buffer etc.) — owner posts, optionally via native schedulers.
- **Other platforms** (TikTok, X, Facebook, YouTube Shorts).
- **Rolling out to runsonyourbattery.com** (or other sites) — the skill is generic, but running it beyond whichexpansion.com is past this destination.
