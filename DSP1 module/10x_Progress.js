let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

class Student{
    constructor(name)
    {
        this.name=name
    }
  get_avrg_score(arr)
  {
     let avrg=0,sum=0
     for(let i=0;i<arr.length;i++)
     {
         sum+=arr[i]
     }
     avrg=Math.round(sum/size)
     return `${this.name} average score: ${avrg}`
  }
  get_test_score(no,arr){
     if(no>arr.length)
     {
        return `${this.name} test ${no} marks: NA`
     }
     return `${this.name} test ${no} marks: ${arr[no-1]}`
  }
}

let name=readLine()
let obj=new Student(name)
let size=parseInt(readLine())
let arr=[]
for(let i=0;i<size;i++)
{
    arr.push(parseInt(readLine()))
}
let no_of_query = parseInt(readLine())
// console.log(no_of_query)
while(no_of_query--)
{
    let q=readLine()
    if(q=='get_marks')
    {
        var score_no=parseInt(readLine())
        console.log(obj.get_test_score(score_no,arr))
    }
    else{
        console.log(obj.get_avrg_score(arr))
    }
}


