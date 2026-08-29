# Sticker Pack Preflight

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

Drop a whole folder of images/GIFs and get a per-file × per-platform pass/fail matrix (WhatsApp,
Telegram, Discord, iMessage, Signal) — with the exact failing rule (dimensions, file size, format,
transparency, frame/duration) and a one-click fix — plus pack-level checks (count limits, required
tray/pack icon) that single-file tools skip. Entirely client-side (File API + canvas + header parsing).

## Hook

The only sticker checker that validates an *entire pack at once, across every platform*, telling you
per file exactly why it fails and whether the pack itself (count + tray icon) is publishable — vs.
single-file, single/triple-platform resizers and checkers.

## Gate results

- Gate 1 (answer-it): pass — batch, per-file measurement against multiple rule sets isn't a one-shot answer.
- Gate 2 (static feasibility): pass — dimension/size/format/frame inspection runs fully in-browser; no backend.
- Gate 3 (unmaintainable data): pass — platform specs change roughly yearly; free public sources.
- Gate 4 (specific hook): **weak / near-miss** — emoji.gg/stickers/validate already validates for
  Discord/Telegram/WhatsApp and textfaker does Discord single-file preflight. Unserved cut *claimed*:
  batch/whole-pack, per-file verdict, count + tray-icon rules, plus iMessage/Signal. Validate MUST open
  emoji.gg/validate + textfaker to confirm whether the cut is real.
- Gate 5 (legal/policy): pass — no advice territory; factual file checks.
- Gate 6 (US-market): pass — WhatsApp/Telegram/Discord/iMessage/Signal all US-relevant.

## Evidence

Demand (fetched 2026-08-29):
- r/discordapp "Why are the size limitations for stickers ridiculous?": *"…the sticker calls the file
  invalid…"* https://www.reddit.com/r/discordapp/comments/11ine30/why_are_the_size_limitations_for_stickers/
- Discord support "The sticker size limit is too small": *"even if I compress the file size of the gif,
  it's still larger than the limit."* https://support.discord.com/hc/en-us/community/posts/16606642454807
- r/Telegram "Getting stickers to the correct aspect ratio?": *"…at least one side has to be exact 512
  pixels."* https://www.reddit.com/r/Telegram/comments/dn2ak0/getting_stickers_to_the_correct_aspect_ratio/
- Autocomplete: "discord sticker size converter/limit/requirement", "telegram sticker size requirements",
  "why won't my sticker upload", "how many stickers per pack whatsapp telegram discord".

Spec facts (real, this run):
- Discord: 320×320, ≤512KB, PNG/APNG, transparent (Discord Sticker Creators FAQ; freedom251 invalid-asset list).
- Telegram: one side exactly 512px, other ≤512; WebM fits 512×512 (r/Telegram).
- Counts: WhatsApp 3–30 (aistickers.app FAQ); Telegram 120/50; Discord ≤60 (stickercrafter; limits.tginfo.me).

Incumbents / near-miss:
- emoji.gg/stickers/validate — "Validate Stickers – For Discord, Telegram & Whatsapp" (multi-platform; single-file?).
- textfaker.com/tools/discord-emoji-sticker-requirements-checker — Discord single-file preflight.
- emoteresizer.net, scalefish.app, imgfast.com, discordstickercompressor.com — single-platform resizers.

Trend/seasonality: `unknown` (Pass 4 not fetched this run).
Search volume / CPC: `unknown` (no Keyword Planner credentials this run).

## History

- 2026-08-29 — candidate (emitted by scout run)
- 2026-08-29 — rejected (validate, confidence medium): gate-4/hook-depth disproved. The scout's key
  multi-platform-validator incumbent (emoji.gg/stickers/validate) turned out to be a sticker-download
  library page, not a validator — so the batch/whole-pack cut is genuinely *unserved*, but the dig found
  **no demand** for the differentiator (fan-out on validate/check/batch queries returned nothing on-topic)
  while the underlying per-file/per-platform demand that *is* strong is saturated (resizers, checkers,
  converters, one-table cheat sheets) and the whole-pack workflow is short-circuited by auto-conforming
  makers/packers (wastickers-packer auto-resize/split/pad, stickercrafter, sticker-convert). iMessage leg
  largely inapplicable (packs are Xcode apps). A CSV can't rescue it — it can't size a differentiator
  nobody searches for. See dossier.md + runs/2026-08-29-validate-sticker-pack-preflight.md.
