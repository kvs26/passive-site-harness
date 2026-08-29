# Validate run — sticker-pack-tools — animated-sticker-checker — 2026-08-29

Idea: **Animated Sticker Checker** (drop GIF/APNG/WebM/TGS → animated-specific
per-platform verdict: duration, fps, frame count, loop, alpha/codec).
Target market: US (default). Origin: `../ideas/animated-sticker-checker/idea.md`
(scout run 2026-08-29).

Credentials: no `.env` present — Keyword Planner, Reddit OAuth, GitHub PAT OFF;
brave-search MCP needs env (unavailable). Playwright MCP available. Degraded to
helper scripts (`fanout.py`, `pain-fetch.py`) + built-in fetch (Bing for
SERP/Reddit snippets per the access ladder; DDG/Reddit-direct not attempted —
scout already logged them as bot-challenged).

Outcome: **parked** — dossier complete at **medium** confidence; no CSV this run.

## What was dug

1. **Demand (graded strong).** Autocomplete fan-out surfaced a real constraint/
   checker sub-branch (`whatsapp animated sticker duration`, `telegram video
   sticker length/requirements`, `discord animated sticker requirements/size
   limit`, `why are my animated stickers not working`) — though the bulk of the
   branch is maker/download intent. Pain recurrence confirmed across independent
   communities: r/whatsapp (8s-GIF duration complaint), r/Telegram (webm 512²),
   and WhatsApp/stickers #718 (WhatsApp's own validator: "total animation
   duration should be under 10000 ms", with the maintainer noting many user
   complaints). Two+ independent pieces same direction → strong.

2. **Keyword Planner checkpoint.** No `keyword-planner.csv`. Wrote
   `keywords-request.md` (~22 terms, grouped head / per-platform / hook-specific
   / monetization). Finished the full dig anyway; confidence capped at medium;
   parked at end per skill.

3. **SERP & competitor weakness (graded weak).** No dedicated cross-platform
   animated-verdict checker ranks — SERP for the hook query returns makers
   (stickit, snappy-fix) and spec guides. But adjacent coverage is dense:
   APNG-only detectors already read frame count + loop (wasimshaikh,
   boneyardtools); textfaker's Discord checker names duration as a field (but
   only as a manual-entry "warn" — it does NOT read frames from the file);
   resizers (emoteresizer network) show animated compliance as a resize side
   effect. Beatable but contested.

4. **Hook depth (graded weak).** Differentiator provably matters (WhatsApp 10s
   validation, Telegram 3s+loop+VP9, 8s-GIF complaint), but incumbents partially
   serve it and the unified cross-format inspector gap is unconfirmed.

5. **Monetization (graded weak).** Comparable free client-side utilities run as
   ad/traffic-monetized portfolios (emoteresizer, discordstickercompressor,
   gifresizer); no explicit high-value ad inventory observed, no CPC (no CSV).

6. **Feasibility & maintenance (graded strong).** All four formats client-side
   inspectable (GIF delays; APNG acTL frame/loop — already done by APNG checkers;
   TGS = gzipped Lottie JSON; WebM/VP9 duration via <video>/EBML, alpha hardest
   but feasible). Specs from free primaries (core.telegram.org VP9 doc, WhatsApp
   stickers repo), ~yearly refresh.

7. **Unique data (graded weak).** No proprietary dataset; spec matrix is public
   and already in cheat sheets. Only "unique" output is the computed per-file
   verdict.

## Dead ends / inconclusive

- **emoji.gg/stickers/validate** — the decisive gate-4 near-miss — is
  Cloudflare-gated (HTTP 403 via built-in fetch and Playwright). Could not
  confirm whether it emits animated-specific per-platform verdicts. Bing
  attempt to read its checked-fields list blended with an APNG-checker's list;
  no clean attribution. Left as the top unpark item.
- Google Trends not fetched (blocked headlessly; no CSV export).
- GitHub/HN pain digs surfaced mostly library/dev items, not end-user constraint
  pain (except #718 and laggykiller/sticker-convert #205).

## No early stop

Demand came out strong, so all six signals were dug rather than short-circuited.

## Next step

Parked — export Keyword Planner data for the keywords in `keywords-request.md`
to `keyword-planner.csv`, then re-run validate on this idea to finish. Also, on
the next pass, inspect emoji.gg/stickers/validate via a warmed browser session
to resolve the animated-coverage gate-4 unknown.
