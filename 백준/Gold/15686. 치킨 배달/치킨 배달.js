const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const map = input.splice(1).map(it => it.split(' ').map(Number));

const houses = [];
const chickens = [];
let minDistance = Infinity;

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(map[i][j] === 1) houses.push([i, j])
        if(map[i][j] === 2) chickens.push([i, j])
    }
}

function selectedChickens(idx, selected) {
    if(selected.length === m) {
        const chickenStreet = getStreetDistance(selected);
        minDistance = Math.min(minDistance, chickenStreet);
        return;
    }
    
    if(idx === chickens.length) return;
    
    selected.push(chickens[idx])
    selectedChickens(idx + 1, selected);
    selected.pop();
    selectedChickens(idx + 1, selected);
}

function getStreetDistance(selectedChickens) {
    let sum = 0;
    
    for(let house of houses) {
        let minDist = Infinity;
        for(let chicken of selectedChickens) {
            const dist = Math.abs(house[0] - chicken[0]) + Math.abs(house[1] - chicken[1]);
            minDist = Math.min(minDist, dist);
        }
        sum += minDist;
    }
    return sum;
}

selectedChickens(0, []);
console.log(minDistance)