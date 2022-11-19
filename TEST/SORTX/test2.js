let fs = require("fs");
let data = fs.readFileSync('./in2.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
function grain(arr)
{
    let total=0
    let len=arr.length
    for(let i=0;i<len;i++)
    {
    total+= arr[i]
    }
    graingiven = total/2
    arr.sort((a,b)=>b-a)
    let sum=0
    for(let i=0;i<len;i++)
    {
        if(sum!=graingiven)
        {
            sum+=arr[i]
            arr.push(arr[i])
        }
        else if(sum==graingiven)
        {
            break
        }
    }
   arr.splice(0,len)
   arr.sort((a,b)=>a-b)
   return arr
}
let n=parseInt(readLine())
while(n--)
{
    let arr=readLine().split(' ').map(Number)
    console.log(n+1)
    console.log(...grain(arr))
}





