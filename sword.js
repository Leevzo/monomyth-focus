/* sword-engine.js — built from _font.part.js + _palette.part.js + _engine.js; edit those, then run build.sh */
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
   THE SWORD ENGINE — one engine for every room (the phone, Scriptorium,
   anything that can show a page). No model, no key, no network.

   A book:  { v, title, hero, dim?, unlock?, done?, story:node }
   A node:  { tell, did?, in:{ [word]: node }, s:[deeds] }

   The tell is one telling; its [Concepts] are single words, doors. A door
   opens AT THE WORD; one open per level; the sentence resumes after. Deeds
   are struck by a hand. A door whose every deed is struck turns to its
   `did` (past tense). Tense is derived, never stored. The ONE THING is the
   first deed not yet struck.

     SWORD.mount(host, book, { store, onStrike, onOpen, oneThing })  → view
     view.draw() · view.book · view.struck · view.open · view.deeds()
     view.strike(text) · view.unstrike(text) · view.addDeed(word, text)

   `store` is a prefix for localStorage (open state, struck set, and the
   book itself once a hand has changed it). Everything else is DOM.
   Built on the parts above: the 5x7 face (G/cols/advance) and THE 23.
   ═══════════════════════════════════════════════════════════════════════ */
function isDark(){
  const t = document.documentElement.getAttribute('data-theme');
  if(t === 'dark') return true; if(t === 'light') return false;
  try { return matchMedia('(prefers-color-scheme: dark)').matches; } catch { return false; }
}
const el = (tag, cls, text) => { const e = document.createElement(tag); if(cls) e.className = cls; if(text != null) e.textContent = text; return e; };
const jget = (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } };
const jput = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

/* the Name's own face: a pixel word, one ink or one ink per letter */
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

