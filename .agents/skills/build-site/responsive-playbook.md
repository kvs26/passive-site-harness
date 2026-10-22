# Responsive playbook (phone / tablet / laptop)

Learned from the mobile+tablet redesign of `sites/board-game-expansion-buyers-guide/`
(`.scratch/mobile-tablet-redesign/`: spec + tickets 01–03). Site #2 was first built laptop-only and then
needed a full rescue pass; this is how to get it right the first time. Concrete code to copy from:
`src/styles/base.css` (phone/tablet blocks), `src/lib/phone-folds.mjs`, `src/components/Header.astro`,
`src/layouts/Layout.astro`, `tests/breakpoints.test.mjs`, and the game page script
`src/pages/[game]/expansions/index.astro`.

## 1. Principles (most traffic is phone; laptop is already good)

- **Design phone first, then tablet, laptop last.** Laptop (≥1024px) is the baseline that must not
  regress; phone/tablet are *additions* behind media queries.
- **Answer first.** On a phone, verdict + the first 3 ranked/primary items must be visible in the first
  844px (390×844). Everything else is progressive disclosure.
- **Collapse, never remove.** Hide with CSS / `<details>` / JS-added toggles, keep the markup in the
  HTML so SEO, JSON-LD and text-based tests are unaffected.
- **Gate all JS-dependent collapsing on `html.js`** (inline `<script is:inline>` in `<head>` adds the
  class). No-JS phones then get the full, uncollapsed page; JS-only controls (menu button, filter pill,
  fold toggles) are rendered `display:none` by default and shown only under `.js` + phone query.
- **Tap targets ≥44px** (48px for menu links/accordion headers). Use a transparent border or negative
  margin so the *hit area* is 44px while the visible element is smaller and layout stays compact.
- **Body text ≥16px** on phones; small meta labels may be smaller (note it as a conscious exception).
- **No horizontal scrolling tables or overflow.** Convert tables to stacked rows; chip rows that must
  scroll sideways are explicit (`overflow-x:auto`, hidden scrollbar), never accidental.

## 2. One breakpoint scheme, enforced by a test

- Exactly three: **phone `≤767px`**, **tablet `768–1023px`**, **laptop `≥1024px`** (default styles).
  Allowed queries: `(max-width: 767px)`, `(min-width: 768px)`, `(max-width: 1023px)`,
  `(min-width: 1024px)`, and the `min-width:768 and max-width:1023` combo for tablet-only.
- Never leave mixed ad-hoc widths (the template historically had 600/720/760/860/900). When adopting the
  template, **replace its `860/900/720` queries** with these and document them in `tokens.css`
  (custom properties can't be used in `@media`, so they're literals).
- Copy `tests/breakpoints.test.mjs` (scans every `src/` css/astro/mjs/ts file for `min|max-width` values
  and range syntax, also catches `matchMedia(...)` in JS) so a stray width fails CI.
- JS that mirrors CSS uses `matchMedia('(max-width: 767px)')` — same literal; listen to `change`, not
  `resize`. (Needs Safari 14+ `addEventListener` on MediaQueryList; acceptable.)

## 3. Pitfalls that bit us (check these before shipping)

1. **Dashed "die-cut" decoration leaking page-wide.** `.token::after {position:absolute; inset:5px;
   border:dashed}` anchors to the nearest positioned ancestor. A media query that sets a sticky
   sidebar to `position: static` removes its containing block and the dashed box is drawn around the
   *page*, cutting through hero chips. Fix: reset sticky to `position: relative; top: auto`, never
   `static`, for anything carrying a pseudo-element decoration; and `content: none` for decorative
   `::after` on ≤1023px. Reproduced only with device emulation at DPR 2–3 — plain headless 360–1024
   did not show it. Always check `position` resets in media queries.
2. **Sticky taller than the viewport.** Tablet sticky side panel must have
   `max-height: calc(100dvh - 2*gap)` (with a `100vh` fallback line first) and `overflow-y:auto;
   overscroll-behavior: contain`.
