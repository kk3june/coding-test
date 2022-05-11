const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = "";

for (let i = 1; i <= input[0]; i++) {
  let row = input[i].split(" ");

  for (let j = 0; j < row[1].length; j++) {
    let count = 0;

    while (count < row[0]) {
      result += row[1][j];
      count++;
    }
  }
  result += "\n";
}

console.log(result);
