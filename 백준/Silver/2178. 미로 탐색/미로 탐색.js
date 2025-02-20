const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    const [N,M] = input[0].split(' ').map(Number);
    const grid = input.slice(1).map((it) => it.split('').map(Number));

    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];

    const queue = [[0,0]]
    function bfs(){
        while(queue.length > 0) {
            const [x, y] = queue.shift();
            for(let i = 0; i<4; i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if(nx>=0 && ny>=0 && nx<M && ny<N && grid[ny][nx] === 1) {
                    grid[ny][nx] = grid[y][x]+1;
                    queue.push([nx,ny])
                }
            }    
        }
        return grid[N-1][M-1];
    }
    console.log(bfs());
});