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
let rows;
for (let i = 0; i < n; i++) {
  rows = readLine().split(" ");
  arr[i] = [];
  for (let j = 0; j < rows.length; j++) {
    arr[i][j] = parseInt(rows[j]);
  }
}
let temp;
let a = [];
for (let i = 0; i < rows.length; i++) {
  a[i] = [];
  for (let j = 0; j < arr.length; j++) {
    a[i][j] = arr[j][i];
  }
}
for (let i = 0; i < rows.length; i++) {
  console.log(...a[i]);
}