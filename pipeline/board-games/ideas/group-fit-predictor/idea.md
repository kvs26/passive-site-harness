# Group-Fit Predictor

Status: rejected
Origin: ../../runs/2026-09-18-scout.md

## Idea

A per-game "will this land with my group?" predictor: enter the specific game you're eyeing plus your group (player count, ages, experience level, appetite for complexity/conflict/length) and get a fit verdict with the specific caveat ("great at 4, drags at 2"; "the farmer rule will trip up new players first game").

## Edge

- **Dataset:** per-game fit attributes — player-count sweet spot (not just the box range), true teach difficulty, first-game traps, conflict/negotiation level, downtime, age-vs-BGG-suggested-age gap — built by **merging** BGG weight/age/player-count-poll data + review consensus + the recurring "who is this NOT for" notes, with **per-row editorial judgment** (BGG's own age/weight fields are widely called unreliable — the correction *is* the moat).
- **Compute:** multi-input calculator on the user's own group — maps their inputs against the game's attributes to a fit score + the single most relevant caveat. Top-of-ranking AIO-resistant shape.
- **Long-tail surface:** one page per game (`/wingspan/is-it-right-for-my-group`), plus per-constraint combos (game × "2 players", game × "with kids") — thousands of pages.
- **Monetization route:** affiliate — Amazon Associates (US), Toys & Games. Pre-purchase intent ("is X right for us" precedes buying X). Exact rate `unknown`, verify at validate. Documented-only; checkout is a manual per-site act.

## Hook

The catalog finders tell you *what to buy* from scratch; nothing takes a specific game you're already considering + your actual group and predicts whether it'll land — the reverse, higher-intent question.

## Incumbent probe

Dated 2026-09-18. Queries: `board game finder by player count play time age`; `"board game finder" filter by player count complexity`; `what to play from my own board game collection tonight picker tool shelf`. Top hits: **Find Me a Boardgame**, **Board Game Finder Quiz**, **The Dice Drop "What Board Game Should I Play?"**, **Game Guru app**, a fresh r/SideProject build ("I made a board game finder: filter BGG's top...", ~20h old at probe) — all **catalog finders** (surface games to buy from a global list). Confirmed gap: none is a *reverse* per-game fit predictor for a game the user already has in mind. Pain: Facebook/BGG-group thread "Is there a way to filter the games you own for things like player count, suggested age range, complexity/difficulty" (10+ comments, people building spreadsheets); Reddit "Is there any website to tell you the best game for X..." (17 posts). SERP evidence expires ~2026-10-16.

## AIO probe

Predict-from-form only (manual checkpoint owed). Head queries are multi-word, per-input ("is [game] good for 2 players and a 9 year old") — a multi-input judgment an AIO can only answer generically, and the per-game caveat set is the wedge. Assessed low–moderate AIO risk; confirm at validate.

## Gate results

- **1 AIO:** pass (multi-input calculator shape). Manual checkpoint owed.
- **2 Static feasibility:** pass — client-side compute over a curated dataset.
- **3 Data moat:** pass — merges BGG polls + review consensus + editorial correction of unreliable age/weight fields; periodic upkeep within cap.
- **4 Hook served:** pass — reverse of catalog finders; the "already have a game in mind" fit question is unserved (see probe).
- **5 Legal/policy:** pass.
- **6 US-market:** pass.
- **7 Monetization:** pass via **affiliate** (Amazon Toys & Games, pre-purchase intent). Exact rate to verify.

## Evidence

- Facebook/BoardGameGeek group SERP result 2026-09-18: "Is there a way to filter the games you own for things like player count, suggest age range, complexity/difficulty, etc? I've got WAY too many board..." (10+ comments; top answer: "I also made a custom spreadsheet for my 300+ games to be able to quickly filter...").
- Google SERP 2026-09-18: catalog finders Find Me a Boardgame, The Dice Drop "What Board Game Should I Play?", Game Guru app; Reddit "Is there any website to tell you the best game for X..." (17 posts); "What app randomizes board game selection from a [collection]".
- SE `boardgames` teach-trap corroboration: q/18944 "Can you play a new player game of Carcassonne w/o farms?" (per-game first-game trap that a fit caveat would surface).
- Amazon Associates Toys & Games rate: `unknown` (verify at validate).

## History

- 2026-09-18 — candidate (emitted by scout run, deeper re-dig pass)
- 2026-09-18 — rejected: gate 1 disproved on validation. Google AI Overview fully answers the multi-input head queries this idea would compute — verified across 4 independently varied live queries (1–4 stacked constraints, 4 different games), each returning a full verdict plus the specific per-game caveat (and twice, unprompted alternative-game recommendations), with no compute wedge left. See [dossier](dossier.md) · [run](../../runs/2026-09-18-validate-group-fit-predictor.md).
