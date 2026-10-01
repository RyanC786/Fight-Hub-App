const test = require('node:test');
const assert = require('node:assert/strict');
const B = require('./body-model.js');

test('weights convert between kilograms and stone and pounds', () => {
  assert.equal(Math.round(B.toKg('st', { st: 12, lb: 7 }) * 10) / 10, 79.4);
  assert.equal(B.weight(79.38, 'st'), '12 st 7 lb');
  assert.equal(B.weight(79.38, 'kg'), '79.4 kg');
  assert.equal(B.toCm('st', 32), 81.28);
  assert.equal(B.waist(81.28, 'st'), '32.0 in');
  assert.equal(B.change(-1.04, 'kg'), '−1.0 kg');
  assert.ok(!B.validKg(NaN) && !B.validKg(12) && B.validKg(80));
});

test('the weekly trend needs a week of weigh-ins, and the pace note fits the goal', () => {
  const today = new Date('2026-10-29T09:00:00Z');
  assert.equal(B.weeklyTrend([{ date: '2026-10-28', kg: 80 }], today), null);
  const losing = [['2026-10-01', 82], ['2026-10-08', 81.4], ['2026-10-15', 80.7], ['2026-10-22', 80.1], ['2026-10-29', 79.4]].map(([date, kg]) => ({ date, kg }));
  const t = B.weeklyTrend(losing, today);
  assert.ok(t < -0.5 && t > -0.8, `trend ${t}`);
  assert.match(B.paceNote(t, 'Lose weight'), /healthy, steady pace/);
  assert.match(B.paceNote(-1.5, 'Lose weight'), /faster than/);
  assert.match(B.paceNote(0.8, 'Build strength and muscle'), /fairly fast/);
  assert.match(B.paceNote(null, 'Lose weight'), /once a week/);
});
