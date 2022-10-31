let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

let name = readLine()
let test = parseInt(readLine())
for(let i=0;i<test;i++){
    let marks = parseInt(readLine())
    console.log(marks)
}
let querry = parseInt(readLine())
for(let i=0;i<querry;i++){
    let 
}

