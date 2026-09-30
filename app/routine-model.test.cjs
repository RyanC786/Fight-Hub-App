const test=require('node:test'),assert=require('node:assert/strict');
const R=require('./routine-model.js'),D=require('./training-data.js');
test('chosen dates receive push pull legs in chronological order across a month boundary',()=>{
 const p=R.build({start:'2026-09-28',days:[5,1,3]});assert.deepEqual(p.sessions.map(s=>s.date),['2026-09-28','2026-09-30','2026-10-02']);assert.deepEqual(p.sessions.map(s=>s.name),['Push','Pull','Legs']);assert.notDeepEqual(p.sessions[0].ids,p.sessions[1].ids);
});
test('all location and routine combinations resolve, with exactly three distinct sessions',()=>{
 for(const location of ['Home','Gym'])for(const split of ['split','full','glutes']){const p=R.build({start:'2026-09-28',days:[2,4,0],location,split});assert.equal(p.sessions.length,3);for(const s of p.sessions)for(const id of s.ids)assert.ok(D.exercises.some(e=>e.id===id));assert.equal(new Set(p.sessions.map(s=>s.ids.join(','))).size,3);}
});
test('invalid weekdays, duplicate days and invalid calendar dates are rejected',()=>{
 for(const args of [{days:[1,1,3]},{days:[1,3]},{days:[1,3,7]},{start:'2026-09-29'},{start:'2026-02-30'},{location:'Other'}])assert.throws(()=>R.build({start:'2026-09-28',days:[1,3,5],...args}));
});
