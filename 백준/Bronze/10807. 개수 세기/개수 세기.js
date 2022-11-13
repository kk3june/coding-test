const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ');
const target = input[2];
let answer = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) answer++;
}

console.log(answer);