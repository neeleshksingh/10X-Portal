function dupli(arr) {
    let ans = []
    for (i = 0; i < arr.length; i++) {
        if (ans.indexOf(arr[i]) === -1) {
            ans.push(arr[i]);
        }
    }
    return ans;
}
let arr = [1, 1, 1, 4, 5, 6, 4, 5, 6, 7, 8, 9, 9]
console.log(...dupli(arr))