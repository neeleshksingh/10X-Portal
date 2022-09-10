let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//----------------------------------------------------------
let n = parseInt(readLine());
let e = 0;
//let sum=0;
let i;
for( i=1; i<=n; i++)
{
    let age = parseInt(readLine());
    if(age<=18)
    {
        continue;
    }
    e++;
    //sum=sum+age;
}
console.log(e);
//console.log(sum);