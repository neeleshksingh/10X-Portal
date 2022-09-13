/*
let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
*/
//-----------------------------------

function add(var1, var2)
{
    var1 = var1 + 2;           //7
    var2 = var2 + 3;           //9
    console.log(var1);  //------------------>>7
    console.log(var2);  //------------------>>9                
    return var1+var2;          //16
}

let var1 = 5;
let var2 = 6;

let answer = add(var1, var2);
console.log(var1);      //------------------>>5
console.log(answer);   //------------------->>7+9 = 16