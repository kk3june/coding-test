function solution(progresses, speeds) {
    const answer = [];
    let complete = 0;
    let days = 1;
    
    while(progresses[0]) {
        let progress = progresses[0] + speeds[0] * days;
        
        if(progress >= 100) {
            complete++;
            progresses.shift();
            speeds.shift();
        } else {
            if(complete) answer.push(complete);
            days++;
            complete = 0;
        }
    }
    answer.push(complete);
    return answer;
}