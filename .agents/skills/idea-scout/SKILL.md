---
name: idea-scout
description: Run one bounded idea-discovery pass for a single niche. Use when the user wants to discover passive-site candidates — proposes niches, mines demand and pain signals from free sources, generates ideas from buying moments/datasets/tool shapes, applies hard gates including a scout-time incumbent probe and AIO check, and writes 3–5 candidate ideas to the pipeline with real evidence only.
---

# Idea Scout

One run = one niche = one session. The run ends with 3–5 candidate ideas on disk in `pipeline/`, each backed by **real quotes and links only**, plus a run log recording every source consulted and every candidate killed.

**Target market is US by default** (queries, locales, Trends geo, forums, datasets) unless `pipeline/<niche>/niche.md` records an override.

## The edge every candidate must have

Every emitted candidate must be a **compound interactive dataset tool** — all four parts stated in `idea.md`, none optional:

1. **Curated, hand-verified dataset** — rows of stable public data an AI site farm won't hand-verify. High-touch maintenance *within the upkeep cap* is the moat, not a defect.
2. **Per-query computation on user-specific inputs** — the goal requires an action a search-result summary can't perform: compute, generate a file, filter on the user's own numbers.
3. **Long-tail page surface** — per-item/per-brand/per-model pages generated from the dataset; the ranking surface that beats a single-page incumbent and degrades gracefully against a fresh one.
4. **Monetization fit** — affiliate-linkable outputs via a named program, or a high-RPM ad category (gate 7 tests this).

Ideas with only 1+3 (static directory) or only 2 (bare calculator) fail the edge — both are documented graveyard patterns. AIO-resistance by shape, most→least proof: multi-input calculator > printable/download generator > SKU/model lookup vs curated DB > multi-constraint finder > static data table > simple unit converter > plain article (dead).

## Hard rules

- **Never invent numbers.** No search volume, CPC, difficulty, traffic, or revenue figures from your own head — ever. If a number can't be read from a real source you fetched this run, write `unknown`. `unknown` is a first-class value, not a failure.
- **Real evidence only.** Every quote must come from a page actually fetched this run, with its URL. No paraphrased "people are saying" without a link.
- **No paid SEO tools or APIs.** Free/credential-free sources by default; optional credentialed adapters only when the user has supplied credentials in `.env`.
- **MCP tools are optional.** If the Fetch or Brave Search MCP servers are available (config in `.vscode/mcp.json`), use them in the source-gathering passes; absence degrades gracefully to the helper scripts and built-in fetch/search tools.
- **Weak candidates are kept, marked weak — except gate-4 near-misses, which die at scout.** A gate-4 ("hook already served") near-miss at emission was a near-perfect death predictor in the graveyard postmortem. Near-misses on any *other* gate may be emitted weak.
- **Never emit with a named incumbent unopened.** If the run ever produces a note shaped like "validate MUST open X" — open X now. The emit decision happens *after* looking, not before.
- **Scout evidence is dated and rots in weeks.** ~8 of 20 graveyard kills involved incumbents ≤8 weeks old. Date every SERP observation in the run log; downstream, validation expires after 4 weeks and a pre-build re-probe is mandatory. Scout runs ahead freely — candidates are cheap; *validate* is the throttle.

## Run inputs

1. **Niche** — if the user names one, use it. Otherwise propose **3–5 candidate niches** (one-line rationale each) and wait for the user to pick. Prefer buying-adjacent or high-RPM niches (gate 7 will kill the rest — don't propose niches that can't pass it). One niche per run, no exceptions.
2. **Seeds** — 3–8 seed terms for the niche, agreed with the user or derived from `niche.md` if resuming a niche.
3. **Credentials** — read `.env` (never commit it) to detect which optional adapters are live (YouTube Data API key, Reddit OAuth, GitHub PAT, Product Hunt token, …). Absence is fine: fewer sources, same run, gaps noted in the run log.

Before starting, open `pipeline/board.md` (if it exists) to avoid re-proposing ideas already on the board.

## Source passes (fixed order)

### Pass 1 — Autocomplete fan-out

Multi-engine suggest fan-out per seed via `scripts/fanout.*` / the `suggest` adapter — Google, YouTube, Bing, Brave, DDG, and Amazon autocomplete (US locale, `hl=en&gl=us` where applicable); alphabet-soup + question-prefix per seed. Collect raw phrasings of demand. **Flag purchase-shaped completions** ("best X for Y", "X vs Y", brand+model) — they feed the emit ranking later, at no extra cost.

### Pass 2 — Generative inversion

Complaint mining only finds problems people already articulate. This pass generates candidates from the other direction — run **at least two** of the three inversions, logging what each produced:

- **From buying moments** — walk the niche's purchase decisions ("about to buy X — what must they figure out first?"). Each pre-purchase computation or compatibility check is a candidate tool.
- **From datasets** — list stable public datasets in the niche (specs, standards, official tables, registries). Ask of each: what per-query question would a user with *their own inputs* ask this data?
- **From tool shapes** — walk the AIO-proof shape ranking (multi-input calculator, generator, SKU lookup, multi-constraint finder) and ask what each shape would be *for this niche*.

