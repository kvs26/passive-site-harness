# Dossier: Animated Sticker Checker

**Drop a GIF/APNG/WebM/TGS and get an animated-specific verdict per platform (duration, fps, frame count, loop, alpha/codec) that plain resizers ignore — confidence medium (no Keyword Planner CSV this run; hook alive but partially contested).**

## Signal scorecard

**Demand: strong** — animated-specific constraint pain (duration/loop/frames, not just pixel size) recurs across ≥3 independent communities plus a heavily-populated maintainer thread, and shows up as its own autocomplete branch.
  - r/whatsapp "Issues with animated stickers": *"I'm making a bunch of promotional animated stickers needed for my work, the GIFs in are all 8s long, I read its the [duration limit]…"* (https://www.reddit.com/r/whatsapp/comments/1cj2p6u/issues_with_animated_stickers/)
  - GitHub WhatsApp/stickers #718 — WhatsApp's own validator rejects on duration: *"Validation failed: total animation duration should be under 10000 ms"*, and the maintainer-facing report notes *"I get a lot of complaints related to this bug from users … usually low-end phones."* (https://github.com/WhatsApp/stickers/issues/718)
  - r/Telegram "Transparent WebM Stickers": *"Please check that the video fits into a 512x512 square (one of the sides should be 512px…)."* (https://www.reddit.com/r/Telegram/comments/sphjgp/transparent_webm_stickers/)
  - Autocomplete tool-signal branch (fanout.py, US locale, this run): `whatsapp animated sticker duration`, `telegram video sticker length`, `telegram video sticker requirements`, `discord animated sticker requirements`, `discord animated sticker size limit`, `why are my animated stickers not working`, `animated stickers not working discord`.
  - Caveat: the *bulk* of "animated sticker" autocomplete is maker/creator/content-download demand (`animated sticker maker`, `animated sticker download for whatsapp`, `…adopt me`); the constraint/checker subset is a real but narrower slice.

**SERP & competitor weakness: weak** — no dedicated cross-platform *animated-verdict* checker ranks for the hook queries, but the adjacent space is crowded and partly covers the pieces. Beatable-but-contested.
  - Query `animated sticker checker validate duration fps loop codec whatsapp telegram discord` returns **makers** (stickit.suleimanov.com animated-sticker maker; snappy-fix "Sticker Maker … up to 6 seconds. FPS…") and **spec guides** (forgemoji, floniks, nguyenthanhluan glossary) — no drop-a-file-get-a-verdict inspector. (bing.com SERP, fetched this run)
  - APNG-only detectors already read frames/loop: wasimshaikh.com "APNG Checker" (*"reads the file's bytes … along with the frame count, how many times…"*) and boneyardtools.com "APNG Detector" — but single-format, not per-platform verdicts. (bing.com, fetched this run)
  - Resizer incumbents show animated compliance as a side effect of resizing: emoteresizer.net (*"shows the file size for each output so you can verify compliance … 60 frames maximum … shortening the total animation duration"*) — framed as "resize to fit," not "inspect what's wrong per platform." (https://emoteresizer.net/)

**Hook depth: weak** — the animated-specific differentiator (duration/loop/codec) demonstrably matters to users (WhatsApp 10s validation error, Telegram 3s+loop, 8s-GIF complaint), but incumbents partially serve it and the *unified cross-format cross-platform* inspector gap is unconfirmed rather than proven open.
  - Pro-hook: WhatsApp's validator error is literally a duration verdict (#718); Telegram's spec is duration+loop+codec (below); complaints cite these, not pixel size.
  - Against-hook: APNG detectors already emit frame/loop; textfaker's Discord checker names "duration" as a field; the multi-platform validator **emoji.gg/stickers/validate** could not be inspected this run (Cloudflare bot-challenge, HTTP 403) so its animated-specific coverage stays **unknown** — the single biggest open question for gate 4.

**Monetization paths: weak** — plausible AdSense-on-utility + affiliate-to-maker/converter route, but no evidence of a strong ad market and no CPC data this run.
  - Comparable free client-side utilities (emoteresizer.net network of resizers/calculators; discordstickercompressor.com; gifresizer.org) run as ad/traffic-monetized tool portfolios, but no explicit high-value ad inventory was observed and no top-of-page bid is available (no CSV).
  - Affiliate hand-off to makers/converters (convertstickers.com, stickit) is thin-margin.

**Feasibility & maintenance: strong** — every target format is client-side inspectable, and the specs come from free primary sources on a ~yearly refresh.
  - Telegram video-sticker spec (primary): *"Video must be in .WEBM format, up to 30 FPS. Video must be encoded with the VP9 codec. Video must have no audio stream. … Duration must not exceed 3 seconds. Video should be looped … Video size should not exceed 256 KB after encoding."* (https://core.telegram.org/stickers/webm-vp9-encoding)
  - WhatsApp animated constraint (primary, in-repo): total animation duration ≤ 10000 ms + ≤500KB, enforced by the sample app validator. (https://github.com/WhatsApp/stickers/issues/718)
  - Inspectability: GIF frame delays; APNG `acTL` chunk (frame count + loop) — already done in-browser by APNG checkers; TGS = gzipped Lottie JSON (fps/duration/frames trivially parseable); WebM/VP9 duration via `<video>`/EBML parse (VP9 alpha is the hardest leg but feasible). Refresh burden low.

**Unique-data opportunity: weak** — no proprietary dataset; the per-platform animated spec matrix is public and already folded into cheat sheets (kakameme, forgemoji, nguyenthanhluan). The only "unique" output is the *computed per-file verdict*, which is derivation, not data.

## SERP snapshot

Key queries fetched this run (Bing; DDG/Reddit-direct degraded per access ladder):

- **`animated sticker checker validate duration fps loop codec …`** → top results are makers (stickit.suleimanov.com, snappy-fix sticker maker) + spec guides (forgemoji "Animated Emoji Stickers for Telegram: Formats & Specs", 21 May 2026; floniks workflow; nguyenthanhluan glossary "animation duration stickers"/"fps stickers"). **No drop-file animated verdict tool.**
- **`emoji.gg validate stickers animated apng duration frames …`** → APNG detectors (wasimshaikh.com, boneyardtools.com) that read frame count + loop for a *single format*; textfaker Discord single-file checker; emoji.gg pages themselves un-inspectable (Cloudflare 403).
- **`telegram video sticker too long duration won't upload`** → core.telegram.org VP9 doc + limits.tginfo.me + 2026 third-party size guides (fastedit 22 Jul 2026, ppimage 4 May 2026) + r/Telegram threads.

Beatable: nobody owns the "one file → per-platform animated pass/fail with the specific failing rule and what to trim" verdict across GIF/APNG/WebM/TGS. Not beatable-clean: APNG detectors, Discord manual-entry checkers, resizers, and makers each cover a slice, and emoji.gg's multi-platform validator is an unquantified overlap.

## Keyword data

Awaiting Keyword Planner export — see [keywords-request.md](keywords-request.md). No CSV present this run, so demand volume buckets and top-of-page bids are `unknown` and whole-dossier confidence is capped at **medium**.

## Monetization sketch

Likeliest route: display ads (AdSense) on a fast, free, no-signup client-side checker, matching the emoteresizer/resizer utility pattern; secondary affiliate hand-off from the "what to trim" fix step to a maker/converter (convertstickers.com, stickit). Ad unit would sit below the drop-zone verdict card and in the per-platform explainer sections. Value unproven (no CPC this run); utility-query CPC is likely low.

## Risks & unknowns

- **emoji.gg/stickers/validate animated coverage — unknown.** Cloudflare bot-challenge (HTTP 403) blocked inspection headlessly and via built-in fetch. Searched Bing for its checked-fields list; results blended with an APNG-checker's field list, so no clean attribution. This is the decisive gate-4 unknown: if emoji.gg already emits animated-specific per-platform verdicts (duration/fps/loop/alpha/codec) across ≥2 platforms, the hook is largely served. **Unpark/next step:** inspect it via a real browser session (Playwright with a warmed profile) or manual human check.
- **Trend/seasonality — unknown.** Google Trends not fetched (endpoint blocked headlessly, no CSV export this run).
- **Search volume / CPC — unknown.** No Keyword Planner CSV; buckets and bids not measured.
- **Demand framing skew.** Most "animated sticker" volume is maker/download intent; the checker/constraint subset is real (evidenced above) but is a minority of the branch — the CSV should size the constraint-specific terms specifically.
- **WhatsApp duration evidence is partly dated.** #718 is a 2020–2021 thread (constraint still current; corroborated by the fresh r/whatsapp 8s-GIF complaint).

## Sources log

Consulted this run (incl. dead ends):

- `scripts/fanout.py` — Google autocomplete US fan-out on `animated sticker`, `gif to discord sticker`, `telegram video sticker`, `webm sticker`, `apng sticker`, `animated sticker size`, `animated sticker duration`, `why won't my animated sticker`. **Succeeded** (tool-signal + maker/content branches).
- `scripts/pain-fetch.py github "animated sticker"` — **succeeded**, mostly library/dev items (wa-automate #3395 "Animated stickers not working in channels"; laggykiller/sticker-convert #205 "animation frame duration"); low end-user constraint pain.
- `scripts/pain-fetch.py hn "animated sticker"` — **succeeded**, historical/product items, no constraint pain.
- Bing SERP + surfaced Reddit snippets — **succeeded**: r/whatsapp 1cj2p6u (8s GIF duration), r/whatsapp i77yim ("not working anymore"), r/Telegram sphjgp (webm 512²), WhatsApp/stickers #718.
- https://core.telegram.org/stickers/webm-vp9-encoding — **succeeded** (primary video-sticker spec: VP9, ≤30fps, ≤3s, loop, ≤256KB).
- https://github.com/WhatsApp/stickers/issues/718 — **succeeded** (WhatsApp 10000 ms total-duration validation error + user-complaint volume).
- https://textfaker.com/tools/discord-emoji-sticker-requirements-checker — **succeeded**: Discord single-file preflight; checks extension/size/dimensions/aspect; duration/page-count are **warn = "needs more source data"** (not read from the file) → does not actually inspect animated frames/duration.
- https://emoteresizer.net/ — **succeeded**: multi-tool resizer network; animated GIF frame/size compliance shown as a resize side effect; no cross-platform animated verdict.
- https://convertstickers.com/ — **succeeded**: cross-platform pack *mover* (WhatsApp/Telegram/Signal, "animated ones too"); conversion, not inspection/verdict.
- wasimshaikh.com APNG Checker; boneyardtools.com APNG Detector — via Bing snippet: APNG-only frame-count/loop readers, not per-platform verdicts.
- https://emoji.gg/stickers/validate — **DEAD END** (Cloudflare bot-challenge, HTTP 403 via fetch and Playwright). Animated coverage unresolved.
- Google Trends — **NOT FETCHED** (blocked headlessly; no CSV).
- Google Keyword Planner — **NOT AVAILABLE** (no `.env`/credentials; CSV not produced this run).
