let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//---------------------------------------------------------

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(readLine());
}
let flag = 1;
if (arr[0] <= arr[1]) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
      continue;
    } else {
      flag = 0;
      break;
    }
  }
  if (flag == 0) {
    console.log(0);
  } else {
    console.log(1);
  }
} else {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      continue;
    } else {
      flag = 0;
      break;
    }
  }
  if (flag == 0) {
    console.log(0);
  } else {
    console.log(1);
  }
}