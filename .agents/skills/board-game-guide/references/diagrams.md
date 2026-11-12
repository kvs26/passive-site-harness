# Diagrams: when, what and how

Readers who have never played cannot picture a board from words. A diagram goes wherever the reader would otherwise have to build a picture in their head. This file applies to every game.

## The floor (lint enforces it)

- Every H2 chapter in tiers 1-4 has at least one diagram. `build.mjs` fails otherwise.
- Every diagram has a caption: one full sentence saying **what to notice**, not a label. "Middle totals come up most", not "Dice odds".
- Every SVG has an `aria-label` saying what it shows, e.g. "Pawn on tree 1; moving to tree 4 is marked good". Make it under ~155 characters and don't start it with "Image of".
- `check.mjs` fails if diagram text renders smaller than 7.5pt once it is scaled to the column.

Above the floor, aim for these amounts:
- **Tier 1:** about one diagram per page.
- **Tiers 2-4:** one diagram per tactic where position, timing or a comparison matters. These are most of them.
- **Quick reference:** one cost/recipe or turn card.

## Plan before drawing

While writing a chapter, list its diagrams in `research/notes/diagram-plan.md`. For each one, record:
- the chapter or tactic,
- the one point it makes,
- its type (see below),
- what is drawn in **focus** and what is **muted** context.

If you can't name the one point, skip that diagram. Draw a diagram when the text says any of these:
- where something goes
- which space or piece
- before / after
- this one vs that one
- how often
- in what order
- how the score adds up

Don't draw anything the text already makes obvious.

## Diagram types (pick by what the reader must see)

| Type | Teaches | Tiers | Kit pieces |
|---|---|---|---|
| Component legend | The name of each piece, using the same word as the text | 1 | `piece`, `token`, `card`, `legend` |
| Setup layout | Where everything starts; numbered callouts match the numbered setup steps | 1 | `hexGrid`/`grid`, `callout` |
| Turn-flow strip | Phase order (the rule players forget most) | 1, quick ref | `flow` |
| Card / board anatomy | What each region of a card or player board means | 1 | `card`, `callout`, `text` |
| Cost / recipe card | What each build or action costs | 1, quick ref | `card` |
| Worked-example panels | A real turn shown as 2-4 panels at the same scale: before, choice, after | 1, 2 | `panel` + board pieces |
| Good vs bad | Two options side by side, with a check and a cross | 2, 3 | `mark`, `arrow`, `panel` |
| Annotated board snippet | One plan, threat or block: a crop of the board with arrows and the key space in focus | 2, 3, 4 | `hexGrid`/`grid`, `arrow`, `piece`, `edge` |
| Odds / frequency chart | How often things happen, with every bar labelled | 2, 3 | `bars` (values computed in code) |
| Game-arc timeline | What to do early, mid and late game | 3 | `flow` or `panel` row |
| Scoring breakdown | Where the winning points come from (one route to the win shown as blocks) | 3, 4 | `bars`, `card`, `text` |
| Decision tree | "If X, do A; else B". Three or four nodes at most | 3, 4 | `rect`, `arrow`, `text` |
| Edge-case example | The tricky interaction people argue about. The rule is still stated in the text, never only in the picture | 1, 4 | snippet + caption |

## How to draw (teacher rules)

1. **One point per diagram.** Crop to the part of the board that matters (3-7 hexes or squares, not the whole map).
2. **Focus vs context.** The one thing that matters uses `tone: 'focus'` (accent tint and a thick outline). Surrounding context uses `'muted'` or `'plain'`. Use `'ghost'` (dashed) for "possible" or "not there yet".
3. **Show the reasoning.** Arrows show the move or plan: solid for what happens, dashed for an option or threat. Use a check for the right choice and a cross for the wrong one.
4. **Numbered callouts** (`callout`) match numbered steps in the text or caption. Never put long notes inside the picture. Labels inside are 1-3 word fragments in sentence case.
5. **Ownership never relies on colour.** Players are told apart by fill style: a = solid, b = white outline, c = hatched, d = dotted. Name them in the caption ("you = solid, rival = white").
6. **Small multiples.** Sequences and comparisons are panels drawn at the same scale. Change only what changes between panels.
7. **Same word, same icon.** A piece looks the same and has the same name in every diagram, in the glossary and in the text.
8. **Teach in play order.** A diagram never shows a component or rule the reader has not met yet in that tier. Link to the glossary if needed.
9. **Integrate, don't duplicate.** The text says why; the diagram shows where. Don't repeat the paragraph inside the picture.
10. **Place it next to the words.** Put the diagram right after the sentence that introduces it. In a tactic, that is usually directly after **Example.** Introduce it in the text: "The diagram below shows..." Never write "see above" or refer to another page.
11. **Numbers come from code.** Odds, counts and costs in a chart are computed in the diagram module (or by `scripts/probability.mjs`), never typed by hand.
12. **No decoration.** No textures, shadows, flavour art or 3D. Every mark carries meaning.
13. **Original only.** Draw from scratch. No traced publisher art, card images, board scans or icons. Use generic shapes (hex, square, disc, house, pawn, cube, card) and plain-text labels.

