const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = input[0];
const arr = input[1].split(" ");
let count = 0;

for (let i = 0; i < testCase; i++) {
  const num = arr[i];
  let j = 2;

  while (j <= num) {
    if (num < 2) {
      break;
    }
    if (num % j === 0 && j === +num) {
      count++;
    } else if (num % j === 0 && j !== +num) {
      break;
    }

    j++;
  }

}
  console.log(count);