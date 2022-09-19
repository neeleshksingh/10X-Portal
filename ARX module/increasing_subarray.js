let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

//-----------------------------------
// Fisrt line has N i.e number of elements then follow N numbers in a line. (N >= 2)

// Output
// Print a list of 3 elements where the first one is the length of the subarray and the next 2 are the starting and the ending index Note : all elements of the list must be printed in the same line.

// Example
// Input:

// 5

// 2 7 6 11 20

// Output:

// 3 2 4

// The longest Increasing subarray is [6, 11, 20] and the starting and ending indices are [2, 4]

let n = parseInt(readLine())
let arr = readLine().split(' ')
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(arr[i])
}
let max = 1
let len = 1
let end
for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
        len++
    }
    else {
        if (max < len) {
            max = len
        }
        len = 1
    }

    if (max < len) {
        max = len
        end = i
    }
}
let start = end - max + 1
console.log(max, start, end)