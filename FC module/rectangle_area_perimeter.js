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
    constructor(length,width) {
      this.length = length;
	  this.width = width;
    }
    rectangleArea() {
      let x;
      if (this.length < 0) {
        return 0;
      }
      else if(this.width < 0)
      {
        return 0;
      }
      x = Math.ceil(x);
      x = this.length * this.width;
      return x;
    }
    rectanglePerimeter() {
      if (this.length < 0) {
        return 0;
      }
      else if(this.width < 0)
      {
        return 0;
      }
      let x;
      x = Math.ceil(x);
      x = 2 *(this.length + this.width);
      return x;
    }
  }

let length = parseInt(readLine());
let width  = parseInt(readLine());
let newRectangle =new Rectangle(length,width);
console.log(newRectangle.rectangleArea());
console.log(newRectangle.rectanglePerimeter());