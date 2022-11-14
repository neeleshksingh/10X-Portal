function mergeSort(A, start, end) {
    if (start < end) {
        let mid = parseInt((start + end) / 2);
        mergeSort(A, start, mid);
        mergeSort(A, mid + 1, end);
        merge(A, start, mid, end);
    }
}
function merge(A, start, mid, end) {
    const n1 = mid - start + 1;
    const n2 = end - mid;
    const L = [];
    const R = [];
    for (let i = 0; i < n1; i++) {
        L[i] = A[start + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = A[mid + 1 + j];
    }
    let i = 0;
    let j = 0;
    let k = start;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            A[k] = L[i];
            i++; k++;
        } else {
            A[k] = R[j];
            j++; k++;
        }
    }
    while (i < n1) {
        A[k] = L[i];
        i++; k++;
    }
    while (j < n2) {
        A[k] = R[j];
        j++; k++;
    }
}
let A = [9,1,10,5,2,3];
console.log(...A);
let n = A.length;
mergeSort(A, 0, n-1);
console.log(...A);
