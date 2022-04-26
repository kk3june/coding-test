const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  
  for(let i = 0; i < input.length; i++ ){
    let param1 = +input[i].split(' ')[0];
    let param2 = +input[i].split(' ')[1];
    let result = param1 + param2;
    
    console.log(result)
  }
  
  
  process.exit();
});