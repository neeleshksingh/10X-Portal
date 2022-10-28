let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let str1 = readLine().split("");
let str2 = readLine().split("");
let temp
for(let i=0;i<str1.length;i++)
{
    for(let j=i+1;j<str1.length;j++)
    {
        if(str1[i]>str1[j])// A >C  97>99
        {
            temp=str1[i]
            str1[i]=str1[j]
            str1[j]=temp

        }
    }
}
for(let i=0;i<str2.length;i++)
{
    for(let j=i+1;j<str2.length;j++)
    {
        if(str2[i]>str2[j])// A >C  97>99
        {
            temp=str2[i]
            str2[i]=str2[j]
            str2[j]=temp

        }
    }
}
let bool=true
for(let i=0;i<str1.length;i++)
{
  if(  str1[i]!==str2[i] )
  {
    bool=false
    break
  }

}
bool==true ? console.log(1) : console.log(0)