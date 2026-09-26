# Training expansion

Updated: 2026-09-26. Status: interactive prototype, not a production training service.

## What works now

- 72 exercise entries with original short descriptions, 12 body-area categories, equipment and experience filters, search and saved favourites.
- 17 session selections: eleven free and six premium-demo templates. Each lists its equipment and constituent exercises before selection.
- Exercise detail views and a custom session builder with naming, duplicate prevention, removal and reordering.
- A session log with optional actual sets, repetitions and minutes; completion checkboxes, pause/resume and partial saving.
- A resumable in-page draft, local history with recorded work, complete/partial distinction, and a two-step local-history clearing action.
- A premium concept screen with a no-charge demo switch. This is intentionally client-side demonstration access, not payment enforcement.
- A fixed-height app frame with independently scrolling content, keeping navigation available through the longer library.

Body areas: chest, back, shoulders, arms, quads, glutes, hamstrings, calves, core, full body, cardio and mobility. These are browsing categories, not claims of exhaustive anatomical coverage or personalised suitability.

## Persistence and privacy

Only favourites and the last 100 saved session logs persist in this browser's localStorage under `fight-hub-training-preview-v1`. No server receives them. Session names and logged work are visible to anyone using the same browser profile. Use demonstration data, not personal or medical information.

Builder, active draft and premium demo status are memory-only and reset on reload. Reset preview retains saved history and favourites; the UI says so. Clear local training history removes saved workout logs but keeps favourites. If storage is unavailable, the preview reports that changes could not be saved.

Local storage is not an account, backup or device sync. Production needs authenticated storage, access rules, migrations, deletion/export handling and server-verified membership.

## Training-content boundary

Entries are editorial drafts with short movement descriptions. Session templates are selections for reviewing the interface, not validated exercise prescriptions. No sets, repetitions, loads, weekly progression or intensity are prescribed. Users enter actual work for the logging demonstration. Avoid treating the experience labels as a suitability assessment.

Reference resources inspected during planning:

- [ACE exercise library](https://www.acefitness.org/resources/everyone/exercise-library/) — reference for browsing by body area, equipment and experience.
- [NHS strength exercises](https://www.nhs.uk/live-well/exercise/strength-exercises/) — general public exercise reference.

These references do not validate this catalogue, grant content licences or replace qualified review. Descriptions are original; no reference-provider videos, illustrations or programme text were copied. Each production exercise still needs technique guidance, reviewed demonstrations, alternatives, source/version records and review sign-off. Combat technique, injury rehabilitation, fight camps and weight cutting remain outside scope.

## Proposed membership split

Free: full exercise browsing, favourites, basic session builder, starter selections and local basic history in the prototype.

Premium demo: additional gym, push/pull, dumbbell and conditioning selections can be opened after enabling demo access. Users can still build from the exercise library for free; the paid concept is curated convenience and future programme depth, not exclusive ownership of exercises.

Planned, not implemented: reviewed multi-week programmes, richer scheduling, comparable performance trends and server-enforced subscriptions. Prices and exact entitlement boundaries remain undecided.

## Validation

Run `node --test prototype/training-data.test.cjs`. Checks cover catalogue uniqueness, all template references, combined filters, empty favourites and script syntax.

Browser walkthrough verified search → exercise details → builder → session log; free and premium-template routing; enabling demo access; saving entered sets/repetitions; complete versus partial history; persistence after reload; and clearing agent-created test logs. An input-event bug found during the walkthrough was fixed and entered values were rechecked. The training home was visually inspected with fixed navigation.

Remaining: real-device tests, full keyboard/accessibility audit, failure/storage edge cases and production content validation. No production backend or purchase flow was tested because none exists.

## Next product increments

1. Collect feedback on selecting sessions, body areas and equipment.
2. Complete equipment/experience/availability onboarding and connect chosen sessions to a real dated schedule; the older weekly plan remains a sample.
3. Resolve programme authorship and review, then add demonstrations and authored workload/progression rules.
4. Inspect the existing Fight Hub website before choosing shared accounts, APIs and production architecture.
5. Introduce authenticated saved plans, reliable session recovery and payment-backed entitlements.

Do not add automatic exercise progression, nutrition prescriptions or fight-readiness scoring merely to increase feature count.

## Home-library expansion

Added 30 entries covering burpees, star jumps/jumping jacks, high knees, tuck jumps, no-jump variations, lunges, floor exercises and household resistance. Five new free selections cover living-room cardio, bodyweight training, household resistance, jumping options and floor-based control.

The Home basics filter selects bodyweight/no-equipment, chair, wall, band, backpack and bottle entries. It is not an exhaustive filter for a fully equipped home gym. The separate No jumping filter describes impact mechanics, not exercise difficulty or medical suitability. Every jumping entry links to a non-jumping alternative. Advanced tuck jumps and burpees are labelled; neither is a beginner default. �Knee jumps� was interpreted as tuck jumps, with high knees also provided.

Household resistance uses manageable, securely closed backpacks and sealed non-glass bottles. Support is stable and clear; no door-hung towel rows, furniture jumps or intentionally slippery-floor drills are suggested. These additions remain original editorial drafts requiring review, without prescribed repetitions, duration or load.

Additional references inspected: [NHS home workouts](https://www.nhs.uk/better-health/get-active/home-workout-videos/) and [NASM exercise library](https://www.nasm.org/workout-exercise-guidance). These do not validate the catalogue or its draft selections.

Verification: four Node tests passed, including home/no-jumping intersections and alternative integrity. Browser checks verified home filtering, the no-jumping burpee result and the burpee detail link to its alternative.
