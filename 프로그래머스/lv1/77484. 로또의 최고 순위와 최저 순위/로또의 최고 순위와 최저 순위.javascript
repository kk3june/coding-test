function solution(lottos, win_nums) {
    const answer = [];
    let win_counter = 0;
    let zero_counter = 0;
    const prize = [6, 6, 5, 4, 3, 2, 1];
    
    lottos.map(num => {
        if(num === 0) {
            zero_counter++;
        } else {
            win_nums.map(win_num => {
                if( num === win_num) {
                    win_counter++;
                }
            })
        }
    })
    
    answer[0] = prize[win_counter + zero_counter];
    answer[1] = prize[win_counter];
    
    return answer;
}