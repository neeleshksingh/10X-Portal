let fs = require("fs");
let data = fs.readFileSync('./in2.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//--------------------------------------------------------
function seq(t)
{
    if(t == 1){
        return 1
    }
    let ans = 1
    let a = ((t*(t-1))/2)+1
    let b = (t*(t+1)/2)
    while(a<=b){
        ans *= a
        a++
    }
    return ans += seq(t-1)
}
let n = parseInt(readLine())
for(let i=0;i<n;i++){
    let t = parseInt(readLine())
    console.log(seq(t))
}