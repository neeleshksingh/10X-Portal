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
for(let i=0;i<n;i++)
{
    let x = readLine().split(" ");
    let c = parseInt(x[0]);
    let b = parseInt(x[1]);
    if (b>c)
    {
        console.log("Invalid");
    }
    else
    {
     let z = b%8;
        if(z==1 || z==4) console.log("L");
        else if (z==2 || z==5) console.log("M");
        else if (z==3 || z==6) console.log("U");
        else if (z==7) console.log("SL");
        else if (z==0) console.log("SU");
    }
}