// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
function sum(i: number) {
    let sum: number = 0;
    for (let j = 0; j <= i; j++)
        sum = sum + j;

    return sum;
}
console.log(sum(4));