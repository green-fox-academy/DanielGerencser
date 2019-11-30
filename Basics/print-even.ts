'use strict';

// Create a program that prints all the even numbers between 0 and 500

let rangeMin: number = 0;
let rangeMax: number = 500;
let a: number = rangeMin;

if (a%2==0)
    for (a; a<rangeMax; a = a + 2) {
        console.log(a);
    }
    else {
        for (a=a+1; a<rangeMax; a = a + 2) {
            console.log(a);
        }
    }