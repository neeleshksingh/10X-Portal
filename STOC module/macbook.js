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
let mark =0;
let i;
for(i=0;i<n;i++)
{
    let seq = parseInt(readLine());
    if(seq>0)
    {
        mark += seq;
    }  
}
console.log(mark);
