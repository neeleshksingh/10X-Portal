let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function addSub(n,i,target,arr,sum){
    if(sum===target && i===n){
        return 1
    }
    if(i >= n){
        return 0
    }
    return (addSub(n,i+1,target,arr,sum + arr[i])
    + addSub(n,i+1,target,arr,sum - arr[i])
    + addSub(n,i+1,target,arr,sum + arr[i]))
}

let target = parseInt(readLine())
let n = parseInt(readLine())
let arr = readLine().split(' ').map(Number)

console.log(addSub(n,0,target,arr,0))