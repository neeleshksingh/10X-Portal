let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function sumofFirstn(n)
{
        if (n != 0)
          return n + sumofFirstn(n - 1);
        else
          return n;
      
}


let n = parseInt(readLine())
console.log(sumofFirstn(n))