let fs = require("fs");
let data = fs.readFileSync('./in.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertLevelOrder(arr, i, n) {
        if (i >= n) {
            return null;
        }
        let tree = new Node(arr[i]);
        tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
        tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
        return tree;
    }
}

function isIdentical(tree1, tree2) {
    // write your code here
    if (tree1 == null && tree2 == null)
        return true;
    if (tree1 != null && tree2 != null) {
        return isIdentical(tree1.left, tree2.left) &&
            isIdentical(tree1.right, tree2.right);
    }
    return false;

}

function convertToNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "N") {
            arr[i] = parseInt(arr[i]);
        } else {
            arr[i] = null;
        }
    }
}

let arr1 = readLine().split(" ");
let arr2 = readLine().split(" ");
convertToNumber(arr1);
convertToNumber(arr2);
let tree1 = new BinaryTree();
tree1.root = tree1.insertLevelOrder(arr1, 0, arr1.length);
let tree2 = new BinaryTree();
tree2.root = tree2.insertLevelOrder(arr2, 0, arr2.length);


if (isIdentical(tree1.root, tree2.root)) {
    console.log("True");
} else {
    console.log("False");
}