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
for(let i = 0; i<n;i++)
{
    arr[i] = parseInt(arr[i])
}console.log(arr)
let max = 1
let len = 1
for(let i =1;i<n;i++)
{
    if(arr[i]>arr[i-1])
    {
        len++
    }
    else
    {
        if(max < len)
        {
            max = len
        }
        len =1
    }
}
if(max<len)
{
    max =len
}
let max_ending_here = 0;
let max_so_far = 0;
let start = 0;
let _start = 0;
let end = -1;

    for(let i=0; i<arr.length; i++) {
        max_ending_here = max_ending_here + arr[i];
        if (max_ending_here < 0) {
            max_ending_here = 0;
            _start = i+1;
        }

        if (max_ending_here > max_so_far) {
            max_so_far = max_ending_here;
            start = _start;
            end = i;
        }
    }console.log(max, _start,end)