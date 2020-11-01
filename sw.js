/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "apple-touch-icon.fbdbe6bf.png",
    "revision": "d354a0ad2eb8ab1fb9958c54b931a1bf"
  },
  {
    "url": "apple-touch-icon.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "certificate.1e3570bc.pdf",
    "revision": "623cac53a40c141642b22bf50fe14628"
  },
  {
    "url": "confidentialite.9df12cee.js",
    "revision": "fc18739ca47d454019b984066b281cb4"
  },
  {
    "url": "confidentialite.e0551224.css",
    "revision": "afef7535c582664027cc10f69daa62fd"
  },
  {
    "url": "confidentialite.html",
    "revision": "bb5892d141e9352caa3774e9373ad3e2"
  },
  {
    "url": "favicon-16x16.a4687270.png",
    "revision": "652605ae0182d51781ab0be639ad2bda"
  },
  {
    "url": "favicon-192x192.143e6195.png",
    "revision": "8e11110b3c8ca9f2c4915ed1adfb7cc6"
  },
  {
    "url": "favicon-32x32.623384d0.png",
    "revision": "674c9c4ef1e4c7ea9de1218ee0bfd0cf"
  },
  {
    "url": "favicon-384x384.1df59049.png",
    "revision": "350ae8427590d8123c0d3f6333d28118"
  },
  {
    "url": "favicon-512x512.5520de6d.png",
    "revision": "c57fe1446c013aea38fa408ba1fb90d4"
  },
  {
    "url": "index.html",
    "revision": "450245b58f8bc39150b63569aa657f10"
  },
  {
    "url": "logo_dnum_dark.0fe33c5b.svg",
    "revision": "da8bdc57d4f231585216c53da752d00a"
  },
  {
    "url": "logo_dnum.19ebc682.svg",
    "revision": "3a41bfa41e4671414da29db168c37d66"
  },
  {
    "url": "main.691b44c5.js",
    "revision": "448c9e67f01eff55c45c64614e93d4b7"
  },
  {
    "url": "main.e0551224.css",
    "revision": "294397171ec527c46a534bf591cabad2"
  },
  {
    "url": "marianne-bold-webfont.1505950c.woff2",
    "revision": "e67f6cefe32cc39f909e605c8d6337a9"
  },
  {
    "url": "marianne-bold-webfont.7424dbde.woff",
    "revision": "0bcc99dd4adfb78e11098fedfe531cbb"
  },
  {
    "url": "marianne-regular-webfont.0a959359.woff",
    "revision": "89f4f2326c77429e98693cf83703face"
  },
  {
    "url": "marianne-regular-webfont.daa94941.woff2",
    "revision": "d2c09e5f58d8360f541e2a8726c33587"
  },
  {
    "url": "MIN_Interieur_RVB_dark.0e5ee525.svg",
    "revision": "345794cee228a40837ab654184cd2c96"
  },
  {
    "url": "MIN_Interieur_RVB.124e26ea.svg",
    "revision": "6823b6d87f43d208b17ff81e178f9ae9"
  },
  {
    "url": "mstile-150x150.1eb25d89.png",
    "revision": "457e89af99c96f1aeba5fcda18a1d9f6"
  },
  {
    "url": "mstile-310x150.8695c547.png",
    "revision": "0449bd9582636a42c3a66cb2715e81e7"
  },
  {
    "url": "mstile-310x310.a109c6cb.png",
    "revision": "34764dc50954f598e5064d5798de3157"
  },
  {
    "url": "mstile-70x70.6707cf2f.png",
    "revision": "40bde2fbf23321bcc7a20291959d88d1"
  },
  {
    "url": "safari-pinned-tab.1551797e.svg",
    "revision": "f53452e6ac8760f12bab91672e91d39b"
  },
  {
    "url": "./",
    "revision": "ca09f59a4b63c1a14b7c31cbe3a5d9bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("https://bastienmoulia.github.io/attestation-deplacement-derogatoire-q4-2020/index.html"));
