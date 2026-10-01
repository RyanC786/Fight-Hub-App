# Self-defence pictures (12)

Pictures for the new **Self-defence** discipline in the Fight tab: a cover photo and five drills, each in a men's and a women's version.

- **Same style as the other pictures:** landscape 3:2 (for example 1536 x 1024).
- **References:**
  - Women's versions: attach `female-demonstrator.png`.
  - Men's versions: attach any existing men's picture (for example `source-art/movements/arm-circles.png`).
- **Save:** use exactly the file name shown, in `image-requests/drop-here`.
- **Check each picture before saving:**
  - calm, controlled and non-violent: nobody is hurt or frightened;
  - same camera angle and direction in both poses;
  - no text and no logos (except the Fight Hub shirt).

## Cover

### Self-defence: `self-defence.png`

Create one cinematic sports photograph for the Fight Hub app: Self-defence. In a bright, safe training class, a confident adult man in a red Fight Hub training T-shirt stands slightly side-on with both open hands raised in front of his chest in a calm "stop" boundary. A training partner in a plain black training top holds a striking pad in front of him. Both look focused and calm. Dramatic low-key lighting with a warm red rim light, dark gym background, realistic adult athletes in practical training kit, sharp focus, landscape 3:2 composition with space at the bottom for a title. No text, no other logos, no watermarks.

### Self-defence (women): `self-defence-f.png`

The same scene, but the main person is the woman from the attached character reference: an adult woman with an athletic, realistic build, dark hair tied back in a low bun, wearing a red Fight Hub training T-shirt and charcoal full-length training leggings. Both people look focused and calm. Dramatic low-key lighting with a warm red rim light, dark gym background, landscape 3:2 with space at the bottom for a title. No text, no other logos, no watermarks.

## Drills

Each drill has a men's prompt (`<name>.png`) and a women's prompt (`<name>-f.png`). For the women's prompt, swap the demonstrator text for the woman from the character reference, wearing a red Fight Hub training T-shirt and charcoal full-length training leggings, and attach the reference.

### The fence: `fence.png` / `fence-f.png`

Create one premium exercise demonstration image for Fight Hub: THE FENCE (HANDS-UP BOUNDARY). Photorealistic adult fitness demonstrator wearing a red Fight Hub training T-shirt, charcoal joggers and white trainers, charcoal studio background and clear ground shadow. Landscape 3:2 composition, two full-body poses side by side of the same adult, generous margins, three-quarter front view in both. LEFT: standing relaxed, hands down by the sides. RIGHT: slightly side-on, one foot forward, both open hands raised in front of the chest with palms facing forward and elbows soft, calm and alert expression. Small simple arrow from left to right. Anatomically correct hands and feet. No words, no extra limbs. Clear instructional photography, full body uncropped.

### Palm heel strike: `palm-strike.png` / `palm-strike-f.png`

Create one premium exercise demonstration image for Fight Hub: PALM HEEL STRIKE. Photorealistic adult fitness demonstrator wearing a red Fight Hub training T-shirt, charcoal joggers and white trainers, charcoal studio background and clear ground shadow. Landscape 3:2 composition, two full-body poses side by side of the same adult, side view in both, facing right. LEFT: the fence position, open hands raised in front of the chest. RIGHT: rear arm driven straight forward at chin height striking with the heel of the palm, fingers pulled back, rear heel lifted and hips turned, other hand open in front of the face. Small simple arrow from left to right. Anatomically correct hands and feet. No words, no extra limbs. Clear instructional photography, full body uncropped.

### Breaking a wrist grab: `wrist-escape.png` / `wrist-escape-f.png`

Create one premium exercise demonstration image for Fight Hub: BREAKING A WRIST GRAB. Two photorealistic adults in a calm, controlled training demonstration: the demonstrator, wearing a red Fight Hub training T-shirt, charcoal joggers and white trainers, and a training partner in a plain black training top and charcoal joggers. Charcoal studio background with a clear ground shadow. Landscape 3:2 composition, two side-by-side scenes with the same two people, side view in both. LEFT: the partner holds the demonstrator's right wrist with one hand, and the demonstrator stands balanced. RIGHT: the demonstrator has turned the forearm and pulled the wrist free through the gap between the partner's thumb and fingers, stepping back with the other hand raised open in front of the chest. Small simple arrow from left to right. Anatomically correct hands. No words, no extra limbs. Clear instructional photography, full bodies uncropped.

### Escaping a hug from behind: `bear-hug-escape.png` / `bear-hug-escape-f.png`

Create one premium exercise demonstration image for Fight Hub: ESCAPING A HUG FROM BEHIND. Two photorealistic adults in a calm, controlled training demonstration: the demonstrator, wearing a red Fight Hub training T-shirt, charcoal joggers and white trainers, and a training partner in a plain black training top and charcoal joggers. Charcoal studio background with a clear ground shadow. Landscape 3:2 composition, two side-by-side scenes with the same two people, three-quarter front view in both. LEFT: the partner stands behind the demonstrator with arms loosely around the demonstrator's upper arms, and the demonstrator has dropped low with knees bent, feet wide and hands raised. RIGHT: the demonstrator has stepped to the side, turned and pushed the partner away with both hands to make space, ready to move away. Small simple arrow from left to right. Anatomically correct hands and feet. No words, no extra limbs. Clear instructional photography, full bodies uncropped.

### Scan and escape: `scan-escape.png` / `scan-escape-f.png`

Create one premium exercise demonstration image for Fight Hub: SCAN AND ESCAPE. Photorealistic adult fitness demonstrator wearing a red Fight Hub training T-shirt, charcoal joggers and white trainers, charcoal studio background and clear ground shadow, with an open studio door at the right edge of the frame. Landscape 3:2 composition, two full-body poses side by side of the same adult. LEFT: standing still, head turned to look over one shoulder, scanning the room, hands relaxed at chest height. RIGHT: walking briskly towards the open door with both open hands raised in front of the chest. Small simple arrow from left to right. Anatomically correct hands and feet. No words, no extra limbs. Clear instructional photography, full body uncropped.

## For Claude: adding the pictures to the app

- **Cover:**
  - `self-defence.png` becomes `app/assets/arts/self-defence.webp`, and the women's cover becomes `self-defence-f.webp` (add it to `FemaleMedia.arts`).
  - Then change the Self-defence discipline's `image` from `kickboxing` to `self-defence` in `app/fight-data.js`.
- **Drills:**
  - `<name>.png` becomes `app/assets/movements/<name>-realistic.webp`; add the name to `media` in `app/fight-data.js`.
  - The women's version becomes `<name>-realistic-f.webp`; add it to `FemaleMedia.movements`.
