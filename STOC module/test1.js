let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------------

let a = parseInt(readLine());
let b = parseInt(readLine());
let sum = a+b;
let diff = a-b;
let mul = a*b;
console.log(sum);
console.log(diff);
console.log(mul);