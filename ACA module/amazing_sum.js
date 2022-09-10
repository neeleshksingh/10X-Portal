let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//----------------------------------------------------------

/*let n = parseInt(readLine())
let i;
let arr = [];
let arr1 = [];
let max=0;
for(i=0;i<n;i++)
{
    arr[i] = parseInt(readLine());
}
for(let j = 0; j<n-1;j++)
{
    arr1[j] = (arr[i]+arr[j+1]);
    if(arr1[j]>max)
    {
        max = arr1[j];
    }
}
    let flag = false;
    if(max>100)
    {
        flag = true;
    }
    console.log(flag);*/

    let n = parseInt(readLine());
    let sum = parseInt(readLine());
    let mark;
    for(let i =1; i<=n-1; i++)
    {
        let a = parseInt(readLine());
        
        sum += a;
        if(sum>100)
        {
            mark =1;
            console.log("true");
            break;
        }
        sum=a;
    }
   if(mark!=1){
    console.log("false");
   }
    