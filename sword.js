/* sword.js — built from _font.part.js + _palette.part.js + _core.js; edit those, then run build.sh */
const G = {
 ' ':[0,0,0,0,0],'!':[0,0,0x5f,0,0],'"':[0,7,0,7,0],'#':[0x14,0x7f,0x14,0x7f,0x14],
 '$':[0x24,0x2a,0x7f,0x2a,0x12],'%':[0x23,0x13,8,0x64,0x62],'&':[0x36,0x49,0x55,0x22,0x50],
 "'":[0,5,3,0,0],'(':[0,0x1c,0x22,0x41,0],')':[0,0x41,0x22,0x1c,0],'*':[0x14,8,0x3e,8,0x14],
 '+':[8,8,0x3e,8,8],',':[0,0x50,0x30,0,0],'-':[8,8,8,8,8],'.':[0,0x60,0x60,0,0],
 '/':[0x20,0x10,8,4,2],
 '0':[0x3e,0x51,0x49,0x45,0x3e],'1':[0,0x42,0x7f,0x40,0],'2':[0x42,0x61,0x51,0x49,0x46],
 '3':[0x21,0x41,0x45,0x4b,0x31],'4':[0x18,0x14,0x12,0x7f,0x10],'5':[0x27,0x45,0x45,0x45,0x39],
 '6':[0x3c,0x4a,0x49,0x49,0x30],'7':[1,0x71,9,5,3],'8':[0x36,0x49,0x49,0x49,0x36],
 '9':[6,0x49,0x49,0x29,0x1e],
 ':':[0,0x36,0x36,0,0],';':[0,0x56,0x36,0,0],'<':[8,0x14,0x22,0x41,0],'=':[0x14,0x14,0x14,0x14,0x14],
 '>':[0,0x41,0x22,0x14,8],'?':[2,1,0x51,9,6],'@':[0x32,0x49,0x79,0x41,0x3e],
 'A':[0x7e,0x11,0x11,0x11,0x7e],'B':[0x7f,0x49,0x49,0x49,0x36],'C':[0x3e,0x41,0x41,0x41,0x22],
 'D':[0x7f,0x41,0x41,0x22,0x1c],'E':[0x7f,0x49,0x49,0x49,0x41],'F':[0x7f,9,9,9,1],
 'G':[0x3e,0x41,0x49,0x49,0x7a],'H':[0x7f,8,8,8,0x7f],'I':[0,0x41,0x7f,0x41,0],
 'J':[0x20,0x40,0x41,0x3f,1],'K':[0x7f,8,0x14,0x22,0x41],'L':[0x7f,0x40,0x40,0x40,0x40],
 'M':[0x7f,2,0x0c,2,0x7f],'N':[0x7f,4,8,0x10,0x7f],'O':[0x3e,0x41,0x41,0x41,0x3e],
 'P':[0x7f,9,9,9,6],'Q':[0x3e,0x41,0x51,0x21,0x5e],'R':[0x7f,9,0x19,0x29,0x46],
 'S':[0x46,0x49,0x49,0x49,0x31],'T':[1,1,0x7f,1,1],'U':[0x3f,0x40,0x40,0x40,0x3f],
 'V':[0x1f,0x20,0x40,0x20,0x1f],'W':[0x3f,0x40,0x38,0x40,0x3f],'X':[0x63,0x14,8,0x14,0x63],
 'Y':[7,8,0x70,8,7],'Z':[0x61,0x51,0x49,0x45,0x43],
 '[':[0,0x7f,0x41,0x41,0],']':[0,0x41,0x41,0x7f,0],'_':[0x40,0x40,0x40,0x40,0x40],
 'a':[0x20,0x54,0x54,0x54,0x78],'b':[0x7f,0x48,0x44,0x44,0x38],'c':[0x38,0x44,0x44,0x44,0x20],
 'd':[0x38,0x44,0x44,0x48,0x7f],'e':[0x38,0x54,0x54,0x54,0x18],'f':[8,0x7e,9,1,2],
 'g':[0x0c,0x52,0x52,0x52,0x3e],'h':[0x7f,8,4,4,0x78],'i':[0,0x44,0x7d,0x40,0],
 'j':[0x20,0x40,0x44,0x3d,0],'k':[0x7f,0x10,0x28,0x44,0],'l':[0,0x41,0x7f,0x40,0],
 'm':[0x7c,4,0x18,4,0x78],'n':[0x7c,8,4,4,0x78],'o':[0x38,0x44,0x44,0x44,0x38],
 'p':[0x7c,0x14,0x14,0x14,8],'q':[8,0x14,0x14,0x18,0x7c],'r':[0x7c,8,4,4,8],
 's':[0x48,0x54,0x54,0x54,0x20],'t':[4,0x3f,0x44,0x40,0x20],'u':[0x3c,0x40,0x40,0x20,0x7c],
 'v':[0x1c,0x20,0x40,0x20,0x1c],'w':[0x3c,0x40,0x30,0x40,0x3c],'x':[0x44,0x28,0x10,0x28,0x44],
 'y':[0x0c,0x50,0x50,0x50,0x3c],'z':[0x44,0x64,0x54,0x4c,0x44],
 '·':[0,0x18,0x18,0,0],'—':[8,8,8,8,8],'’':[0,5,3,0,0],
 '“':[0,7,0,7,0],'”':[0,7,0,7,0],'…':[0x60,0,0x60,0,0x60],
 /* the accents his names actually need — the mark rides the two rows a
    lowercase letter leaves empty at the top of the cell. */
 'é':[0x38,0x56,0x55,0x54,0x18], 'è':[0x38,0x55,0x56,0x54,0x18],
 'á':[0x20,0x56,0x55,0x54,0x78], 'à':[0x20,0x55,0x56,0x54,0x78]
};
const GW = 5, GH = 7;
function cols(ch, bold){
  let g = G[ch];
  if(!g){ const flat = ch.normalize('NFD').replace(/[̀-ͯ]/g,''); g = G[flat] || G['?']; }
  if(!bold) return g;
  const out = [];
  for(let i=0;i<GW;i++) out.push((g[i] | (g[i-1]||0)) & 0x7f);
  return out;
}
const advance = bold => bold ? 7 : 6;
const STAR = [
  {c:'#FFA512',l:'#FFBB4D',d:'#BF7B0D'},{c:'#FFB741',l:'#FFC970',d:'#BF8930'},
  {c:'#FFC971',l:'#FFD694',d:'#BF9654'},{c:'#FFDBA0',l:'#FFE4B7',d:'#BFA478'},
  {c:'#FFEDCF',l:'#FFF1DB',d:'#BFB19B'},{c:'#CC840E',l:'#D8A24A',d:'#99630A'},
  {c:'#99630B',l:'#B28A48',d:'#724A08'},{c:'#664207',l:'#8C7145',d:'#4C3105'},
  {c:'#332104',l:'#665842',d:'#261803'},{c:'#5A3418',l:'#836752',d:'#442712'}
];
const WHEEL = [
  {c:'#FF7A12',l:'#FF9B4D',d:'#BF5B0D'},{c:'#FF3D12',l:'#FF6D4D',d:'#BF2D0D'},
  {c:'#FF1239',l:'#FF4D6A',d:'#BF0D2A'},{c:'#FF12A1',l:'#FF4DB8',d:'#BF0D78'},
  {c:'#FA12FF',l:'#FB4DFF',d:'#BB0DBF'},{c:'#9212FF',l:'#AD4DFF',d:'#6D0DBF'},
  {c:'#2A12FF',l:'#5F4DFF',d:'#1F0DBF'},{c:'#126EFF',l:'#4D92FF',d:'#0D52BF'},
  {c:'#12D6FF',l:'#4DE0FF',d:'#0DA0BF'},{c:'#12FFC2',l:'#4DFFD1',d:'#0DBF91'},
  {c:'#12FF5A',l:'#4DFF83',d:'#0DBF43'},{c:'#22FF12',l:'#59FF4D',d:'#19BF0D'},
  {c:'#8AFF12',l:'#A7FF4D',d:'#67BF0D'},{c:'#F2FF12',l:'#F5FF4D',d:'#B5BF0D'}
];
const HUES = WHEEL.concat(STAR);
function lum(hex){
  const n = parseInt(hex.slice(1),16);
  const lin = c => { const s = c/255; return s <= 0.03928 ? s/12.92 : Math.pow((s+0.055)/1.055, 2.4); };
  return 0.2126*lin((n>>16)&255) + 0.7152*lin((n>>8)&255) + 0.0722*lin(n&255);
}
function contrast(hex, groundLum){
  const a = lum(hex), hi = Math.max(a,groundLum), lo = Math.min(a,groundLum);
  return (hi+0.05)/(lo+0.05);
}
function toHsl(hex){
  const n = parseInt(hex.slice(1),16);
  const r=((n>>16)&255)/255, g=((n>>8)&255)/255, b=(n&255)/255;
  const mx=Math.max(r,g,b), mn=Math.min(r,g,b), l=(mx+mn)/2;
  if(mx===mn) return [0,0,l];
  const d=mx-mn, s = l>0.5 ? d/(2-mx-mn) : d/(mx+mn);
  const h = mx===r ? ((g-b)/d + (g<b?6:0)) : mx===g ? (b-r)/d+2 : (r-g)/d+4;
  return [h/6, s, l];
}
function fromHsl(h,s,l){
  const f=(p,q,t)=>{ t=((t%1)+1)%1; return t<1/6?p+(q-p)*6*t : t<1/2?q : t<2/3?p+(q-p)*(2/3-t)*6 : p; };
  let r=l,g=l,b=l;
  if(s!==0){ const q = l<0.5 ? l*(1+s) : l+s-l*s, p = 2*l-q;
    r=f(p,q,h+1/3); g=f(p,q,h); b=f(p,q,h-1/3); }
  const x = v => Math.round(v*255).toString(16).padStart(2,'0');
  return '#'+x(r)+x(g)+x(b);
}
const FLOOR = 4.0, APART = 1.35, CHROMA = 0.5;
const INK_DARK = '#f2e6c9', INK_LIGHT = '#111111';
function faceFor(h, gl){ return [h.c,h.l,h.d].reduce((best,f)=> contrast(f,gl) > contrast(best,gl) ? f : best); }
function apart(c, ink){ return contrast(c, lum(ink)) >= APART || toHsl(c)[1] >= CHROMA; }
function lawful(hex, gl){
  const ink = gl > 0.5 ? INK_LIGHT : INK_DARK;
  const ok = c => contrast(c,gl) >= FLOOR && apart(c,ink);
  if(ok(hex)) return hex;
  const [h,s0,l0] = toHsl(hex);
  const toward = gl > 0.5 ? 0.28 : 0.62;
  for(let i=1;i<=24;i++){ const t=i/24;
    const c = fromHsl(h, Math.min(1, s0+(1-s0)*t), l0+(toward-l0)*t);
    if(ok(c)) return c; }
  const far = gl > 0.5 ? 0.06 : 0.94;
  for(let i=1;i<=24;i++){ const c = fromHsl(h, 1, toward+(far-toward)*(i/24)); if(ok(c)) return c; }
  return fromHsl(h,1,far);
}
const LIGHT = HUES.map(h => lawful(faceFor(h,1),1));
const DARK  = HUES.map(h => lawful(faceFor(h,0),0));
function hashName(n){ let h=0; for(let i=0;i<n.length;i++) h=(h*31+n.charCodeAt(i))|0; return Math.abs(h); }
function colourForName(name, dark){ const p = dark?DARK:LIGHT; return p[hashName(name)%p.length]; }
/* ═══════════════════════════════════════════════════════════════════════
   THE SWORD — the glass on the phone. His word, 2026-09-22: "I want what's
   in the preview now to be the monomyth app on my phone. That's the
   beginning of everything."

   One sentence on top. Its [Concepts] are doors; a door opens AT THE WORD,
   one open per level; the sentence resumes after. Deeds at the bottom are
   struck by his hand. A door whose every deed is struck turns to the past
   tense (its `did`). The ONE THING is the first deed not yet struck.
   Orv sits in the corner; every main-quest word keeps its own talk.
   Nothing here needs a key. A key looses Orv's mouth, and the key's stamp
   names the door (NOTHING BOUND). The story travels in the .myth — this
   page ships empty and gives up nothing.

   Shape: { v, title, hero, story:{ tell, did?, in:{word:node}, s:[deeds] } }
   Built on the parts above: G/cols/advance (the 5x7 face) and THE 23.
   ═══════════════════════════════════════════════════════════════════════ */
