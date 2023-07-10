function solution(book_time) {
    let answer = [];
    const getTime = (time) => {
        const [h,m] = time.split(':');
        return +h * 60 + +m;
    }
    

   book_time.map((t1) => t1.map((t2) => getTime(t2)))
    .sort((a,b) => a[0] - b[0]).map((value) => {
     if(answer.length === 0) return answer.push(value)
     
     for(let i = 0; i < answer.length; i++) {
       if(answer[i][answer[i].length -1] + 10 <= value[0]) return answer[i].push(...value);
       
       if(!answer[i+1]) return answer.push(value);
     }   
   })
  return answer.length;
}