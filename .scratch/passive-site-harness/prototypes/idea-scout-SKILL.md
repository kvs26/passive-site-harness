---
name: idea-scout
description: Run one bounded idea-discovery pass for a single niche. Use when the user wants to discover passive-site candidates — proposes niches, mines demand and pain signals from free sources, applies hard gates, and writes 3–5 candidate ideas to the pipeline with real evidence only.
---

<!-- PROTOTYPE DRAFT — asset for wayfinder ticket 05. React, don't ship. -->

# Idea Scout

One run = one niche = one session. The run ends with 3–5 candidate ideas on disk in `pipeline/`, each backed by **real quotes and links only**, plus a run log recording every source consulted and every candidate killed.

**Target market is US by default** (queries, locales, Trends geo, forums, datasets) unless `pipeline/<niche>/niche.md` records an override.

## Hard rules

- **Never invent numbers.** No search volume, CPC, difficulty, traffic, or revenue figures from your own head — ever. If a number can't be read from a real source you fetched this run, write `unknown`. `unknown` is a first-class value, not a failure.
- **Real evidence only.** Every quote must come from a page actually fetched this run, with its URL. No paraphrased "people are saying" without a link.
- **No paid SEO tools or APIs.** Free/credential-free sources by default; optional credentialed adapters only when the user has supplied credentials in `.env`.
- Weak candidates are **kept**, marked weak — the gate list decides death, not vibes.

## Run inputs

1. **Niche** — if the user names one, use it. Otherwise propose **3–5 candidate niches** (one-line rationale each) and wait for the user to pick. One niche per run, no exceptions.
2. **Seeds** — 3–8 seed terms for the niche, agreed with the user or derived from `niche.md` if resuming a niche.
3. **Credentials** — read `.env` (never commit it) to detect which optional adapters are live (Reddit OAuth, GitHub PAT, …). Absence is fine: fewer sources, same run, gaps noted in the run log.

Before starting, open `pipeline/board.md` (if it exists) to avoid re-proposing ideas already on the board.

## Source passes (fixed order, demand-first)

### Pass 1 — Autocomplete fan-out

Google suggest endpoint, US locale (`hl=en&gl=us`); alphabet-soup + question-prefix fan-out per seed via `scripts/fanout.*` (see Helper scripts). Collect raw phrasings of demand.

### Pass 2 — Pain mining

Draw from the catalog below. Pick **5–8 sources spanning ≥3 signal groups**, justify each pick in the run log. **No source is mandatory** — the pass succeeds with whatever subset is reachable. Reddit uses the access ladder: DDG `site:reddit.com` search → normal browser access → manual research checkpoint → OAuth adapter when credentials exist.

**Source catalog:**

- **Q&A / complaints:** Reddit, Quora, Stack Exchange, Facebook Groups, Nextdoor, YouTube tutorial comments, Twitter/X search, Trustpilot / BBB / ConsumerAffairs.
- **Demand phrasing:** Google/Bing/YouTube/Amazon autocomplete, "People Also Ask", SERP question-pattern mining.
- **Product gaps:** Product Hunt, AlternativeTo, G2/Capterra 1–2★ reviews, Etsy/Gumroad paid-tool signals, Chrome/Firefox extension stores, iTunes/Play reviews, GitHub issues, competitor-site reviews.
- **Trend / seasonality:** Google Trends related-rising, Exploding Topics free tier, seasonal calendars.
- **Communities:** Discord server search, Indie Hackers, niche subreddit lists, Substack comments, Discourse forums, HN Algolia.

**Bound for passes 1–2 (jointly):** outcome-bounded at **~25–40 distinct raw problem statements**. A pass may stop early when two consecutive sources add nothing new.

### Pass 3 — SERP + competitor scan

DDG SERPs for candidate queries; competitor sitemap/robots inspection. Covers **every** candidate still alive after gating.

### Pass 4 — Trends + datasets

Google Trends (geo=US; UI/CSV export where the endpoint won't serve JSON) and public-dataset checks. **Shortlisted candidates only.**

## Hard gates

Apply to every raw candidate. **Fail any one ⇒ the candidate dies in the run log with the gate name and a one-line reason.** Dead candidates never become idea files.

1. **Answer-it test** — a single LLM/Google answer solves it; no tool needed.
2. **Static feasibility** — needs accounts, DB, backend, server-side compute, or paid APIs.
3. **Unmaintainable data** — data needs refresh more than ~quarterly, or has no free public source.
4. **No specific hook** — can't state in one sentence why it beats the incumbent SERP results.
5. **Legal/policy risk** — medical/financial-advice territory, scraping-hostile data, trademark bait.
6. **US-market mismatch** — demand signal clearly non-US with no US analogue.

## Outputs

All writes go under `pipeline/<niche-slug>/` per the pipeline layout.

### Run log — `pipeline/<niche>/runs/<YYYY-MM-DD>-scout.md`

Records: niche + seeds; sources picked with justification (and any unavailable); raw problem statements gathered; **every gate kill** (candidate, gate, reason); candidates emitted.

### Candidates — `pipeline/<niche>/ideas/<idea-slug>/idea.md` (3–5 per run, weak ones kept and marked)

```markdown
# <Idea name>

Status: candidate
Origin: ../../runs/<YYYY-MM-DD>-scout.md

## Idea

<one-line idea>

## Hook

<the one sentence that beats the incumbent SERP results>

## Gate results

<pass/fail note per gate — all six passed to exist here; note near-misses>

## Evidence

<real quotes + links, per source. `unknown` where a signal wasn't found — never a made-up figure>

## History

- <YYYY-MM-DD> — candidate (emitted by scout run)
```

### Board — `pipeline/board.md`

Regenerate the board (derived view; `Status:` lines in `idea.md` files are canonical) before ending the session. Create `niche.md` if this is the niche's first run.

## Helper scripts

Two deterministic fetch scripts; **create them on first run if missing**, commit them:

- `scripts/fanout.*` — autocomplete fan-out fetcher with caching/dedup.
- `scripts/pain-fetch.*` — pain-source fetcher with **pluggable adapters**. Credential-free adapters (HN Algolia, iTunes review RSS, Discourse `.json`, unauthenticated GitHub) work out of the box; credentialed adapters (Reddit OAuth, GitHub PAT, Keyword Planner CSV import) activate only when `.env` provides credentials. Detect and degrade gracefully.

Credentials live in `.env` (gitignored) — never inside skills, scripts, or committed files.

## End of run

Stop after emitting candidates and regenerating the board. **Do not validate** — that's `idea-validate`'s job. Do not pick a winner — picking is a human checkpoint.
