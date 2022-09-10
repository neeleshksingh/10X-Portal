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
let c = parseInt(readLine());
let d = parseInt(readLine());
let total_cost = ((a*b)+(c*d));
console.log(total_cost);