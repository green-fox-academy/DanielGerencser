'use strict';

// /* <-- Comment / uncomment this line
const size = 5;

const diagonalMatrix: number[][] = [];
for (let i = 0; i < size; i++) {
  const row: number[] = [];
  for (let j = 0; j < size; j++) {
    if (i + j === size - 1) {
      row.push(1);
    } else {
      row.push(0);
    }
  }
  diagonalMatrix.push(row);
}

console.log(diagonalMatrix);
// */

/* <-- Comment / uncomment this line
const size = 3;
const defaultElement = 0;
const diagonalElement = 1;
const diagonalMatrix: number[][] = [];
for (let i = 0; i < size; i++) {
  const row: number[] = [];
  for (let j = 0; j < size; j++) {
    if (i + j === size - 1) {
      row.push(diagonalElement);
    } else {
      row.push(defaultElement);
    }
  }
  diagonalMatrix.push(row);
}
console.log(diagonalMatrix);
// */

/* <-- Comment / uncomment this line
function createDiagonalMatrix(size: number, defaultElement: number, diagonalElement: number): number[][] {
  const diagonalMatrix: number[][] = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      if (i + j === size - 1) {
        row.push(diagonalElement);
      } else {
        row.push(defaultElement);
      }
    }
    diagonalMatrix.push(row);
  }
  return diagonalMatrix;
}
const size = 3;
const defaultElement = 0;
const diagonalElement = 1;
console.log(createDiagonalMatrix(size, defaultElement, diagonalElement));
// */

/* <-- Comment / uncomment this line
function isPositionOnDiagonal(rowIndex: number, columnIndex: number, size: number): boolean {
  return rowIndex + columnIndex + 1 === size;
}
function createDiagonalMatrix(size: number, defaultElement: number, diagonalElement: number): number[][] {
  const diagonalMatrix: number[][] = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      if (isPositionOnDiagonal(i, j, size)) {
        row.push(diagonalElement);
      } else {
        row.push(defaultElement);
      }
    }
    diagonalMatrix.push(row);
  }
  return diagonalMatrix;
}
const size = 3;
const defaultElement = 0;
const diagonalElement = 1;
console.log(createDiagonalMatrix(size, defaultElement, diagonalElement));
// */

/* <-- Comment / uncomment this line
function isPositionOnDiagonal(rowIndex: number, columnIndex: number, size: number): boolean {
  return rowIndex + columnIndex + 1 === size;
}
function createDiagonalMatrixRow(size: number, rowIndex: number, defaultElement: number, diagonalElement: number): number[] {
  const row = [];
  for (let j = 0; j < size; j++) {
    if (isPositionOnDiagonal(j, rowIndex, size)) {
      row.push(diagonalElement);
    } else {
      row.push(defaultElement);
    }
  }
  return row;
}
function createDiagonalMatrix(size: number, defaultElement: number, diagonalElement: number): number[][] {
  const diagonalMatrix: number[][] = [];
  for (let i = 0; i < size; i++) {
    diagonalMatrix.push(createDiagonalMatrixRow(size, i, defaultElement, diagonalElement));
  }
  return diagonalMatrix;
}
const size = 3;
const defaultElement = 0;
const diagonalElement = 1;
console.log(createDiagonalMatrix(size, defaultElement, diagonalElement));
// */


/* <-- Comment / uncomment this line
function isPositionOnDiagonal(rowIndex: number, columnIndex: number, size: number): boolean {
  return rowIndex + columnIndex + 1 === size;
}
function createDiagonalMatrixRow<T>(size: number, rowIndex: number, defaultElement: T, diagonalElement: T): T[] {
  const row = [];
  for (let j = 0; j < size; j++) {
    if (isPositionOnDiagonal(j, rowIndex, size)) {
      row.push(diagonalElement);
    } else {
      row.push(defaultElement);
    }
  }
  return row;
}
function createDiagonalMatrix<T>(size: number, defaultElement: T, diagonalElement: T): T[][] {
  const diagonalMatrix: T[][] = [];
  for (let i = 0; i < size; i++) {
    diagonalMatrix.push(createDiagonalMatrixRow(size, i, defaultElement, diagonalElement));
  }
  return diagonalMatrix;
}
const size = 3;
const defaultElement = 0;
const diagonalElement = 1;
console.log(createDiagonalMatrix(size, defaultElement, diagonalElement));
// */

