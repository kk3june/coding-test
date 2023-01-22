const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

function solution(data) {
    const [N, ...arr] = data;
    let answer = [];
    for(let i = 0; i < N; i++) {
        let tmp = arr[i].split(' ').map(value => parseInt(value));
        let p1 = [tmp[0], tmp[1]]
        let r1 = tmp[2];
        let p2 = [tmp[3], tmp[4]]
        let r2 = tmp[5];
        
        let d = Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));

        // Case4. 동심원
        if(d === 0) {
          if(r1 === r2) answer.push(-1);
          else answer.push(0);
        }
        // Case1. 만나지 않는 경우 
        else if(d > r1 + r2) {
          answer.push(0);
        } 
        // Case2. 한 점에서 만나는 경우 (외접)
        else if( d === r1 + r2) {
          answer.push(1)
        }
        // Case3.
        else if ( d < r1 + r2) {
          // Case3-2. 작은 원이 큰 원에 내접하여 한점에서 만나게 되는 경우(내접)
          if( r1 < r2 && r1 + d === r2 ) {
            answer.push(1);
          } else if ( r2 < r1 && r2 + d === r1) {
            answer.push(1);
          }
          // Case3-2. 만나지 않는 경우
          else if ( r1 < r2 && r1 + d < r2 ) {
            answer.push(0);
          }
          else if ( r2 < r1 && r2 + d < r1 ) {
            answer.push(0);
          }
          // Case3-1. 두 점에서 만나는 경우 
          else {
            answer.push(2);
          }
        }
    }
    console.log(answer.join('\n'));
}

solution(input);