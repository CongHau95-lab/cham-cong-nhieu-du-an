const V = 'ccda-75619f6c8f';
const SHELL = ['./', 'index.html', 'firebase-config.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const d = e.notification.data || {};
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
    const c = cs.find(x => 'focus' in x);
    if (c) { c.postMessage({ type: 'notif-click', pid: d.pid, ref: d.ref }); return c.focus(); }
    return self.clients.openWindow('./#notif=' + encodeURIComponent(JSON.stringify({ pid: d.pid, ref: d.ref })));
  }));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
});
