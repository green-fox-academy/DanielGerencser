'use strict';

let lineCount: number = 4;
let star: string = "*";
let space: string = " ";
let pyramid: string ="";
// Write a program that draws a
// pyramid like this:
//
//     *
//    ***
//   *****
//  *******
//
// The pyramid should have as many lines as lineCount is


for (let i=0; i<lineCount; i++) {
    let space2 = "";
    for (let j=0; j<lineCount-1-j; j++)     
    space2 = space2 + " + ";
    
    let star2 = "";
    for (let k=0; k<1+2*k; k++)     
        star2 = star2 + " + ";

console.log(space2 + star2);
}   
    


    /*let star2 = "";
    for (let k=0; k<lineCount; k++) {    
    star2 = star2 + "*";
    } */

    // console.log(space2);