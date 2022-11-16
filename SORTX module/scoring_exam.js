let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
let [n , q] = readLine().split(" ").map((n) => parseInt(n))
let times = readLine().split(" ").map((k) => parseInt(k))  
let scores = readLine().split(" ").map((k) => parseInt(k))  
// let questions = times.map((val , key) => {
//     return [scores[key], val]
// })
let questions = [] 
for(let i = 0 ; i < n ; i ++){
    questions.push([scores[i] , times[i]])
}
questions.sort((a, b) => {
    return b[0] - a[0] ;
}) 
let c = [questions[0][1]]
for(let i = 1; i < questions.length ; i++){
   let last = c[c.length - 1]
   c.push(last+questions[i][1])
}
for(let i = 0 ; i < q; i++){
    let query = parseInt(readLine())
    console.log(c[query-1])
}