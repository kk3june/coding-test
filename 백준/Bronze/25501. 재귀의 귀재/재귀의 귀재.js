const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
input.shift();
let answer = '';

input.forEach(el => isPalindrome(el, 0, 1));
              
function isPalindrome(str, cur, cnt) {
  const length = Math.floor(str.length / 2);
  if(cur >= length) {
    return answer += '1' + ' ' + cnt + '\n'
  } else {
    if(str[cur] === str[str.length - cur - 1]) isPalindrome(str, cur+1, cnt+1)
    else return answer += '0' + ' ' + cnt + '\n'
  }
}              
   
console.log(answer);