let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
function insertionSort(arr) {
    let str = arr.split('')
    for (let i = 1; i < str.length; i++) {
        let temp = str[i]
        let j = i - 1
        while (str[j] > temp) {
            str[j + 1] = str[j]
            j--
        }
        j++
        str[j] = temp
    }
    return str
}
let arr = readLine()
console.log(insertionSort(arr).join(''))