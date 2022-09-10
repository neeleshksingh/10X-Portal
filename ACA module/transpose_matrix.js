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

//-------------------------------------

let m = parseInt(readLine());
let matrix = [];
for(let i=0;i<m;i++)
{
    let values = readLine().split(' ');
    matrix[i] = [];
    for(let j=0;j<values.length;j++)
    {
        matrix[i][j]= parseInt(values[j]);

    }
}
console.log(matrix);
let transpose = [];
let n = matrix[0].length;
for(let i =0;i<n;i++)
{
    transpose[i]= [];
    for(let j=0;j<matrix.length;j++)
    {
        transpose[i][j]=matrix[j][i];
    }
}
console.log(transpose);