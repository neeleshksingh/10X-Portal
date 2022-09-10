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

let num = parseInt(readLine());
let i,j;
for(j=1;j<=num;j++)
{
    for(i=1;i<=j;i++)
    {
        console.log(i);
    }   
    console.log("Neelesh");
}