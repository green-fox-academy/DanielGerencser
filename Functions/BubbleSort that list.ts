//  Create a function that takes a list of numbers as parameter
function bubblesort(list:number[], parameter:boolean) {
    let sortedlist = list.slice();

    if (parameter === true) { //  Make a second boolean parameter, if it's `true` sort that list descending
        for (let i = 0; i < sortedlist.length; i++) {
            for(let j = 0; j < sortedlist.length - 1; j++) {
                
                if (sortedlist[j] < sortedlist[j + 1] ) {
                    let temp = sortedlist[j];
                    sortedlist[j] = sortedlist[j + 1];
                    sortedlist[j + 1] = temp;
                }
            }
        }
        return sortedlist;
    }
    else 
    for (let i = 0; i < sortedlist.length; i++) {
        for(let j = 0; j < sortedlist.length - 1; j++) {
            
            if (sortedlist[j] > sortedlist[j + 1] ) {
                let temp = sortedlist[j];
                sortedlist[j] = sortedlist[j + 1];
                sortedlist[j + 1] = temp;
            }
        }
    }
    return sortedlist; //  Returns a list where the elements are sorted in ascending numerical order
}    

console.log(bubblesort([57, 8, 7, 11, 45, 2, 3, 5, 20], false));


//  Example:
// console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
// console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]