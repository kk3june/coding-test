const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = input[0];
const arr = input.splice(1);

function solution() {
    if(n === 1) return console.log(arr[0]);
    
    const dp = Array.from({length: n+1}, () => [0, 0, 0]);
    
    dp[1][0] = 0;
    dp[1][1] = arr[0];
    dp[1][2] = 0;
    
    for(let i = 2; i <= n; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1], dp[i-1][2]);
        dp[i][1] = dp[i-1][0] + arr[i-1];
        dp[i][2] = dp[i-1][1] + arr[i-1];
    }
    
    console.log(Math.max(dp[n][0], dp[n][1], dp[n][2]));
}

solution();