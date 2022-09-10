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

let num = parseInt(readLine());
let j;
for(j=1;j<=num;j++)
{
    let num1 = parseInt(readLine());
    let mark = 0;
    let i;
    for(i=2; i<num1-1; i++)
    {
        if(num%i == 0)
        {
            mark = 1;
            break;
        }
    }
    if(mark==1)
    {
        console.log("not prime");
    }
    else
    {
        console.log("prime");
    }
}