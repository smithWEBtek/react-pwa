console.warn('sw.js in public folder')

let cacheData = 'appV1'
this.addEventListener("install", (event) => {
  event.waitUntil()
  caches.open(cacheData).then((cache) => {
    cache.addAll([
      '/static/js/bundle.js',
      // '/static/js/main.chunk.js',
      // '/static/js/0.chunk.js',
      // '/index.html',
      // '/'
    ])
  })
})
