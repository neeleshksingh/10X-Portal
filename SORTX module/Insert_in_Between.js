let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n = readLine().split(' ')
let arr = readLine().split(' ')
let arr1 = []
let sortarr = []
for (let i = 0; i < n[0]; i++) {
    arr[i] = parseInt(arr[i])
    arr1 = arr.concat(parseInt(n[1]))
    sortarr = arr1.sort((a, b) => a - b)
}
console.log(...sortarr)