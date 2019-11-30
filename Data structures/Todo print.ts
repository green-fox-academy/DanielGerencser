'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

let todoText: string = ' - Buy milk\n';

todoText = "My Todo:\n".concat(todoText).concat(" - Download games\n").concat("\t- Diablo");

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo


console.log(todoText);