## Colour

All colours come from the cover, and each colour has **one fixed job** in every diagram. That is what makes the diagrams look standardised.

| Role | Set in `guide.json` | Pick from the cover | Used for (kit tone) |
|---|---|---|---|
| Base | `accent` | the guide's main colour: a bold cover colour the owner picks (not the background) | title bands, callouts, arrows, the one focus item (`'focus'`) |
| Good | `palette.good` | a calm/natural colour | right choice, allowed, open: check mark, `'good'` tone |
| Bad | `palette.bad` | a warm/warning colour | wrong choice, blocked, threat: cross mark, `'bad'` tone |
| Gain | `palette.gain` | a bright highlight colour | resources, cards and points (the "stuff" of the game), `'gain'` tone |

- Ink and greys do everything else (context = `'muted'`/`'plain'`).
- **Pick them:** `node scripts/cover-colors.mjs <guide-dir>` lists the cover's main colours. Ask the owner which one is the base; the other three roles are supporting colours from the rest of the list, clearly different from the base and each other. The build darkens any colour for text and makes the light tints itself.
- **Same job, same colour.** Never use a role colour for anything else (no "bad" brick for a brick hex). Comparison panels use good vs bad the same way every time.
- **Every diagram shows colour:** at least one focus item, a good/bad pair, or gain. A diagram that is only grey is not finished.
- Use the fewest roles that make the point (usually 1-2 per diagram). No new colours outside these four.
- Custom shapes in a guide's own diagram files use `kit.style(tone)` so they stay on the palette; never hard-code a hex.
- The kit writes colours inline, so the free-sample chapter looks the same on the site.
- The headings, tactic labels and heading bar follow `accent`, so the inside matches the cover.
- Everything must still read in black and white (meaning from shape, check/cross, outline, labels): check one page in greyscale.

## How to make one

1. Create `<guide-dir>/diagrams/<name>.mjs`:

   ```js
   // One point: from tree 1 with a 3, the dashed tree beats stopping short.
   export default (kit, meta) => kit.svg({ w: 420, h: 150, label: 'Pawn on tree 1; moving to dashed tree 4 is marked good' },
     kit.token(40, 80, '1'), kit.piece(40, 42, { shape: 'pawn' }), kit.arrow(52, 52, 268, 56, { bend: -0.18 }), kit.mark(300, 26, 'good'));
   ```

2. In the source, put this on its own line, right after the sentence that introduces it:

   ```
   ::diagram <name> | Caption sentence saying what to notice.
   ```

3. Hand-drawn alternatives:
   - `diagrams/<name>.svg` (used by the same directive), or
   - an inline `<figure><svg role="img" aria-label="..."></svg><figcaption>...</figcaption></figure>`.
4. Width:
   - Units are print px. The column is 624px wide.
   - Draw at the size it should print, between 300 and 620 wide.
   - Use font `size` 11 or more.
   - Wide diagrams scale down and can fail the 7.5pt check: draw them narrower, or use bigger text.
5. Kit reference: `scripts/lib/diagram-kit.mjs`.
   - Building blocks: `svg`, `text`, `rect`, `hex`, `hexGrid`, `hexAt`, `hexCorner`, `grid`, `token`, `piece`, `edge`, `arrow`, `callout`, `mark`, `card`, `flow`, `bars`, `panel`, `legend`, `g`.
   - Game-specific shapes (for example a ship or a meeple variant) go in the guide's own diagram file, built from these.
   - Shared helpers for one guide go in `diagrams/_lib.mjs` and are imported by the diagram files. They are never referenced directly from the source.
6. Build, then **look at every diagram on `dist/pages/page-NN.png`**. Check that:
   - arrows don't cross labels,
   - nothing is clipped,
   - the focus is obvious at a glance,
   - it still reads in greyscale.

## Common mistakes

- Unclear ownership: whose piece is whose.
- Showing the whole board for a three-hex point.
- An example that jumps straight from start to end with no middle state.
- A diagram on a different page from its text. This can happen when the figure doesn't fit; shorten the figure or move the sentence.
- Colour-only meaning.
- Caption is just a label.
- Hand-typed numbers that disagree with the text.
- A diagram that uses a rule or piece not yet taught.
- Decoration.

Sources behind these rules:
- Mayer, multimedia learning principles (coherence, signalling, spatial contiguity, segmenting, pre-training).
- Sweller and Renkl on worked examples and the split-attention effect.
- Tufte on small multiples and data-ink.
- Google developer style guide on images and captions.
- WCAG 1.4.1, "Use of color".
- Bret Victor, "Ladder of Abstraction".
- Rulebook-design write-ups: Resonym ("Writing rulebooks"), Neutronium Games, the Rulebook Project on examples, and a write-up of Paul Grogan's "Gaming Rules!" teaching method.
- ChessBase on annotated diagrams.
