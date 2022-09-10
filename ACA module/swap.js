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

//-------------------------------------

/*let a = parseInt(readLine());
let b = parseInt(readLine());
let temp = a;
a = b;
b =temp;
console.log("a=", a);
console.log("b=", b);*/

let n = parseInt(readLine());
let seq = [];
for(let i = 0; i<n; i++)
{
    seq[i] = parseInt(readLine());
}
let temp;
for(let i=0,j = seq.length-1;i<j;i++,j--)
{
    temp = seq[i];
    seq[i] = seq[j];
    seq[j] = temp;
}
console.log(seq);