function solution (rows, columns, queries) {
  const answer = [];
  
  // 1. 행렬 생성
  let matrix = Array(rows).fill(0).map((_,i) => Array(columns).fill(0).map((_, j) => i * columns + j + 1));
  
  // 2. queries 돌리기
  for( let i = 0; i < queries.length; i++) {
    const [y, x, yy, xx] = queries[i];
    rotate(y-1, x-1, yy-1, xx-1);
  }
  
  // 3. queries 에 맞춰서 회전(rotate 시키기)
	function rotate(y, x, yy, xx) {
    let cur = matrix[y][x];
    let next;
    let min = cur;
    
    for(let i = x+1; i <= xx; i++){
      next = matrix[y][i];
      matrix[y][i] = cur;
      cur = next;
      if( cur < min) min = cur;
    }
    
    for(let i = y+1; i <= yy; i++) {
      next = matrix[i][xx];
      matrix[i][xx] = cur;
      cur = next;
      if( cur < min) min = cur;
    }

    for(let i = xx-1; i >= x; i--) {
      next = matrix[yy][i];
      matrix[yy][i] = cur;
      cur = next;
      if( cur < min) min = cur;
    }

    for(let i = yy-1; i >= y; i--) {
      next = matrix[i][x];
      matrix[i][x] = cur;
      cur = next;
      if( cur < min) min = cur;
    }
    
    answer.push(min);
  }
  return answer;
}