// MONOMYTH FOCUS service worker — offline is a courtesy, never a blocker.
// Navigations are NETWORK-FIRST (a cache-first index silently serves stale code
// forever); hashed assets are cache-first, safely. seed.enc is network-first —
// a fixed name whose content is meant to change.
//
// UPDATES THAT LAND (2026-09-13): GitHub Pages stamps everything with
// `max-age=600` — the browser's own HTTP cache can hand back a ten-minute-old
// index.html even when THIS worker asks the network first. `cache: 'no-store'`
// on every navigation/NETWORK_FIRST_FILES fetch tells the browser to skip that
// layer entirely, so "network-first" actually reaches the network. CACHE bumps
// to v2 so activate's own cleanup sweeps the v1 shelf on the next visit.
const CACHE = "monomyth-focus-v2";
const NETWORK_FIRST_FILES = ["seed.enc"];

self.addEventListener("install", () => { self.skipWaiting(); });
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// THE UPDATE DOOR — Settings' UPDATE button (and every launch/visibility
// wake, from focus-main.tsx) asks the registration itself to check for a new
// worker; CLEAR is the hard-refresh's own scorched earth, wiping every named
// cache so nothing stale survives even a moment.
self.addEventListener("message", (e) => {
  const msg = e.data;
  if (!msg || typeof msg !== "object") return;
  if (msg.type === "UPDATE") {
    self.registration.update().catch(() => { /* fine — the wire tried */ });
  } else if (msg.type === "CLEAR") {
    e.waitUntil(caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k)))));
  }
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || !req.url.startsWith(self.location.origin)) return;
  const networkFirst = req.mode === "navigate" || NETWORK_FIRST_FILES.some((f) => req.url.endsWith(f));
  if (networkFirst) {
    e.respondWith(
      fetch(new Request(req, { cache: "no-store" })).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then((hit) => hit || caches.match(new URL("./", self.location).pathname)))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});
