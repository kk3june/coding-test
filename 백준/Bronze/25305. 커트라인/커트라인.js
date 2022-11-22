const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const firstInput = input[0].split(' ').map(el => +el);
const N = firstInput[0];
const k = firstInput[1];
const arr = input[1].split(' ').map(el => +el);

arr.sort((a,b) => b-a);
const winnerArr = [];
for(let i = 0; i< k; i++) {
    winnerArr.push(arr[i]);
}
console.log(winnerArr[k-1]);