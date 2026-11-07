# Choose the guide's scope, teaching structure and first game

Type: grilling
Label: wayfinder:grilling
Status: resolved

## Question

What exactly does a buyer receive, and how should the PDF teach basic gameplay, beginner tactics and advanced tactics while handling expansions coherently?

Work with the owner one decision at a time. The owner has chosen base-game-first packaging below; do not reopen that decision or unrelated business models.

Cover within this discussion:

- Base-only, selected expansions, or all well-supported expansions; separate supplements versus one volume, and whether a later bundle is useful.
- Intended reader, edition/language/player-count boundaries, and first game chosen from accessible evidence and owner familiarity (CATAN and Ticket to Ride are candidates, not settled choices).
- Chapter sequence and depth: basic setup/objective/turn flow and a worked example; beginner tactics/common mistakes; advanced tactics with conditions, trade-offs and concrete positions; quick reference; sources/version notes. This outline is a proposal, not a required final template.
- For included expansions: prerequisite scope, changes to rules and strategy, and handling combinations without pretending every combination was researched.
- Reading/printing format, diagrams, navigation, expected depth rather than filler page counts, and what complete sample content the separate preview exposes.
- What would make the guide useful beyond a rewritten rulebook, and what the owner will actually check before calling the pilot ready.

## Completion

Record the agreed product scope, reusable PDF outline, pilot game/edition and preview boundaries under `## Answer`; mark resolved and add a linked gist to the map. Leave unanswered decisions explicit. If terminology is settled, maintain the root glossary through domain-modeling without turning it into a spec.

## Answer

Resolved 2026-11-07 with the owner.

