let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// GCD: Recursive
// Description
// // Write a program that computes the GCD of two positive integers using Euclid's algorithm. 
// Your implementation should be recursive in nature. Given two positive integers a, b (a >= b), 
// Euclid's algorithm is defined as follows.

// // GCD(a, b) = b, if b is a divisor of a
// //           = GCD(b, a%b), otherwise
// // Input/Output format
// // You only need to implement the gcd function provided in the template. 
// The template takes care of reading the input, passing it on to gcd function and printing the result.

// // Sample input
// // 2
// // 180 48
// // 105 1001
// // Sample output
// // 12
// // 7
// // Explanation
// // First line contains 2, meaning there are 2 test cases.
// // First test case is 180 48. The greatest common divisor of 180 and 48 is 12. 
// So, the first line of output is 12.
// // Second test case is 105 1001. The greatest common divisor of 105 and 1001 is 7. 
// So, the second line of output is 7.

function getGCD(a, b) {
    if (a == 0 && b == 0) {
        console.log("Infy");
        return -1;
    } else if (a == 0) {
        return b;
    } else if (b == 0) {
        return a;
    } else if (b % a == 0) {
        return a;
    } else if (a <= b) {
        return getGCD(a, b % a);
    } else {
        return getGCD(b, a % b);
    }
}

let n = parseInt(readLine())
for(let i=0;i<n;i++){
    let [a,b] =  readLine().split(' ').map(Number)
    let num = [a,b]
    console.log(getGCD(a,b));
}
