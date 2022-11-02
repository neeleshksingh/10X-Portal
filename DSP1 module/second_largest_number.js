let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
/*
let n = parseInt(readLine())
let arr = []
let max = 0
for(let i=0;i<n;i++){
    arr[i] = parseInt(readLine())
    max = arr[i]
}
console.log(arr)
console.log(Math.max(max))
*/

function second_highest(arr)
{
  var second_highest = arr.sort(function(a, b) { return b - a; })[1];
  return second_highest;
}
let n = parseInt(readLine())
let arr = []
for(let i=0;i<n;i++){
    arr[i] = parseInt(readLine())
}
console.log(second_highest(arr))