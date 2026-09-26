# Mobile layout preview

Status: interactive planning prototype, not the production app.

Open [prototype/index.html](../prototype/index.html) in a browser. It uses a companion glass.css stylesheet, with no external libraries, fonts, tracking or account connection. State lasts only while the page is open. Reset preview clears it.

## Design direction

Current branding revision: the owner supplied the Fight Hub logo, now stored at `prototype/assets/fight-hub-logo.png` and displayed with descriptive alt text. Its red, black and metallic silver appearance replaces the earlier blue/lilac direction with smoky dark glass, silver text and red action highlights. Colours are visual interpretations, not official sampled brand specifications. The updated header and welcome screen were visually checked in the browser.

Logo source supplied by owner: https://ik.imagekit.io/connectai/A2D2E56B-497E-452C-BC48-B4CE82E67454__1_-removebg-preview.png?updatedAt=1790271367390

The blue palette described below records the original exploration and is superseded by this branding revision.

2026-09-26 visual revision: owner requested an Apple-like frosted-glass feel. The preview now uses translucent blurred cards, softly coloured blue/lilac backgrounds, rounded controls and a floating glass navigation bar. System typography adapts to the device. This is an inspired visual treatment, not a claim of native Apple UI parity. The separate `prototype/glass.css` layer includes opaque fallbacks and reduced-transparency/contrast preferences. Keep this stylesheet alongside the HTML when opening the preview.

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