Generated candidates enter the same gate pipeline as mined ones — no evidence privilege; demand must still be confirmed in passes 1/3/4.

### Pass 3 — Pain mining

Draw from the catalog below. Pick **5–8 sources spanning ≥3 signal groups**, justify each pick in the run log. **No source is mandatory** — the pass succeeds with whatever subset is reachable.

**Source catalog** (survey-verified 2026; dead ends removed):

- **Adapters, credential-free (via `scripts/pain-fetch.*`):** HN Algolia, `stackexchange` (softwarerecs is pain gold), `discourse` (any instance's `/search.json`), `suggest` (6 engines), `lemmy`, `gplay` (fragile), iTunes review RSS, unauthenticated GitHub, optional `lobsters`, `reddit` (Reddit's own `search.rss`, no login/app/approval — anon IP rate limit ~1 req/45s), `arcticshift` (free community Reddit archive, good for subreddit browsing; its keyword search can time out on the free tier).
- **Query budget — Reddit is throttled, others aren't:** `reddit` is capped to ~1 request/45s per IP (auto-waits and retries once on a 429, but that's still slow for a multi-query pass). When you need many queries fast, lean on `stackexchange` (10K/day with the key already in `.env`), `hn`, `lemmy`, and `discourse` first — they have no such per-request cooldown. Treat `reddit`/`arcticshift` as 1-2 targeted queries per niche, not the bulk of the pass.
- **Go deep on the cheap, uncapped sources.** Don't stop at one query per source. Against `stackexchange` especially — 10K requests/day is far more headroom than one pass will ever use — run it for **every seed term plus phrasing variants** ("is there a tool for X", "X vs Y", "how do you X", "X alternative", the niche's own jargon) and across the relevant sub-sites (softwarerecs, superuser, askubuntu, or the niche's own SE site if one exists), not just a single generic query. Same idea for `hn`, `lemmy`, and `discourse` — cost is negligible, so more phrasings per seed means more raw problem statements surfaced before the pass-3 bound kicks in. Reserve the "stop early after two sources add nothing new" rule for whole *sources*, not for giving up on a cheap source after one query.
- **Adapters, credentialed (`.env`):** YouTube Data API v3 (best credentialed source), GitHub PAT, Product Hunt GraphQL. Reddit's official Data API (OAuth) adapter was removed — Reddit now requires an approved support-ticket request before that path works at all, and ours was denied; Reddit sourcing goes through the credential-free `reddit`/`arcticshift` adapters above instead.
- **DDG query-recipes (existing `ddg` adapter):** `site:reddit.com/r/SomebodyMakeThis "{niche}"` · `site:reddit.com "{niche}" ("is there an app" OR "is there a tool")` · `site:quora.com "is there a tool" {niche}` · `site:trustpilot.com {brand} "waste of money"`.
- **Manual / browser:** Google Trends related-rising, seasonal calendars, niche Discourse forums, competitor-site reviews, Etsy/Gumroad paid-tool signals.
- **Verified dead — do not attempt:** Quora direct, Trustpilot direct, Amazon reviews, Chrome Web Store, Indie Hackers, Twitter/X.

**Bound for passes 1–3 (jointly):** outcome-bounded at **~25–40 distinct raw problem statements + generated candidates**. A pass may stop early when two consecutive sources add nothing new.

### Pass 4 — Incumbent probe (the gate-4 evidence pass)

For **every** candidate still alive after preliminary gating: query the candidate's *tool/directory intent* (not just informational phrasings) on DDG and **fetch the top hits**. Open every named incumbent. Record per candidate: incumbents found (URL, age signals if visible, what it does/doesn't do), the specific gap if one exists, and **affiliate links/disclosures spotted on incumbents** (feeds the emit ranking). A purpose-built incumbent already serving the hook ⇒ gate 4 kill *now*, at scout — not a note for validate.

### Pass 5 — AIO probe (top candidates)

DDG SERPs are structurally AIO-blind, so this is a separate check. First **predict from query form** for every candidate (question-word queries ≈58–86% AIO trigger rate; 1–2-word tool queries ≈9–10%; "X vs Y" ≈95%; transactional 2–5%) — cheap early kills. Then take the **top 5–10 candidates** (not just the emit shortlist) to a **manual user checkpoint**: the user loads google.com/search for **3–5 head queries each**, recording per query: AIO present? Does it *fully answer* or hedge? Use `&udm=14` as the AIO-free control. A head-query set fully answered by AIO ⇒ gate 1 kill.

### Pass 6 — Trends + dataset reconnaissance (shortlisted candidates)

