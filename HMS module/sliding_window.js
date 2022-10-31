/*Count distinct elements in every window of size k
Given an array of size N and an integer K, return the count of distinct numbers in all windows of
size K.
Examples:
Input: arr[] = {1, 2, 1, 3, 4, 2, 3}, K = 4
Output: 3 4 4 3
Explanation: First window is {1, 2, 1, 3}, count of distinct numbers is 3
                      Second window is {2, 1, 3, 4} count of distinct numbers is 4
                      Third window is {1, 3, 4, 2} count of distinct numbers is 4
                      Fourth window is {3, 4, 2, 3} count of distinct numbers is 3
Input: arr[] = {1, 2, 4, 4}, K = 2
Output: 2 2 1
Explanation: First window is {1, 2}, count of distinct numbers is 2
                      First window is {2, 4}, count of distinct numbers is 2
                      First window is {4, 4}, count of distinct numbers is 1*/

function countWindowDistinct(win, k) {
    let dist_count = 0;

    for (let i = 0; i < k; i++) {
        let j;
        for (j = 0; j < i; j++)
            if (win[i] == win[j])
                break;
        if (j == i)
            dist_count++;
    }
    return dist_count;
}
function countDistinct(arr, N, K) {
    for (let i = 0; i <= N - K; i++)
        console.log(countWindowDistinct(arr.slice(i, arr.length), K));
}
let arr = [1, 2, 1, 3, 4, 2, 3], K = 4;
countDistinct(arr, arr.length, K);