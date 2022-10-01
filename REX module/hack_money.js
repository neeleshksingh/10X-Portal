let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function hack(r,target){
    if(r==target){
        return true
    }
    if(r>target){
        return false
    }
    return hack((r*10,target) || hack(r*20,target))
}

let n = parseInt(readLine())
while(n--){
    let r =1
    let target = parseInt(readLine())
    if(hack(r,target)){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}