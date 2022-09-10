let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-----------------------------------

function factorial(number)
{
    if (number < 0)
    { 
        return undefined;
    }
    else if (number == 0) 
    {
        return 1;
    }
    else 
    {
        return (number * factorial(number - 1));
    }   
}
    
let number = parseInt(readLine());
    
console.log(factorial(number));

