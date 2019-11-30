// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
let animals = ["koal", "pand", "zebr"];
// -  Add all elements an `"a"` at the end
animals.forEach(function(adda, i){
    animals[i] = animals[i] + "a";
}
);

console.log(animals);