"use strict";
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(reg) {
        reg.onupdatefound = function(){
            var installingWorker = reg.installing;
            installingWorker.onstatechange = function() {
                switch (installingWorker.state) {

                    case 'installed':
                        if (navigator.serviceWorker.controller) {
                            // Do something interesting here -- message or whatever.
                            return 'New or updated content is available';
                        } else {
                            // Also do something interesting here -- message or whatever.
                            return 'Content is now available offline!';
                        }
                        break;

                    case 'redundant':
                        // Possibly do something clever
                        return 'The installing service worker became redundant.';
                        break;
                }
            };
        };
    })
    .catch(function(error){return `There's been the following error: ${error}`});
}