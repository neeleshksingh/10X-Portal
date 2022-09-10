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

let car= readLine().split(" ");
let n = parseInt(car[0]);
let i = parseInt(car[1]);
if(i>=1 & i<=n)
{
    let j = parseInt((n-i)+1);
    console.log(j);
}