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

let P = parseFloat(readLine()); //parseInt used for giving an Integer Input and not a character.
let T = parseFloat(readLine());
let R = parseFloat(readLine());
let SI = (P*R*T)/100;
console.log(SI);