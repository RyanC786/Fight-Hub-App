// Lists app text that has no translation yet, for each language file.
// Run tools/extract-strings.cjs first, then: node tools/missing-strings.cjs
// Text that is meant to stay the same (names, units, code) shows up here too.
const fs = require('fs');
const path = require('path');

const app = path.resolve(__dirname, '../app');
const source = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../lang/source.json'), 'utf8'));
const strings = Array.isArray(source) ? source : Object.keys(source);
const dir = path.join(app, 'assets/lang');

for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
  const dict = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
  const missing = strings.filter(s => !(s in dict));
  const unused = Object.keys(dict).filter(s => !strings.includes(s));
  console.log(`\n${file}: ${missing.length} without a translation, ${unused.length} no longer used`);
  missing.forEach(s => console.log('  ' + JSON.stringify(s)));
}
