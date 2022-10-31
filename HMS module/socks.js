let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
let set = new Set()
let count = 0;
let n = parseInt(readLine())
let arr = readLine().split(" ")
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(arr[i])
}
//10 20 20 10 10 30 50 10 20
for (let i = 0; i < n; i++) {
    if (set.has(arr[i])) {
        count++;   //1 2 3
        set.delete(arr[i])
    } else {
        set.add(arr[i]) // 30 50  20
    }
}
console.log(count)