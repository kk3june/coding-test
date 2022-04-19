const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = '';

rl.on('line', function(line){
    const input = line.split(' ');
    
    if(input.length === 2) {
        result += parseInt(input[0]) + parseInt(input[1]) + '\n'
    }
  
}).on('close',function() {
    console.log(result);
    process.exit();
})