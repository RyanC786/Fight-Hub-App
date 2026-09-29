// Writes image-requests/PROMPTS.md and image-requests/requests.json for the Fight Hub app.
// Usage: node tools/make-image-requests.cjs image-requests
const fs = require('fs');
const path = require('path');
const out = process.argv[2];

const WRAPS = 'red hand wraps';
const GLOVES = 'red boxing gloves';
const kit = {
  trainers: 'white trainers',
  barefoot: 'bare feet',
  mat: 'bare feet, on a black training mat'
};

// id, name, feet, extras, LEFT, RIGHT, viewNote
const drills = [
  // Warm-up
  ['skip-rope', 'SKIPPING ROPE', 'trainers', '', 'standing tall holding the skipping rope handles at hip height, elbows close to the body, rope resting on the floor behind the heels', 'mid-jump just off the floor on the balls of the feet, the rope passing beneath the feet, wrists turning the handles'],
  ['shadow-bounce', 'BOUNCE AND GUARD', 'trainers', WRAPS, 'boxing stance, side-on, hands up by the cheeks, weight on the balls of the feet', 'same stance a small bounce forward, throwing a light relaxed jab with the lead hand'],
  ['jog-in-place', 'JOG ON THE SPOT', 'trainers', '', 'jogging on the spot, left knee lifted, right arm forward', 'jogging on the spot, right knee lifted, left arm forward'],
  ['arm-circles', 'ARM CIRCLES', 'trainers', '', 'standing tall with both straight arms out to the sides at shoulder height', 'both straight arms raised overhead mid-circle; small curved arrows show the circling direction'],
  ['hip-openers', 'HIP OPENERS (OPEN THE GATE)', 'trainers', '', 'one hand on a wall, standing on one leg with the other knee lifted to hip height in front', 'the same lifted knee rotated out to the side at hip height, torso tall'],
  ['leg-swings-front', 'FRONT LEG SWINGS', 'trainers', '', 'side view, one hand on a wall, outside leg swung back behind the body', 'the same straight leg swung forward to waist height, torso upright'],
  ['leg-swings-side', 'SIDE LEG SWINGS', 'trainers', '', 'front view facing a wall with both hands on it, one leg swung across in front of the standing leg', 'the same leg swung out to the side, hips square to the wall'],
  ['inchworm', 'INCHWORM WALK-OUT', 'trainers', '', 'folded forward with hands on the floor in front of the feet, knees slightly bent', 'high plank, hands under the shoulders, straight line from head to heels'],

  // Boxing
  ['stance-footwork', 'BOXING STANCE AND STEP-DRAG FOOTWORK', 'trainers', WRAPS, 'orthodox boxing stance: side-on, feet shoulder-width apart, lead foot forward, knees soft, hands up by the cheeks, chin down', 'the same stance after one step forward: lead foot has stepped, rear foot follows the same distance, stance width unchanged'],
  ['pivot', 'PIVOT OFF THE LINE', 'trainers', WRAPS, 'orthodox boxing stance facing forward, hands up', 'the same stance after pivoting a quarter-turn on the ball of the lead foot, rear foot swung round, now facing a new angle, hands up; a curved arrow shows the turn'],
  ['jab', 'JAB', 'trainers', WRAPS, 'orthodox boxing stance, hands up by the cheeks', 'lead arm fully extended straight at shoulder height, palm facing down, rear hand still by the chin, chin tucked behind the lead shoulder'],
  ['cross', 'CROSS', 'trainers', WRAPS, 'orthodox boxing stance, hands up by the cheeks', 'rear arm extended straight at shoulder height, rear heel lifted and hips and shoulders turned forward, lead hand guarding the face'],
  ['lead-hook', 'LEAD HOOK', 'trainers', WRAPS, 'orthodox boxing stance, hands up by the cheeks', 'lead arm bent about 90 degrees and level at shoulder height, torso and lead foot pivoted inward, rear hand glued to the chin'],
  ['uppercut', 'REAR UPPERCUT', 'trainers', WRAPS, 'boxing stance with a slight dip, knees bent, rear fist low near the chin', 'driving up through the legs and hips, rear fist rising to chin height with the palm facing the demonstrator, lead hand guarding'],
  ['body-shots', 'BODY SHOTS', 'trainers', WRAPS, 'orthodox boxing stance, hands up', 'knees bent to lower the whole body, rear hand punching straight at stomach height, head off the centre line, lead hand guarding'],
  ['slip', 'SLIPS', 'trainers', WRAPS, 'front view, boxing stance, head centred, hands up', 'front view, shoulders rotated and knees slightly bent so the head has moved just outside the lead shoulder, hands still up'],
  ['roll', 'ROLL (BOB AND WEAVE)', 'trainers', WRAPS, 'front view, boxing stance, hands up', 'front view, knees deeply bent and head dipped low to one side under an imaginary hook, eyes forward, hands up; a curved U-shaped arrow shows the path'],
  ['parry', 'PARRY AND CATCH', 'trainers', WRAPS, 'orthodox boxing stance, hands up by the cheeks', 'rear palm open just in front of the face as if catching a jab, lead hand in guard'],
  ['punch-out', 'PUNCH-OUT', 'trainers', WRAPS, 'front view, slightly square stance with knees bent, right fist extended straight', 'the same stance with the left fist extended straight and the right hand back at the face'],
  ['bag-work', 'HEAVY BAG TECHNIQUE', 'trainers', GLOVES + ', a black hanging heavy bag', 'boxing stance at jabbing distance from the hanging heavy bag, gloves up', 'jab landing on the heavy bag with the arm almost straight, rear glove at the chin'],

  // Muay Thai and kickboxing
  ['mt-stance', 'MUAY THAI STANCE', 'barefoot', WRAPS, 'Muay Thai stance: more square than boxing, weight on the rear leg, hands high, elbows in, lead foot light', 'the same stance with the lead knee lifted and turned slightly out, ready to teep or check'],
  ['teep', 'TEEP (PUSH KICK)', 'barefoot', WRAPS, 'lead knee raised high towards the chest, foot flexed, hands up', 'the same leg extended straight forward at stomach height, pushing with the ball of the foot, hips pushed forward, hands up'],
  ['roundhouse', 'MUAY THAI ROUNDHOUSE KICK', 'barefoot', WRAPS, 'Muay Thai stance stepping slightly out at an angle, hands up', 'rear leg swung round at body height with the shin as the contact point, hips turned over, supporting foot pivoted with the heel pointing forward, same-side arm swinging down, other hand guarding the face'],
  ['low-kick', 'LOW KICK', 'barefoot', WRAPS + ', a black hanging heavy bag', 'Muay Thai stance beside the heavy bag, hands up', 'rear shin angled downward into the lower part of the bag at thigh height, hips turned, hands up'],
  ['switch-kick', 'SWITCH KICK', 'barefoot', WRAPS, 'mid-hop switching the feet, both feet just off the floor, hands up', 'landing and throwing a roundhouse kick at body height with the leg that is now at the back'],
  ['check', 'CHECKING A LOW KICK', 'barefoot', WRAPS, 'Muay Thai stance, hands up', 'lead knee lifted up and slightly out with the shin turned outward, posture upright, hands high'],
  ['knee-straight', 'STRAIGHT KNEE', 'barefoot', WRAPS, 'both hands reaching forward at head height as if holding an opponent', 'rear knee driven up and forward, hips pushed through, up on the toes of the standing foot, hands pulled down to the knee'],
  ['clinch-knees', 'CLINCH KNEES ON THE BAG', 'barefoot', WRAPS + ', a black hanging heavy bag', 'hands stacked on top of the hanging bag in a clinch grip, elbows squeezed together, posture tall', 'driving a knee into the bag while holding the clinch grip'],
  ['elbows', 'ELBOWS', 'barefoot', WRAPS, 'horizontal elbow: forearm level at head height across the body, shoulder turned, other hand guarding', 'uppercut elbow: elbow driving straight up through the centre, other hand guarding'],
  ['high-kick', 'HIGH ROUNDHOUSE KICK', 'barefoot', WRAPS, 'fighting stance, hands up', 'roundhouse kick at head height, full hip turn, supporting heel turned forward, hands guarding the face'],

  // Taekwondo, karate, kung fu
  ['chamber-hold', 'CHAMBER HOLD', 'barefoot', '', 'standing in a ready stance, fists up', 'kicking knee raised high in the chamber at hip height, foot pulled back, supporting knee soft, balanced'],
  ['front-kick', 'FRONT KICK', 'barefoot', '', 'knee raised high in front in the chamber', 'lower leg snapped out at stomach height, striking with the ball of the foot with toes pulled back'],
  ['side-kick', 'SIDE KICK', 'barefoot', '', 'knee drawn up across the body with the foot chambered', 'leg driven out sideways at waist height, heel leading, heel, hip and shoulder in one line, supporting foot turned away'],
  ['snap-roundhouse', 'SNAPPING ROUNDHOUSE KICK', 'barefoot', '', 'knee lifted to the side, chambered and pointing at the target', 'lower leg snapped round at body height striking with the instep, supporting foot pivoted'],
  ['rapid-kicks', 'RAPID-FIRE KICKS', 'barefoot', '', 'roundhouse kick extended at body height', 'the same leg snapped back into the chamber ready to kick again; arrows show out and back'],
  ['zenkutsu', 'FRONT STANCE (ZENKUTSU-DACHI)', 'barefoot', '', 'long low front stance: front knee bent over the toes, back leg almost straight, both heels down, fists at the hips', 'stepping through: back foot brought in beside the front foot at the same low height'],
  ['oi-zuki', 'STEPPING PUNCH (OI-ZUKI)', 'barefoot', '', 'front stance with fists at the hips', 'stepped forward into the next front stance, punching straight at chest height with the hand on the same side as the front leg, other fist pulled back to the hip'],
  ['gyaku-zuki', 'REVERSE PUNCH (GYAKU-ZUKI)', 'barefoot', '', 'front stance with fists at the hips', 'reverse punch: the hand opposite the front leg extended straight at chest height, rear hip driven forward, other fist pulled back to the hip'],
  ['karate-blocks', 'KARATE BLOCKS', 'barefoot', '', 'rising block: forearm raised above the forehead and turned outward, other fist at the hip', 'downward block: forearm swept down across in front of the front leg, other fist at the hip'],
  ['horse-stance', 'HORSE STANCE (MA BU)', 'barefoot', '', 'standing with feet about twice shoulder-width apart, toes forward', 'sunk into horse stance, thighs close to level, knees over the toes, back upright, fists at the hips'],
  ['horse-bow', 'HORSE STANCE TO BOW STANCE PUNCH', 'barefoot', '', 'horse stance with fists at the hips', 'turned into bow stance (front knee bent, back leg straight) punching straight forward'],

  // MMA and wrestling
  ['sprawl', 'SPRAWL', 'mat', '', 'wrestling stance: feet wide, knees bent, hips low, hands in front', 'sprawled: legs shot back wide, hips down on the mat, up on the balls of the feet, hands posted, head up'],
  ['level-change', 'LEVEL CHANGE AND PENETRATION STEP', 'mat', '', 'wrestling stance, hands in front', 'deep penetration step: lead foot stepped far forward, rear knee touching the mat softly, back straight, head up'],
  ['stance-motion', 'WRESTLING STANCE AND MOTION', 'mat', '', 'wrestling stance: feet wide, knees bent, hips low, elbows in, hands in front', 'the same low stance stepping sideways without crossing the feet'],
  ['technical-standup', 'TECHNICAL STAND-UP', 'mat', '', 'sitting on the mat with one hand posted behind, the opposite foot planted and the free hand raised to guard the face', 'hips lifted with the free leg swinging back through under the body into a standing stance'],
  ['ground-strikes', 'GROUND-AND-POUND ON A BAG', 'mat', GLOVES + ', a black heavy bag lying on the mat', 'kneeling over the bag lying on the mat with a wide base', 'postured up, punching straight down at the bag'],
  ['sit-out', 'SIT-OUT', 'mat', '', 'on hands and knees on the mat', 'one leg threaded through under the body, hips turned, sitting side-on with hands light on the mat'],

  // BJJ
  ['shrimp', 'HIP ESCAPE (SHRIMP)', 'mat', '', 'lying on the back on the mat, knees bent, feet flat', 'turned onto the side, hips driven back, hands framing forward'],
  ['bridge-roll', 'BRIDGE AND ROLL (UPA)', 'mat', '', 'lying on the back, feet flat close to the hips', 'hips bridged high and turning over one shoulder, looking over that shoulder'],
  ['granby-roll', 'GRANBY ROLL', 'mat', '', 'kneeling with the chin tucked, one shoulder lowered towards the mat to begin the roll', 'rolling across the back of the shoulders (never the head or neck), legs tucked'],
  ['breakfall', 'BACK BREAKFALL', 'mat', '', 'sitting on the mat, chin tucked, arms forward', 'rolled back onto the upper back, both arms slapping the mat at 45 degrees from the body, chin tucked so the head does not touch the mat'],

  // Flexibility
  ['lizard', 'LOW LUNGE (LIZARD)', 'mat', '', 'long lunge with the back knee down, both hands inside the front foot', 'the same lunge lowered onto the forearms, hips sinking forward and down'],
  ['couch-stretch', 'COUCH STRETCH', 'mat', ', a dark grey sofa', 'kneeling with the back to the sofa, rear shin running up the sofa, front foot forward in a lunge, hands on the floor', 'torso lifted upright, glute of the back leg squeezed'],
  ['pnf-hamstring', 'CONTRACT-RELAX HAMSTRING STRETCH', 'mat', ', a red stretching strap', 'lying on the back with the strap around one foot, straight leg raised to a mild stretch', 'the same straight leg drawn a little closer to the body after relaxing'],
  ['pnf-adductor', 'CONTRACT-RELAX STRADDLE STRETCH', 'mat', '', 'sitting upright in a wide straddle, hands on the floor behind', 'hinged forward from the hips in the straddle, hands walked out in front, long spine'],
  ['front-split-slide', 'SUPPORTED FRONT SPLIT', 'mat', ', two dark yoga blocks', 'kneeling lunge with a hand on a yoga block on each side', 'lower supported front split: front heel slid forward, back knee slid back, hands on the blocks taking weight, hips square'],
  ['frog', 'FROG STRETCH', 'mat', '', 'on hands and knees with the knees starting to widen', 'on the forearms with knees wide apart, ankles in line with the knees, hips sunk back'],
  ['pancake', 'STRADDLE FOLD (PANCAKE)', 'mat', '', 'sitting tall in a wide straddle, knees and toes pointing up', 'folded forward from the hips with a long spine, chest towards the floor'],
  ['straddle-slide', 'SUPPORTED MIDDLE SPLIT', 'mat', ', two dark yoga blocks', 'wide horse stance with hands on yoga blocks in front', 'feet slid wider into a supported middle split, hands on the blocks taking weight'],
  ['cossack', 'COSSACK SQUAT', 'trainers', '', 'standing in a wide stance, toes slightly out', 'sitting down onto one bent leg while the other leg is straight with toes pointing up, heel of the bent leg down, chest up'],
  ['active-front-raise', 'ACTIVE FRONT LEG RAISE', 'trainers', ', a stable chair', 'side view standing tall holding the chair back', 'straight leg raised in front to hip height or higher using only the muscles, no swing, torso upright'],
  ['active-side-raise', 'ACTIVE SIDE LEG RAISE', 'trainers', ', a stable chair', 'front view standing tall holding the chair back', 'leg raised straight out to the side as high as possible without leaning, toes pointing forward'],
  ['90-90', '90/90 HIP SWITCHES', 'mat', '', 'sitting upright with both knees bent at 90 degrees, both knees pointing to the left', 'rotated so both knees point to the right, hands on the mat behind'],

  // Running
  ['easy-run', 'EASY RUN', 'trainers', '', 'relaxed running stride, left foot landing under the body, arms swinging naturally', 'relaxed running stride on the other leg, upright posture, calm face'],
  ['hard-run', 'HARD INTERVAL RUN', 'trainers', '', 'fast running stride with a slight forward lean, strong arm drive', 'the next fast stride on the other leg, knee driving forward'],
  ['hill-sprint', 'HILL SPRINT', 'trainers', ', on a dark studio incline ramp', 'sprinting up the incline, leaning slightly into the slope, knee and arm driving', 'next sprint stride up the incline on the other leg'],
  ['sprint', 'SPRINT', 'trainers', '', 'full sprint stride with high knee drive and powerful arm action', 'the next full sprint stride on the other leg']
];

