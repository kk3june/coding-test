const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const go = input[0];
const back = input[1];
const distance = input[2];
const firstDay = distance - go;
let days = 1;

console.log(Math.ceil(firstDay / (go - back)) + 1);