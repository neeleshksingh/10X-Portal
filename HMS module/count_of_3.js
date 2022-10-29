// Question:
// Find the first number to finish a count of 3.
// arr = [2, 7, 1, -3, 8, 10, -3, -3, 1, 1]
// answer = -3
// 2 -> 1
// 7 -> 1
// 1 -> 1
// -3 -> 3
// 8 -> 1
// 10 -> 1
// Solution:

function countThree(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            if (map.get(arr[i]) === 2) {
                return arr[i];
            }
            map.set(arr[i], map.get(arr[i]) + 1); //map.set(-3, 1 + 1)
        }
        else {
            map.set(arr[i], 1);
        }
    }
    return undefined;
}
 
console.log(countThree([2, 7, 1, -3, 8, 10, -3, -3, 1, 1]));
 
/*
    map
    2 => 1
    7 => 1
    1 => 1
    -3 => 2
    8 => 1
    10 => 1
 
    i   arr[i]  map.has(arr[i])     map.get(arr[i])
    0   2           F
    1   7           F
    2   1           F
    3   -3          F
    4   8           F
    5   10          F
    6   -3          T                    1
    7   -3          T                    2 -> map.get(-3)
*/
