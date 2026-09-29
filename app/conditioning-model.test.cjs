const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const C=require('./conditioning-model.js'),I=require('./interval-model.js'),D=require('./training-data.js'),E=require('./exercise-content.js'),M=require('./exercise-media.js');
test('every duration, difficulty and circuit has exact full-session timing and preparation',()=>{
 for(const minutes of [25,30,40])for(const level of Object.keys(C.levels))for(const circuit of Object.keys(C.circuits)){
  const p=C.build({minutes,level,circuit});assert.equal(p.phases.reduce((s,x)=>s+x.seconds,0),minutes*60);
  assert.equal(p.phases.filter(x=>x.kind==='Warm-up').reduce((s,x)=>s+x.seconds,0),360);
  assert.equal(p.phases.filter(x=>x.kind==='Cool-down').reduce((s,x)=>s+x.seconds,0),300);
  assert.equal(p.phases.filter(x=>x.kind==='Work').length,minutes-11);
  assert.equal(p.phases[I.position(p.phases,360).index].kind,'Work');
  assert.equal(p.phases[I.position(p.phases,p.total-300).index].kind,'Cool-down');
  assert.ok(I.position(p.phases,p.total).finished);
  for(const x of p.phases)assert.ok(D.exercises.some(e=>e.id===x.id),x.id);
 }
});
test('starter and quiet circuits do not hide advanced or jumping movements',()=>{
 for(const levels of Object.values(C.circuits))for(const id of levels.Starter)assert.equal(D.exercises.find(e=>e.id===id).level,'Foundation');
 for(const ids of Object.values(C.circuits['Quiet / no jumping']))for(const id of ids)assert.equal(D.exercises.find(e=>e.id===id).impact,'No jumping');
 for(const options of [{minutes:20},{level:'Unknown'},{circuit:'Unknown'}])assert.throws(()=>C.build(options));
});
test('every catalogue movement has specific instructions and a starting workload; image manifest resolves',()=>{
 assert.equal(E.ids.length,D.exercises.length);
 for(const e of D.exercises){const c=E.get(e.id);assert.equal(c.steps.length,2);assert.ok(c.cue&&c.easy&&E.target(e));}
 for(const id of M){const img=fs.readFileSync(`${__dirname}/assets/movements/${id}-realistic.webp`);assert.equal(img.subarray(8,12).toString(),'WEBP');}
});
test('all new browser scripts parse',()=>{for(const file of ['hiit','exercise-experience','exercise-content','conditioning-model','exercise-media'])new Function(fs.readFileSync(`${__dirname}/${file}.js`,'utf8'));});
