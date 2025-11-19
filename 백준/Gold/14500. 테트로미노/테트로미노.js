const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(line => line.split(' ').map(Number));

const dr = [-1, 1, 0, 0]; // 상, 하, 좌, 우
const dc = [0, 0, -1, 1];

let visited = Array.from({ length: N }, () => Array(M).fill(false));
let answer = 0;

// 보드에서 가장 큰 값 (가지치기용)
let maxCell = 0;
for (let r = 0; r < N; r++) {
  for (let c = 0; c < M; c++) {
    if (board[r][c] > maxCell) maxCell = board[r][c];
  }
}

function inside(r, c) {
  return r >= 0 && r < N && c >= 0 && c < M;
}

// 깊이 4까지 DFS: 대부분의 테트로미노 모양 커버
function dfs(r, c, depth, sum) {
  // 가지치기: 남은 칸 모두 최대값이라 가정해도 이미 answer보다 작으면 중단
  if (sum + maxCell * (4 - depth) <= answer) return;

  if (depth === 4) {
    if (sum > answer) answer = sum;
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];

    if (!inside(nr, nc)) continue;
    if (visited[nr][nc]) continue;

    visited[nr][nc] = true;
    dfs(nr, nc, depth + 1, sum + board[nr][nc]);
    visited[nr][nc] = false;
  }
}

// ㅗ / ㅜ / ㅓ / ㅏ 모양만 따로 처리
function checkExtra(r, c) {
  // 중심 (r, c)를 기준으로 + 모양의 팔 네 개 중 3개를 선택
  let center = board[r][c];
  let arms = [];

  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];
    if (inside(nr, nc)) {
      arms.push(board[nr][nc]);
    }
  }

  // 팔이 3개 미만이면 ㅗ 모양을 만들 수 없음
  if (arms.length < 3) return;

  const sumArms = arms.reduce((a, b) => a + b, 0);

  if (arms.length === 3) {
    // 딱 3개면 모두 사용하는 한 가지 모양
    const total = center + sumArms;
    if (total > answer) answer = total;
  } else {
    // 4개면 그 중 하나를 빼서 4가지 ㅗ 모양(ㅗㅜㅓㅏ)
    for (let i = 0; i < 4; i++) {
      const total = center + (sumArms - arms[i]);
      if (total > answer) answer = total;
    }
  }
}

// 전체 보드를 돌면서 시작점으로 사용
for (let r = 0; r < N; r++) {
  for (let c = 0; c < M; c++) {
    visited[r][c] = true;
    dfs(r, c, 1, board[r][c]); // DFS로 경로 기반 도형들 검사
    visited[r][c] = false;

    checkExtra(r, c); // ㅗ 계열 도형 검사
  }
}

console.log(answer);
