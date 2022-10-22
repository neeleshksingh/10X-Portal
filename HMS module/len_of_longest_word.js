const { captureRejectionSymbol } = require("events");
let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//------------------------------------------------

let s = readLine().split(' ')
let count = 0;
let longest_word;  
for (let i = 0; i < s.length; i++) {
    if (s[i].length > count) {
        count = s[i].length;
        longest_word = s[i].length; 
    }
}
console.log(longest_word);
  
