function solution(a, b) {
    let answer = '';
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const year = 2016;
    let month = a;
    let day = b;
    
    function getDate(year, month, day) {
        if( month < 10) month = '0' + month;
        if( day < 10) day = '0' + day;
        return year + '-' + month + '-' + day;
    }
    
    const date = new Date(getDate(year, month, day));
    
    answer = week[date.getDay()];
    
    
    return answer;
}