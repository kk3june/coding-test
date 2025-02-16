const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const vtx = Number(input[0]);
    const edgs = Number(input[1]);
    const arr = input.slice(2).map(it => it.split(' ').map(Number));
    const table = Array(vtx+1).fill().map(() => Array(vtx+1).fill(0))
    const checked = Array(vtx+1).fill(0)
    
    for(let i = 0; i < arr.length; i++ ) {
        const [x,y] = arr[i];
        table[x][y] = 1;
        table[y][x] = 1;
    }
    function dfs(node) {
        checked[node] = 1;
        for(let i = 1; i < vtx+1; i++) {
            if(table[node][i] === 1 && !checked[i]) {
                dfs(i)
            }
        }
    }
    dfs(1)
    
    let count = -1;
    checked.forEach(it => {
        if(it === 1) count++
    });
    
    console.log(count)
    
})