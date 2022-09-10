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

let n = parseInt(readLine());
let matrix = [];
for(let i = 0; i<n; i++)
{
    let row = readLine().split(' ');
    matrix[i] = [];
    for(let j = 0; j<n;j++)
    {
        matrix[i][j] = parseInt(row[j]);
        if(i == j || i+j==n-10)
        {
            if(matrix[i][j]<0)
            {
                matrix[i][j] = 0;
            }
            else
            {
                matrix[i][j]=1;
            }
        }
    }
}
let a =0;
let b=0;
for(let i=0;i<n;i++)
{
    for(let j=0;j<n;j++)
    {
        if(i==j)
        {
            a += matrix[i][j];
        }
        if((i+j)==(n-1))
        {
            
        }
    }
}
//console.log(matrix);
    //for(let i =0;i<n;i++)
    {
        console.log(...matrix[i]);
    }