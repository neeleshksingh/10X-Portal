let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
 //-----------------------------------
 
function doubleOrSquare(number) 
{
   if(number>0)
   {
      return number*2;
   }
   return number*number;
}


// -------- DO NOT CHANGE ANYTHING BELOW THIS LINE --------
let n = parseInt(readLine());
console.log(doubleOrSquare(n));
