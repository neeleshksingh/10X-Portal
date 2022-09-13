let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------

let a = parseInt(readLine());
let b = parseInt(readLine());
let c = readLine().split(' ');
let d = readLine().split(' ');
for(let i=0;i<a;i++)
{
   c[i] = parseInt(c[i]);  
}
for(let i=0;i<b;i++)
{
    d[i] = parseInt(d[i]);
}
let res = c[0];
for(let j=0;j<a;j++)
{
   res = Math.max(res, c[j]);
}
let res2 = d[0];
for(let i=0;i<b;i++)
{
    if(d[i]<0)
    {
        d[i]=Math.abs(d[i]);
    }
    res2 = Math.max(res2, d[i]);
}
let a1 = res;
let b1= res2;
let ans = (a1*b1);
console.log(Math.abs(ans));