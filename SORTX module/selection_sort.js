//indx   0 1 2 3 4 5
let A = [9, 5, 1, 4, 3, 2];
        // [2, 5, 1, 4, 3, 9], [2, 1, 5, 4, 3, 9], [2, 1, 3, 4, 5, 9]
let n = A.length;
console.log(A);
for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (j = i + 1; j < n; j++) {
        if(A[j] < A[min_idx]) {
            min_idx = j;
        }
    }
    // swap
    let temp = A[i];
    A[i] = A[min_idx];
    A[min_idx] = temp;

}

console.log(A);


// Memory Write 

A = [1,3,2,5,1,3,4,5,3]
