// Writes image-requests/WOMEN-PROMPTS.md and image-requests/women-requests.json:
// female versions of every Fight Hub picture, plus both versions of the new
// glute and leg exercises.
// Usage: node tools/make-women-requests.cjs image-requests
const fs = require('fs');
const path = require('path');
const out = process.argv[2];
const app = path.join(__dirname, '..', 'app');
const Library = require(path.join(app, 'training-data.js'));
const Content = require(path.join(app, 'exercise-content.js'));
const LibraryMedia = require(path.join(app, 'exercise-media.js'));
const Fight = require(path.join(app, 'fight-data.js'));
const drillRequests = require(path.resolve(out, 'requests.json')).filter(r => r.kind === 'drill');

const WOMAN = 'adult female fitness demonstrator with an athletic, realistic build and a natural, professional look, dark hair tied back in a low bun, wearing a plain red short-sleeved fitted training T-shirt, charcoal full-length training leggings';
const MAN = 'Photorealistic adult fitness demonstrator wearing a plain red training shirt, charcoal joggers';
const ENDING = 'Small simple arrow from left to right. Anatomically correct hands and feet. No words, no logo, no extra limbs, no stick figures. Clear instructional fitness photography, full body uncropped.';

// ---- New glute and leg exercises: [id, NAME, props, LEFT, RIGHT] ----
const MAT = 'on a black training mat';
const fresh = [
  ['single-leg-bridge', 'SINGLE-LEG GLUTE BRIDGE', MAT, 'side view lying on the back, one foot flat with the knee bent, the other leg lifted with that knee held above the hip, arms flat by the sides', 'hips lifted high through the planted heel into a straight line from shoulders to knee, the other leg still raised, hips level'],
  ['frog-pump', 'FROG PUMP', MAT, 'side view lying on the back, soles of the feet pressed together close to the hips, knees falling open, arms by the sides', 'hips lifted a short way off the mat, soles still together and knees open, glutes squeezed'],
  ['band-walk', 'BANDED SIDE WALK', 'a light red loop resistance band just above the knees', 'front view, shallow half-squat with feet hip-width apart, hands together in front of the chest', 'front view, the same half-squat after a wide side step, feet further apart, band stretched, knees pushed out over the toes; the arrow points sideways'],
  ['fire-hydrant', 'FIRE HYDRANT', MAT, 'rear three-quarter view on hands and knees, hands under the shoulders, knees under the hips, flat back', 'one bent knee lifted out to the side to hip height, torso level and square to the floor'],
  ['donkey-kick', 'DONKEY KICK', MAT, 'side view on hands and knees with a long flat back', 'one knee still bent at 90 degrees, that foot pressed up towards the ceiling until the thigh is level with the back, sole facing up, no arch in the lower back'],
  ['curtsy-lunge', 'CURTSY LUNGE', '', 'front three-quarter view standing tall, feet hip-width apart, hands clasped at the chest', 'one foot stepped back and diagonally across behind the other, both knees bent into a curtsy lunge, front knee over the front foot, torso upright'],
  ['sumo-squat', 'DUMBBELL SUMO SQUAT', 'one dumbbell', 'front view, wide stance with toes turned out, holding one dumbbell vertically by its end with both hands between the legs', 'squatted down between the hips until the thighs are close to level, knees pushed out over the toes, chest up, dumbbell hanging between the legs'],
  ['step-up', 'STEP-UP', 'a sturdy black plyo box at knee height', 'side view, one whole foot placed on top of the box, the other foot on the floor', 'standing tall on top of the box on the working leg, the other foot lifted beside it'],
  ['single-leg-rdl', 'SINGLE-LEG ROMANIAN DEADLIFT', 'one dumbbell', 'side view standing on the left leg with a soft knee, dumbbell in the right hand in front of the thigh', 'hinged forward on the left leg, torso and right leg in one straight line close to level with the floor, dumbbell lowered below the knee, hips square'],
  ['bulgarian-split', 'BULGARIAN SPLIT SQUAT', 'a flat black weight bench and a pair of dumbbells', 'side view, standing a long stride in front of the bench with the top of the rear foot resting on it, dumbbells at the sides, torso upright', 'lowered straight down, front thigh close to level, front knee over the front foot, rear knee near the floor, dumbbells still at the sides'],
  ['b-stance-thrust', 'B-STANCE HIP THRUST', 'a flat black weight bench', 'side view, upper back resting on the edge of the bench, hips low near the floor, one foot flat and the other foot forward with only its heel touching the floor', 'hips driven up until the torso is level, the flat foot doing the work, the forward heel resting lightly on the floor'],
  ['kb-swing', 'KETTLEBELL SWING', 'a black kettlebell', 'side view, hips hinged back and knees soft, long flat back, the kettlebell swung back between the thighs with straight arms', 'standing tall with hips fully extended and glutes squeezed, straight arms, kettlebell floating at chest height'],
  ['cable-kickback', 'CABLE GLUTE KICKBACK', 'a cable machine with an ankle strap on the low pulley', 'side view facing the cable machine, hands holding its frame, ankle strap on one ankle, that leg beside the standing leg, slight forward lean', 'the strapped leg kicked straight back from the hip, torso still, no arch in the lower back'],
  ['pull-through', 'CABLE PULL-THROUGH', 'a cable machine with a rope attachment on the low pulley', 'side view facing away from the cable machine, hips hinged back with a flat back, holding the rope between the legs with straight arms', 'standing tall with hips driven forward and glutes squeezed, rope between the legs, arms relaxed'],
  ['back-extension', 'GLUTE-FOCUSED BACK EXTENSION', 'a 45-degree back extension bench', 'side view on the 45-degree back extension bench, pad just below the hips, heels hooked under the rollers, torso lowered by hinging at the hips, arms crossed over the chest', 'torso raised until the body is one straight line from heels to head, glutes squeezed, no over-arching'],
  ['hip-abduction', 'SEATED HIP ABDUCTION MACHINE', 'a seated hip abduction machine', 'front view, seated upright with the back against the pad, knees together against the side pads, hands on the handles', 'knees pushed wide apart against the pads, back still supported'],
  ['walking-lunge', 'WALKING LUNGE', '', 'side view standing tall, feet together, hands on hips', 'one long step forward into a lunge, front thigh close to level, front knee over the foot, back knee just above the floor, torso upright']
];
for (const [id] of fresh) if (!Library.exercises.some(e => e.id === id)) throw new Error(`${id} is not in the exercise library`);

