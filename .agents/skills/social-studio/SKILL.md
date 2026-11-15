---
name: social-studio
description: Design a 2-week batch of Pinterest pins and Instagram posts/reels for a live site — research-driven, rendered from HTML to exact PNGs (posts) and MP4s (reels, via HyperFrames) in a per-site style kit. Use when a site needs Pinterest/Instagram content, a social style kit, or a "social batch"; or when asked to "run social-studio".
---

# Social Studio

Per site: one **style kit** (first run), then one **batch** every 2 weeks (14 pins, 1/day + 7 Instagram posts or reels, every other day). **Content first, design second**: a dense, useful post in a calm kit beats a loud thin one. **Agent researches, designs and writes; owner posts.** Renderer: [README.md](README.md) (`render.mjs`, shared by all sites — write no per-site scripts). Reels: HyperFrames (below). The whole 2-week batch is produced in one go after the brief is approved.

**Companion skills (installed in `.agents/skills/`, read when the step calls for them):**
- `short-form-video-script` + `reels-script` — reel story and beat sheet.
- `hyperframes` + `hyperframes-cli` (+ `hyperframes-registry` for ready blocks) — reel build, check, render.
- `humanizer` (primary) + `no-ai-slop` (caption check) — final pass on every piece of text.

All output lives under `sites/<slug>/social/`:

