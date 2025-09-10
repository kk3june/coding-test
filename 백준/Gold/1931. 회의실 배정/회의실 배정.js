const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const meetings = input.slice(1).map(meeting => meeting.split(' ').map(it => Number(it))).sort((a, b) => a[1] - b[1] || a[0] - b[0]);

function solution() {
    let count = 0;
    let lastEndMeeting = 0;
    
    for(let i = 0; i < meetings.length; i++) {
        if(meetings[i][0] >= lastEndMeeting) {
            count++;
            lastEndMeeting = meetings[i][1];
        }
    }
    console.log(count);
}
solution();