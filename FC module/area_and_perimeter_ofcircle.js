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

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    getArea() {
      let x;
      if (this.radius < 0) {
        return 0;
      }
      x = 3.14 * this.radius * this.radius;
      x = Math.ceil(x);
      return x;
    }
    getCircumference() {
      if (this.radius < 0) {
        return 0;
      }
      let x;
      x = 2 * 3.14 * this.radius;
      x = Math.ceil(x);
      return x;
    }
  }
  // -------- Do NOT edit anything below this line ----------
  let oneCircle = new Circle(parseInt(readLine()));
  console.log(oneCircle.getArea());
  console.log(oneCircle.getCircumference());