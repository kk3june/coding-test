const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const arr = input.map(el => el.split(' ').map(Number));
let answer = [];

const x = new Map();
const y = new Map();

for(let i = 0; i < arr.length; i++) {
  if(!x.get(arr[i][0])) {
    x.set(arr[i][0], 1);
  } else {
    x.set(arr[i][0], x.get(arr[i][0])+1)
  }
  if(!y.get(arr[i][1])) {
    y.set(arr[i][1], 1);
  } else {
    y.set(arr[i][1], y.get(arr[i][1])+1)
  }
}

for(let item of x) {
  if(item[1] !== 2) answer.push(item[0]);
}
for(let item of y) {
  if(item[1] !== 2) answer.push(item[0]);
}

console.log(answer.join(' '));
