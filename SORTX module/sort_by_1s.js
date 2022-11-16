let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
let size = parseInt(readLine())
let arr = readLine().split(' ').map(Number)
for (let i = 0; i < arr.length; i++) {

    let temp = arr[i]
    arr[i] = []
    arr[i][0] = temp
    let c = 0
    let bin = arr[i][0].toString(2).split('')

    for (let j = 0; j < bin.length; j++) {
        if (bin[j] == '1') {

            c++
        }
    }
    arr[i][1] = c
}
arr.sort((a, b) => b[1] - a[1])
let length = arr.length
for (let i = 0; i < length; i++) {
    arr.push(arr[i][0])
}
arr.splice(0, length)
console.log(...arr)