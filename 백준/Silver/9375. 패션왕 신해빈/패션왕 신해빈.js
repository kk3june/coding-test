const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const T = +input.shift();
const answer = [];

// 각 테스트 케이스 배열로 관리하기
const clothes = [];
let count  = -1;
for(let i = 0; i < input.length; i++) {
  if(isNaN(+input[i])){
    clothes[count].push(input[i].split(' '))    
  } else {
    clothes.push([]);
    count++;
  }
}

// 테스트 케이스를 배열별로 나누어 로직구현
for(let i of clothes) {
  let cases = 1;
  const arr = i;
  const map = new Map();
  
  // 해당 테스트 케이스에서 존재하는 의상이라면 경우의 수를 +1, 아니라면 map 에 의상 추가
  for(let j = 0; j < arr.length; j++) {
    !map.has(arr[j][1]) ? map.set(arr[j][1], 1) : map.set(arr[j][1], map.get(arr[j][1]) + 1);
  }
  
  // 각 의상별 경우의 수를 가지고 조합가능한 경우의 수 구하기
  for(let k of map.values()) {
    cases *= k + 1;
  }
  // 모든 의상을 안입는 경우가 있을 수 있으므로 -1
  answer.push(cases-1);
}

console.log(answer.join('\n'));
