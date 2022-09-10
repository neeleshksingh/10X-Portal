let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}


let a = parseInt(readLine());
let b = parseInt(readLine());
let an = (180-(a+b));
console.log(an);