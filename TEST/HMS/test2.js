let fs = require("fs");
let data = fs.readFileSync('./in2.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine())
let arr = readLine().split(' ')
let map={}
for(let i=0;i<arr.length;i++){
    let str = arr[i].split('').sort().join('')
    if(map[str]){
        map[str] = map[str] + 1
    }
    else{
        map[str] = 1
    }
}
let count = 0
for(let i in map){
    if(map[i]>count){
        count = map[i]
    }
}
console.log(count)