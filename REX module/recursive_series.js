let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function recursive(n) {
  if (n <= 9) {
    return n;
  } else if (n % 2 === 0 && n > 9) {
    return recursive(n - 10);
  } else if (n % 2 !== 0 && n > 9) {
    return recursive(n - 9);
  }
}
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  console.log(recursive(num));
}