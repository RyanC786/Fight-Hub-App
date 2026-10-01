# Gym lifts pictures (16)

Eight classic gym lifts were added to the exercise library and the gym "Build muscle" routine. Each needs the usual men's picture (`<id>.png`) and a women's version (`<id>-f.png`).

- Same style as every other exercise picture: landscape 3:2 (for example 1536 x 1024), two poses side by side with a small arrow between them.
- **Women's versions:** attach `female-demonstrator.png`.
- **Men's versions:** attach any existing men's picture (for example `source-art/movements/arm-circles.png`), so it's the same man.
- **Save:** use exactly the file name shown, in `image-requests/drop-here`.
- **Check before saving:** correct technique, the same camera angle and equipment in both poses, plates on both ends of the bar, and no text.

The men's prompt is given in full. For the women's version, use the same prompt but change the demonstrator to: *"the woman from the attached character reference: an adult woman with an athletic, realistic build, dark hair tied back in a low bun, wearing a red Fight Hub training T-shirt and charcoal full-length training leggings and white trainers"*.

---

### Barbell back squat: `back-squat.png` / `back-squat-f.png`

Create one premium exercise demonstration image for Fight Hub: BARBELL BACK SQUAT. Photorealistic adult fitness demonstrator wearing a red Fight Hub training T-shirt, charcoal joggers and white trainers, in a squat rack with safety bars set just below squat depth, a barbell with plates on both ends. Charcoal studio background, clear ground shadow. Landscape 3:2 composition, two full-body poses side by side of the same adult, side view in both. LEFT: standing tall inside the rack with the barbell across the upper back (not the neck), hands just wider than shoulders, braced. RIGHT: squatted down with thighs about level with the floor, chest up, knees over the toes, heels down, bar still across the upper back. Small simple arrow from left to right. Anatomically correct hands and feet. No words, no extra limbs. Clear instructional fitness photography, full body uncropped.

### Barbell deadlift: `deadlift.png` / `deadlift-f.png`

Create one premium exercise demonstration image for Fight Hub: BARBELL DEADLIFT. Photorealistic adult fitness demonstrator wearing a red Fight Hub training T-shirt, charcoal joggers and white trainers, a barbell with large plates on both ends on the floor. Charcoal studio background, clear ground shadow. Landscape 3:2 composition, two full-body poses side by side of the same adult, side view in both. LEFT: set-up position: bar over the middle of the feet, hips hinged back and knees bent, long flat back, arms straight gripping the bar just outside the legs. RIGHT: standing tall at the top, hips and knees straight, shoulders back, the bar resting against the thighs. Small simple arrow from left to right. Anatomically correct hands and feet. No words, no extra limbs. Clear instructional fitness photography, full body uncropped.

### Barbell bench press: `barbell-bench.png` / `barbell-bench-f.png`

Create one premium exercise demonstration image for Fight Hub: BARBELL BENCH PRESS. Photorealistic adult fitness demonstrator wearing a red Fight Hub training T-shirt, charcoal joggers and white trainers, lying on a flat bench in a power rack with safety arms set just below chest height, a barbell with plates on both ends. Charcoal studio background. Landscape 3:2 composition, two side-by-side scenes of the same adult, side view in both. LEFT: the bar lowered to the lower chest, elbows slightly tucked, feet flat on the floor. RIGHT: the bar pressed up over the shoulders with straight arms. Small simple arrow from left to right. Anatomically correct hands and feet. No words, no extra limbs. Clear instructional fitness photography, full body uncropped.

### Barbell overhead press: `overhead-press.png` / `overhead-press-f.png`

Create one premium exercise demonstration image for Fight Hub: BARBELL OVERHEAD PRESS. Photorealistic adult fitness demonstrator wearing a red Fight Hub training T-shirt, charcoal joggers and white trainers, standing with a barbell with plates on both ends. Charcoal studio background, clear ground shadow. Landscape 3:2 composition, two full-body poses side by side of the same adult, three-quarter side view in both. LEFT: standing tall, the bar resting across the front of the shoulders, hands just wider than shoulder-width. RIGHT: the bar pressed straight overhead with arms locked out, the bar over the middle of the feet, glutes squeezed, no arch in the lower back. Small simple arrow from left to right. Anatomically correct hands and feet. No words, no extra limbs. Clear instructional fitness photography, full body uncropped.

### Bent-over barbell row: `barbell-row.png` / `barbell-row-f.png`

Create one premium exercise demonstration image for Fight Hub: BENT-OVER BARBELL ROW. Photorealistic adult fitness demonstrator wearing a red Fight Hub training T-shirt, charcoal joggers and white trainers, holding a barbell with plates on both ends. Charcoal studio background, clear ground shadow. Landscape 3:2 composition, two full-body poses side by side of the same adult, side view in both. LEFT: hinged forward with the torso at about 45 degrees, knees soft, long flat back, arms straight with the bar hanging below the shoulders. RIGHT: the same position with the bar pulled to the lower ribs and elbows driven back, back still flat. Small simple arrow from left to right. Anatomically correct hands and feet. No words, no extra limbs. Clear instructional fitness photography, full body uncropped.

### Pull-up: `pull-up.png` / `pull-up-f.png`

Create one premium exercise demonstration image for Fight Hub: PULL-UP. Photorealistic adult fitness demonstrator wearing a red Fight Hub training T-shirt, charcoal joggers and white trainers, on a black pull-up bar. Charcoal studio background. Landscape 3:2 composition, two side-by-side scenes of the same adult, front three-quarter view in both. LEFT: hanging from the bar with straight arms, hands just wider than the shoulders, palms facing away, feet off the floor. RIGHT: pulled up with the chin over the bar, elbows pointing down, body still. Small simple arrow from left to right. Anatomically correct hands and feet. No words, no extra limbs. Clear instructional fitness photography, full body uncropped.

### Parallel bar dip: `dip.png` / `dip-f.png`

Create one premium exercise demonstration image for Fight Hub: PARALLEL BAR DIP. Photorealistic adult fitness demonstrator wearing a red Fight Hub training T-shirt, charcoal joggers and white trainers, on a black dip station with parallel bars. Charcoal studio background. Landscape 3:2 composition, two side-by-side scenes of the same adult, side view in both. LEFT: supported at the top with straight arms, shoulders down, slight forward lean. RIGHT: lowered until the upper arms are about level with the floor, elbows pointing back, slight forward lean. Small simple arrow from left to right. Anatomically correct hands and feet. No words, no extra limbs. Clear instructional fitness photography, full body uncropped.

### Barbell curl: `barbell-curl.png` / `barbell-curl-f.png`

Create one premium exercise demonstration image for Fight Hub: BARBELL CURL. Photorealistic adult fitness demonstrator wearing a red Fight Hub training T-shirt, charcoal joggers and white trainers, holding a straight barbell with small plates on both ends. Charcoal studio background, clear ground shadow. Landscape 3:2 composition, two full-body poses side by side of the same adult, front three-quarter view in both. LEFT: standing tall, arms straight, the bar in front of the thighs with palms facing forward. RIGHT: the bar curled up to shoulder height, elbows still by the sides, body upright. Small simple arrow from left to right. Anatomically correct hands and feet. No words, no extra limbs. Clear instructional fitness photography, full body uncropped.

---

## For Claude: adding the pictures to the app

- `<id>.png` becomes `app/assets/movements/<id>-realistic.webp`; add the id to `app/exercise-media.js`.
- `<id>-f.png` becomes `<id>-realistic-f.webp`; add the id to `FemaleMedia.movements` in `app/female-media.js`.
