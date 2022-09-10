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


let n= parseInt(readLine())
for(let i=0;i<n;i++)
{
    let arr=readLine().split(' ').map(Number)
    let x1=arr[0],v1=arr[1],x2=arr[2],v2=arr[3]
    if (v2 > v1 && x2 > x1) {
    console.log("NO");
  } else if((x2-x1)%(v2-v1)===0){
    console.log("YES");
  }
  else{
    console.log('NO')
  }
}