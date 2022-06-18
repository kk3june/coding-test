const input = require('fs').readFileSync('/dev/stdin').toString();

const num = parseInt(input);
let result = 1;
for (let i = 1; i <= num; i++) {
  result *= i;
}

console.log(result);
