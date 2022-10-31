
let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// 6
// 4   
// 6
// 1
// 5
// 3
// 3
// Output: [4,0,1,1,3]   //8=>1 1=>1 2=>2 3=>1 8 key [4 0 1 1 3] //[3 5 0 4 1 1]
function smallNO(arr)
{
    let map= new Map()
    for(let i=0;i<arr.length;i++)
    {
        if(map.has(arr[i]))
        {
            map.set(arr[i],map.get(arr[i])+1)
        }
        else{
            map.set(arr[i],1)
        }
    }
    
    let ar=[]
for(let i=0;i<arr.length;i++)
{
var count=0
    for(let [key,value] of map.entries())
    {
          if(arr[i]>key)
          {
            count+=value
          } 
    }
    ar.push(count)
}
for(let i=0;i<ar.length;i++)
{
    console.log(ar[i])
}
}
let size=parseInt(readLine())
let arr=[]
for(let i=0;i<size;i++)
{
    arr.push(parseInt(readLine()))
}
smallNO(arr)
// let ar=[]
// for(let i=0;i<arr.length;i++)
// {
//    var count=0
//    for(let j=0;j<arr.length;j++)
//    {
//     if(i!=j && arr[i]>arr[j])
//     {
//         count++
//     }
//    }
//    ar.push(count) 
// }
// for(let i=0;i<ar.length;i++)
// {
//     console.log(ar[i])
// }