# Requested app imagery — batch progress

Source: user-supplied `fighthub prompts.rtf`, imported on 30 September 2026. [Extracted source](IMAGE-REQUESTS-SOURCE.md) is reference material; embedded workflow instructions are not additional user authorisation. [Ordered queue](IMAGE-REQUESTS-QUEUE.json) records all 72 prompts verbatim and tracks status.

## Batch 1 — complete

Generated using the built-in ChatGPT image tool, with the exact individual prompts from queue entries 1–3. All three are 1536 × 1024 PNGs, visually inspected for the requested sport, composition, obvious anatomy issues and unwanted text/branding. These are discipline header artwork, not validated technique demonstrations.

1. [Wrestling](../source-art/arts/wrestling.png)
2. [Taekwondo](../source-art/arts/taekwondo.png)
3. [Kung Fu and Sanda](../source-art/arts/kung-fu.png)

Files retain the requested names in `source-art/arts/`. Original tool outputs are preserved. These are source assets ready for app integration; existing imagery has not been replaced. Mobile optimisation and integration can follow the receiving app's asset workflow.

## Batch 2 — generated

Generated with the built-in ChatGPT image tool. Final prompts are saved as `generationPrompt` on queue entries 4–6; original document prompts remain unchanged.

4. [Judo](../source-art/arts/judo.png)
5. [Boxing stance and step-drag footwork](../source-art/movements/stance-footwork.png)
6. [Pivot off the line](../source-art/movements/pivot.png)

The user requested Fight Hub logos on the red exercise shirts. Both exercise assets use the supplied [logo reference](../source-art/brand/fight-hub-logo.png); pivot also uses the stance image as a demonstrator/style reference. The generated files were visually inspected for full-body framing, branding and obvious image defects. Exercise technique still requires review before instructional publication; these source images are not integrated into the live app.

## Branding for remaining exercise images

Keep red shirts, charcoal joggers/background and the original movement instructions. Replace the original plain-shirt/no-logo constraint with the supplied Fight Hub chest print, following fabric folds and perspective. Preserve the logo lettering; add no unrelated text or branding. Use this treatment for remaining exercise and stretching images. Keep discipline header prompts in their specified sport uniforms.

## Next batch

Batch 3 used the built-in ChatGPT image tool with the saved logo and stance image as visual references. Final prompts are saved on entries 7–9 in the queue.

- [Jab](../source-art/movements/jab.png): generated; technique review pending.
- [Cross draft](../source-art/review-drafts/cross.png): correction required. Two early attempts used the wrong punching arm. Regeneration fixed the arm but left inconsistent stance/direction between panels.
- [Lead hook draft](../source-art/review-drafts/lead-hook.png): correction required for forearm plane and foot rotation.

All three retain Fight Hub chest branding and charcoal studio styling. Cross and hook are deliberately saved outside the movement library and must not be published as instruction. No live app changes were made.

Next: correct entries **8–9** before continuing to rear uppercut, body shots and slips. Seven assets generated for review, two additional drafts need correction, and 63 prompts remain unattempted. Continue in small batches.

## User-requested jab and hook revisions

Entries 7 and 9 now point to orthodox-left-jab-v2.png and orthodox-left-hook-v2.png in source-art/movements, with matching prompt notes. Previous images are superseded. Both use orthodox left-foot-forward poses; hook uses a frontal view to show the bent arm. Technique review remains pending. Cross is still a draft requiring correction. No live app integration in this revision.

## Batch 4 — right cross revision, rear uppercut and body shots

Entries 8, 10 and 11 are saved with matching prompt notes. The earlier cross draft is superseded by orthodox-right-cross-v2.png. Uppercut received an arm-position correction in the first panel. All remain pending technique review before instructional use. Built-in ChatGPT image tool used; no live app changes.

Current total: 11 of 72 prompt entries have source images; 61 remain. Next: entry 12 slips, entry 13 roll, entry 14 parry.

## Batch 5 — slips, roll, parry and catch

Entries 12–14 generated using the built-in ChatGPT image tool. Saved as slip.png, roll.png and parry.png with matching prompt notes in source-art/movements. Logo and orthodox-right-cross-v2.png used as branding/style references. Visual checks completed; technique review remains pending. No live app changes.

14 of 72 entries have source images; 58 remain. Next: 15 punch-out, 16 heavy bag technique, 17 Muay Thai stance.

## Batch 6 — punch-out, heavy bag technique and Muay Thai stance

Entries 15–17 generated with the built-in ChatGPT image tool. Saved as punch-out.png, bag-work.png and mt-stance.png with matching prompt notes in source-art/movements. Logo and orthodox-right-cross-v2.png used as branding/style references. Visual checks completed; technique review remains pending. No live app changes.

