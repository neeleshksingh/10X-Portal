let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
function differenceOfSumOfEvenOddIndexnumbers(numbers)
{
    let arr = numbers
    let sum =0
    for(let i=0;i<arr.length;i++)
    {
        if(i%2!=0)
        {
            sum -= arr[i]
        }
        else{
            sum += arr[i]
        }
    }return sum
}


// Do not change anything below this line
function ConvertToNumber(list){
    for(let each in list){
        list[each]=Number(list[each]);
    }
    
  }
  
  
  let numbers =readLine().split(" ");
  ConvertToNumber(numbers);
  console.log(differenceOfSumOfEvenOddIndexnumbers(numbers));