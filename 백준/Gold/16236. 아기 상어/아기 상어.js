const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = +input[0];
const map = input.slice(1).map(line => line.split(" ").map(Number));

const dx = [-1, 0, 0, 1]; // 위, 왼, 오른, 아래 (문제 조건에 따라 이 순서가 중요)
const dy = [0, -1, 1, 0];

let sx, sy, size = 2, eat = 0;
let time = 0;

// 상어 위치 찾기
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (map[i][j] === 9) {
            sx = i;
            sy = j;
            map[i][j] = 0; // 상어 자리 빈 칸 처리
        }
    }
}

// BFS: 현재 상어 위치에서 모든 칸까지 최단거리 계산 + 먹을 수 있는 물고기 수집
function bfs(startX, startY, size) {
    const dist = Array.from({ length: N }, () => Array(N).fill(-1));
    const queue = [];

    queue.push([startX, startY]);
    dist[startX][startY] = 0;

    const fishes = [];

    while (queue.length) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
            if (dist[nx][ny] !== -1) continue;
            if (map[nx][ny] > size) continue; // 지나갈 수 없는 칸

            dist[nx][ny] = dist[x][y] + 1;

            // 먹을 수 있는 물고기
            if (map[nx][ny] > 0 && map[nx][ny] < size) {
                fishes.push([nx, ny, dist[nx][ny]]);
            }

            queue.push([nx, ny]);
        }
    }

    return fishes;
}

// 시뮬레이션 시작
while (true) {
    // 1. BFS로 현재 상어 위치에서 먹을 수 있는 물고기 탐색
    const fishes = bfs(sx, sy, size);

    // 2. 아무 물고기도 없으면 종료
    if (fishes.length === 0) break;

    // 3. 우선순위 정렬: 거리 → x(행) → y(열)
    fishes.sort((a, b) => {
        if (a[2] !== b[2]) return a[2] - b[2];  // 거리 오름차순
        if (a[0] !== b[0]) return a[0] - b[0];  // 위쪽 우선
        return a[1] - b[1];                     // 왼쪽 우선
    });

    // 4. 가장 우선순위 높은 물고기 선택
    const [fx, fy, dist] = fishes[0];

    // 5. 이동 거리 추가
    time += dist;

    // 6. 물고기 먹기
    eat += 1;
    map[fx][fy] = 0;

    // 7. 상어의 크기 증가 여부 체크
    if (eat === size) {
        size += 1;
        eat = 0;
    }

    // 8. 상어 위치 갱신
    sx = fx;
    sy = fy;
}

// 최종 시간 출력
console.log(time);
