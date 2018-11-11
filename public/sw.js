const cacheNames = 'rmyNeighborhood-static-v3';



// Call the install event.
// Using .clone() to make a copy of the response and cache it.
// Because of this, the items are not cached here, see the Fetch event on line 36.

self.addEventListener('install', event => {
	console.log('SW: installed');
});


// Activate the event. caches.keys()

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('myNeighborhood-') &&
                 cacheName != cacheNames;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});


// Call the Fetch event |  caches.match()

self.addEventListener('fetch', event => {
	// console.log('SW: Fetching');
    event.respondWith(
		fetch(event.request)
			.then(res => {
			// Make a clone of response
			const resClone = res.clone();
			// Open cache
			caches
				.open(cacheNames)
				.then(cache => {
					// Add response to cache
					cache.put(event.request, resClone);
				});
			return res;
		}).catch(error => caches.match(event.request).then(res => res))
	);
});





