'use strict';

// Greet 3 of your classmates with this program, in three separate lines like:
//
// Hello, Esther!
// Hello, Mary!
// Hello, Joe!
let ClassName: string[] = ['Kata', 'Leo', 'Tamas', 'Tamas', 'Marci', 'Jano', 'Levi', 'Helga', 'Livi',]; // Array of the first name of the class

for (let i = 0; i < 3; i++) {
    let randname = ClassName[Math.floor(Math.random() * ClassName.length)]; // select a random element from the the Array
    console.log("Hello", randname, "!");
}