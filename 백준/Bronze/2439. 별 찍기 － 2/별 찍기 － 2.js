const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function(line){
    const num = +line;

    const star = '*';
    const space = ' ';
    
    for(let i = 1; i <= num; i++){
         console.log(space.repeat(num - i) + star.repeat(i)); 
    }
   
    
}).on('close', function(){
    process.exit();
})