let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function sum(arr, target, pos, length, empty) {
    if (target == 0) {
      return empty[0]++;
    }
    if (target < 0) {
      return;
    }
    if (pos == length) {
      return;
    } else {
      sum(arr, target - arr[pos], pos, length, empty);
      sum(arr, target, pos + 1, length, empty);
    }
    return empty[0];
  }
  let n = readLine().split(" ").map(Number);
  let arr = readLine().split(" ").map(Number);
  let target = n[1],
    pos = 0,
    length = n[0],
    empty = [0];
  console.log(sum(arr, target, pos, length, empty));