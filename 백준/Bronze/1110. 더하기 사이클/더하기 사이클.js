const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout,
});

rl.on('line', function(line) {
    const input = +line;
	let num = +line;
    let sum;
    let count = 0;
    
    while (true) {
    	count++;
        
        sum = Math.floor(num/10) + num % 10;
        num = (num % 10) * 10 + sum%10;
        
        if( input === num){
        	break;
        }
    }
	console.log(count);

}).on('close', function() {
	process.exit();
});