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

//without array operation

/*let n = parseInt(readLine());
let givenSeq = [];
let reverseSeq = [];
for(let i=0;i<n;i++)
{
    givenSeq[i] = parseInt(readLine());
   // reverseSeq[n-i] = givenSeq[i];
}
for(let i =n-1, j = 0; i>=0;i--,j++)
{
    reverseSeq[j] = givenSeq[i];
}
console.log(reverseSeq);*/

//with array operation

let n = parseInt(readLine());
let reverseSeq = [];
for(let i = 0; i<n; i++)
{
    reverseSeq.unshift(parseInt(readLine()));
}
console.log(reverseSeq);