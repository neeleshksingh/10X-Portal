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

let arr = readLine().split(' ');//['2','4',7','5','8']
let m = parseInt(readLine());// 1
for(let i=0;i<arr.length;i++)
{
    arr[i]=parseInt(arr[i]);//[2,4,7,5,8]
}
//console.log(arr);
for(let k=0;k<m;k++)//k=0
{
    let last = arr[arr.length-1];//8
    for(let i=arr.length-1;i>0;i--)//i=4
    {
        arr[i]=arr[i-1];//arr[4]=arr[3];
    }
    arr[0]=last;
}
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}