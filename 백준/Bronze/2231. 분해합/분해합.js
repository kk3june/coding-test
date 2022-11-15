const input = require('fs').readFileSync('dev/stdin').toString();
const n = parseInt(input);

let answer = 0; 
for(let i = 1; i < n; i++) {
    const numStringArr = i.toString().split('');
    let m = i;
    for(let j = 0; j < numStringArr.length; j++){
        m += parseInt(numStringArr[j]);
    }
    if(m === n){
        answer = i;
        break;
    }
}

console.log(answer);
