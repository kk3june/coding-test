const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
    input.push(line.trim());
}).on('close', () => {
    const N = Number(input[0]);
    const arr = input[1].split(' ').map(Number);
    const lis = [];

    function lowerBound(arr, target) {
        let left = 0, right = arr.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] >= target) right = mid;
            else left = mid + 1;
        }
        return left;
    }

    for (let num of arr) {
        let idx = lowerBound(lis, num);
        if (idx === lis.length) {
            lis.push(num);
        } else {
            lis[idx] = num;
        }
    }

    console.log(lis.length);
});