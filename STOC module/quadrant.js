let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}


//----------------------------------

let n = parseInt(readLine());
let i;
for(i=0 ; i<n ; i++)
{
    let a = readLine().split(" ");
    let X = parseInt(a[0]);
    let Y = parseInt(a[1]);
    if(X>0 && Y>0)
    {
        console.log("Q1");
    }
    else if(X<0 && Y>0)
    {
        console.log("Q2");
    }
    else if(X<0 && Y<0)
    {
        console.log("Q3");
    }
    else if(X>0 && Y<0)
    {
        console.log("Q4");
    }
}
