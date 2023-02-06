const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

const [n, m] = input;

function getShare(num, division) {
  let count = 0;
  while(num >= division) {
    count += parseInt(num/division);
    num /= division;
  }
  return count;
}

const two = getShare(n, 2) - getShare(n-m,2) - getShare(m,2);
const five = getShare(n, 5) - getShare(n-m,5) - getShare(m,5);

console.log(Math.min(two, five));