let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//---------------------------------------------------

let a = 21;
let b = parseInt(a/2);
let c = a%2;
let d = 3**3;

console.log(b);
console.log(c);
console.log(d);

let sum = a+b+c;
console.log(sum);

let num1 = parseInt(readLine());
num1 = num1 + 1;
console.log(num1);
num1++;
console.log(num1);
++num1;
console.log(num1);
num1 = num1-1;
console.log(num1);
num1--;
console.log(num1);
--num1;
console.log(num1);