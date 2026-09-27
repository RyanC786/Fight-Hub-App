const test=require('node:test'),assert=require('node:assert/strict');
const M=require('./membership-model.js'),D=require('./training-data.js');
test('free offer contains exactly twelve exercises and three complete fixed workouts',()=>{
 assert.equal(new Set(M.freeExercises).size,12);assert.equal(M.freeTemplates.length,3);
 for(const id of M.freeExercises)assert.ok(D.exercises.some(e=>e.id===id));
 for(const id of M.freeTemplates){const t=D.templates.find(t=>t.id===id);assert.ok(t);assert.ok(t.ids.every(x=>M.canExercise(x,false)));}
 for(const id of [...M.freeMobility,...M.sample])assert.ok(M.canExercise(id,false));
});
test('premium and free exercise, template and active-session access are distinct',()=>{
 assert.equal(M.canExercise('burpee',false),false);assert.equal(M.canExercise('burpee',true),true);
 assert.equal(M.canTemplate('home-impact',false),false);assert.equal(M.canTemplate('home-impact',true),true);
 assert.equal(M.canSession({access:'free-starter'},false),true);assert.equal(M.canSession({},false),false);assert.equal(M.canSession({},true),true);
});
