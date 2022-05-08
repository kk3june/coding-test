const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const toLower = input.toLowerCase();

const arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let result = "";


for (let i = 0; i < arr.length; i++) {
  result += toLower.indexOf(arr[i]) + " ";
}

console.log(result);
