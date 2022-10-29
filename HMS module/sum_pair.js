// Set Example:
// Question:
// Find the first pair that sums up to a sum.
// arr = [3, 5, 1, 8, 7, 10, 2]
// Sum = 10
// [3, 7] -> answer
// [8, 2]
// [3, 5, 1, 8, 7, 10, 2]
//  0  1  2  3  4   5  6
// 10 - 3 = 7
// 10 - 5 = 5
// 10 - 1 = 9
// 10 - 8 = 2
// 10 - 7 = 3
// Set:
// 3
// 5
// 1
// 8
// 7
// 10
// [3, 7]
// Solution:

function findPair(arr, sum){
    let set = new Set();
    for(let i = 0; i<arr.length; i++){
        if(set.has(sum - arr[i])){
            console.log(arr[i], sum - arr[i]);
            break;
        }
        else
            set.add(arr[i]);
    }
}
 
findPair([3, 5, 1, 8, 7, 10, 2], 10);
/**
 * set = {3, 5, 1, 8}
 *
 *  i   arr[i]  sum - arr[i]    set.has(sum - arr[i])
 *  0     3         7               F
 *  1     5         5               F
 *  2     1         9               F
 *  3     8         2               F
 *  4     7         3               T ---> answer
 */