**Product scope**
- Base-game guide first. Expansion supplements are separate, later products, each researched for its own scope; bundling is undecided. This map covers only the base-game guide.
- Pilot game: CATAN. The skill and outline must be game-agnostic; CATAN is only the proof.
- Version: the latest version of each game only (the publisher's current in-print edition at research time, with check date and source recorded). The version is stated on the cover. Older editions are not covered.
- Language: English. Player count: whatever the base game supports (3-4 for CATAN). Anything excluded (older editions, other player counts, expansions) is listed at the end under "what is not covered".
- Reader: no single persona. The tiers and clickable contents let a new player start at the beginning and a competitive player jump to advanced tactics.

**Reusable PDF outline (page order)**
1. Cover - professional, designed cover for every guide, showing the game and version.
2. Contents - clickable links to each section.
3. How to read this guide / what to expect.
4. Tier 1: How to play (setup, objective, turn flow, one original worked example). Tier 2: Beginner tactics. Tier 3: Intermediate tactics. Tier 4: Advanced tactics.
5. Quick reference and glossary.
6. Sources and version notes.
7. What is not covered.

- Each tier stands alone: it states what it assumes at the top and links to the glossary/quick reference. Nothing is repeated across tiers; terms and rules are defined once and linked.
- Tier boundaries are defined by what the reader can already do (beginner = avoid common mistakes; intermediate = plan across a whole game; advanced = read opponents, trade-offs, edge cases).
- Tier 1 includes one original worked example (a dry run of a sample turn). Owner confirmed 2026-11-07.

**What makes it more than a rewritten rulebook**
- Every tactic has: why it works, when it applies and when it fails or has trade-offs, a concrete example, a common mistake and fix, and an evidence level (widely agreed / disputed / our own reasoning). Unsupported claims are not stated as fact. All wording is original.
- Writing standard: tactics let the reader picture their own past game situations and learn from them; very easy English any reader can follow; the tone of a very good teacher.

**Format**
- One screen-first portrait PDF with working internal links, US Letter, prints cleanly on a home printer and reads in black and white, page numbers on every page, original self-drawn diagrams (no publisher art), designed colour cover.

**Preview**
- The public preview is an HTML page (not a PDF), produced from the same source as the PDF and kept separate from the full PDF.
- Content: cover, contents, how-to-read, one complete beginner-tier tactics chapter, and a pointer to the full guide. The how-to-play tier is not in the preview.
- Download, email and hosting for the preview and the full PDF are not decided here and stay out of scope for this map.

**Owner's pilot check**
- The owner will read the whole guide personally before calling the pilot ready. No further owner checklist was set; AI-side quality checks are settled in the research ticket.

**Knock-on updates made**
- Preview wording in the skill-build and first-guide tickets changed from PDF to HTML, and the first-guide ticket now lists the four tiers.
- Glossary terms Guide, Tier and Preview added to the root glossary.

## Comments

2026-11-04: The owner was asked to choose expansion packaging. Recommendation presented: a complete base-game guide first, followed by separately researched supplements. No answer recorded yet.

2026-11-04: Owner answered: "Base-game guide first; expansion supplements later". The initial paid PDF covers the base game only. Expansion supplements are separate later products, researched for their own scope. Bundling and specific expansions have not been decided.

Next discussion: choose the pilot game. CATAN is the proposed starting point because the owner knows it; source sufficiency and exact edition still need to be established. Ticket remains claimed until the remaining scope/structure decisions are resolved with the owner.


2026-11-05: Owner asked to continue. Question put: which game is the pilot? Recommendation: CATAN (owner knows it; catalog record is 6th edition, 3-4 players, per catalog.json). Edition/player-count boundary is the next question. No answer recorded yet.

2026-11-05: Owner answered: "yea lets go with Catan, but the skill needs to work for any game". Pilot game = CATAN. Standing constraint: the skill and reusable PDF outline must be game-agnostic; CATAN is only the proof. Edition/language/player-count boundary still open.

2026-11-07: Owner answered: cover only the latest version of each game; state the version on the cover page; every guide needs a good-looking, professional cover page. Edition rule = latest version only (no older-edition coverage). Cover-page quality is a standing requirement; its design/rendering is for the implementation ticket. Language and player-count boundaries not yet confirmed.

2026-11-07: Owner answered: language = English; player count = whatever the base game supports; a "what is not covered" section goes at the END of the guide (not on a version page); page 1 = cover, page 2 = contents with clickable links to each section. Version/language/player-count boundaries now settled. Intended reader and chapter outline still open.

2026-11-07: Owner answered (intended reader): no single target persona. Tiered structure serves everyone - a new player starts at the first section, a competitive player jumps straight to advanced tactics via the clickable contents. Owner now lists the tiers as: how to play, beginner, intermediate, advanced tactics (intermediate is new vs. the earlier three-part proposal). Open: confirm the exact tier list and whether each tier stands alone.

2026-11-07: Owner agreed: four tiers (how to play, beginner, intermediate, advanced tactics), each standing alone with a stated assumption at the top; quick reference and glossary after the tactics; sources/version notes, then "what is not covered", at the end. No repetition across tiers - shared terms/rules live in the glossary/quick reference and are linked. Owner adds: page 3 = "how to read this guide / what to expect". Page order so far: 1 cover, 2 clickable contents, 3 how to read, then the four tiers, quick reference + glossary, sources/version notes, not covered. Open: reading/printing format, diagrams, worked example, preview boundary, what makes it beyond a rewritten rulebook, owner pilot checks.

2026-11-07: Owner clarified: the advanced tier does NOT repeat earlier content (terms/rules are defined once and linked). Owner agreed preview = cover, contents and how-to-read pages plus one complete beginner-tier tactics chapter, ending with a pointer to the full guide; the how-to-play tier is not in the preview. Open: reading/printing format, diagrams, worked example, what makes it more than a rewritten rulebook, owner pilot checks.

2026-11-07: Owner agreed format: screen-first portrait PDF, working internal links, prints cleanly on a home printer, US Letter, readable in black and white, page numbers on every page, original self-drawn diagrams (no publisher art), designed colour cover. Owner raised how the preview and full guide are delivered (HTML preview page + PDF download, or email). Explained: delivery/site presentation is out of scope for this map (see map Out of scope); this ticket only fixes the files. Pending owner confirmation: preview = a separate standalone PDF; HTML page/download/email decided later.

2026-11-07: Owner answered: the public preview is an HTML page, not a PDF; delivery of both (download, email, hosting) decided later. Preview content as previously agreed (cover, contents, how-to-read, one complete beginner-tier tactics chapter, pointer to full guide) expressed as a self-contained HTML page produced from the same source as the PDF, kept separate from the full PDF. Owner reconfirmed the reading/printing format. Open: worked example, what makes it more than a rewritten rulebook, owner pilot checks.

2026-11-07: Owner agreed each tactic has why / when it applies and fails / example / common mistake / evidence level / own wording. Owner adds writing standard: tactics are written so readers can picture their own past game situations and learn from them; very easy English understandable by any kind of reader; tone of a very good teacher. Owner asked whether download/email/hosting is covered by ticket 02: it is not (02 = research/owner handoffs, 03 = skill build, 04 = first guide); delivery stays in the map Out of scope. Ticket 03 acceptance criteria still say "separate preview PDF" and must be updated to HTML preview when this ticket resolves. Open: worked example, owner pilot checks.
