let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function getGCD(a, b) {
    if (a == 0 && b == 0) {
        console.log("Infy");
        return -1;
    } else if (a == 0) {
        return b;
    } else if (b == 0) {
        return a;
    } else if (b % a == 0) {
        return a;
    } else if (a <= b) {
        return getGCD(a, b % a);
    } else {
        return getGCD(b, a % b);
    }
}

let n = parseInt(readLine())
for(let i=0;i<n;i++){
    let [a,b] =  readLine().split(' ').map(Number)
    let num = [a,b]
    console.log(getGCD(a,b));
}
