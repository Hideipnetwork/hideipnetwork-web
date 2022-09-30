importScripts('./uv/uv.sw.js');

const sw = new UVServiceWorker();
const params = new URLSearchParams(location.search);

if (params.has('cros')) {
    sw.on('request', event => {
        event.data.headers['user-agent'] = 'Mozilla/5.0 (X11; CrOS x86_64 14588.98.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.59 Safari/537.36'
    });
};
    
self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);