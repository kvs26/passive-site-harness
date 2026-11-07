# Writing standard

Audience: any reader, including someone who has never played. Tone: a very good teacher.

- Very easy English. Short sentences, common words, one idea per sentence. Define each game term once (glossary) and link to it. Prefer "you" and concrete game moments.
- Write tactics so the reader can picture a situation from their own past games and see why it went well or badly.
- Every tactic has the five parts (see `source-format.md`). "When it fails" must be real, not a token caveat.
- Rules statements must match the publisher's rulebook for the stated edition. Strategy comes from many sources (YouTube first, then BGG, Reddit, articles, community sites, digital tutorials). Where players disagree, say so naturally ("some players prefer..."). Do not credit tactics inline to specific videos/posts, do not add per-tactic evidence labels, do not invent quotes, success rates, timestamps or personal playtesting.
- Last resort when sources lack tactics: derive them from the rules, and say once on `how-to-read` that some tactics are our own analysis. Never claim human playtesting.
- All wording and diagrams are original. No reproduced rulebook/article text, no publisher art. A citation is not a licence to copy. Check for copied phrasing before finishing.
- Tiers: each stands alone and states what it assumes. Nothing repeats across tiers; shared rules and terms live in the quick reference/glossary and are linked.
  - Tier 2 beginner = avoid common mistakes. Tier 3 intermediate = plan across a whole game. Tier 4 advanced = read opponents, trade-offs, edge cases.
- Tier 1 includes one original worked example (a dry run of a sample turn). Re-derive it independently (by hand and, where it can be coded, by script) before it ships.
- Quality gates (AI side): rules vs rulebook, worked example re-derived, probability/rule claims computed (`scripts/probability.mjs` or a script in `checks/`), trade-offs supported or flagged as our analysis, easy-English pass, copied-phrasing pass. Then the owner reads the whole guide. No external expert review is required.
- Format reminders: US Letter, readable in black and white (do not rely on colour alone), URLs are printed next to links, page numbers on every page after the cover.
