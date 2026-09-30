const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const F = require('./female-media.js');
const E = require('./exercise-media.js');
const D = require('./fight-data.js');

test('every female picture listed has its file and replaces an existing picture', () => {
  for (const id of F.movements) {
    assert.ok(E.has(id) || D.media.has(id), `${id}: no original picture to replace`);
    const img = fs.readFileSync(`${__dirname}/assets/movements/${id}-realistic-f.webp`);
    assert.equal(img.subarray(8, 12).toString(), 'WEBP', `${id}: not a WebP picture`);
  }
  for (const image of F.arts) {
    assert.ok(D.arts.some(a => a.image === image), `${image}: not a discipline picture`);
    assert.ok(fs.existsSync(`${__dirname}/assets/arts/${image}-f.webp`), `${image}: female cover missing`);
  }
});