function isDark(){
  const t = document.documentElement.getAttribute('data-theme');
  if(t === 'dark') return true; if(t === 'light') return false;
  try { return matchMedia('(prefers-color-scheme: dark)').matches; } catch { return false; }
}
const el = (tag, cls, text) => { const e = document.createElement(tag); if(cls) e.className = cls; if(text != null) e.textContent = text; return e; };
const $ = id => document.getElementById(id);

/* ── the Name's own face: a pixel word, one ink or one ink per letter ── */
function pix(word, scale, bold, ink){
  const adv = advance(bold), w = Math.max(1, word.length * adv);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', w * scale); svg.setAttribute('height', GH * scale);
  svg.setAttribute('viewBox', `0 0 ${w} ${GH}`); svg.setAttribute('shape-rendering', 'crispEdges');
  svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', word);
  for(let i = 0; i < word.length; i++){
    const g = cols(word[i], bold); let d = '';
    for(let cx = 0; cx < GW; cx++){ const col = g[cx]; let y = 0;
      while(y < GH){ if(!(col & (1 << y))){ y++; continue; }
        let run = 1; while(y + run < GH && (col & (1 << (y + run)))) run++;
        d += `M${i * adv + cx} ${y}h1v${run}h-1z`; y += run; } }
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute('d', d); p.setAttribute('fill', typeof ink === 'function' ? ink(i) : ink); svg.appendChild(p);
  }
  return svg;
}