function freshPrompt([id, name, props, left, right], woman) {
  const who = woman
    ? `Photorealistic ${WOMAN} and white trainers`
    : `${MAN} and white trainers`;
  const extra = props ? (props.startsWith('on ') ? `, ${props}` : `, with ${props}`) : '';
  return `Create one premium exercise demonstration image for Fight Hub: ${name}. ${who}${extra}, charcoal studio background and clear ground shadow. Landscape 3:2 composition, two full-body poses side by side of the same ${woman ? 'woman' : 'adult'}, generous margins. LEFT: ${left}. RIGHT: ${right}. ${ENDING}`;
}

// ---- Discipline covers ----
const scenes = {
  boxing: 'a female boxer in red gloves throwing a straight right hand into a heavy bag, focused expression',
  'muay-thai': 'a female Muay Thai fighter throwing a roundhouse kick into Thai pads held by a trainer',
  kickboxing: 'a female kickboxer in gloves throwing a front kick, the partner holding a kick shield',
  mma: 'two female MMA athletes in rash guards and fingerless gloves on a mat, one shooting for a double-leg takedown',
  bjj: 'two female Brazilian jiu-jitsu athletes in plain white gis on the mat, one working from closed guard',
  wrestling: 'two female wrestlers in singlets locked in a tie-up on a mat, one level-changing for a double-leg takedown',
  judo: 'two female judoka in white and blue judogi, one throwing the other with a hip throw, unbranded kit',
  karate: 'a female karateka in a white gi throwing a reverse punch from a long front stance',
  taekwondo: 'a female taekwondo athlete in a white dobok throwing a high roundhouse kick, the partner holding a kick pad',
  'kung-fu': 'a female kung fu practitioner in black training clothes holding a low bow stance with a punch, a second female fighter in Sanda gear in the background'
};
const covers = Fight.arts.map(a => {
  if (!scenes[a.image]) throw new Error(`no scene for ${a.image}`);
  return { image: a.image, name: a.name, prompt: `Create one cinematic sports photograph for the Fight Hub app: ${a.name}. ${scenes[a.image].charAt(0).toUpperCase() + scenes[a.image].slice(1)}. Dramatic low-key lighting with a warm red rim light, dark gym background, realistic adult female athletes in practical, unbranded training kit, sharp focus on the action, landscape 3:2 composition with space at the bottom for a title. No text, no logos, no brand names, no watermarks.` };
});

