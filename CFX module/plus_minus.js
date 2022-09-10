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

let n=parseInt(readLine())
let sum=0
for(let i=0;i<n;i++)
{
    let num=parseInt(readLine())
   if(i%2===0)
   {
       sum += num
   }
   else
   {
       sum -= num
   }
}
console.log(sum)