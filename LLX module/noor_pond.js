let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// 1
// 3
// 4 1
// 5 4
// 7 3

function noorPond(arr) {
    let count = 0
    let ans = 1
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        arr1.push(arr[i])
        arr1.sort((a, b) => a - b)
    }
    return arr1
}
let t = parseInt(readLine())
for (let i = 0; i < t; i++) {
    let arr = []
    let n = parseInt(readLine())
    for (let i = 0; i < n; i++) {
        arr.push(readLine().split(' ').map(Number))
    }
    console.log(noorPond(arr))
}
