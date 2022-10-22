const { captureRejectionSymbol } = require("events");
let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//------------------------------------------------

function checkPalindrome(string) {

    let len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'NO';
        }
    }
    return 'YES';
}
let string = readLine()
let ans = checkPalindrome(string.toLowerCase());
console.log(ans);
