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
let evenCount = 0;
let n = parseInt(readLine());

let i;
for(i=0;i<n;i++)
{
let num = parseInt(readLine());
    if(num%2 != 0)
    {
        oddCount++;
    }
    
    else
    {
        evenCount++;
    }
}
console.log(oddCount);
console.log(evenCount);