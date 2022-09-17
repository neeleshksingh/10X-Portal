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
class Rectangle
{
    constructor(length, width){
    this.length = length;
    this.width = width;
    }
    calculatePerimeter(length,width)
    {
        return ((this.length*2) + (this.width*2))
    }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let input=readLine().split(" ");
let length = parseInt(input[0]);
let width = parseInt(input[1]); 
let rectangle =new Rectangle(length, width);
console.log(rectangle.calculatePerimeter());