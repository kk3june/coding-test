const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const totalPrice = input[0];
const items = input[1];
let sumPrice = 0;

for(let i = 2; i < input.length; i++) {
    const [price, quantity] = input[i].split(' ');
    sumPrice += price * quantity;
}

if(parseInt(totalPrice) === parseInt(sumPrice)) {
    console.log('Yes');
} else {
    console.log('No');
}