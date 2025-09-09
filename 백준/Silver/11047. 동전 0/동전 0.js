
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(' ').map(it => Number(it));
const coins = input.slice(1).map(it => Number(it));

function solution() {
  let count = 0;
  let remaining = K;

  for (let i = coins.length - 1; i >= 0; i--) {
    if (remaining === 0) break;
    
    let useCount = Math.floor(remaining / coins[i]);
    
    count += useCount;
    remaining -= coins[i] * useCount;
  }
  
  console.log(count);
}

solution();