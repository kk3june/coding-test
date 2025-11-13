const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const map = input.slice(1).map(line => line.split(' ').map(Number));

const empty = [];
const virus = [];

for(let i = 0; i < n; i++) {
  for(let j = 0; j < m; j++) {
    if(map[i][j] === 0) empty.push([i, j]);
    if(map[i][j] === 2) virus.push([i, j]);
  }
}

let maxSafeArea = 0;

function selectWalls(idx, selected) {
  if(selected.length === 3) {
    const safeArea = simulate(selected);
    maxSafeArea = Math.max(maxSafeArea, safeArea);
    return;
  }
  
  if(idx === empty.length) return;
  
  selected.push(empty[idx]);
  selectWalls(idx + 1, selected);
  selected.pop();
  selectWalls(idx + 1, selected);
}

function simulate(walls) {
  const tempMap = map.map(row => [...row]);
  
  for(let [x, y] of walls) {
    tempMap[x][y] = 1;
  }
  
  const queue = [...virus];
  
  while(queue.length > 0) {
    const [x, y] = queue.shift();
    
    for(let [dx, dy] of [[0,1], [0,-1], [1,0], [-1,0]]) {
      const nx = x + dx;
      const ny = y + dy;
      
      if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if(tempMap[nx][ny] === 0) {
        tempMap[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }
  
  let count = 0;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(tempMap[i][j] === 0) count++;
    }
  }
  
  return count;
}

selectWalls(0, []);
console.log(maxSafeArea);