const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const own = new Set(input[1].split(' ').map(Number));
const chk = new Set(input[3].split(' ').map(Number));
let answer = '';

for(let num of chk) {
  if(own.has(num)) answer += 1 + ' ';
  else answer += 0 + ' ';
}

console.log(answer);