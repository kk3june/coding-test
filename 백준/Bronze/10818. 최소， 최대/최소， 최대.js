const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[1].split(' ');
const result = [];

for(let i = 0; i < +input[0]; i++) {
    result.push(+arr[i]);
}

result.sort(function(a, b) {
  	return a - b;
});
console.log(result[0] + ' ' + result[input[0] - 1]);

