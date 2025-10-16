const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const cost = input.splice(1).map(it => it.split(' ').map(Number));

function solution(){
  const dp = Array.from({length: n + 1}, () => [0,0,0]);
  dp[1][0] = cost[0][0];
  dp[1][1] = cost[0][1];
  dp[1][2] = cost[0][2];

  for(let i = 2; i <= n; i++) {
    dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + cost[i-1][0];
    dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + cost[i-1][1];
    dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + cost[i-1][2];
  }

  console.log(Math.min(dp[n][0], dp[n][1], dp[n][2]))
}

solution();