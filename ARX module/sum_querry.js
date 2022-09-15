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
let x = parseInt(n[0]) //array size
let y = parseInt(n[1])   //query size
let arr = readLine().split(" ")
for(let i = 0;i<x;i++)
{                      
    arr[i] = parseInt(arr[i])
    
}//console.log(arr)  
for(let j=0;j<y;j++)
    {
        
        let q1 = readLine().split(' ')
       
        let a = parseInt(q1[0])    // initial range of query
        let b = parseInt(q1[1])    // last range of query
        
        //console.log(a,b)  
        let sum=0;
        for(let i=a;i<=b;i++)
        {
            sum += arr[i]
        } 
        console.log(sum)
    }