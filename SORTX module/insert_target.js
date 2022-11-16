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
let n, q
for (let i = 0; i < t; i++) {
    [n, q] = readLine().split(" ").map((n) => parseInt(n))
}
let arr = readLine().split(' ').map(Number)
let arr2 = []
for (let i = 0; i < n; i++) {
    arr2.push(arr[i])
}
console.log(...arr2.concat(q).sort((a, b) => a - b))

