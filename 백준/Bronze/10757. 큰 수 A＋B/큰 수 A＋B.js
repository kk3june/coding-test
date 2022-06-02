const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let result = BigInt(input[0]) + BigInt(input[1]);
console.log(result.toString());
