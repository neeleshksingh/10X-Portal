let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
function fibonacci(num) {
    if(num<2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

let n = parseInt(readLine());
if(n <=0) {
    console.log(-1);
}
else {
    for(let i = 0; i < n; i++) {
        console.log(fibonacci(i));
    }
}