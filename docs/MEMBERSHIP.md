# Membership access — approved revised offer

This supersedes the broad free-tier proposal in MARTIAL-ARTS-MOBILITY.md and earlier planning notes. The user approved the narrower free sample and full Premium training experience.

## Free starter

- Exactly 12 complete beginner exercise entries, defined in membership-model.js.
- Three fixed workouts: Home foundations, Lower-body basics and Core control. Free users start these directly without entering the custom builder.
- One introductory mobility selection and a repeatable fixed guided sample.
- Preparation, cooldown, complete instructions and easier options for every unlocked session. Supporting warm-up/cooldown movements remain available within the session even when outside the free catalogue.
- Starter-session logging and read access to existing saved history, including previously logged Premium sessions.
- Sports-content preview. Live news, fighter and event feeds remain unconnected.

## Premium demo

Full 85-entry library and available images; all 17 existing workout selections; HIIT collection; full martial-arts mobility and splits-preparation selections; custom session builder and logging; equipment/focus matching and dated-week preview.

Locked entries remain discoverable by name. Instructions and enlarged illustrations are gated. UI routes and action handlers gate custom building, premium selection use and guided-plan creation. Switching Premium off preserves history and unfinished work, but gates resuming Premium sessions. Refresh resets demo access.

The free sample may be repeated; it is not an expiring trial. The approved commercial direction includes a short Premium trial, but its duration, price, checkout and renewal terms are not yet set or implemented. Do not describe the no-charge demo toggle as a subscription or timed trial.

## Still planned

Reviewed multi-week programmes, adaptive goals/time prescriptions, performance comparisons, class-aware planning, persistent saved custom workout templates, account sync and real subscriptions. No payment unlocks these in this prototype. Exercise content and images still require professional review.

## Engineering boundary

These are local interface gates, not secure entitlements. The static files and assets are available to anyone inspecting the prototype. Production must enforce access on authenticated server endpoints and media delivery, with verified billing state. Never rely on the client-side premium boolean to protect paid content.

## Checks

Nineteen model/content tests pass, including the exact free catalogue size, complete free-workout coverage, and different free/Premium exercise, template and session access. Browser checks verify free workout start, locked HIIT, locked mobility collection and Premium unlock. Existing history is never deleted by changing tiers.
