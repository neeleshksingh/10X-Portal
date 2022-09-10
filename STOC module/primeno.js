let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------------

let n = parseInt(readLine());
{
    for(i=1;i<=n;i++)
    {
        if(n%i == 0)
        console.log(i);
    }
}