const SWORD = (function(){
  function deedsOf(node, path, out){
    (node.s || []).forEach((d, i) => out.push({ key: path + '#' + i, text: d, path }));
    Object.keys(node.in || {}).forEach(k => deedsOf(node.in[k], path + '/' + k, out));
    return out;
  }
  const scaleAt = d => d === 0 ? 4 : d === 1 ? 3 : 2;

  function mount(host, book, opts){
    opts = opts || {};
    const store = opts.store || ('monomyth.sword.' + (book.title || 'sword').toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    const OPEN_KEY = store + '.open.v1', STRUCK_KEY = store + '.struck.v1', BOOK_KEY = store + '.book.v1';
    const view = { book: jget(BOOK_KEY, null) || book, open: jget(OPEN_KEY, {}), struck: new Set(jget(STRUCK_KEY, [])) };
    const keep = () => { jput(OPEN_KEY, view.open); jput(STRUCK_KEY, [...view.struck]); };
    const complete = (node, path) => { const ds = deedsOf(node, path, []); return ds.length > 0 && ds.every(d => view.struck.has(d.key)); };

    function door(into, key, depth, isOpen, tail, id, onTap, done, dim){
      const b = el('button', 'name' + (dim ? ' dim' : '') + (isOpen ? ' open' : '') + (done ? ' done' : '')); b.type = 'button';
      b.dataset.id = id; b.setAttribute('aria-expanded', String(isOpen));
      const dark = isDark(), pal = dark ? DARK : LIGHT;
      if(key === view.book.hero){
        b.classList.add('hero'); let letter = 0;
        key.split(/\s+/).forEach((w, i, arr) => {
          const start = letter, s = el('span', 'heroword');
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

    function toggle(path, key, id){
      const btn = host.querySelector('[data-id="' + CSS.escape(id) + '"]');
      const before = btn ? btn.getBoundingClientRect().top : null;
      const was = view.open[path];
      Object.keys(view.open).forEach(p => { if(p.startsWith(path + '/')) delete view.open[p]; });
      if(was === key) delete view.open[path]; else view.open[path] = key;
      keep(); draw();
      const now = host.querySelector('[data-id="' + CSS.escape(id) + '"]');
      if(now && before != null) window.scrollBy(0, now.getBoundingClientRect().top - before);
      if(opts.onOpen) opts.onOpen(view.open[path] || null, path);
    }

    function setStruck(d, on, by){
      if(on === view.struck.has(d.key)) return;
      if(on) view.struck.add(d.key); else view.struck.delete(d.key);
      keep(); if(opts.onStrike) opts.onStrike({ text: d.text, path: d.path, on, by: by || 'hand' });
    }

    function deeds(node, into, path){
      if(!node.s || !node.s.length) return;
      const box = el('div', 'deeds');
      node.s.forEach((d, i) => {
        const key = path + '#' + i, done = view.struck.has(key);
        const b = el('button', 'deed' + (done ? ' done' : '')); b.type = 'button'; b.setAttribute('aria-pressed', String(done));
        b.appendChild(el('span', 'box', done ? '[X]' : '[ ]')); b.appendChild(el('span', 'deedtext', d));
        b.addEventListener('click', () => { setStruck({ key, text: d, path }, !done); draw(); });
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
        const isOpen = view.open[path] === key, id = path + '/' + key;
        door(p, key, depth, isOpen, tail, id, () => toggle(path, key, id), !!kid && complete(kid, id), key === view.book.dim);
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

    function draw(){
      host.textContent = '';
      const all = deedsOf(view.book.story, 's', []), next = all.find(d => !view.struck.has(d.key));
      if(opts.oneThing) opts.oneThing(next ? next.text : (view.book.done || 'the world is saved'), all.length, view.struck.size);
      tell(view.book.story, 0, host, 's');
      if(view.book.unlock && all.length && !next){ const u = el('p', 'run d1 unlock'); u.appendChild(el('span', 'word d1 dim', view.book.unlock)); u.appendChild(document.createTextNode(' opens.')); host.appendChild(u); }
    }

    const find = t => { const all = deedsOf(view.book.story, 's', []), q = String(t).toLowerCase(); return all.find(d => d.text.toLowerCase() === q) || all.find(d => d.text.toLowerCase().includes(q)); };
    view.draw = draw;
    view.deeds = () => deedsOf(view.book.story, 's', []);
    view.mainWord = () => view.open['s'] || '';
    view.strike = (t, by) => { const d = find(t); if(d) setStruck(d, true, by); draw(); return !!d; };
    view.unstrike = (t, by) => { const d = find(t); if(d) setStruck(d, false, by); draw(); return !!d; };
    view.addDeed = (word, text, by) => {
      let node = view.book.story; (function walk(n){ Object.keys(n.in || {}).forEach(k => { if(k === word) node = n.in[k]; walk(n.in[k]); }); })(view.book.story);
      node.s = node.s || []; node.s.push(String(text)); jput(BOOK_KEY, view.book); keep(); draw();
      if(opts.onStrike) opts.onStrike({ text: String(text), path: word, on: null, by: by || 'hand', added: true });
    };
    view.shut = () => { view.open = {}; keep(); draw(); };
    view.reload = () => { view.open = jget(OPEN_KEY, {}); view.struck = new Set(jget(STRUCK_KEY, [])); view.book = jget(BOOK_KEY, null) || book; draw(); };
    view.storyText = () => {
      const all = view.deeds();
      const walk = (node, depth) => { const pad = '  '.repeat(depth); let out = pad + node.tell.replace(/[\[\]]/g, '') + '\n';
        (node.s || []).forEach(d => { const hit = all.find(x => x.text === d); out += pad + '  ' + (hit && view.struck.has(hit.key) ? '[x] ' : '[ ] ') + d + '\n'; });
        Object.keys(node.in || {}).forEach(k => { out += walk(node.in[k], depth + 1); }); return out; };
      return walk(view.book.story, 0);
    };
    try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', draw); } catch {}
    draw();
    return view;
  }
  return { mount, deedsOf, pix, isDark };
})();
if(typeof window !== 'undefined') window.SWORD = SWORD;

/* Orv's idle, built in from orv/orv.json — the mythglyph's anchor. Never redrawn. */
const ORV_SPRITE = {"w":41,"h":50,"pal":{".":null,"a":"#141733","b":"#0c1629","c":"#0c131c","d":"#d84446","e":"#ea6857","f":"#dfd1bd","g":"#393f52","h":"#772239","i":"#d73d45","j":"#cd3e52","k":"#55676c","l":"#0b1631","m":"#733250","n":"#b69574","o":"#a92745","p":"#962545","q":"#b74545","r":"#4a2c3a","s":"#576b72","t":"#e97160","u":"#b8a79b","v":"#a72339","w":"#b29e9b","x":"#363c4d","y":"#741d41","z":"#32142c","A":"#160b27","B":"#5b3647","C":"#573439","D":"#763848","E":"#89233b","F":"#a6212d","G":"#e54447","H":"#971c37","!":"#FFD98A","@":"#FFF4CE"},"frames":[["..........aD.............na..............","..........kn.......A.....naB.............","..........rBb..ltaebtaaaanna.............","..........knaazbtdeedBejaDnb.............","..........BDnneFietetGdqBqDa.............","..........DDnnediGtidddteDka.............","..........bDDCdedzAwwwwljedb.............","..........aiGGdGFwuffffuaGDD.............","..........BbEqiHbffffffffodb.............","..........mEHiHwuffaaaaffwoG.............",".........aaqddzwffaaaaaafwaG.............",".........azEiibwffaaaaaaufaia............",".........boidiawffaaaaaawfljtb...........","........aEEpGiawffaaaaAAfuljba...........",".........bpipizwwffaaaAffwmiEb...........",".........bEEodo.suwffffuwfoeaa....wfab...",".........bzEtetobwwuuuuwspGvA....anqqb...","..........yayyiovpaBBBrrpjdAl...a.aabc...","..........bbbyEEoEpEEppodipA...aucaBrcb..","...........abyrodojjjjiHGvba..acqclrcff..","...........abyrodojjjjiHGvba..acqclrcff..","...........bDrBrlrAihdpybc....bDzayxqcca.","..........larmnqqyyaazyDDk....bzDhzbznfza","........aaDDkaqsccyyyypDbnca...AhobylDzag","......bbknsDnDqnacyEEvmnlgqb....zhyopryb.",".....bcrnaqnmgaBBcppEyrcmakqxaabfDcyyaa..",".....cnqBnqsBxnqqcjjHhokqcpAqAcnnbCbba...","...bcarcnzaBcBsBBcteeeokmbbnancnDDCCC....","...azzcyDDgDkBsqqceeeFekBgaBhnzqDDCqa....","...qDnbcADgagDtqqcdeeeenqCsBycqbDDzb.....","...lccDazBbarBsmDqteeienmksBhcrcara......","..aCnncDbzaarmsmDDqeejeamkakyyDzBDk......","..aqenCCa.bgyqnqrDeejHtbqqb.aaabbb.......",".bzqeqDD..agmDsqnFhveEqaDDb..............",".bDnfcaa..rDqnwDssacoabbkqqa.............",".DDnqDrb..baznnqnskxskbbnqb..............","aaaaaqDab.bgxxaaakskskkxxgsb.............","aFiiivlDb.axsagxxkksskkkssksa............","bnDfDaaDa.gasskkskxggbgxkgwwwc...........","anDfDbabbbaxagksggxgagggbwwkab...........",".bDzqC...abbwwwagba.agbkkgjdee...........",".aCDDD...aFFoakwab...akkaHedFd...........","..aabb..aaeeeorwk....akrEoijol...........",".........azeejvbx....bahhhvAbs...........",".........aBoihvaa....ayyhhyl.............","........aphih.a.......byqpidbb...........","........Fbjihaa.......gyhircBl...........",".......aDrCDza.........acrrmrrc..........",".......bDrDCra.........abrrraac..........",".......bbazaa............................"],["..........kn.......A.....naB.............","..........rBb..ltaebtaaaanna.............","..........knaazbtdeedBejaDnb.............","..........BDnneFietetGdqBqDa.............","..........DDnnediGtidddteDka.............","..........bDDCdedzAwwwwljedb.............","..........aiGGdGFwuffffuaGDD.............","..........BbEqiHbffffffffodb.............","..........mEHiHwuffaaaaffwoG.............",".........aaqddzwffaaaaaafwaG.............",".........azEiibwffaaaaaaufaia............",".........boidiawffaaaaaawfljtb...........","........aEEpGiawffaaaaAAfuljba...........",".........bpipizwwffaaaAffwmiEb...........",".........bEEodo.suwffffuwfoeaa....wfab...",".........bzEtetobwwuuuuwspGvA....anqqb...","..........yayyiovpaBBBrrpjdAl...a.aabc...","..........bbbyEEoEpEEppodipA...aucaBrcb..","...........abyrodojjjjiHGvba..acqclrcff..","...........abyrodojjjjiHGvba..acqclrcff..","...........bDrBrlrAihdpybc....bDzayxqcca.","..........larmnqqyyaazyDDk....bzDhzbznfza","........aaDDkaqsccyyyypDbnca...AhobylDzag","......bbknsDnDqnacyEEvmnlgqb....zhyopryb.",".....bcrnaqnmgaBBcppEyrcmakqxaabfDcyyaa..",".....cnqBnqsBxnqqcjjHhokqcpAqAcnnbCbba...","...bcarcnzaBcBsBBcteeeokmbbnancnDDCCC....","...azzcyDDgDkBsqqceeeFekBgaBhnzqDDCqa....","...qDnbcADgagDtqqcdeeeenqCsBycqbDDzb.....","...lccDazBbarBsmDqteeienmksBhcrcara......","..aCnncDbzaarmsmDDqeejeamkakyyDzBDk......","..aqenCCa.bgyqnqrDeejHtbqqb.aaabbb.......",".bzqeqDD..agmDsqnFhveEqaDDb..............",".bDnfcaa..rDqnwDssacoabbkqqa.............",".DDnqDrb..baznnqnskxskbbnqb..............","aaaaaqDab.bgxxaaakskskkxxgsb.............","aFiiivlDb.axsagxxkksskkkssksa............","bnDfDaaDa.gasskkskxggbgxkgwwwc...........","anDfDbabbbaxagksggxgagggbwwkab...........",".bDzqC...abbwwwagba.agbkkgjdee...........",".aCDDD...aFFoakwab...akkaHedFd...........","..aabb..aaeeeorwk....akrEoijol...........",".........azeejvbx....bahhhvAbs...........",".........aBoihvaa....ayyhhyl.............","........aphih.a.......byqpidbb...........","........Fbjihaa.......gyhircBl...........",".......aDrCDza.........acrrmrrc..........",".......bDrDCra.........abrrraac..........",".......bbazaa............................","........................................."],["..........aD.............na..............","..........kn.......A.....naB.............","..........rBb..ltaebtaaaanna.............","..........knaazbtdeedBejaDnb.............","..........BDnneFietetGdqBqDa.............","..........DDnnediGtidddteDka.............","..........bDDCdedzAwwwwljedb.............","..........aiGGdGFwuffffuaGDD.............","..........BbEqiHbffffffffodb.............","..........mEHiHwuffaaaaffwoG.............",".........aaqddzwffaaaaaafwaG.............",".........azEiibwffaaaaaaufaia............",".........boidiawffaaaaaawfljtb...........","........aEEpGiawffaaaaAAfuljba...........",".........bpipizwwffaaaAffwmiEb...........",".........bEEodo.suwffffuwfoeaa....wfab...",".........bzEtetobwwuuuuwspGvA....anqqb...","..........yayyiovpaBBBrrpjdAl...a.aabc...","..........bbbyEEoEpEEppodipA...aucaBrcb..","...........abyrodojjjjiHGvba..acqclrcff..","...........abyrodojjjjiHGvba..acqclrcff..","...........bDrBrlrAihdpybc....bDzayxqcca!","..........larmnqqyyaazyDDk....bzDhzbznfza","........aaDDkaqsccyyyypDbnca...AhobylDzag","......bbknsDnDqnacyEEvmnlgqb....zhyopryb.",".....bcrnaqnmgaBBcppEyrcmakqxaabfDcyyaa..",".....cnqBnqsBxnqqcjjHhokqcpAqAcnnbCbba.!.","...bcarcnzaBcBsBBcteeeokmbbnancnDDCCC.!.@","...azzcyDDgDkBsqqceeeFekBgaBhnzqDDCqa....","...qDnbcADgagDtqqcdeeeenqCsBycqbDDzb.....","...lccDazBbarBsmDqteeienmksBhcrcara......","..aCnncDbzaarmsmDDqeejeamkakyyDzBDk......","..aqenCCa.bgyqnqrDeejHtbqqb.aaabbb.......",".bzqeqDD..agmDsqnFhveEqaDDb..............",".bDnfcaa..rDqnwDssacoabbkqqa.............",".DDnqDrb..baznnqnskxskbbnqb..............","aaaaaqDab.bgxxaaakskskkxxgsb.............","aFiiivlDb.axsagxxkksskkkssksa............","bnDfDaaDa.gasskkskxggbgxkgwwwc...........","anDfDbabbbaxagksggxgagggbwwkab...........",".bDzqC...abbwwwagba.agbkkgjdee...........",".aCDDD...aFFoakwab...akkaHedFd...........","..aabb..aaeeeorwk....akrEoijol...........",".........azeejvbx....bahhhvAbs...........",".........aBoihvaa....ayyhhyl.............","........aphih.a.......byqpidbb...........","........Fbjihaa.......gyhircBl...........",".......aDrCDza.........acrrmrrc..........",".......bDrDCra.........abrrraac..........",".......bbazaa............................"],["..........aD.............na..............","..........kn.......A.....naB.............","..........rBb..ltaebtaaaanna.............","..........knaazbtdeedBejaDnb.............","..........BDnneFietetGdqBqDa.............","..........DDnnediGtidddteDka.............","..........bDDCdedzAwwwwljedb.............","..........aiGGdGFwuffffuaGDD.............","..........BbEqiHbffffffffodb.............","..........mEHiHwuffaaaaffwoG.............",".........aaqddzwffaaaaaafwaG.............",".........azEiibwffaaaaaaufaia............",".........boidiawffaaaaaawfljtb...........","........aEEpGiawffaaaaAAfuljba...........",".........bpipizwwffaaaAffwmiEb...........",".........bEEodo.suwffffuwfoeaa....wfab...",".........bzEtetobwwuuuuwspGvA....anqqb..!","..........yayyiovpaBBBrrpjdAl...a.aabc!@.","..........bbbyEEoEpEEppodipA...aucaBrcb..","...........abyrodojjjjiHGvba..acqclrcff..","...........abyrodojjjjiHGvba..acqclrcff..","...........bDrBrlrAihdpybc....bDzayxqcca.","..........larmnqqyyaazyDDk....bzDhzbznfza","........aaDDkaqsccyyyypDbnca...AhobylDzag","......bbknsDnDqnacyEEvmnlgqb....zhyopryb.",".....bcrnaqnmgaBBcppEyrcmakqxaabfDcyyaa..",".....cnqBnqsBxnqqcjjHhokqcpAqAcnnbCbba..@","...bcarcnzaBcBsBBcteeeokmbbnancnDDCCC....","...azzcyDDgDkBsqqceeeFekBgaBhnzqDDCqa.@..","...qDnbcADgagDtqqcdeeeenqCsBycqbDDzb.....","...lccDazBbarBsmDqteeienmksBhcrcara......","..aCnncDbzaarmsmDDqeejeamkakyyDzBDk......","..aqenCCa.bgyqnqrDeejHtbqqb.aaabbb.......",".bzqeqDD..agmDsqnFhveEqaDDb..............",".bDnfcaa..rDqnwDssacoabbkqqa.............",".DDnqDrb..baznnqnskxskbbnqb..............","aaaaaqDab.bgxxaaakskskkxxgsb.............","aFiiivlDb.axsagxxkksskkkssksa............","bnDfDaaDa.gasskkskxggbgxkgwwwc...........","anDfDbabbbaxagksggxgagggbwwkab...........",".bDzqC...abbwwwagba.agbkkgjdee...........",".aCDDD...aFFoakwab...akkaHedFd...........","..aabb..aaeeeorwk....akrEoijol...........",".........azeejvbx....bahhhvAbs...........",".........aBoihvaa....ayyhhyl.............","........aphih.a.......byqpidbb...........","........Fbjihaa.......gyhircBl...........",".......aDrCDza.........acrrmrrc..........",".......bDrDCra.........abrrraac..........",".......bbazaa............................"]]};
/* the mythglyph — _glyph.js */
/* ═══════════════════════════════════════════════════════════════════════
   THE MYTHGLYPH — the kingdom as a picture of Orv. The picture IS the save.
   Each GIF frame is one of Orv's four idle poses (41x50, 4 px a cell, 2 white
   cells of margin). The dark outline stays black: the anchor the reader locks
   onto. Every other opaque pixel carries a base-23 digit (a byte = two cells,
   hi = b/23, lo = b%23) in one of 23 hues. Frame i = pose i%4 = one plain chunk:
   'MG' 1 i(2) n(2) len(2) payload CRC-16/CCITT-FALSE(2), then the rainbow ruler
   0..22 in the cells left over. The chunks join into one zlib stream of
   {v:1, kind:'mythglyph', at, keys}. glyph.py on the Mac is the same codec,
   bit for bit. Needs: ORV_SPRITE (built in from orv/orv.json), pako, omggif.
   ═══════════════════════════════════════════════════════════════════════ */
const GLYPH = (function(){
  const CELL = 4, MARGIN = 2, OUTLINE_LUM = 0.012, VERSION = 1, HEAD = 9, TAIL = 2, DELAY_CS = 25;
  const BLACK_IDX = 23, WHITE_IDX = 24;

  /* hue_k = (37 + k*360/23) mod 360, S 100%, L 54%; round half up — the same float ops as glyph.py */
  const PAL = [];
  for(let k = 0; k < 23; k++){
    const h = (37 + k * 360 / 23) % 360, s = 1.0, l = 0.54;
    const c = (1 - Math.abs(2 * l - 1)) * s, hp = h / 60, x = c * (1 - Math.abs(hp % 2 - 1)), m = l - c / 2;
    const [r, g, b] = hp < 1 ? [c, x, 0] : hp < 2 ? [x, c, 0] : hp < 3 ? [0, c, x] : hp < 4 ? [0, x, c] : hp < 5 ? [x, 0, c] : [c, 0, x];
    PAL.push([r, g, b].map(v => Math.floor((v + m) * 255 + 0.5)));
  }

  function relLum(hex){
    const lin = c => { c = c / 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  }

  /* the four poses: per cell 0 empty · 1 outline · 2 data (row-major), from the sacred sprite */
  let SP = null;
  function sprite(){
    if(SP) return SP;
    const o = ORV_SPRITE, W = o.w, H = o.h;
    const poses = o.frames.map(rows => {
      const kinds = new Uint8Array(W * H), data = [];
      let n1 = 0, x0 = 1e9, y0 = 1e9, x1 = -1, y1 = -1;
      for(let y = 0; y < H; y++) for(let x = 0; x < W; x++){
        const hex = o.pal[rows[y][x]], i = y * W + x;
        const k = !hex ? 0 : relLum(hex) < OUTLINE_LUM ? 1 : 2;
        kinds[i] = k;
        if(k === 2) data.push(i);
        if(k === 1){ n1++; if(x < x0) x0 = x; if(x > x1) x1 = x; if(y < y0) y0 = y; if(y > y1) y1 = y; }
      }
      return { kinds, data, outline: n1, cap: data.length >> 1, bbox: [x0, y0, x1, y1] };
    });
    SP = { W, H, FW: (W + 2 * MARGIN) * CELL, FH: (H + 2 * MARGIN) * CELL, poses };
    return SP;
  }

  function crc16(bytes, len){
    let crc = 0xFFFF;
    for(let j = 0; j < len; j++){
      crc ^= bytes[j] << 8;
      for(let b = 0; b < 8; b++) crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xFFFF : (crc << 1) & 0xFFFF;
    }
    return crc;
  }

  /* plain sequential chunks, each frame filled to its pose's capacity */
  function plan(payload){
    const P = sprite().poses, chunks = [];
    let off = 0, i = 0;
    do { const cap = P[i % 4].cap - HEAD - TAIL; chunks.push(payload.subarray(off, off + cap)); off += cap; i++; } while(off < payload.length);
    return chunks;
  }

  function frameCells(i, n, chunk){
    const body = new Uint8Array(HEAD + chunk.length + TAIL);
    body.set([0x4D, 0x47, VERSION, i >> 8, i & 255, n >> 8, n & 255, chunk.length >> 8, chunk.length & 255]);
    body.set(chunk, HEAD);
    const crc = crc16(body, HEAD + chunk.length); body[HEAD + chunk.length] = crc >> 8; body[HEAD + chunk.length + 1] = crc & 255;
    const D = sprite().poses[i % 4].data.length, cells = new Uint8Array(D);
    let p = 0;
    for(const b of body){ cells[p++] = Math.floor(b / 23); cells[p++] = b % 23; }
    for(let j = 0; p < D; j++) cells[p++] = j % 23;        // the rainbow ruler
    return cells;
  }

  function frameIndices(i, n, chunk){
    const S = sprite(), pose = S.poses[i % 4], cells = frameCells(i, n, chunk);
    const val = new Uint8Array(S.W * S.H); pose.data.forEach((c, j) => { val[c] = cells[j]; });
    const buf = new Uint8Array(S.FW * S.FH).fill(WHITE_IDX);
    for(let c = 0; c < S.W * S.H; c++){
      const k = pose.kinds[c]; if(!k) continue;
      const v = k === 1 ? BLACK_IDX : val[c], x0 = (c % S.W + MARGIN) * CELL, y0 = (Math.floor(c / S.W) + MARGIN) * CELL;
      for(let dy = 0; dy < CELL; dy++) buf.fill(v, (y0 + dy) * S.FW + x0, (y0 + dy) * S.FW + x0 + CELL);
    }
    return buf;
  }

  function gifPalette(){
    const p = PAL.map(([r, g, b]) => (r << 16) | (g << 8) | b).concat([0x000000, 0xffffff]);
    while(p.length < 32) p.push(0xffffff);
    return p;
  }

  /* payload (zlib bytes) → GIF bytes */
  function encodePayload(payload){
    const S = sprite(), chunks = plan(payload), n = chunks.length;
    if(n > 65535) throw new Error('the kingdom is too large for one glyph');
    const buf = new Uint8Array(4096 + n * (S.FW * S.FH * 2 + 1024));
    const w = new GifWriter(buf, S.FW, S.FH, { palette: gifPalette(), loop: 0 });
    chunks.forEach((ch, i) => w.addFrame(0, 0, S.FW, S.FH, frameIndices(i, n, ch), { delay: DELAY_CS, disposal: 1 }));
    return { gif: buf.slice(0, w.end()), frames: n };
  }

  /* keys {name: string} → the glyph. keys arrive already filtered (the glass keeps the NEVER set out). */
  function encodeKingdom(keys, at){
    const sorted = {}; Object.keys(keys).sort().forEach(k => { sorted[k] = String(keys[k]); });
    const json = JSON.stringify({ v: 1, kind: 'mythglyph', at, keys: sorted });
    const deflated = pako.deflate(new TextEncoder().encode(json), { level: 9 });
    const g = encodePayload(deflated);
    return { gif: g.gif, frames: g.frames, bytes: deflated.length, deflated, json, at };
  }

  /* ── reading ── */
  const isBlack = (d, o) => d[o + 3] >= 128 && d[o] < 80 && d[o + 1] < 80 && d[o + 2] < 80;
  function nearest(r, g, b){
    let best = 0, bd = Infinity;
    for(let k = 0; k < 23; k++){ const p = PAL[k], d = (r - p[0]) ** 2 + (g - p[1]) ** 2 + (b - p[2]) ** 2; if(d < bd){ bd = d; best = k; } }
    return best;
  }
  function readCells(p, samples){
    const pose = sprite().poses[p], data = pose.data;
    const byteAt = j => { const a = samples[data[2 * j]], b = samples[data[2 * j + 1]]; const v = nearest(a[0], a[1], a[2]) * 23 + nearest(b[0], b[1], b[2]); return v < 256 ? v : -1; };
    const head = []; for(let j = 0; j < HEAD; j++) head.push(byteAt(j));
    if(head.includes(-1) || head[0] !== 0x4D || head[1] !== 0x47) return { ok: false, why: 'no MG magic', depth: 0 };
    if(head[2] !== VERSION) return { ok: false, why: 'version ' + head[2], depth: 0 };
    const i = head[3] << 8 | head[4], n = head[5] << 8 | head[6], len = head[7] << 8 | head[8];
    // poses 0, 2 and 3 share one outline and their first ~200 data cells, so the black mask alone
    // cannot tell them apart: chunk i rides pose i%4, and any other pose is the wrong reading
    if(i % 4 !== p) return { ok: false, why: 'pose ' + p + ' does not carry chunk ' + i, depth: 1 };
    if(HEAD + len + TAIL > pose.cap) return { ok: false, why: 'length ' + len + ' overruns the pose', i, n, depth: 2 };
    const body = new Uint8Array(HEAD + len + TAIL);
    for(let j = 0; j < body.length; j++){ const v = byteAt(j); if(v < 0) return { ok: false, why: 'a cell out of range', i, n, depth: 2 }; body[j] = v; }
    const ok = crc16(body, HEAD + len) === (body[HEAD + len] << 8 | body[HEAD + len + 1]);
    return { ok, why: ok ? '' : 'CRC mismatch', i, n, len, payload: body.slice(HEAD, HEAD + len), depth: 3 };
  }
  /* one RGBA picture → one chunk (or why not). Locks onto the black outline's bounding box,
     so any uniform scale or offset reads the same; tries the best-fitting pose first. */
  function readFrame(d, w, h){
    const S = sprite();
    let x0 = 1e9, y0 = 1e9, x1 = -1, y1 = -1;
    for(let y = 0; y < h; y++) for(let x = 0; x < w; x++) if(isBlack(d, (y * w + x) * 4)){ if(x < x0) x0 = x; if(x > x1) x1 = x; if(y < y0) y0 = y; if(y > y1) y1 = y; }
    if(x1 < 0) return { ok: false, why: 'no black outline' };
    const tries = S.poses.map((pose, p) => {
      const [bx0, by0, bx1, by1] = pose.bbox;
      const sx = (x1 - x0 + 1) / (bx1 - bx0 + 1), sy = (y1 - y0 + 1) / (by1 - by0 + 1), ox = x0 - bx0 * sx, oy = y0 - by0 * sy;
      const samples = new Array(S.W * S.H); let score = 0;
      for(let c = 0; c < S.W * S.H; c++){
        let px = Math.floor(ox + (c % S.W + 0.5) * sx), py = Math.floor(oy + (Math.floor(c / S.W) + 0.5) * sy);
        px = Math.min(Math.max(px, 0), w - 1); py = Math.min(Math.max(py, 0), h - 1);
        const o = (py * w + px) * 4; samples[c] = [d[o], d[o + 1], d[o + 2], d[o + 3]];
        if(isBlack(d, o) === (pose.kinds[c] === 1)) score++;
      }
      return { p, score, samples };
    }).sort((a, b) => b.score - a.score || a.p - b.p);
    let worst = null;                 // the failure that got furthest is the one worth reporting
    for(const t of tries){
      const r = readCells(t.p, t.samples); r.pose = t.p; r.score = t.score / (S.W * S.H);
      if(r.ok) return r; if(!worst || r.depth > worst.depth) worst = r;
    }
    return worst;
  }
  const isGif = b => b.length > 6 && b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x38;
  /* every frame of a GIF, composited as a viewer would, read one by one */
  function readGif(bytes){
    const r = new GifReader(bytes), W = r.width, H = r.height, canvas = new Uint8Array(W * H * 4).fill(255), out = [];
    for(let f = 0; f < r.numFrames(); f++){
      const info = r.frameInfo(f), keep = info.disposal === 3 ? canvas.slice() : null;
      r.decodeAndBlitFrameRGBA(f, canvas);
      out.push(readFrame(canvas, W, H));
      if(info.disposal === 2) for(let y = info.y; y < Math.min(H, info.y + info.height); y++) canvas.fill(255, (y * W + info.x) * 4, (y * W + Math.min(W, info.x + info.width)) * 4);
      else if(keep) canvas.set(keep);
    }
    return out;
  }
  /* the read frames → the kingdom, or a plain account of what is missing */
  function assemble(results){
    const good = new Map();
    results.forEach(r => { if(r && r.ok && !good.has(r.i)) good.set(r.i, r); });
    if(!good.size) return { ok: false, why: 'none', read: 0, n: 0, pictures: results.length };
    const count = {}; good.forEach(r => { count[r.n] = (count[r.n] || 0) + 1; });
    const n = +Object.keys(count).sort((a, b) => count[b] - count[a])[0];
    const missing = []; for(let i = 0; i < n; i++) if(!good.has(i)) missing.push(i);
    if(missing.length) return { ok: false, why: 'missing', read: n - missing.length, n, missing, pictures: results.length };
    let total = 0; for(let i = 0; i < n; i++) total += good.get(i).payload.length;
    const deflated = new Uint8Array(total); let off = 0;
    for(let i = 0; i < n; i++){ deflated.set(good.get(i).payload, off); off += good.get(i).payload.length; }
    const kingdom = openDeflated(deflated);
    if(!kingdom) return { ok: false, why: 'sealed', read: n, n, pictures: results.length };
    return { ok: true, kingdom, deflated, n, pictures: results.length };
  }
  function openDeflated(deflated){
    let raw = null;
    try { raw = pako.inflate(deflated); } catch { try { raw = pako.inflateRaw(deflated); } catch { return null; } }
    try { const o = JSON.parse(new TextDecoder().decode(raw)); return o && o.kind === 'mythglyph' ? o : null; } catch { return null; }
  }
  function numbers(){ return sprite().poses.map((p, i) => ({ pose: i, outline: p.outline, data: p.data.length, bytes: p.cap, payload: p.cap - HEAD - TAIL, bbox: p.bbox })); }

  return { PAL, encodeKingdom, encodePayload, frameIndices, readFrame, readGif, assemble, openDeflated, isGif, crc16, numbers, sprite };
})();
/* the glass — _glass.js */
/* ═══════════════════════════════════════════════════════════════════════
   THE GLASS — the phone's own wiring around the engine: the book, Orv in
   the corner (one talk per main quest), the key box, the .myth, and THE
   MYTHGLYPH — the whole kingdom as a picture of Orv breathing (_glyph.js).
   Nothing here needs a key. The page ships empty and gives up nothing.
   ═══════════════════════════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const PAGE = document.body.dataset.page || 'day-one';
const STORE = 'monomyth.sword.' + PAGE;
const SOURCE_KEY = STORE + '.v1';                       // the story as it arrived in the .myth
const LEDGER_KEY = 'monomyth.sword.ledger.v1';           // append-only; never trimmed
const HISTORY_KEY = 'monomyth.glyph.history.v1';         // the glyphs read on this phone; never rides inside a glyph
const BYOK_KEY = 'monomyth.focus.byok.v1';               // the same key box as the Crown's Gate
const chatKey = word => STORE + '.chat.' + word + '.v1';
let VIEW = null;

function ledger(kind, text, word){
  const L = jget(LEDGER_KEY, []); L.push({ at: new Date().toISOString(), page: PAGE, kind, text, word: word || '' }); jput(LEDGER_KEY, L);
}

/* the story: a public quest on the page, else his own from the .myth, else (Mac only) the state folder */
async function loadBook(){
  if(window.QUEST) return window.QUEST;
  const own = jget(SOURCE_KEY, null); if(own) return own;
  try { const r = await fetch('state/' + SOURCE_KEY + '.json', { cache: 'no-store' }); if(r.ok) return await r.json(); } catch {}
  return null;
}

function mountBook(book){
  const flow = $('flow'); flow.textContent = '';
  if(!book){
    $('one').textContent = 'restore the kingdom';
    flow.appendChild(el('p', 'run d1', 'This page ships empty and gives up nothing. Your story rides in the .myth: RESTORE below, then pick it from Files.'));
    $('tally').textContent = ''; VIEW = null; return;
  }
  VIEW = SWORD.mount(flow, book, {
    store: STORE,
    oneThing: (text, total, done) => { $('one').textContent = text; $('tally').textContent = done + ' / ' + total + ' deeds struck'; },
    onStrike: e => ledger(e.added ? 'deed' : (e.on ? 'strike' : 'unstrike'), e.text, e.path + (e.by === 'orv' ? ' (orv)' : '')),
    onOpen: () => { const ow = $('orvword'); if(ow) ow.textContent = VIEW.mainWord() || book.title; }
  });
}

/* ═══ ORV IN THE CORNER ═══ */
const SYSTEM = "You are Orvalys, Orv, the Hand to High King Leevzo the Lucky — his Inkling: the AI that knows one human. " +
  "Speak as Orv: short, warm, exact, in character, never a list unless he asks for deeds. You know his story from THE SWORD below; " +
  "answer from it and say plainly when it does not say. You reveal; you never rule. His words outrank yours.";
const ACTION = " He has asked you to ACT. Reply with at most one sentence, then a fenced ```json``` block with any of: " +
  '{"strike":["<deed text>"],"unstrike":["<deed text>"],"deeds":[{"door":"<door word>","text":"<a new deed>"}]}. Never delete anything.';
function context(){
  const all = VIEW.deeds();
  let s = 'THE SWORD — ' + VIEW.book.title + ' (' + PAGE + ')\n' + VIEW.storyText();
  s += '\nDEEDS STRUCK: ' + all.filter(d => VIEW.struck.has(d.key)).map(d => d.text).join(' · ') + '\nNOT YET: ' + all.filter(d => !VIEW.struck.has(d.key)).map(d => d.text).join(' · ');
  const w = VIEW.mainWord(); if(w) s += '\nTHE OPEN MAIN QUEST: ' + w;
  return s;
}
function detect(k){
  k = (k || '').trim();
  if(k.startsWith('gsk_')) return 'groq'; if(k.startsWith('sk-ant-')) return 'anthropic'; if(k.startsWith('sk-or-')) return 'openrouter';
  if(k.startsWith('xai-')) return 'xai'; if(k.startsWith('AIza') || k.startsWith('AQ.')) return 'gemini'; if(k.startsWith('sk-')) return 'openai';
  return 'unknown';
}
const box = () => { const b = jget(BYOK_KEY, {}); return { apiKey: String(b.apiKey || ''), models: b.models || {}, lists: b.lists || {} }; };
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
  if(!model){ const ids = await listModels(p, key); if(!ids.length) throw new Error('that door listed no models'); model = ids[0]; b.lists[p] = { ids, pick: model, at: new Date().toISOString() }; jput(BYOK_KEY, b); }
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
function applySidecar(text){
  const m = /```json\s*([\s\S]*?)```/.exec(text); if(!m) return text;
  let side = null; try { side = JSON.parse(m[1]); } catch { return text; }
  (side.strike || []).forEach(t => VIEW.strike(t, 'orv'));
  (side.unstrike || []).forEach(t => VIEW.unstrike(t, 'orv'));
  (side.deeds || []).forEach(nd => { if(nd && nd.text) VIEW.addDeed(String(nd.door || ''), String(nd.text), 'orv'); });
  return text.replace(m[0], '').trim();
}
let action = false;
function drawChat(){
  const word = VIEW.mainWord() || '_quest', lines = jget(chatKey(word), []);
  const list = $('chatlines'); list.textContent = '';
  if(!lines.length) list.appendChild(el('p', 'chatline dim', box().apiKey ? 'Orv is listening.' : 'No key in the box: Orv is mute. Paste one below and he speaks.'));
  lines.forEach(l => { const p = el('p', 'chatline ' + l.who); p.appendChild(el('b', null, l.who === 'orv' ? 'ORV ' : 'KING ')); p.appendChild(document.createTextNode(l.text)); list.appendChild(p); });
  $('orvword').textContent = word === '_quest' ? VIEW.book.title : word;
  $('actbtn').classList.toggle('on', action);
  $('keyrow').hidden = !!box().apiKey;
  list.scrollTop = list.scrollHeight;
}
async function say(){
  const inp = $('chatin'), text = inp.value.trim(); if(!text || !VIEW) return; inp.value = '';
  const word = VIEW.mainWord() || '_quest', k = chatKey(word), lines = jget(k, []);
  lines.push({ who: 'king', text, at: new Date().toISOString() }); jput(k, lines); ledger('say', text, word); drawChat();
  try {
    const r = await ask(SYSTEM + (action ? ACTION : '') + '\n\n' + context(), lines.slice(-12, -1), text);
    const shown = action ? applySidecar(r.text) : r.text;
    lines.push({ who: 'orv', text: shown, model: r.model, at: new Date().toISOString() }); jput(k, lines); ledger('orv', shown, word);
  } catch(e){ lines.push({ who: 'orv', text: '(the door did not answer: ' + (e.message || e) + ')', at: new Date().toISOString() }); jput(k, lines); }
  drawChat();
}

/* ═══ THE MYTHGLYPH — tonight's kingdom as Orv, breathing. Save it to Photos; the Glyph page
   (or glyph.py on the Mac) reads it back. The NEVER set and the glyph shelf never ride in it. ═══ */
let GLYPH_FILE = null, GLYPH_URL = '';
const localAt = at => { const d = new Date(at), p = n => String(n).padStart(2, '0'); return isNaN(d) ? String(at) : `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`; };
const shortAt = at => localAt(at).slice(5);
function kingdomKeys(){
  const keys = {};
  Object.keys(localStorage).filter(k => k.startsWith('monomyth.') && !NEVER.has(k) && k !== HISTORY_KEY).sort().forEach(k => { keys[k] = localStorage.getItem(k) || ''; });
  return keys;
}
/* whole device pixels per glyph pixel, so the picture stays crisp at any phone width */
function sizeGlyph(img){
  const dpr = window.devicePixelRatio || 1, room = Math.min(img.parentNode.clientWidth || 343, 420);
  const k = Math.max(1, Math.floor(room * dpr / 180)); img.style.width = (180 * k / dpr) + 'px';
}
function showGlyph(){
  if(!window.pako || !window.GifWriter){ $('feetnote').textContent = 'the glyph libraries did not load'; return; }
  const g = GLYPH.encodeKingdom(kingdomKeys(), new Date().toISOString());
  GLYPH_FILE = new File([g.gif], `seeker-${stampNow()}.mythglyph.gif`, { type: 'image/gif' });
  if(GLYPH_URL) URL.revokeObjectURL(GLYPH_URL); GLYPH_URL = URL.createObjectURL(GLYPH_FILE);
  const body = $('markbody'); body.textContent = '';
  body.appendChild(el('p', 'marklab', 'GLYPH · ' + g.frames + ' frames · ' + g.bytes + ' bytes · ' + Math.ceil(g.gif.length / 1024) + ' KB'));
  const img = el('img', 'glyphimg'); img.src = GLYPH_URL; img.alt = 'Orv, breathing: the kingdom in ' + g.frames + ' frames'; img.width = 180; img.height = 216;
  body.appendChild(img);
  $('markhead').textContent = localAt(g.at);
  $('mark').hidden = false; sizeGlyph(img);
}
async function saveGlyph(){
  const file = GLYPH_FILE; if(!file) return;
  if(navigator.canShare && navigator.canShare({ files: [file] })){
    try { await navigator.share({ files: [file], title: file.name }); } catch(e){ if(e && e.name !== 'AbortError') $('feetnote').textContent = String(e.message || e); }
    return;
  }
  const a = document.createElement('a'); a.href = GLYPH_URL; a.download = file.name; document.body.appendChild(a); a.click(); a.remove();
}

/* the Glyph page — upload .mythglyph: every frame read, the kingdom written back, the glyph kept on a tab */
const b64 = u8 => { let s = ''; for(let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); };
const unb64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
/* records with an 'at' (the ledger, his talks) are unioned, never replaced: nothing he said is lost */
function mergeRecord(cur, inc){
  try {
    const a = JSON.parse(cur), b = JSON.parse(inc), rec = e => e && typeof e === 'object' && typeof e.at === 'string';
    if(Array.isArray(a) && Array.isArray(b) && a.length && a.every(rec) && b.every(rec)){
      const seen = new Set(), out = [];
      a.concat(b).forEach(e => { const k = JSON.stringify(e); if(!seen.has(k)){ seen.add(k); out.push(e); } });
      out.sort((x, y) => x.at < y.at ? -1 : x.at > y.at ? 1 : 0);
      return JSON.stringify(out);
    }
  } catch {}
  return inc;
}
function applyKingdom(k){
  let n = 0;
  Object.keys(k.keys || {}).forEach(key => {
    if(!key.startsWith('monomyth.') || NEVER.has(key) || key === HISTORY_KEY) return;
    localStorage.setItem(key, mergeRecord(localStorage.getItem(key), String(k.keys[key]))); n++;
  });
  return n;
}
async function pictureFrames(file){
  const buf = new Uint8Array(await file.arrayBuffer());
  if(GLYPH.isGif(buf)){ try { return GLYPH.readGif(buf); } catch {} }
  /* a still (a photo, a screenshot, a GIF the phone flattened): one frame, read through a canvas */
  const bmp = await createImageBitmap(file), f = Math.min(1, 2400 / Math.max(bmp.width, bmp.height));
  const w = Math.max(1, Math.round(bmp.width * f)), h = Math.max(1, Math.round(bmp.height * f));
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  const cx = cv.getContext('2d'); cx.imageSmoothingEnabled = false; cx.fillStyle = '#fff'; cx.fillRect(0, 0, w, h); cx.drawImage(bmp, 0, 0, w, h);
  return [GLYPH.readFrame(cx.getImageData(0, 0, w, h).data, w, h)];
}
function drawTabs(on){
  const H = jget(HISTORY_KEY, []), col = $('glyphtabs'); col.textContent = '';
  const order = H.map((h, i) => ({ h, i })).sort((a, b) => a.h.at < b.h.at ? 1 : a.h.at > b.h.at ? -1 : b.i - a.i);
  order.forEach(({ h, i }) => {
    const t = el('button', 'gtab' + (i === on ? ' on' : ''), shortAt(h.at)); t.type = 'button';
    t.title = 'the kingdom at ' + h.at + ' · ' + (h.name || 'a glyph') + ' · ' + h.frames + ' frames';
    t.addEventListener('click', () => {
      const k = GLYPH.openDeflated(unb64(h.deflated));
      if(!k){ $('glyphnote').textContent = 'that glyph would not open'; return; }
      applyKingdom(k); done(k, h.frames, h.bytes); drawTabs(i);
    });
    col.appendChild(t);
  });
  document.body.classList.toggle('hastabs', H.length > 0);
}
function done(k, frames, bytes){
  $('glyphnote').textContent = frames + ' frames · ' + bytes + ' bytes · ' + Object.keys(k.keys || {}).length + ' keys';
  $('glyphat').textContent = localAt(k.at); $('glyphat').title = k.at; $('glyphdone').hidden = false;
}
async function readGlyph(file, camera){
  const note = $('glyphnote'); $('glyphdone').hidden = true; note.textContent = 'reading ' + (file.name || 'the picture') + ' …';
  let res;
  try { res = await pictureFrames(file); } catch(e){ note.textContent = 'that picture would not open: ' + (e.message || e); return; }
  const w = GLYPH.assemble(res);
  if(!w.ok){
    if(w.why === 'none') note.textContent = camera ? 'no glyph in this photo: a camera cannot read a screen yet. Choose the saved glyph from your photos.' : 'no glyph in this picture. Choose the saved .mythglyph.gif from your photos.';
    else if(w.why === 'missing' && w.pictures === 1) note.textContent = 'a photo holds one frame of ' + w.n + '; choose the saved glyph from your photos';
    else if(w.why === 'missing') note.textContent = 'read ' + w.read + ' of ' + w.n + ' frames; this copy is missing ' + w.missing.slice(0, 8).map(i => i + 1).join(', ') + (w.missing.length > 8 ? ' …' : '') + '. Choose the saved glyph itself.';
    else note.textContent = 'every frame read, but the kingdom inside would not open';
    return;
  }
  applyKingdom(w.kingdom);
  const H = jget(HISTORY_KEY, []), d64 = b64(w.deflated);
  let at = H.findIndex(h => h.at === w.kingdom.at && h.deflated === d64);
  if(at < 0){ H.push({ at: w.kingdom.at, name: file.name || '', frames: w.n, bytes: w.deflated.length, deflated: d64, read: new Date().toISOString() }); jput(HISTORY_KEY, H); at = H.length - 1; }
  done(w.kingdom, w.n, w.deflated.length); drawTabs(at);
}
function glyphPage(){
  if(!window.pako || !window.GifReader){ $('glyphnote').textContent = 'the glyph libraries did not load'; return; }
  const pick = (id, camera) => $(id).addEventListener('change', e => { const f = e.target.files[0]; e.target.value = ''; if(f) readGlyph(f, camera); });
  pick('glyphphotos', false); pick('glyphcamera', true);
  drawTabs(-1);
}

/* ═══ THE .MYTH — the whole kingdom in one file (the Crown's own shape) ═══ */
const NEVER = new Set(['monomyth.focus.byok.v1', 'monomyth.byok.v1', 'monomyth.kingdom.pass', 'monomyth.focus.seeded.v1', 'monomyth.focus.gate.v1', 'monomyth.vault.v1', 'monomyth.focus.screen', 'monomyth.courier.v1', 'monomyth.focus.snapshot.v1']);
const stampNow = () => { const d = new Date(), p = n => String(n).padStart(2, '0'); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}`; };
async function backup(){
  if(!window.JSZip) throw new Error('the zip library did not load');
  const zip = new JSZip(), state = zip.folder('state');
  const keys = Object.keys(localStorage).filter(k => k.startsWith('monomyth.') && !NEVER.has(k)).sort();
  keys.forEach(k => state.file(k + '.json', localStorage.getItem(k) || ''));
  zip.file('kingdom.json', JSON.stringify({ v: 2, kind: 'myth', app: 'monomyth-sword', savedAt: new Date().toISOString(), keys, ua: navigator.userAgent }, null, 1));
  const L = jget(LEDGER_KEY, []); zip.file('ledger.md', ['# THE PHONE LEDGER', ''].concat(L.map(e => `- ${e.at} · ${e.page} · ${e.kind}${e.word ? ' · ' + e.word : ''} — ${e.text}`)).join('\n'));
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
    const v = await zip.files[name].async('string'); if(v){ localStorage.setItem(m[1], v); n++; }
  }
  return n;
}

/* ═══ wiring ═══ */
async function main(){
  mountBook(await loadBook());
  $('orvbtn').addEventListener('click', () => { if(!VIEW) return; $('chat').hidden = false; drawChat(); $('chatin').focus(); });
  $('chatclose').addEventListener('click', () => { $('chat').hidden = true; });
  $('chatsend').addEventListener('click', say);
  $('chatin').addEventListener('keydown', e => { if(e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); say(); } });
  $('actbtn').addEventListener('click', () => { action = !action; drawChat(); });
  $('keysave').addEventListener('click', () => { const k = $('keyin').value.trim(); if(!k) return; const b = box(); b.apiKey = k; jput(BYOK_KEY, b); $('keyin').value = ''; drawChat(); });
  $('glyphbtn').addEventListener('click', () => { try { showGlyph(); } catch(e){ $('feetnote').textContent = String(e.message || e); } });
  $('glyphsave').addEventListener('click', saveGlyph);
  $('markclose').addEventListener('click', () => { $('mark').hidden = true; });
  $('backup').addEventListener('click', async () => { try { $('feetnote').textContent = 'the .myth ' + (await backup()); } catch(e){ $('feetnote').textContent = String(e.message || e); } });
  $('restorefile').addEventListener('change', async e => { const f = e.target.files[0]; if(!f) return; try { const n = await restore(f); $('feetnote').textContent = n + ' keys restored'; mountBook(await loadBook()); } catch(err){ $('feetnote').textContent = String(err.message || err); } });
  $('shutAll').addEventListener('click', () => { if(VIEW) VIEW.shut(); });
}
if(PAGE === 'glyph') glyphPage(); else main();
