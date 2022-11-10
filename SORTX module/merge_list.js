let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
// 3
// 4
// 2 6 12 34 
// 1 9 20 1000 
// 23 34 90 2000


function mergeKArrays(arr , a,  output)
    {
        var c = 0;
        for (i = 0; i < a; i++) {
            for (j = 0; j < 4; j++)
                output = arr[i][j];
        }
        return output.sort((a,b)=>a-b);
    }
    function printArray(arr , size) {
        for (i = 0; i < size; i++)
            console.log(arr[i] + " ");
    }
let t = parseInt(readLine())
let n = parseInt(readLine())
for (let i = 0; i < t; i++) {
    let arr1 = readLine().split(' ')
    for (let j = 0; j < n; j++) {
        arr1[j] = parseInt(arr1[j])
    }
    mergeKArrays(arr1, t, output);
    var output = Array(t * n).fill(0);
console.log(printArray(output, t * n));
}


