---
name: social-studio
description: Design a 1-week batch of Pinterest pins and Instagram carousels/reels for a live site — research-driven, rendered from HTML to exact PNGs (posts) and MP4s (reels, via HyperFrames) in a per-site style kit. Use when a site needs Pinterest/Instagram content, a social style kit, or a "social batch"; or when asked to "run social-studio".
---

# Social Studio

Per site: one **brand DNA** kit (first run), then one **batch** a week (7 games: for each game one Instagram carousel or reel and one Pinterest pin; one post a day on each platform; Stories on most days). Weekly batches keep the loop short: results from last week steer this week. **One game per post, and each game's design looks like that game.** **Hook first, then a design made for that one post.** Content first, but a post nobody stops on delivers nothing: the hook and the thumbnail decide the tap. **Never reuse a layout template across posts.** The kit holds constants (wordmark, palette bank, font bank, safe zones, parts); each post gets its own Concept card, composition and focal object. Playbook: [design-playbook.md](design-playbook.md) (read it at the Hook sheet and Concept card steps). **Agent researches, designs and writes; owner posts.** Renderer: [README.md](README.md) (`render.mjs`, shared by all sites, with a design lint that fails weak covers; write no per-site scripts). Reels: HyperFrames (below). The whole week's batch is produced in one go after the brief is approved.

