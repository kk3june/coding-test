function solution(nums) {
    let answer = 0;
    
    const set = new Set(nums);
    const removeDupl = [...set]
    
    if( nums.length / 2 > removeDupl.length ) {
        answer = removeDupl.length;
    } else {
        answer = nums.length / 2;
    }
    
    return answer;
}