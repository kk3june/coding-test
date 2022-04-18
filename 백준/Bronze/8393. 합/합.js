const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line',function(line) {
 input.push(line) 
}).on('close',function() {
  const num = Number(input[0]);
  let value = 0;
  
  for(let i = 0; i < num +1; i++) {
  	value += i;  
  }
  console.log(value);
    process.exit();
})