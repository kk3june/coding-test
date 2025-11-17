const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(' ').map(Number);
let [r, c, d] = input[1].split(' ').map(Number);
let map = input.slice(2).map(v => v.split(' ').map(Number));

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

let answer = 0;

while (true) {
    if (map[r][c] === 0) {
        map[r][c] = 2; 
        answer++;
    }

    let moved = false;

    for (let i = 0; i < 4; i++) {
        d = (d + 3) % 4; 
        let nr = r + dr[d];
        let nc = c + dc[d];

        if (map[nr][nc] === 0) {
            r = nr;
            c = nc;
            moved = true;
            break;
        }
    }

    if (moved) continue;

    let backDir = (d + 2) % 4;
    let br = r + dr[backDir];
    let bc = c + dc[backDir];

    if (map[br][bc] === 1) break; 

    r = br;
    c = bc;
}

console.log(answer);