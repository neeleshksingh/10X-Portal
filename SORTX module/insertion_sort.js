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