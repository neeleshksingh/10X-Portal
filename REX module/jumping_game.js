let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function jump(arr,n) {
    if (n == 1)
        return 0;
    let res = Number.MAX_VALUE;
    for (let i = n - 2; i >= 0; i--) {
        if (i + arr[i] >= n - 1) {
            let sub_res = jump(arr, i + 1);
            if (sub_res != Number.MAX_VALUE)
                res = Math.min(res, sub_res + 1);
        }
    }
 
    return res;
}

let n = parseInt(readLine())
let arr = readLine().split(' ')
for(let i=0;i<n;i++){
    arr[i] = parseInt(arr[i])
}
console.log(jump(n))