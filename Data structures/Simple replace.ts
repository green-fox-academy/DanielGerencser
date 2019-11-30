'use strict';

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
let prob = /dishwasher/; 
let fixed = example.replace(prob, "galaxy");

// Expected ouput: In a galaxy far far away
example = fixed; 

console.log(example);

export = example;