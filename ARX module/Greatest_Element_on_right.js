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
    for(let j =  arr.length-1;j>=0;j--) {
        newArr[j] = j === arr.length -1 ? newArr[j]=-1 : Math.max(newArr[j+1], arr[j+1]);
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