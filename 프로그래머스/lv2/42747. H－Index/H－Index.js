function solution(citations) {
    const newArr = citations.sort((a,b) => b-a);
    
   let i = 0;
    while (i + 1 <= newArr[i]) {
        i++;
    }
    
    return i;
  }
  