function solution(left, right) {
    let answer = 0;
  
    for(let i = left; i <= right; i++) {
  		if(countYaksu(i) % 2 === 0) {
        answer += i;
      } else {
        answer -= i;
      }
    }

    return answer;
}

function countYaksu(num) {
        let count = 0;
        
        for(let i = 1; i <= num; i++) {
            if(num % i == 0) {
            count++;
        }
    }    
    return count;
} 