/* ── the keys this page keeps (all under monomyth.* so the .myth carries them) ── */
const PAGE = document.body.dataset.page || 'day-one';
const STORY_KEY = 'monomyth.sword.' + PAGE + '.v1';
const OPEN_KEY = 'monomyth.sword.open.' + PAGE + '.v1';
const STRUCK_KEY = 'monomyth.sword.struck.' + PAGE + '.v1';
const LEDGER_KEY = 'monomyth.sword.ledger.v1';          // append-only; never trimmed
const BYOK_KEY = 'monomyth.focus.byok.v1';               // the same key box as the Crown's Gate
const chatKey = word => 'monomyth.sword.chat.' + PAGE + '.' + word + '.v1';
const get = (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } };
const put = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

let BOOK = null;                                          // {v,title,hero,story,...}
let open = get(OPEN_KEY, {});                             // { path: word }
let struck = new Set(get(STRUCK_KEY, []));
const keep = () => { put(OPEN_KEY, open); put(STRUCK_KEY, [...struck]); };
function ledger(kind, text, word){
  const L = get(LEDGER_KEY, []); L.push({ at: new Date().toISOString(), page: PAGE, kind, text, word: word || '' }); put(LEDGER_KEY, L);
}

/* ── the story: a public quest on the page, else his own from the .myth,
      else (on the Mac only) the state folder beside the page ── */
