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
let arr = [];
for(let i=0;i<n;i++)
{
    if(arr.indexOf(i) === -1)
    {
        arr.push(i);
    }
}
console.log(arr);