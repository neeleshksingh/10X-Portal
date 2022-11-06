function lucky_sevens(arr) {
    let len = arr.length;
    for (let i = 2; i < len; i++) {
        if (arr[i] + arr[i - 1] + arr[i - 2] === 7) {
            return true;
        }
    }
    return false;
}
let arr = [2, 1, 5, 1, 0]
let arr2 = [1, 6]
console.log(lucky_sevens(arr))
console.log(lucky_sevens(arr2))