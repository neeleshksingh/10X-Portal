let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//---------------------------------------------------------

let n = parseInt(readLine());
let set = new Set(arr);
for(let i=0;i<n;i++)
{
    if(set.has(arr))
    {
        set.delete(arr);
    }
    else{
        return arr;
    }
}
console.log(arr);