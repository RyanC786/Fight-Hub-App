const test=require('node:test'),assert=require('node:assert/strict');
const N=require('./exercise-navigation.js');
test('exercise return destinations retain HIIT, routine and mobility context',()=>{
 for(const page of ['hiit','routine-session','mobility','template','session','library'])assert.equal(N.origin(page).page,page);
 assert.match(N.origin('hiit').label,/Build your engine/);
 assert.equal(N.origin('unknown').page,'library');
});
