'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ac3b1f17d91f07d74c262d5fede3dc87",
"assets/AssetManifest.bin.json": "beca2dada92637f2f77ec3aa8957eb7f",
"assets/AssetManifest.json": "c51a2cc8654f91d43709b339b3dcc439",
"assets/assets/favicon/10wallpaper.com.png": "86c50b5dd245d92f3fc546eecb0c221a",
"assets/assets/favicon/ali.gitcafe.ink.png": "3b75997ceb9344e15f2c68db6577c9f9",
"assets/assets/favicon/alphacoders.com.png": "a93b3334c3bf918e81fe13c97eec8c0f",
"assets/assets/favicon/bz.zzzmh.cn.png": "cbebd5846a87ea8a56ea857bca8390ee",
"assets/assets/favicon/ddys.info.png": "5d0e3e0fac3f15d45362b6bf58225195",
"assets/assets/favicon/default.png": "151fa72755dd7d4b4696797280b407c1",
"assets/assets/favicon/gaze.run.png": "f475defdb9cf35ac48015733d7c0d2f5",
"assets/assets/favicon/huaban.com.png": "38b8cfecce2430020446baa609bd343c",
"assets/assets/favicon/iioo.me.png": "bad4fe8af4af32e24dc83bb71a733876",
"assets/assets/favicon/link3.cc.png": "09337a6e1f9ad5811d90336e3c90610d",
"assets/assets/favicon/nkvlog.us.png": "2e0d7366f7ab0176e5c6361da45c3867",
"assets/assets/favicon/unsplash.com.png": "72a35f2f045e1d0f085dbc96cb7f1414",
"assets/assets/favicon/www.423xz.com.png": "2db8c2d7964f6d2454158c2b523f3cff",
"assets/assets/favicon/www.52pojie.cn.png": "ceb2b51459ad1e6a2a72925a76d1906a",
"assets/assets/favicon/www.alipansou.com.png": "9d515f4035ddfdf642873a7d2928b541",
"assets/assets/favicon/www.appinn.com.png": "17cd28b5ca3e56f3f7468883d19f3ffa",
"assets/assets/favicon/www.bdys.me.png": "ae47bd7c2b099a7253f0a6999b60879b",
"assets/assets/favicon/www.czzy.site.png": "26089dbbf17cf7ba04ee600a7ad26649",
"assets/assets/favicon/www.duitang.com.png": "157610450f13b3e02ffd2abc82cc62a7",
"assets/assets/favicon/www.fenxm.com.png": "7cfe5b41f682cf60f3e8ca4f98191bdb",
"assets/assets/favicon/www.ghxi.com.png": "3c22e429c1c439c395ef51a6bf563c1e",
"assets/assets/favicon/www.hdmoli.com.png": "73b55a97984481cb93091ffdd7547a52",
"assets/assets/favicon/www.lsapk.com.png": "c03b54d766d311eb97c6ccbc636b4445",
"assets/assets/favicon/www.ludown.com.png": "112bc6ebd54f069702d51bec84eb9f4a",
"assets/assets/favicon/www.novipnoad.net.png": "8803cef7648cd190a6f4a7f99404fc52",
"assets/assets/favicon/www.xitmi.com.png": "61393a0dfaff7779a0a3f211fb41c16e",
"assets/assets/favicon/www.yunso.net.png": "842c5ce0ed402c13246028e4e3f762c4",
"assets/assets/favicon/www.yxssp.com.png": "e9b3d1faee494d40927e7ce41df5d1bd",
"assets/assets/favicon/xd.x6d.com.png": "db123ed6be4d2ac66e3297f2893d6cb7",
"assets/assets/fonts/MiSans-Bold.ttf": "1a33ce0a0be45ff3c6036fa1b18cae60",
"assets/assets/fonts/MiSans-Regular.ttf": "5037e3ec0d9db9a6557a4a38daf1af99",
"assets/assets/fonts/Roboto-Regular.ttf": "ddd89d64e8ab39e63a33c61d54b2a05e",
"assets/assets/info.json": "96f6536b4e7a51dfced588a6a1b1ec05",
"assets/assets/keywords.json": "0a610a840704b974d2863f7269f0b8b1",
"assets/assets/qr_code.png": "b33d1ea052c09b2bd22676991951e7e6",
"assets/assets/win10_pattern.png": "6fbb6b74068c7e250c48c3787320d18a",
"assets/FontManifest.json": "5270119367cce24dbfe46ce4095c5cf7",
"assets/fonts/MaterialIcons-Regular.otf": "ac6122a44c5843e033bd99bcb82bc4e3",
"assets/NOTICES": "4ff271caa435ea8786fdfae97ef7c0cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0a2a0c383e5d7895920a89a79c3e1301",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "02c6392f4c266690cc45d481931deb93",
"/": "02c6392f4c266690cc45d481931deb93",
"js/browser-image-compression.js": "683225547c8e0eee2cddc62ab0752269",
"main.dart.js": "89e6cc2ae1bcecea52a7bab8d35fa039",
"manifest.json": "700db6c55f0da0b0f1e4078bcbc01725",
"version.json": "b57556c70926465213ecf28c3ff3304b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
