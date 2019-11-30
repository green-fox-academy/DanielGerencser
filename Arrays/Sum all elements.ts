// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
let ai = [3, 4, 5, 6, 7, 10];
// -  Log the sum of the elements in `ai` to the console
let sum:number = 0;
ai.forEach(function(add){
    sum = sum + add;
})
console.log(sum)