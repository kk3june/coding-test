const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(Number).sort((a,b) => a - b);

function solution(arr){
    if(N === 1) console.log(arr[0] * arr[0])
    else console.log(arr[0] * arr[arr.length-1])
}
solution(arr)