let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
/*
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
}*/

function hackMoney(r,n){
    if(n==r)
        return true
    if(r>n)
        return false
    return hackMoney(r*10,n) || hackMoney(r*20,n)
}

let t = parseInt(readLine());
for(let i=1 ; i<=t ; i++){
    let r = 1;
    let n = parseInt(readLine());
    if(hackMoney(r,n))
        console.log("Yes");
    else
        console.log("No")
}