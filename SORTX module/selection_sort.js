let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
function selectionSort(inputArr) {
    let n = inputArr.length;
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j;
            }
         }
         if (min != i) {
             let tmp = inputArr[i];
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;
        }
    }
    return inputArr.join(" ");
}
let NoOfTestcases = parseInt(readLine());
for(let i=0 ; i<NoOfTestcases ;i++){
let n = parseInt(readLine());
let inputArr = readLine().split(" ").map(Number);
console.log(selectionSort(inputArr));
}