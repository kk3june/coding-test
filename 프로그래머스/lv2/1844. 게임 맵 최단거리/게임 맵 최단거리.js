function solution(maps) {
    const row = maps.length;
    const col = maps[0].length;
    const visited = [...maps].map(r => r.map(c => 1));
    
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    
    const queue = [[0,0]];
    
    while(queue.length) {
        const [x,y] = queue.shift();
        
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if( nx >= 0 && ny >= 0 && row > nx && col > ny) {
                if(maps[nx][ny] === 1 && visited[nx][ny] === 1) {
                    visited[nx][ny] = visited[x][y] +1;
                    queue.push([nx,ny]);
                }
            }
        }
    }
    return visited[row - 1][col - 1] === 1 ? -1 : visited[row - 1][col - 1]
}