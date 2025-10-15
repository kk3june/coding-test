const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const n = input[0]
const scores = input.slice(1);

function solution() {
    const dp = Array.from({length: n+1}, () => [0,0]);
    if (n === 1) {
        console.log(scores[0]);
        return;
    }
    
    dp[1][0] = scores[0];
    dp[1][1] = 0;
    dp[2][0] = scores[1];
    dp[2][1] = scores[0] + scores[1];
    
    for(let i = 3; i <= n; i++) {
        dp[i][0] = Math.max(dp[i-2][0], dp[i-2][1]) + scores[i-1];
        dp[i][1] = dp[i-1][0] + scores[i-1];
    }
    
    console.log(Math.max(dp[n][0], dp[n][1]))
}

solution();