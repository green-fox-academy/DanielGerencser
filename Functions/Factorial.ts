// -  Create a function called `factorio`
//    that returns it's input's factorial
function factorial (i: number) {
    let fact:number[] = []
    if (i == 0 || i == 1)
        return 1;
    if (fact[i] > 0)
        return fact[i];
    return fact[i] = factorial(i-1) * i;
}
console.log(factorial(70));


// function sum(i: number) {
//     let fact: number = 1;
//     for (let j = i; j != 0; j--)
//         fact = fact * j;

//     return fact;
// }
// console.log(sum(9));
