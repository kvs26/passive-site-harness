# Scout checklist and hard gates

Type: grilling
Status: resolved
Blocked by: 01

## Question

Define the `idea-scout` run checklist: which source passes per niche, in what order, how niches are chosen when the user gives no theme, what "generous but bounded" means per pass, and the exact hard gates that kill a candidate in pass 1 (answer-it test, backend/account need, unmaintainable data, etc.). Output: the checklist and gate list that will go verbatim into the skill.

Constraints from the map:

- **US market by default** — US queries, Trends geo=US, US forums and datasets.
- **Reddit is first-class but optional** — include it via the access ladder (DDG `site:reddit.com` → browser access → manual checkpoint → OAuth later), and design the checklist so a Reddit-unavailable run still succeeds using US forums, app reviews, autocomplete, Trends, public datasets, and competitor research.

## Answer

Settled via grilling on 3 Aug 2026.

### Niche selection (no theme given)

At the top of every run, the agent proposes 3–5 candidate niches (with a one-line rationale each); the user picks one before any source pass runs. One niche per run.

### Source-pass checklist (order fixed, demand-first)

1. **Autocomplete fan-out** — Google suggest endpoint, US locale (`hl=en&gl=us`); alphabet-soup + question-prefix fan-out per seed, via the fan-out helper script.
2. **Pain mining** — draws from a pool of **interchangeable sources, none mandatory**: Reddit (ladder: DDG `site:reddit.com` → browser → OAuth adapter when credentials exist), Google Play / browser-extension store reviews, iTunes review RSS, HN Algolia, Discourse/niche forums, GitHub issues, and reviews of competitor sites/tools. The run log records which sources were used and which were unavailable; the pass succeeds with whatever subset is reachable.

### Full source catalog (agent selects per-niche subset)

The skill lists this catalog; each run picks **5–8 sources spanning ≥3 signal groups**, justifying each pick in the run log:

- **Q&A / complaints:** Reddit, Quora, Stack Exchange network, Facebook Groups, Nextdoor (US-local), YouTube comments on tutorial videos, Twitter/X search, Trustpilot / BBB / ConsumerAffairs.
- **Demand phrasing:** Google + Bing + YouTube + Amazon autocomplete, "People Also Ask" boxes in DDG/Google SERPs, question-pattern mining in SERPs.
- **Product gaps:** Product Hunt launches + comments, AlternativeTo "alternative to X" pages, G2/Capterra 1–2★ reviews, Etsy/Gumroad paid-tool signals, Chrome/Firefox extension stores, iTunes/Play reviews, GitHub issues, competitor-site reviews.
- **Trend / seasonality:** Google Trends related-rising, Exploding Topics free tier, seasonal calendars (tax season, school year, holidays).
- **Communities:** Discord server search, Indie Hackers, niche subreddit lists, Substack/newsletter comments, Discourse forums, HN Algolia.
3. **SERP + competitor scan** — DDG SERPs for candidate queries; competitor sitemap/robots inspection. Covers **every** surviving candidate.
4. **Trends + datasets** — Trends (geo=US, UI/CSV where needed) and public-dataset checks, **shortlisted candidates only**.

### Bounds ("generous but bounded")

Outcome-bounded, not quota-bounded: discovery passes (1–2) jointly target **~25–40 distinct raw problem statements** before moving on. A pass may stop early when two consecutive sources add nothing new. Passes 3–4 are coverage-bounded as above.

### Hard gates (fail any ⇒ candidate dies in run log with reason)

1. **Answer-it test** — a single LLM/Google answer solves it; no tool needed.
2. **Static feasibility** — needs accounts, DB, backend, server-side compute, or paid APIs.
3. **Unmaintainable data** — data needs refresh more than ~quarterly, or has no free public source.
4. **No specific hook** — can't state in one sentence why it beats the incumbent SERP results.
5. **Legal/policy risk** — medical/financial-advice territory, scraping-hostile data, trademark bait.
6. **US-market mismatch** — demand signal clearly non-US with no US analogue.

### Run end state

3–5 candidate files, weak ones kept and marked. Each carries: one-line idea, the hook, gate results, and raw evidence (real quotes/links only).

### Helper scripts and source adapters

Two deterministic fetch scripts committed up front, created by the first scout-writing session if missing:

- (a) autocomplete fan-out fetcher with caching/dedup;
- (b) pain-source fetcher with **pluggable adapters** — no single source primary or mandatory. Credential-free adapters (HN Algolia, iTunes RSS, Discourse `.json`, unauthenticated GitHub) work out of the box; optional credentialed adapters (Reddit OAuth API, GitHub PAT, Google Keyword Planner CSV import, other free-tier services) activate when the user manually creates the account and supplies credentials.

**Credentials live in `.env`** (gitignored) — never inside skills or committed files. The scout detects which adapters have credentials and degrades gracefully: fewer sources, same run, gaps noted in the run log.
