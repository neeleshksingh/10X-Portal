let fs = require("fs");
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
let arr = [];
arr = readLine().split(" ");
let sum = 0;
for(i=0;i<n;i=i+2)
{
    let val = parseInt(arr[i]);
    sum = sum + val;
}
console.log(sum);