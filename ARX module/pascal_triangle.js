let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------

let n = parseInt(readLine());
let i;
let c=1;
for(i=1;i<=n;i++)
{
    let curr = (c*(n-i+1))/i;
    console.log(curr);
    c = curr;
}
console.log(c);