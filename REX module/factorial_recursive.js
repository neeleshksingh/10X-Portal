let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

function factorial(n)
{
    if(n==0){
        return 1
    }
    else if(n<0){
        return undefined
    }
    else 
    {
        let ans = n * factorial(n-1)
        return ans
    }
    
}

let n = parseInt(readLine())
console.log(factorial(n))
