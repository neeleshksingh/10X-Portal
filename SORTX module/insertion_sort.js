let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n = parseInt(readLine())
let arr = []
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()))
    let arr1 = readLine().split(' ')
    for (let j = 0; j < arr[i]; j++) {
        arr1[j] = parseInt(arr1[j])
    }
    console.log(...arr1.sort((a, b) => a - b))
}

/*
console.log(A);
let n = A.length;
for(let steps=0;steps < n-1;steps++) {
    let flag = false;
    for(let i = 0; i < n - steps - 1; i++) {
        if(A[i] > A[i+1]) {
            // swap
            flag = true;
            let temp = A[i];
            A[i] = A[i+1];
            A[i+1] = temp;
        }
    }
    if(flag == false) {
        break;
    }
}
/*
console.log(A);console.log(A);
let n = A.length;
for(let steps=0;steps < n-1;steps++) {
    let flag = false;
    for(let i = 0; i < n - steps - 1; i++) {
        if(A[i] > A[i+1]) {
            // swap
            flag = true;
            let temp = A[i];
            A[i] = A[i+1];
            A[i+1] = temp;
        }
    }
    if(flag == false) {
        break;
    }
}

console.log(A);*/

/*

//indx   0 1 2 3 4 5
let A = [9,5,1,4,3,2];
        // [5,9,1,4,3,2]
        // [1,4,5,9,3,2]

// let's assume a sorted array is given , we have to insert an element in that sorted array
// i 0 1  2 3  4
// A = [2,3,5,10,15]
   

// i = 4
console.log(A);
let n = A.length;
for(i=1;i<n;i++) {
    key = A[i];
    j = i - 1;
    // T.C  = O(n) { n -> no of integers in the array }
    while ( j>=0 && A[j] > key) {
        A[j+1] = A[j];
        j--;
    }
    A[j+1] = key;
}

console.log(A);

// Time complexity for Insertion Sort

// Best Case A = [10,12,15,20,25] ans = [10,12,15,20,25]
// Give array is already sorted in Ascending Order
// Que it's asking us to sort it in Ascending Order 
    // T.C =  O(n) { n -> no of elements present in the array }

// Worst Case A = [25, 20, 15, 12, 10] ans = [10,12,15,20,25]
// Give array is already sorted in Descending Order
// Que it's asking us to sort it in Ascending Order 
// T.C =  O(n*n) { n -> no of elements present in the array }

// Average Case A = [25, 10, 35, 12, 90] ans = [10,12,25,35,90]
// Given array is a random array 
// T.C =  O(n*n) { n -> no of elements present in the array }




This paste expires in <1 day. Public IP access. Share whatever you see with others in seconds with Context.Terms of ServiceReport this
*/