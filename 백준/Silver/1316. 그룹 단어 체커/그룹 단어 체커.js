const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const count = input[0];
let groupWordCount = 0;

for (let i = 1; i <= count; i++) {
  const word = input[i];
  const chkArr = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if (chkArr.indexOf(word[j]) === -1) {
      chkArr.push(word[j]);
    } else {
      if (chkArr.indexOf(word[j]) !== chkArr.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }
  if (isGroupWord) {
    groupWordCount++;
  }
}

console.log(groupWordCount);
