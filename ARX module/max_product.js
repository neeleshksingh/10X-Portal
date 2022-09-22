let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------

let a = parseInt(readLine());
let b = parseInt(readLine());
let c = readLine().split(' ');
let d = readLine().split(' ');
for(let i=0;i<a;i++)
{
   c[i] = parseInt(c[i]);  
}
for(let i=0;i<b;i++)
{
    d[i] = parseInt(d[i]);
}
let res = c[0];
for(let j=0;j<a;j++)
{
  if(c[j]<0)
  {
   c[j] = Math.abs(c[j])
  }
    res = Math.max(res, c[j]);
}
let res2 = d[0];
for(let i=0;i<b;i++)
{
    if(d[i]<0)
    {
        d[i]=Math.abs(d[i]);
    }
    res2 = Math.max(res2, d[i]);
}
let a1 = res;
let b1= res2;
let ans = (a1*b1);
console.log(Math.abs(ans));


// Alternate Method

/*
let m = parseInt(readLine());
let n = parseInt(readLine());
let arr1 = readLine().split(" ").map(Number);
let arr2 = readLine().split(" ").map(Number);
for (let i = 0; i < arr1.length; i++) {
  arr1[i] = Math.abs(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = Math.abs(arr2[i]);
}
let max = arr1[0];
for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] > max) {
    max = arr1[i];
  }
}
let maxx = arr2[0];
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > maxx) {
    maxx = arr2[i];
  }
}
console.log(max * maxx);

*/