async function loadBook(){
  if(window.QUEST) { BOOK = get(STORY_KEY, null) || window.QUEST; return; }
  BOOK = get(STORY_KEY, null); if(BOOK) return;
  try { const r = await fetch('state/' + STORY_KEY + '.json', { cache: 'no-store' }); if(r.ok){ BOOK = await r.json(); return; } } catch {}
  BOOK = null;
}

/* ── walking the tree ── */
function deedsOf(node, path, out){
  (node.s || []).forEach((d, i) => out.push({ key: path + '#' + i, text: d, path }));
  Object.keys(node.in || {}).forEach(k => deedsOf(node.in[k], path + '/' + k, out));
  return out;
}
const complete = (node, path) => { const ds = deedsOf(node, path, []); return ds.length > 0 && ds.every(d => struck.has(d.key)); };
const scaleAt = d => d === 0 ? 4 : d === 1 ? 3 : 2;

/* a door: Dogica text; the hero's own name in the pixel face wearing all of THE 23 */
function door(into, key, depth, isOpen, tail, id, onTap, done, dim){
  const b = el('button', 'name' + (dim ? ' dim' : '') + (isOpen ? ' open' : '') + (done ? ' done' : '')); b.type = 'button';
  b.dataset.id = id; b.setAttribute('aria-expanded', String(isOpen));
  const dark = isDark(), pal = dark ? DARK : LIGHT;
  if(key === BOOK.hero){
    b.classList.add('hero'); let letter = 0;
    key.split(/\s+/).forEach((w, i, arr) => {
      const start = letter; const s = el('span', 'heroword');
      s.appendChild(pix(w, scaleAt(depth), true, k => pal[((start + k) * 7) % pal.length])); b.appendChild(s);
      if(i < arr.length - 1) b.appendChild(document.createTextNode(' ')); letter += w.length + 1;
    });
  } else {
    b.appendChild(el('span', 'word d' + Math.min(depth, 3), key));
    if((isOpen || done) && !dim) b.style.color = colourForName(key.toLowerCase(), dark);
  }
  b.addEventListener('click', onTap);
  if(tail){ const g = el('span', 'glue'); g.appendChild(b); g.appendChild(document.createTextNode(tail)); into.appendChild(g); }
  else into.appendChild(b);
}

