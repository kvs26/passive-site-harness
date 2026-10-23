# Trim Pinterest out of /spread-site, docs, and both sites

Type: task (AFK)
Status: open
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
