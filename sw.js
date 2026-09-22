// 2026-09-22 — the sword is the glass. The Crown's worker used to own this scope; this
// one exists only to release it: clear every cache, unregister, and let the network speak.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.map(k => caches.delete(k))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll({ type: 'window' }))
    .then(cs => cs.forEach(c => c.navigate(c.url)))
));
