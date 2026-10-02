// Collects every piece of English text the app can show, for translation.
// Usage: node tools/extract-strings.cjs   (writes lang/source.json, outside the published app)
// Text comes from string and template literals in the app's scripts and from
// index.html. HTML tags split text into separate pieces (as the browser does);
// template expressions become numbered placeholders {0}, {1}...
const fs = require('fs');
const path = require('path');
const APP = path.join(__dirname, '..', 'app');

// String literals and template literals (template expressions kept, nested templates handled)
function literals(src) {
  const out = [];
  let i = 0;
  const n = src.length;
  function readTemplate() { // at the char after the opening backtick
    let text = '';
    while (i < n) {
      const c = src[i];
      if (c === '\\') { text += src[i + 1]; i += 2; continue; }
      if (c === '`') { i++; return text; }
      if (c === '$' && src[i + 1] === '{') {
        i += 2;
        let depth = 1, expr = '';
        while (i < n && depth) {
          const d = src[i];
          if (d === '`') { i++; const inner = readTemplate(); out.push(inner); expr += '`…`'; continue; }
          if (d === "'" || d === '"') { const q = d; i++; let s = ''; while (i < n && src[i] !== q) { if (src[i] === '\\') { s += src[i + 1]; i += 2; continue; } s += src[i++]; } i++; out.push(s); expr += q + s + q; continue; }
          if (d === '{') depth++;
          if (d === '}') { depth--; if (!depth) { i++; break; } }
          expr += d; i++;
        }
        // Expressions that draw markup (icons, buttons, lists) split the text like a tag does
        text += /icon\(|Markup|fbtn\(|rbtn\(|act\(|list\(|\.map\(|\.join\(|legalLink|title\(|<|diagram\(|Picture\(|chip/.test(expr) ? '<x>' : '\u0000' + expr + '\u0001';
        continue;
      }
      text += c; i++;
    }
    return text;
  }
  while (i < n) {
    const c = src[i];
    if (c === '/' && src[i + 1] === '/') { while (i < n && src[i] !== '\n') i++; continue; }
    if (c === '/' && src[i + 1] === '*') { i = src.indexOf('*/', i + 2); i = i < 0 ? n : i + 2; continue; }
    if (c === '`') { i++; out.push(readTemplate()); continue; }
    if (c === "'" || c === '"') {
      const q = c; i++; let s = '';
      while (i < n && src[i] !== q && src[i] !== '\n') { if (src[i] === '\\') { s += src[i + 1]; i += 2; continue; } s += src[i++]; }
      i++; out.push(s); continue;
    }
    if (c === '/' && /[=(,:;!&|?{}\n]\s*$/.test(src.slice(Math.max(0, i - 20), i))) { // regex literal
      i++; while (i < n && src[i] !== '/' && src[i] !== '\n') { if (src[i] === '\\') i++; i++; } i++; continue;
    }
    i++;
  }
  return out;
}

const decode = s => s.replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

// Splits a literal into the text pieces a browser would show
function pieces(lit) {
  const out = [];
  // Remove tags (keeping placeholders), splitting text at each tag
  const parts = lit.split(/<[^>]*>/g);
  for (let part of parts) {
    let k = 0;
    const text = decode(part).replace(/\u0000[^\u0001]*\u0001/g, () => `{${k++}}`).replace(/\s+/g, ' ').trim();
    if (text) out.push(text);
  }
  // Attribute text people see: placeholder, aria-label, title, alt
  for (const m of lit.matchAll(/\b(?:placeholder|aria-label|title|alt)="([^"\u0000]{2,})"/g)) out.push(decode(m[1]).trim());
  return out;
}

// Single lower-case words that the app shows on screen (others are code names)
const WORDS = new Set(['day', 'days', 'session', 'sessions', 'month', 'months', 'minutes', 'min', 'rounds', 'reps', 'sets', 'week', 'weeks', 'chat', 'chats', 'them', 'it', 'message', 'messages', 'exercise', 'exercises', 'drill', 'drills', 'runs', 'year', 'years', 'you', 'or', 'and', 'of']);

function looksLikeText(t) {
  if (/^[a-z]+$/.test(t)) return WORDS.has(t);
  if (/\u0000|'\+|\+'|^\[|^\(?[a-z-]+:\s|^-apple-system/.test(t)) return false;
  const plain = t.replace(/\{\d+\}/g, '').trim();
  if (!/[A-Za-z]{2,}/.test(plain)) return false;
  if (/^[a-z0-9-]+$/.test(plain) && plain.includes('-')) return false;       // ids such as fight-hub-v1
  if (/[={}<>]|=>|\(\)|\$|\\|^\.|^#|https?:|\.js|\.css|\.webp|\.png|\.json|^\/|[a-z][A-Z][a-z]+\(/.test(plain)) return false;
  if (plain.includes(';') && !(/^[A-Z“"]/.test(plain) && /^[^;]*(;\s[a-z][^;]*)+$/.test(plain))) return false; // code, unless a sentence with "; and so on"
  if (/^[a-z]+[A-Z][A-Za-z]*$/.test(plain)) return false;                   // camelCase code names
  if (/^[a-z][a-z0-9_]*$/.test(plain) && plain.length < 3) return false;
  if (/^(div|span|button|true|false|null|undefined|none|auto|block|flex|grid|GET|POST|PATCH|DELETE|application|utf-8)$/i.test(plain)) return false;
  if (/^[\w-]+(\s[\w-]+)*$/.test(plain) && /(^|\s)(card|row|btn|small|eyebrow|primary|full|feature|status|chip|link-button|icon)(\s|$)/.test(plain) && !/[A-Z]/.test(plain)) return false; // class lists
  if (/^(?:[a-z-]+:)?[a-z-]+\([^)]*\)$/.test(plain)) return false;
  return true;
}

const files = fs.readdirSync(APP).filter(f => f.endsWith('.js') && !f.endsWith('.test.cjs') && f !== 'config.js');
const seen = new Map();
for (const f of files) {
  for (const lit of literals(fs.readFileSync(path.join(APP, f), 'utf8'))) {
    for (const p of pieces(lit)) if (looksLikeText(p) && p.length <= 600 && !seen.has(p)) seen.set(p, f);
  }
}
const html = fs.readFileSync(path.join(APP, 'index.html'), 'utf8').replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '');
for (const p of pieces(html)) if (looksLikeText(p) && !seen.has(p)) seen.set(p, 'index.html');

const strings = [...seen.keys()].sort((a, b) => a.localeCompare(b));
fs.mkdirSync(path.join(APP, '..', 'lang'), { recursive: true });
fs.writeFileSync(path.join(APP, '..', 'lang', 'source.json'), JSON.stringify(strings, null, 1) + '\n');
const words = strings.join(' ').split(/\s+/).length;
console.log(`${strings.length} text pieces, about ${words} words`);
