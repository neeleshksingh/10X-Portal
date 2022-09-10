/*Push -> appends new elements to the end of the array and returns new length of the array.
    [2, 1, 4, 6, 3]
    push: 5, 7
    [2, 1, 4, 6, 3, 5, 7]
    Unshift -> Inserts new elements at the start of an array, and returns the new length of the array.
    [2, 1, 4, 6, 3]
    unshift: 5, 7
    [5, 7, 2, 1, 4, 6, 3]
    Shift -> Removes the first element from an array and returns it. If array is empty returns undefined.
    If the array is empty, undefined is returned and the array is not modified.
    [5, 7, 2, 1, 4, 6, 3]
    shift: remove 5 -> [7, 2, 1, 4, 6, 3]
    []
    shift: undefined
    Pop -> remove elements from end of the array.
    Splice -> Remove elements from specific index of the array.
            1) first parameter -> start index of deletion,
            2) second parameter -> no of elements to be deleted from start index.
            3) The second parameter is optional. If you don't specify it, all elements after start
             index will be deleted.
            4) returns deleted elements.
             [2, 1, 4, 6, 3] -> [2, 1]
              0  1  2  3  4
             first parameter -> 2
             second parameter ->
             return -> [4, 6, 3]
             [2, 1, 4, 6, 3] -> [2, 1, 3]
              0  1  2  3  4
             first parameter -> 2
             second parameter -> 2
             return -> [4, 6]
    Slice ->    [2, 1, 4, 6, 3]
                 0  1  2  3  4
                start -> 1
                end -> 3
                return -> [1, 4]
    indexOf -> Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
            1) first parameter (searchValue) -> Value to locate
            2) second parameter (fromIndex) —> The array index at which to begin the search.
            If fromIndex is omitted, the search starts at index 0.
            [2, 1, 4, 2, 3]
             0  1  2  3  4
                indexOf 2 -> 0
                indexOf 5 -> -1
                indexOf(2, 1) -> 3
                indexOf(2, 4) -> -1
    lastIndexOf -> Returns the index of the last occurrence of a specified value in an array, or -1 if it is
    not present.
            1) first parameter (searchValue) -> Value to locate
            2) second parameter (fromIndex) —> The array index at which to begin searching backward.
            If fromIndex is omitted, the search starts at the last index in the array.
            [2, 1, 4, 2, 3]
             0  1  2  3  4
                lastIndexOf 2 -> 3
                lastIndexOf 5 -> -1
                lastIndexOf(2, 1) -> 0
                lastIndexOf(1, 0) -> -1
9:50*/
let arr = [2, 1, 8, 9, 4];
let l1 = arr.push(5, 6);
console.log(arr);
console.log(l1);
let l2 = arr.unshift(21, 9);
console.log(arr);
console.log(l2);
let x = arr.shift();
console.log(arr);
console.log(x);
let a = arr.pop();
console.log(a);
console.log(arr);
//Splice
/*case 1*/
let y = arr.splice(1, 2);
console.log(arr);
console.log(y);
/*case 2*/
let z = arr.splice(3);
console.log(arr);
console.log(z);
let index = arr.indexOf(9);
console.log(index);
index = arr.indexOf(9, 2);
console.log(index);
index = arr.indexOf(9, 5);
console.log(index);
index = arr.indexOf(9, 0);
console.log(index);
index = arr.lastIndexOf(9);
console.log(index);
index = arr.lastIndexOf(9, 3);
console.log(index);
index = arr.lastIndexOf(9, 4);
console.log(index);