function solution(s) {
    let zeroCount = 0;
    let transformCount = 0;
    
    while (s !== "1") {
        const beforeLength = s.length;
        s = s.replaceAll(0, '');
        const afterLength = s.length;
        
        zeroCount += beforeLength - afterLength;
        s = afterLength.toString(2);
        transformCount++;
    }
    
    return [transformCount, zeroCount];
}