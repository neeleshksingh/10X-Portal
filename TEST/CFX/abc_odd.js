let fs = require("fs");
const { format } = require("path");
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

let n = readLine().split(' ');
//console.log(n);
let a = parseInt(n[0]);
let b = parseInt(n[1]);
let c = a*b*3;
//console.log(c);
if(c%2 == 0)
{
    console.log("No");
}
else{
    console.log("Yes");
}