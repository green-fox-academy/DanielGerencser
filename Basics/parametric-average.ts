'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let start: number = 9;
let input: number = 10;
let sum: number = 0;
let avarage: number = 0;

for (let i = start; i<=input; i++)
    sum = sum + i;
    avarage = sum / (input - start + 1 );

let output: string = "Sum: " + sum + ", " + "Average: " + avarage; 
console.log(output);