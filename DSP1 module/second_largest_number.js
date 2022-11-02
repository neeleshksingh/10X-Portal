let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine())
let max=Number.NEGATIVE_INFINITY;
let arr=[]
for(let i=0;i<n;i++)
{
    arr.push(parseInt(readLine()))
    max=Math.max(max,arr[i])
}
let secondmax=Number.NEGATIVE_INFINITY;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>secondmax && arr[i]!=max)
    {
        secondmax=Math.max(secondmax,arr[i])
    }
}
console.log(secondmax)