let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------

let n = readLine().split(' ')
let x = n[0]          //array size
let y = n[1]          //query size
let arr =[]
for(let i = 0;i<x.length;i++)
{
    arr = readLine().split(' ')
    console.log(arr)
}

//console.log(x)
//console.log(y)
for(let i=0;i<y.length;i++)
{
    let q1 = readLine().split(' ')
    //console.log(q1)
    let a = parseInt(q1[0])    // initial range of query
    let b = parseInt(q1[1])    // last range of query
    console.log(a, b)
    let temp =arr.indexOf(a, b)
    console.log(temp)
    
}
    