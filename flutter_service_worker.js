'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6b28becb9668b07dc7803cfe18d16ec0",
"assets/AssetManifest.bin.json": "0d5a16257e6fda6b393f7bb59ea10799",
"assets/AssetManifest.json": "91fcf2d524b36fa86e78eb263ce174f0",
"assets/assets/favicon/10wallpaper.com.png": "86c50b5dd245d92f3fc546eecb0c221a",
"assets/assets/favicon/alphacoders.com.png": "a93b3334c3bf918e81fe13c97eec8c0f",
"assets/assets/favicon/anting.png": "60cb092ac7ea4d45fd848dc96ceaf3b3",
"assets/assets/favicon/bz.zzzmh.cn.png": "cbebd5846a87ea8a56ea857bca8390ee",
"assets/assets/favicon/cili.urls.mom.png": "c37811e27a5fb655a982bd3688383f87",
"assets/assets/favicon/czzy.png": "26089dbbf17cf7ba04ee600a7ad26649",
"assets/assets/favicon/ddys.info.png": "5d0e3e0fac3f15d45362b6bf58225195",
"assets/assets/favicon/default.png": "151fa72755dd7d4b4696797280b407c1",
"assets/assets/favicon/dyyz.pw.png": "0266b94b3dfd8374fe7c85f7fb8fd8cc",
"assets/assets/favicon/gaze.run.png": "f475defdb9cf35ac48015733d7c0d2f5",
"assets/assets/favicon/gh.llkk.cc.png": "d3eef7a5c7bfe29c44af05841d72c8a8",
"assets/assets/favicon/github.com.png": "fed77a6a4c94a937855cfd80650ad78f",
"assets/assets/favicon/huaban.com.png": "38b8cfecce2430020446baa609bd343c",
"assets/assets/favicon/iioo.me.png": "bad4fe8af4af32e24dc83bb71a733876",
"assets/assets/favicon/imagecompressiontool.png": "9eb3bf6f86b91ee2e2fc4d61e7af2f6d",
"assets/assets/favicon/jqq.png": "09337a6e1f9ad5811d90336e3c90610d",
"assets/assets/favicon/keywordsearchtool.png": "a30948a9741bdddb0dea63c941ccd399",
"assets/assets/favicon/kkapik.eu.org.png": "829a35b3f7d54f4ec0030bbb701aeec8",
"assets/assets/favicon/listenmusic.png": "99f752637028570da5a84b8d70807499",
"assets/assets/favicon/live.bilibili.com.png": "7cc467cb39136faed25588ab8a7326e7",
"assets/assets/favicon/live.douyin.com.png": "5c2e51b37c4d6d40d02aa971188744aa",
"assets/assets/favicon/lxmusic.png": "223b0e8cf4490d4af4c03da56637ec38",
"assets/assets/favicon/miaosou.fun.png": "30482486b7e529bbb32de2a6a5dd7c07",
"assets/assets/favicon/musicfree.png": "64e035e79f8e95f7f9a67fd43ecab62d",
"assets/assets/favicon/ningyue.png": "54f1d9446aa314b05c84bf242634ff00",
"assets/assets/favicon/nkdb.png": "2e0d7366f7ab0176e5c6361da45c3867",
"assets/assets/favicon/pan666.net.png": "5c4806e513c9db1278b1bd3095f29fe7",
"assets/assets/favicon/rimra2assistant.png": "87bdee08f00f0fb7e92642408cb55595",
"assets/assets/favicon/skrbtdzh.top.png": "6f9aff521b1267e313c9c03ff23c6e1b",
"assets/assets/favicon/tieba.baidu.com.png": "0492faa541f93b0b26caa4489f7ea298",
"assets/assets/favicon/tv.cctv.com.png": "a3c8c93d3af6b910b330fd5b546f3a48",
"assets/assets/favicon/unsplash.com.png": "72a35f2f045e1d0f085dbc96cb7f1414",
"assets/assets/favicon/wallhere.com.png": "bd1c797379895be67d19d07a6f760087",
"assets/assets/favicon/www.423xz.com.png": "2db8c2d7964f6d2454158c2b523f3cff",
"assets/assets/favicon/www.52pojie.cn.png": "ceb2b51459ad1e6a2a72925a76d1906a",
"assets/assets/favicon/www.alipansou.com.png": "9d515f4035ddfdf642873a7d2928b541",
"assets/assets/favicon/www.appinn.com.png": "17cd28b5ca3e56f3f7468883d19f3ffa",
"assets/assets/favicon/www.bilibili.com.png": "7cc467cb39136faed25588ab8a7326e7",
"assets/assets/favicon/www.crxsoso.com.png": "b470b84c6088e461871b12bdbb91039e",
"assets/assets/favicon/www.douban.com.png": "f7e7443cfdb707a06f8f17398c702bc2",
"assets/assets/favicon/www.douyu.com.png": "37121a061dd7d178e9552eef8fece983",
"assets/assets/favicon/www.duitang.com.png": "157610450f13b3e02ffd2abc82cc62a7",
"assets/assets/favicon/www.fenxm.com.png": "7cfe5b41f682cf60f3e8ca4f98191bdb",
"assets/assets/favicon/www.ghxi.com.png": "3c22e429c1c439c395ef51a6bf563c1e",
"assets/assets/favicon/www.gyf.lol.png": "c524302c32baf646edc8c7fab09a7272",
"assets/assets/favicon/www.hdmoli.com.png": "73b55a97984481cb93091ffdd7547a52",
"assets/assets/favicon/www.huya.com.png": "d49e3f1f775a4bff4bb4cf0ebb60337b",
"assets/assets/favicon/www.leijing.xyz.png": "8b18205a0148a7fb7d9a8e72f6f19631",
"assets/assets/favicon/www.lsapk.com.png": "c03b54d766d311eb97c6ccbc636b4445",
"assets/assets/favicon/www.ludown.com.png": "112bc6ebd54f069702d51bec84eb9f4a",
"assets/assets/favicon/www.lzpanx.com.png": "8660f1d26b9804185c42045520bb8edf",
"assets/assets/favicon/www.mefcl.com.png": "8dada9e91507fb3b8bb947c1e5cee9f1",
"assets/assets/favicon/www.nmme.one.png": "0443c65130e498dddf8deffe6dc2fe07",
"assets/assets/favicon/www.novipnoad.net.png": "8803cef7648cd190a6f4a7f99404fc52",
"assets/assets/favicon/www.nuantang.net.png": "3515d17c0a73af235ae12bec22ef407f",
"assets/assets/favicon/www.qileso.com.png": "547dbaf3963adb5d920f02d2b4502ee0",
"assets/assets/favicon/www.xiongdipan.com.png": "7da85cd62d0ea49a3bed8eff49e38819",
"assets/assets/favicon/www.xitmi.com.png": "61393a0dfaff7779a0a3f211fb41c16e",
"assets/assets/favicon/www.yangshipin.cn.png": "01c2d7f207f5aab6fe534f93064c6c37",
"assets/assets/favicon/www.yunso.net.png": "842c5ce0ed402c13246028e4e3f762c4",
"assets/assets/favicon/www.yxssp.com.png": "e9b3d1faee494d40927e7ce41df5d1bd",
"assets/assets/favicon/www.z2pyw.com.png": "b3cc560675e758ba7ce17d9f353b4907",
"assets/assets/favicon/www.zhihu.com.png": "fa39e1ac7dba66e1c9711da6deb9892e",
"assets/assets/favicon/xd.x6d.com.png": "db123ed6be4d2ac66e3297f2893d6cb7",
"assets/assets/favicon/xlys.me.png": "ae47bd7c2b099a7253f0a6999b60879b",
"assets/assets/favicon/zypuu.com.png": "fd5c62e0eb9855689721286664861e52",
"assets/assets/fonts/MiSans-Regular.ttf": "5037e3ec0d9db9a6557a4a38daf1af99",
"assets/assets/fonts/Roboto-Regular.ttf": "ddd89d64e8ab39e63a33c61d54b2a05e",
"assets/assets/info.json": "1e731085c03a0040606333a545f29c67",
"assets/assets/keywords.json": "0a610a840704b974d2863f7269f0b8b1",
"assets/assets/md/1.md": "2b33f5046e30bfb59fa8c5a71abe303d",
"assets/assets/md/q.png": "b33d1ea052c09b2bd22676991951e7e6",
"assets/assets/qr_code.png": "b33d1ea052c09b2bd22676991951e7e6",
"assets/assets/win10_pattern.png": "6fbb6b74068c7e250c48c3787320d18a",
"assets/FontManifest.json": "0de6d1703f6881d6c31da8a1a41015da",
"assets/fonts/MaterialIcons-Regular.otf": "bb004184edbe8d19c152f2db8b4aac0d",
"assets/NOTICES": "275eb56798a19e06ffe3bd43c1b27511",
"assets/packages/appflowy_editor/assets/images/case_sensitive.svg": "1f93577f39711359040ffde3d815fdc6",
"assets/packages/appflowy_editor/assets/images/check.svg": "c7b016041b6a5b0ce7cd50b7277364ec",
"assets/packages/appflowy_editor/assets/images/checkmark.svg": "3dc55867deb579484c5702a79054bb0e",
"assets/packages/appflowy_editor/assets/images/clear.svg": "f74736135d3ee5656b916262104469d0",
"assets/packages/appflowy_editor/assets/images/clear_highlight_color.svg": "0b35a31822656c53578fb91acdfacb31",
"assets/packages/appflowy_editor/assets/images/copy.svg": "8aff328e13b4b3667a6fbe1046d691b2",
"assets/packages/appflowy_editor/assets/images/delete.svg": "4a8d17ccc8cd1bd44a472f66ad028a01",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_center.svg": "e82165a5f6fb20a7ad3a6faf0ab735cc",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_left.svg": "fcd2f1a9124961798dd7009f27172a64",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_right.svg": "bf18d4c1654d502abea1d2c8aa010c30",
"assets/packages/appflowy_editor/assets/images/image_toolbar/copy.svg": "8aff328e13b4b3667a6fbe1046d691b2",
"assets/packages/appflowy_editor/assets/images/image_toolbar/delete.svg": "15cbb502f4554ee7a443207099cc839a",
"assets/packages/appflowy_editor/assets/images/image_toolbar/divider.svg": "b7677e94ef1007c39a1853588b177d1e",
"assets/packages/appflowy_editor/assets/images/image_toolbar/share.svg": "42aee34d22fd39e710e4e448bf654e29",
"assets/packages/appflowy_editor/assets/images/link.svg": "d323cd62b3df10a342e8e78ca50bf4e1",
"assets/packages/appflowy_editor/assets/images/point.svg": "50c7d9067a4a84945f1d79640589f501",
"assets/packages/appflowy_editor/assets/images/quote.svg": "ba6e97b8ddde8bf842fe2a56d06003ad",
"assets/packages/appflowy_editor/assets/images/regex.svg": "31424cd1f827bb7f237cd8e56c58f941",
"assets/packages/appflowy_editor/assets/images/reset_text_color.svg": "a9ecce95365f0b4636ad43cc054d87e4",
"assets/packages/appflowy_editor/assets/images/selection_menu/bulleted_list.svg": "7b22749438c843bc176fb559c924ad21",
"assets/packages/appflowy_editor/assets/images/selection_menu/checkbox.svg": "b81c986f918f1bd859fe07717b1e9d59",
"assets/packages/appflowy_editor/assets/images/selection_menu/h1.svg": "8135d2d5883f5cdd8776dca2dddb5f9b",
"assets/packages/appflowy_editor/assets/images/selection_menu/h2.svg": "129cb4e93b4badba4805968b13d52098",
"assets/packages/appflowy_editor/assets/images/selection_menu/h3.svg": "cd75480a77da1cabc7c5c2bf81325322",
"assets/packages/appflowy_editor/assets/images/selection_menu/image.svg": "92468547c1be63604f0820e565a1a6c2",
"assets/packages/appflowy_editor/assets/images/selection_menu/number.svg": "9dad0889a48bb8f0ff288a5c0b711ab4",
"assets/packages/appflowy_editor/assets/images/selection_menu/quote.svg": "f58d378109520a8058edb4fed9d9ddbb",
"assets/packages/appflowy_editor/assets/images/selection_menu/text.svg": "890a3a1b0a674b1fbd769f42520cfef7",
"assets/packages/appflowy_editor/assets/images/toolbar/bold.svg": "51e86ea040233e6a093caf02eea0c5f4",
"assets/packages/appflowy_editor/assets/images/toolbar/bulleted_list.svg": "b9441734387d7df0122b9dc629ca6bbb",
"assets/packages/appflowy_editor/assets/images/toolbar/center.svg": "c44cf79c7fae101e6fb9daa8aaf62a54",
"assets/packages/appflowy_editor/assets/images/toolbar/code.svg": "2d41f509ac1e1b1eb60c9adedc75ce03",
"assets/packages/appflowy_editor/assets/images/toolbar/divider.svg": "b7677e94ef1007c39a1853588b177d1e",
"assets/packages/appflowy_editor/assets/images/toolbar/h1.svg": "735f59f34690e55680453a0d018ada75",
"assets/packages/appflowy_editor/assets/images/toolbar/h2.svg": "bf7b09c579a5db9e6392b01f95909347",
"assets/packages/appflowy_editor/assets/images/toolbar/h3.svg": "30d4699894d5de3b696b11cf678b35a0",
"assets/packages/appflowy_editor/assets/images/toolbar/highlight_color.svg": "f8dd55016252c335c33e97fb39159882",
"assets/packages/appflowy_editor/assets/images/toolbar/italic.svg": "b96a655409eea41190182ae3ab3ed500",
"assets/packages/appflowy_editor/assets/images/toolbar/left.svg": "511106ad3206b6ccbf9702f22b0097db",
"assets/packages/appflowy_editor/assets/images/toolbar/link.svg": "42aee34d22fd39e710e4e448bf654e29",
"assets/packages/appflowy_editor/assets/images/toolbar/numbered_list.svg": "a6072f727ea30c379dd5e0e2909790c4",
"assets/packages/appflowy_editor/assets/images/toolbar/quote.svg": "7d20ee07b7f80cc886294a43a0db0b3d",
"assets/packages/appflowy_editor/assets/images/toolbar/right.svg": "19968f066c5bccae9f3e059f04492850",
"assets/packages/appflowy_editor/assets/images/toolbar/strikethrough.svg": "82564a24aa7e82675d377431ac8fb075",
"assets/packages/appflowy_editor/assets/images/toolbar/text.svg": "2b52bcda2b12945b27e859c414ef43c9",
"assets/packages/appflowy_editor/assets/images/toolbar/text_color.svg": "b912db1bb9568af27b19e2946e38cf38",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_auto.svg": "74b07c6cd726be519ea32060d7a4b78c",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_ltr.svg": "16a42742a29ea1cf30253cd9429095cd",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_rtl.svg": "a994493865a43a16af27155434be4a6c",
"assets/packages/appflowy_editor/assets/images/toolbar/underline.svg": "fc86b2c49c42f5b9322a4ba76d066203",
"assets/packages/appflowy_editor/assets/images/uncheck.svg": "d94aa89207d28adebb0a4e11237f1c57",
"assets/packages/appflowy_editor/assets/images/upload_image.svg": "67fac764479d7cded5e98f6fe58c75ef",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/bold.svg": "7118c4686f95cedaa776faf7924c89a0",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/bulleted_list.svg": "4d7dba759b6073003a84e5938aa043b2",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/checkbox.svg": "eda1fb784a3429e96b42b7f24b7ea4c9",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/close.svg": "aa945f43dcd92bce9b5c810eb33940be",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/code.svg": "02ef07d8ea084d72dc2f4cc74a1b756d",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/color.svg": "d061328f2a2b335e121c44dccff39a43",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/divider.svg": "098194a544d649f3545d35f301b0191f",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h1.svg": "295c462eeb57150f11a2e747d9220869",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h2.svg": "88278b54319f416c66c1cf830fcf6c42",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h3.svg": "ba38c1cdee5d41663df86128b73b835e",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/heading.svg": "8e872c0f97c1740a2f9858523aeb7743",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/italic.svg": "c8585c2f19414f94f26430e8eecc4bb3",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/link.svg": "d7a05e0d3a904118900ca7d8e3cf47b4",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/list.svg": "ed5fb52546835a9865541c1e2c06c20c",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/numbered_list.svg": "1daa60662c6ab43e65ac96e9e930b745",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/quote.svg": "dda6772a0e0d9b40e8aad07ff377ffc1",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/setting.svg": "0cb728ff605b6f7457950f3a47d291f1",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/strikethrough.svg": "c82d154453ef6759daa7cebb397cf58c",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/text_decoration.svg": "e4dd4997dec353c1eb7cdfab039a49ef",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/underline.svg": "472439a97df9c883661d818045a40d95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "88aaddcd2737522da8f203c30e0018dc",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "3b5e6da461dbd849a90cfd8051087ba3",
"icons/Icon-192.png": "04d09045a87044102912cd7823f2ec1c",
"icons/Icon-512.png": "a2b5f67c92d22ab096581fe32e409df2",
"icons/Icon-maskable-192.png": "a3f6ba71ababd0d97ee6e28e04f8f80c",
"icons/Icon-maskable-512.png": "494a7a34b8988e6d9668faa3720677e0",
"index.html": "4952aaa6540068d4a5599c3f5320654a",
"/": "4952aaa6540068d4a5599c3f5320654a",
"js/browser-image-compression.js": "683225547c8e0eee2cddc62ab0752269",
"main.dart.js": "8fc379f9b5686c7a27383361cc335c1f",
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
