let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//-------------------------------------

let arr = readLine().split(' ');
let max = parseInt(arr[0]), min = parseInt(arr[0]);
for(let i =1; i<arr.length; i++)
{
    if(parseInt(arr[i])>max)
    max = parseInt(arr[i]);
    if(parseInt(arr[i])< min)
    min = parseInt(arr[i]);
}
console.log(max);
console.log(min);