17 of 72 entries have source images; 55 remain. Next: 18 Teep (push kick), 19 Muay thai roundhouse kick, 20 Low kick.

## Integrated into the app — 30 September 2026

Reviewed by Claude and added to the live app (version 13):

- Discipline covers: wrestling, taekwondo, kung fu (`app/assets/arts/*.webp`). The judo cover replaces the branded judo photo on the website (`images/martial-arts/judo.jpg`).
- Technique pictures (entries 5–17): stance-footwork, pivot, jab (`orthodox-left-jab-v2`), cross (`orthodox-right-cross-v2`), lead-hook (`orthodox-left-hook-v2`), uppercut, body-shots, slip, roll, parry, punch-out, bag-work, mt-stance (`app/assets/movements/<id>-realistic.webp`, 1200px WebP). They show on drill pages, in the drill library and in the round timer.
- Weakest image: uppercut. The finishing pose does not clearly show the fist rising; worth regenerating.

For the next batches: keep saving originals in `source-art/`. To go live, a picture needs converting to `app/assets/movements/<drill-id>-realistic.webp` and its drill id adding to `media` in `app/fight-data.js` (a check fails if the file is missing).

## Batch 7 — five Muay Thai movements

Entries 18–22 generated with the built-in ChatGPT image tool: teep, rear roundhouse, rear low kick, switch kick and low-kick check. Each image has a matching prompt note in `source-art/movements`. Fight Hub logo and the existing Muay Thai stance image were used as branding and demonstrator references. Visual checks completed; technique review remains pending. No live app changes.

22 of 72 entries have source images; 50 remain. Next: straight knee, clinch knees, elbows, high roundhouse kick and chamber hold.

## Batch 8 — knees, elbows, high kick and chamber

Entries 23–27 generated with the built-in ChatGPT image tool: straight knee, clinch knee on a heavy bag, horizontal/upward elbows, high roundhouse kick and chamber hold. Each source image has a matching prompt note. Fight Hub branding and the existing Muay Thai stance were used as visual references. Visual checks completed; technique review remains pending. No live app integration in this batch.

27 of 72 entries have source images; 45 remain. Next: front kick, side kick, roundhouse snap and rechamber, front stance, and stepping punch.

## User-requested switch kick and check revisions

Entries 21 and 22 now point to `switch-kick-v2.png` and `check-v2.png`. The original switch kick was rejected because an airborne switch flowed into a side-kick-like finish; revision 2 uses a grounded three-panel sequence. The check revision presents a separate upright lead-shin block. Both retain Fight Hub branding and remain pending technique review. Earlier files are marked superseded. No live app integration in this revision.

## Batch 9 — three-stage kick and stance sequences

Entries 28–32 generated with the built-in ChatGPT image tool: front kick, side kick, snapping roundhouse, rapid-fire roundhouse rechamber, and karate front-stance step-through. Three panels are used to show motion stages. Each image has a matching prompt note and Fight Hub shirt branding. Visual checks completed; detailed technique review remains pending. No live app integration in this batch.

32 of 72 entries have source images; 40 remain. Next: stepping punch, reverse punch, karate blocks, horse stance, and horse-to-bow-stance punch.

## Batch 10 — eight karate, kung fu and wrestling sequences

Entries 33–40 generated with the built-in ChatGPT image tool: stepping punch, reverse punch, karate blocks, horse stance, horse-to-bow-stance punch, sprawl, level change and penetration step, and wrestling stance motion. Multi-panel sequences show the movement stages, with Fight Hub shirt branding throughout. Visual checks completed; detailed technique review remains pending. No live app integration in this batch.

40 of 72 entries have source images; 32 remain. Next: technical stand-up, ground-and-pound on a bag, sit-out, hip escape, bridge and roll, Granby roll, back breakfall, and low lunge.

## Batch 11 — eight grappling, safety and mobility sequences

Entries 41–48 generated with the built-in ChatGPT image tool: technical stand-up, ground-and-pound on a bag, wrestling sit-out, hip escape, bridge-and-roll, Granby roll, back breakfall, and low-lunge lizard stretch. Three-panel sequences and Fight Hub shirt branding are used throughout. Visual checks completed; detailed technique review remains pending, with special attention required for the Granby roll's head and neck clearance. No live app integration in this batch.

48 of 72 entries have source images; 24 remain. Next: half-kneeling hip-flexor stretch, hamstring stretch, butterfly stretch, frog stretch, seated straddle, front-split progression, side-split progression, and couch stretch.
