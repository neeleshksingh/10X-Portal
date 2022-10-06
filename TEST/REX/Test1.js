let fs = require("fs");
let data = fs.readFileSync('./in1.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//--------------------------------------------------------

let n = readLine()
function valueOfCoin(n,i){
    if(i==n.length -1){
        return n[i]
    }
    return parseInt(n[i]) + parseInt(valueOfCoin(n,i+1))
}
console.log(valueOfCoin(n,0))

