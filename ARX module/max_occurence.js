let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------

let n = parseInt(readLine());
let res=0;
let count =1;
let arr=[];
for(let i =0;i<n;i++)
{
    arr = readLine();
    console.log(arr);
    if(arr[i]===arr[res])
    {
        count++;
    }
    else 
    {
        count--;
    }
    if(count===0)
    {
        res = i;
        count =1;
    }
}
console.log(arr[res]);
