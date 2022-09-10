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

let unitPrice = parseFloat(readLine()); //parseInt used for giving an Integer Input and not a character.
let gst = parseFloat(readLine());
let gstPer = unitPrice * (gst/100);
let finalPrice = unitPrice + gstPer;
console.log(finalPrice);





