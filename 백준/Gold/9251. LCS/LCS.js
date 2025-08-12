const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const str1 = input[0];
const str2 = input[1];

function solution(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m+1).fill().map(() => Array(n+1).fill(0));
    
    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            if(str1[i-1] === str2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    console.log(dp[m][n]);
}

solution(str1, str2); 