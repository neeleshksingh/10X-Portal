let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------


function matrix_diagonal (arr, n)
{
    let elem = 0;
for(let i =0; i<n; i++)
{
    for(let j=0; j<n; j++)
    {
        if(i == n-j-1)
        {
            console.log(arr[i][j]) ;
        }
    }
}
}
let n = parseInt(readLine());
let arr = [];
for(let i=0; i<n; i++)
{
    let a = readLine().split(" ");
    arr[i] = [];
    for(let j=0; j<n; j++)
    {
        arr[i][j] = parseInt(a[j]);
    }
}
matrix_diagonal(arr, n);