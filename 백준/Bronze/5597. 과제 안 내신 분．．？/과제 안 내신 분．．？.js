const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
const sortedInput = input.map(el => parseInt(el)).sort((a,b) => a-b);
const answer = [];

for(let i = 0; i < sortedInput.length; i++) {
   if( i+1 !== sortedInput[i]) {
     sortedInput.splice(i, 0, i+1);
     answer.push(i+1)
     if(answer.length >= 2) break;
   }
}

console.log(answer.join('\n'))