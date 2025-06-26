const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = input.split('\n').map(it => Number(it));

const total = arr.reduce((cur,acc) => cur + acc, 0);
const target = total - 100;

function solve () {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                arr.splice(j, 1);
                arr.splice(i, 1);
                console.log(arr.sort((a,b) => a-b).join('\n'))
                return;
            }
        }
    }    
};

solve();

