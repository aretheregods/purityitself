importScripts('/bower_components/sw-toolbox/sw-toolbox.js');

// Version 1.1

toolbox.precache([
    'index.html',
    'resume.html',
    'thoughts.html',
    'contact.html',
    'education.html',
    'work.html',
    'activism.html',
    '404.html'
    ],
    [
    'YSupergirl.png',
    'about_image.png',
    'education.jpg',
    'work.jpg',
    'activist.jpg',
    'tw_profile.jpg'
    ],
    [
    'styles.css'
    ],
    [
    'sw.js',
    'service-worker.js'
])
 
toolbox.router.default = toolbox.cacheFirst;