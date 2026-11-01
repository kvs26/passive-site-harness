# Trim Pinterest out of /spread-site, docs, and both sites

Type: task (AFK)
Status: resolved
Blocked by: —

## Question

Remove Pinterest from the spread-site world so `/social-studio` owns it:

- [.agents/skills/spread-site/SKILL.md](../../../.agents/skills/spread-site/SKILL.md): drop Pinterest from the description, procedure order (foundation → Reddit/forums → directories → Q&A → YouTube comments), and the UTM link rule; add one line: "Pinterest and Instagram are handled by `/social-studio`."
- [DISTRIBUTION.md](../../../DISTRIBUTION.md), [USAGE.md](../../../USAGE.md), [docs/distribution-playbook.md](../../../docs/distribution-playbook.md): remove/redirect Pinterest mentions (USAGE's new "Social" step itself is written in ticket 08).
- **Delete** (owner-approved 2026-10-23; site repos are clean in git, so recoverable):
  - `sites/board-game-expansion-buyers-guide/distribution/02-pinterest.md`, `07-pinterest-batch2.md`, and the whole `distribution/pinterest-images/` folder.
  - `sites/runs-on-your-battery-finder/distribution/06-pinterest-play.md`; the pin-generation part (and pin image outputs) of `scripts/generate-social-assets.py` — **keep** its OG-image and compat-chart parts; Pinterest mentions in `scripts/README.md`, `distribution/07-directories-submissions.md`, `distribution/README.md`.
- Verify the battery site still builds if `generate-social-assets.py` changed anything the build references.
- Commit in each site repo (local only, no push).

## Answer

Done 2026-11-01. `/spread-site` SKILL.md now lists 5 channels (Pinterest dropped from description, procedure, UTM rule) with a pointer line to `/social-studio`; DISTRIBUTION.md, USAGE.md, distribution-playbook.md de-Pinterested (USAGE's new Social step is ticket 08). Deleted and committed locally in each site repo: board-game `02-pinterest.md`, `07-pinterest-batch2.md`, `pinterest-images/`; battery `06-pinterest-play.md`, `public/images/pins/` (10 PNGs), and the pin-generation part of `scripts/generate-social-assets.py` (OG + compat chart kept and rerun OK; README/07-directories wording fixed). Battery site `npm run build` succeeds. No push.
