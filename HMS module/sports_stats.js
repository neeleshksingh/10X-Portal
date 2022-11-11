let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

let map = new Map()
let n = parseInt(readLine())
for (let i = 0; i < n; i++) {
    let [name, sports] = readLine().split(" ")
    if (!map.has(name)) {
        map.set(name, sports)  
    }
}
console.log(map)
let count = new Map()
for (let [key, value] of map.entries()) {
    if (count.has(value)) {
        count.set(value, count.get(value) + 1)
    }
    else {
        count.set(value, 1)
    }
}
console.log(count)
let max = 0, ans
for (let [key, value] of count.entries()) {
    if (value == max) {
        let v = key.localeCompare(ans)
        if (v == -1) {
            ans = key
        }
    }
    else if (value > max) {
        max = value
        ans = key
    }
}
console.log(ans)
if (count.has('football')) {
    console.log(count.get('football'))
}
else {
    console.log(0)
}