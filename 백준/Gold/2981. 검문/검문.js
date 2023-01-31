const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
const N = +input.shift();

function solution(arr){
  const answer = [];
  arr.sort((a,b) => a - b);
  
  // 최대공약수 gcd 구하기
  const getGcd = (a, b) => a % b === 0 ? b : getGcd(b, a % b);
  let gcd = arr[1] - arr[0];
  for(let i = 0; i < N -1; i++) {
    gcd = getGcd(arr[i+1] - arr[i], gcd)
  }
  
  for(let j = 2; j <= gcd; j++) {
    if(gcd % j === 0) answer.push(j);
  }
  
  console.log(answer.join(' '))
}

solution(input);