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


let input = readLine().split(" ");
let n = parseInt(input[0]);
let x = parseInt(input[1]);
let count = 0;
let arr = readLine().split(" ");
for(let i=0; i<n; i++){
    arr[i]=parseInt(arr[i]);
    if((arr[i]%x)===0)
   count++;
}
  console.log(count);