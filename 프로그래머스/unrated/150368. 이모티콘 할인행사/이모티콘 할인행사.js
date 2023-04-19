function solution(users, emoticons){
  const answer = [0, 0];
  const discount = [10, 20, 30, 40];
  const arr = [];
  
  function dfs(emoticons, result) {
    if(emoticons.length < 1) {
      arr.push(result);
      return;
    }
    
    for(let i = 0; i < discount.length; i++) {
      dfs(emoticons.slice(1), [...result, [emoticons[0], discount[i]]]);
    }
  }
  
  dfs(emoticons, []);
  
  const discountedPrice = (price, discountRatio) => price * (100-discountRatio) / 100
  
  arr.forEach(discountedArr => {
    const memberAndRevenue = [0,0];
    
    users.forEach(([per, price]) => {
      let sum = 0;
      
      discountedArr.forEach(([cost, discountRatio]) => {
        if(discountRatio >= per) {
          sum += discountedPrice(cost, discountRatio);
        }
      });
      
      if(sum >= price) {
        memberAndRevenue[0] += 1;
      } else {
        memberAndRevenue[1] += sum;
      }
    });
    
    
    if(answer[0] < memberAndRevenue[0]) {
      answer[0] = memberAndRevenue[0]
      answer[1] = memberAndRevenue[1];
    } else if (answer[0] === memberAndRevenue[0] && answer[1] < memberAndRevenue[1]) {
      answer[1] = memberAndRevenue[1];
    }
  });
  
  return answer;
}