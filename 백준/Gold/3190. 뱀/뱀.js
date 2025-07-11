const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function parseInput() {
    const N = +input[0];
    const K = +input[1];
    const directions = [];
    
    const apples = new Set();
    for(let i = 2; i < K+2; i++) {
        apples.add(input[i]);
    }
    
    const L = +input[2 + K];
    for(let i = 3 + K; i < 3 + K + L; i++ ) {
        directions.push(input[i].split(' '));
    }
    
    return { N, apples, directions };
}

function solution() {
    const { N, apples, directions } = parseInput();
    
    const snake = [[1,1]];
    let direction = 0;    // 0: 동, 1: 남, 2: 서, 3: 북
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    
    let time = 0;
    let dirIndex = 0;
    
    while(true) {
        time++;
        
        const head = snake[snake.length -1];
        const newHead = [head[0] + dx[direction], head[1] + dy[direction]];
        
        if(newHead[0] <= 0 || newHead[0] > N || newHead[1] <= 0 || newHead[1] > N) {
            break;
        }
        if(snake.some(it => it[0] === newHead[0] && it[1] === newHead[1])) {
            break;
        }
        
        if(!apples.has(newHead.join(' '))) {
            snake.shift(); 
        } else {
            apples.delete(newHead.join(' ')) 
        }
        snake.push(newHead);
        
        if(dirIndex < directions.length && +directions[dirIndex][0] === time) {
            if(directions[dirIndex][1] === 'L') {
                direction = (direction + 3) % 4;
            } else {
                direction = (direction + 1) % 4;
            }
            dirIndex++;
        }
    }
    console.log(time);
}

solution();