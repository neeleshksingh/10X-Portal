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

//---------------------------------------------------------

/*let n = parseInt(readLine());
let arr = [];
let res = 0;
for(let i = 0; i<n; i++)
{
    arr[i] = parseInt(readLine());
    res = arr[i];
    let mul = arr[i];
    for(let j = i+1; j<n;j++)
    {
       res = Math.max(res, mul);
       mul *= arr[j];
    }
    res = Math.max(res, mul);
}
console.log(res);*/

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) 
{
  arr[i] = parseInt(readLine());
}
let max = 0;
for (let i = 0; i < arr.length - 1; i++) 
{
  let mult;
  mult = arr[i] * arr[i + 1];
  if (mult > max) 
  {
    max = mult;
  }
}
console.log(parseInt(max));