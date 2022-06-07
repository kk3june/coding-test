const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let num = input;
let division = 2;
let answer = '';

while (division <= num) {
  if (num % division === 0) {
    answer += division + '\n';
    num = num / division;
    division = 2;
  } else {
    division++;
  }
}

console.log(answer);
