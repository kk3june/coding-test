const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input[0];
let idx = 1;

for(let testCase = 0 ; testCase < T; testCase++) {
    const n = +input[idx];
    const coins = input[idx+1].split(' ').map(Number);
    const m = +input[idx+2];
    const dp = Array(m+1).fill(0);
    dp[0] = 1;
    
    for(let coin of coins) {
        for(let i = coin; i <= m; i++) {
            dp[i] += dp[i - coin];
        }
    }
    console.log(dp[m]);
    idx += 3;
}