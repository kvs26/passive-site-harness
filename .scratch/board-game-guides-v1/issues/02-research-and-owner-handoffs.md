# Define trustworthy research and owner-assisted source access

Type: grilling
Label: wayfinder:grilling
Status: resolved
Blocked by: 01

## Question

How should the skill turn accessible rules, videos and community strategy discussions into a useful guide, and keep the owner involved whenever source access or evidence is insufficient?

Use the agreed product scope; resolve this discussion with the owner one question at a time. Inspect actual available tools and sources as necessary, rather than promising access or making tool names up.

Cover within this discussion:

- Evidence availability gate before selecting/committing to a game: official rules/errata for the exact edition and enough substantive strategy material for the promised sections. A thin source set should lead to a narrowed scope, owner help or another game, not padded tactics.
- Research route: web search and direct source reading; browser/Playwright for relevant dynamic pages and visual examples; actual video/transcript access where supported. Search snippets and video titles are leads, not evidence that the content was read.
- Official rules establish rules. YouTube, BGG and Reddit can support strategy, with author/context, relevant page or timestamp, player count, edition and disagreements recorded. Trace repeated claims to their original source rather than counting reposts as independent agreement.
- Source log and claim-to-source mapping; distinguish rules, sourced advice, disputed advice, and our illustrative examples/inferences. No invented quotes, citations, timestamps, success rates or claims of personal playtesting.
- Access fallback: after a reasonable direct/browser attempt, give the exact URL, what failed, the needed section/timestamp and why it matters. Ask for the transcript, screenshots or pasted excerpt. A screenshot of text is not a substitute for an inaccessible video's entire contents. Read supplied material, request missing context if needed, and attribute it to the original URL plus owner-supplied evidence.
- Continue independent work while waiting. Mark only dependent sections as blocked; don't silently substitute guesses or loop indefinitely on inaccessible resources. Keep owner updates concise and regular, including findings, gaps and next step.
- Original explanations and diagrams, source attribution and handling third-party excerpts/assets. A citation is not a license to reproduce entire articles or rulebooks.
- Quality checks feasible with AI assistance and the owner's experience: consistency with official rules, independently checked worked examples, supported strategic trade-offs, practical walkthroughs where available, and transparent limits. Agree what actually requires owner input without making external expert review mandatory by default.

## Completion

Record the evidence gate, research/access fallback, owner interaction checkpoints, attribution standard and quality criteria under `## Answer`. Mark resolved and link its gist from the map. These decisions feed the skill implementation.

## Answer

Resolved 2026-11-07 with the owner.

**Evidence gate**: none. The skill reports source availability in chat; the owner decides. Thin sources are a skill-quality issue, not a gate.

**Research route**
- Publisher's official rules/errata first. If unavailable, YouTube how-to-play.
- Strategy: review many places, mainly YouTube, supplemented by BGG, Reddit and articles. Official rules decide rules; others inform strategy.
- Titles and snippets are leads only. Never claim an unread source was reviewed. Trace repeated claims to their origin; reposts are not independent agreement.
- YouTube is the primary strategy source. The skill may widen beyond the named sources when coverage is thin: BGG forums and strategy articles; Reddit (r/boardgames, game-specific subs); game-specific community sites and wikis; board game review/strategy sites and blogs; publisher/designer blogs and interviews; digital-version tutorials and strategy pages (e.g. Board Game Arena); tournament or competitive-community write-ups. Each must be actually read and logged; unreachable sites follow the access fallback.
- Last resort when sources lack tactics: the model derives tactics from rules and basic tactics, optionally with sub-agents simulating games. No claims of human playtesting or invented success rates.

**Video access fallback**: tool transcript, then browser transcript panel, then ask the owner to paste the transcript for an exact URL and timestamp, saying what question it answers.

**Owner checkpoints** (short chat updates): after the source sweep; whenever a source is unreadable; before drafting, flag thin tiers. Blocked sections wait; other work continues.

**Attribution**: no per-tactic evidence labels and no inline credit to specific videos/posts (supersedes ticket 01's per-tactic evidence level). Disputed advice is phrased naturally ("some players prefer..."). One general how-to-read note says some tactics are our own analysis. An internal source log maps claims to sources; the guide ends with a general sources list. All wording and diagrams are original; no reproduced rulebook/article text or publisher art; no invented quotes or citations.

**Quality checks (AI-side)**: verify rule statements against the official rulebook; independently re-derive worked examples; check trade-offs are supported or our own reasoning; check for copied phrasing and easy English. The owner then reads the whole guide. No mandatory external expert review.

**Parallel work**: the skill may use sub-agents for independent tasks (source sweeps, worked-example checks, simulation).

## Comments

2026-11-07: Owner answered (evidence gate): no hard gate. Order of sources: publisher's official rules first; if unavailable, YouTube how-to-play. Review many places, YouTube mainly, supplemented by BGG, Reddit, articles. The skill reports source availability in chat and the owner decides. Thin sources are treated as a skill-quality issue, not a gate. Last resort for tactics: the model derives new ones from rules + basic tactics, optionally with multiple sub-agents simulating gameplay; these must be labelled "our own reasoning". Video access: owner agreed order = tool transcript, then browser transcript panel, then owner pastes transcript for exact URL/timestamp; never claim an unread video was reviewed.

2026-11-07: Owner answered (attribution): the guide text does NOT repeat evidence labels on each tactic and does NOT credit tactics to specific videos/posts inline (reputation risk). This supersedes the per-tactic "evidence level" in ticket 01's answer. Sources stay in an internal log and a general sources list at the end.

2026-11-07: Owner agreed: general sources list at the end (main sources consulted, not tied to individual tactics).

2026-11-07: Owner agreed owner-update checkpoints: (1) after source sweep, (2) whenever a source is unreadable (exact URL, timestamp, what to send), (3) before drafting, flag thin tiers. Blocked sections wait; other work continues.

