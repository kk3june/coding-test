const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let TC = 0;

function sol() {
  let answer = '';
  
  while (1) {
    let n = +input[TC++];
    if (n === 0) break;

    let cnt = 0;
    for (let i = n + 1; i <= 2 * n; i++) {
      if (isPrime(i)) cnt++;
    }
    answer += `${cnt}\n`;
  }
  return answer;
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(sol().trim());