/* <-- Comment / uncomment this line
function isPositionOnDiagonal(rowIndex: number, columnIndex: number, size: number): boolean {
  return rowIndex + columnIndex + 1 === size;
}
function createDiagonalMatrixRow<T>(size: number, rowIndex: number, defaultElement: T, diagonalElement: T): T[] {
  const row: T[] = [];
  Array.from({ length: size })
    .forEach(function (_, i) {
      if (isPositionOnDiagonal(i, rowIndex, size)) {
        row.push(diagonalElement);
      } else {
        row.push(defaultElement);
      }
    });
  return row;
}
function createDiagonalMatrix<T>(size: number, defaultElement: T, diagonalElement: T): T[][] {
  const diagonalMatrix: T[][] = [];
  Array.from({ length: size})
    .forEach(function (_, i) {
      diagonalMatrix.push(createDiagonalMatrixRow(size, i, defaultElement, diagonalElement));
    });
  return diagonalMatrix;
}
const size = 3;
const defaultElement = 0;
const diagonalElement = 1;
console.log(createDiagonalMatrix(size, defaultElement, diagonalElement));
// */

/* <-- Comment / uncomment this line
function isPositionOnDiagonal(rowIndex: number, columnIndex: number, size: number): boolean {
  return rowIndex + columnIndex + 1 === size;
}
function createDiagonalMatrixRow<T>(size: number, rowIndex: number, defaultElement: T, diagonalElement: T): T[] {
  return Array.from({ length: size })
    .map(function (_, i) {
      if (isPositionOnDiagonal(i, rowIndex, size)) {
        return diagonalElement;
      } else {
        return defaultElement;
      }
    });
}
function createDiagonalMatrix<T>(size: number, defaultElement: T, diagonalElement: T): T[][] {
  return Array.from({ length: size})
    .map(function (_, i) {
      return createDiagonalMatrixRow(size, i, defaultElement, diagonalElement);
    });
}
const size = 3;
const defaultElement = 0;
const diagonalElement = 1;
console.log(createDiagonalMatrix(size, defaultElement, diagonalElement));
// */

/* <-- Comment / uncomment this line
function isPositionOnDiagonal(rowIndex: number, columnIndex: number, size: number): boolean {
  return rowIndex + columnIndex + 1 === size;
}
function createDiagonalMatrixRow<T>(size: number, rowIndex: number, defaultElement: T, diagonalElement: T): T[] {
  return Array.from({ length: size })
    .map(function (_, i) {
      return isPositionOnDiagonal(i, rowIndex, size) ? diagonalElement : defaultElement;
    });
}
function createDiagonalMatrix<T>(size: number, defaultElement: T, diagonalElement: T): T[][] {
  return Array.from({ length: size})
    .map(function (_, i) {
      return createDiagonalMatrixRow(size, i, defaultElement, diagonalElement);
    });
}
const size = 3;
const defaultElement = 0;
const diagonalElement = 1;
console.log(createDiagonalMatrix(size, defaultElement, diagonalElement));
// */

/*
function isPositionOnDiagonal(rowIndex: number, columnIndex: number, size: number): boolean {
  return rowIndex + columnIndex + 1 === size;
}
function createDiagonalMatrixRow<T>(size: number, rowIndex: number, defaultElement: T, diagonalElement: T): T[] {
  return Array.from({ length: size })
    .map((_, i) => {
      return isPositionOnDiagonal(i, rowIndex, size) ? diagonalElement : defaultElement;
    });
}
function createDiagonalMatrix<T>(size: number, defaultElement: T, diagonalElement: T): T[][] {
  return Array.from({ length: size})
    .map((_, i) => {
      return createDiagonalMatrixRow(size, i, defaultElement, diagonalElement);
    });
}
const size = 3;
const defaultElement = 0;
const diagonalElement = 1;
console.log(createDiagonalMatrix(size, defaultElement, diagonalElement));
// */

/* <-- Comment / uncomment this line
function isPositionOnDiagonal(rowIndex: number, columnIndex: number, size: number): boolean {
  return rowIndex + columnIndex + 1 === size;
}
function createDiagonalMatrixRow<T>(size: number, rowIndex: number, defaultElement: T, diagonalElement: T): T[] {
  return Array.from({ length: size })
    .map((_, i) => isPositionOnDiagonal(i, rowIndex, size) ? diagonalElement : defaultElement);
}
function createDiagonalMatrix<T>(size: number, defaultElement: T, diagonalElement: T): T[][] {
  return Array.from({ length: size})
    .map((_, i) => createDiagonalMatrixRow(size, i, defaultElement, diagonalElement));
}
const size = 3;
const defaultElement = 0;
const diagonalElement = 1;
console.log(createDiagonalMatrix(size, defaultElement, diagonalElement));
// */

export {}