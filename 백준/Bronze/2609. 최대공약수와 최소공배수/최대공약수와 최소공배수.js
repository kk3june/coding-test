const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
input.sort((a,b) => a-b);
const a = input[0];
const b = input[1];

function solution(a,b) {
    // 최대공약수
    const gcd = (a,b) => a % b === 0 ? b : gcd(b, a% b);
    // 최소공배수
    const lcm = (a,b) => a * b / gcd(a,b);
    
    console.log(gcd(a,b) + '\n' + lcm(a,b))
}

solution(a,b);