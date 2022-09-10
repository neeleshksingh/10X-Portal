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
let a = readLine().split(' ');
let count = 0; 
for(let i=0; i<n; i++)
{
    a[i] = parseInt(a[i]);
    if(a[i]<0)
    {
        count++;
        continue;
    }
}
console.log(count);