const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');;
const n = +input[0];
const players = input.splice(1).map(it => it.split(' ').map(Number));
const visited = new Array(n).fill(false);
let minDiff = Infinity;

function makeTeam(idx, startTeam){
    if(startTeam.length === n/2) {
        const linkTeam = [];
        for(let i = 0; i < n; i++) {
            if(!visited[i]) {
                linkTeam.push(i);
            }
        }
        const startTeamPower = getPower(startTeam);
        const linkTeamPower = getPower(linkTeam);
        const diff = Math.abs(startTeamPower - linkTeamPower);
        minDiff = Math.min(minDiff, diff);
    }
    
    if(idx === n) return;
    
    visited[idx] = true;
    startTeam.push(idx);
    makeTeam(idx + 1, startTeam);
   
    startTeam.pop();
    visited[idx] = false;
    makeTeam(idx + 1, startTeam);
}

function getPower(team) {
    let power = 0;
    for(let i = 0; i < team.length; i++) {
        for (let j = i+1; j < team.length; j++) {
            power += (players[team[i]][team[j]] + players[team[j]][team[i]]);
        }
    }
    return power;
}

makeTeam(0, []);
console.log(minDiff)