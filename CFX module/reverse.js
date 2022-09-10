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

/*let n = parseInt(readLine().split(' '));
let r = 0;
let digit;
while(n>0)
{
    digit = n%10;
    r = parseInt(r*10 + digit);
    n = Math.floor(n/10);
}
console.log(parseInt(+r));*/

let n = readLine().split(",");
let r = 0;
while(n !=0)
{
    let digit = n%10;
    r = r*10 + digit;
    n = parseInt(n/10);
}
console.log(r);

/*let num = readLine().split(" ");
const reverse = (num) => parseInt(String(num).split("").reverse().join(""), 10);
console.log(parseInt(reverse(num)));*/