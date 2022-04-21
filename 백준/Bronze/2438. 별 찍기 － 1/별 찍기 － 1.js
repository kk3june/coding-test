const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function(line){
    const num = +line;
    
    for(let i = 1; i <= num; i++){
      let result = '';
        for( let j = 1; j <= i; j++){
          result += '*';  
        }
       console.log(result); 
    }
    
}).on('close', function() {
   process.exit(); 
});