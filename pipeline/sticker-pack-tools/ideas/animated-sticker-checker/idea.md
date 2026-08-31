# Animated Sticker Checker

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

Drop a GIF / APNG / WebM / TGS and get an animated-specific verdict per platform: duration cap
(e.g. Telegram video stickers are short-form), frame rate, frame count, loop behaviour, alpha /
transparency support (WebM VP9 alpha vs. APNG vs. GIF), codec/container, and file-size ceiling —
plus a plain-English "what to trim" so it will actually upload. Client-side inspection only.

## Hook

The only checker that flags the *animated-sticker-specific* rules — duration, fps, loop, alpha/codec —
that plain image resizers ignore, across WhatsApp, Telegram and Discord at once.

## Gate results

- Gate 1 (answer-it): pass — needs to read the file's real frames/duration/codec; not a static answer.
- Gate 2 (static feasibility): pass — GIF/APNG/WebM headers + frame timing are inspectable in-browser.
- Gate 3 (unmaintainable data): pass — specs change ~yearly; free public sources.
- Gate 4 (specific hook): **weak** — overlaps emoji.gg/validate and convert tools (convertstickers.com)
  which touch animation; whether any incumbent reports *animated-specific* verdicts (duration/fps/alpha/
  codec/loop) rather than just resizing is unconfirmed. Validate MUST check.
- Gate 5 (legal/policy): pass.
- Gate 6 (US-market): pass — all three platforms US-relevant.

## Evidence

Demand (fetched 2026-08-29):
- r/discordapp "The size limit for stickers is too small. The APNG requirement…": *"It would be a good
  idea to allow MP4 files for stickers."* https://www.reddit.com/r/discordapp/comments/18xhzg2/the_size_limit_for_stickers_is_too_small_the_apng/
- Discord support "The sticker size limit is too small": *"Every time I want to upload gif stickers, even
  if I compress the file size of the gif, it's still larger than the limit."*
  https://support.discord.com/hc/en-us/community/posts/16606642454807
- r/Telegram "Transparent WebM Stickers": *"Please check that the video fits into a 512x512 square…"*
  https://www.reddit.com/r/Telegram/comments/sphjgp/transparent_webm_stickers/
- GitHub bodymovin-extension #1 — ".tgs writer bug, add pre-render constraint warnings"
  https://github.com/vnrpz/bodymovin-extension/pull/1
- Autocomplete: "convert gif to sticker keep animation", "webp to animated sticker", "compress gif to
  discord sticker size".

Spec facts (real, this run):
- Discord animated: APNG required, ≤512KB (r/discordapp APNG thread; emoteresizer).
- Telegram: video/WebM must fit 512×512 (r/Telegram).

Incumbents / near-miss:
- convertstickers.com — converts packs "including animated"; sticked.app; laggykiller/sticker-convert.
- emoji.gg/stickers/validate; discordstickercompressor.com; gifresizer.org (resize, not animated-rule verdicts).

Trend/seasonality: `unknown` (Pass 4 not fetched this run).
Search volume / CPC: `unknown` (no Keyword Planner credentials this run).

## History

- 2026-08-29 — candidate (emitted by scout run)
- 2026-08-29 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate.
- 2026-09-01 — rejected on v3 re-triage (harness-v3 ticket 11): fails v3 gate 7 "No monetization fit" on both routes — (a) affiliate: verdicts about the user's own file surface no affiliate-linkable products; (b) high-RPM: creator-tools isn't a high-RPM ad category — and v3 gate 3(b) "moat-free": the dataset is a handful of platform spec rows scraped from official WhatsApp/Telegram/Discord docs, replicable by an AI farm in a weekend (no merge/hand-verify/judgment barrier); long-tail surface thin (few platforms × formats). Per-query compute was genuinely strong, but the edge requires all four parts. Structural kill — no re-probe needed.