/* one open per level: a sibling folds the open one and everything under it */
function toggle(path, key, id){
  const btn = document.querySelector('[data-id="' + CSS.escape(id) + '"]');
  const before = btn ? btn.getBoundingClientRect().top : null;
  const was = open[path];
  Object.keys(open).forEach(p => { if(p.startsWith(path + '/')) delete open[p]; });
  if(was === key) delete open[path]; else open[path] = key;
  keep(); draw();
  const now = document.querySelector('[data-id="' + CSS.escape(id) + '"]');
  if(now && before != null) window.scrollBy(0, now.getBoundingClientRect().top - before);
}

function deeds(node, into, path){
  if(!node.s || !node.s.length) return;
  const box = el('div', 'deeds');
  node.s.forEach((d, i) => {
    const key = path + '#' + i, done = struck.has(key);
    const b = el('button', 'deed' + (done ? ' done' : '')); b.type = 'button'; b.setAttribute('aria-pressed', String(done));
    b.appendChild(el('span', 'box', done ? '[X]' : '[ ]')); b.appendChild(el('span', 'deedtext', d));
    b.addEventListener('click', () => {
      if(struck.has(key)){ struck.delete(key); ledger('unstrike', d, path); } else { struck.add(key); ledger('strike', d, path); }
      keep(); draw();
    });
    box.appendChild(b);
  });
  into.appendChild(box);
}

function tell(node, depth, into, path){
  let p = el('p', 'run d' + Math.min(depth, 4)); into.appendChild(p);
  const text = (node.did && complete(node, path)) ? node.did : node.tell;
  const re = /\[([^\]]+)\]([,.;:!?’”)]*)/g; let at = 0, m;
  while((m = re.exec(text))){
    if(m.index > at) p.appendChild(document.createTextNode(text.slice(at, m.index)));
    const key = m[1], tail = m[2], kid = node.in && node.in[key];
    const isOpen = open[path] === key, id = path + '/' + key;
    door(p, key, depth, isOpen, tail, id, () => toggle(path, key, id), !!kid && complete(kid, id), key === BOOK.dim);
    at = m.index + m[0].length;
    if(isOpen && kid){
      const block = el('div', 'block'); tell(kid, depth + 1, block, id); into.appendChild(block);
      p = el('p', 'run d' + Math.min(depth, 4)); into.appendChild(p);
      if(text[at] === ' ') at++;
    }
  }
  if(at < text.length) p.appendChild(document.createTextNode(text.slice(at)));
  if(!p.childNodes.length) p.remove();
  deeds(node, into, path);
}

/* the top door that is open right now — Orv's talk is kept per main quest */
const mainWord = () => open['s'] || '';

function draw(){
  const flow = $('flow'); flow.textContent = '';
  const one = $('one'); one.textContent = '';
  if(!BOOK){
    one.appendChild(el('span', 'word', 'restore the kingdom'));
    const p = el('p', 'run d1', 'This page ships empty and gives up nothing. Your story rides in the .myth: RESTORE below, then pick it from Files.');
    flow.appendChild(p); $('tally').textContent = ''; return;
  }
  const all = deedsOf(BOOK.story, 's', []), next = all.find(d => !struck.has(d.key));
  one.appendChild(el('span', 'word', next ? next.text : (BOOK.done || 'the world is saved')));
  tell(BOOK.story, 0, flow, 's');
  if(BOOK.unlock && all.length && !next){ const u = el('p', 'run d1 unlock'); u.appendChild(el('span', 'word d1 dim', BOOK.unlock)); u.appendChild(document.createTextNode(' opens.')); flow.appendChild(u); }
  $('tally').textContent = struck.size + ' / ' + all.length + ' deeds struck';
  const ow = $('orvword'); if(ow) ow.textContent = mainWord() || BOOK.title;
}