3. **Grid blowout.** Use `minmax(0, 1fr)` and `min-width: 0` on children with nowrap/long content.
4. **`display:` set inline or by a later rule beats `display:none`** on folded/hidden elements — keep
   display values in classes.
5. **Absolute/visually-hidden children escape an `overflow` scroller** unless the scroller is
   `position: relative` (e.g. a visually-hidden `thead`).
6. **Sticky bars**: sub-nav/A–Z bars are `position: sticky; top: 0; height: 44px`; give jump targets
   `scroll-margin-top` equal to the bar height. Bleed bars to the screen edge with
   `margin-inline: calc(-1 * var(--gutter))` and re-add `padding-inline: var(--gutter)`.
7. **Long-press wobble / horizontal scrollers**: `overflow: auto hidden`, `overscroll-behavior-x:
   contain`, `scrollbar-width: none` + `::-webkit-scrollbar{display:none}`, disable
   `-webkit-touch-callout`/`user-select` on letters.
8. **Body scroll behind a sheet**: toggle `html.sheet-open{overflow:hidden}`.
9. **Astro whitespace-before/after-`<a>` bug** still applies to every prose touched.

## 4. Phone/tablet pattern library (reuse by page type)

- **Header ≤56px**: wordmark + 44px three-bar Menu button (`.menu-toggle`, `aria-expanded`,
  `aria-controls`); nav drops down absolutely (`top:100%`) with 48px links. Close on Escape (return
  focus to the button) and outside click (listener acts only when open). Without JS the nav is a single
  nowrap scrolling row. Tablet keeps the full header (~68px).
- **Compact page header**: inline small icon + shorter H1 (~1.4rem), lead clamped to 3 lines with a
  "Read more" button (hide the button when text fits; re-measure on resize, restore focus after toggle).
  Fact chips become icon+text items (CSS-mask SVG icons via `data:` URIs) or one scrolling row.
- **Filters → bottom sheet** (≥ phone only): sticky 44px sub-nav containing a "Filter: I own…" pill
  (showing the current selection summary) + jump links. Panel becomes `role="dialog"`, `aria-modal`,
  `max-height: 85dvh`, focus moves in, Tab trapped, Esc / backdrop / "Done" close and return focus to the
  pill. Keep URL + localStorage persistence unchanged. Without JS the panel stays inline.
- **Ranked/primary list as expandable rows**: collapsed row = rank, name, verdict tag, one-line reason
  (`-webkit-line-clamp: 1`), first buy link; "More" button (or tapping the row, but not links) expands in
  place. Use CSS `order`/`display: contents` to reorder an existing card instead of duplicating markup.
  Collapsed hides everything else with `:not(.is-open)`.
- **Duplicate summary tables**: if a "glance" table repeats the cards, hide it (≤1023px); it stays in the
  HTML.
- **Reusable fold behavior (`phone-folds.mjs`)**: any `[data-fold]` folds behind its first child; on
  phones the heading's contents are wrapped in a `.fold-toggle` button (48px, `+`/`−` icon,
  `aria-expanded`); unwrapped again on wider screens so laptop has no dead tab stops;
  `data-fold="open"` starts open; links/`#hash` into a fold open it (decode hash in try/catch — a
  malformed `%` escape must not throw and kill the page script). Use for FAQ (one per question), detail
  facts, lower sections.
- **Detail/product page**: verdict then buy box first (`order:-1` on the aside), facts as folds, "Our
  take" open by default.
- **Compare tables**: under 768 render as stacked rows — `display:block` on table parts, visually-hide
  `thead`, `td::before{content:attr(data-label)}`; add explicit `role=table/row/cell/columnheader` so
  semantics survive `display:block`.
- **Home list/picker**: grid → compact list with 40px art; sticky A–Z jump bar with letter headings
  generated via `[data-letter]::before{content:attr(data-letter)}`; bar/headings hidden while searching
  (`.is-searching`); chevron fade buttons page the bar when it overflows (`.can-prev/.can-next`).
  Hero art smaller and after the headline; hide redundant hero CTAs on phones.
