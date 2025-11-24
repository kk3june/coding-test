const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, L, R] = input[0].split(' ').map(Number);
const map = input.splice(1).map(it => it.split(' ').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(sr, sc, visited) {
    const queue = [[sr, sc]];
    const union = [[sr, sc]];
    visited[sr][sc] = true;

    let sum = map[sr][sc]; // 연합의 총 인구

    while (queue.length) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
            if (visited[nx][ny]) continue;

            const diff = Math.abs(map[x][y] - map[nx][ny]);

            if (diff >= L && diff <= R) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                union.push([nx, ny]);
                sum += map[nx][ny];
            }
        }
    }

    return { union, sum };
}

let days = 0;

while (true) {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    let moved = false; // 인구 이동 발생 여부

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            if (!visited[r][c]) {
                const { union, sum } = bfs(r, c, visited);

                // 연합이 1개면 의미 없음 → 그대로 유지
                if (union.length > 1) {
                    moved = true;
                    const newPop = Math.floor(sum / union.length);

                    // 연합 국가들에 인구 재분배
                    for (const [x, y] of union) {
                        map[x][y] = newPop;
                    }
                }
            }
        }
    }

    if (!moved) break; // 더 이상 인구 이동이 없으면 종료

    days++;
}

console.log(days);