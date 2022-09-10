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

let r = parseInt(readLine());
if(r<1200)
{
    console.log("ABC");
}
else if(r<2800)
{
    console.log("ARC");
}
else
{
    console.log("AGC");
}