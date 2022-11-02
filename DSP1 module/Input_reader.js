let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

class InputReader {
    constructor() {
    }
    readStrings(noOfInputs) {
        for (let i = 0; i < noOfInputs; i++) {
            let n = readLine()   
            console.log(i, n)
        }
    }
    readIntegers(noOfInputs) {
        for (let i = 0; i < noOfInputs; i++) {
            let n = parseInt(readLine())
            console.log(i, n)
        }
    }
    readFloats(noOfInputs) {
        for (let i = 0; i < noOfInputs; i++) {
            let n = parseFloat(readLine())
            n = n.toFixed(2)
            console.log(i, n)
        }
    }
}
let reading = new InputReader()
let n = parseInt(readLine())
let type = readLine()
{
    if (type == 'string') {
        reading.readStrings(n)
    }
    else if (type == 'integer') {
        reading.readIntegers(n)
    }
    else if (type == 'float') {
        reading.readFloats(n)
    }
}