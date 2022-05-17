const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const fixedCost = input[0];
const variableCost = input[1];
const revenue = input[2];

const output = revenue - variableCost;
if (output <= 0) {
  console.log(-1);
} else {
  console.log(Math.floor(fixedCost / output) + 1);
}
