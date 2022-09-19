let fs = require("fs");
const { get } = require("http");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------

// -------- Do NOT edit anything above this line ----------



// Your class should be named `Circle`.
// Method to get area should be named `getArea`
// Method to get circumference should be named `getCircumference`.
// Your class should take radius `r` as input when creating an object.
class Circle
{
    constructor(radius)
    {
        this.radius = radius
    }
    radius()
    {
        return this.radius
    }
    getArea()
    {
        return (Math.ceil(Math.PI * this.radius * this.radius))
    }
    getCircumference()
    {
        return (Math.ceil(2 * Math.PI * this.radius))
    }
}


// -------- Do NOT edit anything below this line ----------

let oneCircle = new Circle(parseInt(readLine()));
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());