let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//-------------------------------------
let n = readLine();
let i;
let count = 1;
let a = parseInt(readLine());
for(i=1;i<=n-1;i++)
{
    let num = parseInt(readLine());
    if(a == num)
    {
        count++;
    }
}
console.log(count);