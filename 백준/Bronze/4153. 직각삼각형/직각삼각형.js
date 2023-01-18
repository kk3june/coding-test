const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const arr = [];
let answer = [];

for(let line of input) {
  const values = line.split(' ').map(Number);
  values.sort((a,b) => a - b);
  arr.push(values);
}

for(let i = 0; i < input.length -1; i++) {
    if((arr[i][0] * arr[i][0]) + (arr[i][1] * arr[i][1]) === (arr[i][2] * arr[i][2])) answer.push('right')
    else answer.push('wrong')
}

console.log(answer.join('\n'));