// ---- Existing pictures: same poses, female demonstrator ----
const libraryPrompt = e => {
  const c = Content.get(e.id);
  return `Recreate the attached original exercise picture for Fight Hub: ${e.name.toUpperCase()}. Keep everything else exactly the same: the two poses, camera angle, equipment, arrow, charcoal studio background, lighting and framing. Change only the demonstrator: make them the woman from the attached character reference: an ${WOMAN}, with the same footwear as the original. The movement: ${c.steps.join(' ')} Anatomically correct hands and feet. No words, no logo, no extra limbs. Clear instructional fitness photography, full body uncropped.`;
};
const drillPrompt = r => {
  if (!r.prompt.includes(MAN)) throw new Error(`${r.file}: unexpected wording`);
  return 'Use the attached original picture as the guide for the two poses and the layout, and the attached character reference for the woman. '
    + r.prompt.replace(MAN, `Photorealistic ${WOMAN}`).replace('side by side of the same adult', 'side by side of the same woman');
};

const bodyOrder = ['Glutes', 'Quads', 'Hamstrings', 'Calves', 'Core', 'Full body', 'Chest', 'Back', 'Shoulders', 'Arms', 'Cardio', 'Mobility'];
const existing = Library.exercises.filter(e => LibraryMedia.has(e.id));
const bodies = [...new Set([...bodyOrder, ...existing.map(e => e.body)])].filter(b => existing.some(e => e.body === b));

const drillSections = [
  ['Warm-up', ['skip-rope', 'shadow-bounce', 'jog-in-place', 'arm-circles', 'hip-openers', 'leg-swings-front', 'leg-swings-side', 'inchworm']],
  ['Boxing', ['stance-footwork', 'pivot', 'jab', 'cross', 'lead-hook', 'uppercut', 'body-shots', 'slip', 'roll', 'parry', 'punch-out', 'bag-work']],
  ['Muay Thai and kickboxing', ['mt-stance', 'teep', 'roundhouse', 'low-kick', 'switch-kick', 'check', 'knee-straight', 'clinch-knees', 'elbows', 'high-kick']],
  ['Taekwondo, karate and kung fu', ['chamber-hold', 'front-kick', 'side-kick', 'snap-roundhouse', 'rapid-kicks', 'zenkutsu', 'oi-zuki', 'gyaku-zuki', 'karate-blocks', 'horse-stance', 'horse-bow']],
  ['MMA and wrestling', ['sprawl', 'level-change', 'stance-motion', 'technical-standup', 'ground-strikes', 'sit-out']],
  ['BJJ', ['shrimp', 'bridge-roll', 'granby-roll', 'breakfall']],
  ['Flexibility and splits', ['lizard', 'couch-stretch', 'pnf-hamstring', 'pnf-adductor', 'front-split-slide', 'frog', 'pancake', 'straddle-slide', 'cossack', 'active-front-raise', 'active-side-raise', '90-90']],
  ['Running', ['easy-run', 'hard-run', 'hill-sprint', 'sprint']]
];
const drillById = Object.fromEntries(drillRequests.map(r => [r.file.replace(/\.png$/, ''), r]));
const sectioned = new Set(drillSections.flatMap(s => s[1]));
for (const id of Object.keys(drillById)) if (!sectioned.has(id)) throw new Error(`${id} is not in a section`);
for (const id of sectioned) if (!drillById[id]) throw new Error(`${id} has no original prompt`);

