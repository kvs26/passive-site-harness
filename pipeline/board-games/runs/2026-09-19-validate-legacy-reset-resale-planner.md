# Validate run: legacy-reset-resale-planner — 2026-09-19

Origin: [../board-games/ideas/legacy-reset-resale-planner/idea.md](../board-games/ideas/legacy-reset-resale-planner/idea.md) (scout run [2026-09-19-scout.md](2026-09-19-scout.md), flagged `candidate (weak — competitive overlap)`).

## Dig order & findings

1. **Demand** — fresh Google autocomplete fan-out (bypassed `scripts/fanout.py` after it returned a suspiciously-empty cached result set following a `ConnectionResetError`; used direct `curl` against `suggestqueries.google.com` with a realistic Chrome User-Agent instead, which worked reliably). 5 of 6 reset-kit head queries returned real suggestions; all 4 resale/completeness phrasings tried returned zero. Pain-source dig: DDG (`html.duckduckgo.com`) served a blocked/redirect landing page for every site-scoped query this session — pivoted to Bing web search via the browser tool. Found BGG thread 2485472 (Aeon's End Legacy resell-after-reset, 2020) and two dated Facebook posts (2024, 2026) on Pandemic Legacy resetting. Reddit `search.rss` hit HTTP 429 (not retried, per repo memory on anon rate limits); Lemmy adapter failed DNS resolution (not retried).
2. **SERP/incumbents** — re-opened both scout-named incumbents directly this run (scout had only seen SERP snippets): valueidentifier.app and minti-app.com are both generic multi-category collectible scanners with no board-game-specific content visible on their live landing pages today — the overlap is thinner than scout's snippet-level framing suggested. moderncollege.net, which appeared in a Bing snippet with a plausible dated title, turned out to be dead (Cloudflare 522) when opened directly.
3. **Hook depth** — the reset-routing half is well evidenced as a recurring, unsolved problem (BGG filepage comment thread spans 2016–2024 with repeated help requests and ad-hoc workarounds). The resale-completeness half — the idea's actual differentiator vs. the AI-scanner apps — has no evidence of independent user demand beyond the one 2020 BGG thread.
4. **Monetization** — verified Amazon Associates mechanism is live (Toys & Games rate still login-gated/unknown, consistent with sibling dossiers). Checked whether official reset-kit products exist and are linkable, per game: Pandemic Legacy's "reset kit" turned out to be a **free fan-made PnP ZIP** (confirmed by fetching the BGG filepage directly), not a commercial product — and BGG itself already runs Amazon affiliate links for generic craft supplies on that exact page. Gloomhaven/Jaws of the Lion does have a genuine official commercial reset pack (Cephalofair store), but no public Cephalofair affiliate program was found, so it's likely unlinkable directly. Noble Knight Games has no commissioned affiliate program (only a banner-exchange page) — ruled out as a route entirely.
5. **Feasibility/upkeep** — sources are free and accessible, but the Aeon's End BGG thread shows even experienced community members giving hedged, uncertain answers years after release — real synthesis/judgment work per game, not a quick lookup.
6. **Data moat** — barrier (merge + hand-verify across publisher pages / BGG filepages / forum nuance) is real, but the addressable long-tail is a bounded, fairly small universe (a few dozen legacy/campaign titles), with confirmed autocomplete demand in only ~5–6 of them this run.
7. **Traffic sanity-check** — directional read is that this idea likely falls short of the $100/mo blended visitor bar given the small long-tail and the resale half's lack of demand signal, pending actual Keyword Planner data.

## Dead ends

- `scripts/fanout.py` cache-poisoning bug (empty result cached after a network error) — bypassed with direct curl; worth fixing in the script itself in a future session.
- DDG pain-source queries — blocked/redirected all session.
- Reddit `search.rss` — 429 rate-limited, not retried.
- Lemmy (`lemmy.world`) — DNS resolution failure, not retried.
- moderncollege.net — dead (Cloudflare 522), despite a plausible SERP snippet.
- Cephalofair affiliate-program check — not completed this session (noted as an open gap in the dossier's Risks & unknowns, not a checked-and-failed search).

## Outcome

No kill-level finding (no incumbent fully serves the combined hook, no data source is paid/unlicensed, upkeep isn't measured over cap, moat isn't mechanically replicable, and a monetization route nominally survives even though thin). All six signals graded **weak**; confidence **medium**, capped by the missing Keyword Planner CSV. Per the skill's no-CSV path: dossier completed in full, `keywords-request.md` written, idea **parked** pending the manual Keyword Planner export.
