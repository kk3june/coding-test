const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const UpperCase = input.toUpperCase();
const set = new Set(UpperCase);
const stringArr = [];
const counts = [];
let max = 0;

for (string of set) {
  stringArr.push(string);
}

for (let i = 0; i < stringArr.length; i++) {
  const target = stringArr[i];
  let pos = UpperCase.indexOf(target);
  let count = 0;

  while (pos !== -1) {
    count++;
    pos = UpperCase.indexOf(target, pos + 1);
  }
  counts.push(count);
}

max = [...counts].sort((a, b) => a - b)[counts.length - 1];

if (counts.indexOf(max) !== counts.lastIndexOf(max)) {
  console.log("?");
} else {
  console.log(stringArr[counts.indexOf(max)]);
}
