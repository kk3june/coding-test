const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on("line", (line) => {
    input.push(Number(line.trim()));
}).on("close", () => {
        const n = input[0];
        const arr = input.slice(1);
        const stack = [];
        const result = [];
        let current = 1;
        
        for(let num of arr) {
            while(current <= num) {
                stack.push(current);
                current++;
                result.push('+');
            }
            
            if(stack[stack.length-1] === num) {
                stack.pop();
                result.push('-');
            } else {
                console.log('NO');
                return;
            }
        }
      console.log(result.join("\n"));
})