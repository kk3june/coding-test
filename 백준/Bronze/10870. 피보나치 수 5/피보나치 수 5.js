const input = require('fs').readFileSync('dev/stdin').toString();

const num = parseInt(input);
const arr = [];

for (let i = 0; i <= num; i++) {
  if (i === 0) {
    arr[i] = 0;
  } else if (i === 1 || i === 2) {
    arr[i] = 1;
  } else {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
}

console.log(arr[num]);