function drillPrompt([id, name, feet, extras, left, right]) {
  const footwear = feet === 'trainers' ? 'white trainers' : 'bare feet';
  const setting = feet === 'mat' ? ', on a black training mat' : '';
  const items = extras && !extras.startsWith(',') ? `, ${extras}` : (extras || '');
  return `Create one premium exercise demonstration image for Fight Hub: ${name}. Photorealistic adult fitness demonstrator wearing a plain red training shirt, charcoal joggers and ${footwear}${items}${setting}, charcoal studio background and clear ground shadow. Landscape 3:2 composition, two full-body poses side by side of the same adult, generous margins. LEFT: ${left}. RIGHT: ${right}. Small simple arrow from left to right. Anatomically correct hands and feet. No words, no logo, no extra limbs, no stick figures. Clear instructional fitness photography, full body uncropped.`;
}

const heroes = [
  ['wrestling', 'Wrestling', 'two wrestlers in singlets locked in a tie-up on a mat, one level-changing for a double-leg takedown'],
  ['taekwondo', 'Taekwondo', 'a taekwondo athlete in a white dobok throwing a high roundhouse kick, the partner holding a kick pad'],
  ['kung-fu', 'Kung Fu and Sanda', 'a kung fu practitioner in black training clothes holding a low bow stance with a punch, a second fighter in Sanda gear in the background'],
  ['judo', 'Judo (also replaces the branded Judo photo on the website)', 'two judoka in white and blue judogi, one throwing the other with a hip throw, unbranded kit']
];
const heroPrompt = ([id, name, scene]) => `Create one cinematic sports photograph for the Fight Hub app: ${name}. ${scene.charAt(0).toUpperCase() + scene.slice(1)}. Dramatic low-key lighting with a warm red rim light, dark gym background, realistic adult athletes, sharp focus on the action, landscape 3:2 composition with space at the bottom for a title. No text, no logos, no brand names, no watermarks.`;

