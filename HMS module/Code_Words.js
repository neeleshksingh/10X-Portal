let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let arr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
let map = new Map()
for (let i = 0; i < arr.length; i++) {
    map.set(String.fromCharCode(97 + i), arr[i])
}
function codeWord(str) {
    let c = 0
    for (let i = 0; i < str.length; i++) {
        let empty = ' '
        for (let j = 0; j < str[i].length; j++) {

            empty += map.get(str[i][j])
        }
        str[c] = empty
        c++
    }
    let count = new Set()
    for (let i = 0; i < str.length; i++) {
        count.add(str[i])
    }
    return count.size
}
let testCases = parseInt(readLine())
while (testCases--) {
    let str = readLine().split(' ')
    console.log(codeWord(str))
}
