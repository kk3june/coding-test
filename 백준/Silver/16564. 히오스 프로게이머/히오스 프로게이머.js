const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(it => Number(it));
const levels = input.splice(1, input.length).map(it => Number(it));

function canAcheive(targetLevel) {
    let needed = 0;
    for(let level of levels) {
        if(level < targetLevel) {
            needed += targetLevel - level;
        }
    }
    return needed <= K
}

function solution() {
    let left = Math.min(...levels);
    let right = Math.max(...levels) + K;
    let answer = 0;
    
    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if(canAcheive(mid)) {
            answer = mid;
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    console.log(answer);
}

solution();