let md = `# Image requests for the Fight Hub app

Paste each prompt into the image tool (the existing pictures were made with ChatGPT's image tool), then save the result with **exactly the file name shown** into the \`drop-here\` folder next to this file. Then tell Claude: it will check each picture, shrink it for phones and add it to the app.

- Landscape (3:2), for example 1536 x 1024. PNG or JPG are both fine.
- Same demonstrator and outfit as the existing pictures: red shirt, charcoal joggers, charcoal background.
- Check each picture before saving: correct technique, two poses, no extra limbs, no text.
- You do not need all of them at once. The list is in priority order within each section.

## Discipline pictures (${heroes.length})

These appear at the top of each discipline in the Fight tab (these disciplines currently borrow another sport's photo).

`;
heroes.forEach(h => { md += `### ${h[1]}: \`${h[0]}.png\`\n\n${heroPrompt(h)}\n\n`; });

const sections = [
  ['Boxing', ['stance-footwork', 'pivot', 'jab', 'cross', 'lead-hook', 'uppercut', 'body-shots', 'slip', 'roll', 'parry', 'punch-out', 'bag-work']],
  ['Muay Thai and kickboxing', ['mt-stance', 'teep', 'roundhouse', 'low-kick', 'switch-kick', 'check', 'knee-straight', 'clinch-knees', 'elbows', 'high-kick']],
  ['Taekwondo, karate and kung fu', ['chamber-hold', 'front-kick', 'side-kick', 'snap-roundhouse', 'rapid-kicks', 'zenkutsu', 'oi-zuki', 'gyaku-zuki', 'karate-blocks', 'horse-stance', 'horse-bow']],
  ['MMA and wrestling', ['sprawl', 'level-change', 'stance-motion', 'technical-standup', 'ground-strikes', 'sit-out']],
  ['BJJ', ['shrimp', 'bridge-roll', 'granby-roll', 'breakfall']],
  ['Flexibility and splits', ['lizard', 'couch-stretch', 'pnf-hamstring', 'pnf-adductor', 'front-split-slide', 'frog', 'pancake', 'straddle-slide', 'cossack', 'active-front-raise', 'active-side-raise', '90-90']],
  ['Running', ['easy-run', 'hard-run', 'hill-sprint', 'sprint']],
  ['Warm-up', ['skip-rope', 'shadow-bounce', 'jog-in-place', 'arm-circles', 'hip-openers', 'leg-swings-front', 'leg-swings-side', 'inchworm']]
];
const byId = Object.fromEntries(drills.map(d => [d[0], d]));
const listed = new Set();
for (const [title, ids] of sections) {
  md += `## ${title} (${ids.length})\n\n`;
  if (title === 'Running') md += 'The jog-on-the-spot recovery and run-walk "run" steps reuse the easy-run picture, so they need no picture of their own.\n\n';
  for (const id of ids) {
    const d = byId[id];
    if (!d) throw new Error('missing ' + id);
    listed.add(id);
    md += `### ${d[1].charAt(0) + d[1].slice(1).toLowerCase()}: \`${id}.png\`\n\n${drillPrompt(d)}\n\n`;
  }
}
const unlisted = drills.filter(d => !listed.has(d[0]));
if (unlisted.length) throw new Error('not in a section: ' + unlisted.map(d => d[0]).join(', '));