Google Trends (geo=US; UI/CSV export where the endpoint won't serve JSON). Plus dataset reconnaissance for gate 3: name the candidate's actual data source(s), licence/access reality, what changes and roughly how often — a good-faith estimate; validate verifies.

## Hard gates

Apply to every raw candidate. **Fail any one ⇒ the candidate dies in the run log with the gate name and a one-line reason.** Dead candidates never become idea files.

1. **AIO answers it** — the head queries are fully answered by an AI Overview / a single LLM answer, and the idea has no per-query-compute wedge past it (pass 5 evidence; predict-from-form for early kills, probe for shortlist).
2. **Static feasibility** — needs accounts, DB, backend, server-side compute, or paid APIs.
3. **Data won't moat** — fails either side: **(a) unsustainable** — no free/licensed public source, or realistic steady-state upkeep exceeds ~3 hrs/week for one person; or **(b) moat-free** — the dataset could be assembled by scraping one source or prompting an LLM with no per-row verification judgment, i.e. an AI site farm could replicate it in a weekend. Clearing the moat side needs at least one of: merging 2+ independent sources, per-row hand-verification against a primary source, or per-row expert/editorial judgment. High-touch maintenance within the cap is a *feature* (the moat), not a failure.
4. **Hook already served** — the pass-4 probe found a purpose-built incumbent already serving the hook, or the candidate can't state in one sentence why it beats the top hits *actually fetched this run*. Near-miss here ⇒ kill (see Hard rules).
5. **Legal/policy risk** — medical/financial-advice territory, scraping-hostile data, trademark bait.
6. **US-market mismatch** — demand signal clearly non-US with no US analogue.
7. **No monetization fit** — fails both routes: **(a) affiliate** — the specific products/items the tool would surface are not affiliate-linkable via a *named* program (name it: "Amazon Pets 3%", "Chewy 4%" — any legit network, judged idea-by-idea); and **(b) high-RPM** — the niche doesn't map to a high-RPM ad category (Home & Garden-class, ~5× baseline, per the ticket-03 RPM table). Passing either route passes the gate; record *which* route passed in the run log.

## Emit ranking

When more candidates pass the gates than emit slots, rank affiliate-route candidates above pure high-RPM candidates. Buying-intent strength = purchase-shaped autocomplete completions ("best X for Y", "X vs Y", brand+model) from the suggest fan-out already run, plus affiliate links/disclosures spotted on incumbents during the gate-4 SERP probe. No extra fetching; cite what's already in hand.

## Outputs

All writes go under `pipeline/<niche-slug>/` per the pipeline layout.

### Run log — `pipeline/<niche>/runs/<YYYY-MM-DD>-scout.md`

Records: niche + seeds; sources picked with justification (and any unavailable); inversion passes run and what they produced; raw problem statements gathered; incumbent-probe results per candidate (dated); AIO-probe results; **every gate kill** (candidate, gate, reason); which monetization route each emitted candidate passed on; candidates emitted with ranking rationale.

### Candidates — `pipeline/<niche>/ideas/<idea-slug>/idea.md` (3–5 per run, weak ones kept and marked — gate-4 near-misses excluded)

```markdown
# <Idea name>

Status: candidate
Origin: ../../runs/<YYYY-MM-DD>-scout.md

## Idea

<one-line idea>

## Edge

- **Dataset:** <what data, which sources, which replication barrier — merge / hand-verify / judgment>
- **Compute:** <the per-query action on user inputs a summary can't perform>
- **Long-tail surface:** <the per-item/brand/model page set the dataset generates>
- **Monetization route:** <affiliate (named program + rate) or high-RPM (category)> — products/printables noted here are documented-only; enabling checkout is a manual per-site act

## Hook

<the one sentence that beats the top hits actually fetched this run>

## Incumbent probe

<dated: queries run, top hits fetched, incumbents opened, the confirmed gap. SERP evidence expires ~4 weeks>

## AIO probe

<per head query: AIO present, full-answer vs hedge; or predict-from-form rationale if not individually probed>

## Gate results

<pass/fail note per gate — all seven passed to exist here; note near-misses (gates 1–3, 5–7 only)>

## Evidence

<real quotes + links, per source. `unknown` where a signal wasn't found — never a made-up figure>

## History

- <YYYY-MM-DD> — candidate (emitted by scout run)
```

### Board — `pipeline/board.md`

Regenerate the board (derived view; `Status:` lines in `idea.md` files are canonical) before ending the session. Create `niche.md` if this is the niche's first run.

## Helper scripts

Two deterministic fetch scripts; **create them on first run if missing**, commit them:

- `scripts/fanout.*` — autocomplete fan-out fetcher with caching/dedup (multi-engine per the `suggest` adapter).
- `scripts/pain-fetch.*` — pain-source fetcher with **pluggable adapters**. Credential-free adapters (HN Algolia, Stack Exchange, Discourse `.json`, suggest, Lemmy, Google Play, iTunes review RSS, unauthenticated GitHub, Reddit `search.rss`, Arctic Shift) work out of the box; credentialed adapters (YouTube Data API v3, GitHub PAT, Product Hunt) activate only when `.env` provides credentials. Detect and degrade gracefully.

Credentials live in `.env` (gitignored) — never inside skills, scripts, or committed files.

## End of run

Stop after emitting candidates and regenerating the board. **Do not validate** — that's `idea-validate`'s job. Do not pick a winner — picking is a human checkpoint. Remember the speed rule: validate an idea only when prepared to build within its 4-week evidence window.
