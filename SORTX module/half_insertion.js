let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
let arr=readLine().split('')
length=parseInt(arr.length/2)
for(let i=length+1;i<arr.length;i++)
{
    let key=arr[i]
    let j=i-1
    while(j>=length && key<arr[j])
    {
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=key
}
console.log(arr.join(''))