md += `## Still missing from the original library (1)

### Seated leg curl: \`leg-curl.png\`

Create one premium exercise demonstration image for Fight Hub: SEATED LEG CURL MACHINE. Photorealistic adult fitness demonstrator wearing a plain red training shirt, charcoal joggers and white trainers, charcoal studio background. Landscape 3:2 composition, two full-body side views of the same adult seated on a seated leg curl machine, generous margins. LEFT: seated upright, thigh pad resting on top of the thighs just above the knees, lower-leg roller pad resting against the back of the lower legs just above the heels, legs almost straight. RIGHT: knees bent to about 90 degrees, the roller pad still behind the lower legs pushing down and back under the seat. Machine clearly shown with the roller BEHIND the ankles, not on the shins. Small simple arrow from left to right. No words, no logo, no extra limbs. Clear instructional fitness photography, full body uncropped.
`;

fs.mkdirSync(path.join(out, 'drop-here'), { recursive: true });
fs.writeFileSync(path.join(out, 'PROMPTS.md'), md);
const requests = [
  ...heroes.map(h => ({ file: `${h[0]}.png`, kind: 'discipline', prompt: heroPrompt(h) })),
  ...drills.map(d => ({ file: `${d[0]}.png`, kind: 'drill', prompt: drillPrompt(d) })),
  { file: 'leg-curl.png', kind: 'exercise', prompt: 'See PROMPTS.md' }
];
fs.writeFileSync(path.join(out, 'requests.json'), JSON.stringify(requests, null, 2) + '\n');
console.log(`${requests.length} image requests written`);
