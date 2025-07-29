const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(' ').map(Number);
const maps = input.slice(1).map(it => it.split('').map(Number));
const visited = Array(n).fill().map(() => Array(m).fill(false));

function solution() {
    const result = bfs();
    console.log(result);
}

function bfs() {
    const queue = [];
    let front = 0;
    let rear = 0;
    
    // 시작점 추가: [x, y, 거리]
    queue[rear++] = [0, 0, 1];
    visited[0][0] = true;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    while (front < rear) {
        const [x, y, dist] = queue[front++];
        
        // 도착점 체크
        if (x === n - 1 && y === m - 1) {
            return dist;
        }
        
        // 4방향 탐색
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            // 범위 체크 및 조건 확인
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && 
                !visited[nx][ny] && maps[nx][ny] === 1) {
                
                visited[nx][ny] = true;
                queue[rear++] = [nx, ny, dist + 1];
            }
        }
    }
    
    return -1; // 도착할 수 없는 경우 (문제에서는 항상 도착 가능)
}

solution();