function solution(n, arr1, arr2) {
    var answer = new Array(n).fill('');
    
    // 1. arr1, arr2 2진수 변환
    for(let i = 0; i < n; i++) {
        arr1[i] = arr1[i].toString(2);
        if(arr1[i].length < n) {
            for( let j = n - arr1[i].length; j > 0; j--) {
                arr1[i] = '0' + arr1[i];
            }
        }
        arr2[i] = arr2[i].toString(2);
        if(arr2[i].length < n) {
            for( let j = n - arr2[i].length; j > 0; j--) {
                arr2[i] = '0' + arr2[i];
            }
        }
    }
    
    console.log(arr1, arr2)
    // 2. arr1, arr2 요소 비교
    for( let k = 0; k < n; k++) {
        
        for( let l = 0; l < n; l++) {
            
            if( arr1[k][l] === '0' && arr2[k][l] === '0') {
                answer[k] += ' ';
            } else {
                answer[k] += '#';
            }
         
        }
           
    }
    
    return answer;
}