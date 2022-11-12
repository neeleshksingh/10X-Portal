let fs = require("fs");
let data = fs.readFileSync('./in1.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
function max(b,n1,m1)
{

    let max=0
    for(let i=0;i<n1.length;i++)
    {
        for(let j=0;j<m1.length;j++)
        {
            if(n1[i]+m1[j]<=b)
            {
                max=Math.max(max,n1[i]+m1[j])
            }
        }
    }
    if(max==0)
    {
        return -1
    }
    return max
}
let [b,keyboard,usb]= readLine().split(' ').map(Number)
let n1=readLine().split(' ').map(Number)
let m1=readLine().split(' ').map(Number)
console.log(max(b,n1,m1))