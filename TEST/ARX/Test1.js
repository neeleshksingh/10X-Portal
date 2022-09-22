let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

//-----------------------------------------------

let n = parseInt(readLine())
let nums = []
let indices = []
for(let i=0;i<n*2;i++)
{
if(i<n)
{
  nums.push(parseInt(readLine()))
}
else{
  indices.push(parseInt(readLine()))
}
}
let answer = []
let a = []
for(let i = 0;i<n;i++)
{
  a = answer.splice(indices[i])
  answer.push(nums[i])
  answer = answer.concat(a)
}
for(let i =0;i<n;i++)
{
  console.log(answer[i])
}