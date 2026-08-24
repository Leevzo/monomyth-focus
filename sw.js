// MONOMYTH FOCUS service worker — offline is a courtesy, never a blocker.
// Navigations are NETWORK-FIRST (a cache-first index silently serves stale code
// forever); hashed assets are cache-first, safely. seed.enc is network-first —
// a fixed name whose content is meant to change.
const CACHE = "monomyth-focus-v1";
const NETWORK_FIRST_FILES = ["seed.enc"];

self.addEventListener("install", () => { self.skipWaiting(); });
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || !req.url.startsWith(self.location.origin)) return;
  const networkFirst = req.mode === "navigate" || NETWORK_FIRST_FILES.some((f) => req.url.endsWith(f));
  if (networkFirst) {
    e.respondWith(
      fetch(req).then((res) => {
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
