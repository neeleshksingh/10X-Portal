let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------

class BankAccount {
    constructor(balance = 0) {
      this.balance = balance;
    }
    credit(x) {
      return (this.balance = this.balance + x);
    }
    debit(y) {
      return (this.balance = this.balance - y);
    }
  }

let n = parseInt(readLine());
let myAccount = new BankAccount();
for (let index = 0; index < n ; index++) 
{
  let currentTransaction = readLine().split(" ");
  let typeOfTransaction = currentTransaction[0];
  let transactionAmount = parseInt(currentTransaction[1]);
  if (typeOfTransaction === "d") 
  {
    myAccount.debit(transactionAmount);
  } else 
  {
    myAccount.credit(transactionAmount);
  }
}
console.log(myAccount.balance);