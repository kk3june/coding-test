const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = Number(input.shift());
let apt = [];
let answer = "";

for (let i = 0; i < testCase * 2; i = i + 2) {
  const k = input[i]; // 1
  const n = input[i + 1]; // 3
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  apt.push(arr);

  for (let i = 1; i <= k; i++) {
    let sum = 0;
    arr = [];
    for (let j = 1; j <= n; j++) {
      sum = sum + apt[i - 1][j - 1];
      arr.push(sum);
    }
    apt.push(arr);
  }
  answer += apt[k][n - 1] + "\n";
  // testCase 별 초기화
  apt = [];
}

console.log(answer);
