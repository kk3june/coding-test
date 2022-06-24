function solution(nums) {
    let answer = 0;
    const len = nums.length;
    
    for(let i = 0; i <= len -3; i++) {
        for( let j = i+1; j <= len -2; j++) {
            for( let k = j+1; k <= len -1; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) {
                    answer +=1;
                }
            }
        }
    }
    
    return answer;
}

function isPrime(num) {
      if(num === 2)
      return true;

      for(let i = 2; i<=num/2; i++){
        if(num % i === 0){
          return false;
        }
      }
      return true;
    }