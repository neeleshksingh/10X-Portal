let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

let n = parseInt(readLine())
let income = []
let children = []
for(let i=0;i<n;i++){
    income[i] = parseInt(readLine())
}
let avg=0
let avgIncome=0
let ans=0
for(let i=0;i<income.length;i++){
    children[i] = parseInt(readLine())
    if(children[i]>2){
        avg++
        avgIncome =+ income[i]
        ans += avgIncome     
    } 
}
if(avg===0){
    console.log(-1)
}
else{
    console.log(Math.floor(ans/avg))
}


