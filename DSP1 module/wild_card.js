let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

function print(str, index) {
    if (index === str.length) {
      console.log(str.join(""));
      return;
    }
    if (str[index] === "?") {
      str[index] = "0";
      print(str, index + 1);
      str[index] = "1";
      print(str, index + 1);
      str[index] = "?";
    } else print(str, index + 1);
  }
  var input = readLine();
  var str = input.split("");
  print(str, 0);