**Companion skills (installed in `.agents/skills/`, read when the step calls for them):**
- `short-form-video-script` + `reels-script` — reel story and beat sheet.
- `hyperframes` + `hyperframes-cli` (+ `hyperframes-registry` for ready blocks) — reel build, check, render.
- `humanizer` (primary) + `no-ai-slop` (caption check) — final pass on every piece of text.
- From `social-media-skills` (adapted to our setup; where they say `brand-profile` read `style-kit/kit.json` + the site's `CONTEXT.md`, and where they say WoopSocial the owner posts natively): `hook-writer` (Hook sheet), `carousel-writer` (slide architecture, cover formula), `pinterest-pin-design` + `pinterest-seo` (pin concept, keyword in overlay and title, fresh-pin variants), `instagram-seo` (keyword caption, alt-text match), `thumbnail-design` (the one-second click test, contrast and focal rules), `quote-cards-and-text-graphics` + `infographic-and-data-viz` (type-led and data posts; honest scales, takeaway titles), `listicle-and-roundup` (honest ranked lists), `story-writer` + `interactive-content` (Stories plan, scoped polls), `viral-reverse-engineering` (trend check: mechanism, not surface). Do not install the rest of that repo; its brand/scheduling/analytics skills duplicate what this skill and the owner already do.

All output lives under `sites/<slug>/social/`:

```
accounts.md                       one-time setup checklist
style-kit/                        kit.json (brand DNA: palette bank, font bank, constants), parts/ (SVG pieces), README.md
batches/<date>-NN/
  plan.md (hook sheet + concept cards)  pinterest/  instagram/  images/  preview.html (feed test)  post-this.md  results.md
  reels/<slug>/   one HyperFrames project per reel (index.html, compositions/, beats.md) -> <slug>.mp4 + <slug>-cover.png
```

## Hard rules

- **Owner posts.** No bots, no posting APIs, no third-party schedulers. Native Pinterest / Meta Business Suite schedulers are fine for the owner.
- **Free/organic only.** No ads.
- **Real facts only.** Every reach-post fact has a source link in `plan.md`; invented facts never ship. Fact-check each claim on a slide.
- **No agent login.** Browse Pinterest/Instagram logged out and lightly (their ToS forbid automated access even logged in); for walled data ask the owner for screenshots.
- **Images:** no publisher art (box covers, card art) as a hero — names in text are fine. AI prompts are "inspired by", never copies of protected art or characters. Owner's own photos welcome. Stock only from commercial-OK licences, source recorded in `plan.md`. Prefer stylised over photorealistic AI imagery; flag a post for an AI label only where a platform's rules require it.
- **Text lives in HTML**, never in AI images.
- **Paid guides stay paid.** Social content may use only a guide's free sample chapter, plus public facts and the site's own free pages. Never put paid-chapter tips on a slide.
- **No auto cross-posting.** Instagram-to-Pinterest auto-share stays off; Pinterest gets native 1000×1500 pins only.
- **Owner approves the brief before any design work** (Each batch, step 5).
- **No repeated template.** Two posts in one batch never share a layout skeleton. Shared parts (dice, tiles, tape, wordmark) are fine; shared composition is not. The renderer's lint and sameness check back this up; treat every lint failure as a design bug, not a setting to loosen.
- **Hook before layout.** No HTML is written for a post until it has a scored hook in the Hook sheet and a Concept card in `plan.md`.

## Platform rules (2026; sources in `.scratch/social-studio-v1/research/02-platform-rules-best-practice.md`)

- Pinterest: 1000×1500 PNG (taller gets cropped); title ≤100 chars (first ~40 visible); description ≤500; claim the website; the pin must match its landing page ("no surprises"). New anti-repetition policy from 12 Nov 2026: give every pin its own hook, never a re-skinned duplicate.
- Instagram: 1080×1440 (3:4); carousel ≤20 slides, one orientation; **≤5 hashtags**; every slide must add its own information (originality rule); links go in the bio.
- Reach signals: saves, shares, sends. Every post ends with one save or share line ("Save this for game night", "Send to whoever owns X") and every caption ends with one specific question.
- Reels: 9:16, 7–20 s (over 3 min is not recommended to new audiences); business accounts use Meta's Sound Collection, not licensed music; Trial Reels need 200+ followers. Sources: help.instagram.com/2720958398006062, /1013292530224018, /402084904469945. Sound Collection only (posts promote paid guides and affiliate links; licensed music is personal/non-commercial). The posting API can't attach library music, so: the agent muxes music into reel MP4s (shows as "Original audio"); for carousels the owner adds the track named in `post-this.md` in the mobile app.
- AI labels: Pinterest auto-labels, no self-disclosure for organic; Meta requires disclosure only for realistic video/audio.
- Schedulers: Pinterest 30 days ahead / 10 queued (bulk CSV 200 rows, UTC); Instagram 30 days, carousels included.

## Post kinds

- **Traffic posts (~30%)**: match a real page on the site, link to it (Pinterest) and are judged by clicks.
- **Reach posts (~50%)**: broad niche content for saves and follows. Link to the closest honest page or nothing; Instagram links via bio.
- **Guide posts (~20%, more during a launch)**: built only from a guide's free sample chapter; link to the guide page. A launch gets a countdown run (teasers, free-chapter value posts, a Stories plan, launch-day post); the guide page must show the date and sample before the first teaser, and the product must be live before the launch post.

**Value rule.** Every post must give the viewer something usable without clicking: a rule they can apply tonight, a number they can check, a decision they can make (which box to buy first, which one not to), a mistake they can avoid, or a checklist they can save. Test: "if this is the only post they ever see, did they leave with something?" A post that only teases, lists names or promotes the guide fails. At least 60% of pieces are pure value (no sell); guide posts must also stand alone as value (a real slice of the free chapter, not a trailer). Never withhold the answer to sell it: the free post answers the question; the guide goes deeper.

**Depth balance.** Shallow is a failure, and so is a wall of text. Each week mixes two depths: 4 **deep** posts (a 8–10 slide carousel that teaches one game properly: setup, the decision that matters, a worked example, the common mistake, an expansion verdict, with every claim sourced) and 3 **quick** posts (a reel, or a 5–7 slide carousel, that delivers one sharp insight). Deep posts get one idea per slide but many slides; the detail is in the number of useful slides, not the words per slide. Every post, deep or quick, says something a player of that game would not already know, with the source checked.

**One game per post; game-themed design.** The batch covers 7 different games. The design is a visual representation of that game: its mood, setting and mechanism drawn with our own parts (a harbour of hex tiles for a trading game, drawn birds and eggs for an engine game, a dice tower for a dice game, a spice-and-sand palette for a desert game), never publisher art, logos, box covers or copied card art. Take palette and type from the bank but choose them to suit the game; the focal object is something the game is *about*.

**Guide launch run.** When a guide is launching, the launch plan in `plan.md` spans two weekly batches (around the real launch date; the owner confirms the date and that the page, sample and checkout are live; the plan is dated backwards from it). The launch game is exempt from the one-game-per-week rule for its guide posts only. Phases across the 14 days, for both platforms:
- Teach (days 1–5): free-chapter value posts that show the guide's quality, 1 per day on Instagram and on alternate days on Pinterest. Link the guide page for the sample.
- Tease (days 6–10): behind-the-scenes (how we checked it, what's inside, who it's for), a "what you get" carousel, a poll or question box on which game to cover next, a countdown Story.
- Launch (days 11–12): launch-day reel and carousel, a Pinterest pin to the guide page, Story link sticker (owner adds), pinned post.
- Proof (days 13–14): what buyers get, FAQ answered, one more value post from the chapter, a last-call post. No fake urgency; no unverifiable claims; no reviews unless real.
After launch, keep guide posts at ~20% and keep teaching. Every guide post has a different hook from the others and a clean path: post → guide page (with date/sample) → checkout.

## Reels

Pure HTML animation (GSAP; Three.js for light 3D) rendered by HyperFrames. No AI video clips (OpenAI Sora was discontinued in 2026; facts on screen must stay exact).

1. **Story first** with `short-form-video-script` + `reels-script`, adapted: 7–20 s, **silent-first** (on-screen text carries everything, ~80% watch muted), hook within 1.5 s, one open question or curiosity gap, a visual change every 2–3 s, payoff near the end, last frame loops to the first, one value-tied CTA held ≥ 3 s (comment / save / send — never "like & follow"). Write 5 hook variants and pick one. Save as `reels/<slug>/beats.md` (beat · time · visual · on-screen text).
   **Reading time beats speed.** Hold every on-screen line for at least 0.5 s + 0.3 s per word, and give the CTA at least 3 s. A 5-beat reel usually lands at 15–20 s; the 10 s test cut (2026-11-15) was too fast to read. Lengthen the holds, not the animations. In a long beat, bring in a second line partway through so something still changes every 2–3 s. `check` warns `line_unread` when a line is too short; fix those warnings rather than leaving them.
   **Script approval (always, even for a single test reel):** before building, show the owner a short script per reel — chosen hook (+ the 4 alternates in one line), then a 4–6 row table (time · on-screen text · what moves) and the CTA. Wait for "ok" or edits; only then build. In a batch, show all reel scripts together in one message right after the brief is approved.
2. **Build** with `hyperframes`: `npx hyperframes@0.9.52 init reels/<slug> --skip-skills`, 1080×1920 at 30 fps, kit fonts/colours as variables, key text inside the 80% title-safe box and clear of the bottom ~35% (Instagram UI). Search `hyperframes-registry` before hand-writing an effect.
3. **Check and render**: `check --json` clean, `snapshot` frames viewed, then `render --quality delivery -o <slug>.mp4`; confirm `ffprobe` duration, export frame 0 (or the hook frame) as `<slug>-cover.png`. Add both to `preview.html`.
4. Telemetry stays off (`npx hyperframes telemetry disable`); skip the skills' "usage beacon" and `feedback` steps. Keep the pinned version unless the owner approves an upgrade. Fallback if HyperFrames fails: the same HTML + paused GSAP timeline, seeked per frame by Playwright and piped to ffmpeg.
5. **Music.** The render is silent; text still carries the reel. Pick a track that fits the reel's mood from `style-kit/audio/<mood>/` (chill, playful, quirky, suspenseful, uplifting; Sound Collection downloads the owner supplies). Skip seasonal tracks (Christmas, Halloween) outside their season, and don't reuse one track twice in a batch except for the same video. Check `style-kit/audio/used.md` and skip any track used in the last 3 batches; log every pick there (reels and carousels). If a mood has fewer than 3 usable tracks, ask the owner to download more Sound Collection tracks for that mood in the brief, before the build. Measure per-second loudness (`ffmpeg ... astats`) to skip a quiet intro or line a drop up with the payoff beat, then run `sh .agents/skills/social-studio/add-audio.sh <slug>.mp4 "<track>" [start_s]` (in place: fades, -16 LUFS, AAC 48 kHz). Confirm with `ffprobe` that an audio stream is present and the duration is unchanged. Name each reel's track in `post-this.md` and give every carousel a named track for the owner to add in the app.
6. The same MP4 doubles as a Pinterest video pin when it matches a page.

## Content directions

Niche-wide, not one game. A batch may lean on the game whose guide is launching, but no more than half the posts. Choose from:

learn-to-play mini-lesson · one-concept strategy deep dive · one-expansion deep dive · history and design trivia · mistakes and fixes · this-or-that debate · numbers and probability · compatibility explainer · editions and nostalgia · "if you like X, try Y".

Carousels: 6–10 slides (the idea sets the count), headline ≤ 12 words + at most one support block per slide (≤ 45 visible words, lint-enforced), every slide a standalone fact or step carried by a picture (table, duel, diagram, receipt) rather than paragraphs; final slide = save/send line + link-in-bio. A post that only lists names is not enough, and neither is a text wall. See [design-playbook.md](design-playbook.md).

## First run per site

1. **Account setup.** Write `accounts.md`: one faceless brand account per platform (Business/Creator), claim the site on Pinterest, bio link with `utm_source=instagram`, board plan: a **fixed set of 4–6 board categories** (e.g. Learn to play, Strategy and tips, Expansion guides, Gift ideas, Game night, Which to buy). Every pin goes into one of these; never create a board per game. Done when the file exists and the owner confirms accounts are made.
2. **Brand DNA kit.** Run a **fresh trend check** (below) and apply `/frontend-design`. The kit is a toolbox, not a set of layouts: (a) a **palette bank** of 10–14 colours grouped into 5–6 usable 3–4-colour palettes, (b) a **font bank** of 6–8 pairings (display + body, all legible at size), (c) the constants (wordmark placement, meeple mark, voice, safe zones), (d) `parts/` of SVG/CSS pieces (dice faces, hex tiles, meeples, cards, tags, tape, stamps, arrows, grain), (e) `ai_prompt_style` for optional AI imagery. Render a **proof sheet** of 6 sample covers that look nothing alike but share the DNA; this proves the system lets posts differ. Owner approves or edits. Save to `style-kit/kit.json`. Done when the owner approves the proof sheet.

## Each batch

Work in this order; each step ends on its stated check.

**Subagents.** Run heavy, independent work in subagents so the main session stays light and each gets a focused brief. The main agent keeps the owner approvals, `plan.md`, and final checks. Give every subagent: the site path, the exact files to read, the output file to write, and "return a ≤15-line summary". Read their files; never trust a summary for facts.
- Step 1: one subagent per platform (Pinterest CSV, Instagram screenshots) writes its section of `results.md`.
- Step 2: one subagent per source group (Pinterest, Instagram, design galleries) writes `research/trends-<source>.md`.
- Step 4: one subagent per theme drafts the Hook sheet (8 hooks per post, scored) in `research/hooks-<theme>.md`; the main agent picks winners and writes the Concept cards so variety is decided in one place.
- Step 6: one subagent per theme writes `research/<theme>.md` with every fact linked. Run them in parallel.
- Step 8 (design): **never one subagent for a whole platform**; one agent making 7 pins converges on one look, which is the failure this rewrite fixes. Use one subagent per 3–4 posts, each given only its own Concept cards and the kit, plus the list of archetypes and palettes already taken (read from `plan.md`, which the main agent updates). Each subagent renders its posts, views them at feed size and returns them. Reels: one subagent per reel (beat sheet → build → check → render) after scripts are approved. Each runs the `humanizer` pass on its own text.
- After each wave, the main agent runs the full renderer once (lint and sameness across the whole batch), then spawns the fresh critique subagent (playbook) to list fixes. Redesign failures; don't loosen the lint.
- Final check: one fresh review subagent checks facts, links, safe areas, value rule and no paid-guide content against `plan.md`.
Don't run subagents for owner-facing steps (brief, script approval) or tiny tasks.

**Which model.** Quality comes first; save cost only where the work is following a fixed spec. Use Sonnet (set the subagent's `model` option) only when the output is already decided and a later Opus check catches mistakes.
| Opus (main session or subagent) | Sonnet subagent |
|---|---|
| Brief, hooks, reel scripts, all captions/slide/pin text, the `humanizer` pass | Reading the Pinterest CSV / Instagram screenshots into tables (Opus writes "what to steer") |
| Choosing trends and what to borrow | Collecting trend screenshots and links (no judgement) |
| Research facts and numbers (wrong facts break trust) | Re-rendering, `check`/`ffprobe` runs, fixing reported render errors without changing the design |
| New layouts, new motion, any reel that isn't a copy of an approved template | Re-rendering and fixing reported render errors without changing the design |
| Every post's design (each is new now), design critique | Collecting trend screenshots and links (no judgement) |
| Final review subagent | Assembling `post-this.md` from approved text (URLs, UTMs, schedule, alt-text columns) |
If a Sonnet subagent has to make a creative call (layout breaks, text won't fit, motion needs a new idea), it stops and reports back; Opus decides. Opus views every Sonnet-built output before the owner sees it.

1. **Results first.** Remind the owner once to share the previous batch's numbers: Pinterest Analytics CSV export; Instagram has no export, so screenshots of Content insights sorted by Views, Viewers, Interactions, Saves, Shares, Profile visits, External link taps, plus Account insights. Write them to that batch's `results.md` with: per-post table, pin age (days live) next to every pin number, reach overlap (sum of post viewers vs account viewers), follower vs non-follower share, and what to steer. Don't rank pins by impressions when ages differ; judge after ≥ 28 days. "Skip" is allowed. Done when `results.md` is written or skipped.
2. **Fresh trend check.** Right before choosing themes or designs — every batch, never reused — look at current top niche pins, Pinterest Trends home / Predicts, Instagram hashtag pages, and Dribbble/Behance/Canva galleries via Playwright screenshots you actually view. Also reverse-engineer 8–10 top posts in the niche (`viral-reverse-engineering`): for each, name the hook mechanism, the focal object, the archetype and what the first 1 second shows; borrow the **mechanism**, never the look. Save to `research/trends-*.md` with screenshots. Done when you can name what is trending now, which hook mechanisms are winning, and what you'll borrow.
3. **Pick the games.** Read `social/games-covered.md` (the ledger: game, date, batch, IG post, pin, link target; create it on first run). Propose **7 games** not yet in the ledger (or covered long ago and worth a refresh, marked as such), chosen for: a real page or guide on the site to link to, search demand or seasonal fit, variety of weight and style (family, strategy, party, co-op), and enough checked material for a deep post. List the 7 with one line of why each, and the 4 deep / 3 quick split. **Stop and wait for the owner to approve the games** before any hooks are written. After the batch is approved, append the 7 games to the ledger. Also list the site's current pages as link targets. Done when the owner approves the games and every traffic post has a real page.
4. **Hook sheet and brief.** Pick 3–4 themes from the content directions. Totals: 7 pins and 7 Instagram posts, one each per approved game (default 3 reels + 4 carousels; **carousels and reels only, no single-image posts**; at least 3 of the 7 Instagram posts are "send this to someone" posts). Also plan Stories for most days (a 3-frame sequence or one sticker frame, drafted as text and sticker copy; the owner adds stickers in the app per `story-writer` and `interactive-content`). At least 60% of pieces are **value posts** (see Post kinds). For every post, write 8 candidate hooks across different mechanisms and score them (playbook: Hooks); keep the winner and the runner-up. A game's pin and Instagram post share the same research and core insight, adapted per platform: Pinterest is search-led and links to a page; Instagram is hook-led and built for saves and sends. Each has its own hook, design and format, not a resize. Pinterest: each pin gets its own hook (on the image) and keyword-first title (main search phrase in the first 40 chars) and goes into one of the fixed board categories from `accounts.md`. Then give each post a **Concept card** (hook, promise, focal object, archetype, **game motif**, palette+type from the banks, feed check). Variety rules: no archetype repeated within the batch, no two neighbours alike in dominant colour or composition.
5. **Owner approval.** Show the brief as one short table (day, platform, kind, topic, **hook**, **focal object + archetype**, link target), plus open choices only where the agent truly can't decide (e.g. launch date, whether to supply table photos). No question rounds otherwise. Done when the owner approves or edits it.
6. **Research** with sourced facts. Done when every fact has a link (guide posts: free-chapter page reference).
7. **Write `plan.md`**: per post — kind (traffic/reach/guide), direction, topic, hook, facts + sources, link target, image source.
8. **Write all text, then humanize it.** Captions, slide text, reel beats, pin titles/descriptions: run `humanizer` (final version only), then `no-ai-slop` detect mode on captions. No "not X, it's Y", forced triplets, colon reveals, fake-profound closers or filler words. Facts and numbers stay unchanged.
   **Design** each post as its own piece (HTML per the renderer's slide contract, or the Reels section), following its Concept card and the playbook's thumbnail, carousel and imagery rules. Mark the hook headline with `data-hook` and footnotes with `data-fine` (lint reads these). Compose from kit `parts/`, never by copying another post's HTML skeleton. Body text ≥ 38 px, anything visible ≥ 26 px.
9. **Image slots.** Where a design uses an image, write a prompt (below) and a fallback (stock or screenshot) so nothing breaks if the owner skips it.
10. **Render** reels per the Reels section, then `node render.mjs <batch-dir>`; fix every lint failure and sameness warning by redesigning, not by loosening limits. View the feed test in `preview.html` at real size. Then run the **design critique pass** (playbook) in a fresh Opus subagent and apply its fixes. Owner reviews `preview.html`; loop until approved.
11. **Write `post-this.md`**: per post — title, caption/description, keywords (Pinterest) or ≤5 hashtags (Instagram), a **unique alt text per post** (an "Alt text" column in each table; describe what the image actually shows, including its headline/key text and the site name, 1-2 sentences, under 500 characters; for carousels one description covering the cover and each slide; never one generic line for the whole batch), a **ready-to-paste full URL per pin** (a "Link" column holding the complete `https://<domain><path>?utm_…&utm_content=<slug>` — never make the owner assemble base URL + path + UTMs by hand), day-by-day schedule (pins 1/day; Instagram every other day; default 5:30–6:30 AM IST ≈ 7–8 PM US Eastern), a Stories plan (poll / question box / countdown on non-post days), a Pinterest description of 200–400 chars in natural search phrases, a column for the owner to paste each pin's ID after posting (maps pins to slugs in results), AI-label flag if any, and a closing "grab these numbers before the next batch" list.
12. **Engagement habit (owner).** Remind the owner: reply to every comment same day, 10 min of genuine comments on niche accounts; mass follow-requests inflate followers who don't save or share.

### Links and UTMs

Pinterest: `?utm_source=pinterest&utm_medium=social&utm_campaign=social-studio&utm_content=<post-slug>`. Instagram bio link: `utm_source=instagram`.

### Image-slot prompts

For the owner to run in the **Gemini app (Nano Banana 2)**, or **ChatGPT (GPT Image)** as backup; never Microsoft Copilot / Image Creator (personal-use terms). Five parts: subject; composition with the reserved empty zone and ratio in words; the kit's `ai_prompt_style`; "clean, unmarked surfaces" (positive phrasing, not "no text"); a consistency line (reuse the first image as reference). Never name real games or art. Template and example: `.scratch/social-studio-v1/research/04-external-ai-image-tools.md`.
