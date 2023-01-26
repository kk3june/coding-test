const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const arr = input.map(el => el.split(' ').map(Number));

function solution(arr){
  let n = arr.length;
  
  for(let i = 0; i < n; i++) {
    const a = arr[i][0];
    const b = arr[i][1];
    
    // 마지막 줄에 0이 2개 이므로
    if(a === 0 && b === 0) return;
    
    if(Number.isInteger(b/a) && b/a > 0) console.log('factor');
    else if (Number.isInteger(a/b) && a/b > 0) console.log('multiple');
    else console.log('neither');
  }
}

solution(arr);