function solution(str1, str2) {
    var answer = 0;
    
    const upperStr1 = str1.toUpperCase();
    const upperStr2 = str2.toUpperCase();
    
    const arrStr1 = splitEl(upperStr1);
    const arrStr2 = splitEl(upperStr2);
    
    const union = [];
    const intersection = [];
    
   for (var i = 0; i < arrStr2.length; i++) {
    if (arrStr1.indexOf(arrStr2[i]) >= 0) {
      intersection.push(arrStr1.splice(arrStr1.indexOf(arrStr2[i]), 1))
    }
    union.push(arrStr2[i])
  }

  for (var i = 0; i < arrStr1.length; i++) {
    union.push(arrStr1[i])
  }

    
    // 정답 계산식
    answer = parseInt(65536 * (intersection.length / union.length));
    // 두 집합이 공배열일 경우 처리
    if(isNaN(answer)) return 65536;
    return answer;
}

// 문자열을 2글자 단위로 쪼개기 위한 함수
function splitEl(str) {
    const splitedArr = [];
    const reg = /^[A-Z]{2}/g
    
    for(let i = 0; i < str.length -1; i++) {
        const newEl = str.split('')[i] + str.split('')[i+1];
        if(newEl.match(reg) !== null) {
            splitedArr.push(newEl)
        }
    }
    return splitedArr;
}