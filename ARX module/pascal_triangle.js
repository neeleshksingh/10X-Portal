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
let arr = [];
for (let i = 0; i < n; i++) 
{
  arr[i] = [];
  for (let j = 0; j < n; j++) 
  {
    if (j == 0) 
    {
      arr[i][j] = 1;
    } 
    else if (i == j) 
    {
      arr[i][j] = 1;
    } 
    else if (i > 1 && j > 0 && i > j) 
    {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
  }
}
for (let i = n - 1; i < n; i++) 
{
  for (let j = 0; j < n; j++) 
  {
    console.log(arr[i][j]);
  }
}