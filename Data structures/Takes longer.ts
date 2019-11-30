'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let fixstr = "always takes longer than ";
let fixed = quote.slice(0, quote.lastIndexOf("It") + 3) + fixstr + quote.slice(quote.indexOf("you"));
quote = fixed;

console.log(quote);