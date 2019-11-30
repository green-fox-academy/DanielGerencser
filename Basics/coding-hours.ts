'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let avarageHours: number = 6;
let semesterlenght: number = 17;
let workdays: number = semesterlenght*5; // number of workdays in a semester
let weeklyhours: number = 52;
let percentageHours: number = Math.round((avarageHours*workdays)/(weeklyhours*semesterlenght)*100); // get coding hours percentage and round it up

console.log(avarageHours*workdays, 'is spent with coding in a semester by an attendee');
console.log(percentageHours + '% of the time is spent with coding in a semester')