const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const arrN = new Set(input.slice(0, n));
const arrM = input.slice(n);
let answer = 0;
for(let i = 0; i < m; i++) {
    if(arrN.has(arrM[i])) answer++;
}

console.log(answer);