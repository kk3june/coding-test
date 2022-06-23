function solution(board, moves) {
    const basket = [];
    let answer = 0;
    
    for(let i = 0; i < moves.length; i++) {
        const doll = pickup(board, moves[i] - 1);
        if( doll ) {
            if( doll === basket[basket.length -1]) {
                basket.pop();
                answer += 2;
            } else {
                basket.push(doll);
            }
        } 
    }
    
    function pickup(board, order) {
        for( let i = 0; i < board.length; i++) {
            if(board[i][order] !== 0) {
                const doll = board[i][order];
                board[i][order] = 0;
                return doll;
            }
        }
    }
    
    return answer;
}