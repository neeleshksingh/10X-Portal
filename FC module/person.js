let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------


// Define the required class here...
function Person(name, age){
this.name= name
this.age= age
}
// DO NOT CHANGE ANYTHING BELOW THIS LINE
let inputString = readLine().split(" ");
let character = new Person(inputString[0],inputString[1]);
console.log(character.name);
console.log(character.age);