// The original picture to attach: the source PNG where there is one, else the published picture
const originalOf = id => [`source-art/movements/${id}-realistic.png`, `source-art/movements/${id}.png`, `app/assets/movements/${id}-realistic.webp`]
  .find(p => fs.existsSync(path.join(__dirname, '..', p)));

// ---- Write ----
const requests = [];
const title = s => s.charAt(0) + s.slice(1).toLowerCase();
let md = `# Pictures of women for the Fight Hub app

Every exercise, drill and discipline picture gets a version showing a woman. Members see the version that matches their profile (they can change it on their account page), and anything without a female version yet keeps showing the original, so these can be made **a batch at a time**.

## How to make them

1. **Make the woman first** (section 1). Once you like her, attach that picture to every request, so she looks the same in every picture, just like the man does now.
2. For **existing pictures** (sections 4 and 5), also attach the **original picture** named in each request, so the poses stay identical. Originals are in \`source-art/movements/\` (PNG) and \`app/assets/movements/\` (WebP).
3. Paste the prompt, then save the result with **exactly the file name shown** into \`image-requests/drop-here\`.
4. Check each picture: same technique as the original, two poses, no extra limbs, no text, and practical sportswear with a natural, professional look (no glamour or suggestive posing).
5. Landscape 3:2, for example 1536 x 1024. PNG or JPG.

Suggested order: section 1, then 2 (the new exercises have no pictures at all yet), then 3, then the rest. Within each section the most useful pictures come first.

## 1. The female demonstrator (1)

### Character reference: \`female-demonstrator.png\`

Attach one existing picture (for example \`source-art/movements/hip-thrust-realistic.png\`) so the lighting and background match.

`;
const refPrompt = `Create a character reference photograph for Fight Hub's exercise pictures, matching the lighting and background of the attached picture: an ${WOMAN} and white trainers. Show her full body three times side by side (facing the camera, side-on, and three-quarter view), standing relaxed. Charcoal studio background with a clear ground shadow, landscape 3:2. No words, no logo, no watermark.`;
md += refPrompt + '\n\n';
requests.push({ file: 'female-demonstrator.png', kind: 'reference', prompt: refPrompt });

// ---- Coach portraits: the round button on the Coach screen ----
const portraits = [
  ['coach-male.png', 'Male coach', 'the man from the attached original picture (for example source-art/movements/arm-circles.png): same face, hair and red Fight Hub T-shirt with its logo'],
  ['coach-female.png', 'Female coach', `the woman from the attached character reference: an ${WOMAN}, with the Fight Hub logo on the T-shirt`]
];
const portraitPrompt = who => `Create a square (1:1) head-and-shoulders portrait photograph of the Fight Hub app's coach: ${who}. Friendly, confident and encouraging, looking straight at the camera with a slight smile. Soft studio lighting with a warm red rim light, dark charcoal background, face centred with space around the head so it can be cropped into a circle. Photorealistic, natural skin, no text, no watermark. 1024 x 1024.`;
md += `## 1b. Coach portraits (2)

The coach's face in the round button on the Coach screen, matching each member's coach voice. Square pictures.

`;
for (const [file, label, who] of portraits) {
  md += `### ${label}: \`${file}\`\n\n${portraitPrompt(who)}\n\n`;
  requests.push({ file, kind: 'coach-portrait', reference: file.includes('female') ? 'female-demonstrator.png' : 'source-art/movements/arm-circles.png', prompt: portraitPrompt(who) });
}

