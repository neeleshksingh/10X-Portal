let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() 
{
    idx++;
    return data[idx - 1].trim();
}

//-------------------------------------
let option1 = 0;
let option2 = 0;
let option3 = 0;
let choice = parseInt(readLine());
while(choice != 0)
{
    if(choice == 1)
    {
        option1 ++;
    }
    else if(choice == 2)
    {
        option2++;
    }
    else if(choice == 3)
    {
        option3++;
    }
    choice = parseInt(readLine());
}
console.log(option1);
console.log(option2);
console.log(option3);