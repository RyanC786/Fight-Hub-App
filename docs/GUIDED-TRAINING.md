# Guided training and movement diagrams

Status: prototype increment, 2026-09-26. No coach-reviewed personalised programme is released.

## Implemented

The main setup now collects goal, body focus, location, experience, time, equipment and preferred weekdays. Matching currently uses focus and equipment, selecting up to three supported movements. Unsupported combinations show a clear no-match message. Location does not imply equipment: users select the equipment available there.

A locally dated seven-day window shows sessions on selected weekdays, with unscheduled days labelled as recovery. Today shows a session when scheduled, the next date otherwise, or an expired-week message. The prototype repeats the same matched selection; it does not yet prescribe a periodised weekly routine or assess recovery between adjacent training days.

Guided sessions show one exercise at a time, its schematic, short instructions, demo workload, a movement cue and an easier-option note. Users can mark completion, skip, navigate or swap to another supported movement that matches their equipment/focus. If no alternative exists, the interface says so. Saving records actual checked completion only, not the displayed demo sets/repetitions. Session updates replace the corresponding log instead of duplicating it.

## Illustrations

2026-09-27 update: all eight guided movements now use individually generated realistic PNG illustrations, with two movement positions and Fight Hub's red/charcoal styling. Both cards and enlarged dialogs load these local assets. The original SVG files are retained as earlier design sources. Images were generated using the built-in ChatGPT image tool and visually checked for exercise identity, pose sequence and rendering issues; this is not qualified technique approval. The interface labels them AI-generated and pending technique review. See [generation prompts](IMAGE-PROMPTS.md).

The original eight SVG schematics have been superseded in the interface by realistic AI-generated illustrations. The exercise media manifest records current coverage, with an enlarge dialog for each published image. All illustrations remain drafts requiring professional technique review.

Simple strength steps and example counts reference [NHS strength exercises](https://www.nhs.uk/live-well/exercise/strength-exercises/). No NHS images were copied. The reference does not endorse Fight Hub's assembled sessions or validate our drawings. Shoulder mobility descriptions are original drafts and have no prescribed dosage. A shoulder-only selection is explicitly mobility-focused, not a complete shoulder-strength programme.

## Limits and next priorities

- Goals, experience and available time are captured but do not yet modify loading or estimate session length. The setup makes this explicit.
- Warm-up, cooldown and workload examples are now shown. Individual suitability and professionally reviewed progression remain unresolved content tasks.
- The guided matcher remains a small subset of the now 82-entry catalogue; it is not an exhaustive programme for all equipment or sports. The wider library now has movement-specific written instructions and workload examples.
- Profile and plan persist under `fight-hub-guided-v1` in this browser only. Active guided progress is memory-only until saved to local training history. No accounts, cloud sync or payment changes were added.
- Programme replacement generates a new week; previous workout history is retained. This is not a rescheduling tool.
- Before production: obtain exercise/diagram review, implement validated programme-level matching for goals/time/experience, validate all illustrations, add dated rescheduling and recovery constraints, then connect authenticated storage and entitlements.

## Verification

Fourteen Node checks pass across guided matching/dates/diagram availability, catalogue filtering and interval timing. Browser walkthrough covered setup, matching, dates across September/October, enlarged diagram opening/closing, completion, skipping and partial log saving. This does not replace a full accessibility, device or exercise-technique review.

Command: `node --test prototype/guided-model.test.cjs prototype/interval-model.test.cjs prototype/training-data.test.cjs prototype/conditioning-model.test.cjs`.

## 27 September expansion

Guided and custom sessions now begin with an untimed six-minute warm-up guide and offer a five-minute cooldown before saving. Workload examples can be switched between Starter, Build and Hard; these are member-selected examples, not automatic adaptation from past results. Saved completion remains explicit and warm-up/cooldown navigation never marks a movement complete. See [conditioning expansion](CONDITIONING-EXPANSION.md) for sources, timing and release boundaries.
