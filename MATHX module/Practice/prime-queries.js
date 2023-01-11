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

// Prime queries
// A prime number is defined as a number-
// which is not divisible by any number except 1 and itself.
// Smallest prime number is 2.
// User makes Q queries, in each query a number is supplied.
// For each query, Count the number of prime numbers smaller than or equal to the query number. 
// User also keeps a limit on the maximum number that can be provided in any 
// of the query, which is given in the input.
// Constraints
// 1<= Maximum Query number(Nmax)<= 100000
// 1<= number of queries<= 100000
// Input
// First line of the input contains two integers first representing the maximum query 
// number(Nmax) and the number of queries(Q) respectively. Following Q lines contains 
// an integer each representing the query number(N<= Nmax).
// Output
// For each query print the number of prime numbers smaller than or equal to the number.
// Example
// Input:
// 20 5
// 3
// 11
// 16
// 1
// 19
// Output:
// 2
// 5
// 6
// 0
// 8
// Explanation:
// Primes less than equals 3 -> 2,3
// Primes less than equals 11 -> 2,3,5,7,11
// Primes less than equals 16 -> 2,3,5,7,11,13
// Primes less than equals 1 -> No such number
// Primes less than equals 19-> 2,3,5,7,11,13,17,19
// Note that 20 provided in the first line of the input makes sure that user wont provide any input >20.

/*

let [n,m] = readLine().split(' ').map(Number)
let q = [n,m]
let arr = readLine()
for(let i=n;i<m;i++){
    arr.push(arr[i])
}
console.log(arr);
  */


function segmentedSieve(L, R) {
    let primes = [];
    let isPrime = new Array(R - L + 1).fill(true);
    let sqrtR = Math.sqrt(R);
    for (let i = 2; i <= sqrtR; i++) {
        for (let j = Math.max(2, Math.ceil(L / i)); i * j <= R; j++) {
            isPrime[i * j - L] = false;
        }
    }
    for (let i = L; i <= R; i++) {
        if (i === 2 || (i > 2 && isPrime[i - L])) {
            primes.push(i);
        }
    }
    return primes;
}

let [nmax, queries] = readLine().split(' ').map(Number)
let arr = []
for (let i = 0; i < queries; i++) {
    arr[i] = parseInt(readLine())
}
for (let i = 0; i < queries; i++) {
    let primes = segmentedSieve(2, arr[i])
    console.log(primes.length);
}





//console.log(arr);
