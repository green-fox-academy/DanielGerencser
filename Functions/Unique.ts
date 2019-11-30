//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(inputList:number[]) {
    let uniqlist:number[] = [];
    inputList.forEach(function(item) {
        if (!uniqlist.includes(item)) {
            uniqlist.push(item);
           }
        }
    )
    // sort the array 
    uniqlist.sort(function(a, b) {
        return a - b;
      });
    // return the sorted array
    return uniqlist;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34, 52, 73, 12, 7, 61]))
//  should print: `[1, 11, 34, 52, 61]`

