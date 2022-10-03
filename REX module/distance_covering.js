let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function printCountRec(dist)
{
    
}
 
// driver program
let t = parseInt(readLine())
while(t--){
let dist = readLine()
let a = parseInt(dist[0])
let b = parseInt(dist[1])
console.log(printCountRec(dist))
}
