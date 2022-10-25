let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine())
let sum = ((n*(n+1)*(2*n+1))/6)
console.log(sum)
