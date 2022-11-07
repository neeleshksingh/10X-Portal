function lucky_sevens(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] + arr[i + 1] + arr[i + 2] === 7) {
            return true;
        }
    }
    return false;
}
let arr1 = [2, 1, 5, 1, 0]
let arr2 = [1, 6]
console.log(lucky_sevens(arr1))
console.log(lucky_sevens(arr2))