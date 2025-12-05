const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const board = input.splice(1).map(it => it.split(' ').map(Number));
let answer = 0;

function getMax(b) {
    let max = 0;
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N ;j++) {
            max = Math.max(max, b[i][j]);
        }
    }
    return max;
}

function move(b, dir) {
    const combined = Array.from({length: N}, () => Array(N).fill(false));
    
    if(dir === 0) {    // 상
        for(let j = 0; j < N; j++) {
            for(let i = 1; i < N ; i++) {
                if(b[i][j] === 0) continue;
                let r = i;
                while(r > 0 && b[r-1][j] === 0) {
                    b[r-1][j] = b[r][j];
                    b[r][j] = 0;
                    r--;
                }
                if(r > 0 && b[r-1][j] === b[r][j] && !combined[r-1][j]) {
                    b[r-1][j] *= 2;
                    b[r][j] = 0;
                    combined[r-1][j] = true;
                }
            }
        }
    } else if (dir === 1) {    // 하
        for(let j = 0; j < N; j++){
            for(let i = N-2; i >= 0; i--) {
                if(b[i][j] === 0) continue;
                let r = i;
                while(r < N-1 && b[r+1][j] === 0) {
                    b[r+1][j] = b[r][j];
                    b[r][j] = 0;
                    r++;
                }
                if(r < N-1 && b[r+1][j] === b[r][j] && !combined[r+1][j]) {
                    b[r+1][j] *= 2;
                    b[r][j] = 0;
                    combined[r+1][j] = true;
                }
            }
        }
    } else if (dir === 2) {    //좌
        for(let i = 0; i < N; i++) {
            for(let j = 1; j < N; j++) {
                if(b[i][j] === 0) continue;
                let c = j;
                while(c > 0 && b[i][c-1] === 0) {
                    b[i][c-1] = b[i][c];
                    b[i][c] = 0;
                    c--;
                }
                if(c > 0 && b[i][c-1] === b[i][c] && !combined[i][c-1]) {
                    b[i][c-1] *= 2;
                    b[i][c] = 0;
                    combined[i][c-1] = true;
                }
            }
        }
    } else {    // 우
        for(let i = 0; i < N; i++) {
            for(let j = N-2; j >=0; j--) {
                if(b[i][j] === 0) continue;
                let c = j;
                while(c < N-1 && b[i][c+1] === 0) {
                    b[i][c+1] = b[i][c];
                    b[i][c] = 0;
                    c++;
                }
                if(c < N-1 && b[i][c+1] === b[i][c] && !combined[i][c+1]) {
                    b[i][c+1] *= 2;
                    b[i][c] = 0;
                    combined[i][c+1] = true;
                }
            }
        }
    }
    return b;
}

function dfs(b, depth) {
    if(depth === 5) {
        answer = Math.max(answer, getMax(b));
        return;
    }
    
    for(let dir = 0; dir < 4; dir++) {
        const newBoard = b.map(it => [...it]);
        move(newBoard, dir);
        dfs(newBoard, depth + 1);
    }
}

dfs(board, 0);
console.log(answer);


