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
function notInRow(arr,row)
{
    // Set to store characters seen so far.
    let st = new Set();

    for(let i = 0; i < 9; i++)
    {
    
        // If already encountered before,
        // return false
        if (st.has(arr[row][i]))
            return false;

        // If it is not an empty cell, insert value
        // at the current cell in the set
        if (arr[row][i] != '.')
            st.add(arr[row][i]);
    }
    return true;
}

// Checks whether there is any duplicate
// in current column or not.
function notInCol(arr,col)
{
    let st = new Set();

    for(let i = 0; i < 9; i++)
    {
    
        // If already encountered before,
        // return false
        if (st.has(arr[i][col]))
            return false;

        // If it is not an empty cell,
        // insert value at the current
        // cell in the set
        if (arr[i][col] != '.')
            st.add(arr[i][col]);
    }
    return true;
}

// Checks whether there is any duplicate
// in current 3x3 box or not.
function notInBox(arr,startRow,startCol)
{
    let st = new Set();

    for(let row = 0; row < 3; row++)
    {
    for(let col = 0; col < 3; col++)
    {
        let curr = arr[row + startRow][col + startCol];

        // If already encountered before, return
        // false
        if (st.has(curr))
            return false;

        // If it is not an empty cell,
        // insert value at current cell in set
        if (curr != '.')
            st.add(curr);
    }
}
return true;
}


// Checks whether current row and current column and
// current 3x3 box is valid or not
function isValid(arr,row,col)
{
    return notInRow(arr, row) && notInCol(arr, col) &&
    notInBox(arr, row - row % 3, col - col % 3);
}


function isValidConfig(arr,n)
{
    for(let i = 0; i < n; i++)
{
    for(let j = 0; j < n; j++)
    {
        
        // If current row or current column or
        // current 3x3 box is not valid, return
        // false
        if (!isValid(arr, i, j))
            return false;
    }
}
return true;
}

// Driver's code
let board = [[ '5', '3', '.', '.', '7', '.', '.', '.', '.' ],
        [ '6', '.', '.', '1', '9', '5', '.', '.', '.' ],
        [ '.', '9', '8', '.', '.', '.', '.', '6', '.' ],
        [ '8', '.', '.', '.', '6', '.', '.', '.', '3' ],
        [ '4', '.', '.', '8', '.', '3', '.', '.', '1' ],
        [ '7', '.', '.', '.', '2', '.', '.', '.', '6' ],
        [ '.', '6', '.', '.', '.', '.', '2', '8', '.' ],
        [ '.', '.', '.', '4', '1', '9', '.', '.', '5' ],
        [ '.', '.', '.', '.', '8', '.', '.', '7', '9' ]];

// Function call
console.log((isValidConfig(board, 9) ?
                "YES" : "NO"));


// This code is contributed by rag2127
