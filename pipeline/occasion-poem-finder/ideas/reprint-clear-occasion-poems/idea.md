# Reprint-clear occasion poems

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

A per-poem copyright-status directory of popular funeral/wedding/memorial poems for people printing them on a program, order-of-service, or card: each poem flagged public-domain / reprintable vs still under copyright, with safe public-domain alternatives when the one they want is protected.

## Hook

Families and program printers routinely reprint still-copyrighted poems (Auden's "Funeral Blues", Frye's "Do Not Stand at My Grave") and infringe; no incumbent gives a per-poem "safe to print?" flag with a public-domain swap — the copyright-status metadata is the moat, not the poem text.

## Gate results

- Answer-it: PASS — per-poem reprint status + a curated safe-swap list across many poems isn't one reliable LLM answer (models hallucinate copyright status).
- Static feasibility: PASS — static poem + status dataset, client-side filter.
- Unmaintainable data: PASS — public-domain status is near-static (changes ~annually on Jan 1 public-domain day); quarterly-plus stable.
- No specific hook: PASS — reprint-status + safe-swap is distinct from every poem-text listicle.
- Legal/policy: NEAR-MISS (gate 5) — must present *public-domain facts* ("published before 1929" / "in the public domain") and avoid giving legal advice; frame as informational, cite sources. Marked weak.
- US-market: PASS — US copyright terms; US funerals/weddings.

## Evidence

- Demand (autocomplete/SERP suggestions, this run): "printing poems without copyright", "printing poems without permission", "can I share a poem if it is copyrighted".
- Fragmented incumbents (Bing, this run): funeralverses.com ("a collection of funeral poems that are in the public domain or free to use") = a static collection, no per-poem status flags; messengerstationery.com "Poems, Printing, and Permission" = awareness blog, not a tool; poets.org / poetrysoup public-domain collections = general, not occasion-scoped, no reprint verdict.
- Volume/CPC: `unknown` (no Keyword Planner CSV this run).

## History

- 2026-08-29 — candidate (emitted by scout run), marked weak (gate-5 near-miss: state PD facts, not legal advice; unique-data moat)
- 2026-08-29 — rejected on validation (medium confidence): scout unique-data moat disproven. funeralverses.com (maintained © 2026) already ships the exact hook — per-poem "Public domain" status labels across its funeral-poem collection, dedicated in-copyright pages for the flagship examples this idea named (Auden "Funeral Blues", Linda Ellis "The Dash") that withhold the text and recommend public-domain safe-swaps, plus collection-level "you can print it in a program... without asking anyone's permission" and per-poem "Can I print this in an order of service?" FAQs. Demand/pain real (Alzheimer's forum, JustAnswer ×2, Elegant Memorials, messengerstationery) and feasibility strong, but SERP-weakness + unique-data collapse. Dossier kept as the record. (dossier.md · ../../runs/2026-08-29-validate-reprint-clear-occasion-poems.md)
