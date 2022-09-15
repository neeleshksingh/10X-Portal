let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------
let sz = parseInt(readLine()); // 5
let arr = []; // [1,2,2,3,3]
for(let i=0; i<sz; i++){ // i=0, 1 2 3
   arr.push(parseInt(readLine()))
}
if(sz == 0) {
   console.log(-1)
} else {
   let maxCount = 0; // 2
let currCount = 1; // 1
for(let i=1; i<sz; i++) {  // i=1 2 3 4
   if(arr[i] == arr[i-1]) { //true
       currCount ++; //
   } else {
       if(maxCount < currCount) { // 1 < 2
           maxCount = currCount; // 2
       }
       currCount = 1;
   }
}
if(currCount > maxCount) {
   maxCount = currCount;
}
let res = [];
currCount = 1;
for(let i=1; i<sz;i ++){
       if(arr[i] == arr[i-1]) { //true //false
           currCount ++; //3
       } else {
           if(maxCount == currCount) { // 3 < 2 //false
               res.push(arr[i-1]);
           }
           currCount = 1;
       }
   }
   if(currCount == 4) {
       res.push(arr[sz-1]);
   }
   for(let i=0; i<res.length; i++) {
       console.log(res[i])
   }
}