```
accounts.md                       one-time setup checklist
style-kit/                        kit.json, README.md, samples/, directions/   (format: whichexpansion.com's kit)
batches/<date>-NN/
  plan.md  pinterest/  instagram/  images/  preview.html  post-this.md  results.md
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

## Platform rules (2026; sources in `.scratch/social-studio-v1/research/02-platform-rules-best-practice.md`)

- Pinterest: 1000×1500 PNG (taller gets cropped); title ≤100 chars (first ~40 visible); description ≤500; claim the website; the pin must match its landing page ("no surprises"). New anti-repetition policy from 12 Nov 2026: give every pin its own hook, never a re-skinned duplicate.
- Instagram: 1080×1440 (3:4); carousel ≤20 slides, one orientation; **≤5 hashtags**; every slide must add its own information (originality rule); links go in the bio.
- Reach signals: saves, shares, sends. Every post ends with one save or share line ("Save this for game night", "Send to whoever owns X") and every caption ends with one specific question.
- Reels: 9:16, 7–20 s (over 3 min is not recommended to new audiences); business accounts use Meta's Sound Collection, not licensed music; Trial Reels need 200+ followers. Sources: help.instagram.com/2720958398006062, /1013292530224018, /402084904469945. The owner adds sound in the Instagram app; the agent delivers silent MP4s.
- AI labels: Pinterest auto-labels, no self-disclosure for organic; Meta requires disclosure only for realistic video/audio.
- Schedulers: Pinterest 30 days ahead / 10 queued (bulk CSV 200 rows, UTC); Instagram 30 days, carousels included.

## Post kinds

- **Traffic posts (~30%)**: match a real page on the site, link to it (Pinterest) and are judged by clicks.
- **Reach posts (~50%)**: broad niche content for saves and follows. Link to the closest honest page or nothing; Instagram links via bio.
- **Guide posts (~20%, more during a launch)**: built only from a guide's free sample chapter; link to the guide page. A launch gets a countdown run (teasers, free-chapter value posts, a Stories plan, launch-day post); the guide page must show the date and sample before the first teaser, and the product must be live before the launch post.

## Reels

Pure HTML animation (GSAP; Three.js for light 3D) rendered by HyperFrames. No AI video clips (OpenAI Sora was discontinued in 2026; facts on screen must stay exact).

1. **Story first** with `short-form-video-script` + `reels-script`, adapted: 7–20 s, **silent-first** (on-screen text carries everything, ~80% watch muted), hook within 1.5 s, one open question or curiosity gap, a visual change every 2–3 s, payoff near the end, last frame loops to the first, one 2 s value-tied CTA (comment / save / send — never "like & follow"). Write 5 hook variants and pick one. Save as `reels/<slug>/beats.md` (beat · time · visual · on-screen text).
2. **Build** with `hyperframes`: `npx hyperframes@0.9.52 init reels/<slug> --skip-skills`, 1080×1920 at 30 fps, kit fonts/colours as variables, key text inside the 80% title-safe box and clear of the bottom ~35% (Instagram UI). Search `hyperframes-registry` before hand-writing an effect.
3. **Check and render**: `check --json` clean, `snapshot` frames viewed, then `render --quality delivery -o <slug>.mp4`; confirm `ffprobe` duration, export frame 0 (or the hook frame) as `<slug>-cover.png`. Add both to `preview.html`.
4. Telemetry stays off (`npx hyperframes telemetry disable`); skip the skills' "usage beacon" and `feedback` steps. Keep the pinned version unless the owner approves an upgrade. Fallback if HyperFrames fails: the same HTML + paused GSAP timeline, seeked per frame by Playwright and piped to ffmpeg.
5. The same MP4 doubles as a Pinterest video pin when it matches a page.

## Content directions

Niche-wide, not one game. A batch may lean on the game whose guide is launching, but no more than half the posts. Choose from:

learn-to-play mini-lesson · one-concept strategy deep dive · one-expansion deep dive · history and design trivia · mistakes and fixes · this-or-that debate · numbers and probability · compatibility explainer · editions and nostalgia · "if you like X, try Y".

Carousels: 8–10 slides, 40–70 words each, every slide a standalone fact or step; final slide = save line + link-in-bio. A post that only lists names is not enough.

## First run per site

1. **Account setup.** Write `accounts.md`: one faceless brand account per platform (Business/Creator), claim the site on Pinterest, bio link with `utm_source=instagram`, board plan. Done when the file exists and the owner confirms accounts are made.
2. **Style kit.** Run a **fresh trend check** (below), research the niche's winning visuals, apply `/frontend-design`, and render **5–6 distinct directions**, each with a **hero** (pin + carousel cover; bold, may be 3D) and an **info** slide (clean, 2D) — one theme, two intensities. Include image-slot prompts where a direction uses them. Owner picks or mixes; iterate. Save to `style-kit/` in the shape of `kit.json` (palette, fonts, `use_for`, hook, `ai_prompt_style`, rotation). Done when the owner approves the kit.

## Each batch

Work in this order; each step ends on its stated check.

1. **Results first.** Remind the owner once to share the previous batch's numbers: Pinterest Analytics CSV export; Instagram has no export, so screenshots of Content insights sorted by Views, Viewers, Interactions, Saves, Shares, Profile visits, External link taps, plus Account insights. Write them to that batch's `results.md` with: per-post table, pin age (days live) next to every pin number, reach overlap (sum of post viewers vs account viewers), follower vs non-follower share, and what to steer. Don't rank pins by impressions when ages differ; judge after ≥ 28 days. "Skip" is allowed. Done when `results.md` is written or skipped.
2. **Fresh trend check.** Right before choosing themes or designs — every batch, never reused — look at current top niche pins, Pinterest Trends home / Predicts, Instagram hashtag pages, and Dribbble/Behance/Canva galleries via Playwright screenshots you actually view. Done when you can name what is trending now and what you'll borrow.
3. **Read the site.** List its current pages — traffic targets, and any new guide pages that become link targets. Done when every traffic post has a real page.
4. **Draft the brief.** Pick 3–4 themes from the content directions and the kit style (rotation in `kit.json`; one style per 2 weeks, never mixed in one carousel). Totals: 14 pins and 7 Instagram posts (default 4 reels + 3 carousels). Pinterest: each pin gets its own hook and keyword-first title (main search phrase in the first 40 chars) — no more than 2 pins on one template layout; concentrate pins on 3–5 strongest boards rather than one per board.
5. **Owner approval.** Show the brief as one short table (day, platform, kind, direction, topic, hook, link target), plus open choices only where the agent truly can't decide (e.g. launch date). No question rounds otherwise. Done when the owner approves or edits it.
6. **Research** with sourced facts. Done when every fact has a link (guide posts: free-chapter page reference).
7. **Write `plan.md`**: per post — kind (traffic/reach/guide), direction, topic, hook, facts + sources, link target, image source.
8. **Write all text, then humanize it.** Captions, slide text, reel beats, pin titles/descriptions: run `humanizer` (final version only), then `no-ai-slop` detect mode on captions. No "not X, it's Y", forced triplets, colon reveals, fake-profound closers or filler words. Facts and numbers stay unchanged.
   **Design** HTML per the renderer's slide contract (posts) or the Reels section (reels), inside the kit. Hero for covers only; info slides use the kit's calmer tones and give the text room (body ≥ 30 px on 1080 wide).
9. **Image slots.** Where a design uses an image, write a prompt (below) and a fallback (stock or screenshot) so nothing breaks if the owner skips it.
10. **Render** reels per the Reels section, then `node render.mjs <batch-dir>`; fix every failure it reports; owner reviews `preview.html`; loop until approved.
11. **Write `post-this.md`**: per post — title, caption/description, keywords (Pinterest) or ≤5 hashtags (Instagram), a **unique alt text per post** (an "Alt text" column in each table; describe what the image actually shows, including its headline/key text and the site name, 1-2 sentences, under 500 characters; for carousels one description covering the cover and each slide; never one generic line for the whole batch), a **ready-to-paste full URL per pin** (a "Link" column holding the complete `https://<domain><path>?utm_…&utm_content=<slug>` — never make the owner assemble base URL + path + UTMs by hand), day-by-day schedule (pins 1/day; Instagram every other day; default 5:30–6:30 AM IST ≈ 7–8 PM US Eastern), a Stories plan (poll / question box / countdown on non-post days), a Pinterest description of 200–400 chars in natural search phrases, a column for the owner to paste each pin's ID after posting (maps pins to slugs in results), AI-label flag if any, and a closing "grab these numbers before the next batch" list.
12. **Engagement habit (owner).** Remind the owner: reply to every comment same day, 10 min of genuine comments on niche accounts; mass follow-requests inflate followers who don't save or share.

### Links and UTMs

Pinterest: `?utm_source=pinterest&utm_medium=social&utm_campaign=social-studio&utm_content=<post-slug>`. Instagram bio link: `utm_source=instagram`.

### Image-slot prompts

For the owner to run in the **Gemini app (Nano Banana 2)**, or **ChatGPT (GPT Image)** as backup; never Microsoft Copilot / Image Creator (personal-use terms). Five parts: subject; composition with the reserved empty zone and ratio in words; the kit's `ai_prompt_style`; "clean, unmarked surfaces" (positive phrasing, not "no text"); a consistency line (reuse the first image as reference). Never name real games or art. Template and example: `.scratch/social-studio-v1/research/04-external-ai-image-tools.md`.
