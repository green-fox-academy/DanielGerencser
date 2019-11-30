// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
let numList = [3, 4, 5, 6, 7];

// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
console.log(numList.reverse());

//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`
function reverseString(str:number[]):number[] {
    let tempnumList = [];
    for (let i = str.length - 1; i >= 0; i--) {
        tempnumList.push(str[i]);
    }
    return tempnumList;
}
console.log(reverseString(numList));