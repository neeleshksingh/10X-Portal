let fs = require("fs");
let data = fs.readFileSync('./in2.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
function median(arr)
{
    arr=arr.sort((a,b)=>a-b)
    
    return arr[parseInt(arr.length/2)]
}
let t=parseInt(readLine())

while (t--)
{
    let arr=[]
    let [n,m]=readLine().split(' ').map(Number)
    for(let i=0;i<n;i++)
    {
        arr[i]=readLine().split(' ').map(Number)
    }
    
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr[i].length;j++)
        {
            arr.push(arr[i][j])
           
        }
    }
    arr.splice(0,n)
    console.log(median(arr))
}