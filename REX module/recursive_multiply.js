let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

function multiply(n)
{
        if (n != 0)
          return n + multiply(n(n - 1));
        else
          return n;
      
}

let n = readLine().split(' ')
console.log(multiply(n))