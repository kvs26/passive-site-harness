# Glossary

- **Niche** — a market/topic area chosen for a discovery pass. Has its own lifecycle: active / exhausted / parked.
- **Scout run** — one bounded discovery pass over a niche by the `idea-scout` skill, ending with 3–5 candidates on disk and a run log.
- **Candidate** — an idea that survived scout's hard gates and was written to disk.
- **Dossier** — the validation case file for one idea: six graded signals (strong/weak/unknown) with embedded evidence, produced by `idea-validate`.
- **Comparison brief** — a niche-level document comparing ≥3 validated ideas, ending in a human-pick prompt.
- **Board** — the derived, regenerated global index (`pipeline/board.md`) of every idea and its state; the `Status:` line in each idea file is canonical.
- **Idea lifecycle** — candidate → validated → picked → spec'd; terminal side-exits: rejected, parked.
- **Run log** — the per-session record in `pipeline/<niche>/runs/` of sources consulted, gate failures, and dead-end digging.
