const CACHE_EL = [
  "./",
  "https://unpkg.com/react@17/umd/react.production.min.js",
  "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js",
  "./styles.css",
  "./components/Contador.js",
  "./index.js"
];

const CACHE_NAME = "v1_micache";

/*
  NOTA: NO PONER EL LINK 0.0.0.0:8000, el service worker no trabaja
*/

//Instalación del service Worker
self.addEventListener("install", (e) => {
  
  e.waitUntil(
    //instalación del service Worker
    caches.open(CACHE_NAME).then((c) => {
      c.addAll(CACHE_EL)
        .then(() => self.skipWaiting())
        .catch(err => console.log(err));
    })
  )
});

//Activación del service Worker
self.addEventListener("activate", (e) => {

  const my_cache = [CACHE_NAME];

  e.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(
        names.map((cacheName) => {
          return my_cache.indexOf(cacheName) === -1 && caches.delete(cacheName);
        })
      );
    })
    .then(() => self.clients.claim())
  )
});

//Buscar versiones nuevas de los archivos
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request)
    .then((res) => {
      if (res) {
        return res;
      }
      return fetch(e.request)
    })
  );
});