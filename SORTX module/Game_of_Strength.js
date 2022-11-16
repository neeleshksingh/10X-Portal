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
// 2
// 1 2
// 5
// 4 5 3 1 2

let n = parseInt(readLine())
let arr = []
le
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()))
    let arr1 = readLine().split(' ')
    for (let j = 0; j < arr[i]; j++) {
        arr1[j] = parseInt(arr1[j])
    }
    arr1.sort((a, b) => a - b)
    let max = arr1[arr1.length - 1]
    let count = 0
    for (let k = 0; k < arr1.length; k++) {
        for (let l = k + 1; l < arr1.length; l++) {
            count = Math.abs(arr1[k] - arr1[l]) + count
        }
    }
    console.log(max * count)
}