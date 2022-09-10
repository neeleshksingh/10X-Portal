let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//-------------------------------------

let m = parseInt(readLine());
let n = parseInt(readLine());
let matrix = [];
let sum =0;
let oddsum= 0, evensum = 0;
for(let i=0;i<m;i++)
{
    matrix[i] = [];
    for(let j=0;j<n;j++)
    {
        matrix[i][j] = parseInt(readLine());
        sum += matrix[i][j];
        if(matrix[i][j]%2===0)
        {
            evensum+=matrix[i][j];
        }
        else
        {
            oddsum+=matrix[i][j];
        }
    }
}
console.log(matrix);
console.log(matrix[2][3]);
console.log(sum,evensum,oddsum);
for(let i=0;i<matrix.length;i++)
{
    console.log(...matrix[i]);
}
console.log(matrix[2].length);
