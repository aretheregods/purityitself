/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","7a5fdcfcb7ee943a9f02493c96cc0a62"],["README.md","d8402ffb7aa69ba23cb6322b405c5e3d"],["activism.html","331ecc3e4a01b8c4e861a2484649c774"],["bower_components/sw-toolbox/README.md","5f5a86d815d6fc79143f5a5acee045b7"],["bower_components/sw-toolbox/bower.json","cba610bb467d1b424fa3939b7de39f35"],["bower_components/sw-toolbox/companion.js","6c891a25790dfafb6041bca5dfefdc77"],["bower_components/sw-toolbox/docs/_config.yml","88553455501de3e0c4ef721c69a30d84"],["bower_components/sw-toolbox/docs/_data/releases.yml","6af94fdebebe6daf4278c9a6cdd1b080"],["bower_components/sw-toolbox/docs/api.md","d4cc0d4ad9103a3699ce10132d41f0d8"],["bower_components/sw-toolbox/docs/index.md","ff11787b0a94a8d195d28506b63694fb"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/components/footer.html","48f539ff1d678853a4143210b9569863"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/components/nav-drawer-docs-entry.html","78b4821effb67051cebfaa6fc6d52c9b"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/components/nav-drawer.html","4c2e19b929658ace9590d364e9ef411d"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/components/site-header.html","13bd86a83a2737407f51bf8445a1c37d"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/html-head.html","92f0f6ebf96b1d75175fa5612b72264b"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/svgs/github.svg","5ea22595cef766cd30e84b3c73b6c419"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/svgs/gplus.svg","a022db90375c67305dd15cc855c9bde5"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/svgs/menu.svg","c800523f49b47cdc4ce9b41f50f6020c"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/svgs/twitter.svg","f66041486fb3f744830e4f4dfa41b034"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/variables.html","66fc16fe2e071c8d8b72448a9c26ff59"],["bower_components/sw-toolbox/docs/jekyll-theme/_layouts/default.html","0d3aab880863e9960f39c23dd56da202"],["bower_components/sw-toolbox/docs/jekyll-theme/_layouts/index.html","d36804e24965be7a8f3e1eed42ee402c"],["bower_components/sw-toolbox/docs/jekyll-theme/_layouts/jsdoc.html","8d1ded30ff15c8704bef16041f9a57ef"],["bower_components/sw-toolbox/docs/jekyll-theme/scripts/detabinator.js","44e7ca845d14746327b217288f951d19"],["bower_components/sw-toolbox/docs/jekyll-theme/scripts/side-nav.js","bb51068d8339bbd892f666754a761d73"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/components/code-styles.css","25e1b5bc38fb3899846413f8f76dd310"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/components/footer.css","5e8e4bd1f4226890332acfbdeacf00c8"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/components/nav-drawer.css","4553fcd5b80ec21fd91fb7ed01e2df83"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/components/page-header.css","afec54bdf61e616ef2b31e05c154ad2c"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/components/site-header.css","dba3a98c44340cb54f75f588dec9f40a"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/jsdoc/details.css","dd04cccffdcc03bd98d6755ebd5163a9"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/jsdoc/method.css","1ff93d0bc4829eb40f1d7d3b4f4bd69c"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/main.css","04b9b44380e0efcf3ee6b806a9d5598a"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/variables/colors.css","d41d8cd98f00b204e9800998ecf8427e"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/variables/dimens.css","d41d8cd98f00b204e9800998ecf8427e"],["bower_components/sw-toolbox/docs/jekyll-theme/third_party/prism/prism.css","23ca92e8748135ef3dded216ceae75b4"],["bower_components/sw-toolbox/docs/jekyll-theme/third_party/prism/prism.js","0d3ebc24f22d19c14fb640c14fb2e7e8"],["bower_components/sw-toolbox/docs/recipes.md","328423c31a43b45a67194b4643f8ec0d"],["bower_components/sw-toolbox/docs/recipes/cache-expiration-options/app.js","5f9e7c91e670cf6da8d948c37760b563"],["bower_components/sw-toolbox/docs/recipes/cache-expiration-options/index.html","43abc383ff1fb9c924fde08abb88dd35"],["bower_components/sw-toolbox/docs/recipes/cache-expiration-options/service-worker.js","3da117c4cec15dd69369a0e4ceb2cec7"],["bower_components/sw-toolbox/docs/recipes/cache-expiration-options/styles.css","b997097ccff1ae49dfc13c7da007d678"],["bower_components/sw-toolbox/docs/usage.md","1863792241270e510ac5371275862503"],["bower_components/sw-toolbox/package.json","36942fa544597769a547bca8aef11904"],["bower_components/sw-toolbox/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["bower_components/sw-toolbox/sw-toolbox.js.map","b9543543a6486c3d727acd16549da2f6"],["contact.html","477ff08c7952a3529b2bcde69c16f9ac"],["education.html","46064d45c7291e569b50d438999a4cc9"],["favicons/apple-touch-icon-114x114.png","ffce632f2a9c9b0cb588dc1cea24a603"],["favicons/apple-touch-icon-120x120.png","7e861667bbdb6390f38f2303be478d8a"],["favicons/apple-touch-icon-144x144.png","84a2b234d1163ba85535e103b95152a0"],["favicons/apple-touch-icon-152x152.png","f2f778faff45e78c533529e00452c148"],["favicons/apple-touch-icon-57x57.png","ea744f918f0ab8d949cbd9ba9db41133"],["favicons/apple-touch-icon-60x60.png","fba9d5ebc6a74a283d2c97f01e238eca"],["favicons/apple-touch-icon-72x72.png","9ac2059b7b80ad37840dc928c887fabd"],["favicons/apple-touch-icon-76x76.png","fc372d20ec23df10eb23bbc9797a0b90"],["favicons/code.txt","3eefd6f286ef79e3471e70d6bd75469a"],["favicons/favicon-128.png","8804c1a3cd11cebfbe7b36c0e3211bb5"],["favicons/favicon-16x16.png","0ea8a50b26c09f0986e4460b1751d156"],["favicons/favicon-196x196.png","74fb061da9e58561af2859b1ad145972"],["favicons/favicon-32x32.png","17f6d472c01a14ec250958d4c2a6d721"],["favicons/favicon-96x96.png","072934d67eedcaffa8b5b7e31a674b54"],["favicons/favicon.ico","1041904dc1787138b88900066d3c1b63"],["favicons/mstile-144x144.png","84a2b234d1163ba85535e103b95152a0"],["favicons/mstile-150x150.png","68ba6c1c43cfec8ef679451ed0586e58"],["favicons/mstile-310x150.png","15935cf26b7a74530f919ed6b221daca"],["favicons/mstile-310x310.png","bd93634fda66dde57c96b78086febf79"],["favicons/mstile-70x70.png","8804c1a3cd11cebfbe7b36c0e3211bb5"],["help.html","de47017e411d680d732ecfbf8ac09b62"],["images/YSupergirl.png","c4c7c417a9416c5dc6b48bb9b6d84b17"],["images/about_header.png","c65bebeaa2206a86285557862cc579b2"],["images/about_image.png","26381e38b8006f30a77ede15dfdf3696"],["images/activism.png","a8b57472d9e58aaf2d37996751add4f4"],["images/activism_header.jpg","8b5ab1da7cc711da2e72b3a36379d98e"],["images/activism_writing.jpg","116d13844478d268796dad7ad232e507"],["images/activist.jpg","b1f167babe53092278f8e8d89f67fa15"],["images/activities.jpg","67feb25fa1da2eceba48a8e0cb2a5abb"],["images/activities.png","40939276afc43db8649afdc372061658"],["images/bankimoon.png","6039ff62b937e08d3bc7824545773e74"],["images/contact-image.jpg","8416519ae2b5a1cf9a15b750afaf3994"],["images/contact_image.jpg","8f39f235ea7b7eb9e1d45a3932bb30a3"],["images/contact_image.png","ca0aea124942661938d4de2ddf9f3cb0"],["images/education.jpg","2582d8a1107b21a12d5017a8a45eb608"],["images/education_header.jpg","760b47998b62a3e85fa4b85da0f3642c"],["images/flowersandsuch.png","5661624e926acf11ca64312e19a5384f"],["images/footer-background.png","8baa656efb23ae4e9274a6deb88a2de2"],["images/gayflag.png","d1ec72faeda30063e1768e772bc7178f"],["images/gip.png","b78e9d64f0c421131157054e81834e35"],["images/gip1.png","8f309214ced004076265e00268fce55f"],["images/morerainbows.png","60b5caa8665d596c75677aa493797ba6"],["images/multilingual.png","aa1c5cc720a3a31a6b3bd507944fcf4d"],["images/newyorkoutreach.png","c2652b86595462ae44c18591632a4825"],["images/rainbowface.png","fa07b2f942ea477cce5d8930e288e576"],["images/sewanee.png","2d73ad2df75102b7150154662e8d4911"],["images/tis.png","08766b2e126869630b0baf5634801c0e"],["images/tw_profile.jpg","a826c4fff8b4dbfa66fe282288ee1f8d"],["images/work.jpg","312beb9ca1620f8f2d647f46a24cae8e"],["images/work_header.png","01399a1109cdb623cc254e595a1520d3"],["images/world_traveled.png","9872c2618b37c77acd9eea0a52e9aa9b"],["index.html","e252329eb890e8886db4cbe435d8df84"],["manifest.json","b4743eb066b1d5626b1e25257b6c1603"],["privacy.html","b9d956070c9edc40a5a9d263c92822eb"],["resume.html","21853f2d22e19f0a985ed1b682724cd6"],["styles.css","f9e8b61702f3a76f2bb5f82df05a97b6"],["thoughts.html","5a3794588e5288717e622e290002782f"],["work.html","efb3fdf9ffe07f66e2b609a0bb028f45"]];
var cacheName = 'sw-precache-v2-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







