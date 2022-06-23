function solution(numbers, hand) {
    let answer = '';
    let right = '#';
    let left = '*';
 
      function findKey(key) {
        const keypad = [[1,2,3], [4,5,6], [7,8,9], ['*',0,'#']];
        for( let i = 0; i < 4; i++) {
            for( let j = 0; j < 3; j++) {
            if(keypad[i][j] === key) {
              return [i, j]
            }
            }
        }
      }

      for (let i of numbers) {
        if( i === 1 || i === 4 || i === 7) {
          answer += 'L';
          left = i;
        } else if (i === 3 || i === 6 || i === 9)  {
          answer += 'R';
          right = i - 2;
        } else {
          let rl = findKey(right);
          let ll = findKey(left);
          let middle = findKey(i);

          let gapR = Math.abs(rl[0] - middle[0]) + Math.abs(rl[1] - middle[1]);
          let gapL = Math.abs(ll[0] - middle[0]) + Math.abs(ll[1] - middle[1]);

          if( gapR === gapL) {
            hand === 'right' ? (right = i, answer += 'R') : (left = i, answer += 'L') 
          } else if (gapR > gapL) {
            answer += 'L'
            left = i;
          } else {
            answer += 'R';
            right = i;
          }
        }
      }
    return answer;
}