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

let m = parseInt(readLine());
let n = parseInt(readLine());
let count = 0;
for(m=m;m<=n;m++)
{
    if(m>=0)
    {
        count++;
        console.log(m);
    }
}
if(count==0)
{
    console.log("-1");
}