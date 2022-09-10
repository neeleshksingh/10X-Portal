let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//-------------------------------------
let oddCount = 0;
let n = parseInt(readLine());
let seq = readLine().split(" ");
let i;
//let index = 0;
for(i=0;i<n;i++)
{
let num = parseInt(seq[i]);
    if(num%2 != 0)
    {
            oddCount++;
    }
    //index++;
}
console.log(oddCount);