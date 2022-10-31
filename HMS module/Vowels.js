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
    let vovo = new Set()
    vovo.add('a')
    vovo.add('e')
    vovo.add('i')
    vovo.add('o')
    vovo.add('u')
    for(let i=0;i<str.length;i++)
    {
        if(vovo.has(str[i]))
        {
            vovo.delete(str[i])
        }
    }
    if(vovo.size===0) 
    {
        return 'YES'
    } 
     return 'NO'   
}
let length=parseInt(readLine())
let str=readLine()
console.log(vowels(str))

// // atuongihe
// //NO
// a e i o u
// a = a
// t = 
// u = u
// o=o
// n

// setsize = 5
// setsize = 1
