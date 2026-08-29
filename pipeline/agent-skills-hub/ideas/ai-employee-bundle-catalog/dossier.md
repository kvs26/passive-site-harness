# Dossier: AI Employee Bundle Catalog

**A curated catalog of role-based agent-skill bundles ("AI marketing assistant", "AI QA engineer", "AI bookkeeper") — rejected at medium confidence: the "installable per-role bundle catalog" hook is already served by a live marketplace (aiskill.market), a curated installable-sets catalog (analoghq.ai), and multiple per-role bundle sites topping the SERP.**

## Signal scorecard

**Demand: strong** — the underlying "role-specific skills" need recurs across HN and shows huge autocomplete breadth; but note it's demand for the *category*, not for a new *catalog*.
  - Autocomplete fan-out returned a very wide "claude code skills for <role>" surface: "...for marketing", "for lawyers", "for legal", "for finance", "for managers", "for copywriting", "for content creation", "for excel", "for sales" (Google suggest, hl=en&gl=us, this run via `scripts/fanout.py`)
  - Recurring HN posts for one role alone: "Claude Skills for Marketing" (https://news.ycombinator.com/item?id=46729401, https://news.ycombinator.com/item?id=46901858), "AI Marketing Skills for Claude Code" (https://news.ycombinator.com/item?id=47154377), "Marketing Skills for Claude Code" (https://news.ycombinator.com/item?id=46720299)
  - Bing "People also ask" surfaced "What is a marketing skill bundle?" / "How many marketing skills does Claude have?" — the concept is a settled search intent (Bing SERP, this run)
  - Caveat: the "ai employee" brand phrasing is owned by SaaS agents/HR tooling, not downloadable bundles — autocomplete = "ai employee ghl pricing", "ai employee artisan", "ai employee monitoring software", "ai employee builder", not "download an AI employee bundle".

**SERP & competitor weakness: weak (competitors strong)** — the head query returns entrenched, purpose-built bundle sites and a marketplace, not thin/beatable pages.
  - aiskill.market — "Marketing Skills Bundle: Marketing for Claude Code" and "The Claude Skills Bundle: 2,350+ Skills for Claude Code in One Package" (a paid-bundle storefront — exactly the idea's "storefront for a paid bundle later" endgame) (Bing SERP, this run)
  - analoghq.ai — "Your AI setup, shareable and installable… browse the catalog of ingredients ranked by builders"; lists a "Marketing Skills" set ("45+ AI agent skills for marketing… Best for Technical marketers and founders using Claude Code, Cursor, Windsurf, or OpenAI Codex"), a leaderboard, verification + security-review badges (https://analoghq.ai/, fetched this run)
  - claudeskills360.com — "Marketing Skill Bundle - 42 AI Marketing Skills for Claude Code"; claudedirectory.org — "All Marketing Skills — Claude Code Skills Library"; marketing-skills.com — dedicated per-role site (Bing SERP, this run)

**Hook depth: weak (hook already served)** — the differentiator ("per job function, curated, install-in-one-sitting for a semi-technical operator") exists in the wild across several incumbents.
  - analoghq.ai publishes installable "Sets" (bundles) of skills+MCP+plugins with per-role "Best for" framing and one-click-style install (https://analoghq.ai/, fetched this run)
  - Per-role bundle repos ship one-sitting installers with per-harness adapters: `affaan-m/everything-claude-code` = "182 SKILL.md files… per-harness adapters for Claude Code, Codex CLI, Cursor, OpenCode, Gemini CLI"; `coreyhaines31/marketingskills` = "45+ AI agent skills for marketing… built for Claude Code, Cursor, and any Agent Skills-compatible agent" (https://news.ycombinator.com/item?id=48383439; https://analoghq.ai/coreyhaines31/skills/marketingskills)

**Monetization paths: weak** — routes exist (AdSense, affiliate, a paid bundle) but every one is already occupied by incumbents, so there is no unclaimed lane.
  - Direct paid-bundle sales already run at aiskill.market (bundle storefront) and via the trending packs themselves; AdSense/affiliate on a directory is generic and undifferentiated against analoghq.ai + claudedirectory.org (Bing SERP + analoghq.ai, this run)
  - No Keyword Planner CSV this run, so no CPC read; not pursued because monetization isn't the blocker (see Risks).

**Feasibility & maintenance: weak** — a static catalog is buildable, but the refresh burden is a fast treadmill against funded/active incumbents.
  - HN teardown: role packs churn hard and stars don't track survival — "Stars are not telling us which of these are surviving on actual reuse"; content "can be diffed and ported in an afternoon" (https://news.ycombinator.com/item?id=48383439, this run)
  - Incumbents already carry the maintenance moat we'd have to match: analoghq.ai does dated "Verified" and "Secure reviewed" listing checks (https://analoghq.ai/, fetched this run)

**Unique-data opportunity: unknown → leaning none** — searched for a derivable/combinable dataset a catalog could own; found none the incumbents lack.
  - The artifact is open-source markdown with YAML frontmatter — "a folder of markdown files with YAML frontmatter, that's a Notion template, not a moat" (https://news.ycombinator.com/item?id=48383439, this run). No proprietary compatibility/verification layer surfaced that analoghq.ai's badges + the compat-matrix sibling idea don't already target.

## SERP snapshot

Query "claude skills for marketing bundle install" (Bing, this run) — top organic results are all the product this idea proposes:
1. `github.com/coreyhaines31/marketingskills` — "Marketing skills for Claude" (39–45 free skills; ZIP-install instructions for chat users)
2. marketing-skills.com — "Marketing Skills for AI Agents… Built for technical marketers and founders"
3. claudedirectory.org — "All Marketing Skills — Claude Code Skills Library"
4. claudeskills360.com — "Marketing Skill Bundle - 42 AI Marketing Skills for Claude Code"
5. aiskill.market — "The Claude Skills Bundle: 2,350+ Skills… in One Package" and "Marketing Skills Bundle: Marketing for Claude Code" (marketplace/storefront)
6. `alirezarezvani/claude-skills` — "205+ production-ready skills across multiple AI agents and platforms"
7. Medium — "10 Best Claude Skill Repos for Marketing (2026)"; multiple YouTube install tutorials

Not beatable: the intent is served by dedicated per-role sites, a curated installable-sets catalog, and a paid marketplace — with editorial "best of" content and video tutorials already ranking. There is no thin-content gap for a new generic catalog.

## Keyword data

No `keyword-planner.csv` this run, and none requested. Rationale: the dig disproved scout gate 4 (specific hook) on SERP/hook evidence; search-volume buckets cannot un-serve an already-served hook, so a Planner export wouldn't change the verdict. If this niche is revisited, request volume for the "claude skills for <role>" family to size the sibling compat-matrix / non-dev-directory ideas rather than this one.

## Monetization sketch

Likeliest route would have been AdSense on category pages plus affiliate to any paid packs — but that lane is occupied by analoghq.ai (curated catalog, newsletter, leaderboard) and aiskill.market (paid bundle storefront). No differentiated placement remains.

## Risks & unknowns

- **Unique-data opportunity: unknown/none** — searched HN teardown, analoghq.ai listings, and SERP for a derivable dataset (verified compatibility, safety, freshness) a catalog could own; found only what incumbents already surface (analoghq badges) or what the sibling `agent-skills-compat-matrix` idea already targets.
- **Confidence cap** — no Keyword Planner CSV, so confidence is capped at medium by rule. This does not affect the rejection: gate-4 is disproved on independent SERP + incumbent evidence, which volume data cannot reverse.

## Sources log

- `scripts/fanout.py` — Google autocomplete fan-out (hl=en&gl=us), seeds: "ai employee", "ai agent skills bundle", "agent skills pack", "ai employee bundle", "claude skills bundle", "ai marketing assistant skills", "claude code skills for", "ai agent for bookkeeping", "role based ai agent", "download ai employee" — used (demand phrasing; "ai employee" = SaaS-owned, "claude code skills for <role>" = broad)
- `scripts/pain-fetch.py hn "agent skills bundle"` — used (bundle/pack tooling posts; NPM-agentskills, Yaw Mode "curated bundle")
- `scripts/pain-fetch.py hn "claude skills marketing"` — used (multiple role-pack Show HNs; "Five of the top 10 AI repos… are 'skills' packs for Claude Code")
- `scripts/pain-fetch.py hn "ai employee agent skills"` — used (mostly SaaS "AI employee" / vertical-agent posts; no bundle-catalog gap)
- `scripts/pain-fetch.py github "agent skills bundle role"` — used (many "ECC bundle" PRs — bundle format is commodity)
- https://news.ycombinator.com/item?id=48383439 — fetched (teardown: role packs 70K–205K stars; "Notion template, not a moat"; "diffed and ported in an afternoon")
- https://analoghq.ai/ — fetched (live curated installable-Sets catalog with per-role Marketing Skills set, leaderboard, verification/security badges — the near-incumbent from scout, confirmed active)
- https://news.ycombinator.com/item?id=48373037 ("way to find and install Claude skills") — HTTP 429, not fetched (dead end this run)
- Bing SERP "claude skills for marketing bundle install" (via Playwright) — fetched (SERP saturated: aiskill.market, marketing-skills.com, claudedirectory.org, claudeskills360.com, coreyhaines31/marketingskills, alirezarezvani/claude-skills, Medium best-of, YouTube installs)
- DDG (`scripts/pain-fetch.py ddg`) x3 — dead end (empty/bot-challenge response, as in scout run)
