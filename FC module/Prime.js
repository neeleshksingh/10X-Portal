let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------
function isPrime(number){
    // You can start below this
    if(number===1)
    {
        return ("False");
    }
    else if(number===2)
    {
        return ("True");
    }
    else
    {
    for(let i=2;i<number;i++){
    if(number%i===0)
    {
        return ("False");
    }
}
return ("True");
}
}
//Please don't change anything below this line.
let number=parseInt(readLine());
console.log(isPrime(number));

//Alternative Method
/*
function isPrime(inputNumber){
    // You can start below this
    let sqrtnum=Math.floor(Math.sqrt(inputNumber));
    if(inputNumber == 1)
    {
        return("False");
    }
    for(let i=2; i<sqrtnum+1; i++) { 
        if(inputNumber % i == 0) {
            return ("False");
        }
    }
    return ("True");
}
//Please don't change anything below this line.
let number=parseInt(readLine());
console.log(isPrime(number));

*/