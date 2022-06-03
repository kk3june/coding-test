const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const min = parseInt(input[0]);
const max = parseInt(input[1]);
const arr = [];
let sum = 0;
let result = "";

for (let i = min; i <= max; i++) {
  for (let j = 2; j <= i; j++) {
    if (i < 2) {
      break;
    }
    if (i % j === 0 && i === j) {
      arr.push(i);
    } else if (i % j === 0 && i !== j) {
      break;
    }
  }
}

for (let k = 0; k < arr.length; k++) {
  sum += arr[k];
}

if (sum === 0) {
  console.log(-1);
} else {
  result += sum + "\n" + arr[0];
  console.log(result);
}
