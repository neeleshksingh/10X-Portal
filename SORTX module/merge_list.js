let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
// 3
// 4
// 2 6 12 34 
// 1 9 20 1000 
// 23 34 90 2000

let t = parseInt(readLine())
let n = parseInt(readLine())
let arr = []
for (let i = 0; i < t; i++) {
   arr[i] = readLine().split(' ').map(Number)
}
console.log(arr)

