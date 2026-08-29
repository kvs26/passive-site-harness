# Niche: poetry-craft-tools

Tools for people **writing and studying** poetry — meter/scansion, rhyme scheme, syllable counts, and fixed poetic forms (sonnet, villanelle, sestina, haiku). Audience skews US high-school / AP English & Latin students, MFA/hobbyist poets, and r/Poetry-style craft learners.

**Target market: US** (AP/HS English & Latin, r/Poetry US base). No override.

## Seeds

- meter / scansion / iambic pentameter checker
- rhyme scheme detector / analyzer
- syllable counter / haiku syllables
- poetic forms (villanelle, sestina, sonnet) structure / validator
- "what meter/form is this poem"
- scansion practice / how to scan a poem

## Known incumbents (as of 2026-08-29)

**Scansion / meter checkers (SATURATED):** poemanalysis.com/poetry-plus/scansion-tool, poemfolio.com/tools/meter-checker, tembrica.com/en/poetry-analyzer (metre+rhyme+syllables+feet), poem-analyzer.com, storgy.com/tools/poem-checker, simpleonline.tools iambic-pentameter-checker (Web Audio playback + feminine ending), becomeawritertoday.com/meter-checker, versepad.com, generatepoem.io, tuffet.net.

**Rhyme-scheme detectors (SATURATED):** gorhyme.com (Rhyme Scheme Analyzer — "paste a poem and click to assign rhyme letters"), rhymecraft.app (Rhyme Scheme Analyzer), tembrica.com, versepad.com, poem-analyzer.com, aisong.io/textarray (lyric rhyme analysis).

**Form validators / identifiers (NOW SERVED):** "Form Atlas: write a sonnet, villanelle, or sestina with live guardrails" (villanelle refrains + sestina end-words tracked), "Poem Form Identifier: what form is this poem" ("paste a poem and find out which fixed form it follows"), villanelle structure checkers (validate 19 lines / tercets / quatrain), plus AI villanelle/sestina generators (Unifire etc.).

**Per-poem canonical analysis (SATURATED):** shmoop.com, litcharts.com, owleyes.org, artincontext.org, sparknotes-style "Form and Meter" pages for famous poems (e.g., "The Road Not Taken Form and Meter").

**Syllable / haiku counters (SATURATED):** many "haiku syllable counter / checker" tools.

**Classical (Latin) scansion (SERVED):** hexameter.co, alatius.com, GitHub libs (petek222/LatinScansion, sydliuu/Lady-Lius-Latin).

**Scansion library (OSS):** github.com/quadrismegistus/prosodic (active English scansion), klei22/nanoGPT poetry_meter_rhyme dataset.

## Read of the niche

The **paste-your-text checker** axis (meter, rhyme, form, syllables) and the **per-poem analysis page** axis are both fully served, so bare checkers die on gate 4. The one thin cut is a **filterable, verified reference corpus**: incumbents give you one poem at a time (per-poem pages) or a paste→output guess (checkers), but nobody offers a filterable multi-attribute index of *verified* examples (e.g. "show me 30 real villanelles" / "poems in iambic tetrameter"), nor a scansion **practice/answer-key** drill for the poems US classes actually assign. Unique curated data is the only defensible moat here.
