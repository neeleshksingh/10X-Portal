/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated
according to the following rules:
Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
Example 1:
Input: board =
     0   1   2   3   4   5   6   7   8
[0 ["5","3",".",".","7",".",".",".","."]
,1 ["6",".",".","1","9","5",".",".","."]
,2 [".","9","8",".",".",".",".","6","."]
,3 ["8",".",".",".","6",".",".",".","3"]
,4 ["4",".",".","8",".","3",".",".","1"]
,5 ["7",".",".",".","2",".",".",".","6"]
,6 [".","6",".",".",".",".","2","8","."]
,7 [".",".",".","4","1","9",".",".","5"]
,8 [".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:
Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Constraints:
board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
*/

// Javascript Program to check whether given sudoku
// board is valid or not

// Checks whether there is any duplicate
// in current row or not
let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function validate(board) {
    for (let row = 0; row < 9; row++) {
        let map = new Map()
        for (let col = 0; col < 9; col++) {
            let ch = board[row][col]
            if (ch != '.' && map.has(ch)) {
                return "False"
            }
            map.set(ch, true)
        }
    }
    for (let row = 0; row < 9; row++) {
        let map = new Map()
        for (let col = 0; col < 9; col++) {
            let ch = board[col][row]
            if (ch != '.' && map.has(ch)) {
                return "False"
            }
            map.set(ch, true)
        }
    }
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let map = new Map()
            for (let row = i; row < 3; row++) {
                for (let col = j; col < 3; col++) {
                    let ch = board[row][col]
                    if (ch != '.' && map.has(ch)) {
                        return "False"
                    }
                    map.set(ch, true)
                }
            }
        }
    }
    return "True"
}
let sudoku = []
for (let i = 0; i < 9; i++) {
    sudoku[i] = readLine().split(" ")
}
console.log(validate(sudoku))