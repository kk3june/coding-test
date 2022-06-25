function solution(n, lost, reserve) {
  let answer = 0;
  const hasUniform = new Array(n).fill(1);
  
  for( let i = 0; i < lost.length; i++) {
    hasUniform[lost[i] -1]--;
  }
  
  for( let j = 0; j < reserve.length; j++) {
    hasUniform[reserve[j] -1]++;
  }
  
  for(let k = 0; k < hasUniform.length; k++) {
    if(hasUniform[k] === 0) {
      if( hasUniform[k-1] === 2) {
        hasUniform[k-1]--;
        hasUniform[k]++;
      } else if (hasUniform[k+1] === 2) {
        hasUniform[k+1]--;
        hasUniform[k]++;
      }
    }
  }
 	
  for (let m = 0; m < hasUniform.length; m++) {
    if( hasUniform[m] > 0) {
      answer++;
    }
  }
  return answer;
}