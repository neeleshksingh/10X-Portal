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
for(let i=0; i<n; i++)
{
    arr[i] = parseInt(readLine());
}
//console.log(arr);
//arr = arr.sort();
let ct = 1;
let num =1;
let k = 0;
let temp = 0;
let arr2 = [];
for(i=0; i<n; i++)
{
    ct = 0;
    for(j=i; j<n; j++)
    {
        if(arr[i]==arr[j])
        {
            ct++;
        }
    }
    if(ct==1)
    {
        continue;
    }
    else if(ct>=num)
    {
        temp = ct;
        ct = num;
        num = temp;
        arr2[k] = arr[i];
        k++;
    }
}
//console.log(arr2);
temp = 0;
for(i=0; i<arr2.length; i++)
{
    for(j=i; j<arr2.length; j++)
    {
        if(arr2[i]>arr2[j])
        {
            temp = arr2[i];
            arr2[i] = arr2[j];
            arr2[j] = temp;
        }
    }
}
//console.log(arr2);
if(arr2.length === 0)
{
    console.log(-1);
}
else
{
    for(i=0; i<arr2.length; i++)
    {
        console.log(arr2[i]);
    }
}