let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//-------------------------------------


let n = parseInt(readLine());
let sum = 0;
let a = n;
while(a>0)
{
    let r = a % 10;
    sum += r*r*r;
    a = parseInt(a/10);
}
if(sum==n)
{
    console.log("Yes");
}
else
{
    console.log("No");
}
