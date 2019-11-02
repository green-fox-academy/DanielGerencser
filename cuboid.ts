'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

// values in mm
let cuboidsideA: number = 10; 
let cuboidsideB: number = 50;
let cuboidsideC: number = 20;

let cuboidsurfaceArea: number = 2*(cuboidsideA*cuboidsideB + cuboidsideA*cuboidsideC + cuboidsideB*cuboidsideC);
let cuboidVolume: number = cuboidsideA*cuboidsideB*cuboidsideC;

console.log("Surface Area: " + cuboidsurfaceArea);
console.log("Volume: " + cuboidVolume);