md += `## 2. New glute and leg exercises: both versions (${fresh.length * 2})

These exercises are new in the app (the "Glutes and legs" routine), so each needs the usual man's picture and the woman's version.

`;
for (const f of fresh) {
  md += `### ${title(f[1])}\n\nMan: \`${f[0]}.png\`\n\n${freshPrompt(f, false)}\n\nWoman: \`${f[0]}-f.png\` (attach the character reference)\n\n${freshPrompt(f, true)}\n\n`;
  requests.push({ file: `${f[0]}.png`, kind: 'new-exercise', prompt: freshPrompt(f, false) });
  requests.push({ file: `${f[0]}-f.png`, kind: 'new-exercise-female', reference: 'female-demonstrator.png', prompt: freshPrompt(f, true) });
}

md += `## 3. Discipline pictures (${covers.length})

The photos at the top of each discipline in the Fight tab.

`;
for (const c of covers) {
  md += `### ${c.name}: \`${c.image}-f.png\`\n\n${c.prompt}\n\n`;
  requests.push({ file: `${c.image}-f.png`, kind: 'discipline-female', prompt: c.prompt });
}

md += `## 4. Exercise library (${existing.length})

Attach the character reference **and** the original picture named in each request.

`;
for (const body of bodies) {
  const list = existing.filter(e => e.body === body);
  md += `### ${body} (${list.length})\n\n`;
  for (const e of list) {
    const original = originalOf(e.id);
    md += `#### ${e.name}: \`${e.id}-f.png\`\n\nOriginal: \`${original}\`\n\n${libraryPrompt(e)}\n\n`;
    requests.push({ file: `${e.id}-f.png`, kind: 'exercise-female', original, reference: 'female-demonstrator.png', prompt: libraryPrompt(e) });
  }
}

md += `## 5. Fight drills (${sectioned.size})

Attach the character reference **and** the original picture named in each request.

`;
for (const [name, ids] of drillSections) {
  md += `### ${name} (${ids.length})\n\n`;
  for (const id of ids) {
    const d = Fight.drills[id];
    const original = originalOf(id);
    md += `#### ${d ? d.n : id}: \`${id}-f.png\`\n\nOriginal: \`${original}\`\n\n${drillPrompt(drillById[id])}\n\n`;
    requests.push({ file: `${id}-f.png`, kind: 'drill-female', original, reference: 'female-demonstrator.png', prompt: drillPrompt(drillById[id]) });
  }
}

md += `## For Claude: adding the pictures to the app

- \`<id>-f.png\` becomes \`app/assets/movements/<id>-realistic-f.webp\` (same size and quality as the originals); add the id to \`FemaleMedia.movements\` in \`app/female-media.js\`.
- \`<image>-f.png\` (discipline) becomes \`app/assets/arts/<image>-f.webp\`; add it to \`FemaleMedia.arts\`.
- New exercises: \`<id>.png\` becomes \`app/assets/movements/<id>-realistic.webp\`; add the id to \`app/exercise-media.js\`.
- Coach portraits: \`coach-<voice>.png\` becomes \`app/assets/coach/coach-<voice>.webp\` (400 x 400); add the voice to \`COACH_PORTRAITS\` in \`app/coach.js\`.
- Keep the PNGs and prompts in \`source-art/\`. Run \`node --test app/*.test.cjs\`: it checks every listed picture exists.
`;

fs.mkdirSync(path.join(out, 'drop-here'), { recursive: true });
fs.writeFileSync(path.join(out, 'WOMEN-PROMPTS.md'), md);
fs.writeFileSync(path.join(out, 'women-requests.json'), JSON.stringify(requests, null, 2) + '\n');
console.log(`${requests.length} picture requests written`);
