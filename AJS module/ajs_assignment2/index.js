/*function dupli(arr) {
    let ans = []
    for (i = 0; i < arr.length; i++) {
        if (ans.indexOf(arr[i]) === -1) {
            ans.push(arr[i])
        }
    }
    return ans;
}
let arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]
console.log(...dupli(arr))
// -1]  [0 1 2 3]  [1,2,3,5,9,8]*/

let input= [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]
let set= new Set(input)
console.log(...set)