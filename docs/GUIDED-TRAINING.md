# Guided training and movement diagrams

Status: prototype increment, 2026-09-26. No coach-reviewed personalised programme is released.

## Implemented

The main setup now collects goal, body focus, location, experience, time, equipment and preferred weekdays. Matching currently uses focus and equipment, selecting up to three supported movements. Unsupported combinations show a clear no-match message. Location does not imply equipment: users select the equipment available there.

A locally dated seven-day window shows sessions on selected weekdays, with unscheduled days labelled as recovery. Today shows a session when scheduled, the next date otherwise, or an expired-week message. The prototype repeats the same matched selection; it does not yet prescribe a periodised weekly routine or assess recovery between adjacent training days.

Guided sessions show one exercise at a time, its schematic, short instructions, demo workload, a movement cue and an easier-option note. Users can mark completion, skip, navigate or swap to another supported movement that matches their equipment/focus. If no alternative exists, the interface says so. Saving records actual checked completion only, not the displayed demo sets/repetitions. Session updates replace the corresponding log instead of duplicating it.

## Illustrations

2026-09-27 update: all eight guided movements now use individually generated realistic PNG illustrations, with two movement positions and Fight Hub's red/charcoal styling. Both cards and enlarged dialogs load these local assets. The original SVG files are retained as earlier design sources. Images were generated using the built-in ChatGPT image tool and visually checked for exercise identity, pose sequence and rendering issues; this is not qualified technique approval. The interface labels them AI-generated and pending technique review. See [generation prompts](IMAGE-PROMPTS.md).

Eight original SVG diagrams cover sit-to-stand, wall press-up, supported calf raise, sideways leg raise, bottle/dumbbell curls, wall arm slides and shoulder rolls. Each offers start/movement positions and an enlarge dialog. These are draft schematics, not photographs, videos or validated anatomical demonstrations. The other library entries remain without imagery; no unrelated image is substituted.

Simple strength steps and example counts reference [NHS strength exercises](https://www.nhs.uk/live-well/exercise/strength-exercises/). No NHS images were copied. The reference does not endorse Fight Hub's assembled sessions or validate our drawings. Shoulder mobility descriptions are original drafts and have no prescribed dosage. A shoulder-only selection is explicitly mobility-focused, not a complete shoulder-strength programme.

## Limits and next priorities

- Goals, experience and available time are captured but do not yet modify loading or estimate session length. The setup makes this explicit.
- Warm-up, rest and cool-down are acknowledged but not automatically prescribed. Individual suitability and progression are unresolved content tasks.
- The guided scope is a small subset of the 72-entry catalogue; it is not an exhaustive programme for all equipment or sports.
- Profile and plan persist under `fight-hub-guided-v1` in this browser only. Active guided progress is memory-only until saved to local training history. No accounts, cloud sync or payment changes were added.
- Programme replacement generates a new week; previous workout history is retained. This is not a rescheduling tool.
- Before production: obtain exercise/diagram review, implement validated programme-level matching for goals/time/experience, expand illustrated coverage, add dated rescheduling and recovery constraints, then connect authenticated storage and entitlements.

## Verification

Ten Node checks pass across guided matching/dates/diagram availability, catalogue filtering and interval timing. Browser walkthrough covered setup, matching, dates across September/October, enlarged diagram opening/closing, completion, skipping and partial log saving. This does not replace a full accessibility, device or exercise-technique review.

Command: `node --test prototype/guided-model.test.cjs prototype/interval-model.test.cjs prototype/training-data.test.cjs`.
