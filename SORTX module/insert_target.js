let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

// 1
// 5 11
// -2 4 5 10 15

let t = parseInt(readLine())
let arr = []
for (let i = 0; i < t; i++) {
    arr = readLine().split(' ').map(Number)
}
console.log(arr[0])
let arr1 = readLine().split(' ')
for (let i = 0; i < arr[0]; i++) {
    arr1 = parseInt(arr1)
}
console.log(arr1)