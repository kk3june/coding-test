function solution(sizes) {
    let answer = 0;
    const arr = [];
    
    // 1. sizes 배열의 인자들 올림차순 정렬
    for(let i = 0; i < sizes.length; i++) {
        const param = sizes[i];
        arr.push(param.sort((a,b) => b - a));
    }
    
    // 2. 큰 값의 최댓값과 작은 값의 최댓값 구해서 곱하기
    let maxw = 0;
    let maxh = 0;
    for(let j = 0; j < arr.length; j++) {
        if( arr[j][0] > maxw) maxw = arr[j][0]
        if( arr[j][1] > maxh) maxh = arr[j][1]
    }
    answer = maxw * maxh;
    
    return answer;
}