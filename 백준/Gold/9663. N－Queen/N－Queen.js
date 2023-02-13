const input = require('fs').readFileSync('dev/stdin').toString().trim();
const N = Number(input);

function countNQueens(n) {
    let count = 0;
    let positions = Array.from({ length: n }, () => -1);

    function isValid(row, col) {
        // Check if there is a queen in the same column
        for (let i = 0; i < row; i++) {
            if (positions[i] === col) {
                return false;
            }
        }

        // Check diagonals
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (positions[i] === j) {
                return false;
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (positions[i] === j) {
                return false;
            }
        }
        return true;
    }

    function placeQueens(row) {
        if (row === n) {
            count++;
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                positions[row] = col;
                placeQueens(row + 1);
                positions[row] = -1;
            }
        }
    }

    placeQueens(0);
    return count;
}

console.log(countNQueens(N));
