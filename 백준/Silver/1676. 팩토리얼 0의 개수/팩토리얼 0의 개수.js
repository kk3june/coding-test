const input = require('fs').readFileSync('dev/stdin').toString().trim();

function solution(n) {
    let count = 0;
    for(let i = 5; i <= n; i*=5) {
        count += Math.floor(n/i)
    }
    return count;
}

console.log(solution(parseInt(input)));

