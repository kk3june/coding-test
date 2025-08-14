const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

function solution() {
    const lis = []; 
    function lowerBound(arr, target) {
        let left = 0;
        let right = arr.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    
    for (const num of arr) {
        const idx = lowerBound(lis, num); 
        if (idx === lis.length) {
            lis.push(num);
        } else {
            lis[idx] = num;
        }
    }
    
    console.log(lis.length);
}

solution();