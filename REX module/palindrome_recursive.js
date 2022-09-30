let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function isPalindrome(s,i){
    if(i > s.length/2)
            {return true;}
        return s[i] == s[s.length-i-1] && isPalindrome(s, i+1)
    } 
         
    let n = parseInt(readLine())
    for(let i=0;i<n;i++){
        let s = readLine()
        let ans = isPalindrome(s, 0);
        if (ans == true)
            {
                console.log("True");}
        else
            {
                console.log("False");}
    }
   