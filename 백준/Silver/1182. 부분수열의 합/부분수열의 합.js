const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let count = 0;
function countArray(idx, sum, selected) {
    if(idx === n) {
        if(sum === s && selected > 0) count++;
        return;
    } 
    countArray(idx+1, sum + arr[idx], selected+1);
    countArray(idx+1, sum, selected);
}

countArray(0,0,0);

console.log(count);
