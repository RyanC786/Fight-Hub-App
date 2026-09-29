const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');

// The app's scripts share one page, so two top-level declarations with the
// same name silently replace each other (a clash left the Train tab blank).
test('no two app scripts declare the same top-level name', () => {
  const html = fs.readFileSync(`${__dirname}/index.html`, 'utf8');
  const files = [...html.matchAll(/<script src="([\w-]+)\.js/g)].map(m => m[1]).filter(f => f !== 'config');
  assert.ok(files.length > 15, 'scripts listed in index.html');
  const owner = new Map();
  const clashes = [];
  for (const f of files) {
    const src = fs.readFileSync(`${__dirname}/${f}.js`, 'utf8');
    const decl = /\b(?:function)\s+([A-Za-z_$][\w$]*)|\b(?:const|let|var|class)\s+([A-Za-z_$][\w$]*)/y;
    let depth = 0;
    for (let i = 0; i < src.length; i++) {
      const ch = src[i];
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
      else if (depth === 0) {
        decl.lastIndex = i;
        const m = decl.exec(src);
        if (!m) continue;
        const name = m[1] || m[2];
        if (owner.has(name) && owner.get(name) !== f) clashes.push(`${name} (${owner.get(name)}.js and ${f}.js)`);
        else owner.set(name, f);
      }
    }
  }
  assert.deepEqual(clashes, []);
});

test('every script in index.html is cached for offline use', () => {
  const html = fs.readFileSync(`${__dirname}/index.html`, 'utf8');
  const sw = fs.readFileSync(`${__dirname}/sw.js`, 'utf8');
  for (const [, src] of html.matchAll(/<(?:script|link rel="stylesheet") (?:src|href)="([^"]+)"/g)) {
    assert.ok(sw.includes(`'${src}'`), `${src} is missing from the offline list in sw.js`);
  }
});
