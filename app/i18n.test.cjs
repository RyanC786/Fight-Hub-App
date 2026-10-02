const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const { tr, prepareDictionary, i18n } = require('./i18n.js');

test('text is translated exactly, by pattern, and parts inside patterns too', () => {
  const dict = {
    'Log a session': 'Registrar una sesión',
    'Set {0}, sprint {1} of 6.': 'Serie {0}, sprint {1} de 6.',
    '{0} of {1} training days': '{0} de {1} días de entrenamiento',
    'Ends in {0} {1}.': 'Termina en {0} {1}.',
    'days': 'días',
    'Keep going.': 'Sigue así.'
  };
  i18n.lang = 'es'; i18n.dict = dict; prepareDictionary(dict);
  assert.equal(tr('Log a session'), 'Registrar una sesión');
  assert.equal(tr('  Log   a session '), '  Registrar una sesión ');   // spaces around are kept
  assert.equal(tr('Set 2, sprint 4 of 6.'), 'Serie 2, sprint 4 de 6.');
  assert.equal(tr('2 of 3 training days'), '2 de 3 días de entrenamiento');
  assert.equal(tr('Ends in 5 days.'), 'Termina en 5 días.');
  assert.equal(tr('Something new'), 'Something new');                // unknown stays English
  assert.equal(tr('Log a session · 2 of 3 training days'), 'Registrar una sesión · 2 de 3 días de entrenamiento');
  assert.equal(tr('Keep going. Something new.'), 'Sigue así. Something new.');
  i18n.lang = 'en';
  assert.equal(tr('Log a session'), 'Log a session');
});

test('the most specific pattern wins', () => {
  i18n.index.clear(); i18n.loose.length = 0; i18n.exact.clear(); i18n.cache.clear();
  const dict = { 'Week {0}': 'Semana {0}', 'Week {0} run': 'Carrera de la semana {0}' };
  i18n.lang = 'es'; i18n.dict = dict; prepareDictionary(dict);
  assert.equal(tr('Week 3 run'), 'Carrera de la semana 3');
  assert.equal(tr('Week 3'), 'Semana 3');
  i18n.lang = 'en';
});

test('every language file keeps the placeholders of the English text', () => {
  const dir = `${__dirname}/assets/lang`;
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
    const dict = JSON.parse(fs.readFileSync(`${dir}/${f}`, 'utf8'));
    for (const [en, out] of Object.entries(dict)) {
      const want = (en.match(/\{\d+\}/g) || []).sort().join();
      const got = (out.match(/\{\d+\}/g) || []).sort().join();
      assert.equal(got, want, `${f}: placeholders differ for "${en}"`);
    }
  }
});
