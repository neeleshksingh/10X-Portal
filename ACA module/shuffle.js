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

//-------------------------------------

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < 2 * n; i++) {
  arr[i] = parseInt(readLine());
}
let ar = [],
  c = 0;
for (let i = 0, j = arr.length / 2; i < arr.length / 2; i++, j++) {
  ar[c] = arr[i]; // 2 5
  c++; //  1 3
  ar[c] = arr[j]; // 3
  c++; // 2
}
for(let i=0;i<ar.length;i++)
{
    console.log(ar[i])
}