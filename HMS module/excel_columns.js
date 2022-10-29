let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function getColumnDescription(i) {
    let m = i % 26;
    let c = String.fromCharCode(91 - m);
    let r = i - m;
    return r > 0
      ? `${getColumnDescription((r - 1) / 26)}${c}`: `${c}`
  }
let n = parseInt(readLine())
for(let j=0;j<n;j++){
    let i = parseInt(readLine())
    console.log(getColumnDescription(i))
}
