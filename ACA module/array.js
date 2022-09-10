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

//let arr = [];
let arr = readLine().split(' ');
for(let i = 0; i<arr.length;i++)
{
    arr[i]= parseInt(arr[i]);
}
console.log(arr);
console.log(arr[3]);
arr[3] = 70;
console.log(arr);