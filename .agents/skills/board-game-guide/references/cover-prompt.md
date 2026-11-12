# Cover prompt (papercut series style — locked)

Every guide cover uses the same series style: a layered papercut diorama of the game's world in the lower part, a calm navy
sky above it, the title set in that sky in classical serif capitals, and the brand mark small at the bottom. The owner
generates the whole image in ChatGPT; code adds only a tiny edition line (game · version) at the bottom edge.

## Workflow

1. Fill the placeholders below (rules in the next section) and give the owner the finished prompt in one code block.
2. The owner generates it in ChatGPT (portrait), picks the best result, downloads the full file from the download link (not a copy of the chat preview) and saves it as `<guide-dir>/cover/cover.png`. Check it is 3264 x 4224 (`sips -g pixelWidth -g pixelHeight cover.png`); if smaller, ask ChatGPT again for the full-size download.
   (`.jpg`/`.webp` also work). Start a fresh chat after 2–3 edit rounds; edits drift.
3. Build. The PDF uses the image full-bleed and adds "<game> · <version>" at the bottom edge. The site's guide card uses a resized copy of that PDF page 1.
4. Check the image: title and brand spelled exactly, only TITLE, "STRATEGY GUIDE" and BRAND as text, signature shape correct (count the
   sides), no people, nothing that copies the official box art. Reject and regenerate otherwise.

Without `cover/cover.png` the build falls back to the coded pattern cover (fine for drafts, not for release).

## Fixed template

Only `{PLACEHOLDERS}` change. Do not edit any other line.

```
Premium collector's-edition book cover, portrait 8.5:11.
Generate it directly at exactly 3264 x 4224 pixels (4K, print quality), crisp sharp detail, no blur. Do not show a smaller preview: give me the full 3264 x 4224 file as a direct download link.

ARTWORK
Layered papercut diorama of {SCENE}, floating on {BASE}.
Hero detail: {HERO_DETAIL}, softly glowing, at the visual centre.
Real paper fibres, visible layer edges, soft shadows between layers, one warm light source from the left.
Palette: {PALETTE}, plus deep navy #1d2a44 for the sky.
The artwork sits in the lower 65% of the cover. The upper 35% is a calm, plain, dark navy night sky with no objects.
{SHAPE_RULE}

TYPOGRAPHY (in the dark sky, upper area)
- Title "{TITLE}" in elegant classical serif capitals (Trajan-like), cream #fffdf8, medium weight, very wide letter spacing, centred.
- A thin gold #f2b705 hairline rule under the title, about one third of the title's width.
- Under the rule: "STRATEGY GUIDE" in small gold serif capitals, widely spaced.
- At the very bottom centre, over the dark base with a generous margin: "{BRAND}" in small gold #f2b705 capitals, clean modern sans-serif, very wide letter spacing.
- Spell every word exactly as written. No other text anywhere.

RULES
No banner, box or panel behind the text. No drop shadow, glow, bevel or gradient on the text.
No people. No logos. No numbers. Original artwork, not the official box art.
Generous empty margins. Calm, quiet, expensive.
```

## Placeholder rules

| Placeholder | Rule |
|---|---|
| `{BRAND}` | `guide.json` `brand` in capitals (e.g. `WHICH EXPANSION`). |
| `{TITLE}` | Game name in capitals, short form (drop subtitles/editions). Max ~3 words; longer names misspell. |
| `{SCENE}` | The game's world as one small place, 3–6 simple elements (landscapes, buildings, objects of that world). Never game components: no cards, dice, tokens, numbers, boards. No people or creatures that read as people. |
| `{BASE}` | What the scene floats on, in navy/dark tones so it blends with the sky (paper ocean waves, paper clouds, a dark paper table). |
| `{HERO_DETAIL}` | One small focal element with warm light (a lit window, a lantern, a glowing crystal). Exactly one. |
| `{PALETTE}` | 3–4 hex colours taken loosely from the game's own art, plus nothing else; navy is always the sky. |
| `{SHAPE_RULE}` | Only if the game has a signature shape the scene should take, stated with an exact count (e.g. "regular hexagon with exactly six straight sides"). Otherwise leave the line out. |

Inspiration from the official art is fine (setting, palette, mood); copying its composition or characters is not.

## Example (Catan, approved 2026-11-12)

| Placeholder | Value |
|---|---|
| `{BRAND}` | `WHICH EXPANSION` |
| `{TITLE}` | `CATAN` |
| `{SCENE}` | `a small island of forests, rolling hills, wheat fields and pasture, with a few tiny cottages` |
| `{BASE}` | `dark navy paper ocean waves` |
| `{HERO_DETAIL}` | `one cottage with lit windows and a short wooden fence` |
| `{PALETTE}` | `forest green #3e5b3a, wheat gold #d9a441, brick red #a8442f, cream #f3e6c8` |
| `{SHAPE_RULE}` | `The island is a regular hexagon with exactly six straight sides.` |
