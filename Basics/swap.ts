'use strict';

// Swap the values of these variables
let a: number = 123;
let b: number = 526;
let c: number = 0; // temp variable

c = a;
a = b;
b = c;

console.log(a);
console.log(b);