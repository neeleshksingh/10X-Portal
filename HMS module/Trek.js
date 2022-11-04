let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
function climb(str){
    let prev=0,current=0,valleycount=0
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==='U')
        {
            current++ // 1
        }
        else if(str[i]==='D')
        {
            current-- // 0 -1
        }
        if(prev===0 && current === -1 )
        {
            valleycount++
        }
        prev=current // 1 // 0 //-1

       
    }
    return valleycount
    
}
let test=parseInt(readLine())
for(let i=0;i<test;i++)
{
let length=parseInt(readLine())
let str=readLine()
console.log(climb(str))
}