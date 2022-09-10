let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//-------------------------------------

/*let n= readLine().split(" ");
let a= parseInt(n[0]);
let b= parseInt(n[1]);
let num= a+b;
if(num<=12){
    console.log(num%12);
}
else{
    console.log(num=num%12);
}*/
let n = readLine().split(" ");
let sum =0;
for(i=0; i<n.length; i++)
{
    let a = parseInt(n[i]);
    sum = sum + a;
}
while(sum>12)
{
    sum = sum -12;
}
console.log(sum);