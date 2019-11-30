'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let prob = /bots/;
let fix = "odds"; 
let fix1 = url.replace(prob, fix);
let fix2 = fix1.slice(0, url.indexOf("//www.")) + ":" + fix1.slice(url.indexOf("//www."));
url = fix2;

// Expected ouput: In a galaxy far far away

console.log(url);