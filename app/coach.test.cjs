const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');

test('every coach portrait listed in coach.js has its picture', () => {
  const src = fs.readFileSync(`${__dirname}/coach.js`, 'utf8');
  const list = src.match(/const COACH_PORTRAITS = \[([^\]]*)\]/);
  assert.ok(list, 'COACH_PORTRAITS list');
  const voices = [...list[1].matchAll(/'(\w+)'/g)].map(m => m[1]);
  for (const v of voices) {
    assert.ok(['male', 'female'].includes(v), `${v}: unknown voice`);
    const img = fs.readFileSync(`${__dirname}/assets/coach/coach-${v}.webp`);
    assert.equal(img.subarray(8, 12).toString(), 'WEBP', `${v}: not a WebP picture`);
  }
});
