let fs = require("fs");
let data = fs.readFileSync('./input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//-----------------------------------

// Ranger Product
// Power Rangers S.P.D. is the thirteenth season of the American television series, Power Rangers. The Red ranger defines the ranger product as:

// An array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Red ranger asks blue ranger:

// Given an array nums of n integers where n > 0, print the ranger product array as space seperated values.

// If the array has only 1 element, print 1 as result.

// Being the friend of Blue ranger, can you help him to solve this?

// Note:
// Please solve it without division and in O(n).
// Elements of the array can be zero 0 as well.
// Input Format
// First line denotes the number of testcases.

// First line of each testcase denotes the size of the array nums.
// The next line contains the n elements as space seperated integers.
// Output Format
// One line for each testcase, denoting the result array as space-seperated integers.

// Sample Input
// 1
// 4
// 1 2 3 4
// Sample Output
// 24 12 8 6

// let n = parseInt(readLine())
// for(let i=0;i<n;i++)
// {
//     let m = parseInt(readLine())
//     let arr = readLine().split(' ')
//     for(let j =0;j<m;j++)
//     {
//         arr[j] = parseInt(arr[j])
//     }console.log(arr)
// }

let n = parseInt(readLine());
for (j = 0; j < n; j++) {
  let arr_size = parseInt(readLine());
  let arr = readLine().split(" ").map(Number);
  let mult = 1;
  for (let i = 0; i < arr_size; i++) {
    mult = mult * arr[i];
  }
  let ar = [];
  if (mult !== 0) {
    for (let i = 0; i < arr_size; i++) {
      ar[i] = mult / arr[i];
    }
  } else {
    let mult1 = 1;
    for (let i = 0; i < arr_size; i++) {
      if (arr[i] != 0) {
        mult1 = mult1 * arr[i];
      }
    }
    for (let i = 0; i < arr_size; i++) {
      if (arr[i] != 0) {
        ar[i] = 0;
      } else {
        ar[i] = mult1;
      }
    }
  }
  console.log(...ar);
}