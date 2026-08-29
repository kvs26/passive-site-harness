# Validate run — 2026-08-29 — appliance-fit-checker

Idea: [appliance-fit-checker](../ideas/appliance-fit-checker/idea.md) (candidate, weak). One idea, one session.
Origin scout: [2026-08-29-scout](2026-08-29-scout.md). Niche target market: US (default).

**Credentials:** no `.env` → credential-free adapters only. No Keyword Planner CSV for this idea.
**MCP:** brave-search + playwright configured in `.vscode/mcp.json`; used integrated browser for SERP, helper scripts for autocomplete/pain, built-in fetch for competitor deep-dive.

## What was dug

**Demand (pass 1):** autocomplete fan-out on core + doors-off + washer/dryer + counter-depth seeds. Tool intent is explicit in the suggestions ("will my refrigerator fit calculator", "will my fridge fit calculator") and demand is dimension-specific ("will a 27 inch washer fit through a 27 inch door", "will a washer and dryer fit through a 30 inch door"). Pain dig via HN returned only off-topic hits; DDG adapter empty (bot challenge, same as scout). Demand graded **strong** on autocomplete + itemfits' public "98,186 questions answered" counter.

**Keyword Planner checkpoint:** no `keyword-planner.csv`. Because the dig was heading to a hook-based rejection (below), volume/CPC could not rescue it, so no export was requested and the idea is **not** parked. Confidence capped at medium per the no-CSV rule.

**SERP & competitor weakness:** DuckDuckGo Lite SERP for "will my refrigerator fit through the door" (Bing returned junk/personalized results; Google direct-fetch hit a JS challenge). Top-6 = appliancesfirst guide, **meltflexai free calculator (2026-07-12)**, **itemfits.com/fit/door/fridge dedicated calculator**, myhomeniche guide, itemfits measuring blog, GE Appliances official page. Two purpose-built calculators on page one → SERP not beatable.

**Hook depth:** opened itemfits.com, /fit/door, /fit/door/fridge, /fit/appliances, /fit/moving. itemfits is a maintained, purpose-built "will it fit" platform that already ships the exact hook: **per-model appliance fit pages** (Samsung Bespoke / LG Craft Ice / Whirlpool french-door / GE Profile, "check a specific model"), the doors-off (−3–5"), handles, water-line (+2–4"), dolly-height, and turning-radius gotchas the idea claimed were buried in prose, published-standards references (IRC/IBC/ADA), a methodology + formulas page, a "real checks people ran" dataset, and a Chrome/Shopify extension that auto-reads product dimensions from 500+ retailers. Hook graded **weak** — no one-sentence beat remains.

**Monetization:** ad-supported guide competitors confirm a normal display-ad/affiliate vertical, but no CPC data (no CSV) → **weak**.

**Feasibility & maintenance:** re-confirmed buildable/low-maintenance (client-side arithmetic, static installed-base dims) — **strong**, but never the blocker.

**Unique data:** the only real moat (per-model doors-off depth corpus + auto-read dims) is exactly what itemfits is already building — **weak**.

## Dead ends / inconclusive

- DDG pain adapter: empty (bot challenge).
- HN: no on-topic fit complaints.
- Bing SERP via integrated browser: personalized/sign-in junk, unusable.
- Google SERP direct fetch: JS redirect challenge, unusable.
- itemfits per-model pages show *width*, not a doors-off *depth* column — a thin, undefended gap, not enough to overturn the rejection.

## Early-stop decision

Demand is strong, but the gate-4 near-miss the scout flagged ("itemfits.com to inspect at validate") resolved against the idea: itemfits is a real, maintained, per-model appliance fit tool and there is a second calculator (meltflexai) ranking too. Per the demand-first rule, remaining signals were graded from evidence already in hand rather than digging deeper on a served hook.

## Outcome

- Status: candidate (weak) → **rejected** (gate 4 — hook already served by a maintained purpose-built incumbent; SERP carries two calculators + OEM guidance).
- Dossier written at **medium** confidence (no CSV cap; demand evidenced).
- Board regenerated.
- Comparison-brief trigger: home-appliance-lookup has **0** validated ideas → not triggered.
