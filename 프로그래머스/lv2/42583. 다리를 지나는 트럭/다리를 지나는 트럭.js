const bridge_length = 2;
const weight = 10;
const truck_weights = [7,4,5,6];

function solution(bridge_length, weight, truck_weights) {
  const trucks = [...truck_weights];
  
  const passed = []; // 지나간 트럭 배열.
  const bridge = []; // 다리
  let bridgeWeight = 0; // 지금 다리의 무게
  let count = 0; // 지나간 초, return 할 값.
  
  // 파라미터로 들어온 truck_weights의 길이와 지나간 트럭 배열의 길이가 다를 동안.
  while(passed.length !== truck_weights.length){
    count++;
    // 만약 다리 배열 bridge의 마지막이 숫자라면
    if(typeof bridge[bridge_length-1] === 'number'){
      const truck = bridge.pop(); // 마지막 트럭을 다리에서 빼낸다.
      bridgeWeight -= truck; // 트럭의 무게만큼 지금 무게에 뺀다.
      // 트럭이 0보다 크면 (실제 트럭) 지나간 트럭 배열에 넣는다.
      if(truck > 0) passed.push(truck); 
    }
    
    //지금 무게와 1번 트럭이 통과 가능하면
    if(trucks[0] + bridgeWeight <= weight){
      bridgeWeight += trucks[0]; // 트럭을 다리에 넣음.
      bridge.unshift(trucks.shift()); // 다리에서 앞으로 넣어준다.
    }else{
      // 트럭이 못지나가므로 빈트럭 0 을 넣어 준다.
      bridge.unshift(0);
    }
  }
  
  return count;
}