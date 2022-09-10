let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
 //-----------------------------------
 
 let n = parseInt(readLine());
 if(n>0)
 {
    console.log(n*2);
 }
 else
 {
    console.log(n*n);
 }
