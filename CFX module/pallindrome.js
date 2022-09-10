let fs = require("fs");
const { format } = require("path");
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

let num=parseInt(readLine())
let temp=num
let rev=0
while(num!=0)
{
    let rem=num%10
    rev=rev*10+rem
    num=parseInt(num/10)
}
if(temp==rev)
{
    console.log('True')
}
else console.log('False')

