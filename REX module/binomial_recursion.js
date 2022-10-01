let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function coefficients(n,r){
    if(r==0 || n==r){
        return 1;
    }
    return (coefficients(n-1,r-1) + coefficients(n-1,r))

}
let t = parseInt(readLine())
while(t--){
    let input = readLine().split(' ')
    let n = parseInt(input[0])
    let r = parseInt(input[1])
    console.log(coefficients(n,r))
}