const { Console } = require("console");
let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function vowels(str){
    let set = new Set()
    set.add('a')
    set.add('e')
    set.add('i')
    set.add('o')
    set.add('u')
    for(let i=0;i<str.length;i++)
    {
        if(set.has(str[i]))
        {
            set.delete(str[i])
        }
    }
  
    if(set.size===0) 
    {
        return 'YES'
    } 
     return 'NO'
    
    
}
let length=parseInt(readLine())
let str=readLine()
console.log(vowels(str))  