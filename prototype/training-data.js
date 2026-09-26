/* Editorial draft catalogue. Exercise names and original brief descriptions;
   not a reviewed programme or a licensed copy of reference-provider content. */
const FightTraining = (() => {
  const rows = [
    ['wall-press','Wall press-up','Chest','Bodyweight','Foundation','Press','Standing press against a stable wall; adjust your distance to change the challenge.'],
    ['incline-press','Incline press-up','Chest','Bench','Foundation','Press','A raised, stable support changes the angle of a press-up.'],
    ['push-up','Press-up','Chest','Bodyweight','Intermediate','Press','A floor-based pressing movement that also requires trunk control.'],
    ['floor-press','Dumbbell floor press','Chest','Dumbbells','Intermediate','Press','A horizontal press performed lying on the floor.'],
    ['bench-press','Dumbbell bench press','Chest','Dumbbells + bench','Intermediate','Press','A supported horizontal press using a pair of dumbbells.'],
    ['chest-machine','Seated chest press','Chest','Gym machine','Foundation','Press','A seated machine-based horizontal press; setup depends on the machine.'],
    ['band-row','Resistance-band row','Back','Resistance band','Foundation','Pull','A pulling movement with resistance from a securely positioned band.'],
    ['db-row','Supported dumbbell row','Back','Dumbbells + bench','Intermediate','Pull','A one-arm row with the other side supported on a stable bench.'],
    ['cable-row','Seated cable row','Back','Cable machine','Intermediate','Pull','A horizontal pull using a cable station.'],
    ['lat-pull','Lat pulldown','Back','Gym machine','Intermediate','Pull','A seated vertical pull using a pulldown machine.'],
    ['assisted-pull','Assisted pull-up','Back','Gym machine','Intermediate','Pull','A vertical pulling movement with assistance from a dedicated machine.'],
    ['shoulder-press','Seated dumbbell shoulder press','Shoulders','Dumbbells + bench','Intermediate','Press','A seated overhead press with dumbbells.'],
    ['lateral-raise','Dumbbell lateral raise','Shoulders','Dumbbells','Intermediate','Raise','A shoulder-focused raise out to the sides.'],
    ['reverse-fly','Reverse fly','Shoulders','Dumbbells','Intermediate','Raise','A rear-shoulder movement with light dumbbells.'],
    ['biceps-curl','Dumbbell biceps curl','Arms','Dumbbells','Foundation','Curl','An elbow-flexion movement using dumbbells.'],
    ['hammer-curl','Hammer curl','Arms','Dumbbells','Foundation','Curl','A curl performed with palms facing inward.'],
    ['band-curl','Resistance-band curl','Arms','Resistance band','Foundation','Curl','An elbow-flexion movement using a resistance band.'],
    ['triceps','Cable triceps pressdown','Arms','Cable machine','Intermediate','Extend','An elbow-extension movement at a cable station.'],
    ['chair-rise','Sit-to-stand','Quads','Chair','Foundation','Squat','Stand from and return to a stable chair.'],
    ['squat','Bodyweight squat','Quads','Bodyweight','Foundation','Squat','A standing squat without external load.'],
    ['goblet','Goblet squat','Quads','Dumbbells','Intermediate','Squat','A squat holding one dumbbell in front of the torso.'],
    ['split-squat','Split squat','Quads','Bodyweight','Intermediate','Lunge','A squat in a staggered stance, working each side separately.'],
    ['leg-press','Leg press','Quads','Gym machine','Intermediate','Press','A machine-based leg press with adjustable seating and resistance.'],
    ['bridge','Glute bridge','Glutes','Bodyweight','Foundation','Bridge','A floor-based hip lift with the feet planted.'],
    ['hip-thrust','Bench hip thrust','Glutes','Bench','Intermediate','Bridge','A hip-lift movement with the upper back supported by a stable bench.'],
    ['side-leg','Standing side leg raise','Glutes','Chair','Foundation','Raise','A sideways leg raise with stable support available for balance.'],
    ['hinge','Hip hinge practice','Hamstrings','Bodyweight','Foundation','Hinge','An unloaded movement pattern that folds at the hips.'],
    ['rdl','Dumbbell Romanian deadlift','Hamstrings','Dumbbells','Intermediate','Hinge','A loaded hip-hinge movement using dumbbells.'],
    ['leg-curl','Seated leg curl','Hamstrings','Gym machine','Intermediate','Curl','A machine-based knee-flexion movement.'],
    ['calf','Supported calf raise','Calves','Chair','Foundation','Raise','A heel raise with stable support available for balance.'],
    ['seated-calf','Seated calf raise','Calves','Chair','Foundation','Raise','A heel raise performed while seated.'],
    ['dead-bug','Dead bug','Core','Bodyweight','Foundation','Control','A floor-based movement coordinating opposite limbs while controlling the trunk.'],
    ['bird-dog','Bird dog','Core','Bodyweight','Foundation','Control','An all-fours movement extending opposite limbs with trunk control.'],
    ['plank','Forearm plank','Core','Bodyweight','Intermediate','Hold','A static trunk-support position on forearms and toes.'],
    ['side-plank','Side plank','Core','Bodyweight','Intermediate','Hold','A side-supported static trunk position.'],
    ['carry','Farmer carry','Full body','Dumbbells','Intermediate','Carry','Walk a clear route carrying a dumbbell at each side.'],
    ['walk','Walking','Cardio','None','Foundation','Steady','A walking activity that can be logged by duration.'],
    ['bike','Stationary cycling','Cardio','Exercise bike','Foundation','Steady','A stationary-bike activity with adjustable resistance.'],
    ['rower','Rowing ergometer','Cardio','Rowing machine','Intermediate','Steady','A seated whole-body activity on a rowing machine.'],
    ['march','Marching on the spot','Cardio','None','Foundation','Steady','An indoor marching activity without external equipment.'],
    ['ankle','Ankle circles','Mobility','Chair','Foundation','Mobility','Seated ankle movement through a comfortable range.'],
    ['shoulder-roll','Shoulder rolls','Mobility','None','Foundation','Mobility','Gentle shoulder movement that can form part of a movement break.']
  ];
  const exercises = rows.map(([id,name,body,equipment,level,pattern,description]) => ({id,name,body,equipment,level,pattern,description,status:'Editorial draft'}));
  const templates = [
    ['home-start','Home foundations','Full body','Home',false,['chair-rise','wall-press','bridge','bird-dog'],'An introduction to the session-building experience.'],
    ['upper-home','Upper-body basics','Upper body','Home',false,['wall-press','band-row','band-curl'],'Pressing and pulling exercise ideas for home.'],
    ['lower-home','Lower-body basics','Lower body','Home',false,['chair-rise','bridge','calf'],'Explore a selection of lower-body movements.'],
    ['core-control','Core control','Core','Home',false,['dead-bug','bird-dog','bridge'],'A small library selection centred on trunk control.'],
    ['movement','Movement break','Mobility','Home',false,['march','shoulder-roll','ankle'],'A movement-break layout to customise.'],
    ['gym-full','Gym full body','Full body','Gym',true,['leg-press','chest-machine','cable-row','bike'],'A broader gym session canvas.'],
    ['push','Push focus','Upper body','Gym',true,['bench-press','shoulder-press','triceps'],'Chest, shoulder and arm exercise selection.'],
    ['pull','Pull focus','Upper body','Gym',true,['lat-pull','cable-row','hammer-curl'],'Back and arm exercise selection.'],
    ['lower-gym','Lower-body strength','Lower body','Gym',true,['goblet','rdl','leg-curl','calf'],'A lower-body session canvas for gym equipment.'],
    ['conditioning','Conditioning mix','Conditioning','Gym',true,['bike','carry','rower'],'General conditioning options, not a fight-camp prescription.'],
    ['db-full','Dumbbell selection','Full body','Home',true,['goblet','floor-press','rdl','biceps-curl'],'Build a session around available dumbbells.'],
    ['recovery','Easy movement','Mobility','Home',false,['walk','ankle','shoulder-roll'],'A movement selection for a quieter day.']
  ].map(([id,name,focus,setting,premium,ids,description])=>({id,name,focus,setting,premium,ids,description}));
  function filter({query='',body='All',equipment='All',level='All',favorites=null}={}) {
    return exercises.filter(e=>(body==='All'||e.body===body)&&(equipment==='All'||e.equipment===equipment)&&(level==='All'||e.level===level)&&(!favorites||favorites.includes(e.id))&&`${e.name} ${e.body} ${e.pattern}`.toLowerCase().includes(query.toLowerCase().trim()));
  }
  return {exercises,templates,filter};
})();
if(typeof module!=='undefined') module.exports=FightTraining;
