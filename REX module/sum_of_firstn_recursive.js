let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------


function sumofFirstn(n)
{
  let sum
  if(n===1)
  {
    sum = 1
  }
  else
  {
   sum = n + sumofFirstn(n-1)
  }
  console.log(n, sum)
  return sum
      
}
let n = parseInt(readLine())
sumofFirstn(n)
