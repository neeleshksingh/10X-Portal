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

let n = readLine().split(" ").map(Number);
let max = n[0];
let arr =[];
arr.push(max);
for(let i =1;i<n.length;i++)
{
    max = max + n[i];
    arr.push(max);
    
}
console.log(arr);