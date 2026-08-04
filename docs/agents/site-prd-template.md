# Site-PRD template

> **How to use.** When a picked idea needs its PRD, invoke `/to-spec` and attach three files: the idea's `idea.md`, its `dossier.md`, and this template. `/to-spec` produces its normal spec sections (Problem Statement, Solution, User Stories, Implementation Decisions, Testing Decisions, Out of Scope) **and appends the site-specific sections below**, filled from the idea and dossier. The output is written to `pipeline/<niche>/ideas/<idea-slug>/prd.md`. Never invent search volume, CPC, difficulty, traffic, or revenue figures — "unknown" is a first-class value.

The site-specific sections every website PRD must contain, in addition to `/to-spec`'s generic ones:

## Core job

The one thing this tool does for a visitor — a "do it" action, not an "answer it" page. One or two sentences; if it can't be said that tightly, the idea isn't ready for a PRD.

## Data source & update plan

Where the site's data comes from (link the exact sources from the dossier), its licence/terms status, how it's fetched or transcribed, and how often it must be refreshed to stay trustworthy.

## Page map

Every page the site ships with:

- The tool page(s) — the core interactive experience.
- Crawlable supporting pages — methodology, data/reference pages, comparisons, FAQs. Each supporting page must earn its place by targeting a real query or building trust.

## SEO targets

The real queries evidenced in the dossier, mapped to the page that targets each. No invented volumes or difficulty scores — only queries with observed evidence (autocomplete, SERPs, forum phrasing), with a link back to that evidence.

## Monetization placement

Default is **Google AdSense**; use affiliate links or other options when the dossier shows they'd pay better for this niche. Record which option(s) this site uses and where placements go on each page type — without harming the tool's usability or Core Web Vitals. (Actual AdSense signup/approval is a human checkpoint, out of the agent's hands.)

## Maintenance plan

What keeps the site healthy after launch and how often: data refreshes, link-rot checks, dependency-free rot risks. Target is near-zero recurring effort; anything above "a small check every few months" must be flagged as a risk.

## Standing constraints

Fixed for every site — restate in each PRD so build sessions see them:

- Static HTML/CSS/JS only — no accounts, no database, no backend.
- Mobile-first, fast (good Core Web Vitals), crawlable and indexable.
- Cheap to host (static hosting).
- US market by default unless the niche's `niche.md` overrides it.
