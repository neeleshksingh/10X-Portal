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

let product = 1;
let sum = 0;
let n = readLine().split('');
for(let i =0;i<n.length;i++)
{
    product *= parseInt(n[i]);
    sum += parseInt(n[i]);
}
console.log(parseInt(product - sum));