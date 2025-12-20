const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const office = [];
const cctvs = [];

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const directions = {
  1: [[0], [1], [2], [3]],
  2: [[0, 2], [1, 3]],
  3: [[0, 1], [1, 2], [2, 3], [3, 0]],
  4: [[0, 1, 2], [1, 2, 3], [2, 3, 0], [3, 0, 1]],
  5: [[0, 1, 2, 3]]
};

for (let i = 0; i < N; i++) {
  office[i] = input[i + 1].split(' ').map(Number);
  for (let j = 0; j < M; j++) {
    if (office[i][j] >= 1 && office[i][j] <= 5) {
      cctvs.push({ type: office[i][j], x: i, y: j });
    }
  }
}

function watch(map, x, y, dir) {
  let nx = x + dx[dir];
  let ny = y + dy[dir];
  
  while (nx >= 0 && nx < N && ny >= 0 && ny < M) {
    if (map[nx][ny] === 6) break;
    if (map[nx][ny] === 0) {
      map[nx][ny] = '#';
    }
    nx += dx[dir];
    ny += dy[dir];
  }
}

function copyMap(map) {
  return map.map(row => [...row]);
}

function countBlindSpot(map) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 0) count++;
    }
  }
  return count;
}

let answer = Infinity;

function dfs(idx, map) {
  if (idx === cctvs.length) {
    answer = Math.min(answer, countBlindSpot(map));
    return;
  }
  
  const { type, x, y } = cctvs[idx];
  
  for (const dirs of directions[type]) {
    const newMap = copyMap(map);
    
    for (const dir of dirs) {
      watch(newMap, x, y, dir);
    }
    
    dfs(idx + 1, newMap);
  }
}

dfs(0, office);
console.log(answer);