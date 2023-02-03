const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = +input.shift();

function factorial(num) {
    if(num === 0 || num === 1) return 1
    else return num * factorial(num -1);
}

function combination(n, r) {
  return (factorial(n) / (factorial(n-r) * factorial(r)));
}

for(let i = 0; i < input.length; i++) {
    const [n, k] = input[i].split(' ').map(Number);
    console.log(Math.round(combination(k, n)))
}