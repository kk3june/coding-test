const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let num = 0;

for (let i = 0; i < +input[0]; i++) {
  num += parseInt(input[1][i]);
}

console.log(num);
