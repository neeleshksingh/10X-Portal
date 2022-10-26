let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

class CarSell{
    constructor(arr)
    {
       this.arr=arr
    }
    getPromisingCustomers(){
        let bool=false
      for(let i=0;i<this.arr.length;i++)
      {
            if(this.arr[i] >=900000)
            {
                console.log(i)
                bool=true
            }
      }
      if(bool==false)
      {
        console.log(-1)
      }
    }
}

let n=parseInt(readLine())
let arr=[]
for(let i=0;i<n;i++)
{
    arr.push(parseInt(readLine()))
}
let obj=new CarSell(arr)
obj.getPromisingCustomers()