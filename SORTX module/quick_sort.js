let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
// 2
// 5
// 5 10 2 4 -2
// 4
// 2 89 90 7

let n = parseInt(readLine())
let arr = []
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()))
    let arr1 = readLine().split(' ')
    for (let j = 0; j < arr[i]; j++) {
        arr1[j] = parseInt(arr1[j])
    }
    console.log(...arr1.sort((a, b) => a - b))
}