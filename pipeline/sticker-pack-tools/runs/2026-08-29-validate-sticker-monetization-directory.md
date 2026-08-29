# Validate run — sticker-pack-tools — sticker-monetization-directory — 2026-08-29

Idea: **sticker-monetization-directory** (side-by-side of where/how to sell/publish sticker packs per
channel: payout share + review + specs). Target market: US (default).

Outcome: **rejected** at **low** confidence. Dossier on disk.

## Setup

- Credentials: no `.env` present — Keyword Planner CSV, Reddit OAuth, GitHub PAT all OFF. Brave-search MCP
  configured in `.vscode/mcp.json` but requires `.env` (absent), so not exposed this session. Playwright
  MCP available but not needed. Used helper scripts (`fanout.py`, `pain-fetch.py`) + built-in fetch (Bing).
- Context read: `idea.md`, origin scout run (`runs/2026-08-29-scout.md`), `niche.md`. No prior dossier.

## What was dug (demand first)

1. **Autocomplete fan-out** — `sell sticker packs` and monetization variants. **Key finding:** the US query
   space is dominated by *physical* stickers (Redbubble/Etsy/Amazon/Walmart/Hobby Lobby, FIFA/Panini/World
   Cup collectible packs, "package stickers for shipping"). The digital messaging-sticker monetization
   angle is thin. `line creators market` autocomplete is heavily non-US (JP/zh-hant/Thailand).
2. **Pain sources (HN)** — iMessage sticker + "sticker pack revenue" queries. iMessage sticker/monetization
   items cluster around 2016 (App Store launch) — historical, low current pain. LINE's $268M sticker revenue
   is non-US.
3. **SERP + competitor deep-dive (Bing + page fetches)** — the differentiating hook (side-by-side payout
   share per channel) is **already served**: KakaMeme's "How to Make and Sell LINE Stickers with AI"
   (5 Jul 2026) states verbatim that LINE is the only channel paying real revenue share (~35%), WhatsApp/
   Telegram free/social, WeChat tips — plus review time, payout method, specs. Per-channel selling guides
   also rank (Telegram, iMessage, official LINE docs).
4. **Feasibility check (Telegram)** — fetched xgram.io: Telegram sticker monetization has shifted to a
   crypto/NFT model (Stars/TON/secondary marketplaces Palace, MRKT). The idea's "Telegram: free" cell is
   already stale and this segment moves month-to-month, breaking scout gate-3's "~yearly" assumption.

Because demand came out weak after a genuine dig, remaining signals were graded from evidence in hand
rather than digging deeper on a dead idea (per the skill's demand-first stop rule).

## Keyword Planner checkpoint

**Skipped intentionally — no CSV requested.** The rejection basis is not a volume question: even high search
volume would not rescue an already-served hook whose one paying channel is non-US. Requesting a Planner
export here would imply the idea is merely inconclusive, which it isn't. Confidence stays low regardless.

## Why rejected (scout-gate disproof)

- **Gate 4 (specific hook) disproved** — the "no incumbent combines payout % + review + specs" claim from
  scout is false: KakaMeme already synthesizes the cross-platform monetization comparison in prose, fresh
  (5 Jul 2026), and ships a companion multi-channel "make money with AI stickers" guide.
- **Gate 6 (US-market) undercut** — the only channel that pays sticker creators a real revenue share (LINE)
  is Japan/Taiwan/Thailand-centric; the payout comparison is not a US-relevant decision. iMessage/Play sell
  sticker *apps* (dev revenue share), not a creator sticker market; WhatsApp has no store.
- **Demand weak** — US "sell sticker packs" intent is overwhelmingly physical stickers (POD/Etsy), not
  digital messaging monetization.

## Dead ends / inconclusive

- Google Trends — not fetched (endpoint blocked headlessly in this repo's prior runs). Seasonality `unknown`.
- Reddit direct — bot-challenged (per niche access-ladder note); demand read from autocomplete + HN + SERP.
- Some `fanout.py` requests returned connection resets mid-batch (rate limiting); enough suggestions
  returned to read the intent split clearly.

## End of run

Dossier written; `idea.md` advanced to `rejected` with dated History; board regenerated. No winner picked.
Validated count in niche unchanged (0) — no comparison brief triggered.