- **Footer**: 2 columns on phones (first block full-width).
- **Tablet (768–1023)**: two-column where it fits (list left, sticky compact panel right,
  `grid-template-columns: minmax(0,1fr) 16rem`), card grids 2-up, container side margin ~2rem, link lists
  capped at `--measure`. Mind keyboard order (panel first in DOM, right column visually — acceptable if
  it matches laptop).
- **Prose pages**: readable `--measure`, accordion FAQ.
- **Ads**: keep `.ad-slot` reserved height so ads cause no layout shift on phones.

## 5. Verification protocol (do not skip; screenshots alone are not enough)

Ticket flow used: spec → ticket 01 (reproduce + root cause) → 02 (hardest page) → 03 (rest + tablet),
each with a Done-when list and a comment with measured results. Save before/after screenshots under
`.scratch/<feature>/screens/{01-before,02-after,...}/{page}-{width}-{fold|full}.png`.

1. **Widths**: 360, 390, 430 (phone S/M/L), 768, 834 (tablet), 1024, 1280. **Both Chromium and WebKit**
   (Playwright; iOS Safari ≈ WebKit). Use real device emulation (`isMobile`, `deviceScaleFactor` 2–3,
   rotate/resize) — plain desktop headless windows missed the dashed-line bug.
2. **Every page type** (home, hub/list, detail, compare, publisher, about, methodology, faq,
   disclosure, privacy, contact, 404) × every width — a scripted matrix of checks, not ad-hoc eyeballing.
   Per cell assert: no horizontal overflow (`scrollWidth === innerWidth`; with `isMobile` overflow can
   grow `innerWidth`, so also test each element's `right > viewport`), no text clipped by its box, no
   visible dashed `::after` boxes, header height (56 phone / ~68 tablet).
3. **Page-height budget** on the longest page (e.g. ≤3,000px at 390 vs ~5,800 before) and the
   "verdict + top 3 visible above 844px" check, on ≥3 different data-heavy items.
4. **Laptop-unchanged proof**: not pixel diffs (anti-alias noise). Snapshot computed styles + bounding
   rects of every element in `main` at 1024 and 1280 on all page types, before vs after; expected diffs
   only for new class names with identical styles.
5. **JSON-LD byte-identical** to a build from HEAD across all pages; SSR text still in HTML.
6. **Tests**: markup-level tests for every new structure (one toggle per row, anchors resolve, A–Z bar,
   fold wrappers, compare cell labels/roles, header menu on 6 page types) + the breakpoint guard.
   `npm run build && npm test` must pass; keep `astro check` error count from growing unexpectedly.
7. **Code review** (standards + spec) after each ticket; record "consciously left" items in the ticket
   comment (e.g. small meta labels <16px, tapping an open row doesn't collapse).
8. Gotcha: an apostrophe in the first 20 characters of text that tests assert on gets HTML-escaped and
   fails `pages.test.mjs` — reword.

## 6. What the template already ships vs. what to port

`assets/house-template/` now includes the generic foundation: unified breakpoints (phone/tablet/laptop,
literals documented in `tokens.css`), `html.js` flag in `Layout.astro`, the 56px header with Menu button
(`Header.astro`), `src/lib/phone-folds.mjs` (used by `faq.astro`), phone/tablet CSS in `base.css`
(tap targets, rail not `static`, tablet rail capped at `100dvh`, footer 2-col, fold styles), and
`tests/breakpoints.test.mjs` (`npm test`).

Still to port per site, from the board-game site, only if the PRD's page types need them (don't invent):
filter bottom sheet + sub-nav pill, expandable ranked rows, stacked compare table, sticky A–Z list,
lead clamp/"Read more", detail-page order. Then run the §5 verification matrix. Do not write
site-specific classes back into the template.
