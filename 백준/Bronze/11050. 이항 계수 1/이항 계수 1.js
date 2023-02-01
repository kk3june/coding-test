const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
const n = input[0];
const k = input[1];

let numerator = 1;
let denominator = 1;

for(let i = n; i > 0; i--) {
  numerator *= i;
}

for(let j = n-k; j > 0; j--) {
  denominator *= j;
}

for(let l = k; l > 0; l--){
  denominator *= l;
}

console.log(numerator / denominator);