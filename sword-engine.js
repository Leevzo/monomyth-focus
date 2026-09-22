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
