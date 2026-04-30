self.addEventListener('install', (e) => {
  console.log('PWA instalada correctamente');
});

self.addEventListener('fetch', (e) => {
  // Aquí es donde sucede la magia del modo offline (se puede expandir después)
  e.respondWith(fetch(e.request));
});