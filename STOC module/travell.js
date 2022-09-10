let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//-------------------------------------------

let age = parseInt(readLine());
if(age>60)
{
    console.log("Eligible");
}
else
{
    console.log("Not eligible");
}
