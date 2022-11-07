let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine())
let ar1 = parseInt(readLine())
let arr1 = readLine().split(' ')
let ar2 = parseInt(readLine())
let arr2 = readLine().split(' ')
for(let i=0;i<ar1;i++){
    arr1[i] = parseInt(arr1[i])
}
let arr1sort
for(let i=0;i<ar2;i++){
    arr2[i] = parseInt(arr2[i])
}
console.log(arr1.sort((a, b) => a - b))
console.log(arr2.sort((a, b) => a - b))
