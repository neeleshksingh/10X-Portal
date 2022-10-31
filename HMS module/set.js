// let abc=new Set()
// abc.add('a')
// abc.add('e')
// for(let [key,value] of abc.entries())
// {
// console.log(value)
// }
// console.log(abc.has('a'))//add
// console.log(abc.size)


//data store ,{u}}

//str yebaeuhfiou // y  abc.has(str[i]) 0  y  false  true  
let xyz=new Map();
xyz.set(a,4)
xyz.set(true,'hello') // map-name.set(key,value)
             // map-name.get(key)
xyz.set('name','neelesh')
xyz.set('age',25)
console.log(xyz.has(true))

console.log(xyz.size)
for(let key of xyz.keys())

console.log(key)
//aabbccaaa {0,1,0,1,0,1,2,3,4}
function countingStars(str,size)
{
    let map = new Map;
    for(let i=0;i<size;i++)  // a   b a ab map(1){a=>2,b=>1, },
    {
        if(map.has(str[i]))
        {
            map.set(str[i],map.get(str[i])+1)
        }
        else
        {
            map.set(str[i],0)
        }
    }
    let sum=0
    for(let value of map.values()) //  {a=>4,b=>1,c=>1}
    {
      
          while(value>0)//4>0 3>0
          {
            sum+=value //4+3=7 +2 =9+1=10+1+1=15
            value--  //3 2 1 0
          
    }
  return sum
}
let testCases=parseInt(readLine())
for(let i=0;i<testCases;i++)
{
    let size=parseInt(readLine())
    let str=readLine()
    console.log(countingStars(str,size))
}

///aabbccaaa  {a=>4,b=>1,c=>1}