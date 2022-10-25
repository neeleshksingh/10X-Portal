let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function compress(str) {
    let empty = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        empty += str[i];
        if (count > 1) {
          empty += count;
        }
        count = 1;
      }
    }
    return empty;
  }
  let test_cases = parseInt(readLine());
  for (let i = 0; i < test_cases; i++) {
    let str = readLine();
    console.log(compress(str));
  }