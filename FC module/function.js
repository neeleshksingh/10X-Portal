let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
 //-----------------------------------

 let electricityOffice = [ 3157 , 7764 , 4054 , 3305 ];
 let govtHighSchool = [1038, 7576, 1718, 5658];
 let waterWorksOffice = [1726, 4260, 8200, 1489];

 let voterID = parseInt(readLine());

 let i;
 let arrayLengthelectricityOffice = electricityOffice.length;
 let arrayLengthgovthighschool = govtHighSchool.length;
 let arrayLengthwaterworkoffice = waterWorksOffice.length;
 let count = 0;
 for(i=0;i<arrayLengthelectricityOffice;i++)
 {
    if(electricityOffice[i] === voterID)
    {
        console.log("ID Found");
        count++;
        break;
    }
 }
 for(i=0;i<arrayLengthgovthighschool;i++)
 {
    if(govtHighSchool[i] === voterID)
    {
        console.log("ID Found");
        count++;
        break;
    }
 }
 for(i=0;i<arrayLengthwaterworkoffice;i++)
 {
    if(waterWorksOffice[i] === voterID)
    {
        console.log("ID Found");
        count++;
        break;
    }
 }
 if(count === 0)
 {
    console.log("ID not found");
 }