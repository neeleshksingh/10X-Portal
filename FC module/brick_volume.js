let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------

function calculateTotalPriceOfBricks(dimensions, brickCount){
    let x = dimensions[0];
    let y = dimensions[1];
    if (x > 0 && y > 0) {
      return x * y * 100 * brickCount * 0.00005;
    } else if (x == -1 && y > 0) {
      return 60 * y * 100 * brickCount * 0.00005;
    } else if (x == -1 && y == -1) {
      return 60 * 40 * 100 * brickCount * 0.00005;
    } else if (x > 0 && y == -1) {
      return x * 40 * 100 * brickCount * 0.00005;
    }
  }
  // Do not change anything below this line
  function volume(length=100,width=60,height=40){
    return length*width*height;
  }
  function calculatePrice(volume, price=0.00005){
      return Math.floor(volume*price);
  }
  function ConvertToNumber(list){
      for(let each in list){
          list[each]=Number(list[each]);
      }
  }
  let brickCount = parseInt(readLine());
  dimensions = readLine().split(" ");
  ConvertToNumber(dimensions);
  totalPrice = calculateTotalPriceOfBricks(dimensions, brickCount);
  console.log(Math.floor(totalPrice));