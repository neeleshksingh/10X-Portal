let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function doubleOFsquare(n)
{
    if(n>0){
        return n*2
    }
    return n*n
}
let n = parseInt(readLine())
console.log(doubleOFsquare(n))