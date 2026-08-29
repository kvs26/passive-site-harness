# Sticker Monetization Directory

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

A side-by-side reference of *where and how to sell or publish sticker packs* per channel — iMessage
App Store, Google Play, LINE Creators Market, Telegram (free), WhatsApp (no store) — listing for each:
the technical specs, the payout / revenue-share %, the review requirements, and how creators actually
get paid. Static reference content, not a tool.

## Hook

The only side-by-side of sticker *monetization channels* — payout share, review time, and specs in one
place — vs. spec sheets that tell you the pixel dimensions but never whether or how you can get paid.

## Gate results

- Gate 1 (answer-it): pass — a synthesized multi-store table of revenue-share + review rules is exactly
  where a single LLM answer hallucinates; the value is verified, sourced, side-by-side facts.
- Gate 2 (static feasibility): pass — pure reference page, no compute.
- Gate 3 (unmaintainable data): pass — store terms change ~yearly; official store docs are free.
- Gate 4 (specific hook): pass (weak) — spec cheat sheets (kakameme, somake) cover dimensions but not
  monetization; no incumbent seen combining payout % + review + specs. Validate should confirm.
- Gate 5 (legal/policy): pass — factual store terms; no financial advice.
- Gate 6 (US-market): pass — iMessage App Store + Google Play are US-primary; LINE included as context
  (noted as JP/TW/TH-centric so US relevance is partial).

## Evidence

- Demand for monetization/publishing exists in the maker cluster (GitHub maker-tool activity + autocomplete
  "whatsapp/telegram sticker pack maker/creator"). Direct US search-volume for "sell sticker packs":
  `unknown` (not measured this run) — this is why the candidate is marked **weak**.
- LINE import/monetization friction is real in maker tooling: GitHub star-39/moe-sticker-bot #54 "Bad
  request for import sticker from Line" https://github.com/star-39/moe-sticker-bot/issues/54
- Channel facts to verify on validation (not asserted here): iMessage App Store rev-share, Play rev-share,
  LINE Creators Market payout, Telegram free, WhatsApp no store — all `unknown` until read from official docs.

Incumbents / near-miss:
- Spec sheets that ignore monetization: kakameme.com/blog/sticker-size-guide-all-platforms; somake.ai/blog/sticker-size-guide.
- Maker platforms (LINE-focused creator guides exist but not a cross-store payout comparison, per scan).

Trend/seasonality: `unknown` (Pass 4 not fetched this run).
Search volume / CPC: `unknown` (no Keyword Planner credentials this run).

## History

- 2026-08-29 — candidate (emitted by scout run)
- 2026-08-29 — rejected (validate, low confidence): gate 4 disproved — KakaMeme's "How to Make and
  Sell LINE Stickers with AI" (5 Jul 2026) already synthesizes the cross-platform payout comparison
  ("LINE is the one platform where sticker creators earn real revenue share"; WhatsApp/Telegram free,
  WeChat tips) + review time + specs. Gate 6 undercut — the only paying channel (LINE) is JP/TW/TH-centric,
  so the payout comparison isn't a US decision. US "sell sticker packs" demand is dominated by physical
  stickers (Etsy/Redbubble/Panini). Telegram monetization has also moved to a fast-moving Stars/TON model,
  breaking the gate-3 "changes yearly" assumption. Dossier kept as the record.
