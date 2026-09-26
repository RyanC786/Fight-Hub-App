const test=require('node:test'),assert=require('node:assert/strict'),m=require('./interval-model.js');
test('work/recovery order, rounds and final recovery omission',()=>{const p=m.build(['a','b'],20,40,2);assert.equal(p.length,7);assert.equal(p.reduce((s,x)=>s+x.seconds,0),200);assert.equal(p.at(-1).kind,'Work');assert.equal(p.at(-1).round,2);});
test('boundary timing and completion',()=>{const p=m.build(['a','b'],5,5,1);assert.deepEqual(m.position(p,0),{index:0,remaining:5,finished:false});assert.equal(m.position(p,5).index,1);assert.equal(m.position(p,14.1).remaining,1);assert.equal(m.position(p,15).finished,true);});
test('invalid settings rejected',()=>{for(const args of [[[],20,40,2],[['a'],0,40,2],[['a'],20,0,2],[['a'],20,40,1.5]])assert.throws(()=>m.build(...args));});
