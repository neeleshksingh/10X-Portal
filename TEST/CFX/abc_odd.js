let fs = require("fs");
const { format } = require("path");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//---------------------------------------------------------

let num = readLine().split(" ").map(Number);
let A = num[0];
let B = num[1];
let C = 1;
let mark = 0;
while (C <= 3) {
  if ((A * B * C) % 2 !== 0) {
    mark = 1;
    break;
  }
  C++;
}
if (mark == 1) {
  console.log("Yes");
} else {
  console.log("No");
}


/*let n = readLine().split(' ');
//console.log(n);
let a = parseInt(n[0]);
let b = parseInt(n[1]);
let c = a*b*3;
//console.log(c);
if(c%2 == 0)
{
    console.log("No");
}
else{
    console.log("Yes");
}*/