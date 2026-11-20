# Social Studio design playbook

Read at batch step "Hook sheet" and "Concept cards". It replaces the old "pick one style per 2 weeks" model. Method adapted from the `social-media-skills` repo (hook-writer, carousel-writer, pinterest-pin-design, thumbnail-design, quote-cards-and-text-graphics, infographic-and-data-viz, viral-reverse-engineering), rewritten for our renderer.

## Why the old batch failed (measured, 2026-11-16-01)

- 13 of 13 pins shared one dominant colour (the renderer's sameness check now flags this). Same envelope, same red border, same corner badge: the feed read as one post.
- Hooks were labels ("Carcassonne: start with Inns & Cathedrals"), not gaps. Nothing made a stranger need the next beat.
- No focal object. Pins were a headline plus a bullet list; carousel slides carried 50 to 70 words each.
- The circular call-to-action badge sat in the bottom-right, where Pinterest overlays its own icons.

## The unit of work is one post, not one template

Every post gets a **Concept card** before any HTML. The kit supplies only constants (below). Layout, palette, type pairing, object and motif are chosen per post.

### Constants (the only things shared across posts)
1. Wordmark `whichexpansion.com`, small, in the same corner family on every post (top-left or bottom-left; never Pinterest bottom-right).
2. The meeple mark, recoloured per post, optional.
3. Voice: plain, specific, no sales language.
4. Safe zones and size floors (lint-enforced).
5. A **palette bank** of 10 to 14 approved colours and a **font bank** of 6 to 8 approved pairings, both in `style-kit/kit.json`. A post picks one palette (3 to 4 colours) and one pairing. No two posts in a batch use the same palette+pairing.

### Concept card (one per post, 6 lines, goes in `plan.md`)
```
HOOK:        the exact on-image headline (<= 8 words) + the mechanism it uses
PROMISE:     what the stranger gets by tapping/swiping (one sentence, true)
FOCAL OBJECT: the one thing the eye lands on (giant numeral, drawn dice, 3D tile, split duel, diagram...)
GAME MOTIF:  how the design represents this game (its setting, mood, mechanism; own drawn parts, never publisher art)
ARCHETYPE:   from the library below (no repeats in a batch unless the content differs; >2 repeats never)
PALETTE+TYPE: bank picks, with the contrast pair for the headline
FEED CHECK:  what it looks like at 236px wide, in one sentence
```

## Hooks (do this before design)

Write 8 candidate hooks per post across different mechanisms; score 0 to 2 on Gap, Specificity, Truth, Fit, Voice, Pull. **Truth and Pull are pass/fail.** Keep the winner; keep the runner-up as the alt for a fresh-pin variant of the same page. Put them in the Hook sheet table in `plan.md` (post, 8 hooks, pick, mechanism).

Mechanisms that work for board games (all facts must be real and sourced):

| Mechanism | Shape | Example direction (verify facts first) |
|---|---|---|
| Specific number | an exact figure from a source | "6 and 8 are not the same chance" / "Only 5 of 36 rolls pay a 6" |
| Mistake | the error most new owners make | "You're buying the wrong CATAN box for 6 players" |
| Contrarian | a defensible take against the habit | "Skip the base-game strategy guide. Read the setup first." |
| Identity / callout | name the exact owner | "If you own Wingspan and nothing else, read this" |
| Stakes / cost | money or table time at risk | "$25 box that does nothing without the other $55 box" |
| Duel / this-or-that | two real options, one verdict | "Rise of Ix or Immortality first?" with a visible pick |
| Gift moment | seasonal buying trigger | "Don't gift this expansion until you check 1 thing" |
| Curiosity (earned) | withhold a payoff the post delivers | "The most common roll pays nobody" |
| Order / list | a ranked, honest sequence | "Buy Everdell's 5 expansions in this order" |
| Question | a question the owner answers in their head | "Which of your 4 boxes can't be mixed?" |

Kill on sight: greetings, "In this post", describing the asset, vague "you won't believe", labels ("Carcassonne: our pick #1"), giving away the payoff in the headline.

**Pinterest titles** keep their own rule (main search phrase in the first 40 chars). The on-image hook and the pin title are different lines: the image carries the hook, the title carries the keyword. On-image text still contains the keyword somewhere (OCR reads it).

## Thumbnail rules (pins and carousel covers)

Pins show about 236px wide in a two-column feed. Instagram grid tiles show about 130px wide. Design the thumbnail, then add detail.

1. One focal object, one hook, nothing else competes. Everything else drops to a quiet tier.
2. Hook: at most 8 words (lint), at least 110px on a 1000px pin and 100px on a 1080px cover (lint), bold weight, heavy contrast (black on cream, cream on ink; test in greyscale).
3. A pin carries at most 18 visible words including the wordmark (lint). Detail moves to the landing page or to carousel slides.
4. Use the full height. No dead bars, no centred small card on a coloured field.
5. Contrast between neighbours: adjacent tiles in the feed must differ in dominant colour and composition. Sameness check: max 3 pins per dominant colour bucket, max 2 IG covers.
6. Faces are not needed. The object is the hero (dice, tile, box silhouette, meeple, number).
7. Pinterest: nothing in the bottom-right 20% x 10% (lint). Nothing critical in the bottom 12%.
8. Covers promise the swipe: hook + arrow or "1 of N" cue, no slow build.

## Carousel craft (Instagram)

- 6 to 10 slides. The idea sets the count. Slide 1 = the thumbnail rules above.
- Each slide: one headline (<= 12 words) + at most one support block. Body slides budget: 45 visible words (lint), type >= 38px body, >= 26px for any visible text (lint). Move footnotes and prices into `[data-fine]` elements.
- Information is carried by pictures, not paragraphs: a table of dice pips, a two-column duel, a numbered receipt, a flowchart, a scoresheet, an annotated drawing. If a slide is mostly sentences, split it or draw it.
- Every slide is its own poster: different composition from the one before (same palette and type across one carousel, different layout per slide). Never the same box repeated 8 times.
- Slide numbers "3/8" in one consistent corner; a forward pull on the slide before the payoff.
- Last slide: payoff recap, then one save or send line ("Save this for game night", "Send to whoever owns it"). Link-in-bio.

## Archetype library (compositions, not templates)

Draw each fresh for the post. The point is variety of structure, not reuse.

| # | Archetype | Good for |
|---|---|---|
| 1 | Giant numeral (one number fills the pin) | numbers, odds, price, player counts |
| 2 | Dice or pip chart (bars made of dice faces) | probability, roll odds |
| 3 | Duel (two panels, a visible winner) | this-or-that, which first |
| 4 | Receipt or checklist (tear-off strip) | gift checks, what you need to buy |
| 5 | Annotated overhead table (drawn board scene with callouts) | setup, hosting, compatibility |
| 6 | Flowchart / decision tree | which expansion first, "do you need X" |
| 7 | Rulebook page parody (margin notes, diagram, "see page") | mistakes and fixes |
| 8 | Tier list (S to D rows) | rankings, "if you like X" |
| 9 | Chat or DM screenshot (fake thread, clearly stylised) | identity hooks, "send to your friend who..." |
| 10 | Scoresheet or scorepad | strategy scoring, trivia |
| 11 | Box-stack silhouette (generic boxes, named in text) | order, compatibility, "four boxes total" |
| 12 | Timeline strip | editions, nostalgia, history |
| 13 | Poster / big quote (one line, huge, type-led) | contrarian takes, hot opinions |
| 14 | Sticker sheet or index cards | lists of 6, mini-lessons |
| 15 | 3D object hero (Three.js dice, hex tile, meeple) on a flat field | reach posts, hooks about a physical thing |
| 16 | Stamped label / warning tag | compatibility traps |
| 17 | Map or board diagram | placement, "your first two settlements" |
| 18 | Photo or AI-image hero with a type band | owner's photos, stylised AI scenes |

Rules: a weekly batch of 7 pins uses 7 different archetypes (no repeats) and the 7 Instagram posts do the same. The archetype and focal object should come from the game (its theme and mechanism), so game motif drives design. A hero object must be drawn in SVG/CSS/Three.js or come from an owner photo or a stylised AI image. Never publisher art.

### Visual vocabulary (build once, reuse as parts, not as layouts)
Generic dice (d6 faces), hex tiles in neutral terrain colours, meeples, cubes, cards (blank backs, rounded), tokens, boxes (plain, with spine text), score pads, rulers, pencils, sticky notes, price tags, tape, stamps, arrows, circles-and-underlines, halftone, grain. Keep them in `style-kit/parts/` as SVG snippets. Parts recur; compositions do not.

## Imagery policy

- Text lives in HTML. Always.
- Stylised AI imagery is allowed for backgrounds and hero objects (generic dice on a table, hex terrain, blurred game-night lighting). Prompts follow the existing image-slot rules; the owner generates in Gemini or ChatGPT; every slot has a CSS/SVG fallback so renders never break.
- Three.js 3D (dice, tiles, meeples, boxes) renders in the existing headless pipeline. Use it for about 1 in 4 posts, never on info slides.
- Owner photos of real tables are the strongest asset. Ask once per batch for 5 to 8 photos; use them as hero images with a type band.
- No publisher art, no card art, no box covers as heroes.

## Pinterest specifics

- Fresh-pin policy (12 Nov 2026): every pin gets its own hook, image and layout. A second pin to the same URL needs a different object, archetype, palette and hook (runner-up hook from the Hook sheet), not a recolour.
- Title: keyword first 40 characters. Description 200 to 400 characters in natural phrases. Keyword also appears on the image.
- Board covers: not part of the batch, but their style follows the palette bank, not a single post.
- Space pins to the same URL by 3 or more days.

## Instagram specifics

- Keyword in the first sentence of the caption (first ~125 characters), plus one question. Alt text describes the image and matches the caption. 3 to 5 hashtags as topic labels.
- Reels: the first frame is the thumbnail. Design the cover frame with the thumbnail rules; the cover must stand alone in the grid.
- Sends beat likes: at least 3 of 8 posts per batch are "send this to someone" posts (identity callout, gift check, "who owns X").
- Stories on non-post days (poll, question box, countdown) with a scoped ask, e.g. "Which Catan expansion did you buy first?". Answer replies publicly and post the result.

## Design critique pass (fresh subagent, Opus, before the owner sees it)

For every post, answer yes/no with one line of evidence, and list fixes:
1. Squint test at 236px: can you read the hook and name the focal object?
2. Does the hook open a gap a stranger would need to close, and does the post pay it off truthfully?
3. Is the layout different from both neighbours in the feed (composition, dominant colour, type)?
4. Is there more than one focal point?
5. Is any text smaller than the floor, or any slide mostly sentences?
6. Is the hook line different from the Pinterest title and caption first line?
7. Is anything critical in the bottom-right (Pinterest) or bottom 35% (reels)?
Also view the contact sheet and the feed test in `preview.html`; if it reads as one campaign template, fail the batch.

## Measuring what changed (so the next batch steers)

`results.md` per post adds three columns: hook mechanism, archetype, dominant colour bucket. At 28+ days, compare saves/sends per mechanism and per archetype, not per post alone. Run one deliberate hook test per batch: two pins of near-equal topics with different mechanisms; log the result. A single winner is noise; look for repeat patterns across 3 batches.
