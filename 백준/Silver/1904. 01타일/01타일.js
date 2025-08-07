const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = +input;

function solution(n) {
    if(n===1) return 1;
    if(n===2) return 2;
    
    let prev1 = 1;
    let prev2 = 2;
    let current = 0;
    
    for(let i = 3; i <= n; i++) {
        current = (prev1 + prev2) % 15746;
        prev1 = prev2;
        prev2 = current;
    }
    
    return current;
}

console.log(solution(N));
