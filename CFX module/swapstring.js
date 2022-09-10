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

//---------------------------------------------------------

let str = readLine().split("");
let UPPER = [];
let LOWER = [];
let res = [];
for(let i=0;i<str.length;i++)
{
    if(UPPER.indexOf(str[i]) !== -1)
    {
      res.push(str[i].toLowerCase());
    }
    else if(LOWER.indexOf(str[i]) !== -1)
    {
      res.push(str[i].toUpperCase());
    }
    else 
    {
      res.push(str[i]);
    }
}
console.log(res.join(""));