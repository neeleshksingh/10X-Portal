let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//----------------------------------------------------------

let n = parseInt(readLine());
let j;
let a="";
for(j=1;j<=n;j++)
{
    let i;
    for(i=n;i>j;i--)
    {
        a += " ";
    }
    for(let k=0;k<i*2-1;k++)
    {
        a +="*";
    }
    a += "\n";
}

for(let i = 1; i<=n-1; i++)
{
    for(let j=0;j<i;j++)
    {
        a += " ";
    }
    for(let k =(n-i)*2 -1; k>0; k--)
    {
        a += "*";
    }
    a += "\n";
}
console.log(a);