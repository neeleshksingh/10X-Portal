let fs = require("fs");
let data = fs.readFileSync('./in1.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
function Ropes(arr, n) {
  arr.sort((a, b) => a - b)
  let flag = 0;
  let cut = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] - cut > 0) {
      console.log(n - i);
      cut = arr[i];
      flag++;
    }
  }
  if (flag == 0)
    console.log(0)
}
let n = parseInt(readLine())
let arr = []
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(readLine())
}
Ropes(arr, n)
