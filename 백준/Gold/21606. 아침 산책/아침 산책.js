const input = require("fs")
 .readFileSync("/dev/stdin")
 .toString()
 .trim()
 .split("\n");

const N = +input[0];
const inside = '0' + input[1];
const graph = Array.from({length: N + 1}, () => []);
const visited = Array(N + 1).fill(false);
let total = 0;

for(let i = 0; i < N - 1; i++) {
   const [a, b] = input[i + 2].split(' ').map(Number);
   graph[a].push(b);
   graph[b].push(a);
   
   if(inside[a] === "1" && inside[b] === "1") {
       total += 2;
   }
}

function DFS(start) {
   visited[start] = true;
   let inside_count = 0;
   
   for(let v of graph[start]) {
       if(inside[v] === '1') {
           inside_count++;
       } else if(!visited[v] && inside[v] === "0") {
           inside_count += DFS(v);
       }
   }
   return inside_count;
}

for(let i = 1; i <= N; i++) {
   if(inside[i] === '0' && !visited[i]) {
       const result = DFS(i);
       total += result * (result - 1);
   }
}

console.log(total);