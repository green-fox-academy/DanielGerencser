// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
// let size:number = 4;
// let matrix: number[][] =[];
// let i: number,j: number;
// let zero: number = 0, one: number = 1;

// function drawMatrix(str:number[]) {
//     let matrix:any [][] = [];
//     for(let i = 0; i < size; i++){
//         matrix[i] = [];
//         for(let j = 0; j < size; j++) {
//             if (j == size - 1) {
//                 matrix[i][j] = 1;
//             }
//             else {
//                 matrix[i][j] = 1;
//             }
//         } 
//     return matrix;
//     }    
// }
// console.log(drawMatrix);

const matrixSize: number = 5;

const matrix: number[][] =[];
for(let i = 0; i < matrixSize; i++){
    const column: number[] = [];
    for (let j = 0; j < matrixSize ; j++){
        if(i + j === matrixSize - 1){
            column.push(1);
            }
            else {
            column.push(0);
            }
        }
matrix.push(column);
}
console.log(matrix);