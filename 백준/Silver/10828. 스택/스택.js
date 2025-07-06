const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const arr = input.splice(1);
const stack = [];

function solution() {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].startsWith('push')) {
            const value = arr[i].split(' ')[1];
            stack.push(value)            
        }
        if(arr[i] === 'pop') {
            if(stack.length === 0) {
                console.log('-1');
            } else {
                console.log(stack[stack.length-1]);
                stack.pop();
            }
        }
        if(arr[i] === 'size') {
            console.log(stack.length);
        }
        if(arr[i] === 'empty') {
            if(stack.length) console.log('0');
            else console.log('1');
        }
        if(arr[i] === 'top') {
            if(stack.length) console.log(stack[stack.length-1]);
            else console.log('-1');
        }
    }
}

solution();