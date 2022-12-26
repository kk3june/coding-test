const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
input.shift();
let answer = '';
//1. 좌표 배열 정렬하기
const arr = input[0].split(' ').map(el => parseInt(el));

//2. index 값 찾기 위한 lineUp 배열 만들기
const setArr = new Set(arr)
const lineUp = [...setArr].sort((a,b) => a-b);

//3. idx 찾기 위한 hashMap 생성
const hashMap = {};
lineUp.forEach((el,idx) => hashMap[el] = idx);

//4. hashMap 활용하여 arr의 idx 값 활용하여 answer string 만들기
arr.forEach(el => answer += hashMap[el] + ' ');
console.log(answer)

