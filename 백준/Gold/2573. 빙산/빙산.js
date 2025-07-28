const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(' ').map(Number);
const iceberg = input.slice(1).map(line => line.split(' ').map(Number));

// 변화량 배열 초기화
const changes = Array(N).fill().map(() => Array(M).fill(0));

function calculateMelting(iceberg, changes) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (iceberg[i][j] > 0) {
                let seaCount = 0;
                
                for (let k = 0; k < 4; k++) {
                    const nx = i + dx[k];
                    const ny = j + dy[k];
                    
                    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
                        if (iceberg[nx][ny] === 0) {
                            seaCount++;
                        }
                    }
                }
                
                changes[i][j] = seaCount;
            }
        }
    }
}

function applyMelting(iceberg, changes) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            iceberg[i][j] = Math.max(0, iceberg[i][j] - changes[i][j]);
            changes[i][j] = 0;  // 초기화
        }
    }
}

function dfs(iceberg, visited, x, y) {
    visited[x][y] = true;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && 
            !visited[nx][ny] && iceberg[nx][ny] > 0) {
            dfs(iceberg, visited, nx, ny);
        }
    }
}

function countComponents(iceberg) {
    const visited = Array(N).fill().map(() => Array(M).fill(false));
    let count = 0;
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (iceberg[i][j] > 0 && !visited[i][j]) {
                dfs(iceberg, visited, i, j);
                count++;
                
                // 최적화: 2개 이상이면 바로 return
                if (count >= 2) {
                    return count;
                }
            }
        }
    }
    return count;
}

function solution() {
    let year = 0;
    
    while (true) {
        year++;
        
        // 1. 변화량 계산
        calculateMelting(iceberg, changes);
        
        // 2. 빙산 녹이기
        applyMelting(iceberg, changes);
        
        // 3. 연결 성분 개수 확인
        const components = countComponents(iceberg);
        
        if (components === 0) {
            console.log(0);  // 모든 빙산이 녹음
            return;
        }
        
        if (components >= 2) {
            console.log(year);  // 분리됨!
            return;
        }
        
        // components === 1이면 계속 반복
    }
}

solution();