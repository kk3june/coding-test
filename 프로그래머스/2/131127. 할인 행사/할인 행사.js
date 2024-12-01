function solution(want, number, discount) {
    var answer = 0;
    
    for(let i = 0; i <= discount.length - 10; i++){
        const copiedNum = [...number];
        
        for(let j = 0; j < 10; j++) {
            const currentItem = discount[i+j];
            const itemIndex = want.indexOf(currentItem);
            
            if(itemIndex == -1 || copiedNum[itemIndex] == 0) {
                break;
            }
            
             copiedNum[itemIndex]--;
        }
        
        if(copiedNum.every(n => n == 0)) {
          answer++;
        }
    }
    return answer;
} 