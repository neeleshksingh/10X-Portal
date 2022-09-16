const { countReset } = require("console");
let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

let n = parseInt(readLine())
let arr = []
for(let i=0;i<n;i++)
{
    arr[i] = parseInt(readLine())
    //console.log(arr[i])
}
for(let j =0;j<arr.length;j++)
{
    let count = 0;
    for (let i = 0; i<arr.length;i++)
    {
        if(arr[j]==arr[i])
        {
            count++
        }
    }
    if(count == arr[j])
    {
        console.log(arr[j])
        break
    }
    console.log(-1)
} 