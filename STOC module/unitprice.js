let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//---------------------------------------------

let UP = readLine().split(" ");
//UP = UP.split(" ");
//console.log(UP);

let unitPrice = parseInt(UP[0]);
let noUnit = parseInt(UP[1]);
let noDay = parseInt(UP[2]);

let result = unitPrice*noUnit*noDay;
console.log(result);