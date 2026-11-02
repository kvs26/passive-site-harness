---
name: social-studio
description: Design a 2-week batch of Pinterest pins and Instagram posts for a live site — research-driven, rendered from HTML to exact PNGs in a per-site style kit. Use when a site needs Pinterest/Instagram content, a social style kit, or a "social batch"; or when asked to "run social-studio".
---

# Social Studio

Per site: one **style kit** (first run), then one **batch** every 2 weeks (14 pins + 6 Instagram posts). **Agent researches, designs and writes; owner posts.** Renderer: [README.md](README.md) (`render.mjs`, shared by all sites — write no per-site scripts).

All output lives under `sites/<slug>/social/`:

```
accounts.md                       one-time setup checklist
style-kit/                        kit.json, README.md, samples/, directions/   (format: whichexpansion.com's kit)
batches/<date>-NN/
  plan.md  pinterest/  instagram/  images/  preview.html  post-this.md  results.md
```

## Hard rules

- **Owner posts.** No bots, no posting APIs, no third-party schedulers. Native Pinterest / Meta Business Suite schedulers are fine for the owner.
- **Free/organic only.** No ads.
- **Real facts only.** Every reach-post fact has a source link in `plan.md`; invented facts never ship. Fact-check each claim on a slide.
- **No agent login.** Browse Pinterest/Instagram logged out and lightly (their ToS forbid automated access even logged in); for walled data ask the owner for screenshots.
- **Images:** no publisher art (box covers, card art) as a hero — names in text are fine. AI prompts are "inspired by", never copies of protected art or characters. Owner's own photos welcome. Stock only from commercial-OK licences, source recorded in `plan.md`. Prefer stylised over photorealistic AI imagery; flag a post for an AI label only where a platform's rules require it.
- **Text lives in HTML**, never in AI images.

## Platform rules (2026; sources in `.scratch/social-studio-v1/research/02-platform-rules-best-practice.md`)

- Pinterest: 1000×1500 PNG (taller gets cropped); title ≤100 chars (first ~40 visible); description ≤500; claim the website; the pin must match its landing page ("no surprises"). New anti-repetition policy from 12 Nov 2026: give every pin its own hook, never a re-skinned duplicate.
- Instagram: 1080×1440 (3:4); carousel ≤20 slides, one orientation; **≤5 hashtags**; every slide must add its own information (originality rule); links go in the bio.
- Reach signals: saves, shares, sends.
- AI labels: Pinterest auto-labels, no self-disclosure for organic; Meta requires disclosure only for realistic video/audio.
- Schedulers: Pinterest 30 days ahead / 10 queued (bulk CSV 200 rows, UTC); Instagram 30 days, carousels included.

## Post kinds

- **Traffic posts (~35%)**: match a real page on the site, link to it (Pinterest) and are judged by clicks.
- **Reach posts (~65%)**: broad niche content for saves and follows (strategy, history, trivia, "games like X" — whatever fits the niche). Link to the closest honest page or nothing; Instagram links via bio.

## First run per site

1. **Account setup.** Write `accounts.md`: one faceless brand account per platform (Business/Creator), claim the site on Pinterest, bio link with `utm_source=instagram`, board plan. Done when the file exists and the owner confirms accounts are made.
2. **Style kit.** Run a **fresh trend check** (below), research the niche's winning visuals, apply `/frontend-design`, and render **5–6 distinct directions**, each with a **hero** (pin + carousel cover; bold, may be 3D) and an **info** slide (clean, 2D) — one theme, two intensities. Include image-slot prompts where a direction uses them. Owner picks or mixes; iterate. Save to `style-kit/` in the shape of `kit.json` (palette, fonts, `use_for`, hook, `ai_prompt_style`, rotation). Done when the owner approves the kit.

## Each batch

Work in this order; each step ends on its stated check.

1. **Results first.** Remind the owner once to share the previous batch's numbers (screenshots); write them to that batch's `results.md` and note what to steer. "Skip" is allowed. Done when `results.md` is written or skipped.
2. **Fresh trend check.** Right before choosing themes or designs — every batch, never reused — look at current top niche pins, Pinterest Trends home / Predicts, Instagram hashtag pages, and Dribbble/Behance/Canva galleries via Playwright screenshots you actually view. Done when you can name what is trending now and what you'll borrow.
3. **Read the site.** List its current pages — traffic targets, and any new guide pages that become link targets. Done when every traffic post has a real page.
4. **Pick 3–4 shared themes** and the kit's style for the season (rotation in `kit.json`; one style per 2 weeks, never mixed in one carousel). Each theme → one Instagram carousel plus several pins, often re-cut from slides with their own hook. Totals: 14 pins, 6 Instagram posts (~4 carousels, 2 singles).
5. **Research reach content** with sourced facts. Done when every fact has a link.
6. **Write `plan.md`**: per post — kind (traffic/reach), theme, topic, hook, facts + sources, link target, image source.
7. **Design** HTML per the renderer's slide contract, inside the kit (hero vs info).
8. **Image slots.** Where a design uses an image, write a prompt (below) and a fallback (stock or screenshot) so nothing breaks if the owner skips it.
9. **Render** `node render.mjs <batch-dir>`; fix every failure it reports; owner reviews `preview.html`; loop until approved.
10. **Write `post-this.md`**: per post — title, caption/description, keywords (Pinterest) or ≤5 hashtags (Instagram), a **unique alt text per post** (an "Alt text" column in each table; describe what the image actually shows, including its headline/key text and the site name, 1-2 sentences, under 500 characters; for carousels one description covering the cover and each slide; never one generic line for the whole batch), UTM link, day-by-day schedule (pins 1/day; Instagram 3/week), AI-label flag if any, and a closing "grab these numbers before the next batch" list.

### Links and UTMs

Pinterest: `?utm_source=pinterest&utm_medium=social&utm_campaign=social-studio&utm_content=<post-slug>`. Instagram bio link: `utm_source=instagram`.

### Image-slot prompts

For the owner to run in the **Gemini app (Nano Banana 2)**, or **ChatGPT (GPT Image)** as backup; never Microsoft Copilot / Image Creator (personal-use terms). Five parts: subject; composition with the reserved empty zone and ratio in words; the kit's `ai_prompt_style`; "clean, unmarked surfaces" (positive phrasing, not "no text"); a consistency line (reuse the first image as reference). Never name real games or art. Template and example: `.scratch/social-studio-v1/research/04-external-ai-image-tools.md`.
