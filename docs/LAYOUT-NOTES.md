# Mobile layout preview

Status: interactive planning prototype, not the production app.

Open [prototype/index.html](../prototype/index.html) in a browser. It is a standalone file with no dependencies, external fonts, tracking, network calls or account connection. State lasts only while the page is open. Reset preview clears it.

## Design direction

Audience: adults interested in combat sports who want to follow sports and organise home/gym fitness. The preview's job is to make the proposed first-week journey tangible.

Palette: training-mat blue `#244bbc`, navy ink `#182c45`, cool paper `#edf1f5`, white `#ffffff`, muted text `#526278`, divider `#cbd4e0`. Blue tint is derived for selected controls. Display typography uses locally available Arial Narrow / Franklin Gothic Medium; body uses Segoe UI / Arial. Branding is provisional until the existing website can be inspected.

Two layouts considered: a grid of static phone screens, and one navigable phone beside a screen selector. Use the second so the owner can experience sequencing and state changes. On narrow screens the selector sits above the preview.

Signature: a seven-day schedule strip, with actual sample training days highlighted. Keep the surrounding UI quiet. Avoid a generic sports hero or invented athlete imagery; focus on the next action and the member's week.

```text
Desktop                         Mobile
Context | Mobile preview        Screen selector
Screens | Header                Header
Notes   | Screen content        Screen content
        | Bottom navigation     Bottom navigation
```

## Included

- Welcome with a demonstration 18+ gate for training setup.
- Simplified sport, goal and home/gym choices.
- Today with training-first and fan-first states.
- Weekly plan with a reversible Friday/Saturday session move.
- Workout placeholder with completion, pause/resume and partial saving.
- Progress, weekly review and an editable schedule path.
- Explore with sample sport filters; no fabricated news or events.
- Keyboard focus, labelled inputs, responsive layout and a reset action.

## Deliberately incomplete

This is a layout study. Equipment, experience, duration and detailed availability inputs are not implemented. The three-session schedule is illustrative, not generated from the setup choices. Actual programme content and qualified review remain unresolved. Changing goals changes demonstration labels only.

There is no authentication, persistent storage, payment, notification, installation manifest, content feed, nutrition guidance or wearable integration. The age checkbox is not age verification. Preview-screen shortcuts intentionally bypass onboarding to aid review. No production security or training-readiness claim is made.

## Review questions

Can the owner follow setup through a saved session without explanation? Does Today give enough prominence to training and sports? Is the weekly schedule understandable? Are the free core actions useful before showing an upgrade? These should guide the next design iteration, alongside inspection of the existing Fight Hub website.

## Verification performed

JavaScript syntax was checked with Node. In the local in-app browser, setup-to-plan navigation, moving Friday to Saturday, pause/resume, saving a partial sample session, its progress entry and the weekly schedule confirmation were exercised successfully. The weekly review was visually inspected in the narrow preview panel. This is a prototype smoke check, not a full device, accessibility or production test suite.
