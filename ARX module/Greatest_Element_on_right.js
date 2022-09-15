let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------
function replaceElements(arr){
    // Implement this function   
    let newArr = [];
    let last = -1;
    newArr.push(last);
    while(arr.length>1) {
        let temp = arr.pop();
        last = Math.max(last, temp);
        newArr.unshift(Math.max(last, temp))
    }
    return newArr;
}

// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index=0;index<numElems;index++){
        arr.push(parseInt(readLine()));
}
let res=replaceElements(arr);
for(elem of res){
  console.log(elem);
}

// Alternate Method

/*
function replaceElements(arr)
{
    let ar = []
    ar[arr.length-1] = -1
for (let i = arr.length-2; i>=0; i--) 
{
    ar[i] = Math.max(ar[i+1], arr[i+1])
}
return ar
}

// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index=0;index<numElems;index++){
        arr.push(parseInt(readLine()));
}
let res=replaceElements(arr);
for(elem of res){
  console.log(elem);
}
*/