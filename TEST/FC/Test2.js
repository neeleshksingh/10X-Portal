let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ---------- 

// Define your class here
class Biller{
    constructor(bill=0)
    {
        this.bill = bill
    }
    addToBill(price)
    {
        this.bill += price 
    }
    removeFromBill(price)
    {
        this.bill -= price 
    }
    getBill()
    {
        return this.bill
    }
}

// -------- DO NOT CHANGE ANYTHING BELOW THIS LINE --------
let n = parseInt(readLine());
let biller = new Biller();
for (let i = 0; i < n; i++) {
  let input = readLine().split(" ");
  let type = input[0];
  let price = parseInt(input[1]);
  if (type === "+") {
    biller.addToBill(price);
  } else {
    biller.removeFromBill(price);
  }
}
console.log(biller.getBill());