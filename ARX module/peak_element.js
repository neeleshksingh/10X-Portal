let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-----------------------------------

// Peak Element
// Description
// A peak element in an array is the one that is not smaller than its neighbours. For corner elements, we need to consider only one neighbour. Given an array of integers of size N, find the index of its first peak elements.

// Input format
// First line contains a positive integer t, denoting the number of test cases. For every test case there are two lines. First line contains a positive integer n denoting the number of elements in the array and second line contains n space separated elements of array.

// Output format
// Output t lines. For each test case print the 1 based index (1<=i<=n) for the first peak element in the array and -1 if there is no peak element.

// Sample input
// 4
// 5
// 1 3 6 4 9  
// 5
// 1 2 3 4 5
// 5 
// 6 4 3 5 1
// 3
// 1 1 1
// Sample output
// 3
// 5
// 1
// -1
// Explanation
// In the first test case, element on index 3 that is 6 is the first peak element as it is greater than both of its neighbours, 3 and 4.  
// In the second test case, element on index 5 is the first peak element. As it is a corner element, it has only one neighbour 4 which is smaller than 5.
// In the third test case, we have two peak elements at index 1 and at index 4. As 1<4 so element at index 1 is first peak element.

let n = parseInt(readLine());
for (j = 0; j < n; j++) {
    let arr_size = parseInt(readLine());
    let arr = readLine().split(" ").map(Number);
    let mult = 1;
    for (let i = 0; i < arr_size; i++) {
        mult = mult * arr[i];
    }console.log(arr)
}