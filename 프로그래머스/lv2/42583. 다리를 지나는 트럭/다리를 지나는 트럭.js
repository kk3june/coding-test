function solution(bridge_length, weight, truck_weights) {
  const trucks = JSON.parse(JSON.stringify(truck_weights));
  const passed = []; 
  const bridge = []; 
  let limit = 0; 
  let timer = 0; 
  
  while(passed.length !== truck_weights.length){
    timer++;
      
    if(typeof bridge[bridge_length-1] === 'number'){
      const truck = bridge.pop();
      limit -= truck;   
      if(truck > 0) passed.push(truck); 
    }

    if(trucks[0] + limit <= weight){
      limit += trucks[0]; 
      bridge.unshift(trucks.shift()); 
    }else{
      bridge.unshift(0);
    }
  }
  return timer;
}