const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const n = +input[0];
const m = +input[1];
let isPrimeNum = Array(m + 1).fill(true);
isPrimeNum[0] = isPrimeNum[1] = false;
answer = '';

function getPrimeNum() {
  for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
    if (isPrimeNum[i]) {
      let multiple = 2;
      while (i * multiple <= m) {
        isPrimeNum[i * multiple] = false;
        multiple++;
      }
    }
  }

  for (let i = n; i <= m; i++) {
    if (isPrimeNum[i]) {
      answer += i + '\n';
    }
  }

  console.log(answer);
}

getPrimeNum();
