const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(el => +el).sort((a,b) => a - b);
let cnt = 0;
let sum = 0;

for(let i = 0; i < input.length; i++) {
    cnt++;
    sum += input[i];
}

console.log(sum / cnt);
console.log(input[(cnt-1)/2]);