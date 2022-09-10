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
let arr = readLine().split(' ');
let sum =0;
for(let i = 0; i<n;i++)
{
    sum += parseInt(arr[i]);
}
console.log(Math.floor(sum/n));