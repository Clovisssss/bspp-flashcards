const V='bspp-v1';
const FILES=['./','index.html','style.css','app.js','data.js','manifest.webmanifest',...['fpt','epa','bea','vsav','vsr','ar','pc','vtu','nrbc','nautique'].map(n=>`images/engin-${n}.svg`),'images/organigramme.svg','images/zone-schema.svg','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
