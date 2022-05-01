const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let arr = input.map((el) => el % 42);
let set = new Set(arr);
const result = [...set];

console.log(result.length);