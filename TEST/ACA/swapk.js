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

let a = readLine().split(" ");
let n = parseInt(a[0]);
let k = parseInt(a[1]);
let arr = readLine().split(" ").map(Number);
let temp;

temp = arr[k - 1];
arr[k - 1] = arr[arr.length - k];
arr[arr.length - k] = temp;

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}