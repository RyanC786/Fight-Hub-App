const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const F = require('./fight-data.js');
const T = require('./training-data.js');
const C = require('./exercise-content.js');

const libraryIds = new Set(T.exercises.map(e => e.id));
const known = id => id === 'rest' || !!F.drills[id] || libraryIds.has(id);

test('every drill has a name, steps, a cue and an easier option', () => {
  for (const [id, d] of Object.entries(F.drills)) {
    assert.ok(d.n && d.t && d.eq && d.lv, `${id} is missing details`);
    assert.ok(Array.isArray(d.s) && d.s.length >= 2, `${id} needs at least two steps`);
    assert.ok(d.c && d.e, `${id} needs a cue and an easier option`);
    assert.ok(!libraryIds.has(id), `${id} clashes with a main library exercise`);
  }
});

test('every drill referenced by sessions, warm-ups and cool-downs exists', () => {
  for (const list of [...Object.values(F.warmups), ...Object.values(F.cooldowns)]) for (const [id] of list) assert.ok(known(id), `unknown drill ${id}`);
  for (const s of F.sessions) {
    for (const [id, focus] of s.plan) { assert.ok(known(id), `${s.id}: unknown drill ${id}`); assert.ok(focus, `${s.id}: each round needs a focus`); }
    for (const [id] of s.finisher || []) assert.ok(known(id), `${s.id}: unknown finisher drill ${id}`);
  }
  // Library exercises used by fight training have written instructions
  for (const s of F.sessions) for (const [id] of s.plan) if (libraryIds.has(id)) assert.ok(C.get(id).steps.length);
});

test('sessions: unique ids, valid disciplines, sensible rounds, one free session per discipline', () => {
  const ids = F.sessions.map(s => s.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const s of F.sessions) {
    assert.ok(F.arts.some(a => a.id === s.art), `${s.id}: unknown discipline`);
    assert.ok(F.warmups[s.warmup] && F.cooldowns[s.cooldown], `${s.id}: warm-up or cool-down missing`);
    assert.ok(s.work >= 60 && s.work <= 300 && s.rest >= 30 && s.rest <= 120, `${s.id}: round or rest length out of range`);
    assert.ok(s.plan.length >= 4 && s.plan.length <= 8, `${s.id}: 4–8 rounds expected`);
  }
  for (const a of F.arts) {
    assert.ok(F.sessions.some(s => s.art === a.id && s.free), `${a.id} needs a free session`);
    assert.ok(fs.existsSync(`${__dirname}/assets/arts/${a.image}.webp`), `${a.id}: image missing`);
  }
});

test('the timer phases add up to the advertised session length', () => {
  for (const s of F.sessions) {
    const phases = F.buildSession(s);
    assert.equal(phases.reduce((t, p) => t + p.seconds, 0), F.sessionSeconds(s), s.id);
    assert.equal(phases.filter(p => p.kind === 'Round').length, s.plan.length, s.id);
    assert.ok(phases.every(p => p.seconds > 0 && known(p.id)), s.id);
  }
});

test('sport-specific round formats', () => {
  const byId = id => F.sessions.find(s => s.id === id);
  assert.equal(byId('box-bag').work, 180);
  assert.equal(byId('box-bag').rest, 60);
  assert.equal(byId('mt-fight-rounds').rest, 120); // Thai professional format: 3 min rounds, 2 min rest
  assert.equal(byId('mma-sprawl-brawl').work, 300); // MMA: 5 min rounds
});

test('every programme week builds, with known drills and progressive loading', () => {
  for (const p of F.programmes) {
    for (let w = 1; w <= p.weeks; w++) {
      const days = p.build(w);
      assert.equal(days.length, p.perWeek, `${p.id} week ${w}`);
      for (const d of days) {
        assert.ok(d.name && d.phases.length, `${p.id} week ${w}`);
        for (const ph of d.phases) { assert.ok(known(ph.id), `${p.id} week ${w}: ${ph.id}`); assert.ok(ph.seconds > 0); }
      }
    }
    assert.ok(p.freeWeeks.includes(1), `${p.id}: week 1 should be free`);
  }
  const splits = F.programmes.find(p => p.id === 'splits');
  const holds = w => splits.build(w)[0].phases.filter(ph => ph.kind === 'Hold').map(ph => ph.seconds);
  assert.ok(Math.max(...holds(8)) > Math.max(...holds(1)), 'splits holds should lengthen');
  assert.ok(splits.build(1)[0].phases.some(ph => ph.kind === 'Contract' && ph.seconds === 6), 'contract-relax uses 6-second contractions');
  const runWalk = F.programmes.find(p => p.id === 'run-walk');
  const runSecs = w => runWalk.build(w)[0].phases.filter(ph => ph.kind === 'Run').reduce((t, ph) => t + ph.seconds, 0);
  assert.equal(runSecs(9), 1800);
  for (let w = 2; w <= 9; w++) assert.ok(runSecs(w) >= runSecs(w - 1), `run-walk week ${w} should not be easier than week ${w - 1}`);
});

test('fight and journal scripts parse', () => {
  for (const file of ['fight', 'journal', 'core', 'shell']) new Function(fs.readFileSync(`${__dirname}/${file}.js`, 'utf8'));
});
