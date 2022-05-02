const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let avg = 0;
const arr = input[1].split(" ").map((el) => parseInt(el));

for (let i = 0; i < input[0]; i++) {
  avg += (arr[i] / Math.max(...arr)) * 100;
}

console.log(avg / input[0]);
