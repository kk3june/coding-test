function solution(n)
{
    var answer = 0;

    const nums = n.toString().split('');
    
    
    for(let i = 0; i < nums.length; i++) {
        answer += parseInt(nums[i]);
    }
    

    return answer;
}