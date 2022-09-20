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

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  rectangleArea() {
    if (this.length <= 0 || this.width <= 0) {
      return 0;
    }
    else {
      return this.length * this.width;
    }
  }
  rectanglePerimeter() {
    if (this.length <= 0 || this.width <= 0) {
      return 0;
    }
    else {
      return 2 * (this.length + this.width);
    }
  }
}

let length = parseInt(readLine());
let width = parseInt(readLine());
let newRectangle = new Rectangle(length, width);
console.log(newRectangle.rectangleArea());
console.log(newRectangle.rectanglePerimeter());