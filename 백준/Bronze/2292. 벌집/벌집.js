const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let count = 1;
let num = 1;

for (let i = 1; num < input; i++) {
  num += 6 * i;
  count++;
}

console.log(count);
