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
let max = parseInt(readLine());
let arr=[];
for(let i=1;i<=n;i++)
{
    arr[i]=0;
}
let maxDial = 0;
let m = parseInt(readLine());
for(let i=0;i<m;i++)
{
    let val = parseInt(readLine());
    arr[val]++;
    if(arr[val] === max)
    {
        maxDial = val;
        break;
    }
    
}
console.log(maxDial);