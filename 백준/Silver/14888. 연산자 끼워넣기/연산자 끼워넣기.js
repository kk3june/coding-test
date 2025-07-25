const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const numbers = input[1].split(' ').map(Number);
const flag = input[2].split(' ').map(Number);
let min = Infinity;
let max = -Infinity;


function solution() {

  dfs(numbers[0], 1, flag[0], flag[1], flag[2], flag[3]);

  console.log(max ? max : 0)
  console.log(min ? min : 0)
};

function dfs(value, index, plus, minus, multiply, share) {
  if(index === numbers.length) {
    if(value > max) {
      max = value;
    } 
    if (value < min) {
      min = value;
    }
    return;
  } else {
    if(plus > 0 ){
      dfs(value + numbers[index], index + 1, plus - 1, minus, multiply, share);
    }
    if(minus > 0) {
      dfs(value - numbers[index], index + 1, plus, minus - 1, multiply, share);
    }
    if(multiply > 0 ) {
      dfs(value * numbers[index], index + 1, plus, minus, multiply -1, share);
    }
    if(share > 0) {
      dfs(parseInt(value / numbers[index]), index + 1, plus, minus, multiply, share - 1);
    }
  }
}

solution();