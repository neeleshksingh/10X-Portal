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

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) 
{
  arr[i] = parseInt(readLine());
}
//console.log(arr);
let res = arr[0];
for(let i=1;i<n;i++)
{
    res = Math.min(res, arr[i]);
}
//console.log(res);
let reslt = arr[0];
for(let i=1;i<n;i++)
{
    reslt = Math.max(reslt, arr[i]);
}
//console.log(reslt);
let min = res;
let max = reslt;
let ans = min*max;
console.log(ans);