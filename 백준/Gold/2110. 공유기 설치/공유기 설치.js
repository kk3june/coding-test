const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, C] = input[0].split(' ').map(it => Number(it));
const houses = input.splice(1, input.length).map(it => Number(it)).sort((a,b) => a-b);
let answer = 0;

function canInstall(distance) {
    let count = 1;
    let lastInstalled = houses[0];
    for(let i = 1; i < houses.length;i++) {
        if(houses[i] - lastInstalled >= distance) {
            count++;
            lastInstalled = houses[i];
            if(count === C) return true;
        }
    }
    return false;
}

function solve(){
    let left = 1
    let right = houses[N-1] - houses[0];

    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        if(canInstall(mid)) {
            answer = mid;
            left = mid +1;
        } else {
            right = mid -1;
        }        
    }
    console.log(answer);
}

solve();
