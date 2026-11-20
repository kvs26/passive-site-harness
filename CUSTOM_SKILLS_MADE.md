# Project skills

The skills we wrote for this project live in `.agents/skills/`. Downloaded skills are listed under the skill that uses them. Download sources are recorded in `skills-lock.json`.

## idea-scout
Runs one pass for a single niche and writes 3–5 candidate site ideas to the pipeline. Each idea needs real evidence and must pass hard gates, including a check on existing competitors and on Google AI Overviews.
- Uses no downloaded skills. It hands its candidates to our own `idea-validate`.

## idea-validate
Builds an evidence dossier for one candidate idea, grades six signals, gives a confidence grade and checks the traffic.
- `to-spec` (Matt Pocock): turns a validated idea into a site spec (PRD).
- `research` (Matt Pocock): looks into deeper questions using primary sources.

## build-site
Builds a new site from a PRD using the house template, a real dataset and product links. Also covers the design and the phone/tablet pass.
- `frontend-design` (external): sets the visual direction for the niche.
- `domain-modeling` (Matt Pocock): fixes the terms in `CONTEXT.md` and records decisions in `docs/adr/`.
- `grilling` (Matt Pocock): stress-tests the plan with the owner before building.
- `to-spec` / `to-tickets` (Matt Pocock): splits the PRD into issues in `.scratch/`.
- `tdd` (Matt Pocock): builds features test-first.
- `code-review` (Matt Pocock): reviews the code against the repo's standards and against the spec.
- `research` (Matt Pocock): gathers facts for the dataset.

## board-game-guide
Writes an original four-level learn-to-play and strategy guide as a PDF, plus a free sample chapter for the site.
- `research` (Matt Pocock): sweeps the sources for rules and strategy.
- `handoff` (Matt Pocock): saves progress so a later session can resume a long guide.

## social-studio
Designs a 2-week batch for a live site: 14 Pinterest pins and 7 Instagram posts (reels and carousels). Posts are rendered as PNGs and reels as MP4s.
- `short-form-video-script` (social-media-skills): beat sheet, hook and pacing for each reel.
- `reels-script` (social-media-skills): Instagram-specific reel rules.
- `hyperframes` / `hyperframes-cli` / `hyperframes-registry` (HeyGen): build, check and render the reel animations, using ready-made effect blocks where possible.
- `humanizer` (blader): removes AI-sounding wording from all text.
- `no-ai-slop` (Peter Yang): final check of the captions.
- `frontend-design` (external): visual direction for the brand kit and each post.
- `research` (Matt Pocock): checks facts for each topic.
- `hook-writer` (social-media-skills): 8 scored hooks per post across different mechanisms.
- `carousel-writer` (social-media-skills): slide structure, cover formula, one idea per slide.
- `pinterest-pin-design` + `pinterest-seo` (social-media-skills): pin concepts, keyword-first titles, fresh-pin rules.
- `instagram-seo` (social-media-skills): keyword captions and alt text.
- `thumbnail-design` (social-media-skills): one-second click test, contrast and focal rules.
- `quote-cards-and-text-graphics` + `infographic-and-data-viz` (social-media-skills): type-led and data-led compositions.
- `listicle-and-roundup` (social-media-skills): honest ranked lists.
- `story-writer` + `interactive-content` (social-media-skills): Stories plan and scoped polls.
- `viral-reverse-engineering` (social-media-skills): finds the hook mechanism behind top posts, not the look.

Since 2026-11: every post gets its own design (no fixed templates); the renderer lints hooks, text size, word count and layout sameness. See `.agents/skills/social-studio/design-playbook.md`.

## spread-site
Takes the owner through promoting a site outside Google, one channel at a time (Reddit, forums, directories, Q&A, YouTube), with draft posts written in the owner's voice.
- Uses no downloaded skills.
