const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const num = +input[0] * +input[1] * +input[2];

const length = num.toString().length;
for (let i = 0; i <= 9; i++) {
  let count = 0;
  for (let j = 0; j < length; j++) {
    if (i == num.toString()[j]) {
      count++;
    }
  }
  console.log(count);
}
