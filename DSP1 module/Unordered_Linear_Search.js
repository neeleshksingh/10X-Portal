let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
let k = parseInt(readLine())
let n = parseInt(readLine())
let arr = []

for(let i =0;i<n;i++)
{
    arr.push(parseInt(readLine()))
}
console.log(search(k,arr))
function search(k,arr){
    let flag = -1
    for(let i =0;i<n;i++){
        if(arr[i] === k)
        {
            flag = i
            break
        } 
    }return flag
}