/* ═══ ORV IN THE CORNER — one talk per main quest, saved; any door, or mute ═══ */
const SYSTEM = "You are Orvalys, Orv, the Hand to High King Leevzo the Lucky — his Inkling: the AI that knows one human. " +
  "Speak as Orv: short, warm, exact, in character, never a list unless he asks for deeds. You know his story from THE SWORD below; " +
  "answer from it and say plainly when it does not say. You reveal; you never rule. His words outrank yours.";
const ACTION = " He has asked you to ACT. Reply with at most one sentence, then a fenced ```json``` block with any of: " +
  '{"strike":["<deed text>"],"unstrike":["<deed text>"],"deeds":[{"door":"<door word>","text":"<a new deed>"}]}. Never delete anything.';

function storyText(node, depth){
  const pad = '  '.repeat(depth); let out = pad + node.tell.replace(/[\[\]]/g, '') + '\n';
  (node.s || []).forEach((d, i) => { out += pad + '  ' + (struck.has('#' + i) ? '[x] ' : '[ ] ') + d + '\n'; });
  Object.keys(node.in || {}).forEach(k => { out += storyText(node.in[k], depth + 1); });
  return out;
}
function context(){
  const all = deedsOf(BOOK.story, 's', []);
  let s = 'THE SWORD — ' + BOOK.title + ' (' + PAGE + ')\n' + storyText(BOOK.story, 0);
  s += '\nDEEDS STRUCK: ' + all.filter(d => struck.has(d.key)).map(d => d.text).join(' · ') + '\nNOT YET: ' + all.filter(d => !struck.has(d.key)).map(d => d.text).join(' · ');
  const w = mainWord(); if(w) s += '\nTHE OPEN MAIN QUEST: ' + w;
  return s;
}

