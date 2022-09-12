let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------

let n = parseInt(readLine());
let arr = [];
let rows;
for (let i = 0; i < n; i++) 
{
  rows = readLine().split(" ");
  arr[i] = [];
  for (let j = 0; j < rows.length; j++) 
  {
    arr[i][j] = parseInt(rows[j]);
  }
}
for(let i=0;i<rows;i++)
{
    for(let j=i;j<4/2;j++)
    {
        if(i!=j)
        {
            let temp = arr[i][j];
            arr[i][j]=arr[i][2-j-1];
            arr[i][2-j-1]=temp;
        }
    }console.log(...arr[i]);
}