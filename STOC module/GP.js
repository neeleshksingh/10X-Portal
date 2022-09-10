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

/*let a = parseFloat(readLine());
let b = parseFloat(readLine());
//let c = parseFloat(readLine());  //alternative solution 
let n = 4;
let r = b/a;
let GP = a*(r**(n-1));
console.log(GP);*/

let a = parseInt(readLine());
let b = parseInt(readLine());
let c = parseInt(readLine());
let r = b/a;
let GP = parseInt(r*c);
console.log(GP);