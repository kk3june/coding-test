const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const newArr = [];
let max = 0;

for (let i = 0; i < input.length; i++) {
  const originNum = input[i];
  const newNum = [];

  for (let j = originNum.length - 1; j >= 0; j--) {
    newNum.push(originNum[j]);
  }
  newArr.push(newNum.join(""));

  if (max < newArr[i]) {
    max = newArr[i];
  }
}

console.log(max);
