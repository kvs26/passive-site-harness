# Dossier: Poem-by-persona finder

**A funeral/occasion-poem finder that matches on the deceased's persona (hobby, profession, personality, tone) rather than the relationship — demand is real and broad, but the persona axis is already occupied by a curated persona blog plus a swarm of AI content farms; confidence medium (no Keyword Planner CSV).**

## Signal scorecard

**Demand: strong** — the persona long-tail is exceptionally broad in autocomplete and is independently corroborated by a market full of sites purpose-built to serve it.
  - Google autocomplete (this run, `scripts/fanout.py`, hl=en gl=us) returns dozens of distinct persona facets: professions/roles ("funeral poem for a farmer / gardener / fisherman / builder / bus driver / drummer / golfer / lorry driver / mechanic / police officer / pilot / truck driver / nurse / teacher / engineer"), hobbies/fandom ("…for a dog lover / horse lover / music lover / football fan / liverpool fan / manchester united fan / hunter / knitter / quilter / keen gardener"), personality ("…for a strong woman / quiet man non religious / funny man / free spirit / good man / difficult person / loner"), and tone qualifiers recur ("non religious", "secular", "short").
  - Independent supply signal (this run): multiple unrelated sites are built specifically around persona funeral poems — markyouroccasion.com ships a persona-page web (Knitting, Gardening, Tennis, Bartending, Animal Lover…), poemverse.org and ecopatchy.com run persona pages at scale, candlestickpress.co.uk sells themed "Ten Poems About Knitting" pamphlets, and Etsy carries a "Printable Funeral Poem Digital Download" (https://www.etsy.com/listing/1871246862/printable-funeral-poem-digital-download). Businesses don't build persona pages for zero traffic.

**SERP & competitor weakness: weak** — the persona axis is NOT unserved; it is crowded, and one incumbent is genuinely curated.
  - "funeral poem for a gardener" (DDG, this run) top organic is entirely persona-targeted pages, none of them the big relationship finders: ecopatchy.com/funeral-poems-for-gardeners, poemverse.org/poems-about-gardeners-for-funerals, markyouroccasion.com/funeral-poems-about-gardening, fenixfuneral.co.uk, jamiesonfunerals.com FAQ, rosycompany.co.uk, poetrysoup.com.
  - markyouroccasion.com/funeral-poems-about-knitting (this run) is a real curated persona index: contributor-credited poems ("A Legacy Of Stitches" by Sandra E. Andersen, "Clickety Clack" by Robyn O'Connell, "Rows Of Stitches" by Ilene Bauer) with an interlinked "You Might Also Like" persona web (Animal Lover, Tennis, Bartending). This directly occupies the idea's "persona index" hook.
  - The rest is thin/AI churn, so quality-beatable but numerous: poemverse.org "Poems About Gardeners" prints fabricated poems with invented authors ("In the Garden of Eternity" by "Lucy Browning", "The Gardener's Legacy" by "Michael Sullivan", "Seeds of Love" by "Emily Greene") and carries AdSense; the knitter SERP even surfaces a scraper spam domain (world.autohof-freienbrink.de).

**Hook depth: weak** — the differentiator (persona axis that relationship-finders ignore) is contradicted by evidence, and the finder's multi-facet filter adds only marginal value.
  - markyouroccasion.com already indexes funeral poems by hobby/persona with a browsable web (evidence above), so "relationship finders don't index by persona" no longer implies the persona axis is open.
  - Observed intent is single-persona queries → single-persona pages that already satisfy them; a cross-facet finder (persona × tone × length × religious/secular) is a nice-to-have over what exists, not a must.
  - The only remaining edge — a *verified, real, usable* poem corpus vs AI-fabricated filler — overlaps the sibling idea reprint-clear-occasion-poems and is not shown to be what users actually choose.

**Monetization: weak** — plausible routes exist but no CPC read this run.
  - AdSense visibly runs on the AI persona farms (poemverse.org fired pagead2.googlesyndication.com/pagead pings this run), confirming display-ad viability on these pages.
  - A print/product route is visible: Etsy "Printable Funeral Poem Digital Download" and candlestickpress pamphlets — an affiliate/printable-template angle for order-of-service programs.
  - No top-of-page bid data without the Keyword Planner CSV, so this cannot rise above weak.

**Feasibility & maintenance: strong** — static, low-refresh, verified against the real data source.
  - Build is a tagged static poem corpus + persona/tone/length facets + client-side filter; no backend. Refresh burden is near-zero (poems don't change), well inside the ~quarterly bar.
  - Data source is public-domain + free-to-use/contributor-permission poems (same corpus basis as the reprint-clear sibling and funeralverses.com's PD collection). Caveat: sourcing a *genuinely fitting real* poem per persona is heavy one-time curation, and for many long-tail personas (e.g. "lawn bowler", "bus driver") a real PD poem that fits may simply not exist — which is exactly why the farms fabricate them.

**Unique-data opportunity: weak** — the "moat" is curation effort, not proprietary data.
  - A cross-facet persona×tone×length index of verified poems is derivable structure competitors lack as a *tool*, but the underlying poems are public, markyouroccasion already holds much of the persona tagging, and AI generators (aipoemgenerator.co, noted at scout) plus AI farms can flood persona poems on demand. Nothing here is data a competitor can't cheaply get.

## SERP snapshot

- **"funeral poem for a gardener"** (DDG, this run): ecopatchy.com (×2 pages), poemverse.org (×2), markyouroccasion.com, fenixfuneral.co.uk, jamiesonfunerals.com FAQ, rosycompany.co.uk, poetrysoup.com. No relationship-finder in the top set — the persona long-tail is fully colonised by niche/persona pages. poemverse content is AI-fabricated (invented poets) with AdSense → quality-beatable but low-value churn.
- **"funeral poem for a knitter"** (DDG, this run): markyouroccasion.com (curated, credited poets), poemverse.org (×2), poetrysoup.com, poemhunter.com, nzpoetryshelf.com, candlestickpress.co.uk (paid pamphlet), scottishpoetrylibrary.org.uk, wovember.com, allpoetry.com, a reddit r/knitting thread, plus an Etsy printable funeral poem and a scraper spam domain. Highly fragmented, one genuinely curated incumbent.
- **Read:** results are beatable on quality (much of it is AI filler) but the axis is occupied and crowded, and per-persona pages already answer the query — so SERP-weakness and hook are both weak, not strong.

## Keyword data

Awaiting Keyword Planner export — see `keywords-request.md`. No volume or CPC figures are available this run, so Demand corroboration rests on autocomplete breadth + supplier proliferation, and Monetization stays weak. Confidence capped at medium until the CSV lands.

## Monetization sketch

Likeliest route: display ads (AdSense) on persona result pages — the exact model the poemverse/ecopatchy farms already run — supplemented by a printable "order of service / memorial card" affiliate or template product (Etsy/candlestickpress-style) sitting on each poem's page as a "print this on a program" CTA. Whether the persona long-tail carries enough top-of-page bid to matter is the open CSV question.

## Risks & unknowns

- **Volume/CPC: unknown** — no Keyword Planner CSV. Searched autocomplete + DDG SERPs only; no numeric volume read. This is the deciding unknown: if the persona long-tail sums to a thin bucket, fighting the AI farms isn't worth it.
- **Hook occupied** — markyouroccasion.com already runs a curated persona index; the "unserved axis" premise is contradicted. The only clearly-open sub-cut is a *filterable multi-facet finder returning verified real poems*, and its value over existing per-persona pages is unproven.
- **AI-generator / AI-farm pressure** — aipoemgenerator.co (scout) makes bespoke persona poems on demand; poemverse/ecopatchy mass-produce persona pages. Curation quality is the only defence and it is labour-heavy.
- **Corpus gap** — real PD poems that genuinely fit narrow personas often don't exist; honest curation would leave many long-tail personas thin, the gap the farms fill with fabrication.
- **Community recurrence: unknown** — a `site:reddit.com` persona-poem search this run was swallowed by DDG (returned the generic knitting SERP, no threads); forum-level recurrence not established beyond the one r/knitting result that surfaced incidentally.

## Sources log

- `scripts/fanout.py "funeral poem for a" --mode=alpha` and plain fan-out on "funeral poem for a / for someone who loved / funeral reading for a" (Google suggest, hl=en gl=us) — persona long-tail. USED.
- DDG `?q=funeral poem for a gardener` — SERP result set. USED.
- poemverse.org/poems-about-gardeners-for-funerals — incumbent quality (AI-fabricated poems + AdSense). USED.
- DDG `?q=funeral poem for a knitter` — second persona SERP. USED.
- markyouroccasion.com/funeral-poems-about-knitting — curated persona incumbent (credited poets + persona web). USED.
- Etsy listing 1871246862 (printable funeral poem) — monetization/product signal (seen in SERP). USED.
- `scripts/pain-fetch.py ddg "…"` — returned empty (DDG-HTML captcha). DEAD END.
- DDG `site:reddit.com funeral poem for a gardener OR knitter OR fisherman suggestions` — swallowed, returned generic knitting SERP, no threads. DEAD END.
- Google Keyword Planner — not run (manual human checkpoint; see `keywords-request.md`). PENDING.
