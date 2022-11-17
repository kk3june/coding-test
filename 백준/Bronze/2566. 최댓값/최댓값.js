const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(el => el.split(' '));

let answer = 0;
let position = '';
for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++){
        if(parseInt(input[i][j]) >= answer) {
          answer = parseInt(input[i][j]);
          position = (i+1) + ' ' + (j+1)
        }
    }
}
answer += '\n' + position;
console.log(answer);
