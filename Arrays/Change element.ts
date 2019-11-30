// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
let numList:number[] = [1, 2, 3, 8, 5, 6];
// -  Change the 8 to 4 with the `.map` method
numList.forEach(function(item, i){
    if (item === 8) 
        numList[i] = 4;
}
); 
// -  Print the fourth element as a test
console.log(numList[3]);