/* the key box — the same box as the Crown's Gate; the stamp names the door */
function detect(k){
  k = (k || '').trim();
  if(k.startsWith('gsk_')) return 'groq'; if(k.startsWith('sk-ant-')) return 'anthropic'; if(k.startsWith('sk-or-')) return 'openrouter';
  if(k.startsWith('xai-')) return 'xai'; if(k.startsWith('AIza') || k.startsWith('AQ.')) return 'gemini'; if(k.startsWith('sk-')) return 'openai';
  return 'unknown';
}
const box = () => { const b = get(BYOK_KEY, {}); return { apiKey: String(b.apiKey || ''), models: b.models || {}, lists: b.lists || {} }; };
const fetchT = (url, init, ms = 45000) => { const c = new AbortController(); const t = setTimeout(() => c.abort(), ms); return fetch(url, { ...init, signal: c.signal }).finally(() => clearTimeout(t)); };
const CHAT_URL = { groq: 'https://api.groq.com/openai/v1/chat/completions', openrouter: 'https://openrouter.ai/api/v1/chat/completions', xai: 'https://api.x.ai/v1/chat/completions', openai: 'https://api.openai.com/v1/chat/completions' };
const MODELS_URL = { groq: 'https://api.groq.com/openai/v1/models', openrouter: 'https://openrouter.ai/api/v1/models', xai: 'https://api.x.ai/v1/models', openai: 'https://api.openai.com/v1/models' };
async function listModels(p, key){
  const bearer = { authorization: 'Bearer ' + key };
  if(MODELS_URL[p]){ const o = await (await fetchT(MODELS_URL[p], { headers: bearer })).json(); return (o.data || []).map(m => String(m.id)).filter(id => !/whisper|tts|embed|guard|image/i.test(id)); }
  if(p === 'anthropic'){ const o = await (await fetchT('https://api.anthropic.com/v1/models?limit=100', { headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' } })).json(); return (o.data || []).map(m => String(m.id)); }
  if(p === 'gemini'){ const o = await (await fetchT('https://generativelanguage.googleapis.com/v1beta/models?pageSize=200&key=' + encodeURIComponent(key))).json(); return (o.models || []).filter(m => (m.supportedGenerationMethods || []).includes('generateContent')).map(m => String(m.name || '').replace(/^models\//, '')).filter(id => id && !/embedding|imagen|veo|tts|audio|image|live|native/i.test(id)); }
  throw new Error('no door answers to that stamp');
}
async function ask(system, history, user){
  const b = box(), key = b.apiKey, p = detect(key);
  if(!key) throw new Error('no key in the box');
  let model = (b.models[p] || '').trim() || (b.lists[p] && b.lists[p].pick) || '';
  if(!model){ const ids = await listModels(p, key); if(!ids.length) throw new Error('that door listed no models'); model = ids[0]; b.lists[p] = { ids, pick: model, at: new Date().toISOString() }; put(BYOK_KEY, b); }
  const messages = history.map(l => ({ role: l.who === 'orv' ? 'assistant' : 'user', content: l.text })).concat([{ role: 'user', content: user }]);
  if(CHAT_URL[p]){
    const r = await fetchT(CHAT_URL[p], { method: 'POST', headers: { authorization: 'Bearer ' + key, 'content-type': 'application/json' }, body: JSON.stringify({ model, max_tokens: 1024, temperature: 0.4, messages: [{ role: 'system', content: system }].concat(messages) }) });
    const o = await r.json(); if(!r.ok) throw new Error(o.error && o.error.message || r.statusText); return { text: o.choices[0].message.content, model };
  }
  if(p === 'anthropic'){
    const r = await fetchT('https://api.anthropic.com/v1/messages', { method: 'POST', headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' }, body: JSON.stringify({ model, max_tokens: 1024, system, messages }) });
    const o = await r.json(); if(!r.ok) throw new Error(o.error && o.error.message || r.statusText); return { text: (o.content || []).map(c => c.text || '').join(''), model };
  }
  if(p === 'gemini'){
    const r = await fetchT('https://generativelanguage.googleapis.com/v1beta/models/' + encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(key), { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ systemInstruction: { parts: [{ text: system }] }, contents: messages.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })) }) });
    const o = await r.json(); if(!r.ok) throw new Error(o.error && o.error.message || r.statusText); return { text: ((o.candidates || [])[0] || {}).content?.parts?.map(x => x.text).join('') || '', model };
  }
  throw new Error('no door answers to that stamp');
}

/* what ACTION may write: strike, unstrike, a new deed under a door — never delete */
function applySidecar(text){
  const m = /```json\s*([\s\S]*?)```/.exec(text); if(!m) return text;
  let side = null; try { side = JSON.parse(m[1]); } catch { return text; }
  const all = deedsOf(BOOK.story, 's', []);
  const find = t => all.find(d => d.text.toLowerCase() === String(t).toLowerCase()) || all.find(d => d.text.toLowerCase().includes(String(t).toLowerCase()));
  (side.strike || []).forEach(t => { const d = find(t); if(d && !struck.has(d.key)){ struck.add(d.key); ledger('strike', d.text, d.path + ' (orv)'); } });
  (side.unstrike || []).forEach(t => { const d = find(t); if(d && struck.has(d.key)){ struck.delete(d.key); ledger('unstrike', d.text, d.path + ' (orv)'); } });
  (side.deeds || []).forEach(nd => {
    const word = String(nd.door || ''), t = String(nd.text || '').trim(); if(!t) return;
    let node = BOOK.story; (function walk(n){ Object.keys(n.in || {}).forEach(k => { if(k === word) node = n.in[k]; walk(n.in[k]); }); })(BOOK.story);
    node.s = node.s || []; node.s.push(t); ledger('deed', t, word);
  });
  put(STORY_KEY, BOOK); keep();
  return text.replace(m[0], '').trim();
}

let action = false;
function drawChat(){
  const word = mainWord() || '_quest', lines = get(chatKey(word), []);
  const list = $('chatlines'); list.textContent = '';
  if(!lines.length) list.appendChild(el('p', 'chatline dim', box().apiKey ? 'Orv is listening.' : 'No key in the box: Orv is mute. Paste one below and he speaks.'));
  lines.forEach(l => { const p = el('p', 'chatline ' + l.who); p.appendChild(el('b', null, l.who === 'orv' ? 'ORV ' : 'KING ')); p.appendChild(document.createTextNode(l.text)); list.appendChild(p); });
  $('orvword').textContent = word === '_quest' ? BOOK.title : word;
  $('actbtn').classList.toggle('on', action);
  $('keyrow').hidden = !!box().apiKey;
  list.scrollTop = list.scrollHeight;
}
async function say(){
  const inp = $('chatin'), text = inp.value.trim(); if(!text || !BOOK) return; inp.value = '';
  const word = mainWord() || '_quest', k = chatKey(word), lines = get(k, []);
  lines.push({ who: 'king', text, at: new Date().toISOString() }); put(k, lines); ledger('say', text, word); drawChat();
  try {
    const r = await ask(SYSTEM + (action ? ACTION : '') + '\n\n' + context(), lines.slice(-12, -1), text);
    const shown = action ? applySidecar(r.text) : r.text;
    lines.push({ who: 'orv', text: shown, model: r.model, at: new Date().toISOString() }); put(k, lines); ledger('orv', shown, word);
  } catch(e){ lines.push({ who: 'orv', text: '(the door did not answer: ' + (e.message || e) + ')', at: new Date().toISOString() }); put(k, lines); }
  drawChat(); draw();
}

/* ═══ THE .MYTH — the whole kingdom in one file he can hold (the Crown's own shape) ═══ */
const NEVER = new Set(['monomyth.focus.byok.v1', 'monomyth.byok.v1', 'monomyth.kingdom.pass', 'monomyth.focus.seeded.v1', 'monomyth.focus.gate.v1', 'monomyth.vault.v1', 'monomyth.focus.screen', 'monomyth.courier.v1', 'monomyth.focus.snapshot.v1']);
const stampNow = () => { const d = new Date(), p = n => String(n).padStart(2, '0'); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}`; };
async function backup(){
  if(!window.JSZip) throw new Error('the zip library did not load');
  const zip = new JSZip(), state = zip.folder('state');
  const keys = Object.keys(localStorage).filter(k => k.startsWith('monomyth.') && !NEVER.has(k)).sort();
  keys.forEach(k => state.file(k + '.json', localStorage.getItem(k) || ''));
  zip.file('kingdom.json', JSON.stringify({ v: 2, kind: 'myth', app: 'monomyth-sword', savedAt: new Date().toISOString(), keys, ua: navigator.userAgent }, null, 1));
  const L = get(LEDGER_KEY, []); zip.file('ledger.md', ['# THE PHONE LEDGER', ''].concat(L.map(e => `- ${e.at} · ${e.page} · ${e.kind}${e.word ? ' · ' + e.word : ''} — ${e.text}`)).join('\n'));
  const blob = await zip.generateAsync({ type: 'blob', mimeType: 'application/zip', compression: 'DEFLATE' });
  const file = new File([blob], `seeker-${stampNow()}.myth`, { type: 'application/zip' });
  if(navigator.canShare && navigator.canShare({ files: [file] })){ await navigator.share({ files: [file], title: file.name }); return 'shared'; }
  const a = document.createElement('a'); a.href = URL.createObjectURL(file); a.download = file.name; a.click(); return 'downloaded';
}
async function restore(file){
  if(!window.JSZip) throw new Error('the zip library did not load');
  const zip = await JSZip.loadAsync(file); let n = 0;
  for(const name of Object.keys(zip.files)){
    const m = /^state\/(monomyth\.[^/]+)\.json$/.exec(name); if(!m || NEVER.has(m[1])) continue;
    const v = await zip.files[name].async('string'); if(v) { localStorage.setItem(m[1], v); n++; }
  }
  return n;
}

/* ═══ wiring ═══ */
async function main(){
  await loadBook();
  open = get(OPEN_KEY, {}); struck = new Set(get(STRUCK_KEY, []));
  draw();
  $('orvbtn').addEventListener('click', () => { if(!BOOK) return; $('chat').hidden = false; drawChat(); $('chatin').focus(); });
  $('chatclose').addEventListener('click', () => { $('chat').hidden = true; });
  $('chatsend').addEventListener('click', say);
  $('chatin').addEventListener('keydown', e => { if(e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); say(); } });
  $('actbtn').addEventListener('click', () => { action = !action; drawChat(); });
  $('keysave').addEventListener('click', () => { const k = $('keyin').value.trim(); if(!k) return; const b = box(); b.apiKey = k; put(BYOK_KEY, b); $('keyin').value = ''; drawChat(); });
  $('backup').addEventListener('click', async () => { try { $('feetnote').textContent = 'the .myth ' + (await backup()); } catch(e){ $('feetnote').textContent = String(e.message || e); } });
  $('restorefile').addEventListener('change', async e => { const f = e.target.files[0]; if(!f) return; try { const n = await restore(f); $('feetnote').textContent = n + ' keys restored'; await loadBook(); open = get(OPEN_KEY, {}); struck = new Set(get(STRUCK_KEY, [])); draw(); } catch(err){ $('feetnote').textContent = String(err.message || err); } });
  $('shutAll').addEventListener('click', () => { open = {}; keep(); draw(); });
  try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', draw); } catch {}
}
main();
