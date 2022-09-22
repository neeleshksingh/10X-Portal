let fs = require("fs");
let data = fs.readFileSync('./in1.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

//-----------------------------------------------

let n = parseInt(readLine())
let arr = readLine().split(' ').map(Number)
let score = 0
let max = 0
  for(let i=n-1;i>=0;i--){
    if(max<arr[i]){
      max = arr[i]
    }
    score += max-arr[i]
    
  }console.log(score)

  