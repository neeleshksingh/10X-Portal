let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function addSum(arr,target,pos,length,empty){
    
    if(target==0 && pos==length)
    {
        empty[0]++
    }
   else if(pos>length)
    {
        return 
    }
    
    else
    {
     
        addSum(arr,target-arr[pos],pos+1,length,empty)
        addSum(arr,target+arr[pos],pos+1,length,empty)
           addSum(arr,target,pos+1,length,empty)
           
        
         
    }
    return empty[0]
}
let target=parseInt(readLine())
let length=parseInt(readLine())
let arr=readLine().split(' ').map(Number)
let pos=0,empty=[0]
console.log(addSum(arr,target,pos,length,empty))