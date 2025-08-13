const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N,K] = input[0].split(' ').map(Number);
const products = input.slice(1).map(it => it.split(' ').map(Number));

const visited = Array(K).fill(false)
let maxValue = 0;

function solution() {
    const dp = Array(N+1).fill().map(() => Array(K+1).fill(0));
    
    for (let i = 1; i <= N; i++) {
        const [w, v] = products[i-1];
        for (let j = 1; j <= K; j++) {
            if (w <= j) {
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-w] + v);
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    
    console.log(dp[N][K]);
}

solution(0, visited, 0);