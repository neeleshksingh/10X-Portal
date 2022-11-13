let fs = require("fs");
let data = fs.readFileSync('./in1.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
function compare_versions(str1,str2){
    var v1 = str1.split(".").map(x=> +x);
    var v2 = str2.split(".").map(x=> +x);
    for(var i =0 ;i<Math.max(v1.length,v2.length);i++){
        if(i<v1.length && i<v2.length){
        if(v1[i]<v2[i])     return -1;
        if(v1[i]>v2[i])     return 1;
        continue;
    }
    if(i<v1.length && v1[i]>0)  return 1;
    if(i<v2.length && v2[i]>0)  return -1;
}
return 0;
}
let n = parseInt(readLine())
for(let i =0 ; i<n; i++){
    let str = readLine().split(" ")
    var str1=str[0];
    var str2=str[1];
    console.log(compare_versions(str1,str2));
}