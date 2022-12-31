const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
input.shift();
const newArr = input.map(el => el.split(' ').map(num => parseInt(num)));
const k = [];

for(let i = 0; i < newArr.length; i++) {
    let cnt = 0;
    for(let j = 0; j < newArr.length; j++) {
        if(i !== j) {
            if(newArr[i][0] < newArr[j][0] && newArr[i][1] < newArr[j][1]) {
                cnt++;
            }
        }
    }
    k.push(cnt+1);
}

console.log(k.join(' '));