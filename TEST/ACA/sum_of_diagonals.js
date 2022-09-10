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
let arr = [];
let sum = 0;
for (let i = 0; i < n; i++) {
  arr[i] = readLine().split(" ");
  for (let j = 0; j < n; j++) {
    arr[i][j] = parseInt(arr[i][j]);
    if (i === j) {
      sum += arr[i][j];
    }
    if (i + j === n - 1) {
      sum += arr[i][j];
    }
  }
}
console.log(sum);