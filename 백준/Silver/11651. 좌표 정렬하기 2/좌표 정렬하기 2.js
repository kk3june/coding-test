const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const arr = [];
input.map((el,idx) => {
    if(idx !== 0) arr.push(el.split(' '));
})

arr.sort((a,b) => {
  if(a[1] === b[1]){return a[0] - b[0]} 
  else {return a[1] - b[1]}
})

let answer = ''
arr.forEach(el => answer += el.join(' ') + '\n')

console.log(answer);