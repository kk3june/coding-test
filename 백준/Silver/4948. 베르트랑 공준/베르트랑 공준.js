const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let answer = '';

for (let i = 0; i < input.length; i++) {
  const num = parseInt(input[i]);
  const doubleNum = num * 2;
  let count = 0;

  if (num === 0) {
    break;
  }
  if (num === 1) {
    count++;
  }

  for (let j = num + 1; j < doubleNum; j++) {
    let isPrime = true;

    for (let k = 2; k <= Math.sqrt(j); k++) {
      if (j % k === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) count++;
  }

  answer += count + '\n';
}

console.log(answer);
