# rv-towing-compat

## Target market
US truck/SUV owners buying or loading a travel trailer, fifth wheel, or slide-in truck camper who need to know whether *their specific* vehicle (door-sticker payload, rear GAWR, tow rating, GCWR, bed length) fits *a specific* RV model.

## Rationale
High-ticket purchase ($20k–$90k RVs, $40k+ trucks) with real safety/legal stakes; owners repeatedly ask "will it fit / can this tow" in r/TruckCampers and r/f150. Generic formula calculators are commoditized (gate-4 death); the opening is a verdict tool over a hand-verified per-model RV spec dataset (dry/wet weight, hitch/pin weight, center of gravity, bed fit) matched against owner-entered sticker numbers.

## Seeds
- "what travel trailer can i tow", "travel trailer tow vehicle calculator" (autocomplete 2026-10-09)
- "truck camper payload calculator", "truck camper weight chart", "which truck is best for truck camper"
- Model-specific: "casita travel trailer tow vehicle", "oliver travel trailer tow vehicle", "best travel trailer to tow with a tacoma"

## Status
Scouted 2026-10-09 — see `runs/2026-10-09-scout.md`.


## 2026-10-09 demand update

truck-camper-payload-match removed: tool-intent keywords ~0-700/mo (calculator/'can my truck carry' = 0); 15K of its 17K was camper shopping terms. travel-trailer-tow-fit-finder kept (~67.8K/mo block).
