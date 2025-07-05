const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0];
const arr = input.slice(1).map(it => it.split(' ').map(Number));
let white = 0;
let blue = 0;

function isSameColor(startRow, startCol, size) {
    const targetColor = arr[startRow][startCol];
    
    for(let i = startRow; i < startRow + size; i++) {
        for(let j = startCol; j < startCol + size; j++) {
            if(arr[i][j] !== targetColor) return false; 
        }
    }
    return true;
}

function divide(startRow, startCol, size) {
    if(isSameColor(startRow, startCol, size)){
        if(arr[startRow][startCol] == 0) white++
        else blue++;
        return;
    }
    const newSize = size / 2;
    divide(startRow, startCol, newSize);
    divide(startRow, startCol + newSize, newSize);
    divide(startRow + newSize, startCol, newSize);
    divide(startRow + newSize, startCol + newSize, newSize);
}

function solution() {
    divide(0, 0, +N);
    
    console.log(white);
    console.log(blue);
};

solution();