const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(' ').map(Number);
const smallStones = new Set();

// 작은 돌들을 Set에 저장 (빠른 검색을 위해)
for (let i = 1; i <= M; i++) {
    smallStones.add(Number(input[i]));
}

function solution() {
    // dp[위치][속도] = 해당 위치에 해당 속도로 도달하는 최소 점프 횟수
    // 속도의 최댓값을 구해보자: sqrt(N) 정도면 충분
    const maxSpeed = Math.ceil(Math.sqrt(2 * N)) + 1;
    const dp = Array(N + 1).fill().map(() => Array(maxSpeed + 1).fill(Infinity));
    
    // 시작점: 1번 돌, 속도 0, 점프 횟수 0
    dp[1][0] = 0;
    
    for (let pos = 1; pos < N; pos++) {
        // 작은 돌이면 건너뛰기
        if (smallStones.has(pos)) continue;
        
        for (let speed = 0; speed <= maxSpeed; speed++) {
            // 현재 상태가 불가능한 경우
            if (dp[pos][speed] === Infinity) continue;
            
            // 다음 점프는 speed-1, speed, speed+1 가능
            for (let nextSpeed = speed - 1; nextSpeed <= speed + 1; nextSpeed++) {
                // 속도는 최소 1 이상이어야 함
                if (nextSpeed <= 0) continue;
                if (nextSpeed > maxSpeed) continue;
                
                const nextPos = pos + nextSpeed;
                
                // 범위를 벗어나면 건너뛰기
                if (nextPos > N) continue;
                
                // 작은 돌이면 건너뛰기
                if (smallStones.has(nextPos)) continue;
                
                // DP 업데이트
                dp[nextPos][nextSpeed] = Math.min(
                    dp[nextPos][nextSpeed], 
                    dp[pos][speed] + 1
                );
            }
        }
    }
    
    // N번 돌에 도달하는 최소 점프 횟수 찾기
    let result = Infinity;
    for (let speed = 1; speed <= maxSpeed; speed++) {
        result = Math.min(result, dp[N][speed]);
    }
    
    return result === Infinity ? -1 : result;
}

console.log(solution());