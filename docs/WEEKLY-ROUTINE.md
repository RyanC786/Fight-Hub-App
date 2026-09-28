# Weekly routine and contextual navigation — 28 September 2026

The main journey is now Dashboard → Set up routine → My week → Session overview → Warm-up → Exercises → Cooldown → Log. It replaces the prior repeated three-exercise guided selection as the main experience. The older guided module remains for compatibility; the new route is the member-facing starting point.

Choose Gym or Home, push/pull/legs or three full-body sessions, Starter or Build workload examples, a Monday week-start date and exactly three weekdays. Sessions are assigned in chronological order, even when checkboxes are selected out of order. All seven days show either the session or recovery. Default days are Monday/Wednesday/Friday; any three days can be selected.

Example gym split:

| Day | Focus | Movements |
| --- | --- | --- |
| Monday | Chest, shoulders, triceps | Machine chest press, dumbbell shoulder press, lateral raise, cable pressdown |
| Wednesday | Back, biceps, forearms | Lat pulldown, cable row, biceps curl, hammer curl |
| Friday | Quads, hamstrings, glutes, calves | Leg press, dumbbell Romanian deadlift, bridge, seated calf raise |

The session overview shows the ordered exercises before starting. Premium displays workload examples, rest guidance and instruction links. Warm-up and cooldown remain part of the session, with the workout name and exercise list visible throughout. Inputs record actual work; suggested targets are not automatically marked complete. Existing logs reopen as copies and saved entries are updated by session key rather than duplicated.

Routine configuration is stored locally under fight-hub-routine-v1, independently from prior plans and workout history. Replacing the weekly schedule never deletes saved logs. This is a one-week draft, without automatic rolling, rescheduling or progression. Home and gym presets have explicit equipment requirements; this iteration does not infer which machines a gym has or silently substitute missing equipment.

Free users can preview schedule structure and exercise names. Starting the routine, detailed targets and exercise demonstrations require Premium demo access. The existing free starter experience remains reachable from Dashboard and Library. Production billing/entitlements are still unimplemented.

## Navigation repair

Main navigation is Today, My week, Library and Progress. The preview sidebar is reduced to Dashboard, Set up routine, My week, Library, Progress, Premium and Reset. Library contains HIIT, mobility and exercise browsing.

Exercise detail pages remember where they were opened. The return button goes back to HIIT, a planned session, a template or mobility as appropriate. Opening an easier alternative retains the original destination. Returning to HIIT retains circuit, level and duration. Leaving a running HIIT screen pauses immediately; returning does not restart it automatically.

## Content boundary

These are original editorial workout drafts, not professionally reviewed prescriptions. The user requested a push/pull/legs organisation; this is not presented as universally optimal. A three-day full-body alternative is included. [ACSM's 2026 guidance](https://acsm.org/resistance-training-guidelines-update-2026/) emphasises individualisation, consistency and training major muscle groups at least twice weekly; a three-day push/pull/legs split does not give each group that direct frequency. Professional review should resolve programme frequency, load and suitability before launch. No promise of results is made.

## Verification

23 automated checks pass, including distinct chronological sessions, month-boundary dates, invalid dates/weekdays, all exercise references and return destinations. Browser checks cover setup validation, saved week display, free/Premium start gating, exercise preview before warm-up, visible main-session workloads, and HIIT return after viewing an easier alternative with settings unchanged.
