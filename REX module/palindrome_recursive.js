let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function checkPalindrome(s1){
    if(s1.length === 1) 
    {
        return true;
    }
    if(s1.length === 2) 
    {
        return s1[0] === s1[1];
    }
    if(s1[0] === s1.slice(-1)) 
    {
        return checkPalindrome(s1.slice(1,-1))
    }
    return false;
}

let n = parseInt(readLine())
let s1 = []
//let s2 = String(readLine())
//console.log(n)
for(let i=0;i<n;i++){
   s1[i] = String(readLine())
}console.log(s1)
let checkPalindrome = s1
console.log(checkPalindrome(s1))