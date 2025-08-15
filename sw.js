if (!self.define) {
  let e,
    c = {};
  const i = (i, a) => (
    (i = new URL(i + ".js", a).href),
    c[i] ||
      new Promise((c) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = c), document.head.appendChild(e);
        } else (e = i), importScripts(i), c();
      }).then(() => {
        let e = c[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, s) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (c[n]) return;
    let d = {};
    const f = (e) => i(e, n),
      r = { module: { uri: n }, exports: d, require: f };
    c[n] = Promise.all(a.map((e) => r[e] || f(e))).then((e) => (s(...e), d));
  };
}
define(["./workbox-1bb06f5e"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/AUrJmGJb_400x400.jpg",
          revision: "fb2d4cda5a98ab2f4c58ae4cf0c5b5e2",
        },
        { url: "/Labo1V92.mp4", revision: "72fd11b26bfb494198c38cf7390b6e8a" },
        {
          url: "/VRAM-LOGO-ICON.svg",
          revision: "8675d6c0525b01923925264498e4fa1d",
        },
        {
          url: "/_next/static/ZoLLbLuXNCbPHagvQ2eVg/_buildManifest.js",
          revision: "72580d9051a5742c78a09f84aaafc104",
        },
        {
          url: "/_next/static/ZoLLbLuXNCbPHagvQ2eVg/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/166.4231c08402ebc8da.js",
          revision: "4231c08402ebc8da",
        },
        {
          url: "/_next/static/chunks/225-25926ceb087601cf.js",
          revision: "25926ceb087601cf",
        },
        {
          url: "/_next/static/chunks/2d36dd80-3dbbb487637c5e2d.js",
          revision: "3dbbb487637c5e2d",
        },
        {
          url: "/_next/static/chunks/303.feb8259c247e86e2.js",
          revision: "feb8259c247e86e2",
        },
        {
          url: "/_next/static/chunks/319-89a2eda80f453913.js",
          revision: "89a2eda80f453913",
        },
        {
          url: "/_next/static/chunks/338.46c1ffd2e2224e21.js",
          revision: "46c1ffd2e2224e21",
        },
        {
          url: "/_next/static/chunks/359.b2d312c93bf9eb1d.js",
          revision: "b2d312c93bf9eb1d",
        },
        {
          url: "/_next/static/chunks/389.e7280795a65ad106.js",
          revision: "e7280795a65ad106",
        },
        {
          url: "/_next/static/chunks/478.18b8dc4c439cc4fc.js",
          revision: "18b8dc4c439cc4fc",
        },
        {
          url: "/_next/static/chunks/483.8a84911004f4f2e1.js",
          revision: "8a84911004f4f2e1",
        },
        {
          url: "/_next/static/chunks/508.9f81659fec2547c4.js",
          revision: "9f81659fec2547c4",
        },
        {
          url: "/_next/static/chunks/624.df6252a9ce60ff44.js",
          revision: "df6252a9ce60ff44",
        },
        {
          url: "/_next/static/chunks/707.63feb5fa9ae83929.js",
          revision: "63feb5fa9ae83929",
        },
        {
          url: "/_next/static/chunks/709-9b982bcb1583ffe2.js",
          revision: "9b982bcb1583ffe2",
        },
        {
          url: "/_next/static/chunks/803.0b11ecc9dd9cd630.js",
          revision: "0b11ecc9dd9cd630",
        },
        {
          url: "/_next/static/chunks/836.5921e60f702d0b2a.js",
          revision: "5921e60f702d0b2a",
        },
        {
          url: "/_next/static/chunks/942.4fd774dfd6e3e007.js",
          revision: "4fd774dfd6e3e007",
        },
        {
          url: "/_next/static/chunks/fb7d5399-7feb470ca231216f.js",
          revision: "7feb470ca231216f",
        },
        {
          url: "/_next/static/chunks/framework-21a7ded87e45f3d9.js",
          revision: "21a7ded87e45f3d9",
        },
        {
          url: "/_next/static/chunks/main-de515f637a124abe.js",
          revision: "de515f637a124abe",
        },
        {
          url: "/_next/static/chunks/pages/_app-8706d28a13a8dbf6.js",
          revision: "8706d28a13a8dbf6",
        },
        {
          url: "/_next/static/chunks/pages/_error-ee5b5fb91d29d86f.js",
          revision: "ee5b5fb91d29d86f",
        },
        {
          url: "/_next/static/chunks/pages/home-5c4fa49f9dbd4e79.js",
          revision: "5c4fa49f9dbd4e79",
        },
        {
          url: "/_next/static/chunks/pages/index-0fe87b282db3c1cd.js",
          revision: "0fe87b282db3c1cd",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-c4cf66601ebf7737.js",
          revision: "c4cf66601ebf7737",
        },
        {
          url: "/_next/static/css/089983860bde59bb.css",
          revision: "089983860bde59bb",
        },
        {
          url: "/_next/static/css/0990f60b3da422ff.css",
          revision: "0990f60b3da422ff",
        },
        {
          url: "/_next/static/css/230a8672f429a0d9.css",
          revision: "230a8672f429a0d9",
        },
        {
          url: "/_next/static/css/2b65b68cbdde9c20.css",
          revision: "2b65b68cbdde9c20",
        },
        {
          url: "/_next/static/css/35502c53eb18cf6b.css",
          revision: "35502c53eb18cf6b",
        },
        {
          url: "/_next/static/css/4f18d90eb37bfe5c.css",
          revision: "4f18d90eb37bfe5c",
        },
        {
          url: "/_next/static/css/8f4297209891ca4c.css",
          revision: "8f4297209891ca4c",
        },
        {
          url: "/_next/static/css/bc3970900e1a7546.css",
          revision: "bc3970900e1a7546",
        },
        {
          url: "/android-chrome-192x192.png",
          revision: "07c31235bf4c72719843ebdaa1822799",
        },
        {
          url: "/android-chrome-512x512.png",
          revision: "c2eeb98fd22c4653cba95baf5ba1602f",
        },
        {
          url: "/android-icon-144x144.png",
          revision: "ea9d26bf7b99b75194a3eca831c76fae",
        },
        {
          url: "/android-icon-192x192.png",
          revision: "f2db12fe67cce58aefbe2a2c2c251f1e",
        },
        {
          url: "/android-icon-36x36.png",
          revision: "541edd2d345f11191380bc9594cbe06b",
        },
        {
          url: "/android-icon-48x48.png",
          revision: "d5880db4d82f3378343f6c7d2cfd3531",
        },
        {
          url: "/android-icon-72x72.png",
          revision: "19096df7aa5836c5a2be9d171423cdb9",
        },
        {
          url: "/android-icon-96x96.png",
          revision: "1795d7cc21c756c3f16589d676e735ec",
        },
        {
          url: "/apple-icon-114x114.png",
          revision: "271c78afb8aab8f81085838e7479bff2",
        },
        {
          url: "/apple-icon-120x120.png",
          revision: "097390b57f7ce4d05f474f57cfcaa824",
        },
        {
          url: "/apple-icon-144x144.png",
          revision: "ea9d26bf7b99b75194a3eca831c76fae",
        },
        {
          url: "/apple-icon-152x152.png",
          revision: "0b009d6df2a3de05ba13e4264b0ef247",
        },
        {
          url: "/apple-icon-180x180.png",
          revision: "f76f0ecd2445a32bd383e29468829de3",
        },
        {
          url: "/apple-icon-57x57.png",
          revision: "f5de69a50dfc49b2b4b518ff70fe0629",
        },
        {
          url: "/apple-icon-60x60.png",
          revision: "bb2d23323cdc4355724b35f6d15eb9f4",
        },
        {
          url: "/apple-icon-72x72.png",
          revision: "19096df7aa5836c5a2be9d171423cdb9",
        },
        {
          url: "/apple-icon-76x76.png",
          revision: "c7617b858119ac5c7998a356bcc0c26e",
        },
        {
          url: "/apple-icon-precomposed.png",
          revision: "b44afefc32dc5f5e05987c489d614d65",
        },
        {
          url: "/apple-icon.png",
          revision: "b44afefc32dc5f5e05987c489d614d65",
        },
        {
          url: "/apple-touch-icon.png",
          revision: "c829264cccf3ddb5711860259c327880",
        },
        { url: "/army.mp4", revision: "aa982639814851a39f0a19b23b34e4ac" },
        {
          url: "/browserconfig.xml",
          revision: "653d077300a12f09a69caeea7a8947f8",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/android-icon-144x144.png",
          revision: "ea9d26bf7b99b75194a3eca831c76fae",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/android-icon-192x192.png",
          revision: "f2db12fe67cce58aefbe2a2c2c251f1e",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/android-icon-36x36.png",
          revision: "541edd2d345f11191380bc9594cbe06b",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/android-icon-48x48.png",
          revision: "d5880db4d82f3378343f6c7d2cfd3531",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/android-icon-72x72.png",
          revision: "19096df7aa5836c5a2be9d171423cdb9",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/android-icon-96x96.png",
          revision: "1795d7cc21c756c3f16589d676e735ec",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/apple-icon-114x114.png",
          revision: "271c78afb8aab8f81085838e7479bff2",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/apple-icon-120x120.png",
          revision: "097390b57f7ce4d05f474f57cfcaa824",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/apple-icon-144x144.png",
          revision: "ea9d26bf7b99b75194a3eca831c76fae",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/apple-icon-152x152.png",
          revision: "0b009d6df2a3de05ba13e4264b0ef247",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/apple-icon-180x180.png",
          revision: "f76f0ecd2445a32bd383e29468829de3",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/apple-icon-57x57.png",
          revision: "f5de69a50dfc49b2b4b518ff70fe0629",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/apple-icon-60x60.png",
          revision: "bb2d23323cdc4355724b35f6d15eb9f4",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/apple-icon-72x72.png",
          revision: "19096df7aa5836c5a2be9d171423cdb9",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/apple-icon-76x76.png",
          revision: "c7617b858119ac5c7998a356bcc0c26e",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/apple-icon-precomposed.png",
          revision: "b44afefc32dc5f5e05987c489d614d65",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/apple-icon.png",
          revision: "b44afefc32dc5f5e05987c489d614d65",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/browserconfig.xml",
          revision: "653d077300a12f09a69caeea7a8947f8",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/favicon-16x16.png",
          revision: "65d872edef86efe2ea8aa2f0622d5837",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/favicon-32x32.png",
          revision: "2f3b36b826c5baf06633c98d21c627c4",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/favicon-96x96.png",
          revision: "1795d7cc21c756c3f16589d676e735ec",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/favicon.ico",
          revision: "db691ff80444d69227515f82729b4d18",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/manifest.json",
          revision: "b58fcfa7628c9205cb11a1b2c3e8f99a",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/ms-icon-144x144.png",
          revision: "ea9d26bf7b99b75194a3eca831c76fae",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/ms-icon-150x150.png",
          revision: "425d287482a4a72e2860bdf43cdb5f6b",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/ms-icon-310x310.png",
          revision: "e591cbd91d56508a3b05f7d51f1655eb",
        },
        {
          url: "/cb7ca604a7dcd45c4293426477f3ecc5.ico/ms-icon-70x70.png",
          revision: "91c786fd61d3106f4f63d429048883da",
        },
        { url: "/dao.mp4", revision: "99255b540f1a74c9031b496c92c7b68c" },
        {
          url: "/favicon-16x16.png",
          revision: "65d872edef86efe2ea8aa2f0622d5837",
        },
        {
          url: "/favicon-32x32.png",
          revision: "2f3b36b826c5baf06633c98d21c627c4",
        },
        {
          url: "/favicon-96x96.png",
          revision: "1795d7cc21c756c3f16589d676e735ec",
        },
        { url: "/favicon.ico", revision: "db691ff80444d69227515f82729b4d18" },
        { url: "/finance.mp4", revision: "f8b00d0534213be43b7345309ff0735b" },
        {
          url: "/fonts/Slussen-Bold.woff2",
          revision: "e7763140521609dc25ea44f512606bd3",
        },
        {
          url: "/fonts/Slussen-Compressed-Black.woff2",
          revision: "03544e36539058c093dcd5dd9bb8196c",
        },
        {
          url: "/fonts/Slussen-Expanded-Black.woff2",
          revision: "ec68f3582a4274fb58287f7a85173047",
        },
        {
          url: "/fonts/Slussen-Medium.woff2",
          revision: "58b3bab2301a6332846956924fb2717b",
        },
        {
          url: "/fonts/Slussen-Regular.woff2",
          revision: "607dbd3e6823789222434856623059de",
        },
        {
          url: "/fonts/Slussen-Semibold.woff2",
          revision: "7b17a1bc6619610d74bc39355860c796",
        },
        {
          url: "/fonts/leaguegothic-italic-webfont.woff",
          revision: "9513c65d228e8772bc78c89b18feafdd",
        },
        {
          url: "/fonts/leaguegothic-regular-webfont.woff",
          revision: "55e55905e6e094bbfcd7a33be93749d7",
        },
        {
          url: "/fonts/leaguegothic-regular-webfont.woff2",
          revision: "f94db279b980542cfce0b986de1f9290",
        },
        {
          url: "/images/Build.jpeg",
          revision: "ff699abcfe67245536f6ee332c3f8d95",
        },
        {
          url: "/images/VRAM Green.svg",
          revision: "c5e4315436cecd5af2fcb67c9ac0770a",
        },
        {
          url: "/images/VRAM.svg",
          revision: "0f0e2e2882ca10cbc6c4fa96fe04f97d",
        },
        {
          url: "/images/army.jpeg",
          revision: "7634b73a8d128680402bde81e3cf41ef",
        },
        {
          url: "/images/art.png",
          revision: "db7969f4dffbafb0f21ead486307ccef",
        },
        {
          url: "/images/dao.jpg",
          revision: "6f874abee38ea0238d0c570651f074b2",
        },
        {
          url: "/images/drama.jpeg",
          revision: "9969398128e13a50a965c752dc1a6468",
        },
        {
          url: "/images/music.jpeg",
          revision: "c711a1560581f549349c31ca6317ee5f",
        },
        {
          url: "/images/portfolio.jpeg",
          revision: "f4f3f0232e843b6cfbebc648dc59d38f",
        },
        {
          url: "/images/trading.jpeg",
          revision: "93a92c4cfec3a08ae511d1640d1c9d55",
        },
        {
          url: "/images/twitter-profile.jpg",
          revision: "fb2d4cda5a98ab2f4c58ae4cf0c5b5e2",
        },
        { url: "/logo-vram.jpg", revision: "d9d38c459a2b11cda6ac0ca5f4020e33" },
        { url: "/manifest.json", revision: "b58fcfa7628c9205cb11a1b2c3e8f99a" },
        {
          url: "/models/arm-gold.glb",
          revision: "75346e66fd6c45177000f88766a6c237",
        },
        {
          url: "/models/arm-gpu.glb",
          revision: "d1558b3ea28ea78a64fe2c98698556d2",
        },
        {
          url: "/models/arm-o.glb",
          revision: "e2088db2700752eb8a6d38861b57ff39",
        },
        {
          url: "/models/arm-p.glb",
          revision: "aa163b9009d7db52601173ce293a0e07",
        },
        {
          url: "/models/arm.glb",
          revision: "1427dbb3267d3a6599294ec786a70624",
        },
        {
          url: "/models/arm1.glb",
          revision: "aa163b9009d7db52601173ce293a0e07",
        },
        {
          url: "/models/arm2-no.glb",
          revision: "75346e66fd6c45177000f88766a6c237",
        },
        {
          url: "/models/arm2-o.glb",
          revision: "d38b4c53972c5a261b6c74eaeed2e0ee",
        },
        {
          url: "/models/arm2-p.glb",
          revision: "aa163b9009d7db52601173ce293a0e07",
        },
        {
          url: "/models/arm2.glb",
          revision: "1427dbb3267d3a6599294ec786a70624",
        },
        {
          url: "/ms-icon-144x144.png",
          revision: "ea9d26bf7b99b75194a3eca831c76fae",
        },
        {
          url: "/ms-icon-150x150.png",
          revision: "425d287482a4a72e2860bdf43cdb5f6b",
        },
        {
          url: "/ms-icon-310x310.png",
          revision: "e591cbd91d56508a3b05f7d51f1655eb",
        },
        {
          url: "/ms-icon-70x70.png",
          revision: "91c786fd61d3106f4f63d429048883da",
        },
        { url: "/og-image.jpg", revision: "d9d38c459a2b11cda6ac0ca5f4020e33" },
        { url: "/robots.txt", revision: "5e7cae9db7bf84d12429e5067e7098f0" },
        {
          url: "/site.webmanifest",
          revision: "c79b855d89f8d30d02c3c9d15279be91",
        },
        { url: "/sitemap-0.xml", revision: "374861537f160066d8cb20ef6c3a8cfc" },
        { url: "/sitemap.xml", revision: "e103591648354e570c9ca84427dfb4c1" },
        {
          url: "/vram-text-logo.webp",
          revision: "79c6613e3e1e134d6517bbeef0a8f27e",
        },
        { url: "/wallets.txt", revision: "a3a45963bf56b9f0c0cb7446c0a32b9a" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: c,
              event: i,
              state: a,
            }) =>
              c && "opaqueredirect" === c.type
                ? new Response(c.body, {
                    status: 200,
                    statusText: "OK",
                    headers: c.headers,
                  })
                : c,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const c = e.pathname;
        return !c.startsWith("/api/auth/") && !!c.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
