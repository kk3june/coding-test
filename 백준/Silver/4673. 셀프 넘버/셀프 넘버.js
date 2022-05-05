const arr = [];
let selfNum = "";
let num = 0;

for (let i = 1; i <= 10000; i++) {
  num += i;
  for (let j = 0; j < i.toString().length; j++) {
    num += +i.toString()[j];
  }
  arr.push(num);
  num = 0;
}

for (let k = 1; k <= 10000; k++) {
  if (arr.indexOf(k) === -1) {
    selfNum += k + "\n";
  }
}

console.log(selfNum);