const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [R, C] = input[0].split(' ').map(Number);
const board = [];
for (let i = 1; i <= R; i++) {
  board.push(input[i].split(''));
}

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
const visited = new Array(26).fill(false);
let answer = 0;

function dfs(x, y, count) {
  answer = Math.max(answer, count);
  
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    
    if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
      const nextAlpha = board[nx][ny].charCodeAt(0) - 65;
      
      if (!visited[nextAlpha]) {
        visited[nextAlpha] = true;
        dfs(nx, ny, count + 1);
        visited[nextAlpha] = false;
      }
    }
  }
}

visited[board[0][0].charCodeAt(0) - 65] = true;
dfs(0, 0, 1);
console.log(answer);