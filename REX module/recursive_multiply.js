let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

function multiplyRecursive(num) {
  if (num < 10) {
    return num;
  }
  let rem = num % 10;
  return rem * multiplyRecursive(parseInt(num / 10));
}
let t = parseInt(readLine());
let num = 0;
for (let i = 0; i < t; i++) {
  num = parseInt(readLine());
  console.log(multiplyRecursive(Math.abs(num)));
}