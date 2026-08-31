# Pain-source expansion survey

Type: research
Status: resolved

## Question

Which additional free, credential-free (or already-credentialed) sources can feed scout's pain-mining pass beyond today's four adapters (hn, ddg, github, itunes) — the user explicitly wants public forums, startup-idea/request boards, and out-of-the-box sources? Survey candidates for: access method (public JSON/RSS/HTML endpoint?), rate limits / bot-hostility, signal quality for "people with problems" vs noise, and adapter feasibility in `scripts/pain-fetch.py`'s pattern. Candidate list to verify (extend freely): Discourse forums (`.json` endpoints), Lemmy API, Stack Exchange API, Quora (access reality?), Product Hunt (public GraphQL?), AlternativeTo, G2/Capterra low-star reviews, Google Play reviews, Chrome Web Store reviews, Trustpilot/ConsumerAffairs/BBB, Nextdoor (reality?), Facebook groups (reality?), YouTube comments (via what?), Twitter/X (post-API reality?), Indie Hackers, requests-for-startups lists (YC RFS, ideasbank-style boards), Exploding Topics free tier, Answer Socrates / AlsoAsked-class PAA miners, Amazon review "verified purchase" complaint mining, r/SomebodyMakeThis-class idea boards via DDG. Deliver a ranked adapter shortlist: build-now (free, stable endpoint), build-when-credentialed, skip (with reason).

## Answer

Full findings: [research/04-pain-source-survey.md](../research/04-pain-source-survey.md). All "verified" claims live-tested.

- **BUILD-NOW adapters:** `stackexchange` (api.stackexchange.com/2.3/search/excerpts, keyless 300/day, softwarerecs site is pain gold); `discourse` (any instance's /search.json + /latest.json); `suggest` (one adapter, 6 engines: Google/YouTube/Bing/Brave/DDG/Amazon autocomplete JSON endpoints); `lemmy` (lemmy.world API, weak relevance); `gplay` (batchexecute RPC — works but fragile); optional `lobsters` HTML search.
- **BUILD-WHEN-CREDENTIALED:** YouTube Data API v3 (free key, 10K units/day — best credentialed source after Reddit); Reddit OAuth when the pending application lands (unauthenticated confirmed dead: 403/302); Product Hunt GraphQL token (low priority).
- **QUERY-RECIPES for existing ddg adapter:** site:reddit.com/r/SomebodyMakeThis "{niche}"; site:reddit.com "{niche}" ("is there an app" OR "is there a tool"); site:quora.com "is there a tool" {niche}; site:trustpilot.com {brand} "waste of money"; suggest fan-out (a–z + question stems) as the free PAA substitute.
- **Dead ends (verified):** Quora, Trustpilot, Product Hunt web, Amazon reviews, Chrome Web Store, Indie Hackers, Twitter/X (paid-only).
