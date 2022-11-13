const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function(line){
  input.push(line);  
}).on('close',function(){
  const numbers = input.map(x => parseInt(x));
  let max = 0;
  let idx = 0;
  
  for( let i = 0; i < numbers.length; i++) {
      if( numbers[i] > max) {
          max = numbers[i];
          idx = i + 1;
      }
  }  
    console.log(max);
    console.log(idx);
  
  process.exit();    
});