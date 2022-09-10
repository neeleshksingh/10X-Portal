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

//---------------------------------------------------------


let n = parseInt(readLine());
let m = parseInt(n,10);
if(m % 2 == 0)
{
    console.log(parseInt(m));
}
else
{
    console.log(parseInt(m*2));
}