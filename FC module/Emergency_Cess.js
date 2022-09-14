let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------


function calculateTotalFund(salaries, peopleCount)
{
    let sum=0;
    for(let i=0;i<peopleCount;i++){
        sum  += Math.ceil((7*salaries[i])/100)
    }
    return sum;
}
function ConvertToNumber(list){
    for(let each in list){
        list[each]=Number(list[each])
    }
}
let peopleCount = parseInt(readLine());
let salaries = readLine().split(" ");
ConvertToNumber(salaries);
let totalFund = calculateTotalFund(salaries, peopleCount);
console.log(totalFund);