const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input[0];
let idx = 1;

for(let t = 0; t < T; t++) {
  const commands = input[idx++];
  const n = +input[idx++];
  const arrStr = input[idx++];
  
  let arr = [];
  if(n > 0) {
    arr = JSON.parse(arrStr);
  }
  
  let left = 0;
  let right = arr.length - 1;
  let isReversed = false;
  let error = false;
  
  for(let cmd of commands) {
    if(cmd === 'R') {
      isReversed = !isReversed;
    } else if(cmd === 'D') {
      if(left > right) {
        error = true;
        break;
      }
      
      if(isReversed) {
        right--;
      } else {
        left++;
      }
    }
  }
  
  if(error) {
    console.log('error');
  } else {
    const result = arr.slice(left, right + 1);
    
    if(isReversed) {
      result.reverse();
    }
    
    console.log('[' + result.join(',') + ']');
  }
}