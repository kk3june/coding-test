const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = Number(input);
const answer = [];
let cnt = 0;

function hanoi(num, from, other, to) {
  if (num === 0) {
    return;
  } else {
    hanoi(num - 1, from, to, other);
    answer.push([from, to]);
    cnt++;
    hanoi(num - 1, other, from, to);
  }
}

hanoi(N, "1", "2", "3");
console.log(cnt);
console.log(answer.map((v) => v.join(" ")).join("\n"));