let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


// -------- Do NOT edit anything above this line ----------

function OddNumber(arr, n) {
    let odd = 0
    for (let i = 0; i < ((2 * n) + 1); i++)
        odd = odd ^ arr[i]
    return odd;
}
let n = parseInt(readLine())
let arr = readLine().split(' ')
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(arr[i])
}
console.log(OddNumber(arr, n))