let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
function longestSubs(str){
let substr = new Set();
let i = 0;
let ans = 0;
for (let j = 0; j < str.length; ++j) {
    while (substr.has(str[j])) {
        substr.delete(str[i++]);
    }
    substr.add(str[j]);
    ans = Math.max(ans, j - i + 1);
}
return ans;
}
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
  let str = readLine();
  console.log(longestSubs(str));
}