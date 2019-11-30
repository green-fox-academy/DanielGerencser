// List introduction 1
// We are going to play with lists.Feel free to use the built -in methods where possible.


let Names:any = [];             // Create an empty list which will contain names(strings)
console.log(Names.length);      // Print out the number of elements in the list
Names.push("William");          // Add William to the list
if (Names.lenght != 0) {        // Print out whether the list is empty or not
    console.log("Not Empty");
}
    else {
        console.log("Empty");
    }         
Names.push("John");     // Add John to the list
Names.push("Amanda");   // Add Amanda to the list
console.log(Names.length);  // Print out the number of elements in the list
console.log(Names[2]);      // Print out the 3rd element

// Iterate through the list and print out each name
Names.forEach(function(item:any) { 
    console.log(item);
});                                 

// for (let i = 0; i < Names.length; i++) {
//     console.log(Names[i]);
// } 

// Iterate through the list and print
// 1. William
// 2. John
// 3. Amanda
Names.forEach(function(item:any, index:number) { 
    console.log(index + 1 + ". " + item);               
});        

Names.splice(1,1);    // Remove the 2nd element

// Iterate through the list in a reversed order and print out each name
// Amanda
// William
for (let j = Names.length-1; j >= 0; j--) {
        console.log(Names[j]);
}; 

Names.splice(0, Names.length);   // Remove all elements
console.log(Names);