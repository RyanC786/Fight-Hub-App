# Fight Hub App — Product Plan

2026-09-27: completed the previously blocked GitHub backup of guided training and replaced the eight guided stick-figure diagrams with richer ChatGPT-generated exercise illustrations. The images remain draft instructional content pending technique review.

Latest shift: guided planning now leads the prototype, with equipment/body-focus matching, a dated seven-day schedule and eight draft movement diagrams. [Guided-training notes](docs/GUIDED-TRAINING.md) distinguish implemented interactions from the still-unreviewed programme content. Goal, time and experience adaptation remain future work.

Updated: 2026-09-26

Repository: https://github.com/RyanC786/Fight-Hub-App

Status: discovery and planning. No implementation stack, price, budget or launch date has been agreed.

Related planning: [Screens and first-week member journey](docs/MEMBER-JOURNEY.md). This expands the proposed experience; it does not mark features as built or all design choices as approved.

## 1. Vision

Build an international combat-sports platform combining sports discovery and coverage with a personal home and gym fitness companion. Help members get fitter, build strength and muscle, and improve general conditioning while following their favourite sports.

Proposed positioning: **Follow your sport. Build your fitness. See your progress.**

## 2. Confirmed owner decisions

- Serve an international audience aged 18 and over.
- Cover beginners, recreational trainees, competitors and fans; personalise the experience to their interests rather than show everyone the same home screen.
- Cover contact sports and martial arts broadly, including boxing, MMA and Muay Thai.
- Start with a mobile-first web experience intended to be installable on Android and Apple phones; validate platform capabilities before promising native-app features.
- Start training functionality with home fitness and gym workouts.
- Support getting fitter, building strength and muscle, and conditioning for combat sports.
- Make repeat use valuable through plans, progress tracking and motivation; explore meals and rewards.
- Build a revenue-generating business with free and paid membership.
- No coaches are currently available to create or review programmes.
- No fixed budget or deadline has been supplied. Define scope and dependencies before estimating.
- Save plans and created project work to this repository and push updates as work progresses.

The 18+ restriction is a product choice, not a consequence of accepting card payments.

## 3. Existing platform — owner-reported, not yet inspected

The Fight Hub website is currently hosted locally and is intended to use FightHub.world. It includes sport information, fighter profiles and histories, news, blogs, events and calendars across combat sports. An AI agent searches for and updates content regularly.

Access, technology, database structure, content quality, source rights and integration options remain unverified. Inspect these before deciding whether to extend the current platform or introduce a separate application.

## 4. Proposed first-release experience

### Personal setup

Collect sports of interest, primary fitness goal and secondary goals, experience, home/gym setting, equipment, available days and preferred session length. Allow multiple interests while producing one coherent schedule rather than stacking separate programmes.

### My Fight Hub / Today

Show today's session or recovery day, the next action, recent progress and relevant sports content. Fans should be able to prioritise coverage without completing training setup.

### Weekly training plan

Combine general strength, cardio, mobility and recovery within authored programmes. Support scheduling and suitable equipment alternatives. Programme depth can expand in stages while editorial coverage remains broad.

### Workout experience

Provide exercise instructions, sets, repetitions and timers where appropriate. Log completion, weights/repetitions and perceived difficulty quickly. Automatically retain completed in-app sessions; do not imply that physical activity is automatically detected.

### Progress and motivation

Show history, weekly consistency and personal performance milestones. Use flexible targets, optional reminders and an encouraging restart after missed sessions. Recovery days count as following the plan. Avoid incentives that reward excessive exercise.

### Sports content

Surface relevant news, fighters and events from the existing platform after integration feasibility and content provenance are checked.

## 5. Proposed free and paid tiers — to validate

| Free | Paid |
| --- | --- |
| News, events and sport guides | Wider structured programme library |
| Starter fitness programme | More flexible planning and scheduling |
| Basic workout logging and history | Equipment-based alternatives |
| Basic progress and milestones | Deeper progress insights |

Keep basic training history accessible to free members. Pricing, trials, billing intervals and exact feature boundaries are undecided. Paid value should come from useful ongoing planning and progress support, not simply more articles.

Journey-design refinement: basic session movement and supported alternatives within a free programme should remain free usability features. Paid planning and equipment features refer to broader programme options and richer planning capabilities, subject to validation.

## 6. Training and nutrition content approach

This is a proposed product boundary, not a claim that programmes have been validated. Start with sourced, authored, versioned general-fitness content and explicit progression rules. Define an exercise/content review process before releasing training guidance. Lack of current coach access is an unresolved content dependency.

Keep sport-specific technique coaching, sparring preparation, fight camps, rehabilitation and weight-cutting guidance outside the initial training offer. Do not claim general fitness programmes make members fight-ready. Avoid unconstrained AI-generated individual workouts in the first release.

Consider simple meal inspiration and planning later. Individual nutrition prescriptions are not part of the proposed first release. Establish appropriate expertise and review before expanding guidance.

## 7. Later candidates — not launch commitments

- Meal inspiration, preferences and meal-planning tools.
- Optional participation challenges and additional rewards.
- Wearable and phone-health integrations, subject to web/native feasibility.
- More advanced programme adjustments supported by validated rules and review.
- Additional languages; English first is a recommendation awaiting explicit confirmation.
- Deeper sport-specific programmes with suitable expert input.
- Native applications if demonstrated member needs justify them.

## 8. Delivery stages

