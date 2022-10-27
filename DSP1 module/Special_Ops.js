let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

let testcase = parseInt(readLine());
for (let i = 0; i < testcase; i++) {
  let ele = readLine().split(" ").map(Number);
  let arr = readLine().split(" ").map(Number);
  let take = ele[0] - ele[1];
  let sot = arr.sort((a, b) => a - b);
  let start = 0,
    end = sot.length - 1,
    max = 0,
    min = 0;
  while (start < take) {
    min += sot[start];
    max += sot[end];
    start++;
    end--;
  }
  console.log(max-min)
}