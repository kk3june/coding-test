const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(el => Number(el))
const numbers = input[0];
const answer = [];
const arr = [];
input.forEach((el,idx) => {
  if(idx !== 0) arr.push(el)
})

// 배열 오름차순 정렬
arr.sort((a,b) => a-b);

// 산출평균
let sum = arr.reduce((a,b) => a +b, 0);
let avg = sum/numbers
answer.push(Math.round(avg));

//중앙값
let median = null;
if(numbers % 2 !== 0) {
  let medianIdx = Math.floor(numbers/2);
  median = arr[medianIdx];
} else {
  let medianNumber = Math.floor(numbers/2)
  median = (arr[medianNumber] + arr[medianNumber+1])/2
}
answer.push(median)

// 최빈값
let mode = null;
const obj = {};
for(let num of arr) {
  if(obj[num]) {
    ++obj[num]
  } else {
    obj[num] = 1;
  }
}
let modeNum = Math.max.apply(null,Object.values(obj));
let modeArr = [];
for (let key in obj) {
  if(modeNum === obj[key]) {
    modeArr.push(key);
  }
}
modeArr.sort((a,b) => a-b);
if(modeArr.length > 1) mode = modeArr[1];
else mode = modeArr[0];
answer.push(+mode)


// 범위
let boundary = null;
if(arr[0] < 0 && arr[arr.length-1] < 0) {
  boundary = arr[arr.length-1] + arr[0]*-1;
} else if (arr[0] < 0 && arr[arr.length-1] > 0){
   boundary = arr[arr.length-1] + arr[0]*-1
} else {
  boundary = arr[arr.length-1] - arr[0];
} 
answer.push(boundary)

console.log(answer.join('\n'));


