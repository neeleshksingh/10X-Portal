let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
function matchMaker(girls,boys)
{
    let c=0
    for(let i=0;i<girls.length;i++)
    {
        if(girls[i]%boys[i]===0 || boys[i]%girls[i]===0)
        {
            c++
        }
    }
    return c
}
let testCases=parseInt(readLine())
while (testCases--)
{
    let n=parseInt(readLine())
    let girsl_asc=readLine().split(' ').map(Number).sort((a,b)=>a-b)
    let boys_desc=readLine().split(' ').map(Number).sort((a,b)=>b-a)
    console.log(matchMaker(girsl_asc,boys_desc))
}