let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

let n = parseInt(readLine())
let arr = []
for(let i=0;i<n;i++){
    arr[i] = parseInt(readLine())
}
console.log(arr)
