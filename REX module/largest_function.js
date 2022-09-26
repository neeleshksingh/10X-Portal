let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function largestElement(A){
    // Code here
	  let max = A[0];
  for(let i =0;i<n;i++){
    if(max < A[i]){
      max = A[i];
    }
  }return max;
}
// --------- Do NOT edit Below this line -----------
function ConvertToNumber(list){
  for(let each in list){
      list[each]=Number(list[each]);
  } 
}

let n = parseInt(readLine());
let A=readLine().split(" ");
ConvertToNumber(A);
console.log(largestElement(A));