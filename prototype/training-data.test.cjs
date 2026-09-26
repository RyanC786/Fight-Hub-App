const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const data=require('./training-data.js');
test('catalogue identifiers are unique and session references resolve',()=>{
 assert.equal(new Set(data.exercises.map(e=>e.id)).size,72);
 assert.equal(data.templates.length,17);
 for(const t of data.templates){assert.ok(t.ids.length);for(const id of t.ids)assert.ok(data.exercises.some(e=>e.id===id),`${t.id}: ${id}`);}
});
test('filters combine body, equipment and query and preserve empty results',()=>{
 assert.deepEqual(data.filter({body:'Chest',equipment:'Bodyweight',query:'wall'}).map(e=>e.id),['wall-press']);
 assert.equal(data.filter({body:'Chest',equipment:'Exercise bike'}).length,0);
 assert.deepEqual(data.filter({favorites:['calf'],body:'Calves'}).map(e=>e.id),['calf']);
 assert.equal(data.filter({favorites:[]}).length,0);
 assert.equal(data.filter({query:' SQUAT '}).length,6);
});
test('prototype scripts parse',()=>{
 for(const file of ['training-data.js','training.js'])new Function(fs.readFileSync(`${__dirname}/${file}`,'utf8'));
});

test('home filters and jumping alternatives are consistent',()=>{
 assert.ok(data.filter({homeOnly:true,impact:'No jumping'}).length>20);
 assert.ok(data.filter({homeOnly:true,impact:'No jumping'}).every(e=>e.home&&e.pattern!=='Jump'));
 assert.equal(data.filter({homeOnly:true,equipment:'Gym machine'}).length,0);
 for(const e of data.exercises.filter(e=>e.impact==='Jumping')){assert.ok(e.alternative);assert.equal(data.exercises.find(a=>a.id===e.alternative).impact,'No jumping');}
 assert.ok(data.filter({level:'Advanced',query:'tuck'}).length);
});
