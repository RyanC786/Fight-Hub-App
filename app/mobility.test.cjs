const test=require('node:test'),assert=require('node:assert/strict');
const paths=require('./mobility.js'),data=require('./training-data.js'),content=require('./exercise-content.js');
test('mobility selections resolve to distinct, non-jumping exercises with instructions',()=>{
 assert.equal(Object.keys(paths).length,3);
 for(const p of Object.values(paths)){assert.equal(new Set(p.ids).size,p.ids.length);for(const id of p.ids){const e=data.exercises.find(x=>x.id===id);assert.ok(e,id);assert.equal(e.impact,'No jumping');assert.ok(content.get(id));}}
});
test('splits foundations include stretch preparation and active control',()=>{
 for(const key of ['front','middle']){const patterns=paths[key].ids.map(id=>data.exercises.find(e=>e.id===id).pattern);assert.ok(patterns.includes('Stretch'));assert.ok(patterns.some(p=>p!=='Stretch'));}
});
test('stretch guidance does not inherit load or rep progression',()=>{
 for(const e of data.exercises.filter(e=>e.pattern==='Stretch'))assert.equal(content.progressionFor(e),content.flexibilityProgression);
 assert.equal(content.progressionFor(data.exercises.find(e=>e.id==='biceps-curl')),content.progression);
});