1. Inspect the current Fight Hub site, code and content pipeline; identify reusable components and integration constraints.
2. Map onboarding through the first completed training week; define screens, programme sourcing, data requirements and membership boundaries.
3. Prototype the mobile experience and validate it with representative fans and trainees.
4. Build the agreed first-release scope, including accounts, planning, logging, progress, content integration and membership.
5. Verify key journeys on Android and iPhone browsers, installation behaviour, accessibility, data handling and payment flows before a controlled release.
6. Measure retention and paid value, then prioritise expansion from evidence.

## 9. Proposed readiness and success measures

Before launch, a member should be able to set up an account, find appropriate content, receive a coherent plan, complete and log a session, view retained progress, and manage membership. Define and test reminder preferences, local dates/time zones, units, account deletion and subscription cancellation. Training content sourcing and review must be resolved.

Candidate measures: setup completion, first workout completion, return rate in subsequent weeks, planned sessions completed, free-to-paid conversion and paid retention. Targets are not yet set. Daily use should not imply daily training.

## 10. Open decisions

- English-first launch confirmation and later localisation priorities.
- Existing platform architecture, repository access and API reuse.
- Programme authorship, evidence sources, licensing and qualified review.
- Initial programme catalogue and supported equipment.
- Exact free/paid boundaries, pricing and payment provider.
- Notification and offline requirements, and platform limitations.
- Hosting, database, AI/content service costs and maintenance budget.
- International payment availability, privacy requirements and launch readiness checks.
- Whether tracking integrations justify a native application later.

## 11. Repository working agreement

Keep this plan current as decisions are made. Record proposals separately from confirmed decisions. Commit and push task-related plans, source code and assets at meaningful milestones. Preserve existing work and never force-push without explicit authorisation. Keep secrets, credentials, local environment files and private member data out of Git. Report push failures honestly; local changes are not published until the remote update is verified.

## 12. Decision log

- 2026-09-26: Owner confirmed international reach, 18+, home/gym training, combined fitness/strength/conditioning goals and free-to-paid revenue model.
- 2026-09-26: Owner supplied the Fight-Hub-App GitHub repository and requested that planning and created work be saved and pushed throughout development.
- 2026-09-26: Owner authorised continuing with the screen-by-screen member journey. The proposed design is recorded in [MEMBER-JOURNEY.md](docs/MEMBER-JOURNEY.md), including distinct fan/training paths and the first completed week.
- 2026-09-26: Added a [clickable mobile layout preview](app/index.html) and [design notes](docs/LAYOUT-NOTES.md). All content and state are demonstration-only; no production services are connected.
- Next: review the layouts and inspect the existing website before selecting the implementation stack. Existing-platform inspection and training-content sourcing/review remain open dependencies.
- 2026-09-26: Owner requested a frosted-glass app aesthetic. Added translucent panels, soft blue/lilac surfaces and floating navigation to the prototype, preserving the existing demonstration flows.
- 2026-09-26: Owner supplied the Fight Hub logo. Integrated the logo locally and revised the glass palette to red, charcoal and silver to match its visual identity.
- 2026-09-26: Owner requested deeper training selection and premium functionality. Expanded the prototype with 42 draft exercise entries, 12 session selections, body/equipment filters, a session builder, local logs and premium demo access. See [training scope and validation](docs/TRAINING-PROTOTYPE.md). Production programmes, accounts, dated scheduling and billing remain unimplemented.

- 2026-09-26: Expanded home training by 30 draft exercises and five free selections, bringing the catalogue to 72 exercises and 17 selections. Added household equipment and no-jumping filters plus alternatives for jumping movements.

- Added a HIIT interval timer preview: adjustable work/recovery, rounds, movement selections and pause/resume. Demo settings are not personalised prescriptions.
- 2026-09-27: Expanded to 82 exercises with original movement instructions, workload examples and easier options. Replaced the short interval preview with complete 25/30/40-minute sessions, military-inspired and quiet circuits, three difficulty settings, and built-in preparation/recovery. Added warm-up/cooldown guides to custom and guided sessions and actual weight logging. See [conditioning expansion and premium priorities](docs/CONDITIONING-EXPANSION.md). Illustrations are being expanded across the catalogue; the media manifest records published coverage.

- 27 September: added martial-arts mobility and splits-preparation foundations; proposed keeping basic instructions and mobility free, with reviewed programmes, class-aware scheduling and progress insights as paid value. See [mobility and membership plan](docs/MARTIAL-ARTS-MOBILITY.md). Prices and production subscriptions remain undecided.

- Approved revised membership: free is a limited sample (12 exercises, 3 fixed workouts, introductory mobility, one repeatable guided sample). Full library, HIIT, flexibility collections, custom builder and weekly planning are Premium. This supersedes earlier broad-free proposals. See [current membership rules](docs/MEMBERSHIP.md).

- 28 September: routine-first dashboard and three-day weekly planning replace the confusing repeated-session entry flow. Push/pull/legs and full-body options have dated, distinct sessions and exercise previews before warm-up. HIIT exercise details now return to their origin. See [weekly routine](docs/WEEKLY-ROUTINE.md).

- 2026-09-29: Owner chose the launch route: an installable web app with Stripe subscriptions first, built ready for the Apple App Store and Google Play later. The `prototype/` folder became `app/`, now a full-screen installable app (manifest, icons, offline service worker, install button with iPhone instructions) published at https://fighthub-swart.vercel.app/app/. Exercise illustrations converted to WebP (156 MB to 2 MB; originals kept in `source-art/`). Explore now shows live FightHub news and the next fight night. Premium is free to try during early access until Stripe is connected. See [installable app](docs/INSTALLABLE-APP.md).
