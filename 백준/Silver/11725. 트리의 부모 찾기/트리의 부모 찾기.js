const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
    input.push(line.trim())
}).on('close', () => {
    const N = Number(input[0]);
    const edges = input.slice(1).map(it => it.split(' ').map(Number));
    const testCase = Array.from({length: N+1}, () => []);
    const parent = Array.from({length: N+1}, () => 0);
    
    for([x,y] of edges) {
        testCase[x].push(y);
        testCase[y].push(x);
    }
    
    function dfs(node) {
        testCase[node].forEach(nextNode => {
            if(parent[nextNode]===0) {
                parent[nextNode] = node;
                dfs(nextNode)
            }
        })
    }
    
    parent[1] = -1;
    dfs(1);
    
    console.log(parent.slice(2).join('\n'))
})