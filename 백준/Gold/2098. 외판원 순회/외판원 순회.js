const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const map = input.slice(1).map(row => row.split(' ').map(num => parseInt(num)));

function solution() {
  // 메모이제이션용 배열: memo[현재위치][방문상태]
  const memo = Array(n).fill().map(() => Array(1 << n).fill(-1));
  
  function dp(현재위치, 방문상태) {
    // 1. 기저조건: 모든 도시를 방문했다면
    if (방문상태 === (1 << n) - 1) {
      if (map[현재위치][0] === 0) {
        return Infinity; // 출발점으로 갈 수 없다면
      }
      return map[현재위치][0]; // 출발점으로 가는 비용
    }
    
    // 2. 이미 계산한 값이 있다면 반환
    if (memo[현재위치][방문상태] !== -1) {
      return memo[현재위치][방문상태];
    }
    
    // 3. 아직 방문하지 않은 도시들을 하나씩 방문해보기
    let result = Infinity;
    
    for (let i = 0; i < n; i++) {
      // 아직 방문하지 않은 도시인가?
      if (!(방문상태 & (1 << i))) {
        // 현재 위치에서 i번 도시로 갈 수 있는가?
        if (map[현재위치][i] !== 0) {
          // 다음 방문상태: i번 도시를 방문표시
          let 다음방문상태 = 방문상태 | (1 << i);
          // 현재→i 비용 + i에서 나머지 순회 비용
          let 비용 = map[현재위치][i] + dp(i, 다음방문상태);
          result = Math.min(result, 비용);
        }
      }
    }
    
    // 4. 결과를 메모하고 반환
    memo[현재위치][방문상태] = result;
    return result;
  }
  
  // 도시 0에서 시작, 도시 0만 방문한 상태(1)에서 시작
  const answer = dp(0, 1);
  console.log(answer);
}

solution();