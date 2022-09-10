let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//----------------------------------------------------------

/*let a = parseFloat(readLine());
let b = parseFloat(readLine());
let c = parseFloat(readLine());
let n = 4;
let a1 = a;
let d = b-a;
let AP = a1 + (n-1)*d
console.log(AP);*/

let a = parseFloat(readLine());
let b = parseFloat(readLine());
let c = parseFloat(readLine());
let d = b-a;
let AP = c+d;
console.log(AP);