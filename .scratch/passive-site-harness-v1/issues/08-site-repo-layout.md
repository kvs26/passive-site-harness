# Where do generated websites live?

Type: grilling
Status: resolved

## Question

Decide the repo layout for the websites themselves: one directory per site inside this workspace (e.g. `sites/<slug>/`), or one repo per site created at build time? Consider: this workspace currently isn't a git repo (and lives in OneDrive), hosting targets (GitHub Pages / Netlify / Cloudflare Pages want a repo), and keeping harness state separate from shippable site code. Also settle whether the harness workspace itself should become a git repo.

## Answer

**Option A — sites live inside this project folder, each as its own nested git repo.**

- Sites live at `sites/<slug>/` inside this workspace (slug = short URL-friendly name, e.g. `sites/hiking-trails-finder/`). One VS Code window sees the harness and every site; no multi-root workspace file needed.
- Each `sites/<slug>/` is initialized as its **own git repo** with its **own GitHub remote**, which is what GitHub Pages / Netlify / Cloudflare Pages want for deploys.
- The **harness workspace itself becomes a git repo** too, pushed to GitHub as the documentation/harness-state repo (`CONTEXT.md`, `docs/`, `pipeline/`, skills).
- The harness repo's `.gitignore` includes `sites/`, so site code never gets tracked by the harness repo — nested repos stay fully independent. (`.env` is also ignored, per issue 02.)
- The project **stays at its current local path** — no relocation. GitHub is the source of truth; the local sync situation is irrelevant.
- Site repo creation (`git init`, GitHub repo creation, first push) happens at build time (stage 5), and pushing/creating remote repos remains a human-checkpoint-adjacent action confirmed with the user.
