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

/*let n = parseInt(readLine().split(' '));
if(n[0]%n[1]==0)
{
    console.log(0);
}
else
{
    console.log(1);
}
*/
let arr = readLine().split(" ");
let N = parseInt(arr[0]);
let k = parseInt(arr[1]);
if (N % k === 0) {
  console.log(0);
} else {
  console.log(1);
}