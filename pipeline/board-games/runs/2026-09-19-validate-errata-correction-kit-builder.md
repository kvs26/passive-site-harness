# Validate run: errata-correction-kit-builder — 2026-09-19

Niche: board-games
Idea: [errata-correction-kit-builder](../ideas/errata-correction-kit-builder/idea.md)
Origin: [2026-09-19-scout.md](2026-09-19-scout.md)

**Evidence dated 2026-09-19 — 4-week clock, expires ~2026-10-17. Any SERP/AIO evidence used past that date must be re-probed before build.**

## Process

1. **Demand:** autocomplete fan-out (`scripts/fanout.py`, mode=question and mode=alpha, seeds "board game errata", "board game printing error", "board game misprint", "board game errata pack") + `scripts/pain-fetch.py stackexchange` (site boardgames, queries "errata", "printing error") + `scripts/pain-fetch.py reddit` (search.rss, "boardgames errata list"). `scripts/pain-fetch.py hn` returned nothing relevant (dead end); `scripts/pain-fetch.py discourse` against BGG 404'd (BGG runs no Discourse instance). `scripts/pain-fetch.py ddg` hit connection resets this run (network-level dead end, not a finding) — worked around with Bing-via-browser for SERP work.
2. **SERP/incumbent re-probe:** Bing search (browser) for `board game errata list by edition printing`; opened both named incumbents directly — spotlightongames.com/errata/ (partial: narrow older-Euro-game static directory, no per-printing marker matching) and gamegrimoire.app (not an errata tool — AI rules-Q&A only, checked /games/scythe).
3. **AI Overview manual checkpoint (Google, browser, not predicted from form):** ran the head query, a per-title/per-printing query, and the `&udm=14` AIO-free control — documented in dossier's SERP & AIO snapshot.
4. **Hook depth:** confirmed via existing demand evidence (Betrayal 2nd Ed Reddit thread explicitly attempting to hand-build this exact artifact; BGG "Differences between the Errata packs" thread naming box-lid print codes as the real per-printing signal).
5. **Monetization:** fetched the live Amazon Associates Standard Commission Income Statement and Program Policies directly (both public, not login-gated — correcting a caveat carried forward from this niche's two prior parked dossiers) to verify the Toys-category rate (3.00%) and session/cookie window (24 hours + 89-day cart-add extension) verbatim.
6. **Feasibility/upkeep:** confirmed FFG Product Document Archive and Leder Games Resources pages are live, public, per-title sources; no single cross-publisher errata feed exists.
7. **Data moat:** assessed which barrier holds using spotlightongames.com as a real (if narrow) proof that partial replication is possible but incomplete.
8. **Keyword Planner checkpoint:** no `keyword-planner.csv` present. Wrote [keywords-request.md](../ideas/errata-correction-kit-builder/keywords-request.md) (20 keywords, 4 groups) per the skill's exact process rather than estimating volume.
9. **Traffic sanity-check:** reasoned qualitatively (labelled opinion, not a number) — idea is structurally long-tail (no single head term), same profile as two other parked ideas in this niche.

## Outcome

**Parked at medium confidence.** Five of six signals graded (Demand strong, SERP/AIO weak-not-kill, Hook strong, Monetization strong, Data moat strong); Feasibility weak (real, not disproven, upkeep risk if scope isn't curated). No kill-level finding — nothing here disproves the idea, but confidence is capped at medium without Keyword Planner data, consistent with the skill's rule that a missing CSV caps confidence regardless of how the qualitative dig reads.

This corrects one carried-forward assumption from this niche's other two parked dossiers (board-game-expansion-buyers-guide, rules-youre-playing-wrong): the Amazon Associates Toys & Games rate is **not** login-gated — the public Standard Commission Income Statement page lists it directly (3.00%). Worth revisiting those two dossiers' monetization grades if either is unparked.

## Comparison brief trigger

board-games niche validated-idea count after this run: **0** (this idea → parked, not validated; niche total remains 0 validated / 3 parked / 1 rejected / 3 candidate). Comparison brief NOT triggered.

## Next step

Parked — export Keyword Planner data for the keywords in [keywords-request.md](../ideas/errata-correction-kit-builder/keywords-request.md) to `keyword-planner.csv`, then re-run `/idea-validate` on this idea to finish.
